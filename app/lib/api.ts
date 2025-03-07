export async function fetchUsers(page: number) {
  const res = await fetch('https://gorest.co.in/public/v2/users?per_page=10&page=' + page);
  const users = await res.json();
  const totalPages = res.headers.get('x-pagination-pages');

  return { users, totalPages: Number(totalPages) || 1 };
}
