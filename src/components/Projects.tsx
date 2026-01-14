import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Digital Banking Redesign",
    category: "UX Design • Research",
    description: "Led the complete redesign of a mobile banking app, improving task completion rates by 40% through iterative user testing.",
    color: "bg-secondary",
  },
  {
    title: "Healthcare Portal",
    category: "Product Strategy • UX",
    description: "Defined product vision and roadmap for a patient engagement platform, collaborating with clinical teams and developers.",
    color: "bg-muted",
  },
  {
    title: "Enterprise Design System",
    category: "Design Systems • Change",
    description: "Built and rolled out a design system across 12 product teams, reducing design debt and accelerating development cycles.",
    color: "bg-secondary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Selected work<span className="text-primary">.</span>
          </h2>
          <p className="hidden md:block font-body text-muted-foreground">
            A few projects I'm proud of
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`group ${project.color} rounded-2xl p-8 md:p-12 cursor-pointer hover:shadow-hover transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="font-body text-sm text-primary font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-body text-muted-foreground mt-12"
        >
          More case studies available upon request
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Projects;
