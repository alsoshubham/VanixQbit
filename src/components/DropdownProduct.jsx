export default function DropdownProduct() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6 z-50 text-gray-900" role="menu">
      {/* SAAS */}
      <div>
        <h3 className="font-semibold mb-1">SAAS</h3>
        <p className="text-xs text-gray-500 mb-2">Cloud-based solutions to streamline your business operations.<br/>Scalable, secure, and always up-to-date.</p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Custom SAAS Apps</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Process Automation</button></li>
        </ul>
      </div>
      {/* Web Development */}
      <div>
        <h3 className="font-semibold mb-1">Web Development</h3>
        <p className="text-xs text-gray-500 mb-2">Modern websites tailored to your needs.<br/>From templates to fully custom builds.</p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">WordPress / Shopify</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Low Code Platforms</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Custom Build</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Landing Pages</button></li>
        </ul>
      </div>
      {/* App Development */}
      <div>
        <h3 className="font-semibold mb-1">App Development</h3>
        <p className="text-xs text-gray-500 mb-2">Mobile solutions for every platform.<br/>Engage users on Android and iOS.</p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Android</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">iOS</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Cross-Platform</button></li>
        </ul>
      </div>
      {/* SEO */}
      <div>
        <h3 className="font-semibold mb-1">SEO</h3>
        <p className="text-xs text-gray-500 mb-2">Boost your online visibility and ranking.<br/>Comprehensive SEO strategies for growth.</p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">On-Page SEO</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Technical SEO</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Content Optimization</button></li>
        </ul>
      </div>
    </div>
  );
}
