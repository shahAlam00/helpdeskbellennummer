import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/computer-protection", label: "Computer Protection" },
    { href: "/services/laptop-protection", label: "Laptop Protection" },
    { href: "/services/smartphone-protection", label: "Smartphone Protection" },
    { href: "/services", label: "Virus Protection" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/blog", label: "Security Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary shield-glow" />
              <span className="font-display text-xl font-bold text-foreground">
                Help<span className="text-primary">Desk</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Professionele bescherming voor uw apparaten.
Deskundige technici zorgen ervoor dat u veilig blijft tegen virussen, hackers en datalekken.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:support@helpdesk.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@helpdeskbellennummer.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +31 20 225 4839
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HelpDesk. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Protecting devices worldwide with expert remote support.
          </p>
        </div>
      </div>
    </footer>
  );
}
