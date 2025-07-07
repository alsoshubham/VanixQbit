export default function DropdownResources() {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 z-50 text-gray-900" role="menu">
      <ul className="space-y-2">
        <li><button className="bg-gray-100 px-3 py-1 rounded w-full text-left">Blog</button></li>
        <li><button className="bg-gray-100 px-3 py-1 rounded w-full text-left">Guides</button></li>
        <li><button className="bg-gray-100 px-3 py-1 rounded w-full text-left">Help Center</button></li>
      </ul>
    </div>
  );
}
