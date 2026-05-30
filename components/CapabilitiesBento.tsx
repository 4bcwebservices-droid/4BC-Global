'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Users, BarChart2, MapPin, Lightbulb, ArrowRight } from 'lucide-react'

const serviceAreas = [
  {
    id: 'business-research',
    icon: Search,
    title: 'Business Research',
    color: '#4F7BE8',
    image: '/capabilities/business-research.jpg',
    href: '/services#business-research',
    desc: 'End-to-end market intelligence — from landscape mapping to strategic entry decisions.',
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
    title: 'CX & Experience',
    color: '#C45FA0',
    image: '/capabilities/cx.jpg',
    href: '/services#customer-experience',
    desc: 'Understanding what customers truly think — not just what they say.',
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
    image: '/capabilities/impact-assessment.jpg',
    href: '/services#impact-assessment',
    desc: 'Evidence-backed measurement of economic, social, and reputational value.',
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
    color: '#3BBFA3',
    image: '/capabilities/geolocation.jpg',
    href: '/services#geolocation-services',
    desc: 'Spatial intelligence that turns location data into network strategy, powered by our proprietary 4BC Landscape platform.',
    services: [
      'Catchment Area Assessment',
      'Network Planning — New Location Evaluation',
      'Branch Optimization',
      'Promotion / Event Performance Measurement',
    ],
  },
  {
    id: 'specialist-areas',
    icon: Lightbulb,
    title: 'Other Specialist Areas',
    color: '#C45FA0',
    image: '/capabilities/advisory.jpg',
    href: '/services#specialist-areas',
    desc: 'Proprietary platforms and specialist methodologies for complex research needs.',
    services: [
      'Concept Evaluation',
      'InfUSE — Secondary research-based intelligence solution',
      'Counterfeit Assessment',
      'Co-creation Workshops for Business Strategy',
    ],
  },
]

const MAX_SERVICES = 8
const PANEL_HEIGHT = 460

export default function CapabilitiesBento() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setActive((prev) => (prev + 1) % serviceAreas.length)
    }, 4000)
    return () => clearTimeout(t)
  }, [paused, active])

  const handleTabClick = (i: number) => {
    setActive(i)
    setPaused(true)
  }

  return (
    <>
      <style>{`
        @keyframes tabProgress { from { width: 0% } to { width: 100% } }
        @keyframes bentoFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
      <div
        className="rounded-3xl overflow-hidden border border-border shadow-sm bg-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── Tab bar ── */}
        <div className="flex flex-wrap gap-0 border-b border-border bg-bg-soft">
          {serviceAreas.map((s, i) => {
            const TabIcon = s.icon
            const isActive = i === active
            return (
              <button
                key={s.id}
                onClick={() => handleTabClick(i)}
                className="relative flex items-center gap-2 px-5 py-4 font-body text-[12.5px] font-medium flex-1 justify-center md:justify-start whitespace-nowrap"
                style={{
                  color: isActive ? s.color : '#94a3b8',
                  background: isActive ? '#ffffff' : 'transparent',
                  transition: 'color 0.3s ease, background 0.3s ease',
                }}
              >
                {isActive && (
                  <span
                    key={`prog-${active}`}
                    className="absolute bottom-0 left-0 h-[2px] rounded-full"
                    style={{
                      backgroundColor: s.color,
                      animation: paused ? 'none' : 'tabProgress 4s linear forwards',
                      width: paused ? '100%' : undefined,
                    }}
                  />
                )}
                <TabIcon size={14} style={{ flexShrink: 0 }} />
                <span className="hidden sm:block">{s.title}</span>
              </button>
            )
          })}
        </div>

        {/* ── Panel — fixed height, all tabs stacked ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px]">

          {/* Left content */}
          <div className="relative" style={{ height: PANEL_HEIGHT }}>
            {serviceAreas.map((area, i) => {
              const isActive = i === active
              const Icon = area.icon
              const shown = area.services.slice(0, MAX_SERVICES)
              const extra = area.services.length - MAX_SERVICES

              return (
                <div
                  key={area.id}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between gap-6"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${area.color}15`, border: `1px solid ${area.color}30` }}
                      >
                        <Icon size={18} style={{ color: area.color }} />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] mb-0.5" style={{ color: area.color }}>
                          Core Service Area {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-heading font-bold text-[22px] text-text leading-tight">{area.title}</h3>
                      </div>
                    </div>

                    <p className="font-body text-[14px] text-text-muted leading-relaxed mb-6 max-w-[44ch]">{area.desc}</p>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {shown.map((s) => (
                        <div key={s} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: area.color }} />
                          <span className="font-body text-[12.5px] text-text-muted leading-snug">{s}</span>
                        </div>
                      ))}
                    </div>

                    {extra > 0 && (
                      <Link
                        href={area.href}
                        className="inline-flex items-center gap-1 font-body text-[12px] mt-3"
                        style={{ color: area.color }}
                      >
                        +{extra} more <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>

                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 font-body text-[13px] font-medium rounded-full px-6 py-2.5 self-start transition-all duration-200 hover:brightness-95"
                    style={{ backgroundColor: `${area.color}12`, color: area.color, border: `1px solid ${area.color}30` }}
                  >
                    Explore {area.title} <ArrowRight size={13} />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block" style={{ height: PANEL_HEIGHT }}>
            {serviceAreas.map((area, i) => {
              const isActive = i === active
              return (
                <div
                  key={area.id}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${area.image})`,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              )
            })}
          </div>

        </div>

        {/* ── Bottom strip ── */}
        <div className="border-t border-border grid grid-cols-2 sm:grid-cols-5 divide-x divide-border bg-bg-soft">
          {serviceAreas.map((s, i) => {
            const SmallIcon = s.icon
            const isActive = i === active
            return (
              <button
                key={s.id}
                onClick={() => handleTabClick(i)}
                className="flex flex-col items-center gap-1.5 py-4 px-3"
                style={{
                  background: isActive ? `${s.color}10` : 'transparent',
                  transition: 'background 0.3s ease',
                }}
              >
                <SmallIcon size={16} style={{ color: isActive ? s.color : '#94a3b8', transition: 'color 0.3s ease' }} />
                <span className="font-body text-[10px] text-center leading-tight" style={{ color: isActive ? s.color : '#94a3b8', transition: 'color 0.3s ease' }}>
                  {s.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
