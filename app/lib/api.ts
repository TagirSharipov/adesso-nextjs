export async function fetchUsers(page: string = '1') {
  const res = await fetch('https://gorest.co.in/public/v2/users?per_page=10&page=' + page);
  const users = await res.json();
  const totalPages = res.headers.get('x-pagination-pages');

  return { users, totalPages: Number(totalPages) || 1 };
}
