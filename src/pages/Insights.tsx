import Layout from "@/components/Layout";

const categories = [
  "Digital Governance",
  "AI & Enterprise Risk",
  "Systems & Automation",
  "Leadership & Culture",
  "Education & Institutional Strategy",
];

const articles = [
  {
    category: "Digital Governance",
    title: "Why Boards Must Own the Digital Transformation Agenda",
    date: "February 2026",
    excerpt: "Digital transformation is no longer a delegation to IT. Boards that fail to embed technology governance into their strategic oversight risk misaligned investment and eroded competitive position.",
  },
  {
    category: "AI & Enterprise Risk",
    title: "AI Adoption Without Governance Is a Strategic Liability",
    date: "January 2026",
    excerpt: "The rush to integrate AI across the enterprise often outpaces the governance frameworks needed to manage risk, compliance and ethical considerations.",
  },
  {
    category: "Leadership & Culture",
    title: "The Leadership Gap in Digital Transformation",
    date: "December 2025",
    excerpt: "Technology alone does not transform organisations. Without leadership alignment and cultural readiness, digital initiatives fail to deliver sustainable value.",
  },
  {
    category: "Systems & Automation",
    title: "Building Operating Systems for Scale",
    date: "November 2025",
    excerpt: "Enterprises that design their operating systems around automation, data and integration architecture position themselves for sustained growth and operational resilience.",
  },
];

const Insights = () => {
  return (
    <Layout>
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="divider-accent mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Insights</h1>
            <p className="text-lg text-muted-foreground font-body">
              Executive thought leadership on digital transformation, governance, AI and leadership.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="text-xs uppercase tracking-widest font-body font-semibold px-4 py-2 bg-primary text-primary-foreground rounded-sm">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-xs uppercase tracking-widest font-body font-medium px-4 py-2 bg-secondary text-secondary-foreground rounded-sm hover:bg-muted transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="space-y-0 divide-y divide-border">
            {articles.map((article, i) => (
              <article key={i} className="py-10 first:pt-0 cursor-pointer group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-electric font-body font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">{article.date}</span>
                </div>
                <h2 className="text-2xl font-heading font-semibold mb-3 group-hover:text-electric transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed max-w-3xl">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
