import { getDictionary } from '@/app/languages/languages';
import { fetchUser } from '@/app/lib/api';
import { Locale } from '@/app/lib/definitions';

import UserForm from '@/app/ui/users/user';
// TODO  add suspense
export default async function Users(props: {
  params: Promise<{
    lang: Locale;
    user: string;
  }>;
}) {
  const { lang, user } = await props?.params;
  const dictionary = await getDictionary(lang);

  const data = await fetchUser(user);

  return (
    <div>
      <UserForm user={data} dictionary={dictionary.users} />
    </div>
  );
}
