import React from "react";
import { SEOHead } from "@/components/SEOHead";
const McAfeeContent = () => {
  return (
    <>
      <SEOHead
        title="McAfee Support NL & BE | Bel +31 202254839"
        description="Problemen met McAfee? Bel +31 202254839 voor 24/7 hulp bij installatie, verlenging en virusverwijdering in NL & BE. Directe expert support!"
        keywords="mcafee helpdesk nederland, mcafee support belgië, mcafee verlengen, antivirus hulp, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/antivirus/Mcafee-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://syntegritytech.com/wp-content/uploads/2024/10/4-banner.jpg"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-7xl"
          />
        </div>
        {/* ================= HERO ================= */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            McAfee HelpDesk Nederland & België –{" "}
            <span style={{ color: "red" }}> 24/7 Ondersteuning</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Heeft u problemen met uw antivirussoftware? Onze professionele{" "}
            <strong>McAfee HelpDesk</strong> biedt snelle, veilige en
            betrouwbare ondersteuning voor klanten in Nederland en België.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:08000201376"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Bel NL: +31 20 225 4839
            </a>

            <span className="text-sm text-muted-foreground flex items-center">
              24/7 beschikbaar • Directe hulp
            </span>
          </div>
        </div>

        {/* ================= WHY US ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 mt-10">
          {[
            "Snelle technische ondersteuning",
            "Gecertificeerde McAfee experts",
            "Veilige & betrouwbare oplossingen",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-background hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-muted-foreground">
                Professionele ondersteuning voor antivirus, accounts en
                beveiligingsproblemen.
              </p>
            </div>
          ))}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white px-6">
          {/* ================= COMMON ISSUES ================= */}
          <section className="py-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
                Veelvoorkomende McAfee Problemen Die Wij Oplossen
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
                {[
                  "McAfee installatie of update mislukt",
                  "Abonnement verlengen of annuleren",
                  "Virus- en malwareverwijdering",
                  "McAfee vertraagt uw computer",
                  "Firewall of internetproblemen",
                  "Inlogproblemen met McAfee-account",
                  "Facturering en terugbetalingen",
                  "Problemen met mobiele beveiliging",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black p-6 rounded-2xl border border-red-500/30 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition"
                  >
                    ✔ {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= SUPPORT OPTIONS ================= */}
          <section className="py-10 bg-black">
            <div className="max-w-5xl mx-auto space-y-8 text-gray-300 text-lg">
              <div className="bg-gray-900 px-8 py-8 rounded-2xl border border-red-500/20 ">
                <p>
                  {"1.}"} McAfee is een wereldwijd bekende
                  beveiligingsoplossing, maar complexe instellingen en
                  regelmatige updates kunnen soms problemen veroorzaken. Onze{" "}
                  <strong className="text-red-500">
                    McAfee HelpDesk Nederland & België
                  </strong>{" "}
                  staat klaar om u snel en veilig te helpen.
                </p>
              </div>

              <div className="bg-gray-900 px-8 py-8 rounded-2xl border border-red-500/20">
                <p>
                  {"2."} Of het nu gaat om technische ondersteuning,
                  accountbeheer of terugbetalingen – onze experts begeleiden u
                  stap voor stap totdat het probleem volledig is opgelost.
                </p>
              </div>

              <div className="bg-gray-900 px-8 py-8 rounded-2xl border border-red-500/20">
                <p>
                  {"3."} Wij bieden ondersteuning via{" "}
                  <strong className="text-red-500">
                    telefoon, livechat en online hulpmiddelen
                  </strong>{" "}
                  en zijn 24/7 beschikbaar.
                </p>
              </div>
            </div>
          </section>

          {/* ================= FAQ ================= */}
          <section className="py-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-red-500">
                Veelgestelde vragen over McAfee Support
              </h2>

              <div className="space-y-6">
                <div className="bg-black border border-red-500/20 rounded-2xl p-8">
                  <p className="text-gray-300">
                    <strong className="text-red-500">
                      {"1."} Hoe neem ik contact op met McAfee?
                    </strong>
                    <br />
                    Via telefoon, livechat of online ondersteuning.
                  </p>
                </div>

                <div className="bg-black border border-red-500/20 rounded-2xl p-8">
                  <p className="text-gray-300">
                    <strong className="text-red-500">
                      {"2."} Kan McAfee helpen met refunds?
                    </strong>
                    <br />
                    Ja, volgens het officiële terugbetalingsbeleid.
                  </p>
                </div>

                <div className="bg-black border border-red-500/20 rounded-2xl p-8">
                  <p className="text-gray-300">
                    <strong className="text-red-500">
                      {"3."}Biedt McAfee mobiele ondersteuning?
                    </strong>
                    <br />
                    Ja, ook voor McAfee Mobile Security.
                  </p>
                </div>

                <div className="bg-black border border-red-500/20 rounded-2xl p-8">
                  <p className="text-gray-300">
                    <strong className="text-red-500">
                      {"4."} Is ondersteuning meertalig?
                    </strong>
                    <br />
                    Ja, beschikbaar in Nederlands en Frans.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog{" "}
              <a
                href="https://www.mcafee.com/nl-nl/index.html"
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
                Contact Op met McAfee HelpDesk
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
            +31 202254839
          </a>
        </div>
      </div>
    </>
  );
};

export default McAfeeContent;
