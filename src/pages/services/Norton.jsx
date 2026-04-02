import Nort1 from "../../assets/Nort1.jpg";
import Nort2 from "../../assets/Nort2.jpg";
import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Norton = () => {
  return (
    <>
      <SEOHead
        title="Norton Support Drenthe | Bel +31 202254839"
        description="Norton problemen? Bel +31 202254839 voor 24/7 hulp bij installatie, verlenging en virusverwijdering in Drenthe. Directe expert support!"
        keywords="norton helpdesk drenthe, norton klantenservice nederland, norton verlengen, antivirus hulp drenthe, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/antivirus/Norton-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/adb502c1-59ba-4df4-956d-85215d163883.__CR0,0,970,300_PT0_SX970_V1___.png"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-7xl"
          />
        </div>
        {/* ================= PAGE WRAPPER ================= */}
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* ================= HERO ================= */}
          <section>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-background to-background p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Norton HelpDesk Drenthe –
                <span style={{ color: "yellow" }}>
                  Betrouwbare Klantenservice
                </span>
              </h1>

              <p className="text-white/90 text-base md:text-lg max-w-3xl">
                Heeft u problemen met uw Norton-beveiligingssoftware? Onze
                professionele <strong>Norton HelpDesk</strong> biedt snelle en
                veilige oplossingen voor installatie-, verlengings- en
                beveiligingsproblemen.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center sm:items-center">
                <a
                  href="#"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
                >
                  Bel nu: +31 20 225 4839
                </a>

                <span className="text-sm text-white/90">
                  24/7 beschikbaar • Directe ondersteuning
                </span>
              </div>
            </div>
          </section>

          {/* ================= WHY US ================= */}
          <section>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                "Snelle probleemoplossing",
                "Gecertificeerde Norton experts",
                "Veilige & betrouwbare ondersteuning",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-yellow-500/30 bg-white/5 p-6"
                >
                  <h3 className="font-semibold text-lg mb-2 text-yellow-400">
                    {item}
                  </h3>
                  <p className="text-sm text-white/90">
                    Wij leveren professionele Norton ondersteuning met bewezen
                    oplossingen voor elk beveiligingsprobleem.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SERVICES ================= */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-8">
              Veelvoorkomende Norton Problemen Die Wij Oplossen
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Norton installatie of activering mislukt",
                "Problemen met verlenging van abonnement",
                "Norton antivirus werkt niet correct",
                "Apparaat is besmet met malware",
                "Norton firewall blokkeert internet",
                "Inlogproblemen met Norton-account",
                "Vertraagde pc door beveiligingssoftware",
                "Ongewenste pop-ups of waarschuwingen",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-yellow-500/20 bg-white/5 p-4 text-sm text-white/90"
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </section>

          {/* ================= SUPPORT DETAILS ================= */}
          <section className="container mx-auto mt-10 px-4">
            {/* ===== OUTER BIG BOX ===== */}
            <div
              className="relative rounded-3xl 
                  border border-white/20 
                  bg-white/5 
                  p-8 md:p-10 shadow-xl max-w-67xl"
            >
              {/* outer inner border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                {/* ===== ITEM 1 ===== */}
                <div
                  className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6"
                >
                  {/* inner border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                  <p className="flex gap-3 leading-relaxed">
                    <span className="text-yellow-400 text-xl leading-none">
                      •
                    </span>
                    <span>
                      Norton is een van de meest gebruikte
                      beveiligingsoplossingen ter wereld, maar complexe
                      instellingen en updates kunnen soms problemen veroorzaken.
                      Onze <strong>Norton HelpDesk Drenthe</strong> biedt snelle
                      en veilige ondersteuning voor thuis- en zakelijke
                      gebruikers.
                    </span>
                  </p>
                </div>

                {/* ===== ITEM 2 ===== */}
                <div
                  className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6"
                >
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                  <p className="flex gap-3 leading-relaxed">
                    <span className="text-yellow-400 text-xl leading-none">
                      •
                    </span>
                    <span>
                      Of het nu gaat om installatieproblemen, verlengingen of
                      beveiligingswaarschuwingen – onze experts begeleiden u
                      stap voor stap totdat het probleem volledig is opgelost.
                    </span>
                  </p>
                </div>

                {/* ===== ITEM 3 ===== */}
                <div
                  className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6 md:col-span-2"
                >
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                  <p className="flex gap-3 leading-relaxed">
                    <span className="text-yellow-400 text-xl leading-none">
                      •
                    </span>
                    <span>
                      Wij zijn <strong>24/7, 365 dagen per jaar</strong>{" "}
                      beschikbaar en bieden ondersteuning op afstand.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= IMAGE + TIPS ================= */}
          <section className="mt-10">
            <img
              src={Nort2}
              alt="Norton Support Tips"
              className="rounded-2xl shadow-lg w-full mb-10 border border-yellow-500/20"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-400 mt-10">
              Tips voor Snellere Norton Ondersteuning
            </h2>

            <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-8 max-w-7xl mx-auto">
              <ul className="list-disc list-inside space-y-4 text-white">
                <li>
                  <strong style={{ color: "yellow" }}>Wees voorbereid:</strong>{" "}
                  Houd product- en apparaatgegevens bij de hand.
                </li>
                <li>
                  <strong style={{ color: "yellow" }}>Blijf geduldig:</strong>{" "}
                  Een duidelijke uitleg helpt bij snellere oplossingen.
                </li>
                <li>
                  <strong style={{ color: "yellow" }}>
                    Kies het juiste kanaal:
                  </strong>{" "}
                  Telefonische ondersteuning is ideaal voor dringende problemen.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog
              <a
                href="https://nl.norton.com/"
                target="_blank"
                style={{
                  backgroundColor: "#2563eb", // blue-600
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
                Contact Op met Norton HelpDesk
              </a>
            </h3>
            <p className="text-white/90">
              Laat beveiligingsproblemen uw werk of privacy niet verstoren.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            +31 20 808 8220
          </a>
        </div>
      </div>
    </>
  );
};

export default Norton;
