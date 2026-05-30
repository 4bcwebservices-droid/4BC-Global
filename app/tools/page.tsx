import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Proprietary Tools — 4BC Global',
  description: '4BC InfUSE, Landscape, and ImpactIQ — intelligence platforms for competitive profiling, network planning, and impact measurement.',
}

const tools = [
  {
    id: 'infuse',
    logoH: 'h-10 sm:h-20', logoW: 'w-full max-w-[320px]',
    logo: '/brand/infuse-logo.png',
    image: '/capabilities/business-research.jpg',
    name: '4BC InfUSE',
    subtitle: 'The Intelligence Accelerator',
    tagline: 'A supercharged secondary research platform designed to accelerate desk intelligence and baseline strategy.',
    strategicImperative: 'Leadership teams cannot wait months to understand a shifting competitive baseline. Before deploying extensive primary research or entering a new market, organizations require an immediate, high-fidelity read on the industry landscape. InfUSE eliminates the blind spots, providing the foundational clarity required to make swift, informed strategic maneuvers.',
    useCases: [
      { name: 'Rapid Competitive Profiling', desc: 'Deep-dive analysis into competitor positioning, market share, and operational footprints.' },
      { name: 'Precision Benchmarking', desc: 'Objective evaluations of industry standards, pricing structures, and best practices.' },
      { name: 'Fast-Turn Intelligence Reports', desc: 'Executive-ready syntheses delivered at speed, ensuring leadership is never waiting on the data to make the next move.' },
    ],
    stats: [
      { value: 'MEA', label: 'Coverage' },
      { value: '10+', label: 'Sectors' },
      { value: '5 Days', label: 'Turnaround' },
    ],
    type: 'Secondary Research Platform',
    accent: '#2B4A8C',
    accentLight: '#EEF2FF',
    accentMid: '#C7D2FE',
  },
  {
    id: 'landscape',
    logoH: 'h-12 sm:h-28', logoW: 'w-full max-w-[400px]',
    logo: '/brand/landscape-logo.png',
    image: '/capabilities/geolocation.png',
    video: '/videos/landscape-demo.mp4',
    name: '4BC Landscape',
    subtitle: 'Spatial Intelligence & Network Expansion',
    tagline: 'A sophisticated geo-mapping and retail network planning tool that dictates optimal location strategies and safeguards capital expenditure.',
    strategicImperative: 'Physical expansion in the MEA region is a high-stakes investment. A flagship store in the wrong catchment area is a costly liability. 4BC Landscape removes guesswork from your rollout strategy, ensuring that every dollar of CAPEX spent on new physical outlets is guided by empirical spatial intelligence.',
    useCases: [
      { name: 'Multidimensional Catchment Mapping', desc: 'Synthesizes complex data layers — including demographic shifts, competitive footprints, and large-scale infrastructure developments — to identify high-potential growth zones.' },
      { name: 'Format Optimization', desc: 'Answers precisely what to build. Recommends the optimal outlet archetype per location, whether that is a sprawling flagship, a compact express store, or a high-touch experience center.' },
      { name: 'Strategic Rollout Prioritization', desc: 'Provides a phased, data-backed roadmap dictating where to launch first and how to sequence subsequent expansions for maximum market capture.' },
    ],
    stats: [
      { value: '1000s', label: 'GPS Points' },
      { value: 'Multiple', label: 'Clusters' },
      { value: 'Dynamic', label: 'Map Output' },
    ],
    type: 'Geo-Intelligence Tool',
    accent: '#7D2B5E',
    accentLight: '#FDF4FF',
    accentMid: '#E9D5FF',
  },
  {
    id: 'impactiq',
    logoH: 'h-12 sm:h-28', logoW: 'w-full max-w-[400px]',
    logo: '/brand/impactiq-logo.png',
    image: '/capabilities/impactiq-new.jpg',
    name: '4BC ImpactIQ',
    subtitle: 'The Socio-Economic Impact Framework',
    tagline: 'A robust, data-driven framework designed to rigorously quantify and demonstrate an organization\'s ultimate value beyond pure profit.',
    strategicImperative: 'In today\'s landscape, profitability alone is no longer enough. To secure a "social license to operate" and align with transformative national agendas like Saudi Vision 2030 or the UAE 2031 Roadmap, large capital projects, government initiatives, and cultural programs must articulate their broader societal value. 4BC ImpactIQ provides the evidence-backed narrative required to build trust with investors, stakeholders, and the public.',
    useCases: [
      { name: 'Econometric Modeling (Economic Impact)', desc: 'Measures hard financial contributions, including Gross Value Added (GVA), fiscal multipliers, direct/indirect job creation, and investment stimulation via rigorous input-output analysis.' },
      { name: 'Qualitative Synthesis (Social Impact)', desc: 'Captures the critical intangibles — community well-being, cultural heritage preservation, brand equity, sentiment shifts, and international soft power.' },
      { name: 'The 5-Step Activation Methodology', desc: 'Scoping → Data Mapping → Measurement & Modeling → Synthesis → Activation. A comprehensive end-to-end process aligned with overarching organizational vision and aligned with SDG (Sustainable Development Goals).' },
    ],
    stats: [
      { value: 'Economic', label: 'Impact' },
      { value: 'Social', label: 'Impact' },
      { value: 'Environment', label: 'Impact' },
    ],
    type: 'Impact Assessment Framework',
    accent: '#E8A020',
    accentLight: '#FFFBEB',
    accentMid: '#FDE68A',
  },
]

export default function ToolsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 pb-16 pt-32 md:pt-40">
          <AnimatedSection>
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">
              Proprietary Tools
            </span>
            <h1 className="font-heading font-bold text-[36px] md:text-[52px] text-white leading-tight tracking-[-0.02em] mb-4 max-w-2xl">
              From Raw Data to Decisive Strategic Advantage
            </h1>
            <p className="font-body text-white/55 text-[16px] max-w-xl leading-relaxed mb-10">
              Built on over a decade of ground-level MEA expertise, 4BC Global's proprietary platforms translate fragmented data into empirical clarity — equipping C-suite executives and government leaders with the strategic architecture required to make high-stakes decisions with absolute confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:text-white transition-all rounded-full px-5 py-2 font-body text-[13px]"
                >
                  {t.name} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Tool Sections ── */}
      {tools.map((tool, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={tool.id}
            id={tool.id}
            className={i % 2 === 0 ? 'bg-white section-padding' : 'bg-bg-soft section-padding'}
          >
            <div className="container-content">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>

                {/* ── Content ── */}
                <AnimatedSection className={isEven ? '' : 'lg:order-last'}>

                  {/* Logo — prominent */}
                  <div className={`mb-8 ${tool.logoH} ${tool.logoW} relative`}>
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Type tag + subtitle */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="inline-block font-body text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full px-3 py-1"
                      style={{ backgroundColor: tool.accentLight, color: tool.accent }}
                    >
                      {tool.type}
                    </span>
                    <span className="font-heading font-semibold text-[13px] text-text-muted">
                      {tool.subtitle}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="font-heading font-medium text-[17px] text-text mb-4 leading-snug">
                    {tool.tagline}
                  </p>

                  {/* Strategic Imperative */}
                  <div
                    className="rounded-xl p-4 mb-6"
                    style={{ backgroundColor: tool.accentLight, borderLeft: `3px solid ${tool.accentMid}` }}
                  >
                    <p
                      className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-1.5"
                      style={{ color: tool.accent }}
                    >
                      The Strategic Imperative
                    </p>
                    <p className="font-body text-[12.5px] text-text-muted leading-relaxed">{tool.strategicImperative}</p>
                  </div>

                  {/* Divider */}
                  <p
                    className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] mb-3"
                    style={{ color: tool.accent }}
                  >
                    Core Capabilities
                  </p>

                  {/* Use cases */}
                  <ul className="space-y-3 mb-8">
                    {tool.useCases.map((uc) => (
                      <li key={uc.name} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: tool.accent }} />
                        <div>
                          <span className="font-body font-semibold text-[13px] text-text">{uc.name}</span>
                          <span className="font-body text-[12.5px] text-text-muted"> — {uc.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <PillButton
                    href="/contact"
                    bgColor={tool.accent}
                    textColor="#ffffff"
                    fillColor="#0F1320"
                    hoverTextColor="#ffffff"
                    className="font-heading font-semibold text-[14px] px-6 py-3"
                  >
                    Learn More about {tool.name.replace('4BC ', '')}
                  </PillButton>
                </AnimatedSection>

                {/* ── Image + Stats ── */}
                <AnimatedSection delay={0.15} className={isEven ? '' : 'lg:order-first'}>
                  <div className="relative">

                    {/* Image or Video */}
                    <div className={`rounded-2xl overflow-hidden relative shadow-xl ${'video' in tool && tool.video ? 'aspect-video bg-black' : 'aspect-[4/3]'}`}>
                      {'video' in tool && tool.video ? (
                        <video
                          src={tool.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <>
                          <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </>
                      )}
                    </div>

                    {/* Stats — overlapping bottom-left */}
                    <div className="absolute -bottom-5 left-4 right-4 flex gap-2 justify-center">
                      {tool.stats.map((s) => (
                        <div
                          key={s.label}
                          className="flex-1 bg-white border border-border rounded-xl px-3 py-3 text-center shadow-md"
                        >
                          <div className="font-heading font-black text-[18px] leading-none" style={{ color: tool.accent }}>{s.value}</div>
                          <div className="font-body text-text-muted text-[10px] mt-1 uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </AnimatedSection>

              </div>
            </div>
          </section>
        )
      })}

      {/* Spacer to clear overlapping stats */}
      <div className="bg-bg-soft h-10" />

      {/* ── CTA ── */}
      <section className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10">
          <AnimatedSection className="text-center">
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get Started</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Equip Your Leadership with the Ultimate Unfair Advantage</h2>
            <p className="font-body text-white/55 max-w-xl mx-auto mb-10 text-[16px]">
              Whether you are plotting a market entry, optimizing a retail network, or proving your socio-economic value to a nation — our platforms provide the clarity you need to move decisively.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
                Request a Platform Demo
              </PillButton>
              <a href="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors">
                Discuss Your Strategic Challenge <ArrowRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
