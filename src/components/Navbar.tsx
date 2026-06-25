import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Vision', href: '#vision' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Founder', href: '#founder' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F4F3EF]/95 backdrop-blur-md border-b border-editorial py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* LOGO */}
        <a href="#top" className="text-lg font-medium tracking-tight uppercase flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span>OPEN CIRCLE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#1C3144]" />
        </a>

        {/* MIDDLE LINKS - EDITORIAL CAPS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#121212]/60 transition-colors hover:text-[#121212] relative group py-1"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#121212] origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#support"
            className="hidden items-center gap-1 border border-[#121212] bg-[#121212] text-[#F4F3EF] rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#121212] sm:flex"
          >
            Support <ArrowUpRight className="h-3 w-3" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#121212]/15 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Solid Editorial Slide-down) */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 top-[65px] z-40 bg-[#F4F3EF] px-8 py-12 md:hidden border-t border-editorial flex flex-col justify-between"
      >
        <div className="flex flex-col gap-6">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={false}
              animate={open ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-2xl font-light tracking-tight text-[#121212] hover:opacity-60 transition-opacity"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
        <div className="border-t border-editorial pt-8">
          <a
            href="#support"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full border border-[#121212] bg-[#121212] py-4 text-sm font-semibold uppercase tracking-wider text-[#F4F3EF] hover:bg-transparent hover:text-[#121212] transition-colors"
          >
            Support the initiative <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
