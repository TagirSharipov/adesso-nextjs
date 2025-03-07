export default function Home() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Intro</h1>
      <p>
        Create React App, once a beloved tool for bootstrapping React applications, has now &nbsp;
        <a href="https://react.dev/blog/2025/02/14/sunsetting-create-react-app" className="underline" target="_blank">
          been laid to rest
        </a>
        . As the creators of Next.js recommend using frameworks for modern web development, this test assignment has
        been completed using Next.js.
      </p>
    </main>
  );
}
