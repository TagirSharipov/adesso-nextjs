import { fetchUsers } from '../lib/api';
import Pagination from '../ui/users/pagination';
import UsersTable from '../ui/users/table';
// TODO  add suspense
export default async function Users(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const { users, totalPages } = await fetchUsers(props?.page);
  console.log('totalPages', totalPages);

  return (
    <div>
      <UsersTable users={users} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
