import { Link } from "react-router-dom";
import {
  Shield,
  Bug,
  UserX,
  Database,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Lock,
  Eye,
  Wifi,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function Protection() {
  return (
    <>
      <SEOHead
        title="Virus- & Hackerhulp | Bel +31 202254839"
        description="Directe bescherming tegen malware en hackers. Bel +31 202254839 voor 24/7 beveiliging en hulp op afstand."
        keywords="virusbescherming, malware verwijderen, hackerbescherming, cybersecurity, +31 202254839"
        canonical="https://helpdeskbellennummer.com/protection"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] hero-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Volledige Dreigingsbescherming
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Bescherming tegen{" "}
              <span className="text-gradient">Alle Digitale Bedreigingen</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Virussen, hackers en datalekken bedreigen uw apparaten elke dag.
              Onze ervaren technici bieden complete bescherming om u veilig te
              houden.
            </p>
          </div>
        </div>
      </section>

      {/* Threat Overview */}
      <Section className="bg-card border-y border-border">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl border border-destructive/20 bg-destructive/5">
            <Bug className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Virussen & Malware
            </h3>
            <p className="text-muted-foreground text-sm">
              Kwaadaardige software die beschadigt en gegevens steelt
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-warning/20 bg-warning/5">
            <UserX className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Hackeraanvallen
            </h3>
            <p className="text-muted-foreground text-sm">
              Criminelen die proberen toegang te krijgen tot uw systemen
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <Database className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Datalekken
            </h3>
            <p className="text-muted-foreground text-sm">
              Blootstelling van uw gevoelige informatie
            </p>
          </div>
        </div>
      </Section>

      {/* Virus & Malware Protection */}
      <Section id="virus">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full mb-6">
              <Bug className="w-5 h-5" />
              <span className="text-sm font-semibold">Bedreiging #1</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Virus- & Malwarebescherming
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Virussen, trojans, ransomware en spyware komen in vele vormen
              voor, maar het doel is altijd hetzelfde: uw apparaat beschadigen
              en uw gegevens stelen. Onze experts verwijderen deze bedreigingen
              en voorkomen toekomstige infecties.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Soorten malware waartegen wij beschermen:
              </h3>
              <ul className="space-y-3">
                {[
                  "Virussen die zich vermenigvuldigen en verspreiden over bestanden",
                  "Ransomware die gegevens versleutelt en gijzelt",
                  "Trojans vermomd als legitieme software",
                  "Spyware die uw activiteiten heimelijk volgt",
                  "Adware die u overspoelt met ongewenste advertenties",
                  "Rootkits die diep in uw systeem verborgen blijven",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Onze Beschermingsaanpak
            </h3>
            <ul className="space-y-4">
              {[
                "Diepe systeems scans om verborgen bedreigingen te vinden",
                "Realtime bescherming tegen nieuwe infecties",
                "Veilige verwijdering zonder gegevensverlies",
                "Optimalisatie van beveiligingssoftware",
                "Gedragsmonitoring voor verdachte activiteiten",
                "Regelmatige updates tegen nieuwe bedreigingen",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Wacht Niet Tot Een Aanval
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Het beste moment om uw apparaten te beschermen is vóórdat een
            bedreiging toeslaat. Neem vandaag nog contact op met onze experts en
            beveilig uw digitale leven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Nu Beveiligd Worden
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/how-it-works">Bekijk Hoe Het Werkt</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
