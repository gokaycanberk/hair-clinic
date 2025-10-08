import { Link } from "react-scroll";
import logo from "../assets/images/peaklogo.jpg";

const Header = () => {
  const menuItems = [
    { name: "Treatments", to: "treatments" },
    { name: "Packages", to: "packages" },
    { name: "Before & After", to: "before-after" },
    { name: "About Us", to: "about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-[180px]">
            <img
              src={logo}
              alt="Peak Hair Turkey"
              className="h-12 w-full object-contain scale-125"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block ml-12">
            <ul className="flex space-x-10">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-navy hover:text-golden transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Free Consultation Button */}
          <button className="hidden md:block bg-navy text-white px-6 py-2.5 rounded-lg hover:bg-golden transition-colors">
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-navy hover:text-golden transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
