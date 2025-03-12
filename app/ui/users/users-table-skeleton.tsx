import React from 'react';

const UsersSkeleton = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className={`mb-8 text-xl md:text-2xl`}>
          {' '}
          <div className="h-4 w-16 bg-gray-200"></div>
        </h1>
      </div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <table className="min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      <div className="h-4 w-24 bg-gray-200"></div>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <div className="h-4 w-24 bg-gray-200"></div>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <div className="h-4 w-16 bg-gray-200"></div>
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      <div className="h-4 w-16 bg-gray-200"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="h-4 w-32 bg-gray-200"></div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <div className="h-4 w-48 bg-gray-200"></div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <div className="h-4 w-16 bg-gray-200"></div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <div className="h-4 w-16 bg-gray-200"></div>
                      </td>
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
};

export default UsersSkeleton;
