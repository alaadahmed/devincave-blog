import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl">DevInCave</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto space-x-5 uppercase">
          <Link href="/blog">
            <a className="hover:text-pink-300">Blog</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-pink-300">About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
