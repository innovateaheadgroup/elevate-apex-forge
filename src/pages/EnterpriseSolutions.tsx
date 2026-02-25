import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Innovate Nexus CRM",
    subtitle: "Enterprise Automation & Data Platform",
    desc: "A purpose-built CRM and automation platform designed for enterprises requiring unified data management, intelligent workflows and scalable client relationship infrastructure.",
  },
  {
    title: "Custom SaaS & AI Builds",
    subtitle: "Secure, Scalable Digital Products",
    desc: "End-to-end development of custom SaaS platforms and AI-enabled products built for enterprise-grade security, performance and compliance requirements.",
  },
  {
    title: "Workflow Automation & Integration",
    subtitle: "API Architecture & Enterprise Workflows",
    desc: "Designing and implementing automation ecosystems that connect disparate systems through robust API architecture, Make integrations and enterprise workflow orchestration.",
  },
  {
    title: "Education Technology Systems",
    subtitle: "Scalable Infrastructure for Institutions",
    desc: "Building scalable coding academies, AI-driven learning platforms and digital infrastructure designed specifically for educational institutions and workforce development.",
  },
];

const EnterpriseSolutions = () => {
  return (
    <Layout>
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-20">
            <div className="divider-accent mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              Enterprise-Grade Systems & Solutions
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Technology solutions built for scale, security and long-term enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <div key={i} className="card-executive">
                <span className="text-xs text-electric font-body font-semibold uppercase tracking-widest">
                  0{i + 1}
                </span>
                <h2 className="text-2xl font-heading font-semibold mt-4 mb-2">{solution.title}</h2>
                <p className="text-sm text-electric font-body mb-4">{solution.subtitle}</p>
                <p className="text-muted-foreground font-body leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>

          {/* Architecture diagram placeholder */}
          <div className="mt-20 bg-section-alt rounded-sm border border-border p-12 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-3">
              Architecture Overview
            </p>
            <div className="w-full h-48 bg-muted rounded-sm flex items-center justify-center">
              <p className="text-sm text-muted-foreground font-body">
                Enterprise Architecture Diagram
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button variant="executive" size="xl">
                Request Solutions Brief
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnterpriseSolutions;
