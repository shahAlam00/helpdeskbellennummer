import React from "react";
import { SEOHead } from "@/components/SEOHead";
const Apple = () => {
  return (
    <>
      <SEOHead
        title="Apple Support NL & BE | Bel +31 202254839"
        description="Hulp bij Apple? Bel +31 202254839 voor 24/7 support bij Apple ID, iPhone en Mac-instellingen. Directe hulp van experts in NL en BE!"
        keywords="apple klantenservice nederland, apple support belgië, iphone hulp, apple id herstel, +31 202254839"
        canonical="https://helpdeskbellennummer.com/services/others/Apple-klantenservice-Nederland"
      />
      <section className="bg-[#0f1115] text-white">
        <div className="border-5 border-yellow-400 max-w-7xl mx-auto px-4 py-10 space-y-20">
          <div className=" w-full flex justify-center mb-20">
            <div className=" relative w-full max-w-7xl  sm:h-[180px] md:h-[220px] lg:h-[100px] overflow-hidden rounded-2xl">
              <img
                src="https://milaaj.com/static/media/apple.65d0db786b372da606b0.jpg"
                alt="Skype klantenservice Nederland"
                className="  w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= HERO ================= */}
          <div className="max-w-6xl mx-auto text-center space-y-5 mt-10 border rounded-lg p-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Apple Klantenservice Nederland & België – Nummer, Chat en Support
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-10">
              Apple staat wereldwijd bekend om zijn hoogwaardige producten en
              uitstekende klantenservice. Woont u in Nederland of België en
              heeft u ondersteuning nodig voor iPhone, Mac, iPad, Apple Watch of
              Apple ID? Dan zijn er meerdere betrouwbare contactmogelijkheden
              beschikbaar.
            </p>
          </div>

          {/* ================= SUPPORT OVERVIEW ================= */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Hulp bij Apple apparaten & software",
              "Ondersteuning voor Apple ID & iCloud",
              "Reparaties, garantie & abonnementen mt-10",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-xl p-6 bg-[#13161c]"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-gray-300">
                  Apple Support biedt professionele hulp voor zowel particuliere
                  als zakelijke gebruikers.
                </p>
              </div>
            ))}
          </div>

          {/* ================= CONTACT NUMBERS ================= */}
          <div className="max-w-4xl space-y-6 mt-10">
            <h2 className="text-2xl font-bold">
              Apple Support Telefoonnummers
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-gray-700 rounded-xl p-6 bg-[#13161c]">
                <p className="font-medium mb-2">Nederland</p>
                <p className="text-yellow-400 font-semibold text-lg">
                  0800-020-0930
                </p>
                <p className="text-sm text-gray-300">
                  Nederlandstalige ondersteuning
                </p>
              </div>

              <div className="border border-gray-700 rounded-xl p-6 bg-[#13161c]">
                <p className="font-medium mb-2">België</p>
                <p className="text-yellow-400 font-semibold text-lg">
                  0800-80366 (FR) / 0800-91525 (NL)
                </p>
                <p className="text-sm text-gray-300">
                  Frans & Nederlands beschikbaar
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-base">
              Telefonische ondersteuning is doorgaans beschikbaar van maandag
              tot en met vrijdag tijdens kantooruren.
            </p>
          </div>

          {/* ================= CONTACT METHODS ================= */}
          <div className="max-w-5xl space-y-8">
            <h2 className="text-2xl font-bold">
              Contactmethoden voor Apple Klantenservice
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Telefonische ondersteuning",
                  desc: "De snelste manier om direct met een Apple-specialist te spreken over hardware-, software- of accountproblemen.",
                },
                {
                  title: "Apple Support Chat",
                  desc: "Via de Apple Support-website of app kunt u live chatten met een Apple medewerker.",
                },
                {
                  title: "Apple Support-app",
                  desc: "Plan afspraken, volg reparaties en ontvang gepersonaliseerde ondersteuning via de officiële app.",
                },
                {
                  title: "Apple Stores",
                  desc: "Bezoek een Apple Store in o.a. Amsterdam, Rotterdam, Brussel of Antwerpen voor persoonlijke hulp.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-700 rounded-2xl p-6 bg-[#13161c] space-y-2"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div className="max-w-5xl mx-auto mt-18 px-4 mt-10">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Veelgestelde vragen over Apple Support
            </h2>

            <div className="space-y-4">
              {/* FAQ ITEM */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-primary/40 ">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-semibold">
                    <span>
                      Mijn Apple-apparaat werkt niet goed, wat kan ik doen?
                    </span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    Neem contact op met Apple Support via telefoon, live chat of
                    de officiële Apple Support-app voor directe hulp.
                  </p>
                </details>
              </div>

              {/* FAQ ITEM */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-primary/40">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-semibold">
                    <span>Hoe krijg ik een terugbetaling van Apple?</span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    Apple biedt een retourbeleid van 14 dagen voor de meeste
                    producten. U kunt een terugbetaling aanvragen via uw
                    Apple-account of Support.
                  </p>
                </details>
              </div>

              {/* FAQ ITEM */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-primary/40">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-semibold">
                    <span>Hoe controleer ik de status van mijn reparatie?</span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    De status van uw reparatie kunt u bekijken via de Apple
                    Support-website of door telefonisch contact op te nemen.
                  </p>
                </details>
              </div>

              {/* FAQ ITEM */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-primary/40">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-semibold">
                    <span>Ondersteunt Apple Nederlands en Frans?</span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    Ja, Apple Support is beschikbaar in zowel het Nederlands als
                    het Frans, afhankelijk van uw regio.
                  </p>
                </details>
              </div>

              {/* FAQ ITEM */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-primary/40">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-semibold">
                    <span>
                      Kan Apple helpen bij het instellen van mijn apparaat?
                    </span>
                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    Ja, Apple helpt bij het instellen van apparaten via
                    handleidingen, chat en telefonische ondersteuning.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* ================= CONCLUSION ================= */}
          <div className="max-w-8xl border border-gray-700 rounded-2xl p-8 bg-[#13161c] space-y-4 mt-10">
            <h2 className="text-2xl font-bold">Conclusie</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Apple biedt uitstekende klantenservice in Nederland en België via
              meerdere kanalen. Of u nu technische hulp nodig heeft, een
              reparatie wilt volgen of vragen heeft over uw Apple ID —
              professionele ondersteuning is altijd binnen handbereik.
            </p>
          </div>
          <div className="mt-12 rounded-2xl border bg-muted/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                • Neem
                <a
                  href="https://www.apple.com/nl/"
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
                  Contact Op met Apple Klantenservice Nederland
                </a>
              </h3>
              <p className="text-muted-foreground">
                Laat netwerkproblemen uw werk of internetgebruik niet verstoren.
                Onze D-Link experts helpen u graag.
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
      </section>
    </>
  );
};

export default Apple;
