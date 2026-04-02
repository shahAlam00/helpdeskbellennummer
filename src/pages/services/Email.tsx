import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Email = () => {
  return (
    <>
      <SEOHead
        title="Gmail Support NL | Bel +31 202254839"
        description="Problemen met Gmail? Bel +31 202254839 voor 24/7 hulp bij inlogfouten, gehackte accounts en instellingen. Directe support!"
        keywords="gmail helpdesk nederland, gmail klantenservice bellen, gmail gehackt hulp, gmail inloggen lukt niet, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/email/Gmail-klantenservice-Nederland"
      />
      <div className="container mx-auto px-4 py-10">
        <div className="mb-16  w-full">
          <img
            src="https://img.freepik.com/premium-photo/gmail-logo-banner-3d-render_68185-762.jpg"
            alt="Norton Customer Support"
            className="rounded-xl shadow-md w-full max-w-7xl"
          />
        </div>
        {/* HERO */}
        <div className="max-w-8xl mb-12 border rounded-xl p-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Gmail HelpDesk Nederland – 24/7 Ondersteuning
          </h1>

          <p className="text-white/90 text-lg">
            Heeft u problemen met Gmail? Onze professionele{" "}
            <strong>Gmail HelpDesk</strong>
            biedt snelle en betrouwbare oplossingen voor alle e-mailproblemen –
            van inlogfouten tot gehackte accounts.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:+18778949715"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Bel nu: +31 202254839
            </a>

            <span className="text-sm text-white/90 flex items-center">
              24/7 beschikbaar • Directe ondersteuning
            </span>
          </div>
        </div>

        {/* WHY US */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "Snelle probleemoplossing",
            "Gecertificeerde Gmail experts",
            "100% klanttevredenheid",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-background hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-white/90">
                Wij leveren professionele Gmail ondersteuning met bewezen
                oplossingen.
              </p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="max-w-8xl mx-auto mb-20 px-6">
          {/* ===== OUTER BIG BOX ===== */}
          <div
            className="relative rounded-3xl 
                  border border-white/15 
                  bg-white/5 
                  p-8 md:p-10 shadow-xl"
          >
            {/* outer inner border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white">
              Veelvoorkomende Gmail Problemen Die Wij Oplossen
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Problemen met aanmelden bij Gmail",
                "Ongeldige gebruikersnaam of wachtwoord",
                "Inbox instellingen werken niet",
                "E-mails verdwijnen of komen in spam",
                "Gmail account is gehackt",
                "Problemen met tweestapsverificatie (2FA)",
                "Gmail add-ons werken niet",
                "Partneraccounts functioneren niet correct",
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl 
                     border border-white/15 
                     bg-black/30 
                     p-5 text-white/90 shadow-md"
                >
                  {/* inner border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                  <p className="font-medium">✔ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SUPPORT DETAILS ================= */}
        <div className="max-w-8xl mx-auto mb-10 px-6">
          {/* ===== OUTER BIG BOX ===== */}
          <div
            className="relative rounded-3xl 
                  border border-white/20 
                  bg-white/5 
                  p-8 md:p-10 shadow-xl"
          >
            {/* outer inner border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

            <div className="space-y-6 ">
              {/* ===== ITEM 1 ===== */}
              <div
                className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6 text-white/90"
              >
                {/* inner border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                <p className="flex gap-3">
                  <span className="text-red-500 text-xl leading-none">•</span>
                  <span>
                    Gmail is een essentieel onderdeel van ons dagelijks leven.
                    Door regelmatige updates en complexe
                    beveiligingsinstellingen kunnen er echter problemen
                    ontstaan. Onze <strong>Gmail HelpDesk Nederland</strong>{" "}
                    biedt directe en veilige oplossingen voor elk technisch
                    probleem.
                  </span>
                </p>
              </div>

              {/* ===== ITEM 2 ===== */}
              <div
                className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6 text-white/90"
              >
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                <p className="flex gap-3">
                  <span className="text-red-500 text-xl leading-none">•</span>
                  <span>
                    Of het nu gaat om ontbrekende e-mails, inlogfouten of
                    beveiligingsproblemen – onze experts begeleiden u stap voor
                    stap tot het probleem volledig is opgelost.
                  </span>
                </p>
              </div>

              {/* ===== ITEM 3 ===== */}
              <div
                className="relative rounded-2xl 
                      border border-white/15 
                      bg-black/30 
                      p-6 text-white/90"
              >
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />

                <p className="flex gap-3">
                  <span className="text-red-500 text-xl leading-none">•</span>
                  <span>
                    Wij bieden ondersteuning vanuit huis of kantoor en zijn
                    <strong> 24/7, 365 dagen per jaar</strong> bereikbaar.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Neem
              <a
                href="https://workspace.google.com/intl/nl/gmail/"
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
                Contact Gmail Nederland voor Directe Hulp
              </a>
            </h3>
            <p className="text-white/90">
              Laat e-mailproblemen uw werk of privéleven niet verstoren.
            </p>
          </div>

          <a
            href="tel:+18778949715"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            +31 202254839
          </a>
        </div>
      </div>
    </>
  );
};

export default Email;
