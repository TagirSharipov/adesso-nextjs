import { getDictionary } from '@/app/languages/languages';
import { fetchUsers } from '../../lib/api';
import Pagination from '@/app/ui/users/pagination';
import UsersTable from '@/app/ui/users/table';
import { Locale } from '@/app/lib/definitions';
import { Suspense } from 'react';

import UsersSkeleton from '@/app/ui/users/users-table-skeleton';

export default async function UserPage(props: {
  params: Promise<{
    lang: Locale;
  }>;
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props?.searchParams;
  const { lang } = await props?.params;

  return (
    <Suspense fallback={<UsersSkeleton />} key={lang + searchParams?.page}>
      <Users lang={lang} page={searchParams?.page || '1'} />
    </Suspense>
  );
}

const Users = async ({ lang, page }: { lang: Locale; page: string }) => {
  const dictionary = await getDictionary(lang);

  const { users, totalPages } = await fetchUsers(page);

  return (
    <div>
      <div className="w-full">
        <h1 className={`mb-8 text-xl md:text-2xl`}>{dictionary.users.title}</h1>
      </div>
      <UsersTable users={users} dictionary={dictionary.users} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
