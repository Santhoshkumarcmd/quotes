import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 md:p-8 bg-base-200 text-base-content border-t border-base-300">
      <div className="space-y-2">
        <p className="text-lg md:text-xl font-semibold text-primary">
          © {new Date().getFullYear()} QuotesHub
        </p>
        <p className="text-sm md:text-base text-base-content/70">
          All rights reserved. Built with ❤️ using React & Tailwind.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
        <Link to="/privacy-policy" className="link link-hover hover:text-primary">
          Privacy Policy
        </Link>
        <Link to="/terms" className="link link-hover hover:text-primary">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}