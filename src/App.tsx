import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Compass,
  Heart,
  Leaf,
  Mail,
  MessageCircle,
  Play,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import heroCommunity from './assets/hero-community.webp';
import missionCafe from './assets/mission-cafe.webp';

const heroActions = [
  { label: 'Read the vision', href: '#vision' },
  { label: 'Why this matters', href: '#why' },
  { label: 'About the founder', href: '#founder' },
  { label: 'Support the initiative', href: '#support' },
];

const principles = [
  { title: 'Belonging without pressure', icon: Heart },
  { title: 'Moderation without judgment', icon: Compass },
  { title: 'Inclusion without exclusion', icon: Users },
  { title: 'Safety without stigma', icon: Shield },
  { title: 'Connection without dependence', icon: Leaf },
];

const affectedGroups = [
  'First-year students',
  'Residence students',
  'International or out-of-town students',
  'Socially isolated youth',
  'Young adults navigating identity change',
];

const storySteps = [
  {
    id: 'opening',
    eyebrow: '01 / Opening Statement',
    title: 'Belonging has too often been treated like a transaction.',
    body:
      'Too many young people learn that belonging comes with a price: drink, fit in, and do not question the culture around you. For those already facing loneliness, transition, or exclusion, this can deepen isolation and increase vulnerability to harmful drinking.',
    callout:
      'Open Circle exists to help build social spaces where young people can connect, celebrate, and belong without pressure.',
  },
  {
    id: 'problem',
    eyebrow: '02 / The Problem',
    title: 'Alcohol can become the default route into social life.',
    body:
      'In many schools, universities, and youth communities, alcohol is embedded in social life. This can leave non-drinkers feeling excluded, while others may consume alcohol not out of choice, but out of a desire to belong.',
    callout:
      'When alcohol becomes the default route to belonging, social pressure can increase and genuine inclusion can weaken.',
  },
  {
    id: 'affected',
    eyebrow: '03 / Who Is Most Affected',
    title: 'Transition, distance from home, and isolation raise the stakes.',
    body:
      'Young adults living away from home, particularly first-year and residence students, can be especially vulnerable as they navigate stress, identity, independence, and the search for connection.',
    callout:
      'Social isolation can increase vulnerability to harmful drinking, especially among young adults experiencing transition, stress, and pressure to fit in.',
  },
];

const solutions = [
  {
    title: 'Peer education',
    description:
      'Creating conversations that help young people think critically about pressure, choice, and social norms.',
    details: [
      'Workshops on peer pressure and mindful decision-making',
      'Discussions on belonging, moderation, and responsibility',
      'Student-led reflection spaces for honest conversation',
    ],
    icon: BookOpen,
  },
  {
    title: 'Moderation and safety culture',
    description:
      'Helping reshape social norms so celebration and community do not rely on excess.',
    details: ['Moderation', 'Consent', 'Safety', 'Inclusive hosting', 'Belonging without pressure'],
    icon: Shield,
  },
  {
    title: 'Alternative social programming',
    description:
      'Designing social experiences where young people connect in ways that are inclusive, creative, and not centred on alcohol.',
    details: [
      'Game and conversation nights',
      'Wellness-centred student events',
      'Creative and cultural gatherings',
      'Themed residence events with inclusive hosting guidelines',
    ],
    icon: CalendarDays,
  },
];

const whyMatters = [
  'Mental wellbeing',
  'Safety',
  'Self-worth',
  'Decision-making',
  'Community trust',
  'Academic and personal adjustment',
];

const earlyStage = [
  'Refining the concept',
  'Researching youth social culture and exclusion',
  'Shaping a model for peer-led engagement',
  'Developing a public-facing narrative for scholarship, partnership, and future pilot opportunities',
];

const quickLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Why It Matters', href: '#why' },
  { label: 'Founder', href: '#founder' },
  { label: 'Support', href: '#support' },
];

const resourceLinks = [
  'Peer education model',
  'Inclusive hosting guide',
  'Moderation resources',
  'Youth wellbeing pathways',
  'Future pilot notes',
];

function App() {
  const storyRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start center', 'end center'],
  });

  const heroImageY = useTransform(heroProgress, [0, 1], ['0%', '12%']);
  const heroTextY = useTransform(heroProgress, [0, 1], ['0%', '-8%']);
  const storyLineScale = useTransform(storyProgress, [0, 1], [0.05, 1]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F4ED] text-[#101715] selection:bg-[#0E5D4A] selection:text-[#F7F4ED]">
      <Navbar />

      <main>
        <section
          ref={heroRef}
          id="top"
          className="relative isolate overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-16 lg:pt-32"
        >
          <div className="absolute inset-x-0 top-0 -z-20 h-full bg-[linear-gradient(90deg,#FCFAF5_0%,#F6F0E4_52%,#F1E1C9_100%)]" />
          <div className="absolute right-[-12rem] top-20 -z-10 h-[34rem] w-[52rem] bg-[#EFDCC2]/70 organic-bg-panel" />
          <div className="absolute bottom-0 left-0 -z-10 h-56 w-full bg-[#FCFAF5] story-wave" />

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div style={{ y: heroTextY }} className="relative z-10 max-w-2xl">
              <Reveal direction="up">
                <p className="mb-5 text-xs font-bold uppercase text-[#0E5D4A]">
                  Open Circle / early-stage social impact initiative
                </p>
                <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.02] text-[#14241E] sm:text-6xl lg:text-7xl">
                  Belonging should not come with{' '}
                  <span className="font-medium italic text-[#0E5D4A]">pressure to drink.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#101715]/75 sm:text-lg">
                  Open Circle is working to create inclusive, alcohol-aware social spaces for
                  young people through peer education, alternative programming, and
                  community-led culture change.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {heroActions.map((action, index) => (
                    <a
                      key={action.href}
                      href={action.href}
                      className={`inline-flex min-h-12 items-center justify-between rounded-full px-5 text-sm font-bold transition ${
                        index === 0
                          ? 'bg-[#0E5D4A] text-white shadow-lg shadow-[#0E5D4A]/15 hover:bg-[#0A4739]'
                          : 'border border-[#101715]/15 bg-white/45 text-[#14241E] hover:border-[#0E5D4A] hover:text-[#0E5D4A]'
                      }`}
                    >
                      {action.label}
                      {index === 0 ? <ArrowRight className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.16}>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    ['01', 'Choice', 'Widening the routes into connection.'],
                    ['02', 'Culture', 'Making healthier social norms visible.'],
                    ['03', 'Care', 'Reducing pressure without moral judgment.'],
                  ].map(([num, title, copy]) => (
                    <div key={title} className="rounded-lg border border-[#101715]/10 bg-[#FCFAF5]/70 p-4 shadow-sm backdrop-blur">
                      <span className="text-xs font-bold text-[#B88347]">{num}</span>
                      <h3 className="mt-3 text-sm font-bold text-[#14241E]">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#101715]/62">{copy}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </motion.div>

            <motion.div style={{ y: heroImageY }} className="relative mx-auto w-full max-w-3xl">
              <Reveal direction="left" delay={0.05}>
                <div className="absolute -left-8 bottom-10 h-44 w-64 bg-[#DDE8D1]/85 organic-shadow-panel" />
                <div className="absolute -right-10 top-0 h-40 w-40 rounded-full border border-[#0E5D4A]/15" />
                <div className="relative overflow-hidden organic-photo-hero shadow-2xl shadow-[#1B2D24]/15">
                  <img
                    src={heroCommunity}
                    alt="Young people sitting together outdoors in a warm campus garden"
                    className="h-[25rem] w-full object-cover sm:h-[34rem] lg:h-[35rem]"
                  />
                </div>

                <div className="absolute bottom-6 left-4 right-4 rounded-lg bg-[#0A4739]/92 p-5 text-white shadow-2xl backdrop-blur sm:left-8 sm:right-auto sm:w-[21rem]">
                  <div className="space-y-4">
                    {[
                      ['Connection over consumption.', Heart],
                      ['Belonging over pressure.', Users],
                      ['Community over isolation.', Leaf],
                    ].map(([text, Icon]) => {
                      const LineIcon = Icon as typeof Heart;

                      return (
                        <div key={text as string} className="flex items-center gap-3">
                          <LineIcon className="h-5 w-5 shrink-0 text-[#DDE8D1]" />
                          <span className="text-sm font-semibold">{text as string}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </section>

        <section
          ref={storyRef}
          id="vision"
          className="relative bg-[#FCFAF5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="absolute inset-0 story-grid opacity-60" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr]">
            <aside className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
              <Reveal direction="right">
                <p className="text-xs font-bold uppercase text-[#0E5D4A]">The case for Open Circle</p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#14241E] sm:text-5xl">
                  A calmer way to tell the truth about youth social pressure.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#101715]/70">
                  This narrative moves from the culture young people inherit, to who gets left
                  out, to the model Open Circle wants to build.
                </p>
              </Reveal>

              <div className="mt-10 hidden lg:flex">
                <div className="relative h-80 w-px overflow-hidden rounded-full bg-[#101715]/10">
                  <motion.div
                    style={{ scaleY: storyLineScale }}
                    className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-[#0E5D4A]"
                  />
                </div>
                <div className="ml-5 space-y-6 text-sm font-bold text-[#101715]/40">
                  <a href="#opening" className="block hover:text-[#0E5D4A]">
                    Opening
                  </a>
                  <a href="#problem" className="block hover:text-[#0E5D4A]">
                    Problem
                  </a>
                  <a href="#affected" className="block hover:text-[#0E5D4A]">
                    Affected
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-8 lg:space-y-20">
              {storySteps.map((step, index) => (
                <Reveal key={step.id} direction="up" delay={index * 0.04}>
                  <article
                    id={step.id}
                    className="relative overflow-hidden rounded-lg border border-[#101715]/10 bg-[#F7F4ED] p-6 shadow-xl shadow-[#17231D]/7 sm:p-9 lg:min-h-[72vh]"
                  >
                    <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#EFDCC2]/55" />
                    <div className="relative grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:items-start">
                      <div className="font-serif text-7xl italic leading-none text-[#0E5D4A]/16 sm:text-8xl">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-[#B88347]">{step.eyebrow}</p>
                        <h3 className="mt-4 max-w-3xl font-serif text-3xl font-light leading-tight text-[#14241E] sm:text-5xl">
                          {step.title}
                        </h3>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#101715]/72">{step.body}</p>
                        <div className="mt-8 border-l-2 border-[#0E5D4A] bg-white/55 py-4 pl-5">
                          <p className="font-serif text-xl italic leading-8 text-[#0E5D4A]">{step.callout}</p>
                        </div>

                        {step.id === 'affected' && (
                          <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {affectedGroups.map((group) => (
                              <div key={group} className="flex items-center gap-3 rounded-full border border-[#101715]/10 bg-white/60 px-4 py-3">
                                <span className="h-2 w-2 rounded-full bg-[#0E5D4A]" />
                                <span className="text-sm font-bold text-[#14241E]">{group}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="relative overflow-hidden bg-[#F7F4ED] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="absolute left-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full border border-[#0E5D4A]/10" />
          <div className="mx-auto max-w-7xl">
            <Reveal direction="up">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div>
                  <p className="text-xs font-bold uppercase text-[#0E5D4A]">The Solution</p>
                  <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#14241E] sm:text-5xl">
                    Inclusive social environments where connection does not depend on drinking.
                  </h2>
                </div>
                <p className="text-lg leading-8 text-[#101715]/72">
                  Open Circle focuses on peer education, safety culture, and alternative social
                  programming. The goal is not judgment. It is widening choice and making
                  healthier connection easier to see and join.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <Reveal key={solution.title} direction="up" delay={index * 0.08}>
                    <article className="group relative flex min-h-[30rem] flex-col overflow-hidden rounded-lg border border-[#101715]/10 bg-[#FCFAF5] p-7 shadow-lg shadow-[#17231D]/6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#17231D]/10">
                      <div className="absolute right-5 top-5 font-serif text-7xl italic text-[#0E5D4A]/8">
                        0{index + 1}
                      </div>
                      <div className="relative z-10">
                        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7EBDD] text-[#0E5D4A] transition group-hover:bg-[#0E5D4A] group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-serif text-2xl font-light text-[#14241E]">{solution.title}</h3>
                        <p className="mt-4 text-base leading-7 text-[#101715]/70">{solution.description}</p>
                      </div>
                      <ul className="relative z-10 mt-8 space-y-3">
                        {solution.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-6 text-[#101715]/76">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88347]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why" className="relative overflow-hidden bg-[#1C3144] px-5 py-20 text-[#F7F4ED] sm:px-8 lg:px-12 lg:py-28">
          <div className="absolute inset-0 deep-noise opacity-35" />
          <div className="absolute bottom-[-12rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full border border-[#DDE8D1]/15" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal direction="right">
              <p className="text-xs font-bold uppercase text-[#C5A059]">Why This Matters</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
                Harmful drinking is shaped by environments, pressure, and social norms.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                When students feel that drinking is the price of inclusion, the consequences
                can affect wellbeing, safety, self-worth, trust, and how they adjust
                academically and personally.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="rounded-lg border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/15 backdrop-blur">
                <p className="mb-5 text-sm font-bold text-[#DDE8D1]">Open Circle aims to reduce pressure around:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {whyMatters.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/7 px-4 py-3">
                      <Sparkles className="h-4 w-4 text-[#C5A059]" />
                      <span className="text-sm font-semibold text-white/86">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="founder" className="bg-[#FCFAF5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-full w-full rounded-lg bg-[#EFDCC2]/75" />
                <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-[#17231D]/12">
                  <img
                    src={missionCafe}
                    alt="A smiling young woman in a green sweater seated in a warm community space"
                    className="h-[30rem] w-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Play founder story video"
                    className="absolute bottom-7 left-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E5D4A] text-white shadow-lg transition hover:bg-[#0A4739]"
                  >
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div>
                <p className="text-xs font-bold uppercase text-[#0E5D4A]">About the Founder</p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#14241E] sm:text-5xl">
                  A personal commitment to safer, more inclusive youth social culture.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-[#101715]/74">
                  <p>
                    I am a 21-year-old aspiring social impact leader committed to promoting
                    moderate alcohol consumption, responsible social culture, and inclusion among
                    young people.
                  </p>
                  <p>
                    My interest in this work is deeply personal. I have seen the effects of
                    alcohol abuse within my own life and community, including the loss of my father
                    to alcohol-related illness. I have also witnessed how loneliness, peer pressure,
                    and the desire to belong can make young people more vulnerable to harmful
                    drinking.
                  </p>
                  <p>
                    These experiences inspired Open Circle: an early-stage initiative focused on
                    creating social spaces where connection does not depend on alcohol.
                  </p>
                </div>
                <div className="mt-8 border-l-2 border-[#0E5D4A] bg-[#F7F4ED] p-5">
                  <p className="font-serif text-xl italic leading-8 text-[#0E5D4A]">
                    Open Circle is not an anti-party campaign. It is an inclusion and wellbeing
                    initiative.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F7F4ED] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal direction="up">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase text-[#0E5D4A]">Early-stage Initiative</p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#14241E] sm:text-5xl">
                  Culture change begins with listening, framing, and designing from real student experience.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {earlyStage.map((item, index) => (
                <Reveal key={item} direction="up" delay={index * 0.06}>
                  <div className="relative min-h-[13rem] rounded-lg border border-[#101715]/10 bg-[#FCFAF5] p-6 shadow-sm">
                    <span className="text-xs font-bold text-[#B88347]">0{index + 1}</span>
                    <p className="mt-8 text-lg font-bold leading-7 text-[#14241E]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FCFAF5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal direction="up">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="text-xs font-bold uppercase text-[#0E5D4A]">What Open Circle Stands For</p>
                  <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-[#14241E] sm:text-5xl">
                    A clear culture promise.
                  </h2>
                </div>
                <p className="text-lg leading-8 text-[#101715]/72">
                  The initiative is designed to feel compassionate, credible, youth-centred,
                  research-aware, and mission-driven.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <Reveal key={principle.title} direction="scale" delay={index * 0.04}>
                    <div className="flex min-h-[12rem] flex-col justify-between rounded-lg border border-[#101715]/10 bg-[#F7F4ED] p-5 shadow-sm">
                      <Icon className="h-7 w-7 text-[#0E5D4A]" />
                      <h3 className="text-lg font-bold leading-6 text-[#14241E]">{principle.title}</h3>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="support" className="relative overflow-hidden bg-[#0A4739] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="absolute -right-12 -top-12 h-56 w-56 text-[#DDE8D1]/12">
            <Leaf className="h-full w-full rotate-12" strokeWidth={1.1} />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal direction="right">
              <p className="text-xs font-bold uppercase text-[#C5A059]">Closing Statement</p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-6xl">
                Young people deserve social spaces that do not require them to compromise their wellbeing to belong.
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur">
                <p className="text-lg leading-8 text-white/78">
                  Open Circle is a step toward reimagining student and youth culture so that
                  connection, celebration, and community can be built on inclusion, choice, and care.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@opencircle.org"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-[#0A4739] transition hover:bg-[#DDE8D1]"
                  >
                    Support the initiative <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#top"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-[#0A4739]"
                  >
                    Back to top <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer id="resources" className="bg-[#FCFAF5] px-5 pb-6 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 border-t border-[#101715]/10 pt-8 md:grid-cols-[1.4fr_0.8fr_0.95fr_1.3fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 text-[#14241E]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E5D4A] text-[#F7F4ED]">
                <Users className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xl font-bold leading-5">Open Circle</span>
                <span className="block text-sm text-[#101715]/65">
                  Building social spaces where connection does not depend on alcohol.
                </span>
              </span>
            </a>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Mail, Users, Heart, Leaf].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#101715]/10 text-[#0E5D4A] transition hover:bg-[#0E5D4A] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#14241E]">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-[#101715]/70 hover:text-[#0E5D4A]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#14241E]">Resources</h3>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <a key={link} href="#resources" className="block text-sm text-[#101715]/70 hover:text-[#0E5D4A]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-[#14241E]">Stay Connected</h3>
            <p className="mb-4 max-w-sm text-sm leading-6 text-[#101715]/70">
              Get updates on events, resources, partnership opportunities, and pilot development.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="min-h-11 flex-1 rounded-lg border border-[#101715]/12 bg-white px-4 text-sm outline-none transition placeholder:text-[#101715]/35 focus:border-[#0E5D4A]"
              />
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0E5D4A] px-5 text-sm font-bold text-white transition hover:bg-[#0A4739]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[#101715]/8 pt-5 text-xs text-[#101715]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Open Circle. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#resources" className="hover:text-[#0E5D4A]">
              Privacy Policy
            </a>
            <a href="#resources" className="hover:text-[#0E5D4A]">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
