import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {currentYear} — Designed with care
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <span className="text-border">•</span>
          <a
            href="https://linkedin.com"
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
