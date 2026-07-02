import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-heading font-semibold text-sm leading-none">HYPER STEALTH</div>
                <div className="text-gray-600 text-[9px] tracking-[0.2em] uppercase mt-0.5 font-medium">Technologies</div>
              </div>
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed mb-5 max-w-xs font-normal">
              Engineering the invisible. Advanced multi-spectral signature management for modern defense.
            </p>
            <div className="flex gap-2">
              {[FaLinkedin, FaTwitter, FaYoutube, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white border border-border rounded-lg flex items-center justify-center text-gray-600 hover:text-primary hover:border-gray-400 transition-all duration-150"
                  aria-label="Social link"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-heading tracking-[0.15em] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-700 hover:text-heading font-normal transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-heading tracking-[0.15em] uppercase mb-4">Products</h4>
            <ul className="space-y-2.5">
              {["Camouflage Nets", "Sniper Suits", "Thermal Paint", "Radar Coating", "Shelter Systems"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-gray-700 hover:text-heading font-normal transition-colors duration-150">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-heading tracking-[0.15em] uppercase mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li className="font-normal">Headquarters: Classified</li>
              <li className="font-normal">contact@hyperstealth.tech</li>
              <li className="font-normal">+1 (555) 0100-STEALTH</li>
              <li className="pt-1">
                <Link href="/contact" className="text-secondary hover:text-secondary-dark font-semibold transition-colors duration-150">
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600 font-normal">© {new Date().getFullYear()} Hyper Stealth Technologies. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="#" className="hover:text-heading font-normal transition-colors duration-150">Privacy Policy</a>
            <a href="#" className="hover:text-heading font-normal transition-colors duration-150">Terms of Service</a>
            <a href="#" className="hover:text-heading font-normal transition-colors duration-150">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
