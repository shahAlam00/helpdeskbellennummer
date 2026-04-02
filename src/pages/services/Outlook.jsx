import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Outlook = () => {
  return (
    <>
      <SEOHead
        title="Outlook Support NL | Bel +31 202254839"
        description="Outlook problemen? Bel +31 202254839 voor 24/7 hulp bij inloggen, synchronisatie en accountherstel. Directe Microsoft mail support!"
        keywords="outlook helpdesk nederland, outlook klantenservice bellen, outlook support nl, outlook synchronisatie, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/email/Outlook-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://handsontek.net/images/M365Admin/Banners/Outlook.png"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-7xl"
          />
        </div>
        {/* ================= HERO ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-background to-background p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Outlook HelpDesk Nederland –{" "}
              <span style={{ color: "blue" }}>24/7</span> Ondersteuning voor
              Outlook & Microsoft Mail
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-3xl">
              Heeft u problemen met Outlook of Outlook.com? Onze professionele{" "}
              <strong>Outlook HelpDesk Nederland</strong> helpt u bij
              inlogproblemen, synchronisatiefouten, accountherstel,
              e-mailproblemen en beveiligingsinstellingen.
            </p>

            <div className="mt-6 flex items-center flex-col sm:flex-row gap-4  sm:items-center">
              <a
                href="tel:+31208088220"
                className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Bel direct voor Outlook ondersteuning
              </a>

              <span className="text-sm text-white/90">
                24/7 bereikbaar • Snelle hulp • Deskundige specialisten
              </span>
            </div>
          </div>
        </div>

        {/* ================= WHY OUTLOOK SUPPORT ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Snelle oplossing van Outlook problemen",
              "Ervaren Microsoft & e-mail experts",
              "Veilige en vertrouwelijke ondersteuning",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-white/90">
                  Professionele Outlook ondersteuning voor particuliere en
                  zakelijke gebruikers in Nederland.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMMON OUTLOOK ISSUES ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Veelvoorkomende Outlook Problemen Die Wij Oplossen
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Kan niet inloggen op Outlook of Outlook.com",
              "Outlook synchroniseert geen e-mails",
              "Outlook blijft hangen of start niet op",
              "Ontbrekende of verdwenen e-mails",
              "Outlook-account is gehackt",
              "Problemen met Office 365 of Microsoft-account",
              "Outlook foutmeldingen of crashes",
              "Problemen met agenda of contactpersonen",
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

        {/* ================= ABOUT OUTLOOK ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-6">
          {/* ===== OUTER BIG BOX ===== */}
          <div
            className="relative rounded-3xl 
                  border border-white/20 
                  bg-white/5 
                  p-8 md:p-10 shadow-xl"
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
                  <span className="text-blue-400 text-xl leading-none">•</span>
                  <span>
                    Microsoft Outlook is een van de meest gebruikte
                    e-mailprogramma’s in Nederland, zowel voor privégebruik als
                    voor bedrijven. Door updates, accountinstellingen en
                    synchronisatie met meerdere apparaten kunnen er soms
                    problemen ontstaan.
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
                  <span className="text-blue-400 text-xl leading-none">•</span>
                  <span>
                    Onze <strong>Outlook HelpDesk Nederland</strong> biedt
                    directe ondersteuning bij technische fouten,
                    accountproblemen, beveiligingsinstellingen en
                    e-mailconfiguratie.
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
                  <span className="text-blue-400 text-xl leading-none">•</span>
                  <span>
                    Of u Outlook gebruikt op Windows, Mac, Android, iPhone of
                    via Outlook.com — wij helpen u stap voor stap tot alles weer
                    correct werkt.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECURITY & RECOVERY ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Beveiliging & Accountherstel voor Outlook
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Herstel van gehackte Outlook-accounts",
              "Wachtwoord resetten en account beveiligen",
              "Instellen van tweestapsverificatie (2FA)",
              "Beveiliging tegen phishing en spam",
              "Controle van verdachte activiteiten",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90"
              >
                🔐 {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= FAQ ================= */}
        <div className="max-w-6xl mx-auto mt-10 mb-24 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Outlook HelpDesk FAQ – Veelgestelde vragen
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"1."} Hoe kan ik mijn Outlook wachtwoord resetten?
              </p>
              <p className="text-white/90">
                Gebruik de optie “Wachtwoord vergeten” of neem contact op met
                onze Outlook HelpDesk voor begeleide ondersteuning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"2."} Waarom synchroniseert Outlook mijn e-mails niet?
              </p>
              <p className="text-white/90">
                Dit kan worden veroorzaakt door verbindingsproblemen,
                accountinstellingen of serverfouten.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"3."} Kan ik verwijderde Outlook e-mails herstellen?
              </p>
              <p className="text-white/90">
                In sommige gevallen kunnen verwijderde e-mails worden
                teruggehaald, afhankelijk van de situatie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"4."} Is Outlook hetzelfde als Hotmail?
              </p>
              <p className="text-white/90">
                Ja, Hotmail is geïntegreerd in Outlook.com en wordt ondersteund
                via Microsoft Outlook.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"5."} Biedt Outlook ondersteuning voor mobiele apparaten?
              </p>
              <p className="text-white/90">
                Ja, Outlook ondersteuning is beschikbaar voor Android en iOS.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog Contact Op met Outlook HelpDesk Nederland
              <a
                href="https://support.microsoft.com/nl-nl/office/aanmelden-bij-outlook-com-e08eb8ac-ac27-49f4-a400-a47311e1ee7e"
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
                Contact Outlook Nederland voor Directe Hulp
              </a>
            </h3>
            <p className="text-white/90">
              Laat e-mail- en accountproblemen uw werk of privéleven niet
              verstoren.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Directe ondersteuning
          </a>
        </div>
      </div>
    </>
  );
};

export default Outlook;
