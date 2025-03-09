'use client';

import { type getDictionary } from '@/app/languages/languages';
import { User } from '@/app/lib/definitions';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function UserForm({
  user,
  dictionary,
}: {
  user: User;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['users'];
}) {
  const { lang } = useParams();

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="id" className="mb-2 block text-sm font-medium">
          {dictionary.id}
        </label>
        <div className="relative">
          <input
            id="id"
            name="id"
            className=" block w-full  rounded-md border border-gray-200 py-2 pl-10 text-sm  placeholder:text-gray-500"
            value={user.id}
            disabled
          />

          <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          {dictionary.name}
        </label>
        <div className="relative">
          <input
            id="name"
            name="name"
            className=" block w-full  rounded-md border border-gray-200 py-2 pl-10 text-sm  placeholder:text-gray-500"
            value={user.name}
            disabled
          />

          <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          {dictionary.email}
        </label>
        <div className="relative mt-2 rounded-md">
          <input
            id="email"
            name="email"
            defaultValue={user.email}
            disabled
            className=" block w-full  rounded-md border border-gray-200 py-2 pl-10 text-sm  placeholder:text-gray-500"
          />
          <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="mb-2 block text-sm font-medium">
          {dictionary.gender}
        </label>
        <div className="relative">
          <input
            id="gender"
            name="gender"
            className=" block w-full  rounded-md border border-gray-200 py-2 pl-10 text-sm  placeholder:text-gray-500"
            value={user.gender}
            disabled
          />

          <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="mb-2 block text-sm font-medium">
          {dictionary.status}
        </label>
        <div className="relative">
          <input
            id="status"
            name="status"
            className=" block w-full  rounded-md border border-gray-200 py-2 pl-10 text-sm  placeholder:text-gray-500"
            value={user.status}
            disabled
          />

          <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      <div className="mt-6 flex justify-start gap-4">
        <Link className="rounded-md bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-900" href={`/${lang}/users`}>
          {dictionary.back}
        </Link>
      </div>
    </form>
  );
}
