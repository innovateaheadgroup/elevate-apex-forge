import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-semibold !text-primary-foreground mb-4">
              Innovate Ahead Group
            </h3>
            <p className="text-sm leading-relaxed opacity-70 max-w-md font-body">
              Strategic Digital Transformation & Leadership Advisory for boards, executive teams and founder-led enterprises.
            </p>
            <p className="text-xs opacity-50 mt-4 font-body">Melbourne, Australia</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-body font-semibold mb-4 opacity-80">
              Advisory
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/advisory" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                Strategic Advisory
              </Link>
              <Link to="/enterprise-solutions" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                Enterprise Solutions
              </Link>
              <Link to="/leadership" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                Leadership Development
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-body font-semibold mb-4 opacity-80">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                About
              </Link>
              <Link to="/insights" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                Insights
              </Link>
              <Link to="/contact" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body opacity-50">
            © {new Date().getFullYear()} Innovate Ahead Group. All rights reserved.
          </p>
          <p className="text-xs font-body opacity-50">
            Digital Transformation | Leadership Advisory | Enterprise Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
