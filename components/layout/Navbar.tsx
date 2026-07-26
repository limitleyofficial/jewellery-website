export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white">
      <h1 className="text-2xl font-bold tracking-wide">
        Limitley Labs
      </h1>

      <ul className="flex gap-8 text-gray-700 font-medium">
        <li>Home</li>
        <li>Collections</li>
        <li>About</li>
        <li>Showrooms</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}