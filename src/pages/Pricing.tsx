import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AIML from "@/assets/AIML.png";
import BPC from "@/assets/BPC.png";
import DS from "@/assets/DS.png";
import SA from "@/assets/SA.png";
import PM from "@/assets/PM.png";
import UX from "@/assets/UX.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";

const Pricing = () => {
  const plans = [
    {
      name: "Business",
      price: "Custom",
      description: "Perfect for growing businesses looking to automate",
      features: [
        "Custom AI Solutions",
        "Process Automation",
        "Integration with Existing Tools",
        "Monthly Performance Reports",
        "Email Support",
        "Up to 5 Automation Workflows",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced solutions for large-scale operations",
      features: [
        "Everything in Business",
        "Dedicated Account Manager",
        "Custom AI Model Training",
        "Unlimited Automation Workflows",
        "24/7 Priority Support",
        "Advanced Analytics & Insights",
        "On-premise Deployment Option",
        "SLA Guarantee",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container px-4 py-20 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Pricing Plans
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative animate-slide-up ${
                  plan.popular ? "border-accent shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <section className="container bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="font-medium text-2xl md:text-4xl leading-tight">
                  Post-Deployment
                  <br className="hidden md:block"></br>
                  Solution Management
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-[550px]">
                  Launching your AI solution is just the beginning. At
                  Leafclutch, we offer comprehensive post-deployment support to
                  ensure your systems continue to perform reliably as your
                  business evolves.
                  <br></br>
                  <br></br>
                  From ongoing system monitoring and performance optimization to
                  adapting workflows as new challenges arise, our team stays
                  engaged to keep your AI solutions running at peak efficiency.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration and system monitoring"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              What Sets Our Development
              <br></br>
              Partnership Apart
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              Every Leafclutch development partnership includes access to:
            </p>
          </div>

          <div className="w-full px-4 md:px-10 lg:px-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1 — AI/ML Engineers */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={AIML}
                    alt="AI Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  AI/ML Engineers
                </h3>
              </div>

              {/* 2 — Business Process Consultants */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={BPC}
                    alt="Business Process Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Business Process Consultants
                </h3>
              </div>

              {/* 3 — Data Scientists */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={DS}
                    alt="Data Science Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Data Scientists
                </h3>
              </div>

              {/* 4 — Solution Architects */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={SA}
                    alt="Solution Architect Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Solution Architects
                </h3>
              </div>

              {/* 5 — Project Managers */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={PM}
                    alt="Project Manager Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Project Managers
                </h3>
              </div>

              {/* 6 — UX/UI Specialists */}
              <div className="border border-blue-800 rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-800 p-4 rounded-xl flex items-center justify-center w-16 h-16">
                  <img
                    src={UX}
                    alt="UX/UI Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  UX/UI Specialists
                </h3>
              </div>
            </div>
          </div>

          <div className="center mx-auto mt-8 md:mt-12 text-center">
            <div>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-7">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* SCROLL SECTION LIKE THE VIDEO */}
        <section className="w-full bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT SIDE — STICKY TEXT */}
            <div className="md:sticky md:top-32 h-fit space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Flexible Resource Allocation
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Allocate your monthly hours across:
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* CARD 1 */}
              <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4 sticky top-32 bg-white">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src={image1} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Custom AI system development
                  </h3>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4 sticky top-32  bg-white">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src={image2} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Integration with existing systems and data sources
                  </h3>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4 sticky top-32  bg-white">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src={image3} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Data pipeline engineering and optimization
                  </h3>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4 sticky top-32  bg-white">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src={image4} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Business process optimization and automation
                  </h3>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4 sticky top-32  bg-white">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src={image5} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Team training and knowledge transfer
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
