'use client';
import { useMemo, useState } from 'react';
import { User } from '@/app/lib/definitions';
type Filter = {
  [K in keyof User]?: string;
};

const emptyFilter: Filter = {
  email: '',
  name: '',
  status: '',
  gender: '',
};
export default function UsersTable({ users }: { users: User[] }) {
  const [filter, setFilter] = useState<Filter>(emptyFilter);

  const filteredUsers = useMemo(
    () =>
      users?.filter(user => {
        return Object.entries(filter).every(([key, value]) => {
          if (!value) return true;
          if (key === 'status' || key === 'gender') return user[key] === value;
          return user[key as keyof User].toString().toUpperCase().includes(value.toUpperCase());
        });
      }),
    [users, filter]
  );

  return (
    <div className="w-full">
      <h1 className={`mb-8 text-xl md:text-2xl`}>Utenti</h1>

      <div className="mt-6 flow-root">
        <div className="flex items-center justify-end mb-4">
          <button
            className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => setFilter(emptyFilter)}
          >
            Clear filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {filteredUsers.map(user => (
                  <div key={user.id} className="mb-2 w-full rounded-md bg-white p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{user.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Gender</p>
                        <p className="font-medium">{user.gender}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Status</p>
                        <p className="font-medium">{user.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Gender
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Status
                    </th>
                  </tr>
                  <tr className="border-t-1 border-gray-200">
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6 ">
                      <input
                        type="text"
                        placeholder="Search by name"
                        className="w-1/2 h-6 px-3 py-2 text-sm text-gray-900 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        onChange={e => setFilter({ ...filter, name: e.target.value })}
                        autoComplete="off"
                        data-lpignore="true"
                        value={filter?.name}
                      />
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <input
                        type="text"
                        placeholder="Search by email"
                        className="w-1/2 h-6 px-3 py-2 text-sm text-gray-900 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        onChange={e => setFilter({ ...filter, email: e.target.value })}
                        autoComplete="off"
                        data-lpignore="true"
                        value={filter?.email}
                      />
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <select
                        value={filter?.gender}
                        onChange={e => setFilter({ ...filter, gender: e.target.value })}
                        className="w-[90] h-6 px-3 py-0 text-sm text-gray-900 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <select
                        value={filter?.status}
                        onChange={e => setFilter({ ...filter, status: e.target.value })}
                        className="w-[110] h-6 px-1 py-0 text-sm text-gray-900 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{user.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{user.email}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{user.gender}</td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
