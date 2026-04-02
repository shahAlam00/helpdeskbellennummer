import { Link, useParams } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Monitor,
  Laptop,
  Smartphone,
  Shield,
  ShieldCheck,
  Lock,
  Bug,
  Wifi,
  Eye,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Users
} from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

/* ===============================
   SERVICE SECTION COMPONENT
================================ */
function ServiceSection({ icon, title, description, threats, protections, benefits, id }) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            {icon}
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Common Threats We Protect Against
            </h3>
            <ul className="space-y-3">
              {threats.map((t, i) => (
                <li key={i} className="flex gap-3">
                  <Bug className="w-5 h-5 text-destructive mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get {title}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="bg-card border rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Hoe onze experts u beschermen
            </h3>
            <ul className="space-y-3">
              {protections.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 border rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Uw voordelen
            </h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===============================
   MAIN SERVICES PAGE
================================ */
export default function Services() {
  const { type } = useParams(); // 🔥 computer | laptop | smartphone | undefined

  const services = [
    {
      id: "computer-protection",
      icon: <Monitor className="w-8 h-8" />,
      title: "Computerbeschermingsdiensten",
      description:
        "Uitgebreide beveiliging voor uw desktopcomputer. Onze deskundige technici beveiligen uw systeem op afstand tegen alle digitale dreigingen.",
      threats: [
        "Virussen en trojans",
        "Ransomware",
        "Spyware",
        "Hackers",
        "Phishingaanvallen"
      ],
      protections: [
        "Volledige malware-scan",
        "Firewall-configuratie",
        "Beveiligingsupdates",
        "Browserbeveiliging",
        "Realtime monitoring"
      ],
      benefits: [
        "Veilig werken",
        "Veilig bankieren",
        "Beschermde bestanden",
        "Snellere prestaties",
        "24/7 ondersteuning"
      ]
    },
    {
      id: "laptop-protection",
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptopbeschermingsdiensten",
      description:
        "Mobiele beveiliging die met u meereist.",
      threats: [
        "Openbare wifi risico’s",
        "Malware downloads",
        "Diefstal",
        "Keyloggers",
        "Zero-day exploits"
      ],
      protections: [
        "VPN",
        "Encryptie",
        "Remote wipe",
        "Auto updates",
        "Password manager"
      ],
      benefits: [
        "Veilig onderweg",
        "Werkbescherming",
        "Remote werk",
        "Reisveiligheid",
        "Snelle recovery"
      ]
    },
    {
      id: "smartphone-protection",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smartphonebeschermingsdiensten",
      description:
        "Bescherm het apparaat dat uw meest persoonlijke informatie bevat.",
      threats: [
        "Kwaadaardige apps",
        "SMS phishing",
        "Onveilige wifi",
        "SIM swapping",
        "Tracking"
      ],
      protections: [
        "App-audit",
        "Privacy optimalisatie",
        "Secure messaging",
        "Anti-diefstal",
        "Regelmatige checks"
      ],
      benefits: [
        "Beschermde foto’s",
        "Veilig betalen",
        "Privacy",
        "Expert begeleiding",
        "Gezinsbescherming"
      ]
    }
  ];

  // 🔥 FILTER LOGIC
  const filteredServices = type
    ? services.filter((s) => s.id === type)
    : services;

  return (
    <>
     

      {/* QUICK LINKS */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link to="/services/computer-protection">Computer</Link>
          <Link to="/services/laptop-protection">Laptop</Link>
          <Link to="/services/smartphone-protection">Smartphone</Link>
        </div>
      </section>

      {/* SERVICES */}
      {filteredServices.map((service, index) => (
        <Section key={service.id} className={index % 2 ? "bg-secondary/30" : ""}>
          <ServiceSection {...service} />
        </Section>
      ))}
    </>
  );
}