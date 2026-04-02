import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Bericht verzonden!",
      description:
        "Onze beveiligingsexperts nemen binnenkort contact met u op.",
    });
    setFormData({ name: "", email: "", phone: "", device: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SEOHead
        title="Contact HelpDesk | Bel +31 202254839"
        description="Hulp bij virussen of hackers? Bel +31 202254839 voor 24/7 directe ondersteuning en beveiliging op afstand door onze experts."
        keywords="contact helpdesk, IT support contact, virus hulp telefoon, hacker hulp, +31 202254839"
        canonical="https://helpdeskbellennummer.com/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
              Neem Contact Op
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Praat met een{" "}
              <span className="text-gradient">Beveiligingsexpert</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Klaar om uw apparaten te beschermen? Onze deskundige technici
              staan klaar om te helpen. Neem contact met ons op en word vandaag
              nog beveiligd.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-card border-y border-border py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl bg-secondary/50">
            <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Bel Ons
            </h3>
            <p className="text-muted-foreground text-sm mb-2">
              24/7 beschikbaar
            </p>
            <a
              href="tel:+18001234567"
              className="text-primary font-medium hover:underline"
            >
              +31 202254839
            </a>
          </div>
          <div className="text-center p-6 rounded-2xl bg-secondary/50">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              E-mail Ons
            </h3>
            <p className="text-muted-foreground text-sm mb-2">
              Wij reageren binnen enkele uren
            </p>
            <a
              href="mailto:support@helpdesk.com"
              className="text-primary font-medium hover:underline"
            >
              info@helpdeskbellennummer.com
            </a>
          </div>
          <div className="text-center p-6 rounded-2xl bg-secondary/50">
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Live Ondersteuning
            </h3>
            <p className="text-muted-foreground text-sm mb-2">
              Directe hulp van experts
            </p>
            <span className="text-primary font-medium">Start een Chat</span>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Bescherming Aanvragen
            </h2>
            <p className="text-muted-foreground mb-8">
              Vul het onderstaande formulier in en een van onze
              beveiligingsexperts neemt contact met u op om uw
              beschermingsbehoeften te bespreken.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Volledige Naam</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jan Jansen"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan@example.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="device">Apparaattype</Label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Selecteer uw apparaat</option>
                    <option value="computer">Computer</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="multiple">Meerdere Apparaten</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Vertel Ons Over Uw Beveiligingszorgen
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschrijf eventuele problemen die u ervaart of het type bescherming dat u nodig heeft..."
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                variant="hero"
                size="xl"
                type="submit"
                className="w-full md:w-auto"
              >
                Bericht Verzenden
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Waarom Contact Opnemen met HelpDesk?
              </h3>
              <ul className="space-y-4">
                {[
                  "Deskundige technici gecertificeerd in cybersecurity",
                  "Snelle ondersteuning op afstand – geen wachttijden voor afspraken",
                  "Uitgebreide bescherming tegen alle bedreigingen",
                  "Transparante service zonder verborgen kosten",
                  "24/7 beschikbaarheid voor noodgevallen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/50 border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Garantie voor Remote Ondersteuning
              </h3>
              <p className="text-muted-foreground mb-6">
                Al onze ondersteuning wordt op afstand geleverd via veilige,
                versleutelde verbindingen. U behoudt volledige controle en kunt
                alles wat wij doen op uw scherm volgen.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">
                    24/7 Beschikbaar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">
                    Deskundig Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Belt u liever?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Onze beveiligingsexperts zijn 24/7 telefonisch bereikbaar. Bel nu
            voor directe hulp bij alle vragen over apparaatbeveiliging.
          </p>
          <a href="tel:+18001234567">
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5" />
              Bel +31 20 225 4839
            </Button>
          </a>
        </div>
      </Section>
    </>
  );
}
