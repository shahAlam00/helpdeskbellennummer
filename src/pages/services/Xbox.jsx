import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Xbox = () => {
  return (
    <>
      <SEOHead
        title="Adobe Support NL | Bel +31 202254839"
        description="Adobe problemen? Bel +31 202254839 voor 24/7 hulp bij Photoshop, Acrobat en Creative Cloud. Directe ondersteuning van onze experts!"
        keywords="adobe support nederland, adobe klantenservice, photoshop hulp, acrobat reader werkt niet, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/others/Adobe-klantenservice-Nederland"
      />
      <div className="container mx-auto px-6 py-10">
        <div className="w-full flex justify-center mb-20">
          <div className="relative w-full max-w-6xl h-[180px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
            <img
              src="https://its.hku.hk/wp-content/uploads/software-adobe-01.jpg"
              alt="Exact boekhoudsoftware ondersteuning Nederland"
              // className=" object-cover z-10"
            />
          </div>
        </div>
        {/* ================= HERO ================= */}
        <section className="relative py-10 bg-gradient-to-b from-[#0f1115] via-[#151922] to-[#0f1115] overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-1 gap-12 items-center py-3">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left border rounded-lg">
              <span className="inline-block bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm font-medium mt-2">
                Adobe Support Nederland
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Contacteer <span style={{ color: "red" }}>ADOBE</span>{" "}
                Klantenservice voor
                <span className="text-red-400">
                  {" "}
                  Product- & Technische Ondersteuning
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg">
                Professionele ondersteuning voor Adobe-producten zoals
                Photoshop, Acrobat Reader en Creative Cloud.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pb-3">
                <a
                  href="tel:+31202254839"
                  className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105"
                >
                  📞 +31 202254839
                </a>

                <button className="border border-gray-600 px-8 py-3 rounded-xl hover:bg-white/5 transition">
                  💬 Live Chat
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full rounded-3xl border border-gray-700 bg-[#13161c]/80 backdrop-blur-lg p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-red-400 mb-6">
                Waarom Adobe Support?
              </h3>

              <div className="grid gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 text-sm">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Snelle probleemoplossing</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 text-sm">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">NL & EN ondersteuning</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 text-sm">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Veilig & professioneel advies</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 text-sm">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">
                    Ervaren technische specialisten
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        {/* ================= INTRO ================= */}
        <section className="py-10 bg-[#11151c]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-8xl mx-auto rounded-3xl border border-white/10 bg-[#13161c]/80 backdrop-blur-lg p-8 md:p-10 shadow-2xl ">
              <div className="grid gap-5 text-gray-300 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 mb-3">
                  • Adobe is wereldwijd een toonaangevende innovator in digitale
                  media, ontwerp- en marketingtechnologieën.
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 mb-3">
                  • Sinds 1982 ondersteunt Adobe creatieve professionals,
                  bedrijven en ondernemingen bij het ontwerpen en beheren van
                  digitale content.
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                  • Hulpmiddelen zoals Photoshop, Acrobat Reader en Creative
                  Cloud zijn essentieel geworden in uiteenlopende sectoren.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="py-10 bg-gradient-to-b from-[#0f1115] to-[#151922]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Adobe-producten
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Flash Player",
                  desc: "Interactieve webinhoud & multimedia.",
                },
                {
                  title: "Acrobat Reader",
                  desc: "PDF bekijken, bewerken en ondertekenen.",
                },
                {
                  title: "Photoshop",
                  desc: "Professionele beeldbewerking & design.",
                },
                { title: "CorelDraw", desc: "Vectorontwerp & illustraties." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#13161c] border border-gray-700 rounded-2xl p-6 hover:border-red-400 transition duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-lg font-semibold mb-3 text-red-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMMON ISSUES ================= */}
        <section className="py-10 bg-[#11151c]">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold text-center mb-12">
              Veelvoorkomende Adobe-problemen
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Installatie of update problemen",
                "PDF opent of print niet",
                "Acrobat startfouten",
                "Flash update mislukt",
                "Video’s spelen niet af",
                "Software crasht of traag",
                "Adobe ID vergeten",
                "Browser compatibiliteit issues",
              ].map((issue, i) => (
                <div
                  key={i}
                  className="bg-[#1a1f2b] border border-gray-700 rounded-xl p-4 hover:border-red-400 transition"
                >
                  ✔ {issue}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SUPPORT HELP ================= */}
        <section className="py-24 bg-gradient-to-r from-red-500/5 to-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-8xl mx-auto rounded-3xl border border-white/10 bg-[#13161c]/80 backdrop-blur-lg p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-red-400 pb-4 text-center">
                Hoe onze technici helpen
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Installatie & configuratie</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">PDF & Acrobat foutoplossing</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Adobe ID herstel</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Browser instellingen</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Prestatie optimalisatie</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-red-400 shrink-0">✔</span>
                  <span className="flex-1">Video & YouTube fixes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT OPTIONS ================= */}
        <div className="max-w-6xl mx-auto px-4 mb-24 mt-10">
          <div className="max-w-8xl rounded-3xl border border-white/10 bg-[#13161c]/80 backdrop-blur-lg p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Eén aanspreekpunt voor Adobe ondersteuning in Nederland
            </h2>

            <p className="text-white/90 mb-6">
              Adobe Klantenservice Nederland biedt meerdere
              ondersteuningskanalen om aan verschillende gebruikersvoorkeuren te
              voldoen.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-white/90 mb-6">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3">
                <span className="text-red-400 shrink-0">•</span>
                <span className="flex-1">
                  Gratis telefonische ondersteuning
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3">
                <span className="text-red-400 shrink-0">•</span>
                <span className="flex-1">Live chat ondersteuning</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3">
                <span className="text-red-400 shrink-0">•</span>
                <span className="flex-1">
                  Technische begeleiding via e-mail
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 flex items-center gap-3 text-muted-foreground">
              <span className="text-red-400 shrink-0">•</span>
              <span className="flex-1 text-white/90">
                Voor dringende problemen is bellen naar +31 202254839 de snelste
                manier om hulp te krijgen.
              </span>
            </div>
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="mt-10 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Bel Adobe Support
              <a
                href="https://www.adobe.com/nl/"
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
                Contact Adobe Nederland voor Directe Hulp
              </a>
            </h3>
            <p className="text-white/90">
              Onze technici staan klaar om uw Adobe-software weer optimaal te
              laten werken.
            </p>
          </div>

          <a
            href="tel:+31202254839"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Adobe Support Bellen
          </a>
        </div>
      </div>
    </>
  );
};

export default Xbox;
