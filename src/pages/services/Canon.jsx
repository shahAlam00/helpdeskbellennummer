import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Canon = () => {
  return (
    <>
      <SEOHead
        title="Canon HelpDesk NL | Bel +31 202254839"
        description="Canon printer problemen? Bel +31 202254839 voor 24/7 hulp bij WiFi-fouten, drivers en foutcodes. Directe printer support!"
        keywords="canon helpdesk nederland, canon printer support, canon wifi instellen, printer driver hulp, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/printer/Canon-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk9G9FX0g4aS745fb0aOJNI1QA2fBcl59saktWkDslpFeIZRQ_t9IObwSTlO4jxb_93bYTLhr_tXuKVSKjdY7R24hwCuIsofJ_1MMwvkrpvlDKedQDnWUIm18GRxAcuDhAiAFjohUS81s/s1600/banner+ad..jpg"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-6xl"
          />
        </div>
        {/* ================= HERO ================= */}
        <div className="max-w-8xl mb-10 border rounded-lg p-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            <span style={{ color: "red" }}>Canon</span> HelpDesk Nederland –
            Betrouwbare Printer & Scanner Ondersteuning
          </h1>

          <p className="text-white/90 text-lg">
            Heeft u problemen met uw Canon-printer of scanner? Onze
            professionele <strong>Canon HelpDesk Nederland</strong> helpt u snel
            bij installatieproblemen, verbindingsfouten, afdrukproblemen en
            software-instellingen – voor thuis en kantoor.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Bel direct voor Canon ondersteuning
            </a>

            <span className="text-sm text-gray-800 flex items-center">
              Deskundige hulp • Snelle oplossingen • Heel Nederland
            </span>
          </div>
        </div>

        {/* ================= WHY CANON SUPPORT ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 mt-10">
          {[
            "Snelle oplossing van Canon printerproblemen",
            "Ervaren Canon specialisten",
            "Ondersteuning voor thuis & zakelijk gebruik",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-background hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-white/90">
                Wij ondersteunen alle Canon inkjet-, laser- en multifunctionele
                printers en scanners.
              </p>
            </div>
          ))}
        </div>

        {/* ================= COMMON CANON ISSUES ================= */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Veelvoorkomende Canon Problemen Die Wij Oplossen
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-900">
            <li>✔ Canon printer print niet of slecht</li>
            <li>✔ Printer wordt niet herkend door pc of laptop</li>
            <li>✔ Canon printer maakt geen verbinding met WiFi</li>
            <li>✔ Foutcodes of vastgelopen papier</li>
            <li>✔ Inkt- of tonerproblemen</li>
            <li>✔ Canon scanner werkt niet</li>
            <li>✔ Driver- en software-installatieproblemen</li>
            <li>✔ Problemen met draadloos printen</li>
          </ul>
        </div>

        {/* ================= ABOUT CANON ================= */}
        <div className="max-w-4xl space-y-6 text-white/90 mb-10">
          <p>
            {"1."} Canon staat wereldwijd bekend om zijn hoogwaardige printers
            en scanners, maar zelfs de beste apparaten kunnen technische
            problemen ervaren door updates, netwerkconfiguraties of verkeerde
            instellingen.
          </p>

          <p>
            {"2."} Onze <strong>Canon HelpDesk Nederland</strong> biedt
            duidelijke en praktische ondersteuning bij het oplossen van deze
            problemen, zowel op Windows- als Mac-systemen.
          </p>

          <p>
            {"3."} Of u nu een Canon-printer thuis gebruikt of binnen een
            zakelijke omgeving — wij zorgen dat alles weer soepel en betrouwbaar
            werkt.
          </p>
        </div>

        <section className="max-w-8xl mx-auto  mb-10 mt-10">
          <div className="max-w-8xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Canon Installatie, Instellingen & Verbinding
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-2">
                <p className="text-white/90 text-base">
                  Installatie van Canon printerdrivers en software
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-2">
                <p className="text-white/90 text-base">
                  Instellen van WiFi- en netwerkprinters
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-2">
                <p className="text-white/90 text-base">
                  Canon printer verbinden met laptop, pc of mobiel
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-2">
                <p className="text-white/90 text-base">
                  Configuratie voor meerdere gebruikers
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-2 sm:col-span-2">
                <p className="text-white/90 text-base">
                  Instellen van scan-, kopieer- en faxfuncties
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="w-full py-10  bg-slate-50">
          <div className="max-w-8xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Canon HelpDesk FAQ
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                Veelgestelde vragen en directe antwoorden
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {"1."} Waarom print mijn Canon printer niet?
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Dit kan worden veroorzaakt door verbindingsproblemen, lege
                    inktcartridges of foutieve instellingen in het
                    printwachtrij-beheer.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {"2."} Hoe verbind ik mijn Canon printer met WiFi?
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Dit kan via het bedieningspaneel op de printer zelf of met
                    behulp van de officiële Canon installatiesoftware op uw
                    computer.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {"3."} Ondersteunt Canon zowel Windows als macOS?
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Ja, Canon biedt volledige ondersteuning en drivers voor
                    vrijwel alle versies van zowel Windows als macOS.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {"4."} Wat te doen bij een foutmelding?
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Noteer de specifieke foutcode (bijv. B200 of 5100) en neem
                    contact op met onze helpdesk voor een gerichte oplossing.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {"5."} Kan ik draadloos printen vanaf mijn telefoon?
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Zeker! Via de Canon PRINT-app of AirPrint/Mopria kunt u
                    eenvoudig documenten en foto's vanaf uw mobiel versturen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog
              <a
                href="https://www.canon.nl/"
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
                Contact Op met Canon HelpDesk Nederland
              </a>
            </h3>
            <p className="text-muted-foreground">
              Laat printer- en scanproblemen uw werk niet onderbreken. Wij staan
              klaar om u te helpen.
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

export default Canon;
