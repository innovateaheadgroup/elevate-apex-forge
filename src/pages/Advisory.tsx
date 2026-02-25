import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Digital Transformation Roadmapping",
    desc: "We develop end-to-end transformation strategies that align technology investment with enterprise objectives, governance frameworks and operational readiness.",
  },
  {
    title: "Enterprise Systems & CRM Architecture",
    desc: "Designing scalable CRM and enterprise systems architecture that unifies data, streamlines workflows and positions organisations for sustained growth.",
  },
  {
    title: "AI Adoption & Governance Strategy",
    desc: "Structured frameworks for AI integration that balance innovation with risk management, compliance and organisational capability.",
  },
  {
    title: "Operating Model & Automation Design",
    desc: "Redesigning business operating models through intelligent automation, process optimisation and integration architecture.",
  },
  {
    title: "Fractional CTO / Strategic Technology Advisory",
    desc: "On-demand executive-level technology leadership for organisations navigating complex digital decisions without a full-time CTO.",
  },
];

const Advisory = () => {
  return (
    <Layout>
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-20">
            <div className="divider-accent mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              Strategic Digital Advisory for Modern Enterprises
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              We provide board-level and executive advisory across five core disciplines — each grounded in practical experience building and scaling enterprise systems.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-border">
            {services.map((service, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 first:pt-0">
                <div className="md:col-span-1">
                  <span className="text-xs text-electric font-body font-semibold uppercase tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-xl font-heading font-semibold">{service.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact">
              <Button variant="executive" size="xl">
                Schedule Advisory Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Advisory;
