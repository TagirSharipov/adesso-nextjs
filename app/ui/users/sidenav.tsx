'use client';
import { LanguageIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40" href="/">
        <div className="w-32 text-white md:w-40">ADESSO Test App</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <a
          href={'/users'}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
            pathname === '/users' ? 'bg-sky-100 text-blue-600' : ''
          }`}
        >
          <UsersIcon className="w-6" />
          <p className="hidden md:block">Utenti</p>
        </a>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <LanguageIcon className="w-6" />
            <div className="hidden md:block">Lingua</div>
          </button>
        </form>
      </div>
    </div>
  );
}
