import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      {/* Logo */}
      <aside className="flex items-center gap-2">
        <p className="text-3xl font-bold text-white">Fu</p>

        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="Fuzzie logo"
          className="shadow-sm"
        />

        <p className="text-3xl font-bold text-white">Zie</p>
      </aside>

      {/* Navigation */}
      <nav className="absolute left-[50%] top-[50%] hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <ul className="flex list-none items-center gap-4">
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Products
            </Link>
          </li>

          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Pricing
            </Link>
          </li>

          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Clients
            </Link>
          </li>

          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Resources
            </Link>
          </li>

          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Documentation
            </Link>
          </li>

          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Enterprise
            </Link>
          </li>
        </ul>
      </nav>

      {/* Dashboard Button */}
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? 'Dashboard ': 'Get Strated'}
          </span>
        </Link>
      </aside>
    </header>
  );
};

export default Navbar;