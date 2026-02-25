import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const inquiryTypes = [
  "Board Advisory",
  "Digital Transformation",
  "CRM & Automation",
  "AI Strategy",
  "Leadership Development",
  "Education Systems",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding-lg bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="divider-accent mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading mb-6">Begin the Conversation.</h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
                All inquiries are treated with the highest level of confidentiality. Our team will respond within one business day.
              </p>

            </div>

            <div>
              {submitted ? (
                <div className="bg-section-alt rounded-sm border border-border p-12 text-center">
                  <h2 className="text-2xl font-heading mb-4">Thank You</h2>
                  <p className="text-muted-foreground font-body">
                    Your inquiry has been received. We will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                        First Name
                      </label>
                      <Input required className="font-body" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input required className="font-body" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                      Organisation
                    </label>
                    <Input required className="font-body" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                      Role
                    </label>
                    <Input className="font-body" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                        Email
                      </label>
                      <Input type="email" required className="font-body" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                        Phone
                      </label>
                      <Input type="tel" className="font-body" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                      Nature of Inquiry
                    </label>
                    <Select>
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type} className="font-body">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest font-body font-medium text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea rows={5} className="font-body resize-none" />
                  </div>
                  <Button variant="executive" size="xl" type="submit" className="w-full sm:w-auto">
                    Submit Confidential Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
