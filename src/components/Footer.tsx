import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-muted-foreground">
          Anna Dahlström - {currentYear}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/resume.pdf"
            download="Anna_Dahlstrom_Resume.pdf"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <span className="text-border">•</span>
          <a
            href=" http://lup.lub.lu.se/student-papers/record/9128806"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Publications
          </a>
           <span className="text-border">•</span>
          <a
            href="https://www.linkedin.com/in/anna-dahlström1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
