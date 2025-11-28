// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Briefcase, GraduationCap } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const Careers = () => {
//   const internships = [
//     {
//       title: "App Developer Intern",
//       description:
//         "Join our mobile development team to build cross-platform applications using React Native and modern technologies.",
//     },
//     {
//       title: "Web Developer Intern",
//       description:
//         "Work on cutting-edge web applications using React, TypeScript, and modern frontend frameworks.",
//     },
//   ];

//   const jobs = [
//     {
//       title: "n8n Agent Developer",
//       description:
//         "Design and implement workflow automation solutions using n8n, integrating various APIs and services for enterprise clients.",
//     },
//     {
//       title: "Agentic AI Developer",
//       description:
//         "Build and deploy autonomous AI agents that can make decisions, learn from interactions, and optimize business processes.",
//     },
//     {
//       title: "Data Scientist",
//       description:
//         "Analyze complex datasets, build predictive models, and derive actionable insights to drive business intelligence.",
//     },
//   ];

//   const handleApply = () => {
//     window.location.href = "mailto:careers@leafclutch.dev";
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       <main className="flex-1">
//         <section className="container px-4 py-20 md:px-6">
//           <div className="text-center space-y-4 mb-16 animate-fade-in">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//               Join Our Team
//             </h1>
//             <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
//               Be part of the future of AI and automation
//             </p>
//           </div>

//           {/* Internships */}
//           <div className="max-w-5xl mx-auto mb-16 animate-slide-up">
//             <div className="flex items-center space-x-3 mb-8">
//               <GraduationCap className="h-8 w-8 text-accent" />
//               <h2 className="text-3xl font-bold">Internships</h2>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2">
//               {internships.map((position, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <CardTitle>{position.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-sm leading-relaxed">
//                       {position.description}
//                     </CardDescription>
//                   </CardContent>
//                   <CardFooter>
//                     <Button onClick={handleApply} className="w-full">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Full-time Jobs */}
//           <div className="max-w-5xl mx-auto animate-slide-up">
//             <div className="flex items-center space-x-3 mb-8">
//               <Briefcase className="h-8 w-8 text-accent" />
//               <h2 className="text-3xl font-bold">Full-Time Positions</h2>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {jobs.map((position, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <CardTitle>{position.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-sm leading-relaxed">
//                       {position.description}
//                     </CardDescription>
//                   </CardContent>
//                   <CardFooter>
//                     <Button onClick={handleApply} className="w-full">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Careers;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-32 md:px-6">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
              We Are Hiring!
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              LeafClutch is expanding its team. We're looking for talented
              individuals in the following domains and many more:
            </p>


            <div className="grid lg:grid-cols-2 gap-6 animate-fade-in">
              <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    AI/ML Engineering Intern
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                  Work on real-world machine learning projects including
                  computer vision, NLP, and predictive analytics. Build and
                  deploy ML models using PyTorch and TensorFlow.
                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Strong Python programming skills</li>
                  <li>• Understanding of ML fundamentals</li>
                  <li>• Familiarity with PyTorch or TensorFlow</li>
                  <li>• Interest in AI research and applications</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Production ML model deployment</li>
                  <li>✓ End-to-end ML pipeline development</li>
                  <li>✓ Model optimization and tuning</li>
                  <li>✓ Working with real client datasets</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20AI%2FML%20Engineering%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20AI%2FML%20Engineering%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>

               <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                     Data Science Intern
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                 Analyze complex datasets, build predictive models, and create data visualizations. Work with pandas, scikit-learn,
                  and modern data science tools.


                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Strong Python programming skills</li>
                  <li>• Understanding of ML fundamentals</li>
                  <li>• Familiarity with PyTorch or TensorFlow</li>
                  <li>• Interest in AI research and applications</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Python programming knowledge
</li>
                  <li>✓ End-to-end ML pipeline development</li>
                  <li>✓ Model optimization and tuning</li>
                  <li>✓ Working with real client datasets</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20Data%20Science%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20Data%20Science%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>


                <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    APP Development
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                  Assisting in the creation and improvement of mobile applications.  Involves working with design prototypes,
                   implementing app features, fixing bugs, optimizing performance, and collaborating with the development team
                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Basic understanding of mobile app development</li>
                  <li>• Familiarity with at least one framework: Flutter, React Native, or Android (Java/Kotlin)</li>
                  <li>• Basic understanding of APIs, JSON, and database operations</li>
                  <li>• Experience with Git & GitHub</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Building mobile applications from scratch</li>
                  <li>✓ Creating responsive and intuitive UI components</li>
                  <li>✓ Integrating REST APIs and handling data flow</li>
                  <li>✓ App state management techniques</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20App%20Development%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20App%20Development%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>

                <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                      Agentic AI
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                  Involves contributing to the development of intelligent systems capable of autonomous reasoning, decision-making, and 
                  task execution. Focuses on building AI agents, integrating LLMs, designing workflows, automating processes, and experimenting with multi-agent architectures.


                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Basic understanding of Python and AI/ML concepts</li>
                  <li>• Familiarity with Large Language Models (LLMs)</li>
                  <li>• Knowledge of frameworks such as LangChain, OpenAI API, or similar tools</li>
                  <li>• Experience with Git & GitHub</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Designing and building AI agents with autonomous capabilities</li>
                  <li>✓ Integrating LLMs into real-world workflows</li>
                  <li>✓ Working with vector databases, embeddings, and retrieval systems</li>
                  <li>✓ Implementing reasoning, planning, and tool-use in AI agents</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20AI%2FML%20Engineering%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20AI%2FML%20Engineering%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>

                <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                  Full-Stack Development Intern
                   
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                  Build modern web applications using React, Node.js, and cloud technologies. Work on both frontend and backend development 
                  for production application
                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• JavaScript/TypeScript proficiency</li>
                  <li>• React or similar framework experience</li>
                  <li>• Understanding of REST APIs</li>
                  <li>• Git version control knowledge</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Modern frontend development with React</li>
                  <li>✓ Backend API development with Node.js</li>
                  <li>✓ Database design and management</li>
                  <li>✓ Cloud deployment (AWS/GCP)</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20AI%2FML%20Engineering%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20AI%2FML%20Engineering%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>

                <div className="max-w-xl bg-white shadow-lg rounded-2xl p-8 border">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    MERN stack
                  </h2>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>

                {/* Info Row */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-2h-1V4h-2v2H7V4H5v2H4c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 
        2-2V8c0-1.1-.9-2-2-2zm0 14H4V10h16v10z"
                      />
                    </svg>
                    <span>3-6 months</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C8.1 2 5 5.1 5 
        9c0 5.2 7 13 7 13s7-7.8 
        7-13c0-3.9-3.1-7-7-7zm0 
        9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 
        6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 
        11.5 12 11.5z"
                      />
                    </svg>
                    <span>Remote</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3H5c-1.1 
        0-2 .9-2 2v14c0 1.1.9 
        2 2 2h14c1.1 0 2-.9 
        2-2V5c0-1.1-.9-2-2-2zm0 
        16H5V8h14v11zm-8-9H6v2h5v-2z"
                      />
                    </svg>
                    <span>Full-time</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-5 leading-relaxed">
                  Assisting in the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                  focuses on writing clean code, collaborating with the development team, implementing frontend and backend features, 
                  and supporting the creation of scalable web solutions.
                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold mt-6 pr-1">
                  Requirements:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Basic knowledge of HTML, CSS, JavaScript</li>
                  <li>• Understanding of React.js</li>
                  <li>• Familiarity with Node.js & Express.js</li>
                  <li>• Basic understanding of MongoDB database</li>
                </ul>

                {/* What You'll Learn */}
                <h3 className="text-lg font-semibold mt-6">
                  What You'll Learn:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>✓ Building full-stack applications using the MERN stack</li>
                  <li>✓ Creating and managing REST APIs</li>
                  <li>✓ Implementing authentication & authorization</li>
                  <li>✓ Deployment of app</li>
                </ul>

                {/* Button */}
                {/* Opens Gmail compose with fields filled */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@leafclutch.dev&su=Application%20for%20AI%2FML%20Engineering%20Intern&body=Hi%20LeafClutch%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20AI%2FML%20Engineering%20Intern%20role.%20Please%20find%20my%20CV%20attached.%0A%0AThanks%2C%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Apply Now
                  </button>
                </a>
              </div>

              

            </div>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              If you’re passionate about any of these areas and want to join our
              team, send us your resume at:
            </p>

            <a
              href="mailto:careers@leafclutch.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="mt-4 inline-flex items-center gap-2 border-accent text-accent hover:bg-accent/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                careers@leafclutch.dev
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
