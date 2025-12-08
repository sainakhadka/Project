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

              <div className="grid gap-8 md:grid-cols-2">
                {/* Siddhartha */}
               <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQGk44uYODSrgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722535962639?e=1766620800&v=beta&t=BsUpPDxiQU_ovOu7pCl3fGFolXfzRJgSISESpd3jGLQ"
                      alt="photo"
                          className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg"
                        />

               </div>
               <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-gray-900">Siddhartha pathak</h3>
                <p className="text-gray-600"> Founder & AI Strategist</p>
                <div className="flex justify-start gap-4 pt-3">
                   <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sid@leafclutch.dev"
                      target="_blank"
                       rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                     >
                    <Mail className="w-5 h-5" />
                   </a>

                    <a
                      href="https://linkedin.com/in/siddharthapathak"
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
                      className="text-accent hover:text-accent/80">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
               </div>
               </div>
             
             <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFO2cEDbK8ZEg/profile-displayphoto-scale_400_400/B4DZoy66_HIkAg-/0/1761790900415?e=1766620800&v=beta&t=Nrqznr0p9Y_9TPtxiyYul2OPy-0cvgI6CZXTLscAvnI"
                      alt="photo"
                          className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg"
                        />

               </div>
               <div className="text-left w-full">
                <h3 className="text-xl font-semibold text-gray-900">Shubham Kurmar Deo</h3>
                <p className="text-gray-600"> Founder & CEO</p>
                <div className="flex justify-start gap-4 pt-3">
                   <a
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=shubham@leafclutch.dev"
                      target="_blank"
                       rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80"
                     >
                     <Mail className="w-5 h-5" />
                     </a>

                    <a
                      href="https://www.linkedin.com/in/shubham-kumar-deo-7048ab29b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
               </div>
               </div>

            
              </div>
            </div>
          </div>

          {/*our team*/}
          <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center pt-4">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src= "https://media.licdn.com/dms/image/v2/D5603AQHzl0FNihpJKQ/profile-displayphoto-shrink_800_800/B56ZW2RqLOHoAg-/0/1742519837751?e=1766620800&v=beta&t=c0EN9p1M8hJBgSCvKS-L67zDSW9PCtnyf8lhbGJiZgo"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Team1</h3>
                     <p className="text-gray-600 mb-2">Vice President of Engineering</p>
                       <a 
              href="https://www.linkedin.com/in/martinoosthuizn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
            
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQH7zo4-gLhXmA/profile-displayphoto-shrink_400_400/B4EZdWz5q1GcAg-/0/1749508136736?e=1766620800&v=beta&t=rFPSQbwPPuLmZ-t29dSI9xznjfCIoOoG4IxEtz2Wm8Q"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Team2</h3>
                     <p className="text-gray-600 mb-2">AI project manager</p>
                       <a 
              href="https://www.linkedin.com/in/vishal-hada/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQG9zuS64DaP2Q/profile-displayphoto-scale_400_400/B4DZheNzwNGgAg-/0/1753927337148?e=1766620800&v=beta&t=UNE7L_R-rLiuJtGEOj4BcFpHe-rgBFVjM8dZ484It-U"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Deepenkar</h3>
                     <p className="text-gray-600 mb-2">founding enginner</p>
                       <a 
              href="https://www.linkedin.com/in/deepankarbsen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src= "https://media.licdn.com/dms/image/v2/D5603AQF2RtYBpVlmRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692647225615?e=1766620800&v=beta&t=ft-TS6i5xn41tNPwgV495W1DbcOfoT7B9-Zb86jNNt0"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Ishan</h3>
                     <p className="text-gray-600 mb-2">founding enginner</p>
                       <a 
              href="https://www.linkedin.com/in/ishanbhargava1402/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQF7ZXfkfPDFnw/profile-displayphoto-scale_400_400/B4EZjXSWgWHEAo-/0/1755958569752?e=1766620800&v=beta&t=r0CgsBJ83gvi26gPXPQx2hnYKEt94hjPZXiq-WXyGz4"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Michael Wacht</h3>
                     <p className="text-gray-600 mb-2">AI Partner Incubator Manager
</p>
                       <a 
              href="https://www.linkedin.com/in/mwacht/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src= "https://media.licdn.com/dms/image/v2/D5603AQHKGBO2ZX9Hug/profile-displayphoto-scale_400_400/B56ZmoMDWgG0Ak-/0/1759463364586?e=1766620800&v=beta&t=JJ5sQfeQ1ncLQ500PC4F79HEt6qiHLLCG49FN-ew9Mc"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Guatami sinde</h3>
                     <p className="text-gray-600 mb-2">Vice President of Engineering</p>
                       <a 
              href="https://www.linkedin.com/in/geeshinde/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src="https://media.licdn.com/dms/image/v2/C5603AQGN7C5j017TeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660803242560?e=1766620800&v=beta&t=3I-NG7j0Qzb5BHOKUDQt4Grze29k-wMuxEoLQ6IZJ3A"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Jason</h3>
                     <p className="text-gray-600 mb-2">Vice President of Engineering</p>
                       <a 
              href="https://www.linkedin.com/in/jason-p-guest/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 overflow-hidden">
                      <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGNdzSiD9FSCg/profile-displayphoto-scale_400_400/B4DZnr5KRwIEAg-/0/1760599256830?e=1766620800&v=beta&t=eqmdOWYEOgUr8dXWfD6bxHPXFo2-quclAxf4hwD82cs"
              alt="member"
              className="w-full h-full object-cover rounded-lg"
            />
                </div>
                <div className="text-center">
                     <h3 className="text-xl font-semibold text-gray-900">Maalik baksin</h3>
                     <p className="text-gray-600 mb-2">Vice President of Engineering</p>
                       <a 
              href="https://www.linkedin.com/in/mallika-bakshi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
                </div>
            </div>
          </div>

        </div>
          

          <section className="py-16 container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CARD START */}
              <div className="flex flex-col items-start">
                <div className="bg-[#085698] p-4 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bot w-6 h-6 text-white"
                  >
                    <rect width="20" height="12" x="2" y="7" rx="2" />
                    <path d="M12 7V4" />
                    <circle cx="8" cy="12" r="1" />
                    <circle cx="16" cy="12" r="1" />
                    <path d="M9 16h6" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  Custom AI Agent Engineering
                </h3>

                <p className="text-gray-600">
                  We architect, deploy, and maintain AI systems tailored to your
                  specific business operations—designed to drive measurable
                  outcomes and long-term scalability.
                </p>
              </div>

              {/* CARD START */}
              <div className="flex flex-col items-start">
                <div className="bg-[#085698] p-4 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-git-branch w-6 h-6 text-white"
                  >
                    <circle cx="6" cy="3" r="2" />
                    <circle cx="6" cy="15" r="2" />
                    <circle cx="18" cy="9" r="2" />
                    <path d="M6 5v8" />
                    <path d="M8 15h6a2 2 0 0 0 2-2V11" />
                    <path d="M6 5a4 4 0 0 1 4 4v1" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3">Managed Fully</h3>

                <p className="text-gray-600">
                  Our team builds and manages end-to-end automation systems that
                  integrate seamlessly into your workflows, unlocking efficiency
                  and reducing manual overhead.
                </p>
              </div>
              {/* CARD END */}

              {/* CARD START */}
              <div className="flex flex-col items-start">
                <div className="bg-[#085698] p-4 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-no-axes-column-increasing w-6 h-6 text-white"
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3">AI Partner</h3>

                <p className="text-gray-600">
                  We partner with your team to assess opportunities for AI
                  implementation, align solutions with business goals, and
                  ensure successful adoption across departments.
                </p>
              </div>
              {/* CARD END */}
            </div>
          </section>

          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                   <div className="w-full md:w-1/2">
                   <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-3xl leading-tight">
                          We help you grow.
                        </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      At Leafclutch, we don't just build AI systems—we build long-term partnerships that evolve with your business.
                       Our mission is to help you unlock growth by leveraging custom AI solutions that are scalable,
                        efficient, and aligned with your goals.
                    </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Whether you're optimizing internal operations, reducing manual workload, or exploring 
                    new ways to engage customers, we act as a strategic partner in your transformation journey. 
                    We combine deep technical expertise with a business-first mindset to deliver real, measurable impact.
                  </p>
                   </div>
                   </div>
                    <div className="w-full md:w-1/2">
                    <img src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Young professionals collaborating in a modern tech workspace"
                    className="w-full h-[400px] object-cover rounded-2xl"/>
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
