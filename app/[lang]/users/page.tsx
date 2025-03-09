import { getDictionary } from '@/app/languages/languages';
import { fetchUsers } from '../../lib/api';
import Pagination from '@/app/ui/users/pagination';
import UsersTable from '@/app/ui/users/table';
import { Locale } from '@/app/lib/definitions';

export default async function Users(props: {
  params: Promise<{
    lang: Locale;
  }>;
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props?.searchParams;
  const { lang } = await props?.params;
  const dictionary = await getDictionary(lang);
  const { users, totalPages } = await fetchUsers(searchParams?.page);

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
}
