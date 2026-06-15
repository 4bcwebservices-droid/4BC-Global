import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import TestimonialSlider from '@/components/TestimonialSlider'
import FaqAccordion from '@/components/FaqAccordion'
import LogoStrip from '@/components/LogoStrip'
import HeroDashboard from '@/components/HeroDashboard'
import Grainient from '@/components/Grainient'
import CapabilitiesBento from '@/components/CapabilitiesBento'
import HomeCaseStudies from '@/components/HomeCaseStudies'
import { OpenContactPill, OpenContactButton } from '@/components/OpenContactButton'
import SectorGrid from '@/components/SectorGrid'

const approachPrinciples = [
  {
    num: '01',
    title: 'Diagnostic Rigor',
    desc: 'We start with a structured discovery session to understand the commercial "why" behind your request, ensuring the research targets your specific strategic blind spots.',
    bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300', titleColor: 'text-amber-900', hoverBorder: 'hover:border-amber-400',
  },
  {
    num: '02',
    title: 'Bespoke Architecture',
    desc: 'No off-the-shelf templates. We design a custom methodology based on the unique cultural, regulatory, and demographic landscape of your target market.',
    bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300', titleColor: 'text-blue-900', hoverBorder: 'hover:border-blue-400',
  },
  {
    num: '03',
    title: 'Hybrid Intelligence',
    desc: 'We blend high-touch qualitative depth (IDIs, ethnography) with quantitative rigor and AI-assisted data processing for a 360-degree view of the market.',
    bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300', titleColor: 'text-purple-900', hoverBorder: 'hover:border-purple-400',
  },
  {
    num: '04',
    title: 'Actionable Strategy',
    desc: 'We don\'t deliver data dumps. Every report is structured for high-stakes decision-making, providing clear recommendations and the strategic context to act with confidence.',
    bg: 'bg-pink-50', border: 'border-pink-200', numColor: 'text-pink-300', titleColor: 'text-pink-900', hoverBorder: 'hover:border-pink-400',
  },
]

const tools = [
  {
    name: '4BC inFUSE',
    tagline: 'Your secondary intelligence, supercharged.',
    desc: 'A dynamic platform for rapid industry landscaping and competitive profiling across MEA.',
    type: 'Secondary Research Platform',
    href: '/tools#infuse',
    logo: '/brand/infuse-logo.png',
    logoH: 'h-7',
    logoScale: 1,
    accent: 'border-primary group-hover:border-primary',
    tag: 'bg-primary/15 text-primary',
  },
  {
    name: '4BC Landscape',
    tagline: 'Precision location intelligence.',
    desc: 'Advanced geo-mapping for retail network optimization and expansion planning.',
    type: 'Geo-Intelligence Tool',
    href: '/tools#landscape',
    logo: '/brand/landscape-logo.png',
    logoH: 'h-10',
    logoScale: 1,
    accent: 'border-plum group-hover:border-plum',
    tag: 'bg-plum/15 text-plum',
  },
  {
    name: '4BC ImpactIQ',
    tagline: 'Socio-economic measurement.',
    desc: 'Quantifying the tangible impact of mega-projects, events, and national initiatives.',
    type: 'Impact Assessment Framework',
    href: '/tools#impactiq',
    logo: '/brand/impactiq-logo.png',
    logoH: 'h-10',
    logoScale: 1,
    accent: 'border-accent group-hover:border-accent',
    tag: 'bg-accent/15 text-accent',
  },
]


export default function HomePageContent() {

  const heroStats = [
    { num: '450+', label: 'Bespoke Engagements' },
    { num: '40+', label: 'Markets Navigated' },
    { num: '100+', label: 'Years Combined Expertise' },
  ]

  const heroContent = (
    /* ─── HERO — full-coverage 3-stop gradient (all variants) ─── */
    <section className="relative overflow-hidden">
      {/* Grainient WebGL background */}
      <div className="absolute inset-0">
        <Grainient
          color1="#351e6b"
          color2="#9a4788"
          color3="#b19f2b"
          timeSpeed={2.35}
          colorBalance={-0.47}
          warpStrength={1.9}
          warpFrequency={4.2}
          warpSpeed={0.5}
          warpAmplitude={26}
          blendAngle={28}
          blendSoftness={0.39}
          rotationAmount={260}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      {/* Large watermark text */}
      <div aria-hidden className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" style={{ left: '-2%' }}>
        <span className="font-heading font-black text-white opacity-[0.10] leading-none" style={{ fontSize: 'clamp(200px, 32vw, 480px)', letterSpacing: '-0.05em' }}>
          4BC
        </span>
      </div>

      {/* Legibility overlay — stronger on left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/15 to-transparent pointer-events-none" />
      {/* Vignette — top & bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/15 via-transparent to-dark/30 pointer-events-none" />

      {/* Decorative rings — right side */}
      <div className="absolute right-0 top-0 w-[52%] h-full opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 600 700" className="w-full h-full" fill="none">
          <circle cx="520" cy="350" r="420" stroke="white" strokeWidth="1" />
          <circle cx="520" cy="350" r="310" stroke="white" strokeWidth="0.8" />
          <circle cx="520" cy="350" r="200" stroke="white" strokeWidth="0.6" />
          <circle cx="520" cy="350" r="90" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Radial glow — bottom left */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.12] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2B4A8C 0%, transparent 70%)' }} />

      {/* Skyline — anchored to bottom-left */}
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none" style={{ bottom: '-4%', height: '80%', width: '100%' }}>
        <img
          src="/brand/hero-skyline.webp"
          alt=""
          className="w-full h-full object-contain object-bottom"
          style={{ opacity: 0.45, mixBlendMode: 'luminosity' }}
        />
      </div>

      <div className="container-content relative z-10 pt-20 pb-40 sm:pt-28 sm:pb-72 lg:pt-36 lg:pb-80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

          {/* Left — eyebrow + headline */}
          <AnimatedSection className="text-left sm:-ml-6 lg:-ml-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <div className="h-px w-8 bg-white/40 flex-shrink-0" />
              <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase text-white/55">
                Middle East &amp; Africa Market Advisory
              </span>
            </div>

            {/* Headline */}
            <h1 className="leading-none">
              <span className="block font-heading font-black text-white tracking-[-0.03em] uppercase text-[48px] sm:text-[64px] lg:text-[88px]">
                Clarity Where Data is Opaque.
              </span>
            </h1>
          </AnimatedSection>

          {/* Right — body + CTAs + stats */}
          <AnimatedSection delay={0.1} className="text-left lg:text-right">
            <div className="lg:ml-auto max-w-[420px] lg:max-w-none">
              {/* Thin rule */}
              <div className="h-px w-full bg-white/15 mb-5 sm:mb-6" />

              {/* Body */}
              <p className="font-body text-[14px] text-white/55 leading-relaxed mb-6 sm:mb-8">
                We bridge the gap between regional complexity and commercial certainty — a specialist research firm built to navigate MEA regions through ground-level primary research and AI-accelerated synthesis.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4 sm:gap-5 mb-7 sm:mb-10">
                <OpenContactPill
                  bgColor="#E8A020"
                  textColor="#1A1A2E"
                  fillColor="#ffffff"
                  hoverTextColor="#1A4FA0"
                  className="font-heading font-semibold text-[15px] px-7 py-3.5 shadow-lg"
                >
                  Discuss Your Market Challenge <ArrowRight size={15} />
                </OpenContactPill>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium tracking-[0.04em] text-white/50 hover:text-white transition-colors group uppercase"
                >
                  View Case Studies
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 lg:flex lg:flex-wrap items-end lg:justify-end gap-y-3">
                {heroStats.map((s, i) => (
                  <div key={s.label} className={`${i > 0 ? 'border-l border-white/15 pl-4 lg:pl-7 lg:ml-7' : ''} text-left`}>
                    <div className="font-heading font-black text-[24px] sm:text-[28px] lg:text-[36px] text-white leading-none tracking-[-0.02em]">{s.num}</div>
                    <div className="font-body text-[9px] text-white/35 tracking-[0.14em] uppercase mt-1">{s.label}</div>
                  </div>
                ))}
                <div className="border-l border-white/15 pl-5 ml-5 sm:pl-7 sm:ml-7 hidden sm:block pb-0.5">
                  <div className="font-body text-[9px] text-white/30 tracking-[0.12em] uppercase leading-[1.7]">
                    Spun Out From Excellence
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,50 Q360,5 720,50 Q1080,95 1440,45 L1440,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )

  const pageContent = (
    <>
      {/* ─── 1. HERO ─── */}
      {heroContent}

      {/* ─── 2. CLIENT LOGOS — marquee ─── */}
      <section className="bg-white py-10 overflow-hidden">
        <LogoStrip />
      </section>

      {/* ─── 3. CAPABILITIES ─── */}
      <section className="section-padding bg-bg-soft">
        <div className="container-content">
          <AnimatedSection className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Core Service Areas</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  Comprehensive Research Capabilities
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Five specialist practice areas covering the full breadth of MEA intelligence needs.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <CapabilitiesBento />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 4. SECTORS / INDUSTRIES ─── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <AnimatedSection>
              <span className="section-tag">Sector Fluency</span>
              <h2 className="font-heading text-h2-lg text-text mb-4 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Intelligence that de-risks regional investment.</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted max-w-[46ch]">
                Operating in MEA requires more than data; it requires an understanding of the human and regulatory context.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-body-sm text-text-muted mb-5 max-w-[52ch]">
                Our experience across 450+ engagements has helped the region's largest enterprises and global brands accelerate growth and protect their investments.
              </p>
              <p className="font-body text-body-sm text-text-muted max-w-[52ch]">
                Trusted by VISA, ENOC, Unilever, Toyota, DP World, and 100+ others across MEA.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.15}>
            <SectorGrid />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5. APPROACH ─── */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection className="lg:sticky lg:top-28">
              <span className="section-tag">The 4BC Approach</span>
              <h2 className="font-heading text-h2-lg text-text mb-5 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Your business question dictates our methodology.</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted mb-10 max-w-[46ch] leading-relaxed">
                We are method-neutral by design. Because secondary data in the MEA region is often unreliable, we build every engagement from the ground up — blending deep primary research with AI-integrated analytics to find the truth that partially available secondary data miss.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent text-dark font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-accent-warm hover:brightness-105 transition-all"
              >
                How We Work <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approachPrinciples.map((p) => (
                  <div key={p.num} className={`group ${p.bg} border ${p.border} ${p.hoverBorder} rounded-2xl p-6 transition-all duration-200`}>
                    <span className={`font-heading font-black text-[64px] leading-none ${p.numColor} block mb-4`}>{p.num}</span>
                    <h3 className={`font-heading font-semibold text-[16px] ${p.titleColor} mb-2 leading-snug`}>{p.title}</h3>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 7. TOOLS ─── */}
      <section className="relative section-padding overflow-hidden bg-white">
        {/* Skyline decorative backdrop */}
        <div className="absolute bottom-0 left-0 right-0 h-[72%] pointer-events-none select-none">
          <img src="/brand/skyline.webp" alt="" aria-hidden className="w-full h-full object-contain object-bottom opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
        </div>

        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="font-heading font-semibold text-label tracking-[0.1em] uppercase text-primary mb-4 inline-block">Proprietary Platforms</span>
              <h2 className="font-heading text-h2-lg text-text mb-6 max-w-[400px]">
                <GradientText hoverOnly animationSpeed={2}>Accelerating insight in data-scarce markets.</GradientText>
              </h2>
              <p className="font-body text-body-sm text-text-muted mb-3 max-w-[50ch]">
                We embed proprietary AI tools and geo-spatial mapping into our workflows to turn raw regional data into strategic assets.
              </p>
              <p className="font-body text-body-sm text-text-muted mb-10 max-w-[50ch]">
                Three platforms — inFUSE, Landscape, and ImpactIQ — give clients a faster, sharper path to decisions.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-medium text-[16px] rounded-full px-7 py-3.5 hover:bg-primary/90 transition-all"
              >
                Explore Our Tools <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-3">
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className={`group block bg-white/95 border-l-2 border border-white/40 ${tool.accent} rounded-2xl p-5 hover:bg-white hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-200 shadow-sm`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className={`mb-3 ${tool.logoH} w-44 flex items-center overflow-hidden`}>
                          <Image src={tool.logo} alt={tool.name} width={176} height={40} className="h-full w-full object-contain object-left origin-left transition-none" style={{ transform: `scale(${tool.logoScale})` }} />
                        </div>
                        <p className="font-body text-[13px] text-text-muted mb-2">{tool.tagline}</p>
                        <p className="font-body text-[13px] text-text-muted/80 leading-relaxed">{tool.desc}</p>
                      </div>
                      <ArrowRight size={16} className="text-text-muted/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 8 & 9. CASE STUDIES (modal popup) ─── */}
      <HomeCaseStudies />

      {/* ─── 9. TESTIMONIALS ─── */}
      {/* ─── 9. Testimonials ─── */}
      <section className="bg-[#0F1320] py-20 px-4">
        <div className="container-content">
          <AnimatedSection>
            <p className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-10">
              What Our Clients Say
            </p>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        {/* Same Grainient as hero */}
        <div className="absolute inset-0">
          <Grainient
            color1="#351e6b"
            color2="#9a4788"
            color3="#b19f2b"
            timeSpeed={2.35}
            colorBalance={-0.47}
            warpStrength={1.9}
            warpFrequency={4.2}
            warpSpeed={0.5}
            warpAmplitude={26}
            blendAngle={28}
            blendSoftness={0.39}
            rotationAmount={260}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="container-content relative z-10">
          <AnimatedSection className="text-center">
            <p className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] font-bold text-white mb-4 tracking-[-0.02em] leading-tight">
              Ready to Define Your Next Move?
            </h2>
            <p className="font-body text-white/55 text-[15px] md:text-[16px] max-w-md mx-auto mb-10 leading-relaxed">
              Whether you're entering a new market, evaluating a strategic opportunity, or seeking to understand the competitive dynamics shaping your category — we're ready to help you move forward with confidence.
            </p>
            <div className="flex justify-center">
              <OpenContactButton className="inline-flex items-center justify-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:brightness-110 transition-all">
                Book a No Obligation Consultation <ArrowRight size={16} />
              </OpenContactButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 11. FAQ ─── */}
      <FaqAccordion />
    </>
  )

  return pageContent
}
