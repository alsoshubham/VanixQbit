export default function DropdownSolutions() {
  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6 z-50 text-gray-900" role="menu">
      <div>
        <h3 className="font-semibold mb-2">Development</h3>
        <p className="text-xs text-gray-500 mb-2">
          Custom software solutions to meet your unique business needs, from concept to deployment and maintenance.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Web & Mobile Apps</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">API Development</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Designing</h3>
        <p className="text-xs text-gray-500 mb-2">
          Engaging and intuitive designs that captivate your audience, from branding to user experience.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">UI/UX Design</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Brand Identity</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Marketing</h3>
        <p className="text-xs text-gray-500 mb-2">
          Comprehensive marketing strategies to grow your business. SEO, content marketing, and more.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Digital & Affiliate Marketing</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Performance Marketing</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">SEO</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Product</h3>
        <p className="text-xs text-gray-500 mb-2">
          End-to-end product management and strategy services.<br/>Bringing your product vision to life.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Strategy</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Management</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Product Maintenance</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">PRD Creation</button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Accounting</h3>
        <p className="text-xs text-gray-500 mb-2">
          Reliable accounting services to keep your finances in order. Bookkeeping, tax prep, and financial reporting.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Financial Reporting</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Tax & Audits </button></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
        <p className="text-xs text-gray-500 mb-2">
          Scalable and secure cloud solutions to power your business. Cloud migration, infrastructure management, and DevOps services.
        </p>
        <ul className="space-y-1">
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">Cloud Infrastructure & Migration</button></li>
          <li><button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">CI/CD Pipelines</button></li>
        </ul>
      </div>
    </div>
  );
}
