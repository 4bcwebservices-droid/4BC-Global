import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Research Services — 4BC Global',
  description: 'Bespoke research solutions: business research, customer experience, impact assessment, geolocation services. Advisory across the full business lifecycle.',
}

const lifecycleStages = [
  {
    num: '01',
    stage: 'Inception',
    tagline: 'Enter the Market With Confidence',
    intro: "You're moving into a new geography, launching into a new category, or building something from the ground up. The stakes are high. The data is often limited. And the cost of getting it wrong is significant. This is where rigorous research becomes your insurance policy.",
    services: [
      { name: 'Go-To-Market Strategy', desc: 'Understanding the competitive landscape, customer preferences, and entry barriers before you commit capital.' },
      { name: 'Market Feasibility', desc: 'Is the opportunity real? What\'s the true addressable market, and what are the realistic paths to scale?' },
      { name: 'Business Plan Development', desc: 'Grounding your assumptions in primary evidence, not extrapolation.' },
      { name: 'Market Entry Strategy', desc: 'The specific route, positioning, and customer acquisition approach that works in this market, not a generic playbook.' },
      { name: 'Go/No-Go Decision Support', desc: 'Clarity on whether to proceed, pivot, or pass.' },
    ],
    whyItMatters: "Entry decisions are rarely reversible. The cost of misjudging a market — or worse, discovering the opportunity doesn't exist — is far higher than the cost of getting the research right upfront.",
    color: '#E8A020',
    lightBg: '#FFFBEB',
    midColor: '#FDE68A',
  },
  {
    num: '02',
    stage: 'Growth',
    tagline: 'Scale Smart. Outpace Your Rivals.',
    intro: "You've established a foothold. Now the challenge is different: how do you scale without losing control of quality, margin, or brand? How do you win customers faster than competitors can respond? This is where strategic intelligence becomes competitive advantage.",
    services: [
      { name: 'Product Strategy', desc: 'Which offerings will drive growth? What gaps exist in the market that you can own?' },
      { name: 'Customer Growth', desc: 'Where are the highest-value customers? What drives their purchasing decisions? How do you reach them cost-effectively?' },
      { name: 'Pricing Strategy', desc: 'What will the market bear? How do you optimize price without triggering competitive response or customer resistance?' },
      { name: 'Partner Evaluation', desc: 'Which distribution partners, technology partners, or strategic alliances will accelerate growth?' },
      { name: 'Distribution Strategy', desc: 'Direct, indirect, hybrid? Which channels will reach your target customers most effectively in this region?' },
    ],
    whyItMatters: "Growth is not just about doing more of what works. It's about understanding where growth is possible, who will drive it, and how to get there faster and more profitably than competitors. In MEA, that distinction is everything.",
    color: '#2B4A8C',
    lightBg: '#EEF2FF',
    midColor: '#C7D2FE',
  },
  {
    num: '03',
    stage: 'Maturity',
    tagline: 'Defend Position. Optimize Returns.',
    intro: "You've built a profitable business. Competitors are circling. Your customer base is stable, but growth has slowed. The focus shifts from expansion to efficiency, from acquisition to retention, from novelty to resilience. This is where insight becomes operational intelligence.",
    services: [
      { name: 'Network Optimization Strategy', desc: 'Are all your distribution channels performing equally? Where should you invest, consolidate, or exit?' },
      { name: 'Customer Retention Programs', desc: 'What drives loyalty at scale? Where are you bleeding customers, and how do you stop it?' },
      { name: 'Brand Health Tracking', desc: 'How are you perceived relative to competitors? Is your brand strengthening, static, or at risk?' },
      { name: 'Channel Efficiency Review', desc: 'Which touchpoints deliver value? Which are cost drains? Where should you reallocate investment?' },
      { name: 'Competitive Response Planning', desc: 'How are rivals moving? What are they doing that\'s working, and what gaps are they missing?' },
    ],
    whyItMatters: "In mature markets, small efficiency gains compound into significant margin improvement. Understanding your customers deeply, measuring brand health rigorously, and optimizing every channel becomes the difference between steady profitability and eventual decline.",
    color: '#7D2B5E',
    lightBg: '#FDF4FF',
    midColor: '#E9D5FF',
  },
  {
    num: '04',
    stage: 'Renewal',
    tagline: 'Pivot. Diversify. Grow Again.',
    intro: "Markets evolve. Customer preferences shift. Competitors innovate. At some point, protecting yesterday's business means sacrificing tomorrow's potential. Renewal is about asking: what comes next? This is where courage meets evidence.",
    services: [
      { name: 'Diversification Strategy', desc: 'What new categories, segments, or geographies represent genuine growth opportunities?' },
      { name: 'Portfolio Rebalancing', desc: 'Which current products or services should you defend, grow, or divest?' },
      { name: 'Feasibility Study', desc: 'Is the opportunity real? Can you execute it? What\'s the realistic growth potential?' },
      { name: 'New Market Assessment', desc: 'Customer needs, competitive dynamics, regulatory environment, distribution landscape — everything you need to move forward with confidence.' },
    ],
    whyItMatters: "Renewal is not about staying busy. It's about identifying where you can create differentiation and scale. In fast-moving MEA markets, the ability to pivot effectively is often the difference between companies that endure and companies that fade.",
    color: '#047857',
    lightBg: '#ECFDF5',
    midColor: '#A7F3D0',
  },
]

const researchServices = [
  { name: 'Market Assessment & Sizing', desc: 'Understanding true market opportunity across segments and geographies.' },
  { name: 'Competitive Intelligence', desc: 'What competitors are doing, how customers perceive them, where the gaps are.' },
  { name: 'Customer Research', desc: 'Deep understanding of attitudes, behaviours, needs, and unmet expectations.' },
  { name: 'Stakeholder Engagement', desc: 'Especially in public sector work — understanding needs across complex stakeholder ecosystems.' },
  { name: 'Brand Health Tracking', desc: 'Measuring perception, loyalty, and competitive positioning over time.' },
  { name: 'Channel & Network Research', desc: 'Understanding distribution dynamics and optimizing channel performance.' },
  { name: 'Feasibility & Opportunity Assessment', desc: 'Validating new market, product, or business model opportunities before major investment.' },
  { name: 'Technology & Emerging Trends Research', desc: 'Understanding adoption rates, barriers, and implications for your business.' },
]

const serviceAreas = [
  {
    id: 'business-research',
    icon: Search,
    title: 'Business Research',
    color: '#2B4A8C',
    bgLight: '#EEF2FF',
    image: '/capabilities/business-research.jpg',
    services: [
      'Marketing Strategy & Concept Evaluation',
      'Segmentation Studies',
      'Regulatory Environment Evaluation',
      'Market Entry',
      'Competition Mapping',
      'Partner Identification & Evaluation',
      'Market Sizing, Demand Estimation & Brand Share',
      'Supply & Demand Analysis',
      'Industrial Consumer Usage & Satisfaction',
      'Channel Analysis',
      'Online Customer Management',
    ],
  },
  {
    id: 'customer-experience',
    icon: Users,
    title: 'Customer Satisfaction & Experience',
    color: '#7D2B5E',
    bgLight: '#FDF4FF',
    image: '/capabilities/customer-satisfaction.png',
    services: [
      'Customer Journey Mapping',
      'Customer Loyalty / Satisfaction',
      'Loyalty & Engagement Programs',
      'Net Promoter Score (NPS)',
      'Mystery Shopping',
      'CX Measure and Management',
      'Channel Analysis',
    ],
  },
  {
    id: 'impact-assessment',
    icon: BarChart2,
    title: 'Impact Assessment',
    color: '#E8A020',
    bgLight: '#FFFBEB',
    image: '/capabilities/impact-assessment.png',
    imagePosition: 'center bottom',
    services: [
      'Corporate Reputation Assessment',
      'Economic Impact Assessment (EIA)',
      'Event Performance — Footfall & Economic Impact',
      'Social Impact Assessment (SIA)',
    ],
  },
  {
    id: 'geolocation-services',
    icon: MapPin,
    title: 'Geolocation-Based Services',
    color: '#2B4A8C',
    bgLight: '#EEF2FF',
    image: '/capabilities/geolocation.png',
    services: [
      'Catchment Area Assessment',
      'Network Planning — New Location Evaluation',
      'Branch Optimization',
      'Promotion/Event Performance Measurement',
    ],
  },
  {
    id: 'specialist-areas',
    icon: Lightbulb,
    title: 'Other Specialist Areas',
    color: '#7D2B5E',
    bgLight: '#FDF4FF',
    image: '/capabilities/specialist-areas.png',
    services: [
      'InFuse — Secondary research-based intelligence solution',
      'Counterfeit Assessment',
      'Co-creation Workshops for Business Strategy',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        headline="Every Business Moves Through Four Stages."
        subheadline="We Support You At Each One."
      />

      {/* Sub-nav */}
      <nav className="bg-white border-b border-border sticky top-16 lg:top-[72px] z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {[
              { label: 'Advisory', href: '#business-lifecycle-advisory' },
              { label: 'Methodology', href: '#methodology' },
              { label: 'Research Services', href: '#research-services' },
              { label: 'Service Areas', href: '#service-areas' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="whitespace-nowrap hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Intro */}
      <section className="bg-white section-padding border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <AnimatedSection>
              <span className="section-tag">Advisory Services</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mt-2">
                <GradientText hoverOnly animationSpeed={2}>Method-Neutral Research That Matches Where You Are.</GradientText>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-[15px] text-text-muted leading-relaxed mb-4">
                Whether you're entering a market for the first time, scaling operations, optimizing profitability, or charting a new direction — your strategic needs shift at each stage of the business lifecycle. Our practice is built entirely around that reality. We don't force a single research model onto four different business problems. Instead, we match the approach to the stage, the question, and the decision ahead.
              </p>
              <p className="font-body text-[15px] text-text font-medium">
                This is how method-neutral research becomes genuinely useful.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Lifecycle */}
      <section id="business-lifecycle-advisory" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <span className="section-tag">Business Lifecycle Advisory</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                <GradientText hoverOnly animationSpeed={2}>Four Stages. One Integrated Practice.</GradientText>
              </h2>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Each stage demands a different kind of intelligence. We deliver it.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {lifecycleStages.map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl bg-white border overflow-hidden flex flex-col" style={{ borderColor: stage.color + '30' }}>
                  {/* Top accent bar */}
                  <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: stage.color }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1" style={{ color: stage.color }}>
                          Stage {stage.num}
                        </span>
                        <h3 className="font-heading font-bold text-[26px] leading-tight" style={{ color: stage.color }}>
                          {stage.stage}
                        </h3>
                        <p className="font-body text-[13px] text-text-muted italic mt-1">{stage.tagline}</p>
                      </div>
                      <span className="font-heading font-black text-[80px] leading-none select-none flex-shrink-0 -mt-2 -mr-1" style={{ color: stage.color + '18' }}>
                        {stage.num}
                      </span>
                    </div>

                    {/* Intro */}
                    <p className="font-body text-[13.5px] text-text-muted leading-relaxed mb-5">{stage.intro}</p>

                    {/* What we explore */}
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: stage.color }}>
                      What We Explore
                    </p>
                    <div className="space-y-3 flex-1 mb-6">
                      {stage.services.map((svc) => (
                        <div key={svc.name} className="flex items-start gap-3">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: stage.color }} />
                          <div>
                            <span className="font-body font-semibold text-[13px] text-text">{svc.name}</span>
                            <span className="font-body text-[12.5px] text-text-muted"> — {svc.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Why it matters */}
                    <div className="rounded-xl p-4 mt-auto" style={{ backgroundColor: stage.lightBg, borderLeft: `3px solid ${stage.midColor}` }}>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-1.5" style={{ color: stage.color }}>
                        Why It Matters
                      </p>
                      <p className="font-body text-[12.5px] text-text-muted leading-relaxed">{stage.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Our Methodology</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>How We Work Across All Stages</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-sm md:text-right leading-relaxed">
                Regardless of where you are in the business lifecycle, our approach remains constant: diagnostic rigour, methodological precision, and output built to drive decisions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                title: 'Diagnose First',
                desc: 'We begin by truly understanding your challenge. Not the brief as you\'ve stated it, but the real business question underneath. What decision needs to be made? What uncertainty is blocking progress? What\'s at stake?',
                bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300', titleColor: 'text-amber-900',
              },
              {
                num: '02',
                title: 'Design the Methodology',
                desc: 'We shape the research approach around your specific objective, the information gaps that matter most, and the market complexity you\'re navigating. Whatever combination answers the question properly.',
                bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300', titleColor: 'text-blue-900',
              },
              {
                num: '03',
                title: 'Blend Techniques',
                desc: 'Most engagements benefit from strategic combination. Large-scale surveys for breadth. In-depth interviews for depth. Competitive intelligence for context. Mystery audits, geo-mapping, regulatory assessment — whatever serves the objective.',
                bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300', titleColor: 'text-purple-900',
              },
              {
                num: '04',
                title: 'Deliver Insight That Moves Decisions',
                desc: 'Our output is built to be used. Clear findings. Honest implications. Actionable recommendations. Not data archives. Not research for research\'s sake. Intelligence that helps your leadership team move forward with confidence.',
                bg: 'bg-emerald-50', border: 'border-emerald-200', numColor: 'text-emerald-300', titleColor: 'text-emerald-900',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className={`${item.bg} border ${item.border} rounded-2xl p-6 h-full flex flex-col`}>
                  <span className={`font-heading font-black text-[64px] leading-none ${item.numColor} block mb-3`}>{item.num}</span>
                  <h3 className={`font-heading font-bold text-[17px] ${item.titleColor} mb-3 leading-tight`}>{item.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section id="research-services" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Research Services</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Standalone Research Capabilities</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Beyond advisory, we also offer standalone research services for specific intelligence needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {researchServices.map((svc, i) => {
              const accents = ['#E8A020', '#2B4A8C', '#7D2B5E', '#047857', '#E8A020', '#2B4A8C', '#7D2B5E', '#047857']
              const accent = accents[i % accents.length]
              return (
                <AnimatedSection key={svc.name} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl border border-border p-5 flex items-start gap-5 hover:shadow-sm transition-all">
                    <span className="font-heading font-black text-[40px] leading-none flex-shrink-0 w-12" style={{ color: accent + '40' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 pt-1">
                      <span className="font-heading font-bold text-[15px] text-text block mb-0.5">{svc.name}</span>
                      <span className="font-body text-[13px] text-text-muted leading-relaxed">{svc.desc}</span>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section id="service-areas" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Core Service Areas</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Comprehensive Research Capabilities</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Five specialist practice areas covering the full breadth of MEA intelligence needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <AnimatedSection key={area.id} delay={i * 0.1}>
                <div id={area.id} className="rounded-2xl border border-border h-full flex flex-col bg-white overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 group">

                  {/* Image header */}
                  <div className="relative overflow-hidden" style={{ height: 160 }}>
                    <div
                      className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${area.image})`, backgroundPosition: (area as any).imagePosition ?? 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: area.color }}>
                        <area.icon size={17} className="text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-[16px] text-white leading-snug">{area.title}</h3>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="p-5 flex-1" style={{ borderTop: `2px solid ${area.color}` }}>
                    <ul className="space-y-2.5">
                      {area.services.map((svc) => (
                        <li key={svc} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]" style={{ backgroundColor: area.color }} />
                          <span className="font-body text-[13px] text-text-muted leading-snug">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10">
          <AnimatedSection className="text-center">
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get Started</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready To Define Your Next Move?
            </h2>
            <p className="font-body text-white/55 text-[16px] max-w-[48ch] mx-auto mb-10 leading-relaxed">
              Whether you're at inception, scaling, optimizing, or renewing — we're ready to bring the clarity that leads to confident decisions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#ffffff" hoverTextColor="#1A4FA0" className="font-heading font-semibold text-[15px] px-7 py-3.5">
                Start A Conversation
              </PillButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                Explore Case Studies <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
