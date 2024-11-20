import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold hover:text-gray-300">
        Memorabilia
      </Link>
      <nav className="space-x-4">
        <Link href="/" className="text-lg hover:text-gray-300">
          Home
        </Link>
        <Link href="/teamPage" className="text-lg hover:text-gray-300">
          Equipe
        </Link>
      </nav>
    </header>
  );
};

export default Header;