import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Globe,
  MessageCircle,
  Users,
  Mail,
  Heart,
  Shield,
  Compass,
  Sparkles,
  Phone,
  LifeBuoy,
  Building2,
  MapPin,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';

const affected = [
  { title: 'First-year students', description: 'Navigating unfamiliar environments, stress, and intense social transition.' },
  { title: 'Residence students', description: 'Living in high-density communal hubs where alcohol is embedded in residence life.' },
  { title: 'International / out-of-town students', description: 'Rebuilding social circles far from home with heightened pressure to adapt.' },
  { title: 'Socially isolated youth', description: 'Facing systemic or personal exclusion, increasing vulnerability to default coping mechanisms.' },
  { title: 'Young adults in identity transition', description: 'Searching for where they fit in as they redefine their boundaries.' },
];

const pillars = [
  { title: 'Belonging', sub: 'without pressure', icon: Heart },
  { title: 'Moderation', sub: 'without judgment', icon: Compass },
  { title: 'Inclusion', sub: 'without exclusion', icon: Users },
  { title: 'Safety', sub: 'without stigma', icon: Shield },
  { title: 'Connection', sub: 'without dependency', icon: Sparkles },
];

const approaches = [
  {
    num: '01',
    title: 'Peer Education',
    desc: 'Creating conversations that help young people think critically about pressure, choice, and social norms.',
    details: [
      'Workshops on peer pressure and mindful decision-making',
      'Discussions on social belonging, moderation, and responsibility',
      'Student-led reflection spaces that encourage honest conversation'
    ]
  },
  {
    num: '02',
    title: 'Moderation & Safety Culture',
    desc: 'Helping reshape social norms so that celebration and community do not rely on excess.',
    details: [
      'Campaigns around moderation, consent, and mutual safety',
      'Themed residence events with inclusive hosting guidelines',
      'Belonging without pressure as an active social virtue'
    ]
  },
  {
    num: '03',
    title: 'Alternative Social Programming',
    desc: 'Designing and encouraging social experiences where young people can connect in ways that are inclusive and creative.',
    details: [
      'Structured game, reflection, and deep conversation nights',
      'Wellness-centred student events and recovery-friendly hubs',
      'Creative, cultural, and themed gathering concepts'
    ]
  }
];

const supportContacts = [
  {
    category: 'Alcohol support',
    title: 'Alcoholics Anonymous South Africa',
    description: 'Peer support for anyone who wants help with drinking or wants to find an AA meeting.',
    icon: Phone,
    channels: [
      { label: 'National hotline', value: '0861 435 722', href: 'tel:0861435722' },
      { label: 'Meetings', value: 'Find an AA meeting', href: 'https://aasouthafrica.org.za/meetings/' },
    ],
  },
  {
    category: 'Drug recovery support',
    title: 'Narcotics Anonymous South Africa',
    description: 'Free recovery meetings and peer support for people dealing with drug addiction.',
    icon: LifeBuoy,
    channels: [
      { label: 'National phoneline', value: '0861 00 6962', href: 'tel:0861006962' },
      { label: 'Meetings', value: 'Find an NA meeting', href: 'https://na.org.za/meetings/' },
    ],
  },
  {
    category: 'Substance abuse support',
    title: 'SANCA National Office',
    description: 'Counselling, prevention, treatment, and recovery services related to alcohol and drug misuse.',
    icon: Building2,
    channels: [
      { label: 'Phone', value: '011 892 3829', href: 'tel:0118923829' },
      { label: 'Mobile', value: '076 535 1701', href: 'tel:0765351701' },
    ],
  },
  {
    category: 'Mental health crisis support',
    title: 'South African Depression and Anxiety Group',
    description: 'Mental health support, crisis counselling, referrals, and student helpline pathways.',
    icon: Heart,
    channels: [
      { label: 'Suicide Crisis Line', value: '0800 567 567', href: 'tel:0800567567' },
      { label: 'SMS', value: '31393', href: 'sms:31393' },
      { label: 'WhatsApp', value: '076 882 2775', href: 'https://wa.me/27768822775' },
    ],
  },
];

const nearbySupportPaths = [
  'Campus counselling centres',
  'Local psychologists',
  'University wellness services',
  'SANCA branches',
  'Community support groups',
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative grain min-h-screen bg-[#F4F3EF] text-[#121212] font-sans selection:bg-[#1C3144] selection:text-[#F4F3EF] overflow-hidden">
      <Navbar />

      {/* ============ HERO SECTION (EDITORIAL BRUTALIST GRID) ============ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-24 border-b border-editorial">
        {/* Top Grid Border Accent */}
        <div className="hidden md:grid grid-cols-12 max-w-7xl mx-auto w-full border-t border-editorial text-xs font-semibold tracking-wider text-[#121212]/40 py-2 px-12 uppercase">
          <div className="col-span-3">Open Circle Initiative</div>
          <div className="col-span-6 text-center">Rethinking Youth Social Spaces</div>
          <div className="col-span-3 text-right">Est. 2026 / Early Development</div>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex-grow flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Title / Main Hook */}
            <div className="lg:col-span-9 space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#121212]/15 bg-white/40 text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                Early-stage Social Impact Initiative
              </span>
              
              <h1 className="text-5xl md:text-8xl font-serif font-light tracking-tight leading-[0.95] text-[#121212]">
                Belonging <br />
                should not come <br />
                with <span className="font-normal italic text-[#1C3144]">pressure to drink.</span>
              </h1>
            </div>

            {/* Side aligned paragraph matching standard portfolio structures */}
            <div className="lg:col-span-3 lg:border-l lg:border-editorial lg:pl-8 space-y-6">
              <p className="text-base font-normal leading-relaxed text-[#121212]/70">
                Open Circle is a mission-driven project working to create inclusive, 
                alcohol-aware social environments for young adults through peer education, 
                alternative programming, and community-led culture change.
              </p>
              
              <div className="h-px bg-editorial w-12" />
              
              <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Initiative Statement
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Hero Anchor */}
        <div className="border-t border-editorial py-8 px-6 md:px-12 bg-white/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <a href="#opening" className="btn-editorial border border-[#121212] bg-[#121212] text-[#F4F3EF] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors z-10">
                Read the vision
              </a>
              <a href="#problem" className="border border-[#121212]/20 hover:border-[#121212] hover:bg-[#121212]/5 transition-colors px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#121212]/80">
                Why this matters
              </a>
            </div>
            
            <a href="#opening" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              Scroll down to explore <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ OPENING STATEMENT (EDITORIAL CALLOUT) ============ */}
      <section id="opening" className="relative px-6 py-32 md:px-12 border-b border-editorial bg-[#F0EFEA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column metadata label */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-start gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/40">Section 01 //</span>
            <span className="font-serif italic text-sm text-[#C5A059]">The Culture We Live In</span>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <Reveal direction="up">
              <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-[#121212] max-w-4xl">
                Too many young people learn that belonging comes with an unspoken cost:{' '}
                <span className="font-normal border-b border-[#121212]/30 pb-0.5">drink, fit in, and do not question the culture around you.</span>
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={0.1}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-[#121212]/70 max-w-3xl">
                For those already navigating transition, loneliness, or structural exclusion, this default pressure can deepen isolation and increase vulnerability to harmful drinking.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="pt-8 border-t border-editorial max-w-2xl">
                <p className="text-lg font-serif italic text-[#1C3144]">
                  Open Circle exists to build social spaces where connection, celebration, and shared identity do not depend on alcohol.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ THE PROBLEM & WHO IS AFFECTED ============ */}
      <section id="problem" className="relative border-b border-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto">
          
          {/* LEFT PANEL: THE ISSUE */}
          <div className="lg:col-span-6 px-6 md:px-12 py-24 lg:border-r lg:border-editorial flex flex-col justify-between">
            <div>
              <div className="mb-12 flex items-center gap-4">
                <span className="font-mono text-xs tracking-widest text-[#121212]/40">02 // THE DEFAULT SOCIAL CONTRACT</span>
              </div>
              
              <Reveal direction="right">
                <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-8">
                  Defaulting to <span className="font-normal italic text-[#C5A059]">excess.</span>
                </h3>
              </Reveal>
              
              <Reveal direction="right" delay={0.1}>
                <div className="space-y-6 text-base font-normal leading-relaxed text-[#121212]/70 max-w-xl">
                  <p>
                    In many universities, student residences, and schools, alcohol is treated as the primary path to connection. It creates an environment where non-drinking can feel like social exclusion, while others drink not out of choice, but out of a simple desire to fit in.
                  </p>
                  <p>
                    Living away from home for the first time heightens these stakes. Students navigating stress, identity, and independence are often swept into environments where alcohol becomes the only available route to a community.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.2} className="mt-16">
              <div className="bg-[#121212] text-[#F4F3EF] p-8 rounded-3xl">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] block mb-4">Core Position</span>
                <p className="text-lg font-light leading-relaxed">
                  When alcohol becomes the default route to belonging, social pressure increases and genuine, healthy inclusion weakens.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT PANEL: WHO IS AFFECTED */}
          <div className="lg:col-span-6 px-6 md:px-12 py-24 bg-[#EAE8E3]">
            <div className="mb-12 flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-[#121212]/40">03 // VULNERABLE GROUPS</span>
            </div>

            <Reveal direction="left">
              <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-8">
                Those facing the <span className="font-normal italic text-[#1C3144]">highest pressure.</span>
              </h3>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="text-base text-[#121212]/70 mb-10 leading-relaxed max-w-xl">
                While youth culture is broadly affected, Open Circle prioritizes support for those navigating specific vulnerability to exclusion:
              </p>
            </Reveal>

            <div className="space-y-4">
              {affected.map((item, i) => (
                <Reveal key={item.title} direction="left" delay={0.1 + i * 0.05}>
                  <div className="bg-white/80 border border-editorial/40 rounded-2xl p-6 hover:bg-white hover:shadow-sm transition-all duration-300">
                    <div className="flex gap-4 items-start">
                      <div className="h-6 w-6 rounded-full bg-[#1C3144]/10 text-[#1C3144] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#121212] text-lg">{item.title}</h4>
                        <p className="text-sm text-[#121212]/60 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============ THE SOLUTION & APPROACHES ============ */}
      <section id="solution" className="relative px-6 py-32 md:px-12 border-b border-editorial bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/40">Section 04 // Approaches</span>
              <h3 className="font-serif italic text-2xl text-[#C5A059] mt-2">The Action Model</h3>
            </div>
            
            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#121212] leading-[1.05]">
                  Widening choices, reshaping norms, and engineering <span className="font-normal italic text-[#1C3144]">healthier community paths.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approaches.map((app, i) => (
              <Reveal key={app.title} direction="up" delay={i * 0.1}>
                <div className="bg-white border border-editorial rounded-3xl p-8 h-full flex flex-col justify-between transition-all hover:shadow-md hover:border-[#121212]/30 duration-300">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-editorial pb-4">
                      <span className="font-mono text-xs font-semibold text-[#C5A059] tracking-widest uppercase">Methodology</span>
                      <span className="font-mono text-xs font-bold text-[#121212]/40">{app.num}</span>
                    </div>
                    
                    <h4 className="text-2xl font-medium tracking-tight text-[#121212]">{app.title}</h4>
                    <p className="text-sm text-[#121212]/70 leading-relaxed font-light">{app.desc}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-editorial/50">
                    <span className="text-xs uppercase tracking-wider font-mono text-[#121212]/50 block mb-3">Core Initiatives</span>
                    <ul className="space-y-3">
                      {app.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-[#121212]/80 items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1C3144] shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============ WHY THIS MATTERS (EDITORIAL QUOTE & STATS) ============ */}
      <section className="relative py-32 px-6 md:px-12 border-b border-editorial bg-[#1C3144] text-[#F4F3EF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs tracking-widest text-[#F4F3EF]/50 uppercase block">Section 05 // Context</span>
            
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-snug tracking-tight">
                Harmful drinking is not simply an individual failure. It is shaped by <span className="font-normal italic text-[#C5A059]">unwelcoming environments</span> and taught social norms.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-[#F4F3EF]/70 leading-relaxed max-w-2xl font-light">
                When students believe excess is the fixed price of entry, the consequences impact self-worth, academic adjustment, mental wellbeing, personal safety, and mutual community trust.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 bg-[#F4F3EF] text-[#121212] p-8 md:p-12 rounded-[2rem] border border-editorial">
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] block mb-4">Underlying Dynamics</span>
            <p className="text-lg font-normal mb-8 leading-relaxed">
              Open Circle challenges the culture of default pressure by building structures for:
            </p>
            
            <div className="space-y-4 font-mono text-xs font-bold uppercase">
              {['Mental Wellbeing', 'Student Personal Safety', 'Healthy Self-Worth', 'Proactive Community Trust'].map((item, idx) => (
                <div key={item} className="flex justify-between py-3 border-b border-editorial/40 items-center">
                  <span>{item}</span>
                  <span className="text-[#C5A059]">[0{idx + 1}]</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============ ABOUT THE FOUNDER ============ */}
      <section id="founder" className="relative px-6 py-32 md:px-12 border-b border-editorial bg-[#F0EFEA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Label side column */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/40">Section 06 // Origin</span>
            <h3 className="font-serif italic text-2xl text-[#C5A059] mt-2">A Personal Lens</h3>
          </div>

          {/* Main content column */}
          <div className="lg:col-span-9 space-y-12">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight">
                "My interest is deeply personal. I have seen the effects of loneliness and alcohol abuse within my own community."
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-8 border-t border-editorial">
              <div className="space-y-6 text-base text-[#121212]/75 leading-relaxed font-light">
                <p>
                  As a 21-year-old aspiring social impact leader, my motivation is rooted in direct experience. Having lost my father to alcohol-related illness, I know firsthand the tragic path that dependency and default social pressure can carve.
                </p>
                <p>
                  I have also witnessed how isolation, peer pressure, and the desire to fit in make young adults vulnerable. I began developing Open Circle to challenge the idea that drinking is the default route to belonging.
                </p>
              </div>

              <div className="space-y-6 text-base text-[#121212]/75 leading-relaxed font-light">
                <p>
                  Our goal is not moral judgment or an "anti-party" crusade. It is about widening choice, championing safety, and establishing normal, visible alternative social paths for first-year and residential students.
                </p>
                
                <div className="p-6 bg-white rounded-2xl border border-editorial text-xs font-bold uppercase tracking-widest text-[#121212] flex justify-between items-center">
                  <span>Current phase: concept refinement & pilots</span>
                  <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============ WHAT WE STAND FOR (EDITORIAL PILLARS GRID) ============ */}
      <section className="relative px-6 py-32 md:px-12 border-b border-editorial bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-24">
            <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/40">Section 07 // Manifesto</span>
            <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight mt-2">What we stand for.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} direction="scale" delay={i * 0.05}>
                <div className="bg-white border border-editorial rounded-3xl p-8 flex flex-col justify-between h-full items-center text-center transition-all hover:scale-[1.02] hover:border-[#121212] duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-[#1C3144]/5 text-[#1C3144] flex items-center justify-center mb-6">
                    <p.icon className="h-5 w-5" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold tracking-tight text-[#121212] uppercase mb-1">{p.title}</h4>
                    <p className="text-xs font-mono text-[#121212]/50 lowercase">{p.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============ STUDENT SUPPORT DIRECTORY ============ */}
      <section id="support" className="relative px-6 py-24 md:px-12 border-b border-editorial bg-[#EAE8E3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/40">Section 08 // Student Support</span>
              <h3 className="font-serif italic text-2xl text-[#C5A059] mt-2">Immediate pathways</h3>
            </div>

            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#121212] leading-tight max-w-4xl">
                  When alcohol or substance pressure becomes personal, help should be easy to find.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-base md:text-lg text-[#121212]/70 leading-relaxed max-w-3xl">
                  Open Circle is not a crisis service. This directory points students toward established South African support routes for alcohol misuse, drug recovery, and mental health emergencies.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {supportContacts.map((contact, i) => {
                const ContactIcon = contact.icon;

                return (
                  <Reveal key={contact.title} direction="up" delay={i * 0.05}>
                    <div className="bg-white border border-editorial rounded-3xl p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-mono text-[#C5A059] block mb-2">
                              {contact.category}
                            </span>
                            <h4 className="text-xl font-medium tracking-tight text-[#121212] leading-snug">
                              {contact.title}
                            </h4>
                          </div>

                          <div className="h-11 w-11 rounded-2xl bg-[#1C3144]/7 text-[#1C3144] flex items-center justify-center shrink-0">
                            <ContactIcon className="h-5 w-5" />
                          </div>
                        </div>

                        <p className="text-sm text-[#121212]/65 leading-relaxed">
                          {contact.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-3">
                        {contact.channels.map((channel) => {
                          const isExternal = channel.href.startsWith('http');

                          return (
                            <a
                              key={`${contact.title}-${channel.label}`}
                              href={channel.href}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noreferrer' : undefined}
                              className="group flex items-center justify-between gap-4 rounded-2xl border border-editorial bg-[#F4F3EF] px-4 py-3 text-sm transition-all hover:border-[#1C3144]/30 hover:bg-[#1C3144] hover:text-[#F4F3EF]"
                            >
                              <span className="font-mono text-[10px] uppercase tracking-widest text-[#121212]/45 group-hover:text-[#F4F3EF]/60">
                                {channel.label}
                              </span>
                              <span className="flex items-center gap-2 font-medium text-right">
                                {channel.value}
                                {isExternal && <ArrowUpRight className="h-3.5 w-3.5" />}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="left" className="xl:col-span-4">
              <div className="h-full rounded-3xl border border-[#121212]/15 bg-[#121212] p-8 text-[#F4F3EF] flex flex-col justify-between">
                <div>
                  <div className="mb-8 flex items-center justify-between gap-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059] block mb-3">
                        Referral concept
                      </span>
                      <h4 className="text-3xl font-serif font-light tracking-tight">
                        "Find Support Near Me"
                      </h4>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-[#F4F3EF]/10 text-[#C5A059] flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#F4F3EF]/70 mb-8">
                    This can grow into a location-aware pathway that helps students move from national helplines into nearby, trusted support.
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {nearbySupportPaths.map((path) => (
                      <div
                        key={path}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-[#F4F3EF]/10 bg-white/5 px-4 py-3"
                      >
                        <span className="text-sm text-[#F4F3EF]/85">{path}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://www.sancanational.info/find-a-sanca-near-you"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4F3EF] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#121212] transition-colors hover:bg-[#C5A059]"
                  >
                    Find a SANCA branch <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.sadag.org.za/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F4F3EF]/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#F4F3EF] transition-colors hover:bg-[#F4F3EF] hover:text-[#121212]"
                  >
                    SADAG helplines <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOOTER / CALL TO ACTION ============ */}
      <footer id="collaborate" className="relative px-6 py-32 md:px-12 bg-[#121212] text-[#F4F3EF]">
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">
          
          <div className="space-y-8 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059]">Collaborate // Join Us</span>
            <h2 className="text-4xl md:text-7xl font-serif font-light tracking-tight leading-none text-[#F4F3EF]">
              Let's build spaces where belonging has <span className="font-normal italic text-[#C5A059]">no entry price.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-light text-[#F4F3EF]/70 max-w-2xl leading-relaxed">
              Every student deserves social spaces that do not require them to compromise their wellbeing or identity.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-[#F4F3EF]/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#F4F3EF]/40 block mb-4">Direct Communication</span>
              <a
                href="mailto:hello@opencircle.org"
                className="group inline-flex items-center gap-2 text-xl font-medium border-b border-[#F4F3EF]/20 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              >
                hello@opencircle.org <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="flex gap-4">
              {[Globe, MessageCircle, Users, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F4F3EF]/10 bg-white/5 hover:bg-[#F4F3EF] hover:text-[#121212] transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#F4F3EF]/10 flex flex-col sm:flex-row justify-between text-xs font-mono text-[#F4F3EF]/40 gap-4">
            <div>Open Circle © {new Date().getFullYear()}</div>
            <div className="uppercase tracking-widest">A scholarship, partnership & pilot public narrative</div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
