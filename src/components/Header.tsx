import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Advisory", path: "/advisory" },
  { label: "Enterprise Solutions", path: "/enterprise-solutions" },
  { label: "Leadership & Board Development", path: "/leadership" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide section-padding !py-0 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Innovate Ahead Group" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs uppercase tracking-widest font-body font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-electric"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="executive" size="lg">
              Book Executive Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm uppercase tracking-widest font-body font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-electric"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="executive" size="lg" className="w-full mt-2">
                Book Executive Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
