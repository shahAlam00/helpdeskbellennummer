import { SEOHead } from "@/components/SEOHead";
import { Section } from "@/components/ui/section";

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacybeleid | Bel +31 202254839"
        description="Hoe wij uw data beschermen. Voor vragen over privacy en gegevensbeveiliging, bel direct +31 202254839."
        keywords="privacybeleid helpdesk, gegevensbescherming, AVG privacy, +31 202254839"
        canonical="https://helpdeskbellennummer.com/privacy"
      />

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacybeleid
            </h1>
            <p className="text-lg text-muted-foreground">
              Laatst bijgewerkt: 1 februari 2026
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Inleiding
              </h2>
              <p>
                Bij HelpDesk zetten wij ons in voor de bescherming van uw
                privacy en het waarborgen van de veiligheid van uw persoonlijke
                gegevens. Dit privacybeleid legt uit hoe wij uw informatie
                verzamelen, gebruiken, delen en beveiligen wanneer u
                gebruikmaakt van onze diensten voor apparaatbescherming.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Informatie die wij verzamelen
              </h2>
              <p className="mb-4">
                Wij verzamelen informatie die u rechtstreeks aan ons verstrekt,
                waaronder:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
                <li>
                  Apparaatinformatie die nodig is om beschermingsdiensten te
                  leveren
                </li>
                <li>
                  Communicatiegegevens wanneer u contact opneemt met ons
                  ondersteuningsteam
                </li>
                <li>
                  Informatie over het gebruik van diensten om ons aanbod te
                  verbeteren
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Hoe wij uw informatie gebruiken
              </h2>
              <p className="mb-4">Wij gebruiken de verzamelde informatie om:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Onze diensten voor apparaatbescherming te leveren en te
                  onderhouden
                </li>
                <li>
                  Met u te communiceren over uw diensten en
                  ondersteuningsverzoeken
                </li>
                <li>
                  Onze beveiligingsdiensten te verbeteren en te optimaliseren
                </li>
                <li>
                  Beveiligingsdreigingen namens u te detecteren en te voorkomen
                </li>
                <li>Te voldoen aan wettelijke verplichtingen</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Gegevensbeveiliging
              </h2>
              <p>
                Wij implementeren robuuste beveiligingsmaatregelen om uw
                persoonlijke gegevens te beschermen. Alle externe
                toegangssessies maken gebruik van encryptie van militair niveau
                (AES-256). Wij slaan uw wachtwoorden of toegangsgegevens niet op
                buiten de actieve ondersteuningssessie. Onze technici zijn
                getraind in best practices voor gegevensbescherming en zijn
                gebonden aan strikte geheimhoudingsovereenkomsten.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Privacy bij externe toegang
              </h2>
              <p className="mb-4">
                Wanneer u externe toegang voor ondersteuning autoriseert, houden
                wij ons aan de volgende principes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Toegang wordt alleen verleend met uw uitdrukkelijke
                  toestemming
                </li>
                <li>U kunt de sessie op elk moment beëindigen</li>
                <li>
                  Wij hebben alleen toegang tot wat nodig is om de gevraagde
                  dienst te leveren
                </li>
                <li>Sessieactiviteiten worden niet opgenomen of opgeslagen</li>
                <li>
                  Uw persoonlijke bestanden en gegevens blijven vertrouwelijk
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Delen van informatie
              </h2>
              <p>
                Wij verkopen, verhandelen of verhuren uw persoonlijke gegevens
                niet aan derden. Wij delen informatie uitsluitend in de volgende
                gevallen: met uw toestemming, om te voldoen aan wettelijke
                verplichtingen, om onze rechten of de veiligheid van anderen te
                beschermen, of met dienstverleners die ons ondersteunen onder
                strikte geheimhoudingsovereenkomsten.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Uw rechten
              </h2>
              <p className="mb-4">U heeft het recht om:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Inzage te krijgen in de persoonlijke gegevens die wij over u
                  bewaren
                </li>
                <li>Correctie van onjuiste gegevens aan te vragen</li>
                <li>Verwijdering van uw persoonlijke gegevens aan te vragen</li>
                <li>U af te melden voor marketingcommunicatie</li>
                <li>
                  Een klacht in te dienen bij een toezichthoudende autoriteit
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Cookies en tracking
              </h2>
              <p>
                Onze website maakt gebruik van cookies om uw browse-ervaring te
                verbeteren en websiteverkeer te analyseren. U kunt
                cookie-instellingen beheren via uw browservoorkeuren. Essentiële
                cookies die nodig zijn voor de werking van de website kunnen
                niet worden uitgeschakeld.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Wijzigingen in dit beleid
              </h2>
              <p>
                Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wij
                zullen u op de hoogte stellen van wijzigingen door het nieuwe
                beleid op deze pagina te plaatsen en de datum "Laatst
                bijgewerkt" aan te passen. Wij raden u aan dit beleid regelmatig
                te bekijken.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Contact opnemen
              </h2>
              <p>
                Als u vragen heeft over dit privacybeleid of onze
                gegevenspraktijken, neem dan contact met ons op via:
              </p>
              <p className="mt-4">
                <strong className="text-foreground">E-mail:</strong>{" "}
                info@helpdeskbellennummer.com
                <br />
                <strong className="text-foreground">Telefoon:</strong> +31 20
                225 48397
                <br />
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
