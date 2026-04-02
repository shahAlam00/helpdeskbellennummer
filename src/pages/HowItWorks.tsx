import { Link } from "react-router-dom";
import {
  MessageSquare,
  Wifi,
  Shield,
  HeartPulse,
  ArrowRight,
  Phone,
  Monitor,
  Lock,
  CheckCircle,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Neem contact op met onze experts",
      description:
        "Neem contact met ons op via telefoon, e-mail of ons contactformulier. Beschrijf uw apparaat en eventuele zorgen die u heeft.",
      details: [
        "24/7 beschikbaar voor uw gemak",
        "Spreek direct met beveiligingsexperts",
        "Geen geautomatiseerde menu’s of lange wachttijden",
        "Wij beoordelen uw behoeften onmiddellijk",
      ],
    },
    {
      number: "02",
      icon: <Wifi className="w-8 h-8" />,
      title: "Beveiligde Remote Verbinding",
      description:
        "Onze technicus maakt met uw toestemming een veilige, versleutelde verbinding met uw apparaat.",
      details: [
        "Encryptie van militair niveau beschermt de verbinding",
        "U kunt alles wat wij doen live op het scherm volgen",
        "Volledige controle om de sessie op elk moment te beëindigen",
        "Uw privacy wordt nooit in gevaar gebracht",
      ],
    },
    {
      number: "03",
      icon: <Monitor className="w-8 h-8" />,
      title: "Remote Diagnose & Bescherming",
      description:
        "Onze expert scant uw apparaat, identificeert bedreigingen en implementeert uitgebreide beschermingsmaatregelen.",
      details: [
        "Diepe systeems scan voor verborgen bedreigingen",
        "Verwijdering van alle gevonden malware",
        "Optimalisatie van beveiligingssoftware",
        "Dichten en versterken van kwetsbaarheden",
      ],
    },
    {
      number: "04",
      icon: <Shield className="w-8 h-8" />,
      title: "Doorlopende Bescherming",
      description:
        "Wij stellen continue bescherming in zodat uw apparaat veilig blijft, ook lang nadat de sessie is beëindigd.",
      details: [
        "Realtime monitoring van bedreigingen",
        "Automatische beveiligingsupdates",
        "Regelmatige controleherinneringen",
        "24/7 ondersteuning bij problemen",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Hoe Het Werkt | Bel +31 202254839"
        description="Veilige IT-support op afstand in 4 stappen. Bel +31 202254839 voor directe hulp via een beveiligde verbinding. Snel & simpel."
        keywords="hoe het werkt, IT support op afstand, remote hulp, beveiligde verbinding, +31 202254839"
        canonical="https://helpdeskbellennummer.com/how-it-works"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Eenvoudig Proces
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hoe Remote <span className="text-gradient">HelpDesk Werkt</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Professionele apparaatbeveiliging verkrijgen is eenvoudig. Ons
              veilige remote proces betekent deskundige hulp zonder uw huis te
              verlaten.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <Section className="bg-card border-y border-border">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-4">
            <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground">
              Neem contact met ons op
            </p>
          </div>
          <div className="text-center p-4">
            <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground">
              Beveiligde Verbinding
            </p>
          </div>
          <div className="text-center p-4">
            <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground">
              Deskundige Bescherming
            </p>
          </div>
          <div className="text-center p-4">
            <HeartPulse className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground">
              Doorlopende Veiligheid
            </p>
          </div>
        </div>
      </Section>

      {/* Detailed Steps */}
      {steps.map((step, index) => (
        <Section
          key={step.number}
          className={index % 2 === 1 ? "bg-secondary/30" : ""}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-display font-bold text-primary/20">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {step.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {step.description}
              </p>
              <ul className="space-y-3">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-card border border-border rounded-3xl p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <p className="text-foreground font-medium">
                    Step {step.number}
                  </p>
                  <p className="text-2xl font-display font-bold text-foreground mt-2">
                    {step.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Security Assurance */}
      <Section className="bg-card border-y border-border">
        <SectionHeader
          badge="Uw Beveiliging"
          title="Veilige & Beveiligde Remote Toegang"
          description="Wij nemen uw privacy en beveiliging in elke stap zeer serieus."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-secondary/50">
            <Lock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Versleutelde Verbindingen
            </h3>
            <p className="text-muted-foreground text-sm">
              Alle remote sessies maken gebruik van AES-256-versleuteling,
              dezelfde standaard die wordt gebruikt door banken en militaire
              organisaties.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-secondary/50">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Toegang op Basis van Toestemming
            </h3>
            <p className="text-muted-foreground text-sm">
              Wij maken alleen verbinding met uw uitdrukkelijke toestemming. U
              verleent toegang voor elke sessie en kunt deze direct intrekken.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-secondary/50">
            <Monitor className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Volledige Transparantie
            </h3>
            <p className="text-muted-foreground text-sm">
              U kunt alles wat wij doen op uw scherm volgen. Onze technici
              leggen elke handeling uit en beantwoorden al uw vragen.
            </p>
          </div>
        </div>
      </Section>

      {/* User Peace of Mind */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Gemoedsrust"
            title="Focus op Wat Belangrijk Is"
            description="Laat onze experts de beveiliging regelen terwijl u geniet van gemoedsrust"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Geen Onderbreking
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ons werk op afstand gebeurt stil op de achtergrond. Ga gewoon
                  door met uw dag terwijl wij uw apparaat beschermen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Deskundige Begeleiding
                </h3>
                <p className="text-muted-foreground text-sm">
                  Onze technici beantwoorden al uw vragen en geven tips om
                  online veilig te blijven.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Snelle Oplossing
                </h3>
                <p className="text-muted-foreground text-sm">
                  De meeste beschermingssessies zijn binnen enkele uren
                  afgerond, niet dagen. Word snel beveiligd.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
              <HeartPulse className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Langdurige Bescherming
                </h3>
                <p className="text-muted-foreground text-sm">
                  We lossen niet alleen huidige problemen op. We zetten
                  verdedigingen op die u op lange termijn beschermen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Klaar om te Beginnen?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ons eenvoudige proces betekent dat u binnen enkele uren beschermd
            kunt zijn, niet dagen. Neem nu contact op met onze experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Neem Contact Op met Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Diensten Bekijken</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
