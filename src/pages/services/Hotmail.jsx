import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Hotmail = () => {
  return (
    <>
      <SEOHead
        title="Hotmail Support NL | Bel +31 202254839"
        description="Problemen met Hotmail of Outlook? Bel +31 202254839 voor 24/7 hulp bij inloggen, gehackte accounts en herstel. Directe support!"
        keywords="hotmail helpdesk nederland, hotmail klantenservice bellen, outlook support nl, hotmail wachtwoord herstellen, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/email/Hotmail-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://w7.pngwing.com/pngs/803/100/png-transparent-outlook-com-hotmail-microsoft-account-email-microsoft-text-orange-logo.png"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-6xl"
          />
        </div>
        {/* ================= HERO ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-background to-background p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Hotmail HelpDesk Nederland –{" "}
              <span style={{ color: "orange" }}>24/7</span> Ondersteuning voor
              Hotmail & Outlook
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-3xl">
              Heeft u problemen met uw Hotmail-account? Onze professionele{" "}
              <strong>Hotmail HelpDesk Nederland</strong> helpt u bij
              inlogproblemen, accountherstel, beveiligingsfouten en
              e-mailproblemen. Ook ondersteuning voor Outlook.com gebruikers.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center items-center">
              <a
                href="tel:+31208088220"
                className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                +31 20 225 4839
              </a>

              <span className="text-sm text-white/90">
                24/7 bereikbaar • Snelle oplossingen • Deskundige hulp
              </span>
            </div>
          </div>
        </div>

        {/* ================= WHY HOTMAIL SUPPORT ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Snelle oplossing van Hotmail problemen",
              "Ervaren e-mail & account specialisten",
              "Veilige en vertrouwelijke ondersteuning",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-white/90">
                  Wij bieden professionele Hotmail ondersteuning voor gebruikers
                  in heel Nederland.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMMON HOTMAIL ISSUES ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Veelvoorkomende Hotmail Problemen Die Wij Oplossen
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Hotmail wachtwoord vergeten of resetten",
              "Kan niet inloggen op Hotmail / Outlook",
              "Hotmail-account is gehackt",
              "Ontbrekende of verwijderde e-mails",
              "Hotmail werkt niet of laadt niet",
              "Problemen met tweestapsverificatie",
              "E-mails komen niet binnen of verdwijnen",
              "Synchronisatieproblemen met mobiel of desktop",
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

        {/* ================= ABOUT HOTMAIL ================= */}
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
                    Hotmail, tegenwoordig onderdeel van{" "}
                    <strong>Outlook.com</strong>, is een van de meest gebruikte
                    e-maildiensten ter wereld. Ondanks regelmatige updates en
                    verbeterde beveiliging kunnen gebruikers in Nederland soms
                    problemen ervaren.
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
                    Onze <strong>Hotmail HelpDesk Nederland</strong> biedt
                    ondersteuning bij technische fouten, accountherstel,
                    beveiligingsinstellingen en e-mailconfiguratie op alle
                    apparaten.
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
                    Of u nu Hotmail gebruikt op Windows, Mac, Android of iPhone
                    – wij begeleiden u stap voor stap tot het probleem is
                    opgelost.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECURITY & RECOVERY ================= */}
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Beveiliging & Accountherstel voor Hotmail
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Herstellen van gehackte Hotmail-accounts",
              "Wachtwoord wijzigen en account beveiligen",
              "Instellen van tweestapsverificatie (2FA)",
              "Bescherming tegen phishing en spam",
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
        <div className="max-w-6xl mx-auto mt-10 mb-14 px-4">
          <h2 className="text-2xl font-bold mb-8">
            Hotmail HelpDesk FAQ – Veelgestelde vragen
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"1."} Hoe kan ik mijn Hotmail wachtwoord resetten?
              </p>
              <p className="text-white/90">
                Gebruik de optie “Wachtwoord vergeten” of neem contact op met
                onze Hotmail HelpDesk voor begeleide ondersteuning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"2."} Kan ik verwijderde Hotmail e-mails terughalen?
              </p>
              <p className="text-white/90">
                In sommige gevallen is herstel mogelijk, afhankelijk van hoe
                lang geleden de e-mails zijn verwijderd.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-medium-2">
                {"3."} Waarom ontvang ik geen e-mails in Hotmail?
              </p>
              <p className="text-white/90">
                Dit kan te maken hebben met spamfilters, opslaglimieten of
                synchronisatieproblemen.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"4."} Wordt Hotmail nog steeds ondersteund?
              </p>
              <p className="text-white/90">
                Ja, Hotmail is geïntegreerd in Outlook.com en wordt actief
                ondersteund door Microsoft.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold mb-2">
                {"5."} Is Hotmail ondersteuning beschikbaar voor mobiel?
              </p>
              <p className="text-white/90">
                Ja, ondersteuning is beschikbaar voor Android- en iOS-apparaten.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem
              <a
                href="https://support.microsoft.com/nl-nl/office/aanmelden-bij-hotmail-c378938b-c0eb-40c1-b99e-338dd9e776a8"
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
                Contact Hotmail Nederland voor Directe Hulp
              </a>
            </h3>
            <p className="text-white/90">
              Laat e-mailproblemen uw werk of privéleven niet verstoren.
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

export default Hotmail;
