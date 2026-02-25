import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.png";
import garyPortrait from "@/assets/gary-portrait.png";
import boardroom from "@/assets/boardroom.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Enterprise Digital Transformation",
    points: [
      "End-to-end transformation roadmap",
      "Business operating system design",
      "Governance-aligned execution",
    ],
  },
  {
    title: "AI & Systems Modernisation",
    points: [
      "CRM architecture & data strategy",
      "AI adoption frameworks",
      "Automation at scale",
    ],
  },
  {
    title: "Leadership & Board Alignment",
    points: [
      "Executive capability development",
      "Maxwell-based leadership frameworks",
      "High Road Leadership & governance ethics",
    ],
  },
  {
    title: "Growth & Performance Architecture",
    points: [
      "Scaling operations",
      "Process optimisation",
      "Data-driven performance models",
    ],
  },
];

const audiences = [
  {
    title: "Boards & Directors",
    points: ["Digital oversight capability", "Risk & compliance awareness", "Strategic technology decisions"],
  },
  {
    title: "CEOs & Executive Teams",
    points: ["Transformation execution", "Organisational alignment", "Change leadership"],
  },
  {
    title: "Private & Founder-Led Enterprises",
    points: ["Scalable systems", "Technology integration", "Leadership maturity"],
  },
  {
    title: "Education & Institutional Leaders",
    points: ["Digital capability strategy", "AI readiness", "Future-focused infrastructure"],
  },
];

const processSteps = [
  { num: "01", title: "Executive Diagnostic" },
  { num: "02", title: "Strategic Blueprint" },
  { num: "03", title: "Systems Architecture Design" },
  { num: "04", title: "Implementation Oversight" },
  { num: "05", title: "Continuous Optimisation" },
];

const differentiators = [
  "20+ years in digital systems and transformation strategy",
  "Built and deployed enterprise-grade SaaS and automation platforms",
  "Maxwell Leadership Certified since 2011",
  "Strategy-to-implementation capability",
  "Advisory grounded in real operational execution",
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative z-10 container-wide section-padding-lg w-full">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] font-body font-medium text-electric-light mb-6 animate-fade-up">
              Strategic Digital Transformation & Leadership Advisory
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold !text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
              Transforming Organisations at Board and Executive Level
            </h1>
            <p className="text-lg md:text-xl font-body !text-primary-foreground/70 leading-relaxed mb-4 animate-fade-up-delay-1">
              Digital Strategy. Systems Architecture. Leadership Alignment.
            </p>
            <p className="text-base font-body !text-primary-foreground/60 leading-relaxed max-w-2xl mb-10 animate-fade-up-delay-2">
              Innovate Ahead Group partners with founders, boards and executive teams to design and execute digital transformation strategies that strengthen governance, optimise systems and unlock long-term enterprise value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Link to="/contact">
                <Button variant="hero-primary" size="xl">
                  Book Executive Strategy Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Request Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE PRIORITIES */}
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="mb-16">
            <div className="divider-accent mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Where We Deliver Impact</h2>
            <p className="text-base text-muted-foreground font-body max-w-xl">
              Four executive-level pillars that drive measurable transformation across the enterprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="card-executive group">
                <div className="text-xs uppercase tracking-widest text-electric font-body font-semibold mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-4 leading-snug">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-electric mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ADVISE */}
      <section className="section-padding-lg bg-section-alt">
        <div className="container-wide">
          <div className="mb-16">
            <div className="divider-accent mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Who We Advise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((audience, i) => (
              <div key={i} className="flex gap-6 p-8 bg-background rounded-sm border border-border">
                <div className="text-2xl font-heading font-bold text-electric/20">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{audience.title}</h3>
                  <ul className="space-y-2">
                    {audience.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                        <ArrowRight size={12} className="text-electric shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                Built by a Practitioner.<br />Trusted by Leaders.
              </h2>
              <ul className="space-y-4">
                {differentiators.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground font-body">
                    <CheckCircle2 size={18} className="text-electric mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-[280px] mx-auto overflow-hidden rounded-full border-4 border-border shadow-lg bg-muted">
                <img
                  src={garyPortrait}
                  alt="Gary Gopinathan — Founder, Innovate Ahead Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm p-5 rounded-sm">
                <p className="font-heading text-lg font-semibold">Gary Gopinathan</p>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mt-1">
                  Founder & Principal Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="section-padding-lg bg-navy-gradient">
        <div className="container-wide">
          <div className="mb-16">
            <div className="w-12 h-0.5 bg-electric-light mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading !text-primary-foreground mb-4">
              Our Advisory Approach
            </h2>
            <p className="text-base font-body text-primary-foreground/60 max-w-xl">
              A structured, measurable engagement model designed for executive-level outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-3xl font-heading font-bold text-electric/40 mb-3">{step.num}</div>
                <div className="w-full h-px bg-primary-foreground/10 mb-4" />
                <p className="text-sm font-body text-primary-foreground/80 font-medium">{step.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button variant="hero-primary" size="xl">
                Schedule Executive Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section-padding-lg bg-section-alt">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <div className="divider-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Trusted by Decision-Makers</h2>
          </div>

          {/* Testimonial placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[1, 2].map((i) => (
              <div key={i} className="bg-background p-8 rounded-sm border border-border">
                <p className="text-muted-foreground font-body italic leading-relaxed mb-6">
                  "Innovate Ahead Group brought clarity to our digital transformation strategy and helped align our board around a unified technology vision."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">Executive Leader</p>
                    <p className="text-xs text-muted-foreground font-body">Enterprise Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client logos placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-28 h-10 bg-muted-foreground/20 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding-lg bg-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Lead Transformation with Clarity and Confidence.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact">
              <Button variant="executive" size="xl">
                Book Executive Consultation
              </Button>
            </Link>
            <Button variant="executive-outline" size="xl">
              Download Capability Statement
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
