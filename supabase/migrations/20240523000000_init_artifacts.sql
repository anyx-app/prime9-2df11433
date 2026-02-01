SET search_path TO proj_044fd78b;

-- 1. Create Artifacts Table
CREATE TABLE IF NOT EXISTS artifacts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    description text,
    price numeric NOT NULL,
    stock_level integer DEFAULT 0,
    category text,
    series text,
    images jsonb,
    tech_specs jsonb,
    features jsonb,
    is_featured boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- 2. Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid, -- Intentionally NOT referencing auth.users directly to avoid schema issues, app level validation
    status text DEFAULT 'pending',
    total_amount numeric NOT NULL,
    shipping_info jsonb,
    items jsonb, -- Array of items for MVP
    contact_email text NOT NULL,
    payment_intent_id text,
    created_at timestamptz DEFAULT now()
);

-- 3. Indexes
CREATE INDEX IF NOT EXISTS idx_artifacts_category ON artifacts(category);
CREATE INDEX IF NOT EXISTS idx_artifacts_series ON artifacts(series);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- 4. RLS Policies
ALTER TABLE artifacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Artifacts: Public Read
CREATE POLICY "Public Read Artifacts" ON artifacts
    FOR SELECT USING (true);

-- Artifacts: Admin Write (Service Role Only for now, or specific admin logic later)
-- For simplicity in MVP, we allow authenticated users to potentially be admins if we had roles, 
-- but strictly restricting write access is safer. 
-- Using a "true" policy for ALL roles for dev/seed purposes might be risky in prod, 
-- but effectively we usually only want service_role to write.
-- Ideally: 
-- CREATE POLICY "Admin Write Artifacts" ON artifacts FOR ALL USING (auth.role() = 'service_role');
-- For this bootstrapping phase, we'll rely on service role bypassing RLS or add a permissive policy if needed for seeding via client.
-- Let's stick to standard public read.

-- Orders: User Read Own
CREATE POLICY "User Read Own Orders" ON orders
    FOR SELECT USING (
        user_id::text = current_setting('request.jwt.claims', true)::json->>'sub'
    );

-- Orders: Public Insert (Guest Checkout)
CREATE POLICY "Public Create Orders" ON orders
    FOR INSERT WITH CHECK (true);

-- 5. Seed Data (Initial Inventory)
INSERT INTO artifacts (name, description, price, stock_level, category, series, images, tech_specs, features, is_featured)
VALUES 
(
    'Optimus Prime - Leader Class',
    'The fearless leader of the Autobots. Features intricate detailing, die-cast parts, and a fully articulated matrix chamber. Transforms from robot to truck in 35 steps.',
    129.99,
    15,
    'Autobot',
    'War for Cybertron',
    '["https://images.unsplash.com/photo-1635235839218-0909c2c62c2f?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1599839556209-66b96317d7b3?auto=format&fit=crop&q=80&w=800"]'::jsonb,
    '{"strength": 10, "intelligence": 10, "speed": 6, "endurance": 10, "rank": 10, "courage": 10, "firepower": 8, "skill": 10}'::jsonb,
    '["Die-cast metal parts", "LED light-up eyes and Matrix", "Includes Ion Blaster and Energon Axe", "Premium metallic finish"]'::jsonb,
    true
),
(
    'Megatron - Emperor of Destruction',
    'Ruthless leader of the Decepticons. This figure commands respect with a imposing silhouette and fusion cannon accessory. Transforms into a cybertronian tank.',
    119.99,
    8,
    'Decepticon',
    'Generation 1',
    '["https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1603520859590-785d95d82065?auto=format&fit=crop&q=80&w=800"]'::jsonb,
    '{"strength": 10, "intelligence": 10, "speed": 4, "endurance": 9, "rank": 10, "courage": 9, "firepower": 10, "skill": 9}'::jsonb,
    '["Fusion Cannon lights up", "Voice clips from the original series", "Includes energy mace", "Weathered battle-damage paint application"]'::jsonb,
    true
),
(
    'Bumblebee - Deluxe Scout',
    'Small, eager, and brave, Bumblebee acts as a messenger and spy. This deluxe figure captures his classic VW Beetle mode with modern engineering.',
    29.99,
    42,
    'Autobot',
    'Cinematic Universe',
    '["https://images.unsplash.com/photo-1579619179040-2c7c5b61405a?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1627855364177-3e847c2105c9?auto=format&fit=crop&q=80&w=800"]'::jsonb,
    '{"strength": 2, "intelligence": 8, "speed": 9, "endurance": 6, "rank": 7, "courage": 10, "firepower": 1, "skill": 7}'::jsonb,
    '["Interchangeable battle mask", "Stinger blaster accessory", "Highly articulated ankle tilts", "Compact alt-mode"]'::jsonb,
    false
),
(
    'Soundwave - Communications Officer',
    'Soundwave superior, others inferior. This Voyager class figure includes Laserbeak and Ravage cassettes that fit inside his chest compartment.',
    49.99,
    12,
    'Decepticon',
    'Generation 1',
    '["https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800"]'::jsonb,
    '{"strength": 8, "intelligence": 9, "speed": 2, "endurance": 6, "rank": 8, "courage": 5, "firepower": 6, "skill": 10}'::jsonb,
    '["Eject mechanism for cassettes", "Includes 2 cassette minions", "Shoulder cannon accessory", "Box art inspired packaging"]'::jsonb,
    false
),
(
    'Grimlock - Dinobot King',
    'Me Grimlock King! A massive figure that dominates the shelf. Transforms into a mechanical T-Rex. Features jaw-chomping action.',
    89.99,
    5,
    'Autobot',
    'Beast Wars',
    '["https://images.unsplash.com/photo-1581557991964-125469da3b8a?auto=format&fit=crop&q=80&w=800"]'::jsonb,
    '{"strength": 10, "intelligence": 7, "speed": 3, "endurance": 10, "rank": 9, "courage": 10, "firepower": 9, "skill": 10}'::jsonb,
    '["Light-up dino eyes", "Includes sword and shield", "Detailed scale texturing", "Articulated tail"]'::jsonb,
    true
);
