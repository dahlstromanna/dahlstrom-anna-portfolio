import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";


const navItems = [
  { label: "About", path: "/about", hash: "#about" },
  { label: "Work", path: "/work", hash: "#work" },
  { label: "Contact", path: "/contact", hash: "#contact" },
];


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);

useEffect(() => {
  const sectionMap: Record<string, string> = {
    "/about": "#about",
    "/work": "#work",
    "/contact": "#contact",
  };

  const target = sectionMap[location.pathname];

  if (target) {
    // Vänta ett tick så DOM hinner renderas
    setTimeout(() => {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
}, [location.pathname]);


  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      // If on a different page, navigate to home first
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-medium text-foreground">
          Portfolio<span className="text-primary">.</span>
        </Link>

       {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  handleNavClick(item.hash);
                }
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
             <NavLink
                key={item.label}
                to={item.path}
                className="font-body text-lg text-foreground py-2"
                activeClassName="text-primary"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(item.hash);
                  }
                  setIsOpen(false);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
