import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import { sectors, getSectorBySlug } from '@/lib/sectors-data'
import Grainient from '@/components/Grainient'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return {}
  return {
    title: `${sector.name} — 4BC Global`,
    description: sector.description,
  }
}

export default function SectorPage({ params }: Props) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) notFound()

  const Icon = sector.icon
  const currentIndex = sectors.findIndex((s) => s.slug === sector.slug)
  const prevSector = currentIndex > 0 ? sectors[currentIndex - 1] : null
  const nextSector = currentIndex < sectors.length - 1 ? sectors[currentIndex + 1] : null

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[480px] sm:min-h-[560px] flex items-end overflow-hidden">
        {sector.image ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${sector.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0" style={{ background: sector.gradient }} />
        )}

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 container-content pb-16 pt-32 sm:pt-40 w-full">
          <AnimatedSection>
            {/* Back link */}
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white font-body text-[13px] mb-10 transition-colors group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              All Sectors
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-end">
              {/* Left — title */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  {sector.engagements && (
                    <span className="font-body text-[11px] font-semibold text-white/60 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1 uppercase tracking-wider">
                      {sector.engagements} engagements
                    </span>
                  )}
                </div>
                <h1 className="font-heading font-bold text-[36px] sm:text-[48px] lg:text-[56px] text-white leading-[1.05] tracking-[-0.02em] mb-4">
                  {sector.name}
                </h1>
                <p className="font-body text-[16px] text-white/65 leading-relaxed max-w-xl">
                  {sector.tagline}
                </p>
              </div>

              {/* Right — research pills */}
              <div className="hidden lg:block">
                <p className="font-body text-[10px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-3">
                  What we research
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.researchList.map((item) => (
                    <span
                      key={item}
                      className="font-body text-[12px] text-white/75 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Wave */}
        <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 70" className="w-full block" preserveAspectRatio="none">
            <path d="M0,70 L0,35 Q360,0 720,35 Q1080,70 1440,25 L1440,70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — intro */}
            <AnimatedSection>
              <span className="section-tag">Overview</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5">
                <GradientText hoverOnly animationSpeed={2}>Our {sector.name} Practice</GradientText>
              </h2>
              <p className="font-body text-[15px] text-text-muted leading-relaxed mb-5">
                {sector.intro ?? sector.description}
              </p>
              <p className="font-body text-[14px] text-text-muted leading-relaxed mb-8">
                Every engagement is led by a research director with deep regional expertise. We design bespoke research solutions tailored to the specific dynamics of {sector.name.toLowerCase()} markets across MEA.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] rounded-full px-7 py-3.5 text-white transition-all hover:opacity-90"
                style={{ backgroundColor: sector.accentHex }}
              >
                Discuss Your Project <ArrowRight size={15} />
              </Link>
            </AnimatedSection>

            {/* Right — what we uncover */}
            <AnimatedSection delay={0.15}>
              <span className="section-tag">What We Uncover</span>
              <h2 className="font-heading font-bold text-3xl text-text mb-6">
                <GradientText hoverOnly animationSpeed={2}>
                  {sector.whatWeUncover ? 'Key Questions We Answer' : 'Research Capabilities'}
                </GradientText>
              </h2>
              {sector.whatWeUncover ? (
                <div className="space-y-3">
                  {sector.whatWeUncover.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-bg-soft hover:border-primary/20 transition-colors">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: sector.accentHex }} />
                      <div>
                        <span className="font-body font-semibold text-[13.5px] text-text">{item.name}</span>
                        <span className="font-body text-[13px] text-text-muted"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {sector.researchList.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-bg-soft hover:border-primary/20 transition-colors">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: sector.accentHex }} />
                      <span className="font-body text-[14px] text-text">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RECENT ENGAGEMENTS ── */}
      {sector.recentEngagements && sector.recentEngagements.length > 0 && (
        <section className="bg-bg-soft section-padding">
          <div className="container-content">
            <AnimatedSection className="mb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="section-tag">Recent Work</span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                    <GradientText hoverOnly animationSpeed={2}>Recent Engagements</GradientText>
                  </h2>
                </div>
                <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                  A selection of recent projects in this sector.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sector.recentEngagements.map((eng, i) => {
                const colonIndex = eng.indexOf(': ')
                const location = colonIndex > -1 ? eng.substring(0, colonIndex) : ''
                const detail = colonIndex > -1 ? eng.substring(colonIndex + 2) : eng
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl border border-border p-6 h-full" style={{ borderLeft: `4px solid ${sector.accentHex}` }}>
                      {location && (
                        <span className="font-heading font-bold text-[12px] uppercase tracking-[0.1em] block mb-2" style={{ color: sector.accentHex }}>
                          {location}
                        </span>
                      )}
                      <p className="font-body text-[14px] text-text-muted leading-relaxed">{detail}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── KEY ENGAGEMENTS ── */}
      {sector.engagementsList.length > 0 && (
        <section className={`${sector.recentEngagements && sector.recentEngagements.length > 0 ? 'bg-white' : 'bg-bg-soft'} section-padding`}>
          <div className="container-content">
            <AnimatedSection className="mb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="section-tag">Our Work</span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                    <GradientText hoverOnly animationSpeed={2}>Key Engagements</GradientText>
                  </h2>
                </div>
                <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                  A sample of research projects we have executed in this sector.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sector.engagementsList.map((eng, i) => (
                <AnimatedSection key={eng} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-heading font-bold text-[12px]"
                      style={{ backgroundColor: sector.accentHex }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-body text-[14px] text-text-muted leading-relaxed pt-0.5">{eng}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CLIENTS ── */}
      {(sector.logoImages.length > 0 || sector.clientList.length > 0) && (
        <section className="bg-bg-soft section-padding">
          <div className="container-content">
            <AnimatedSection className="mb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="section-tag">Clients</span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                    <GradientText hoverOnly animationSpeed={2}>Who We've Worked With</GradientText>
                  </h2>
                </div>
                <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                  A selection of clients we have served in this sector.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              {sector.logoImages.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {sector.logoImages.map((src, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center bg-white border border-border rounded-2xl p-5 h-24 hover:border-primary/25 hover:shadow-sm transition-all duration-200"
                    >
                      <Image
                        src={src}
                        alt={`Client logo ${i + 1}`}
                        width={140}
                        height={70}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {sector.clientList.map((client) => (
                    <div
                      key={client}
                      className="font-heading font-semibold text-[13px] text-text bg-white border border-border rounded-xl px-5 py-3 hover:border-primary/30 transition-all"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10 text-center">
          <AnimatedSection>
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get Started</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Start a {sector.name} Research Project?
            </h2>
            <p className="font-body text-white/55 text-[16px] max-w-lg mx-auto mb-10 leading-relaxed">
              Our senior team has deep experience in this sector. Let's talk about what you need.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] rounded-full px-7 py-3.5 text-white transition-all hover:opacity-90"
                style={{ backgroundColor: sector.accentHex }}
              >
                Discuss Your Project <ArrowRight size={15} />
              </Link>
              <Link
                href="/sectors"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                All Sectors <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTOR NAVIGATION ── */}
      <section className="bg-white border-t border-border py-8">
        <div className="container-content">
          <div className="flex items-center justify-between gap-4">
            {prevSector ? (
              <Link
                href={`/sectors/${prevSector.slug}`}
                className="group flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-full border border-border group-hover:border-primary/30 flex items-center justify-center transition-colors">
                  <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-body text-[10px] uppercase tracking-wider text-text-muted/60 mb-0.5">Previous</div>
                  <div className="font-heading font-semibold text-[14px]">{prevSector.name}</div>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/sectors"
              className="font-body text-[13px] font-medium text-text-muted hover:text-primary transition-colors"
            >
              All Sectors
            </Link>

            {nextSector ? (
              <Link
                href={`/sectors/${nextSector.slug}`}
                className="group flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
              >
                <div className="hidden sm:block text-right">
                  <div className="font-body text-[10px] uppercase tracking-wider text-text-muted/60 mb-0.5">Next</div>
                  <div className="font-heading font-semibold text-[14px]">{nextSector.name}</div>
                </div>
                <div className="w-9 h-9 rounded-full border border-border group-hover:border-primary/30 flex items-center justify-center transition-colors">
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
