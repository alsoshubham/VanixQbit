export default function DropdownResources() {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 z-50 text-gray-900" role="menu">
      <ul className="space-y-2">
        <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Blogs</button></li>
        <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">E-books</button></li>
        <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Whitepapers</button></li>
        <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Case Studies</button></li>
        <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Webinars</button></li>
      </ul>
    </div>
  );
}
