import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = {
  "daily-operations-tool-redesign": {
    title: "Daily Operations Tool Redesign",
    category: "UX/UI Design • User Research • Change Management",
    hero: "Led the complete redesign of the core Daily Operations Tool, improving efficiency, user satisfaction and task follow-up through iterative user testing.",
    overview: {
      role: "Lead UX Designer",
      duration: "1.5 Years",
      team: "1 designer, 2 developers, 1 CI Manager, 1 PM",
      tools: "Figma, Miro",
    },
    challenge: "During the roll-out of a global digital tool handling daily tasks & routines for operators and managers at chemical plants, the user exeprience was deemed too poor to fulfill the business goals of the project. The complexity of the system was high, the UI outdated and the usability so low users avoided using the system in their daily work.",
    approach: [
      {
        phase: "Discovery & Research",
        description: "Conducted 20+ user interviews including all global locations(Europe, America, Asia) to identify the most crucial issues and core users. Re-occuring visits/interviews were made with users to ensure foundational problems were identified and to create a solid relation with core users.",
      },
      {
        phase: "Ideation & Testing",
        description: "Ran multiple design sprints with the cross-functional team and the third-party system provider. Tested prototypes with global core users, iterating rapidly based on feedback. Validated navigation patterns through A/B testing.",
      },
      {
        phase: "Design & Iteration",
        description: "Created a comprehensive design system ensuring consistency across 40+ screens, ensuring suitability for all global locations. Enhanced the user experince for both users and configurators of the system by simplyfing navigation, re-designed fundamental views to reduce information dupliction/overflow and update the UI to ensure a modern look and feel.",
      },
      {
        phase: "Implementation Support",
        description: "Created a global network of key users and ensured continuous feedback loops throughout the implementation cycles. Worked closely with developers during implementation, conducting weekly design reviews to ensure technical feasability. Created detailed handoff documentation to developers as well as user-tailored training sessions and material.",
      },
    ],
    outcomes: [
      { metric: "10", label: "Successfull roll-outs world-wide" },
      { metric: "XX%", label: "Increase in user satisfaction" },
      { metric: "XX Msek", label: "in efficiency savings" },
      { metric: "XX%", label: "Increase in daily active users" },
    ],
    learnings: "This project reinforced the importance of continuous user involvement throughout the design process. The most impactful improvements came from unexpected insights during user research sessions in the user environment.",
  },
  "production-data-visualization": {
    title: "Healthcare Portal",
    category: "Product Strategy • UX",
    hero: "Defined product vision and roadmap for a patient engagement platform, collaborating with clinical teams and developers.",
    overview: {
      role: "Product Owner / UX Lead",
      duration: "12 months",
      team: "3 designers, 8 developers, 2 clinical advisors",
      tools: "Figma, Jira, Confluence, Dovetail",
    },
    challenge: "Healthcare providers needed a unified platform for patient communication, appointment scheduling, and health record access. The challenge was balancing clinical requirements with user-friendly experiences for patients of all ages and technical abilities.",
    approach: [
      {
        phase: "Stakeholder Alignment",
        description: "Facilitated workshops with clinical staff, administrators, and IT teams to understand constraints and opportunities. Created a shared product vision document and success metrics.",
      },
      {
        phase: "User Research",
        description: "Conducted contextual inquiries in 3 clinics, observing both staff and patient interactions. Interviewed 30+ patients across different demographics to understand varied needs and accessibility requirements.",
      },
      {
        phase: "Roadmap Definition",
        description: "Prioritized features using RICE scoring, balancing user impact with development effort. Created a phased rollout plan that delivered value incrementally while managing risk.",
      },
      {
        phase: "Iterative Delivery",
        description: "Led bi-weekly sprint planning and design reviews. Implemented a feedback loop with beta users to continuously improve the platform based on real usage data.",
      },
    ],
    outcomes: [
      { metric: "85%", label: "Patient adoption rate" },
      { metric: "60%", label: "Reduction in phone bookings" },
      { metric: "92%", label: "Patient satisfaction score" },
      { metric: "3x", label: "Faster appointment scheduling" },
    ],
    learnings: "Working at the intersection of product and design taught me the value of clear prioritization and transparent communication. Success came from deeply understanding both clinical workflows and patient needs.",
  },
  "DAM-system-implementation": {
    title: "Enterprise Design System",
    category: "Design Systems • Change",
    hero: "Built and rolled out a design system across 12 product teams, reducing design debt and accelerating development cycles.",
    overview: {
      role: "Design System Lead",
      duration: "18 months",
      team: "4 designers, 6 developers, cross-functional representatives",
      tools: "Figma, Storybook, Chromatic, GitHub",
    },
    challenge: "The organization had 12 product teams with inconsistent user experiences, duplicated components, and slow design-to-development handoffs. Teams were frustrated with reinventing solutions and maintaining disparate codebases.",
    approach: [
      {
        phase: "Audit & Assessment",
        description: "Conducted a comprehensive UI audit across all products, documenting 200+ component variations. Identified patterns, inconsistencies, and opportunities for consolidation.",
      },
      {
        phase: "Foundation Building",
        description: "Established design tokens for colors, typography, and spacing. Created core components with accessibility baked in from the start. Set up governance processes and contribution guidelines.",
      },
      {
        phase: "Adoption Strategy",
        description: "Developed a change management plan with training sessions, documentation, and dedicated support. Created migration guides and worked with pilot teams to refine the system.",
      },
      {
        phase: "Scaling & Governance",
        description: "Established a contribution model allowing teams to propose additions. Created a design system council for decision-making and regular health checks on adoption metrics.",
      },
    ],
    outcomes: [
      { metric: "60%", label: "Faster design-to-dev handoff" },
      { metric: "100%", label: "Accessibility compliance" },
      { metric: "12", label: "Teams successfully adopted" },
      { metric: "45%", label: "Reduction in design debt" },
    ],
    learnings: "Building a design system is as much about people and processes as it is about components. The key to successful adoption was treating it as a product with users (our teams) and continuously improving based on their feedback.",
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Case study not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <span className="font-body text-sm text-primary font-medium mb-4 block">
              {study.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              {study.title}<span className="text-primary">.</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              {study.hero}
            </p>
          </motion.header>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-secondary rounded-2xl"
          >
            <div>
              <span className="font-body text-sm text-muted-foreground block mb-1">Role</span>
              <span className="font-body text-foreground font-medium">{study.overview.role}</span>
            </div>
            <div>
              <span className="font-body text-sm text-muted-foreground block mb-1">Duration</span>
              <span className="font-body text-foreground font-medium">{study.overview.duration}</span>
            </div>
            <div>
              <span className="font-body text-sm text-muted-foreground block mb-1">Team</span>
              <span className="font-body text-foreground font-medium">{study.overview.team}</span>
            </div>
            <div>
              <span className="font-body text-sm text-muted-foreground block mb-1">Tools</span>
              <span className="font-body text-foreground font-medium">{study.overview.tools}</span>
            </div>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
              The Challenge
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              {study.challenge}
            </p>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
              The Approach
            </h2>
            <div className="space-y-8">
              {study.approach.map((phase, index) => (
                <div key={phase.phase} className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {phase.phase}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
              The Outcomes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.outcomes.map((outcome) => (
                <div key={outcome.label} className="text-center p-6 bg-muted rounded-xl">
                  <span className="font-display text-3xl md:text-4xl font-medium text-primary block mb-2">
                    {outcome.metric}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {outcome.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Learnings */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 p-8 bg-primary/10 rounded-2xl border border-primary/20"
          >
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">
              Key Learnings
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg italic">
              "{study.learnings}"
            </p>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <p className="font-body text-muted-foreground mb-6">
              Interested in discussing this project further?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
