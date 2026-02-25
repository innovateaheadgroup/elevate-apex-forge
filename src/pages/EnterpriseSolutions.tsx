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

          {/* Operating Model Architecture */}
          <div className="mt-20">
            <div className="max-w-3xl mb-12">
              <div className="divider-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading mb-4">
                Operating Model Architecture
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our advisory model integrates strategy, systems design and execution oversight into a cohesive transformation framework.
              </p>
            </div>
            <div className="bg-section-alt rounded-sm border border-border p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* Row 1: Strategy Layer */}
                <div className="md:col-span-5 mb-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-4 text-center">Strategy Layer</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Executive Diagnostic", "Strategic Blueprint", "Governance Framework"].map((item) => (
                      <div key={item} className="bg-navy text-primary-foreground rounded-sm p-4 text-center">
                        <p className="text-sm font-body font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-5 flex justify-center mb-8">
                  <div className="w-px h-8 bg-electric relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-electric" />
                  </div>
                </div>

                {/* Row 2: Systems Layer */}
                <div className="md:col-span-5 mb-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-4 text-center">Systems & Technology Layer</p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {["CRM & Data Architecture", "AI & Automation", "API Integration", "Cloud Infrastructure"].map((item) => (
                      <div key={item} className="bg-background border border-border rounded-sm p-4 text-center">
                        <p className="text-sm font-body font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-5 flex justify-center mb-8">
                  <div className="w-px h-8 bg-electric relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-electric" />
                  </div>
                </div>

                {/* Row 3: Execution Layer */}
                <div className="md:col-span-5 mb-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-4 text-center">Execution & Delivery Layer</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Implementation Oversight", "Change Management", "Continuous Optimisation"].map((item) => (
                      <div key={item} className="bg-muted rounded-sm p-4 text-center">
                        <p className="text-sm font-body font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Architecture Diagram */}
          <div className="mt-20">
            <div className="max-w-3xl mb-12">
              <div className="divider-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading mb-4">
                Enterprise Architecture Overview
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                A layered architecture delivering secure, scalable and intelligent enterprise systems.
              </p>
            </div>
            <div className="bg-section-alt rounded-sm border border-border p-8 md:p-12">
              {/* Presentation / Client Layer */}
              <div className="mb-6">
                <div className="bg-navy text-primary-foreground rounded-sm p-5">
                  <p className="text-xs uppercase tracking-widest font-body mb-3 opacity-70">Presentation Layer</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Web Portal", "Mobile App", "Client Dashboard", "Admin Console"].map((item) => (
                      <div key={item} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm p-3 text-center">
                        <p className="text-xs font-body font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-px w-16 bg-border" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">API Gateway</span>
                  <div className="h-px w-16 bg-border" />
                </div>
              </div>

              {/* Application / Business Logic Layer */}
              <div className="mb-6">
                <div className="border border-border bg-background rounded-sm p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-3">Application & Business Logic</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {["Auth & Identity", "Workflow Engine", "AI/ML Services", "Notification Service", "Analytics Engine"].map((item) => (
                      <div key={item} className="bg-muted rounded-sm p-3 text-center">
                        <p className="text-xs font-body font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-px w-16 bg-border" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Service Bus</span>
                  <div className="h-px w-16 bg-border" />
                </div>
              </div>

              {/* Integration Layer */}
              <div className="mb-6">
                <div className="border border-electric/30 bg-electric/5 rounded-sm p-5">
                  <p className="text-xs uppercase tracking-widest text-electric font-body mb-3">Integration Layer</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["CRM (Nexus)", "ERP Connector", "Payment Gateway", "Third-Party APIs"].map((item) => (
                      <div key={item} className="bg-background border border-border rounded-sm p-3 text-center">
                        <p className="text-xs font-body font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-px w-16 bg-border" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Encrypted</span>
                  <div className="h-px w-16 bg-border" />
                </div>
              </div>

              {/* Data Layer */}
              <div>
                <div className="bg-muted rounded-sm p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-3">Data & Infrastructure Layer</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["PostgreSQL / Data Lake", "Redis Cache", "File Storage", "Monitoring & Logging"].map((item) => (
                      <div key={item} className="bg-background border border-border rounded-sm p-3 text-center">
                        <p className="text-xs font-body font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
