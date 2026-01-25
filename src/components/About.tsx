import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Layout, TrendingUp } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "UX/UI Design",
    description: "Creating intuitive interfaces that delight users while solving real problems. From wireframes to polished prototypes.",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Uncovering insights through interviews, usability testing, and data analysis. Understanding the 'why' behind user behavior.",
  },
  {
    icon: TrendingUp,
    title: "Project Management",
    description: "Guiding cross-functional teams from concept to launch. Keeping things on track while staying flexible.",
  },
  {
    icon: Lightbulb,
    title: "Change Management",
    description: "Helping organizations embrace new ways of working. Making transitions smooth and adoption stick.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              About me<span className="text-primary">.</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a UX engineer who believes great design is invisible — it just works. 
                With a background spanning design, research, and project leadership, 
                I bring a holistic perspective to every challenge.
              </p>
              <p>
                Whether I'm facilitating a workshop, sketching user flows, or presenting 
                to stakeholders, my goal is always the same: create experiences that 
                feel effortless and deliver real value.
              </p>
              <p className="text-foreground font-medium">
                Currently open to roles in UX design, product design/ownership, and digital project management.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-background rounded-lg shadow-card hover:shadow-hover transition-shadow duration-300"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
