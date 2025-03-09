import { getDictionary } from '@/app/languages/languages';
import { Locale } from '../lib/definitions';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Intro</h1>
      <p>{dictionary.homepage.main}</p>
    </main>
  );
}
