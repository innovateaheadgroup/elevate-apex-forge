import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import garyPortrait from "@/assets/gary-portrait.png";

const credentials = [
  "Founder, Innovate Ahead Group",
  "Maxwell Certified Executive Trainer",
  "Digital Transformation Strategist",
  "SaaS & EdTech Builder",
  "Based in Melbourne, Australia",
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="divider-accent mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading mb-8">About Gary Gopinathan</h1>

              <ul className="space-y-3 mb-10">
                {credentials.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-body flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Gary Gopinathan is the founder and principal advisor of Innovate Ahead Group, a strategic advisory firm serving boards, executive teams and founder-led enterprises across digital transformation, systems architecture and leadership development.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                With more than two decades of experience in enterprise technology, Gary has built and deployed SaaS platforms, CRM systems and automation infrastructure across multiple industries. As a Maxwell Leadership Certified Executive Trainer since 2011, he integrates leadership development with technology strategy — ensuring transformation is led with integrity, alignment and operational rigour.
              </p>

              <blockquote className="border-l-2 border-electric pl-6 my-10">
                <p className="font-heading text-xl italic text-foreground leading-relaxed">
                  "Technology without leadership alignment creates complexity. True transformation integrates strategy, systems and character."
                </p>
                <cite className="text-sm text-muted-foreground font-body mt-3 block not-italic">
                  — Gary Gopinathan
                </cite>
              </blockquote>

              <Link to="/contact">
                <Button variant="executive" size="lg">
                  Connect with Gary
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={garyPortrait}
                  alt="Gary Gopinathan — Founder, Innovate Ahead Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-electric/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
