import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Cisco = () => {
  return (
    <>
      <SEOHead
        title="Cisco Support NL | Bel +31 202254839"
        description="Cisco netwerk of router problemen? Bel +31 202254839 voor 24/7 hulp bij switches, firewalls en updates. Directe expert support!"
        keywords="cisco klantenservice nederland, cisco support nl, cisco router problemen, netwerkondersteuning, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/routers/Cisco-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://newsroom.ibm.com/image/Cisco+Banner_1920x720.jpg"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-6xl"
          />
        </div>
        {/* ================= HERO ================= */}
        <div className="max-w-8xl mb-14 border rounded-lg p-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            <span style={{ color: "#3998BF" }}>CISCO</span> Klantenservice
            Nederland – Professionele Netwerk Ondersteuning
          </h1>

          <p className="text-white/90 text-lg">
            Heeft u problemen met uw Cisco router, switch of netwerkoplossing?
            Onze ervaren <strong>Cisco Klantenservice Nederland</strong>
            biedt snelle en betrouwbare ondersteuning bij netwerkstoringen,
            configuratiefouten, beveiligingsproblemen en prestatiekwesties voor
            zowel bedrijven als thuisgebruik.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Bel Cisco Support
            </a>

            <span className="text-sm text-white/90">
              Netwerkspecialisten • Snelle service • Heel Nederland
            </span>
          </div>
        </div>

        {/* ================= WHY CISCO SUPPORT ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 mt-10">
          {[
            "Snelle oplossing van complexe netwerkproblemen",
            "Gespecialiseerde Cisco netwerkexperts",
            "Ondersteuning voor MKB & enterprise omgevingen",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-background hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-white/90">
                Wij ondersteunen Cisco routers, switches, firewalls, access
                points en zakelijke netwerken.
              </p>
            </div>
          ))}
        </div>

        {/* ================= COMMON CISCO ISSUES ================= */}
        <div className="max-w-8xl mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Veelvoorkomende Cisco Problemen Die Wij Oplossen
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-white/90">
            <li>✔ Cisco router of switch werkt niet</li>
            <li>✔ Netwerk is traag of valt regelmatig uit</li>
            <li>✔ Problemen met VLAN of routing</li>
            <li>✔ Firewall- en beveiligingsconfiguratie</li>
            <li>✔ Firmware- en IOS-updates</li>
            <li>✔ VPN- en remote access problemen</li>
            <li>✔ Apparaten krijgen geen IP-adres</li>
            <li>✔ Netwerkmonitoring en optimalisatie</li>
          </ul>
        </div>

        {/* ================= ABOUT CISCO ================= */}
        <section className="mb-20">
          <div className="max-w-8xl mx-auto">
            <div className="rounded-3xl border bg-background p-8 md:p-10 space-y-6">
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {"1."} Cisco is wereldwijd marktleider op het gebied van
                netwerk- en IT-oplossingen voor bedrijven en organisaties.
                Cisco-apparatuur staat bekend om betrouwbaarheid, schaalbaarheid
                en geavanceerde beveiliging.
              </p>

              <div className="h-px bg-border" />

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {"2."} Door complexe netwerkstructuren en configuraties kunnen
                er echter storingen of prestatieproblemen ontstaan. Onze{" "}
                <strong className="text-foreground">
                  Cisco Klantenservice Nederland
                </strong>
                helpt u deze problemen snel en professioneel op te lossen.
              </p>

              <div className="h-px bg-border" />

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {"3."} Of u nu een klein bedrijfsnetwerk beheert of een
                uitgebreide enterprise-infrastructuur — wij zorgen voor een
                stabiel, veilig en efficiënt netwerk.
              </p>
            </div>
          </div>
        </section>

        {/* ================= INSTALLATION & CONFIGURATION ================= */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="mb-8 mt-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Cisco Installatie, Configuratie & Beveiliging
              </h2>
              <div className="h-1 w-14 bg-primary mt-3 rounded-full"></div>
            </div>

            {/* Content Box */}
            <div className="rounded-2xl border border-border bg-background/60 p-6 md:p-8">
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-white/90 text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Installatie en configuratie van Cisco routers en switches
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Netwerkontwerp en optimalisatie</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Beveiliging met firewalls en toegangscontrole</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Firmware- en IOS-updates</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                  <span>VPN-, cloud- en remote access oplossingen</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="mb-10 ">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Cisco Support FAQ – Veelgestelde vragen
              </h2>
              <div className="h-1 w-16 bg-primary mt-3 rounded-full"></div>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background/60 p-6 mt-10">
                <h4 className="font-semibold text-lg mb-2">
                  {"1."} Waarom werkt mijn Cisco netwerk niet goed?
                </h4>
                <p className="text-white/90">
                  Dit kan komen door configuratiefouten, firmwareproblemen of
                  netwerkbelasting.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-6">
                <h4 className="font-semibold text-lg mb-2">
                  {"2."} Kunnen jullie helpen met Cisco IOS updates?
                </h4>
                <p className="text-white/90">
                  Ja, wij ondersteunen veilige en correcte updates van Cisco IOS
                  software.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-6">
                <h4 className="font-semibold text-lg mb-2">
                  {"3."} Bieden jullie ondersteuning voor zakelijke netwerken?
                </h4>
                <p className="text-white/90">
                  Ja, wij bieden ondersteuning voor MKB en enterprise Cisco
                  netwerkomgevingen.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-6">
                <h4 className="font-semibold text-lg mb-2">
                  {"4."} Kunnen jullie helpen bij netwerkbeveiliging?
                </h4>
                <p className="text-white/90">
                  Ja, wij helpen bij firewallconfiguratie, VPN’s en
                  netwerkbeveiliging.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-6 md:col-span-2">
                <h4 className="font-semibold text-lg mb-2">
                  {"5."} Is ondersteuning ook op afstand mogelijk?
                </h4>
                <p className="text-white/90">
                  Ja, veel Cisco problemen kunnen veilig op afstand worden
                  opgelost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-12 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem
              <a
                href="https://www.cisco.com/site/nl/nl/index.html"
                target="_blank"
                style={{
                  marginLeft: "4px",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: "500",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1d4ed8")
                } // blue-700
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
              >
                Contact Op met Cisco Klantenservice Nederland
              </a>
            </h3>
            <p className="text-muted-foreground">
              Zorg voor een stabiel en veilig netwerk met professionele Cisco
              ondersteuning.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            +31 20 225 4839
          </a>
        </div>
      </div>
    </>
  );
};

export default Cisco;
