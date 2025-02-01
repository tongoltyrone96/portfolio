import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Tyrone Jher Tongol
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mb-8">
          Senior Full-Stack Engineer with a strong focus on scalable web platforms, system architecture, and long-lived production systems.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#case-studies">View Case Studies <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p className="text-neutral-700 max-w-4xl leading-relaxed">
          Senior Full-Stack Engineer with 9+ years of professional experience designing, building, and maintaining large-scale web applications in production environments. I work across
          the entire stack—from frontend architecture and performance
          optimization to backend systems, APIs, and infrastructure. My
          experience includes complex E-commerce platforms, internal business
          tools, and data-driven applications, with a strong focus on clean
          architecture, long-term maintainability, and engineering ownership.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Selected Case Studies</h2>
          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Medical Consulting Platform
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                AI-assisted Patient Consultation System (Production Project)
              </p>

              <p className="mb-4 text-neutral-700">
                This project was developed at my most recent company and represents one
                of the most technically demanding systems I have worked on. The platform
                enables patients to describe medical symptoms and receive consultations
                either from licensed doctors or through an AI-powered assistant,
                depending on availability and use case.
              </p>

              <p className="mb-4 text-neutral-700">
                Due to the sensitive nature of healthcare data and internal business
                requirements, the production system is not publicly accessible. However,
                the overall architecture and user experience closely resemble publicly
                available AI medical consultation platforms.
              </p>

              <p className="mb-4 text-neutral-700">
                My primary responsibility was frontend development, where I designed and
                implemented the full consultation flow—from symptom input to result
                presentation—using React. I worked closely with backend and AI engineers
                to integrate real-time APIs and contributed to AI service integration
                using Python.
              </p>

              <ul className="list-disc ml-5 text-neutral-700 mb-4">
                <li>
                  <strong>Frontend:</strong> React-based application focused on
                  accessibility, real-time interaction, and healthcare usability
                </li>
                <li>
                  <strong>Backend:</strong> Node.js services coordinating consultation
                  workflows and API communication
                </li>
                <li>
                  <strong>AI Services:</strong> Python-based services leveraging Large
                  Language Models and CNN-based models for symptom analysis and response
                  generation
                </li>
              </ul>

              <p className="mb-4 text-neutral-700">
                The platform is actively used in production and highlights the challenges
                of building AI-assisted systems that must remain reliable, explainable,
                and user-friendly in real-world healthcare environments.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  className="underline"
                  href="https://huggingface.co/spaces/ruslanmv/Medical-Llama3-Chatbot"
                  target="_blank"
                >
                  Public Demo (Similar System)
                </a>
                <a
                  className="underline"
                  href="https://github.com/ruslanmv/ai-medical-chatbot"
                  target="_blank"
                >
                  Reference Open-source Project
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Saleor */}
          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Saleor</h3>
              <p className="text-sm text-neutral-500 mb-4">
                Enterprise Headless Commerce Platform
              </p>

              <p className="mb-4 text-neutral-700">
                Saleor was created to solve the limitations of traditional monolithic
                e-commerce platforms by providing a fully headless, API-first commerce
                backend. It is designed for enterprise teams that require flexibility,
                multi-channel support, and the ability to scale complex commerce
                workflows without coupling frontend and backend concerns.
              </p>

              <p className="mb-4 text-neutral-700">
                The platform emphasizes system-level design, including rich domain
                modeling for products, variants, pricing, orders, and checkout flows.
                Working with Saleor required understanding how GraphQL schemas,
                business logic, and external storefronts interact in large,
                production-grade systems.
              </p>

              <ul className="list-disc ml-5 text-neutral-700 mb-4">
                <li>
                  <strong>Backend:</strong> Python (Django) with a GraphQL-first API
                  architecture
                </li>
                <li>
                  <strong>Architecture:</strong> Fully headless commerce backend
                  supporting multiple frontend clients
                </li>
                <li>
                  <strong>Engineering focus:</strong> Domain modeling, API design,
                  and scalability for enterprise commerce use cases
                </li>
              </ul>

              <div className="flex gap-4 text-sm">
                <a
                  className="underline"
                  href="https://saleor.io"
                  target="_blank"
                >
                  Live Platform
                </a>
                <a
                  className="underline"
                  href="https://github.com/saleor/saleor"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </div>
            </CardContent>
          </Card>


          {/* Anor */}
          <Card className="mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Anor E-commerce</h3>
              <p className="text-sm text-neutral-500 mb-4">
                Production-style Full-Stack E-commerce Application
              </p>

              <p className="mb-4 text-neutral-700">
                Anor was built to model how a real-world, mid-scale online store is
                designed and maintained in production environments. The goal was not
                to create a demo, but to implement a realistic commerce system that
                balances frontend usability, backend predictability, and long-term
                maintainability.
              </p>

              <p className="mb-4 text-neutral-700">
                The project focuses on end-to-end ownership of core commerce flows,
                including product discovery, category-driven navigation, cart state
                management, and checkout workflows. Architectural decisions were made
                with scalability and clarity in mind, mirroring how full-stack engineers
                work on consumer-facing products in real teams.
              </p>

              <ul className="list-disc ml-5 text-neutral-700 mb-4">
                <li>
                  <strong>Frontend:</strong> Next.js (React) with structured routing,
                  server-side rendering, and SEO-friendly page composition
                </li>
                <li>
                  <strong>Backend:</strong> API-driven product, cart, and order
                  workflows designed for predictable state transitions
                </li>
                <li>
                  <strong>Engineering focus:</strong> Clean UI architecture, clear
                  separation of concerns, and maintainable full-stack data flow
                </li>
              </ul>

              <div className="flex gap-4 text-sm">
                <a
                  className="underline"
                  href="https://anor.alisherm.dev"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  className="underline"
                  href="https://github.com/USERNAME/anor-ecommerce"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </div>
            </CardContent>
          </Card>
          {/* Spree */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Spree Commerce</h3>
              <p className="text-sm text-neutral-500 mb-4">
                Open-source, Extensible E-commerce Framework
              </p>

              <p className="mb-4 text-neutral-700">
                Spree Commerce was created to provide a highly extensible and
                developer-friendly alternative to rigid, all-in-one e-commerce
                solutions. It is a long-lived open-source framework designed for teams
                that need deep customization, custom business rules, and full control
                over their commerce stack.
              </p>

              <p className="mb-4 text-neutral-700">
                Working with Spree involves understanding a large, mature codebase
                built around domain-driven principles and plugin-based extensibility.
                It highlights challenges common in real production environments,
                such as maintaining backward compatibility, evolving legacy systems,
                and integrating modern frontend approaches with established backend
                architectures.
              </p>

              <ul className="list-disc ml-5 text-neutral-700 mb-4">
                <li>
                  <strong>Backend:</strong> Ruby on Rails with a modular, MVC-based
                  architecture
                </li>
                <li>
                  <strong>Extensibility:</strong> Plugin and engine-based customization
                  model
                </li>
                <li>
                  <strong>Engineering focus:</strong> Long-term maintainability,
                  legacy system evolution, and separation between admin and storefront
                </li>
              </ul>

              <div className="flex gap-4 text-sm">
                <a
                  className="underline"
                  href="https://spreecommerce.org"
                  target="_blank"
                >
                  Official Site
                </a>
                <a
                  className="underline"
                  href="https://github.com/spree/spree"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* medical */}
          


        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <ul className="space-y-6 text-neutral-700">

          <li>
            <strong>Full-Stack Engineer</strong> — Marin Software · United States (Remote) (2021–2024)
            <p className="text-sm text-neutral-600 mt-1">
              Led end-to-end feature development across frontend and backend systems, collaborated with product and design teams, and contributed to architectural decisions for scalable production systems.
            </p>
          </li>
          <li>    
            <strong>Full-Stack Engineer</strong> — Poundit · Philippines (Remote) (2021–2024)
            <p className="text-sm text-neutral-600 mt-1">
              Built and maintained full-stack features, implemented APIs and data models,
              and improved system reliability through refactoring and performance optimizations.
            </p>
          </li>
          <li>
            <strong>Frontend Developer</strong> — Ecube Labs · Korea (Remote) (2021–2024)
            <p className="text-sm text-neutral-600 mt-1">
              Developed modern, responsive user interfaces and collaborated closely with backend engineers to deliver cohesive user experiences.
            </p>
          </li>
          <li>
            <strong>Software Engineering Intern</strong> — SMT IT · korea (Hybrid) (2021–2024)
            <p className="text-sm text-neutral-600 mt-1">
              Contributed to internal web applications, assisted with feature implementation, debugging, and gained foundational full-stack engineering experience.
            </p>
          </li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <p className="text-neutral-700">Bachelor of Science in Computer Science — [Sunchon National University · korea ] (2012–2016)</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="flex gap-6">
          <a href="tongoltyrone84@gmail.com"><Mail /></a>
          <a href="#"><Github /></a>
          <a href="#"><Linkedin /></a>
        </div>
      </section>

      <footer className="text-center text-neutral-500 py-10">© {new Date().getFullYear()} Tyrone Jher Tongal</footer>
    </main>
  );
}
