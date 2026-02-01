import { ArtifactFeed } from "@/components/artifact/artifact-feed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <div className="container max-w-2xl py-6 md:py-10">
        <ArtifactFeed />
      </div>
    </main>
  );
}
