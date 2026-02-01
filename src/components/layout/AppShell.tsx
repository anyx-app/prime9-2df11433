import React, { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white font-sans antialiased selection:bg-[#00aaff] selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1f1f1f]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-[#00aaff] tracking-wider text-xl uppercase">Prime9</span>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            Built for Collectors.
          </p>
        </div>
      </footer>
    </div>
  );
}
