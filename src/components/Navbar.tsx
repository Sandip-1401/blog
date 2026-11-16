import Link from "next/link";
    
    export default function Navbar() {
      return (
        <header className="border-b border-zinc-200 bg-zinc-50">
          <nav className="mx-auto flex max-w-2xl items-center justify-between p-4">
            <Link href="/" className="font-bold text-lg hover:text-blue-600">
              DevPulse.
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </div>
          </nav>
        </header>
      );
    }