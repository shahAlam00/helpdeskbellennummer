import { Link } from "react-router-dom";
import {
  Shield,
  Laptop,
  Smartphone,
  Monitor,
  ShieldCheck,
  Lock,
  Wifi,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  FeatureCard,
  StatCard,
  TestimonialCard,
} from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Beveiliging & Helpdesk | Bel +31 202254839"
        description="Directe hulp bij virussen en hackers. Bel +31 202254839 voor 24/7 support op afstand voor al uw apparaten."
        keywords="cyberbeveiliging, helpdesk, virusverwijdering, computerhulp"
        canonical="https://helpdeskbellennummer.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 animate-fade-in">
                Professionele Bescherming op Afstand
              </span>

              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Professionele Beveiliging voor Uw{" "}
                <span className="text-gradient">Apparaten</span>
              </h1>

              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Bescherm uw computer, laptop en smartphone tegen virussen,
                hackers en datalekken. Onze ervaren technici bieden volledige
                beveiliging op afstand.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Nu Beveiligen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button variant="outline" size="xl" asChild>
                  <Link to="/how-it-works">Hoe Het Werkt</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative animate-float">
                <Shield className="w-64 h-64 text-primary shield-glow" />
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              </div>

              {/* Floating device icons */}
              <div className="absolute top-10 left-10 p-4 bg-card rounded-xl border border-border animate-pulse-glow">
                <Monitor className="w-8 h-8 text-primary" />
              </div>

              <div
                className="absolute top-20 right-10 p-4 bg-card rounded-xl border border-border animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              >
                <Laptop className="w-8 h-8 text-primary" />
              </div>

              <div
                className="absolute bottom-20 left-20 p-4 bg-card rounded-xl border border-border animate-pulse-glow"
                style={{ animationDelay: "2s" }}
              >
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-card border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="10K+" label="Beveiligde Apparaten" />
          <StatCard value="99,9%" label="Dreigingsdetectie" />
          <StatCard value="24/7" label="Deskundige Ondersteuning" />
          <StatCard value="100%" label="Service op Afstand" />
        </div>
      </Section>

      {/* What We Protect */}
      {/* <Section>
        <SectionHeader
          badge="Complete Protection"
          title="What HelpDesk Protects"
          description="We safeguard all your devices and data from modern digital threats"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Monitor className="w-6 h-6" />}
            title="Computers"
            description="Complete protection for desktop computers against malware, ransomware, and unauthorized access attempts."
          />
          <FeatureCard
            icon={<Laptop className="w-6 h-6" />}
            title="Laptops"
            description="Secure your laptop whether you're at home, work, or traveling. Protection that moves with you."
          />
          <FeatureCard
            icon={<Smartphone className="w-6 h-6" />}
            title="Smartphones"
            description="Mobile security for iOS and Android devices. Protect your personal data and prevent breaches."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Virus & Malware"
            description="Real-time protection against viruses, trojans, spyware, and all forms of malicious software."
          />
          <FeatureCard
            icon={<Lock className="w-6 h-6" />}
            title="Hacker Attacks"
            description="Defense against hackers, phishing attempts, and unauthorized access to your systems."
          />
          <FeatureCard
            icon={<Wifi className="w-6 h-6" />}
            title="Data Breaches"
            description="Prevent sensitive data from falling into wrong hands with advanced breach protection."
          />
        </div>
      </Section> */}
      <Section>
        <SectionHeader
          badge="Volledige Bescherming"
          title="Wat HelpDesk Beschermt"
          description="Wij beschermen al uw apparaten en gegevens tegen moderne digitale bedreigingen"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Monitor className="w-6 h-6" />}
            title="Computers"
            description="Volledige bescherming voor desktopcomputers tegen malware, ransomware en ongeautoriseerde toegangspogingen."
          />

          <FeatureCard
            icon={<Laptop className="w-6 h-6" />}
            title="Laptops"
            description="Beveilig uw laptop thuis, op het werk of onderweg. Bescherming die met u meebeweegt."
          />

          <FeatureCard
            icon={<Smartphone className="w-6 h-6" />}
            title="Smartphones"
            description="Mobiele beveiliging voor iOS- en Android-apparaten. Bescherm uw persoonlijke gegevens en voorkom datalekken."
          />

          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Virussen & Malware"
            description="Realtime bescherming tegen virussen, trojans, spyware en alle vormen van schadelijke software."
          />

          <FeatureCard
            icon={<Lock className="w-6 h-6" />}
            title="Hacker Aanvallen"
            description="Bescherming tegen hackers, phishingpogingen en ongeautoriseerde toegang tot uw systemen."
          />

          <FeatureCard
            icon={<Wifi className="w-6 h-6" />}
            title="Datalekken"
            description="Voorkom dat gevoelige gegevens in verkeerde handen vallen met geavanceerde datalekbescherming."
          />
        </div>
      </Section>

      {/* How Remote Support Works */}
      <Section className="bg-secondary/30">
        <SectionHeader
          badge="Eenvoudig & Veilig"
          title="Hoe Externe Expert Ondersteuning Werkt"
          description="Ontvang professionele bescherming zonder uw huis te verlaten"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Neem Contact Op met Onze Experts",
              description:
                "Neem contact met ons op via telefoon of formulier. Onze beveiligingsexperts staan 24/7 voor u klaar.",
            },
            {
              step: "02",
              title: "Veilige Externe Toegang",
              description:
                "Onze technici maken veilig verbinding om uw apparaat te analyseren en te beschermen.",
            },
            {
              step: "03",
              title: "Volledige Bescherming",
              description:
                "Uw apparaat wordt beschermd tegen alle bedreigingen met voortdurende deskundige ondersteuning.",
            },
          ].map((item) => (
            <div key={item.step} className="relative text-center p-8">
              <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                {item.step}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/how-it-works">
              Meer Informatie Over Ons Proces
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why Professional Protection */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              badge="Waarom Voor Ons Kiezen"
              title="Waarom Professionele Bescherming Belangrijk Is"
              description="Amateur oplossingen laten beveiligingslekken achter. Onze experts bieden volledige bescherming."
              centered={false}
            />

            <ul className="space-y-4">
              {[
                "Deskundige technici met jarenlange ervaring in cybersecurity",
                "Realtime dreigingsbewaking en directe respons",
                "Bescherming afgestemd op uw specifieke apparaten",
                "Continue updates tegen nieuwe en opkomende bedreigingen",
                "Gemoedsrust omdat experts altijd voor u klaarstaan",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="cta" size="lg" asChild>
                <Link to="/about">Over Onze Experts</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">
                    Expertteam
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Gecertificeerde Technici
                  </p>
                </div>

                <div className="text-center p-4">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">
                    24/7 Ondersteuning
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Altijd Beschikbaar
                  </p>
                </div>

                <div className="text-center p-4">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">
                    Snelle Reactie
                  </p>
                  <p className="text-sm text-muted-foreground">Directe Actie</p>
                </div>

                <div className="text-center p-4">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">
                    Volledige Bescherming
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Complete Beveiliging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Section */}
      {/* <Section className="bg-card border-y border-border">
        <SectionHeader
          badge="Trusted Protection"
          title="Trusted by Thousands"
          description="Our clients trust us with their device security and data protection"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="HelpDesk saved my laptop from a nasty ransomware attack. Their remote support was incredibly fast and professional."
            author="Sarah M."
            role="Small Business Owner"
          />
          <TestimonialCard
            quote="After falling victim to a phishing attack, HelpDesk secured all my devices. I haven't had a single issue since."
            author="Michael R."
            role="Freelance Designer"
          />
          <TestimonialCard
            quote="The peace of mind knowing my family's devices are protected by experts is priceless. Highly recommend HelpDesk."
            author="Jennifer L."
            role="Parent & Teacher"
          />
        </div>
      </Section> */}
      <Section className="bg-card border-y border-border">
        <SectionHeader
          badge="Betrouwbare Bescherming"
          title="Vertrouwd door Duizenden"
          description="Onze klanten vertrouwen ons met de beveiliging van hun apparaten en gegevens"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="HelpDesk heeft mijn laptop gered van een ernstige ransomware-aanval. Hun ondersteuning op afstand was ongelooflijk snel en professioneel."
            author="Sarah M."
            role="Eigenaar van een Klein Bedrijf"
          />

          <TestimonialCard
            quote="Na slachtoffer te zijn geworden van een phishing-aanval heeft HelpDesk al mijn apparaten beveiligd. Sindsdien heb ik geen enkel probleem meer gehad."
            author="Michael R."
            role="Freelance Ontwerper"
          />

          <TestimonialCard
            quote="De gemoedsrust dat de apparaten van mijn gezin worden beschermd door experts is onbetaalbaar. HelpDesk is absoluut aan te raden."
            author="Jennifer L."
            role="Ouder & Docent"
          />
        </div>
      </Section>

      {/* Key Benefits */}
      <Section>
        <SectionHeader
          badge="Uw Voordelen"
          title="Geniet van Volledige Gemoedsrust"
          description="Met HelpDesk-bescherming krijgt u meer dan alleen beveiliging"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Virusvrije Apparaten",
              desc: "Schone en veilige apparaten zonder malwarebedreigingen",
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: "Veilige Gegevens",
              desc: "Uw persoonlijke en zakelijke gegevens blijven beschermd",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Deskundige Ondersteuning",
              desc: "Echte technici, geen bots, die uw beveiliging beheren",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Gemoedsrust",
              desc: "Focus op wat belangrijk is terwijl wij de beveiliging verzorgen",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Klaar om Uw Apparaten te Beschermen?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Wacht niet tot er een beveiligingsincident plaatsvindt. Ontvang
            vandaag nog professionele bescherming van onze ervaren technici.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Nu Beveiliging Activeren
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Bekijk Onze Diensten</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
