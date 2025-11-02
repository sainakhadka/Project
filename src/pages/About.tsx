import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, Mail, Linkedin, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container px-4 py-20 md:px-6">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About LeafClutch Technologies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Empowering businesses through intelligent automation
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                LeafClutch Technologies is a technology-driven startup
                established in October 2025, specializing in the development of
                automation and artificial intelligence systems designed to
                streamline business operations. Although currently in our
                initial growth phase, we are committed to delivering reliable
                and scalable solutions that empower organizations to operate
                more efficiently.
              </p>
              <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                At LeafClutch, we believe that every business—regardless of size
                or industry—should have access to advanced, AI-powered tools
                that promote growth, enhance decision-making, and improve
                overall performance. Our mission is to combine innovation with
                practicality, helping enterprises harness the full potential of
                automation and artificial intelligence to achieve sustainable
                success.
              </p>
            </div>

            {/* Values */}
            <div className="grid gap-8 md:grid-cols-3 mt-16">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize AI and automation, making it accessible and
                  beneficial for businesses of all sizes.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of AI technology to deliver
                  cutting-edge solutions that drive real results.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Partnership</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, understanding their unique
                  challenges to build tailored solutions.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mt-20 bg-secondary rounded-2xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
              <p className="text-center text-muted-foreground mb-12">
                A dedicated group of AI engineers, developers, and automation
                specialists committed to transforming how businesses operate.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Siddhartha */}
                <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">
                    Siddhartha Pathak
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Founder & AI Strategist — leads client relations, project
                    direction, and AI solution design.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="mailto:sid@leafclutch.dev"
                      className="text-accent hover:text-accent/80"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/xxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://siddharthapathak.com.np/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Pawan */}
                <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">
                    Pawan Chaudhary
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Technical Lead — oversees infrastructure, website
                    management, and assists in recruitment.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="mailto:pawan@leafclutch.dev"
                      className="text-accent hover:text-accent/80"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Shristi */}
                <div className="bg-background rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">Shristi Karki</h3>
                  <p className="text-muted-foreground mb-4">
                    Design Team — leads visual design and creative direction
                    across projects.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="mailto:shristi@leafclutch.dev"
                      className="text-accent hover:text-accent/80"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
