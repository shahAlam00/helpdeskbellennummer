import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Office = () => {
  return (
    <>
      <SEOHead
        title="Office 365 Support NL | Bel +31 202254839"
        description="Problemen met Office 365? Bel +31 202254839 voor 24/7 hulp bij Outlook, Word en installaties. Directe ondersteuning van experts!"
        keywords="microsoft office 365 support nederland, office 365 klantenservice, outlook hulp, office installeren, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/others/Office-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        {/* ================= TOP IMAGE ================= */}
        <div className="w-full flex justify-center mb-20">
          <div className="relative w-full max-w-6xl h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] overflow-hidden rounded-2xl shadow-sm">
            <img
              src="https://mycodes24.com/wp-content/uploads/2023/11/0bd97401-0cdd-4fec-aba9-fbb54ab9d55b-scaled.jpg"
              alt="Microsoft Office 365 klantenservice Nederland"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= HERO / INTRO ================= */}
        <div className="max-w-6xl mx-auto mt-16 px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-background to-background p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Contacteer Microsoft Office 365 Klantenservice in Nederland voor
              Technische Ondersteuning
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-3xl">
              Microsoft Office 365 is een krachtige cloudgebaseerde
              productiviteitssuite voor zowel particuliere als professionele
              gebruikers.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="text-lg font-semibold">
                📞 Directe ondersteuning:
                <span className="text-primary ml-2">+31 202254839</span>
              </div>
              <span className="text-sm text-white/90">
                24/7 beschikbaar in Nederland
              </span>
            </div>
          </div>
        </div>

        {/* ================= INTRO CONTENT ================= */}
        <div className="max-w-6xl mx-auto  px-4 grid md:grid-cols-2 gap-8 text-muted-foreground mt-10">
          <p>
            Office 365 combineert een breed scala aan toepassingen en online
            diensten die individuen en bedrijven helpen efficiënter te werken.
          </p>

          <p>
            Van documentcreatie en gegevensanalyse tot e-mailbeheer en online
            samenwerking speelt Office 365 een essentiële rol in dagelijkse
            bedrijfsactiviteiten.
          </p>

          <p>
            Microsoft biedt meerdere abonnementsvormen voor thuisgebruikers,
            professionals en organisaties met toegang tot Word, Excel,
            PowerPoint, Outlook en meer.
          </p>

          <p>
            Door regelmatige updates en systeemwijzigingen kunnen soms
            onverwachte technische problemen ontstaan die professionele
            ondersteuning vereisen.
          </p>
        </div>

        {/* ================= WHY SUPPORT ================= */}
        <div className="max-w-6xl mx-auto mt-20 px-4 mt-10">
          <h2 className="text-2xl font-bold mb-8">
            Waarom Office 365 gebruikers professionele ondersteuning nodig
            hebben
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-muted-foreground">
                Door voortdurende verbeteringen en beveiligingsupdates kunnen
                gebruikers te maken krijgen met installatie- en
                prestatieproblemen.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-muted-foreground">
                Professionele ondersteuning voorkomt gegevensverlies en zorgt
                voor stabiele en veilige oplossingen.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SUPPORTED DEVICES ================= */}
        <div className="max-w-6xl mx-auto mt-20 px-4 mt-10">
          <h2 className="text-2xl font-bold mb-8">
            Applicaties en apparaten die wij ondersteunen
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Windows desktops en laptops",
              "macOS systemen",
              "Android smartphones en tablets",
              "iOS apparaten",
              "Microsoft Word",
              "Excel en PowerPoint",
              "Outlook en OneNote",
              "Access, Skype & samenwerkingstools",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-mwhite/90"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMMON ISSUES ================= */}
        <div className="max-w-6xl mx-auto mt-20 px-4 mt-10">
          <h2 className="text-2xl font-bold mb-8">
            Veelvoorkomende Office 365 problemen die wij oplossen
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Word-documenten openen of bewerken niet",
              "Excel-formules werken niet correct",
              "PowerPoint-presentatiefouten",
              "Outlook synchronisatie- of inlogproblemen",
              "Installatie- of updateproblemen",
              "Verloren of verwijderde bestanden",
              "Prestatieproblemen of crashes",
              "Compatibiliteitsproblemen",
            ].map((issue) => (
              <div
                key={issue}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/90"
              >
                ✔ {issue}
              </div>
            ))}
          </div>
        </div>

        {/* ================= HOW WE HELP ================= */}
        <div className="max-w-6xl mx-auto mt-20 px-4 ">
          <h2 className="text-2xl font-bold mb-8 mt-10">
            Hoe Office 365 Support Nederland u helpt
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-white/90">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              🔍 Analyse van het probleem
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              🛠 Stap-voor-stap probleemoplossing
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              ✅ Oplossing vaak binnen één sessie
            </div>
          </div>
        </div>

        {/* ================= 24/7 CTA ================= */}
        <div className="max-w-6xl mx-auto mt-20 mb-24 px-4">
          <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 p-8 text-center mt-10">
            <h2 className="text-2xl font-bold mb-4">
              24/7 Office 365 Klantenservice in Nederland
            </h2>
            <p className="text-muted-foreground mb-6">
              Bel direct voor veilige en professionele ondersteuning, wanneer u
              die nodig heeft.
            </p>
            <p className="text-xl font-semibold text-primary">
              📞 +31 202254839
            </p>
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Ontvang Vandaag Nog
              <a
                href="https://www.microsoft.com/nl-nl/microsoft-365?market=nl"
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
                Contact Office 365 Ondersteuning
              </a>
            </h3>
            <p className="text-muted-foreground">
              Laat technische problemen uw productiviteit niet beïnvloeden. Onze
              experts staan klaar om u te helpen.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Office 365 Support Bellen
          </a>
        </div>
      </div>
    </>
  );
};

export default Office;
