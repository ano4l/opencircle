import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, Leaf, Menu, Users, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Vision', href: '#vision' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Why It Matters', href: '#why' },
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
          ? 'bg-[#FCFAF5]/95 backdrop-blur-md border-b border-editorial py-3' 
          : 'bg-[#FCFAF5]/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3 text-[#14241E] transition-opacity hover:opacity-80">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E5D4A] text-[#F7F4ED]">
            <Users className="h-6 w-6" />
            <Leaf className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#EFDCC2] p-0.5 text-[#0E5D4A]" />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-lg font-bold">Open Circle</span>
            <span className="mt-1 block text-xs text-[#101715]/65">Belonging without pressure.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 text-sm font-bold text-[#101715]/72 transition-colors hover:text-[#0E5D4A]"
            >
              {l.label}
              {l.href === '#top' && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-[#0E5D4A]" />
              )}
              {l.href !== '#top' && (
                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-[#0E5D4A] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#support"
            className="hidden items-center gap-2 rounded-full bg-[#0E5D4A] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0A4739] sm:flex"
          >
            Support the Initiative <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#101715]/15 text-[#14241E] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 top-[72px] z-40 flex flex-col justify-between border-t border-editorial bg-[#FCFAF5] px-8 py-10 lg:hidden"
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
              className="text-2xl font-medium text-[#14241E] transition-opacity hover:opacity-60"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
        <div className="border-t border-editorial pt-8">
          <a
            href="#support"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#0E5D4A] py-4 text-sm font-bold text-white transition hover:bg-[#0A4739]"
          >
            Support the Initiative <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
