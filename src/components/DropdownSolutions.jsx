export default function DropdownSolutions() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6 z-50 text-gray-900" role="menu">
      <div>
        <h3 className="font-semibold mb-2">Development</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Web Apps</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Mobile Apps</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">API Development</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Designing</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">UI/UX Design</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Brand Identity</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Prototyping</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Marketing</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Digital Marketing</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Affiliate Marketing</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Performance Marketing</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Product</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Strategy</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Management</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Maintenance</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">PRD Creation</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Accounting</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Bookkeeping</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Financial Reporting</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Tax Preparation</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Cloud Migration</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">CI/CD Pipelines</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Infrastructure as Code</button></li>
        </ul>
      </div>
    </div>
  );
}
