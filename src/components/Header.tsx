import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logosmall.jpg";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { name: "About Us", to: "about" },
    {
      name: "Treatments",
      to: "treatments",
      subItems: [
        { name: "Sapphire FUE", path: "/treatments/sapphire-fue" },
        { name: "DHI", path: "/treatments/dhi" },
        { name: "Stem Cell", path: "/treatments/stem-cell" },
      ],
    },
    { name: "Before & After", to: "before-after" },
    { name: "Packages", to: "packages" },
    { name: "Financing", to: "financing" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300"
      style={{ height: scrollY > 100 ? "64px" : "76px" }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <RouterLink to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Peak Hair Turkey"
              className={`transition-all duration-300 ${
                scrollY > 100 ? "h-9" : "h-11"
              } object-contain`}
            />
          </RouterLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-end flex-1 gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.to} className="relative group">
                  {isHomePage ? (
                    <ScrollLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-navy hover:text-golden transition-colors font-medium cursor-pointer py-4"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to="/"
                      className="text-navy hover:text-golden transition-colors font-medium py-4"
                    >
                      {item.name}
                    </RouterLink>
                  )}

                  {/* Dropdown for Treatments */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ul className="py-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <RouterLink
                              to={subItem.path}
                              className="block px-4 py-2.5 text-navy hover:bg-gray-50 hover:text-golden transition-colors"
                            >
                              {subItem.name}
                            </RouterLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Free Consultation Button */}
            <button className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-golden transition-colors">
              Free Consultation
            </button>
          </nav>

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
