import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import LogoStrip from '@/components/LogoStrip'
import { sectors } from '@/lib/sectors-data'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

export const metadata: Metadata = {
  title: 'Sectors We Serve — 4BC Global',
  description: '450+ engagements across 12 sectors in MEA. Retail, banking, oil & gas, automotive, healthcare, telecom and more.',
}

const researchTypes = [
  'Market Sizing & Demand Estimation',
  'Competitive Intelligence',
  'Customer Satisfaction & NPS',
  'Market Entry Strategy',
  'Channel & Network Planning',
  'Feasibility Studies',
  'Brand Health Tracking',
  'Geo-mapping & Location Intelligence',
]

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        headline="MEA Is Not a Single Market."
        subheadline="It's a Mosaic of Opportunities."
      />

      {/* Sub-nav */}
      <nav className="bg-white border-b border-border sticky top-16 lg:top-[72px] z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {[
              { label: 'Sectors', href: '#sectors' },
              { label: 'Our Capabilities', href: '#capabilities' },
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Why Us', href: '#why-us' },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-tag">Sectors We Serve</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mt-2">
                <GradientText hoverOnly animationSpeed={2}>Decades of In-Region Experience. 12 Industries Deep.</GradientText>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-4 font-body text-[15px] text-text-muted leading-relaxed">
                <p>
                  The Middle East and Africa are not just diverse — they are layered. What works in Dubai rarely applies directly to Riyadh. The challenges of South Africa's informal economy are worlds apart from the structured retail markets of the GCC. And the regulatory landscape in Egypt bears little resemblance to Kenya's.
                </p>
                <p>
                  That's why we don't offer generic sector expertise. We bring decades of in-region experience across 12 industries — each with its own nuances, competitive dynamics, and growth levers.
                </p>
                <p className="font-semibold text-text">
                  450+ engagements. 40+ countries. 100+ years of combined experience. This is what it means to understand MEA sectors at scale.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-bg-soft border-b border-border py-8">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '450+', label: 'Engagements Completed', accent: '#2B4A8C' },
              { num: '12', label: 'Sectors Covered', accent: '#7D2B5E' },
              { num: '40+', label: 'Countries Reached', accent: '#E8A020' },
              { num: '100+', label: 'Years Combined Experience', accent: '#047857' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-black text-[2.2rem] leading-none" style={{ color: s.accent }}>{s.num}</div>
                <div className="font-body text-[11px] text-text-muted uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Grid */}
      <section id="sectors" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Our Sectors</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Select a Sector to Explore</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Click any sector to explore what we research, our clients, and key engagements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector, i) => {
              const Icon = sector.icon
              return (
                <AnimatedSection key={sector.slug} delay={i * 0.04}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="group block relative overflow-hidden rounded-2xl border border-transparent hover:border-white/20 transition-all"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Background */}
                    {sector.image ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${sector.image})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: sector.gradient }} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon size={20} className="text-white" />
                        </div>
                        {sector.engagements && (
                          <span className="font-body text-[11px] font-medium text-white/70 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 border border-white/15">
                            {sector.engagements} engagements
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-[18px] text-white mb-1.5 leading-snug">{sector.name}</h3>
                        <p className="font-body text-[12px] text-white/55 leading-snug mb-3 line-clamp-2">{sector.tagline}</p>
                        <div className="flex items-center gap-1.5 font-body text-[13px] font-medium text-white/60 group-hover:text-white transition-colors">
                          Explore sector <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/20 transition-all pointer-events-none" />
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <span className="section-tag">Our Capabilities</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5">
                <GradientText hoverOnly animationSpeed={2}>What We Research Across Every Sector</GradientText>
              </h2>
              <p className="font-body text-text-muted leading-relaxed mb-8">
                Regardless of industry, our method-neutral approach means we design the right research for your specific challenge — combining quantitative, qualitative, and secondary research to deliver intelligence you can act on with confidence.
              </p>
              <PillButton href="/services" bgColor="#2B4A8C" textColor="#ffffff" fillColor="#E8A020" hoverTextColor="#1A1A2E" className="font-heading font-semibold text-[15px] px-7 py-3.5">
                View Our Services
              </PillButton>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {researchTypes.map((type, i) => {
                  const accents = ['#E8A020', '#2B4A8C', '#7D2B5E', '#047857', '#E8A020', '#2B4A8C', '#7D2B5E', '#047857']
                  return (
                    <div key={type} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border hover:border-primary/20 transition-colors">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: accents[i % accents.length] }} />
                      <span className="font-body text-[13.5px] text-text leading-snug">{type}</span>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="bg-white py-14 border-y border-border overflow-hidden">
        <div className="container-content mb-6 text-center">
          <p className="font-body text-[11px] font-semibold text-text-muted tracking-[0.14em] uppercase">
            Trusted by industry leaders across MEA
          </p>
        </div>
        <LogoStrip />
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Case Studies</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Intelligence in Action</GradientText>
                </h2>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 border border-border text-text font-body text-[14px] font-medium rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-all self-start md:self-auto">
                View All <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Retail',
                title: 'Identifying Locations to Expand a Grocery Store Network',
                excerpt: 'Geo-mapping exercise across Dubai and Abu Dhabi identified high-attractiveness clusters for new store openings.',
                accent: '#C2410C',
              },
              {
                tag: 'Fintech / Transport',
                title: 'Opportunity Assessment for Digitalization of Minibus Taxis',
                excerpt: 'Quantitative and qualitative research across 500+ commuters and taxi stakeholders in South Africa.',
                accent: '#1D4ED8',
              },
              {
                tag: 'Oil & Gas',
                title: 'Customer Satisfaction Study for a Major O&G Business in UAE',
                excerpt: 'Annual CX program across 10+ business lines. Findings contributed to the Dubai Quality Award.',
                accent: '#D97706',
              },
            ].map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-border h-full flex flex-col hover:shadow-md hover:border-primary/20 transition-all duration-300" style={{ borderTop: `3px solid ${cs.accent}` }}>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: cs.accent }}>{cs.tag}</span>
                    <h3 className="font-heading font-bold text-[16px] text-text leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                      {cs.title}
                    </h3>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed mb-5">{cs.excerpt}</p>
                    <Link href="/case-studies" className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium group-hover:gap-2.5 transition-all" style={{ color: cs.accent }}>
                      Read Case Study <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Sector Expertise Matters */}
      <section id="why-us" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Our Advantage</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Why Our Sector Expertise Matters</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Four reasons clients trust us with their most critical market questions.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { num: '01', title: 'We Don\'t Rely on Generic Models', desc: 'MEA markets defy global templates. What works in Europe or Asia often fails here. We bring localized insight — not imported assumptions.', accent: '#E8A020' },
              { num: '02', title: 'We Combine Macro Trends with Ground-Level Reality', desc: 'It\'s not enough to know the market size. You need to understand how decisions are actually made — by consumers, businesses, and regulators.', accent: '#2B4A8C' },
              { num: '03', title: 'We Speak the Language of Each Sector', desc: 'Our teams don\'t just collect data. They interpret it through the lens of industry experience — whether that\'s retail, oil and gas, or public sector strategy.', accent: '#7D2B5E' },
              { num: '04', title: 'We\'ve Seen What Works — and What Doesn\'t', desc: 'With 450+ engagements across 12 sectors, we don\'t just advise. We anticipate risks and opportunities before they become obvious.', accent: '#047857' },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-border hover:shadow-sm transition-all p-5 flex items-start gap-5">
                  <span className="font-heading font-black text-[52px] leading-none flex-shrink-0 w-16" style={{ color: item.accent }}>{item.num}</span>
                  <div className="flex-1 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1.5">
                      <h3 className="font-heading font-bold text-[16px] text-text">{item.title}</h3>
                      <div className="h-px flex-1 mx-4 bg-border hidden sm:block" />
                    </div>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{item.desc}</p>
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
              Explore How We Can Support Your Sector
            </h2>
            <p className="font-body text-white/55 text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
              4BC Global has executed 450+ engagements across MEA. Talk to us about your specific market — we'll design the right research approach for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#ffffff" hoverTextColor="#1A4FA0" className="font-heading font-semibold text-[15px] px-7 py-3.5">
                Start a Conversation
              </PillButton>
              <Link href="/case-studies" className="inline-flex items-center gap-2 border border-white/30 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors">
                See Our Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
