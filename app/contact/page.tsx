'use client'

import { useState } from 'react'
import {
  MapPin, Mail, Linkedin, ArrowRight, CheckCircle,
  Loader2, Clock, Users, Shield, MessageSquare,
  ChevronRight, Phone,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import Grainient from '@/components/Grainient'
import PillButton from '@/components/PillButton'

const serviceAreas = [
  'Business Research',
  'Customer Experience',
  'Market Entry Assessment',
  'Competitive Intelligence',
  'Impact Assessment',
  'Geolocation & Mapping',
  'Advisory / Strategy',
  'Other',
]

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
  'Egypt', 'Algeria', 'Morocco', 'Kenya', 'Ghana', 'South Africa',
  'India', 'Pakistan', 'United Kingdom', 'Other',
]

const hearAboutUs = [
  'LinkedIn', 'Google Search', 'Referral from a colleague', 'Industry event',
  'Existing client', 'Press / Media', 'Other',
]

const trustSignals = [
  {
    icon: Clock,
    title: 'Same-day response',
    desc: 'A research director reviews every enquiry and responds within the same business day.',
    color: '#1A4FA0',
  },
  {
    icon: Users,
    title: 'Senior-led research',
    desc: 'Every project is led by consultants with 15+ years of MEA market research experience.',
    color: '#2B7A6F',
  },
  {
    icon: Shield,
    title: 'No commitment required',
    desc: 'Share your challenge with us. We\'ll tell you honestly whether and how we can help.',
    color: '#7D2B5E',
  },
]

const steps = [
  { num: '01', label: 'Submit your brief', desc: 'Tell us what you need — no lengthy forms, just the essentials.' },
  { num: '02', label: 'Discovery call', desc: 'A 20-minute call with a senior researcher to scope your project.' },
  { num: '03', label: 'Tailored proposal', desc: 'A methodology and timeline built around your specific challenge.' },
  { num: '04', label: 'Research & delivery', desc: 'We execute and deliver findings your team can act on.' },
]

const officeLocations = [
  { city: 'Dubai', country: 'UAE', primary: true },
  { city: 'Riyadh', country: 'Saudi Arabia', primary: false },
  { city: 'Nairobi', country: 'Kenya', primary: false },
  { city: 'Mumbai', country: 'India', primary: false },
  { city: 'Algiers', country: 'Algeria', primary: false },
  { city: 'Cape Town', country: 'South Africa', primary: false },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '', company: '', jobTitle: '', email: '',
    phone: '', country: '', serviceArea: '', challenge: '', hearAbout: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = 'w-full border border-border rounded-xl px-4 py-3 font-body text-[14px] text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white'
  const labelClass = 'font-heading font-semibold text-[11px] text-text-muted uppercase tracking-wider block mb-1.5'

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <Grainient
            color1="#351e6b" color2="#9a4788" color3="#b19f2b"
            timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9}
            warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26}
            blendAngle={28} blendSoftness={0.39} rotationAmount={260}
            noiseScale={2} grainAmount={0.1} grainScale={2}
            contrast={1.5} gamma={1} saturation={1} zoom={0.9}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/25 to-dark/60 pointer-events-none" />

        {/* Decorative rings */}
        <div className="absolute right-0 top-0 w-[55%] h-full opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 600 700" className="w-full h-full" fill="none">
            <circle cx="500" cy="350" r="420" stroke="white" strokeWidth="1" />
            <circle cx="500" cy="350" r="290" stroke="white" strokeWidth="0.7" />
            <circle cx="500" cy="350" r="160" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container-content relative z-10 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="font-body text-[11px] font-medium text-white/75 tracking-widest uppercase">
                  Have a question or an idea you&apos;re exploring?
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-[2.4rem] sm:text-[3.2rem] md:text-[3.6rem] text-white leading-[1.05] tracking-[-0.035em] mb-5">
                Tell us what you&apos;re trying{' '}
                <span className="italic font-extrabold">to solve.</span>
              </h1>

              <p className="font-body text-[16px] sm:text-[17px] text-white/65 leading-relaxed max-w-[52ch] mb-8">
                Whether you&apos;re shaping a detailed research proposal or simply testing the waters — our senior team responds the same day because meaningful conversations are where great insights begin.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@4bcglobal.com"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-white/20 transition-all"
                >
                  <Mail size={13} /> info@4bcglobal.com
                </a>
                <a
                  href="https://www.linkedin.com/company/4bcglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-body text-[13px] font-medium rounded-full px-5 py-2.5 hover:bg-white/20 transition-all"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
              </div>
            </AnimatedSection>

            {/* Right — trust signals inline */}
            <AnimatedSection delay={0.12} className="hidden lg:block">
              <div className="space-y-4">
                {trustSignals.map((t) => (
                  <div key={t.title} className="flex items-start gap-4 bg-white/8 border border-white/12 backdrop-blur-sm rounded-2xl px-5 py-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${t.color}30`, border: `1px solid ${t.color}40` }}>
                      <t.icon size={16} style={{ color: '#ffffff' }} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[14px] text-white mb-0.5">{t.title}</h3>
                      <p className="font-body text-[12px] text-white/55 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,15 L1440,60 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST SIGNALS (mobile only) ─── */}
      <section className="lg:hidden bg-white py-10 px-4 border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {trustSignals.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-bg-soft border border-border">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${t.color}14`, border: `1px solid ${t.color}25` }}>
                    <t.icon size={18} style={{ color: t.color }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[14px] text-text mb-1">{t.title}</h3>
                    <p className="font-body text-[12px] text-text-muted leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-bg-soft section-padding border-b border-border" id="process">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <span className="section-tag">Process</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text tracking-[-0.025em] mt-2">
              <GradientText hoverOnly animationSpeed={2}>How it works</GradientText>
            </h2>
            <p className="font-body text-text-muted mt-3 max-w-xl">
              From your first message to final delivery — a simple, transparent process.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="relative bg-white p-7 h-full group hover:bg-primary/[0.02] transition-colors duration-200">
                  <span
                    className="font-heading font-extrabold text-[4.5rem] leading-none block mb-4 select-none transition-all duration-300"
                    style={{ color: 'rgba(26,79,160,0.10)' }}
                  >
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-[15px] text-text mb-2 group-hover:text-primary transition-colors">{step.label}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-border rounded-full items-center justify-center">
                      <ChevronRight size={13} className="text-text-muted" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="bg-white py-16 sm:py-20 px-4" id="brief">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">

            {/* ── Left — form ── */}
            <AnimatedSection>
              <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
                {/* Form header — dark */}
                <div className="relative overflow-hidden px-7 sm:px-8 py-7">
                  <div className="absolute inset-0">
                    <Grainient
                      color1="#0d1b3e" color2="#1A4FA0" color3="#0d2b5c"
                      timeSpeed={1.2} colorBalance={0.2} warpStrength={0.8}
                      warpFrequency={2.5} warpSpeed={0.3} warpAmplitude={12}
                      blendAngle={45} blendSoftness={0.5} rotationAmount={120}
                      noiseScale={1.5} grainAmount={0.08} grainScale={1.5}
                      contrast={1.3} gamma={1} saturation={0.7} zoom={1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
                  <div className="relative z-10">
                    <span className="font-body text-[10px] font-semibold text-white/50 uppercase tracking-widest block mb-1.5">Submit your brief</span>
                    <h2 className="font-heading font-bold text-[1.6rem] sm:text-[1.8rem] text-white tracking-[-0.02em] mb-1.5">
                      Share your challenge with us
                    </h2>
                    <p className="font-body text-[13px] text-white/60">
                      Fill in the form below — we&apos;ll respond within the same business day.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                      <CheckCircle size={30} className="text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-text mb-2">Brief received.</h3>
                    <p className="font-body text-[14px] text-text-muted max-w-[36ch] leading-relaxed">
                      A research director will review your challenge personally and get back to you the same day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-body font-medium text-[13px] text-text-muted border border-border rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-all"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-7 sm:px-8 py-7 space-y-6">

                    {/* Section: About you */}
                    <div>
                      <p className="font-heading font-semibold text-[10px] text-primary uppercase tracking-widest mb-4 pb-2 border-b border-border">About you</p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Full Name <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                            <input name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Sarah Johnson" className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Company <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                            <input name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputClass} />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Job Title</label>
                          <input name="jobTitle" type="text" value={form.jobTitle} onChange={handleChange} placeholder="Head of Strategy" className={inputClass} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Business Email <span className="text-red-400 normal-case font-normal tracking-normal">*</span></label>
                            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="sarah@company.com" className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Phone <span className="text-text-muted/40 normal-case font-normal tracking-normal">(optional)</span></label>
                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" className={inputClass} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section: Your project */}
                    <div>
                      <p className="font-heading font-semibold text-[10px] text-primary uppercase tracking-widest mb-4 pb-2 border-b border-border">Your project</p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Country</label>
                            <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
                              <option value="">Select country</option>
                              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Service Area</label>
                            <select name="serviceArea" value={form.serviceArea} onChange={handleChange} className={inputClass}>
                              <option value="">Select service</option>
                              {serviceAreas.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>
                            What is the business challenge you are facing?{' '}
                            <span className="text-red-400 normal-case font-normal tracking-normal">*</span>
                          </label>
                          <textarea
                            name="challenge" required rows={5}
                            value={form.challenge} onChange={handleChange}
                            placeholder="Describe the challenge or question you need answered — e.g. entering a new market, understanding customer behaviour, sizing an opportunity, assessing competitive landscape..."
                            className={`${inputClass} resize-none leading-relaxed`}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>How did you hear about us? <span className="text-text-muted/40 normal-case font-normal tracking-normal">(optional)</span></label>
                          <select name="hearAbout" value={form.hearAbout} onChange={handleChange} className={inputClass}>
                            <option value="">Select one</option>
                            {hearAboutUs.map((h) => <option key={h} value={h}>{h}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-white font-heading font-bold text-[15px] rounded-full px-8 py-4 hover:bg-primary/90 hover:shadow-lg shadow-md hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <><Loader2 size={16} className="animate-spin" /> Sending your brief…</>
                        ) : (
                          <>Send Your Brief <ArrowRight size={16} /></>
                        )}
                      </button>
                      <p className="font-body text-[11px] text-text-muted text-center mt-3 leading-relaxed">
                        No commitment required · We respond within the same business day · Your information is kept confidential
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* ── Right — info sidebar ── */}
            <div className="space-y-5">

              {/* Contact card */}
              <AnimatedSection delay={0.15}>
                <div className="bg-white border border-border rounded-3xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-[15px] text-text mb-5 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <MessageSquare size={13} className="text-primary" />
                    </div>
                    Contact Us Directly
                  </h3>
                  <div className="space-y-3">
                    <a href="mailto:info@4bcglobal.com" className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                        <Mail size={15} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-[11px] text-text-muted uppercase tracking-wider mb-0.5">Email</p>
                        <p className="font-body text-[13px] text-primary font-medium">info@4bcglobal.com</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/4bcglobal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                        <Linkedin size={15} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-[11px] text-text-muted uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <p className="font-body text-[13px] text-primary font-medium">Follow 4BC Global</p>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Offices */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white border border-border rounded-3xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-[15px] text-text mb-1 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <MapPin size={13} className="text-primary" />
                    </div>
                    Our Offices
                  </h3>
                  <p className="font-body text-[12px] text-text-muted mb-4 pl-9">Serving MEA clients across 40+ countries</p>
                  <div className="space-y-2">
                    {officeLocations.map((loc) => (
                      <div
                        key={loc.city}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 ${loc.primary ? 'bg-primary/8 border border-primary/15' : 'bg-bg-soft border border-border'}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${loc.primary ? 'bg-primary' : 'bg-border'}`} />
                          <span className="font-heading font-semibold text-[13px] text-text">{loc.city}</span>
                        </div>
                        <span className={`font-body text-[11px] ${loc.primary ? 'text-primary font-medium' : 'text-text-muted'}`}>
                          {loc.country}{loc.primary ? ' · HQ' : ''}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Partner office addresses */}
                  <div className="mt-5 pt-5 border-t border-border space-y-4">
                    <p className="font-heading font-semibold text-[10px] text-text-muted uppercase tracking-wider">Partner Offices</p>

                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted/60 mb-1.5">🇸🇦 Riyadh, Saudi Arabia</p>
                      <div className="flex items-start gap-2 font-body text-[12px] text-text-muted mb-1">
                        <MapPin size={11} className="flex-shrink-0 mt-0.5 text-[#E8A020]" />
                        <span>Office 703, 7th Floor Aqarya #3, Olaya, Riyadh, KSA</span>
                      </div>
                      <div className="flex items-center gap-2 font-body text-[12px] text-text-muted">
                        <Mail size={11} className="flex-shrink-0 text-[#E8A020]" />
                        <a href="mailto:info@4bcglobal.com" className="hover:text-primary transition-colors">info@4bcglobal.com</a>
                      </div>
                    </div>

                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted/60 mb-1.5">🇬🇧 United Kingdom</p>
                      <div className="flex items-start gap-2 font-body text-[12px] text-text-muted mb-1">
                        <MapPin size={11} className="flex-shrink-0 mt-0.5 text-[#E8A020]" />
                        <span>2 Thames Road, Langley, Slough, SL3 8DY, United Kingdom</span>
                      </div>
                      <div className="flex items-center gap-2 font-body text-[12px] text-text-muted">
                        <Phone size={11} className="flex-shrink-0 text-[#E8A020]" />
                        <a href="tel:+441753777999" className="hover:text-primary transition-colors">+44 1753 777999</a>
                      </div>
                      <div className="flex items-center gap-2 font-body text-[12px] text-text-muted">
                        <Mail size={11} className="flex-shrink-0 text-[#E8A020]" />
                        <a href="mailto:info@4bcglobal.com" className="hover:text-primary transition-colors">info@4bcglobal.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quote card */}
              <AnimatedSection delay={0.25}>
                <div className="relative overflow-hidden rounded-3xl p-6">
                  <div className="absolute inset-0">
                    <Grainient
                      color1="#351e6b" color2="#9a4788" color3="#b19f2b"
                      timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9}
                      warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26}
                      blendAngle={28} blendSoftness={0.39} rotationAmount={260}
                      noiseScale={2} grainAmount={0.1} grainScale={2}
                      contrast={1.5} gamma={1} saturation={1} zoom={0.9}
                    />
                  </div>
                  <div className="absolute inset-0 bg-dark/45 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-accent text-5xl font-heading leading-none mb-2 opacity-50">&ldquo;</div>
                    <p className="font-heading italic text-[14px] text-white/85 leading-relaxed mb-4">
                      Whether you need a quick market snapshot or a detailed market entry strategy development — we&apos;re ready to design the right research for you.
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                        <Users size={12} className="text-white" />
                      </div>
                      <span className="font-body text-[12px] text-white/60">4BC Global Senior Team</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden section-padding section-dark">
        <div className="absolute inset-0">
          <Grainient
            color1="#351e6b" color2="#9a4788" color3="#b19f2b"
            timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9}
            warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26}
            blendAngle={28} blendSoftness={0.39} rotationAmount={260}
            noiseScale={2} grainAmount={0.1} grainScale={2}
            contrast={1.5} gamma={1} saturation={1} zoom={0.9}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center max-w-xl">
          <AnimatedSection>
            <span className="font-body text-[11px] font-semibold text-white/45 uppercase tracking-widest block mb-3">Prefer email?</span>
            <h2 className="font-heading font-bold text-[1.8rem] sm:text-[2.2rem] text-white tracking-[-0.025em] mb-4">
              Reach us directly.
            </h2>
            <p className="font-body text-[15px] text-white/60 leading-relaxed mb-8">
              Send a message directly to our team — no auto-responders, no waiting rooms.
            </p>
            <PillButton
              href="mailto:info@4bcglobal.com"
              bgColor="#E8A020"
              textColor="#1A1A2E"
              fillColor="#ffffff"
              hoverTextColor="#1A4FA0"
              className="font-heading font-semibold text-[15px] px-7 py-3.5"
            >
              Email Us Directly
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
