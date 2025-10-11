import { Link } from "react-scroll";
import logo from "../assets/images/logosmall.jpg";

const Header = () => {
  const menuItems = [
    { name: "About Us", to: "about" },
    { name: "Treatments", to: "treatments" },
    { name: "Before & After", to: "before-after" },
    { name: "Packages", to: "packages" },
    { name: "Financing", to: "financing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container ml-20">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Peak Hair Turkey"
              className="h-12 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block ml-auto mr-10">
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
