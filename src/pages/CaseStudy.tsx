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
      tools: "Field Study, Focus Groups, Figma, Miro",
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
      { metric: "50%", label: "Increase in user satisfaction" },
      { metric: "110 Msek", label: "in global savings" },
      { metric: "20%", label: "Increase in production data points" },
    ],
    learnings: "This project reinforced the importance of continuous user involvement throughout the design process. The most impactful improvements came from unexpected insights during user research sessions in the user environment.",
  },
  "production-data-visualization": {
    title: "Production Data Visualization",
    category: "Product Strategy • UX/UI Design",
    hero: "I led the UX design and front-end development, translating complex production data into an intuitive, high-performance tool through close collaboration with stakeholders and backend engineering.",
    overview: {
      role: "Product Owner / UX Lead",
      duration: "6 months",
      team: "1 designer, 2 developers, 2 subject matter experts",
      tools: "Iterative design sprints, Figma, JavaScript, GitHub.",
    },
    challenge: "Business teams were sitting on massive amounts of production and routing data, but turning that data into actionable insights was slow, painful, and error-prone. Complex systems, tangled data structures, and unclear workflows led to confusion, long validation cycles, and inefficient planning sessions. The challenge was to transform this complexity into clarity without compromising performance in a high-stakes environment.",
    approach: [
      {
        phase: "Stakeholder Alignment",
        description: "Worked closely with key business stakeholders to understand real planning scenarios, pain points, and decision-making needs. Aligned early on what “useful” actually meant in their day-to-day work, and iterated quickly based on continuous feedback.",
      },
      {
        phase: "UX Design & Front-End Ownership",
        description: "Owned both UX design and front-end development, collaborating tightly with a backend developer responsible for database and system logic. This close partnership ensured that design decisions were grounded in technical reality from day one.",
      },
      {
        phase: "Data Visualization & Interaction Design",
        description: "Focused on visualizing complex data flows in a way that felt intuitive and easy to navigate. Designed layouts and interactions that made large datasets feel approachable, reducing cognitive load and supporting fast decision-making.",
      },
      {
        phase: "Iterative Testing & Refinement",
        description: "Ran continuous testing and design tweaks in close contact with end users. Assumptions were replaced with tight feedback loops, allowing the tool to evolve alongside real usage patterns and planning needs.",
      },
    ],
    outcomes: [
      { metric: "3000+", label: "Data connections handled" },
      { metric: "10x", label: "Faster task completion time" },
      { metric: "6 months", label: "From first meeting to full integration in daily work" },
      { metric: "20+ ", label: "planning rounds/day" },
    ],
    learnings: "Great UX doesn’t come from fancy animations or visual polish. It comes from stripping away complexity until what’s left simply makes sense. A few clean layouts and thoughtful front-end decisions can save hours, and change how people understand their own data.",
  },
  "DAM-system-implementation": {
    title: "DAM System Implementation",
    category: "Project Management • Change Management • UX Design",
    hero: "Implemented and rolled out a digital asset management system across 3 core teams, reducing design debt and accelerating media production cycles.",
    overview: {
      role: "Project Management",
      duration: "16 months",
      team: "1 business product owner, 4 superusers, cross-functional representatives",
      tools: "Project management planner, TEAMS task management, RACI, FigJam ",
    },
    challenge: "The organization had digital assets saved at 4 different locations, creating inconsistencies, confusion and duplication, all contributing to slow media creation handoffs. Teams were frustrated with reinventing media and inefficient ways of sharing assets with the business.",
    approach: [
      {
        phase: "Audit & Assessment",
        description: "Conducted a comprehensive functionality audit across multiple vendors, identifying the most suitable alternative for our requirements. Planned the timeline, resource allocation and budget for the project.",
      },
      {
        phase: "Foundation Building",
        description: "Set up the structure and design of the system, including meta properties, tagging and taxonomy for assets. Set up governance processes and contribution guidelines.",
      },
      {
        phase: "Adoption Strategy",
        description: "Identifyied and included key users early on in the process to ensure user centered design. Developed a change management plan with information meetings, training sessions and a clear value proposition for the users.",
      },
      {
        phase: "Scaling & Governance",
        description: "Introduced 3 teams from varying parts of the business to the system. Created a governance process for regular health checks of the system and analysis of user metrics for the product owner after project's closing.",
      },
    ],
    outcomes: [
      { metric: "XXX%", label: "Faster design-to-dev handoff" },
      { metric: "XXX%", label: "Time reduction for media producers" },
      { metric: "3", label: "Teams successfully adopted" },
      { metric: "100%", label: "of scope delivered within timeframe and budget" },
    ],
    learnings: "Implementing a successful tool is as much about people as it is processes. The key to successful adoption was not compromise on the users need and involve them from the very start, and continuously improving based on their feedback.",
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
