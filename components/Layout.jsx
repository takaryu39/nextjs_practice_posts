import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "HP by Next.js!" }) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  ホーム
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  ブログ
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  お問い合わせ
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
