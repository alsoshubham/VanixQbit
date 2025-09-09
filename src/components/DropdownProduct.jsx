export default function DropdownProduct() {
  return (
    <div
      className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6 z-50 text-gray-900"
      role="menu"
    >
      {/* Marketing & Brand Platforms */}
      <div>
        <h3 className="font-semibold mb-1">Marketing & Brand Platforms</h3>
        <p className="text-xs text-gray-500 mb-2">
          From AI-driven post ideas and branded templates to real-time ad
          insights and budget optimization, our platform helps businesses grow
          their presence and maximize ROI effortlessly.
        </p>
        <ul className="space-y-1">
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              Social Media Content Generator / Scheduler
            </button>
          </li>
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              Ad Campaign Dashboard
            </button>
          </li>
        </ul>
      </div>
      {/* Accounting & Finance SaaS */}
      <div>
        <h3 className="font-semibold mb-1">Accounting & Finance SaaS</h3>
        <p className="text-xs text-gray-500 mb-2">
          Simplify finance and compliance with smart tools designed for growing
          businesses.
        </p>
        <ul className="space-y-1">
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              SME Accounting & Compliance Platform
            </button>
          </li>
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              Financial Dashboard for SMEs & Startups
            </button>
          </li>
        </ul>
      </div>
      {/* Tech + Cloud Solutions */}
      <div>
        <h3 className="font-semibold mb-1">Tech + Cloud Solutions</h3>
        <p className="text-xs text-gray-500 mb-2">
          Build customizable business dashboards and optimize cloud usage with
          intelligent monitoring, giving you clarity, efficiency, and cost
          savings at scale.
        </p>
        <ul className="space-y-1">
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              Customizable Business Dashboards
            </button>
          </li>
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              SaaS for Cloud Cost Optimization
            </button>
          </li>
        </ul>
      </div>
      {/* Design & Product Platforms */}
      <div>
        <h3 className="font-semibold mb-1">Design & Product Platforms</h3>
        <p className="text-xs text-gray-500 mb-2">
          From centralized brand asset management to AI-driven UX testing, our
          platforms help teams create, manage, and optimize with speed and
          precision.
        </p>
        <ul className="space-y-1">
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              Brand Asset Management Platform
            </button>
          </li>
          <li>
            <button className="bg-[#b7e4c7] px-3 py-1 rounded w-full text-left">
              UX Testing Tool
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
