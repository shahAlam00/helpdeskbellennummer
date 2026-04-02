import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Epson = () => {
  return (
    <>
      <SEOHead
        title="Epson Support NL | Bel +31 202254839"
        description="Epson printer problemen? Bel +31 202254839 voor 24/7 hulp bij WiFi-fouten, drivers en installatie. Directe printer support!"
        keywords="epson helpdesk nederland, epson printer support, epson wifi instellen, printer driver installatie, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/printer/Epson-klantenservice-Nederland"
      />

      <div className="container mx-auto px-6 py-10">
        <div className="mb-16 w-full">
          <img
            src="https://iprsoftwaremedia.com/108/files/20214/60909ba5b3aed365d13a686e_Banner%20MNR%20ET%20Photo_ET%20Pro/Banner%20MNR%20ET%20Photo_ET%20Pro_60e877d3-c51b-4909-b57a-d60e2f902159-prv.png"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-6xl"
          />
        </div>

        {/* ================= HERO ================= */}
        <div className="max-w-8xl mb-14 border rounded-lg p-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            <span style={{ color: "blue" }}>Epson</span> HelpDesk Nederland –
            Deskundige Printer Ondersteuning
          </h1>

          <p className="text-white/90 text-md">
            Heeft u problemen met uw Epson-printer? Onze professionele{" "}
            <strong>Epson HelpDesk Nederland</strong> biedt snelle en
            betrouwbare ondersteuning bij printerstoringen,
            installatieproblemen, verbindingsfouten en afdrukproblemen.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Bel direct voor Epson ondersteuning
            </a>

            <span className="text-sm text-white/90 flex items-center">
              Snelle hulp • Deskundige technici • Heel Nederland
            </span>
          </div>
        </div>

        {/* ================= WHY EPSON SUPPORT ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 mt-8">
          {[
            "Snelle oplossing van printerproblemen",
            "Ervaren Epson printer specialisten",
            "Ondersteuning voor thuis & kantoor",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-background hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-white/90">
                Wij helpen u met alle Epson inkjet- en laserprinters, zowel
                particulier als zakelijk.
              </p>
            </div>
          ))}
        </div>

        {/* ================= COMMON EPSON ISSUES ================= */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Veelvoorkomende Epson Printer Problemen Die Wij Oplossen
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-white/90">
            <li>✔ Epson printer print niet</li>
            <li>✔ Printer wordt niet herkend door computer</li>
            <li>✔ WiFi- of netwerkproblemen met Epson printer</li>
            <li>✔ Vastgelopen papier of foutmeldingen</li>
            <li>✔ Slechte afdrukkwaliteit of strepen</li>
            <li>✔ Inktcartridges worden niet herkend</li>
            <li>✔ Epson scanner werkt niet</li>
            <li>✔ Driver- en software-installatieproblemen</li>
          </ul>
        </div>

        {/* ================= ABOUT EPSON ================= */}
        <section className="mb-20">
          <div className="max-w-8xl mx-auto px-4">
            {/* OUTER BORDER (same feel as navbar sections) */}
            <div
              className="relative rounded-3xl p-[1px]
                    bg-gradient-to-br from-primary/40 via-border to-border"
            >
              {/* INNER CONTAINER */}
              <div className=" rounded-3xl bg-background p-6 sm:p-10">
                <div className="max-w-8xl space-y-4">
                  {/* ITEM 1 */}
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Epson-printers staan bekend om hun betrouwbaarheid en hoge
                      afdrukkwaliteit, maar zoals bij elke printer kunnen er
                      technische problemen ontstaan. Denk aan verbindingsfouten,
                      software-updates of problemen met inkt en papier.
                    </p>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Onze{" "}
                      <strong className="text-primary">
                        Epson HelpDesk Nederland
                      </strong>{" "}
                      biedt duidelijke, stap-voor-stap ondersteuning bij het
                      oplossen van deze printerproblemen, zowel op Windows als
                      Mac-systemen.
                    </p>
                  </div>

                  {/* ITEM 3 */}
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Of u nu een Epson-printer thuis gebruikt of op kantoor —
                      wij zorgen ervoor dat uw printer snel weer probleemloos
                      werkt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INSTALLATION & SETUP ================= */}
        <section className="max-w-8xl mx-auto  mb-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-10">
              Epson Installatie, Instellingen & Verbinding
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-2">
                <p className="text-white/90 text-base">
                  Installatie van Epson printerdrivers en software
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-2">
                <p className="text-white/90 text-base">
                  Instellen van WiFi- en netwerkprinters
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-2">
                <p className="text-white/90 text-base">
                  Verbinden van Epson printer met laptop of pc
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-2">
                <p className="text-white/90 text-base">
                  Configuratie voor meerdere apparaten
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-2 sm:col-span-2">
                <p className="text-white/90 text-base">
                  Instellen van scan- en kopieerfuncties
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="max-w-8xl mx-auto  mb-10">
          <div className="max-w-8xl mt-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Epson HelpDesk FAQ – Veelgestelde vragen
            </h2>

            <div className="space-y-6 mt-10">
              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="font-semibold mb-2">
                  {"1."} Waarom print mijn Epson printer niet?
                </p>
                <p className="text-white/90">
                  Dit kan te maken hebben met verbindingsproblemen, lege
                  inktcartridges of foutieve printerinstellingen.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="font-semibold mb-2">
                  {"2."} Hoe verbind ik mijn Epson printer met WiFi?
                </p>
                <p className="text-white/90">
                  Dit kan via het bedieningspaneel van de printer of met behulp
                  van de Epson installatiesoftware.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="font-semibold mb-2">
                  {"3"} Wat moet ik doen als mijn Epson printer vastloopt?
                </p>
                <p className="text-white/90">
                  Controleer op vastgelopen papier en reset de printer. Onze
                  helpdesk kan u hierbij begeleiden.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="font-semibold mb-2">
                  {"4."} Werkt mijn Epson printer met Windows en Mac?
                </p>
                <p className="text-white/90">
                  Ja, Epson ondersteunt zowel Windows- als macOS-systemen.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="font-semibold mb-2">
                  {"5."} Kan ik mijn Epson printer draadloos gebruiken?
                </p>
                <p className="text-white/90">
                  Ja, de meeste Epson-printers ondersteunen draadloos printen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-16 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog Contact Op met Epson HelpDesk Nederland
              <a
                href="https://www.epson.nl/nl_NL"
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
                Contact Op met Epson HelpDesk Nederland
              </a>
            </h3>
            <p className="text-muted-foreground">
              Laat printerproblemen uw werk niet vertragen. Wij staan klaar om u
              te helpen.
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

export default Epson;
