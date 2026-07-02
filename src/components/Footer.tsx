import Link from "next/link";
  import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
  import { navItems } from "@/lib/data";

  export default function Footer() {
    return (
      <footer className="relative bg-surface border-t border-border mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-heading font-bold text-lg leading-none">HYPER STEALTH</div>
                  <div className="text-muted text-[10px] tracking-[0.2em] uppercase">Technologies</div>
                </div>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Engineering the invisible. Advanced multi-spectral signature management for modern defense.</p>
              <div className="flex gap-3">
                {[FaLinkedin, FaTwitter, FaYoutube, FaGithub].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 bg-white hover:bg-gray-50 border border-border hover:border-primary/30 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary transition-all shadow-sm" aria-label="Social link">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-heading font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-gray-500 hover:text-primary text-sm transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-heading font-semibold mb-4 text-sm tracking-wide uppercase">Products</h4>
              <ul className="space-y-3">
                {["Camouflage Nets", "Sniper Suits", "Thermal Paint", "Radar Coating", "Shelter Systems"].map((item) => (
                  <li key={item}><Link href="/products" className="text-gray-500 hover:text-primary text-sm transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-heading font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Headquarters: Classified</li>
                <li>contact@hyperstealth.tech</li>
                <li>+1 (555) 0100-STEALTH</li>
                <li className="pt-2"><Link href="/contact" className="text-secondary hover:text-secondary-dark font-medium transition-colors">Get in Touch →</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Hyper Stealth Technologies. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-heading transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-heading transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-heading transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  