import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import boardroom from "@/assets/boardroom.png";

const programs = [
  {
    title: "Board-Level Digital Literacy Workshops",
    desc: "Equipping directors and board members with the digital fluency required to govern technology investment, manage cyber risk and oversee transformation programmes.",
  },
  {
    title: "Executive Leadership Coaching",
    desc: "One-on-one and cohort-based executive coaching grounded in Maxwell Leadership methodology, focused on influence, decision-making and organisational impact.",
  },
  {
    title: "DISC & High Road Leadership",
    desc: "Leadership profiling and development using DISC behavioural assessment combined with High Road Leadership principles for ethical governance.",
  },
  {
    title: "Founder & Growth Lab Advisory",
    desc: "Intensive advisory for founders scaling beyond start-up, building leadership capacity, operational discipline and governance maturity.",
  },
  {
    title: "Strategic Offsite Facilitation",
    desc: "Designing and facilitating executive offsites focused on strategic planning, team alignment and transformation priorities.",
  },
];

const Leadership = () => {
  return (
    <Layout>
      {/* Hero section with boardroom image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={boardroom} alt="Executive boardroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative z-10 container-wide section-padding flex items-end h-full pb-12">
          <div>
            <div className="w-12 h-0.5 bg-electric-light mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading !text-primary-foreground">
              Leadership That Governs with Integrity and Vision
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <p className="text-lg text-muted-foreground font-body max-w-2xl mb-16 leading-relaxed">
            Our leadership programmes are designed for ASX boards, independent directors, executive committees and founder-led enterprises seeking to build governance capability and leadership maturity.
          </p>

          <div className="space-y-0 divide-y divide-border">
            {programs.map((program, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 first:pt-0">
                <div className="md:col-span-1">
                  <span className="text-xs text-electric font-body font-semibold uppercase tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-xl font-heading font-semibold">{program.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground font-body leading-relaxed">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact">
              <Button variant="executive" size="xl">
                Schedule Leadership Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
