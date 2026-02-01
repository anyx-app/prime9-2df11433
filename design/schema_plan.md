# Prime9 Database Schema Plan

## Overview
This document outlines the database schema for Prime9, focusing on the core e-commerce functionality for Transformers toys. We utilize Supabase (PostgreSQL) for data persistence.

## Tables

### 1. `artifacts` (Products)
Represents the Transformers figures available for sale.
*   **id**: `uuid` (Primary Key, default: `gen_random_uuid()`)
*   **name**: `text` (Required) - Name of the figure (e.g., "Optimus Prime Leader Class")
*   **description**: `text` - Detailed product description.
*   **price**: `numeric` (Required) - Price in USD.
*   **stock_level**: `integer` (Default: 0) - Current inventory count.
*   **category**: `text` - Faction or Type (e.g., "Autobot", "Decepticon").
*   **series**: `text` - The universe/series (e.g., "Generation 1", "Beast Wars", "Cinematic Universe").
*   **images**: `jsonb` - Array of image URLs. First image is the primary/thumbnail.
*   **tech_specs**: `jsonb` - Key-value pairs for stats (Strength, Intelligence, Speed, etc.).
*   **features**: `jsonb` - Array of strings for bullet points (e.g., "Converts in 35 steps").
*   **is_featured**: `boolean` (Default: false) - For high-visibility items on the landing page.
*   **created_at**: `timestamptz` (Default: `now()`)
*   **updated_at**: `timestamptz` (Default: `now()`)

### 2. `orders`
Tracks customer purchases.
*   **id**: `uuid` (Primary Key, default: `gen_random_uuid()`)
*   **user_id**: `uuid` (Foreign Key to `auth.users`, Nullable) - Allows guest checkout if null.
*   **status**: `text` (Default: 'pending') - Enum: 'pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'.
*   **total_amount**: `numeric` (Required) - Final transaction value.
*   **shipping_info**: `jsonb` - Address details (street, city, zip, country).
*   **contact_email**: `text` (Required) - For guest checkout or confirmations.
*   **payment_intent_id**: `text` - Reference to Stripe/Payment provider ID.
*   **created_at**: `timestamptz` (Default: `now()`)

### 3. `order_items` (Optional / Normalized Approach)
Ideally, we keep line items separate, but for the MVP prompt request, we might store them in `orders.items` JSONB. However, a separate table is cleaner for inventory management.
*   **id**: `uuid` (PK)
*   **order_id**: `uuid` (FK to `orders`)
*   **artifact_id**: `uuid` (FK to `artifacts`)
*   **quantity**: `integer`
*   **unit_price_at_purchase**: `numeric` - Snapshotted price.

*Decision for MVP*: We will use a `jsonb` column named `items` in the `orders` table to simplify the initial schema, containing an array of `{ artifact_id, name, quantity, price }`.

## RLS Policies (Row Level Security)

### `artifacts`
*   **Public Read**: Enable `true` for `SELECT`. Everyone can see products.
*   **Admin Write**: Enable `true` for `INSERT/UPDATE/DELETE` only for users with specific admin roles or via service key (for dropshipping integrations).

### `orders`
*   **User Read**: Users can `SELECT` their own orders (`auth.uid() = user_id`).
*   **Public Write**: Anyone (guests included) can `INSERT`.
*   **Admin Read/Write**: Admins can view/edit all orders.

## Indexes
*   `artifacts(category)`
*   `artifacts(series)`
*   `orders(user_id)`
*   `orders(status)`
