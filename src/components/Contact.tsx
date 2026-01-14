import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6">
          Let's create something
          <br />
          <span className="text-primary">together</span>.
        </h2>
        
        <p className="font-body text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          Whether you have a project in mind or just want to chat about UX over coffee — 
          I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Say hello
          </motion.a>
          
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:bg-muted transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            Connect
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
