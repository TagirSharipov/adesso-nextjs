'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { Locale, locales } from '@/app/lib/definitions';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  const handleLocaleChange = (newLocale: string) => {
    const url = new URL(pathname, window.location.origin);
    const pathSegments = url.pathname.split('/').filter(Boolean);

    if (locales.includes(pathSegments[0] as Locale)) {
      pathSegments.shift();
    }
    const newPath = `/${newLocale}/${pathSegments.join('/')}`;

    router.push(newPath);
  };

  return (
    <div className="flex bg-gray-50 px-3 rounded-md h-[48]">
      <select
        onChange={e => {
          handleLocaleChange(e.target.value);
        }}
        defaultValue={lang || 'en'}
        className="w-full h-full bg-gray-50 text-sm font-medium focus:outline-none"
      >
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {locale === 'en' ? 'English' : 'Italiano'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
