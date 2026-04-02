import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Target,
  Heart,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <SEOHead
        title="Over HelpDesk | Bel +31 202254839"
        description="Gecertificeerde cybersecurity experts. Bel +31 202254839 voor 24/7 support op afstand en directe apparaatbeveiliging."
        keywords="over helpdesk, cybersecurity experts, remote IT support, apparaatbeveiliging, +31 202254839"
        canonical="https://helpdeskbellennummer.com/about"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] hero-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Over HelpDesk
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Uw Betrouwbare Partner in{" "}
              <span className="text-gradient">Apparaatbeveiliging</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Wij zijn een team van toegewijde beveiligingsprofessionals die
              zich inzetten voor het beschermen van uw digitale leven. Onze
              missie is eenvoudig: uw apparaten beschermen tegen alle
              bedreigingen.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              badge="Wie Wij Zijn"
              title="Beveiligingsexperts Tot Uw Dienst"
              description="HelpDesk is een team van gecertificeerde cybersecurity-specialisten dat particulieren en bedrijven beschermt tegen digitale bedreigingen."
              centered={false}
            />

            <p className="text-muted-foreground mb-6">
              Opgericht vanuit het principe dat iedereen recht heeft op
              professionele beveiliging, bieden wij deskundige ondersteuning op
              afstand om uw computers, laptops en smartphones te beschermen
              tegen virussen, hackers en datalekken.
            </p>

            <p className="text-muted-foreground mb-8">
              Onze technici werken volledig op afstand, waardoor wij sneller en
              efficiënter kunnen reageren op beveiligingsdreigingen. Geen
              wachttijden, geen huisbezoeken – alleen directe, professionele
              bescherming wanneer u die nodig heeft.
            </p>

            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Praat Met Onze Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 text-center">
              <Shield className="w-32 h-32 text-primary mx-auto mb-6 shield-glow" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Beschermd Sinds 2015
              </h3>
              <p className="text-muted-foreground">
                Jarenlange ervaring in wereldwijde apparaatbeveiliging
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section className="bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Onze Missie"
            title="Wereldwijde Bescherming van Apparaten & Gegevens"
          />

          <p className="text-xl text-muted-foreground mb-8">
            Onze missie is om professionele cybersecurity toegankelijk te maken
            voor iedereen. Niemand zou zich zorgen moeten maken over virussen
            die werk vernietigen, hackers die identiteiten stelen of datalekken
            die privégegevens blootstellen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Deskundige Bescherming
              </h3>
              <p className="text-muted-foreground text-sm">
                Beveiliging van professioneel niveau voor elk apparaat
              </p>
            </div>

            <div className="p-6">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Oprechte Zorg
              </h3>
              <p className="text-muted-foreground text-sm">
                Wij behandelen uw beveiliging alsof het onze eigen is
              </p>
            </div>

            <div className="p-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Altijd Beschikbaar
              </h3>
              <p className="text-muted-foreground text-sm">
                24/7 ondersteuning wanneer u ons het meest nodig heeft
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Experts */}
      <Section>
        <SectionHeader
          badge="Ons Team"
          title="Ervaren Technici Tot Uw Dienst"
          description="Ons team bestaat uit gecertificeerde beveiligingsprofessionals met uitgebreide ervaring in apparaatbeveiliging"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Gecertificeerde Experts",
              desc: "Alle technici beschikken over erkende beveiligingscertificeringen",
            },
            {
              title: "Continue Training",
              desc: "Regelmatige updates over de nieuwste dreigingen en beschermingsmethoden",
            },
            {
              title: "Remote Specialisten",
              desc: "Experts in veilige toegang op afstand en diagnose",
            },
            {
              title: "Klantgericht",
              desc: "Volledig toegewijd aan uw veiligheid en tevredenheid",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
            >
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Remote Approach */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Voordelen van Ondersteuning op Afstand
              </h3>

              <ul className="space-y-4">
                {[
                  "Directe reactie op beveiligingsdreigingen",
                  "Geen wachttijden of planningsproblemen",
                  "Service vanuit het comfort van uw eigen huis",
                  "Veilige en versleutelde verbindingen",
                  "Kosteneffectieve professionele bescherming",
                  "Altijd en overal beschikbaar",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Onze Aanpak"
              title="De Kracht van Bescherming op Afstand"
              description="Onze remote-first aanpak betekent snellere en efficiëntere beveiliging voor u"
              centered={false}
            />

            <p className="text-muted-foreground mb-6">
              Traditionele IT-ondersteuning vereist afspraken, wachttijden en
              vaak het achterlaten van uw apparaten. Onze aanpak elimineert dat
              volledig. Zodra u contact met ons opneemt, kunnen wij direct
              beginnen met beveiligen.
            </p>

            <p className="text-muted-foreground">
              Via veilige, versleutelde verbindingen krijgen onze technici op
              afstand toegang tot uw apparaat om problemen te diagnosticeren,
              dreigingen te verwijderen en bescherming te implementeren —
              terwijl u meekijkt.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Trust Us */}
      <Section>
        <SectionHeader
          badge="Vertrouwen & Betrouwbaarheid"
          title="Waarom Gebruikers HelpDesk Vertrouwen"
          description="Onze reputatie is opgebouwd door jarenlange toegewijde service"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Bewezen Resultaten
            </h3>
            <p className="text-muted-foreground">
              Duizenden apparaten beschermd met een detectiegraad van 99,9%
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Veiligheid Eerst
            </h3>
            <p className="text-muted-foreground">
              Uw veiligheid en privacy staan altijd centraal
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Menselijke Ondersteuning
            </h3>
            <p className="text-muted-foreground">
              Echte experts — geen bots — die oprecht om uw beveiliging geven
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Klaar om Professionele Bescherming te Ervaren?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sluit u aan bij duizenden tevreden gebruikers die HelpDesk
            vertrouwen voor apparaatbeveiliging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Neem Contact Op Met Onze Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Bekijk Diensten</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
