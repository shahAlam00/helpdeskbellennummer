import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const services = {
  Email: [
    { label: "Gmail", path: "/services/email/Gmail-klantenservice-Nederland" },
    { label: "Yahoo", path: "/services/email/Yahoo-klantenservice-Nederland" },
    {
      label: "Hotmail",
      path: "/services/email/Hotmail-klantenservice-Nederland",
    },
    {
      label: "Outlook",
      path: "/services/email/Outlook-klantenservice-Nederland",
    },
  ],

  Antivirus: [
    {
      label: "Norton",
      path: "/services/antivirus/Norton-klantenservice-Nederland",
    },
    {
      label: "McAfee",
      path: "/services/antivirus/Mcafee-klantenservice-Nederland",
    },
    {
      label: "Avast",
      path: "/services/antivirus/Avast-klantenservice-Nederland",
    },
    {
      label: "Trend Micro",
      path: "/services/antivirus/TrendMicro-klantenservice-Nederland",
    },
    {
      label: "Bitdefender",
      path: "/services/antivirus/Bitdefender-klantenservice-Nederland",
    },
  ],

  Printer: [
    {
      label: "Epson",
      path: "/services/printer/Epson-klantenservice-Nederland",
    },
    {
      label: "Canon",
      path: "/services/printer/Canon-klantenservice-Nederland",
    },
    {
      label: "Brother",
      path: "/services/printer/Brother-klantenservice-Nederland",
    },
    { label: "HP", path: "/services/printer/Hp-klantenservice-Nederland" },
    {
      label: "Lexmark",
      path: "/services/printer/Lexmark-klantenservice-Nederland",
    },
  ],

  Pc: [
    { label: "Dell", path: "/services/pc/Dell-klantenservice-Nederland" },
    { label: "Lenova", path: "/services/pc/Lenova-klantenservice-Nederland" },
    { label: "HP", path: "/services/pc/Hp-klantenservice-Nederland" },
    { label: "Toshiba", path: "/services/pc/Toshiba-klantenservice-Nederland" },
    { label: "Acer", path: "/services/pc/Acer-klantenservice-Nederland" },
  ],
  Routers: [
    {
      label: "Dlink",
      path: "/services/routers/D'link-klantenservice-Nederland",
    },
    {
      label: "Cisco",
      path: "/services/routers/Cisco-klantenservice-Nederland",
    },
    {
      label: "Netgear",
      path: "/services/routers/Netgear-klantenservice-Nederland",
    },
    {
      label: "Linksys",
      path: "/services/routers/Linksys-klantenservice-Nederland",
    },
  ],
  Social: [
    {
      label: "Instagram",
      path: "/services/social/Instagram-klantenservice-Nederland",
    },
    {
      label: "Facebook",
      path: "/services/social/Facebook-klantenservice-Nederland",
    },
  ],

  Browser: [
    {
      label: "Firefox",
      path: "/services/browser/Firefox-klantenservice-Nederland",
    },
    {
      label: "Chrome",
      path: "/services/browser/Chrome-klantenservice-Nederland",
    },
    {
      label: "Safari",
      path: "/services/browser/Safari-klantenservice-Nederland",
    },
  ],
  Others: [
    {
      label: "Adobe",
      path: "/services/others/Coinbase-klantenservice-Nederland",
    },
    {
      label: "Exact",
      path: "/services/others/Paypal-klantenservice-Nederland",
    },
    { label: "Skype", path: "/services/others/Apple-klantenservice-Nederland" },
    {
      label: "Office",
      path: "/services/others/Office-klantenservice-Nederland",
    },
    { label: "Xbox", path: "/services/others/Adobe-klantenservice-Nederland" },
    {
      label: "QuickBooks",
      path: "/services/others/Quickbooks-klantenservice-Nederland",
    },
    {
      label: "Exact2",
      path: "/services/others/Exact-klantenservice-Nederland",
    },
    { label: "Skype", path: "/services/others/Skype-klantenservice-Nederland" },
    {
      label: "Kandle",
      path: "/services/others/Kindle-klantenservice-Nederland",
    },
    { label: "Xbox2", path: "/services/others/Xbox-klantenservice-Nederland" },
  ],
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/protection", label: "Protection" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState("Email");
  const [openService, setOpenService] = useState(null);

  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary shield-glow transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Help<span className="text-primary">Desk</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <button
                    key={link.href}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1",
                      servicesOpen
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    )}
                  >
                    Services
                    {/* 🔽 Lucide Arrow */}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-all duration-300",
                        servicesOpen
                          ? "rotate-180 translate-y-0.5"
                          : "rotate-0 translate-y-0",
                      )}
                    />
                  </button>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setServicesOpen(false)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* 🔥 MEGA MENU */}

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-4 w-[760px] rounded-2xl border border-border bg-background shadow-xl z-50 p-6">
                <div className="grid grid-cols-2 gap-10">
                  {/* ================= LEFT COLUMN ================= */}
                  <div>
                    {/* EMAIL */}
                    {/* EMAIL */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Email" ? null : "Email",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Email</span>
                        <span
                          className={`transition-transform ${
                            openService === "Email" ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Email" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/email/Gmail-klantenservice-Nederland",
                              "Gmail",
                            ],
                            [
                              "/services/email/Yahoo-klantenservice-Nederland",
                              "Yahoo",
                            ],
                            [
                              "/services/email/Hotmail-klantenservice-Nederland",
                              "Hotmail",
                            ],
                            [
                              "/services/email/Outlook-klantenservice-Nederland",
                              "Outlook",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ANTIVIRUS */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Antivirus" ? null : "Antivirus",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Antivirus</span>
                        <span
                          className={`transition-transform ${openService === "Antivirus" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Antivirus" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/antivirus/Norton-klantenservice-Nederland",
                              "Norton",
                            ],
                            [
                              "/services/antivirus/Mcafee-klantenservice-Nederland",
                              "McAfee",
                            ],
                            [
                              "/services/antivirus/Avast-klantenservice-Nederland",
                              "Avast",
                            ],
                            [
                              "/services/antivirus/TrendMicro-klantenservice-Nederland",
                              "Trend Micro",
                            ],
                            [
                              "/services/antivirus/Bitdefender-klantenservice-Nederland",
                              "Bitdefender",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* PRINTER */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Printer" ? null : "Printer",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Printer</span>
                        <span
                          className={`transition-transform ${openService === "Printer" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Printer" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/printer/Epson-klantenservice-Nederland",
                              "Epson",
                            ],
                            [
                              "/services/printer/Canon-klantenservice-Nederland",
                              "Canon",
                            ],
                            [
                              "/services/printer/Brother-klantenservice-Nederland",
                              "Brother",
                            ],
                            [
                              "/services/printer/Lexmark-klantenservice-Nederland",
                              "Lexmark",
                            ],
                            [
                              "/services/printer/Hp-klantenservice-Nederland",
                              "HP",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* PC */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(openService === "Pc" ? null : "Pc")
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">PC</span>
                        <span
                          className={`transition-transform ${openService === "Pc" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Pc" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/pc/Dell-klantenservice-Nederland",
                              "Dell",
                            ],
                            ["/services/pc/Hp-klantenservice-Nederland", "HP"],
                            [
                              "/services/pc/Lenova-klantenservice-Nederland",
                              "Lenovo",
                            ],
                            [
                              "/services/pc/Toshiba-klantenservice-Nederland",
                              "Toshiba",
                            ],
                            [
                              "/services/pc/Acer-klantenservice-Nederland",
                              "Acer",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ================= RIGHT COLUMN ================= */}
                  <div>
                    {/* ROUTERS */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Routers" ? null : "Routers",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Routers</span>
                        <span
                          className={`transition-transform ${openService === "Routers" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Routers" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/routers/D'link-klantenservice-Nederland",
                              "D-Link",
                            ],
                            [
                              "/services/routers/Cisco-klantenservice-Nederland",
                              "Cisco",
                            ],
                            [
                              "/services/routers/Netgear-klantenservice-Nederland",
                              "Netgear",
                            ],
                            [
                              "/services/routers/Linksys-klantenservice-Nederland",
                              "Linksys",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* SOCIAL */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Social" ? null : "Social",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Social</span>
                        <span
                          className={`transition-transform ${openService === "Social" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Social" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/social/Instagram-klantenservice-Nederland",
                              "Instagram",
                            ],
                            [
                              "/services/social/Facebook-klantenservice-Nederland",
                              "Facebook",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* BROWSER */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Browser" ? null : "Browser",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Browser</span>
                        <span
                          className={`transition-transform ${openService === "Browser" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Browser" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/browser/Firefox-klantenservice-Nederland",
                              "Firefox",
                            ],
                            [
                              "/services/browser/Chrome-klantenservice-Nederland",
                              "Chrome",
                            ],
                            [
                              "/services/browser/Safari-klantenservice-Nederland",
                              "Safari",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* OTHERS */}
                    <div className="border-b">
                      <div
                        onClick={() =>
                          setOpenService(
                            openService === "Others" ? null : "Others",
                          )
                        }
                        className="flex justify-between items-center py-3 cursor-pointer hover:text-primary"
                      >
                        <span className="font-medium">Others</span>
                        <span
                          className={`transition-transform ${openService === "Others" ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>

                      {openService === "Others" && (
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {[
                            [
                              "/services/others/Coinbase-klantenservice-Nederland",
                              "Coinbase",
                            ],
                            [
                              "/services/others/Paypal-klantenservice-Nederland",
                              "Paypal",
                            ],
                            [
                              "/services/others/Apple-klantenservice-Nederland",
                              "Apple",
                            ],
                            [
                              "/services/others/Office-klantenservice-Nederland",
                              "Office",
                            ],
                            [
                              "/services/others/Adobe-klantenservice-Nederland",
                              "Adobe",
                            ],
                            [
                              "/services/others/Quickbooks-klantenservice-Nederland",
                              "QuickBooks",
                            ],
                            [
                              "/services/others/Exact-klantenservice-Nederland",
                              "Exact",
                            ],
                            [
                              "/services/others/Skype-klantenservice-Nederland",
                              "Skype",
                            ],
                            [
                              "/services/others/Kindle-klantenservice-Nederland",
                              "Kindle",
                            ],
                            [
                              "/services/others/Xbox-klantenservice-Nederland",
                              "Xbox",
                            ],
                          ].map(([path, label]) => (
                            <a
                              key={path}
                              href={path}
                              className="menu-link"
                              onClick={(e) => {
                                if (e.ctrlKey || e.metaKey) return;
                                e.preventDefault();
                                navigate(path);
                                setServicesOpen(false);
                              }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get Protected</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

      
        {/* ================= MOBILE NAVIGATION ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col">
              {/* ================= HOME ================= */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium border-b",
                  location.pathname === "/"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-secondary",
                )}
              >
                Home
              </Link>

              {/* ================= ABOUT ================= */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium border-b",
                  location.pathname === "/about"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-secondary",
                )}
              >
                About Us
              </Link>

              {/* ================= SERVICES (AFTER ABOUT) ================= */}
              <div className="border-b">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      servicesOpen ? "rotate-180" : "",
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="bg-muted/30">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category} className="border-t">
                        {/* CATEGORY HEADER */}
                        <button
                          onClick={() =>
                            setOpenService(
                              openService === category ? null : category,
                            )
                          }
                          className="w-full flex justify-between items-center px-6 py-3 text-sm font-medium"
                        >
                          {category}
                          <span
                            className={cn(
                              "transition-transform",
                              openService === category ? "rotate-45" : "",
                            )}
                          >
                            +
                          </span>
                        </button>

                        {/* SUB LINKS */}
                        {openService === category && (
                          <div
                            className={cn(
                              "flex flex-col bg-background",
                              category === "Others"
                                ? "max-h-48 overflow-y-auto overscroll-contain"
                                : "",
                            )}
                          >
                            {items.map((item) => (
                              <button
                                key={item.path}
                                onClick={() => {
                                  navigate(item.path);
                                  setMobileMenuOpen(false);
                                  setServicesOpen(false);
                                  setOpenService(null);
                                }}
                                className="text-left px-10 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ================= बाकी LINKS ================= */}
              {navLinks
                .filter(
                  (l) => !["Home", "About Us", "Services"].includes(l.label),
                )
                .map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium border-b",
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-secondary",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

              {/* ================= CTA ================= */}
              <Button variant="hero" size="lg" className="m-4" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Protected
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
