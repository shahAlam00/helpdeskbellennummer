import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Coinbase = () => {
  return (
    <>
      <SEOHead
        title="Adobe HelpDesk NL | Bel +31 202254839"
        description="Problemen met Adobe? Bel +31 202254839 voor 24/7 hulp bij Creative Cloud, inloggen en softwarefouten. Directe support!"
        keywords="adobe helpdesk nederland, adobe support nl, creative cloud hulp, adobe software probleem, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/others/Adobe-klantenservice-Nederland"
      />
      <section className="bg-[#0f1115] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-20">
          <div className="w-full flex justify-center mb-20">
            <div className="relative w-full max-w-6xl h-[180px] md:h-[500px] lg:h-[400px] overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/1280px-Coinbase.svg.png"
                alt="Exact boekhoudsoftware ondersteuning Nederland"
                className=" object-cover z-10 w-full"
              />
            </div>
          </div>
          {/* ================= HERO / INTRO ================= */}
          <div className="grid md:grid-cols-2 gap-12 justify-center items-center mt-10">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl font-bold">
                Wat is Coinbase?
              </h1>
              <p className="text-gray-800  leading-relaxed text-sm md:text-base font-light">
                Coinbase is een toonaangevend wereldwijd platform voor
                cryptovalutahandel, waarmee gebruikers digitale valuta zoals
                Bitcoin, Ethereum en Litecoin kunnen kopen, verkopen en opslaan.
                Het platform is opgericht in 2012 en staat bekend om zijn
                gebruiksvriendelijke interface voor zowel beginners als ervaren
                handelaren.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Via de webinterface en mobiele app kunnen gebruikers eenvoudig
                hun cryptoportefeuille beheren, transacties uitvoeren en actuele
                marktinformatie volgen.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://helpdeskbellennummer.com/wp-content/uploads/2025/11/Media_Container-300x300.avif"
                alt="Coinbase App"
                className="w-60 md:w-72 rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* ================= CRYPTO INFO ================= */}
          <div className="max-w-4xl space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold">Wat is Crypto?</h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Cryptovaluta is een digitale valuta die gebruikmaakt van
              cryptografie voor beveiliging. In tegenstelling tot traditionele
              valuta wordt crypto niet beheerd door een centrale autoriteit,
              maar draait het op gedecentraliseerde netwerken.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Bitcoin is de bekendste cryptovaluta, maar er bestaan duizenden
              alternatieven zoals Ethereum, Ripple (XRP) en Litecoin, elk met
              hun eigen toepassingen en voordelen.
            </p>
          </div>

          {/* ================= BLOCKCHAIN ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Wat is een Blockchain?
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Blockchain is een gedecentraliseerde technologie die transacties
                opslaat in blokken die chronologisch aan elkaar zijn gekoppeld.
                Zodra een blok is toegevoegd, kan deze niet meer worden
                aangepast, wat zorgt voor transparantie en veiligheid.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Deze technologie vormt de basis van cryptovaluta en wordt ook
                gebruikt voor slimme contracten, supply chain management en
                digitale identiteitsverificatie.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="https://helpdeskbellennummer.com/wp-content/uploads/2025/11/Media_Container-300x300.avif"
                alt="Blockchain"
                className="w-60 md:w-72 rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* ================= INFO CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Hoe werkt Coinbase Wallet?",
                content:
                  "Coinbase Wallet is een self-custody wallet waarmee gebruikers volledige controle hebben over hun privésleutels. De wallet ondersteunt cryptovaluta, NFT’s en gedecentraliseerde applicaties (DApps) en biedt extra beveiliging zoals encryptie en biometrische authenticatie.",
              },
              {
                title: "Hoe neem ik contact op met het Coinbase Help Centre?",
                content:
                  "Gebruikers kunnen het Coinbase Helpcentrum bezoeken voor handleidingen, livechat gebruiken voor snelle hulp of een supportticket indienen voor complexere problemen.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-2xl p-6 bg-[#13161c] space-y-3"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* ================= STEP LISTS ================= */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-700 rounded-2xl p-6 bg-[#13161c] mt-10">
              <h3 className="text-xl font-semibold mb-4">
                Hoe maak ik een Coinbase-account aan?
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm md:text-base">
                <li>Bezoek de Coinbase website</li>
                <li>Registreer met e-mailadres en wachtwoord</li>
                <li>Verifieer uw identiteit</li>
                <li>Schakel tweefactorauthenticatie in</li>
                <li>Voeg een betaalmethode toe</li>
              </ol>
            </div>

            <div className="border border-gray-700 rounded-2xl p-6 bg-[#13161c] mt-10">
              <h3 className="text-xl font-semibold mb-4">
                Hoe verstuur ik crypto?
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm md:text-base">
                <li>Log in op uw Coinbase-account</li>
                <li>Selecteer de cryptovaluta</li>
                <li>Klik op “Verzenden”</li>
                <li>Voer wallet-adres en bedrag in</li>
                <li>Bevestig de transactie</li>
              </ol>
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div className="max-w-6xl mx-auto mt-12 px-4">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Veelgestelde vragen (FAQ)
            </h2>

            {/* FAQ GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {/* FAQ 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-primary/40 transition">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  🔐 Is Coinbase veilig?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Ja, Coinbase gebruikt geavanceerde beveiliging zoals
                  encryptie, tweestapsverificatie (2FA) en
                  verzekeringsbescherming om gebruikers te beschermen.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-primary/40 transition">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  💸 Kan ik crypto opnemen?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Ja, u kunt cryptocurrency opnemen naar een externe wallet of
                  deze verzenden naar een andere Coinbase-gebruiker.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-primary/40 transition">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  ⏱ Hoe lang duren opnames?
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Bankopnames duren meestal 1–5 werkdagen. Crypto-opnames worden
                  vaak binnen enkele minuten verwerkt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-16 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6 container mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              • Neem Vandaag Nog
              <a
                href="https://www.coinbase.com/en-nll"
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
                Contact Op met Coinbase HelpDesk Nederland
              </a>
            </h3>
            <p className="text-muted-foreground">
              Laat printer- en computerproblemen uw werk niet verstoren. Wij
              staan klaar om u te helpen.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            +31 20 225 4839
          </a>
        </div>
      </section>
    </>
  );
};

export default Coinbase;
