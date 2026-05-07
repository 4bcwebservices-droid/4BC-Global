import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import PageHeader from '@/components/PageHeader'
import TeamCard from '@/components/TeamCard'
import type { TeamMember } from '@/components/TeamCard'
import Grainient from '@/components/Grainient'
import { OpenContactButton } from '@/components/OpenContactButton'

export const metadata: Metadata = {
  title: 'About 4BC Global — Born From Excellence. Built For What\'s Next.',
  description: 'Founded by the leadership team that built Kantar MENA\'s fastest-growing research unit. 450+ engagements, 40+ markets, 100+ years of combined expertise across MEA.',
}

const regions = [
  { region: 'GCC', countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain' },
  { region: 'Levant & Wider Region', countries: 'Lebanon, Jordan, Iraq, Iran' },
  { region: 'Africa', countries: 'Egypt, Algeria, Morocco, Kenya, Ghana, South Africa, DRC and others' },
  { region: 'Asia', countries: 'India, Pakistan, Sri Lanka, Bangladesh, Thailand' },
  { region: 'Europe', countries: 'UK' },
]

const values = [
  {
    num: '01',
    title: 'Method Neutral',
    desc: 'We start with your business question, not a pre-packaged methodology. The research approach is always determined by the challenge — never the other way around.',
    accent: '#E8A020',
  },
  {
    num: '02',
    title: 'Ground-Level Expertise',
    desc: 'Our insights are built on fieldwork and primary evidence, not downloaded reports. We operate in the market — not from a distance.',
    accent: '#2B4A8C',
  },
  {
    num: '03',
    title: 'Bespoke by Design',
    desc: 'Every engagement is architected around your unique challenge, your market, and your objective. No templates. No off-the-shelf thinking.',
    accent: '#7D2B5E',
  },
  {
    num: '04',
    title: 'AI-Integrated',
    desc: 'We deploy AI where it accelerates value — faster synthesis, sharper pattern recognition, richer secondary intelligence. Judgement remains human.',
    accent: '#1A7A5E',
  },
  {
    num: '05',
    title: 'Bilingual Authority',
    desc: 'Fluent in English and Arabic. Deeply fluent in cultural translation — understanding what data means in the human context of each market.',
    accent: '#4A3AAA',
  },
]

const howWeWork = [
  {
    num: '01',
    title: 'Diagnose First',
    desc: 'Deep understanding of your business challenge through structured discovery. We ask the right questions before we prescribe any solution.',
    bg: 'bg-amber-50', border: 'border-amber-200', numColor: 'text-amber-300', titleColor: 'text-amber-900',
  },
  {
    num: '02',
    title: 'Design the Methodology',
    desc: 'Craft the optimal research approach based on your core objective, available information, market complexity, and practical constraints.',
    bg: 'bg-blue-50', border: 'border-blue-200', numColor: 'text-blue-300', titleColor: 'text-blue-900',
  },
  {
    num: '03',
    title: 'Blend Techniques',
    desc: 'Most engagements benefit from a strategic combination: quantitative breadth, qualitative depth, targeted secondary intelligence, and bespoke techniques designed for your specific market.',
    bg: 'bg-purple-50', border: 'border-purple-200', numColor: 'text-purple-300', titleColor: 'text-purple-900',
  },
  {
    num: '04',
    title: 'Deliver What Moves Decisions',
    desc: 'Our output is built to be used — clear, precise, and directly actionable by leadership teams making real commercial decisions.',
    bg: 'bg-emerald-50', border: 'border-emerald-200', numColor: 'text-emerald-300', titleColor: 'text-emerald-900',
  },
]

const team: TeamMember[] = [
  {
    name: 'Sukhdev Singh',
    title: 'Partner, Insights & Strategy',
    photo: '/team/sukhdev-singh.png',
    shortBio: 'Head of Business Research and Consulting practice in MEA. 25+ years of experience across Africa, Middle East, Asia and Far-East Asian markets.',
    fullBio: 'Sukhdev is the head of Business Research and Consulting practice in the MEA region. He headed the same practice at Kantar MEA since 2007, building it into the region\'s fastest-growing and most profitable research unit. He possesses over 25 years of experience in Africa & Middle East, Asia and Far-East Asian markets — specialising in market entry strategy, B2B research, government sector advisory, and stakeholder engagement.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'Stakeholder Engagement'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights',
    photo: '/team/siva-sankar.png',
    shortBio: 'More than a decade of experience in business and industrial research across the Middle East, North Africa, India, China, Russia, and Turkey.',
    fullBio: 'Siva has more than a decade of rich experience in Business and Industrial Research across the Middle East, North Africa, India, China, Russia, and Turkey. Deep expertise in market sizing, competitive analysis, geo-mapping, and regulatory intelligence. He has helped clients with market entry and business expansion strategies across opportunity assessment, new product development, channel assessment, network development, and geo-mapping.',
    expertise: ['Market Sizing', 'Competitive Analysis', 'Geo-mapping', 'Regulatory Intelligence'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights',
    photo: '/team/sandeep-vaddey.png',
    shortBio: '19+ years of research and consulting experience across the Middle East, Africa, Turkey, and Russia. Specialist in oil and gas, energy, construction, and ICT sectors.',
    fullBio: 'Sandeep has more than 19 years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia, with proven expertise in complex feasibility and market assessment studies. He has advised clients across Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, and ICT — specialising in Market Assessment, Market Entry, Market Expansion, New Product Development, and Geo-mapping.',
    expertise: ['Oil & Gas', 'Energy', 'Market Assessment', 'Feasibility Studies'],
  },
  {
    name: 'Angad Kenghe',
    title: 'Senior Manager, Insights',
    photo: '/team/angad-kenghe.png',
    shortBio: '5+ years of diverse research experience across consumer insights, business research, videometrics, and retail panel-based methodology.',
    fullBio: 'Angad comes with over 5+ years of diverse research experience across consumer insights, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses as well as large players, spanning MEA, US & Europe, and India regions. He has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, feasibility, mystery shopping, and customer experience.',
    expertise: ['Consumer Insights', 'Mystery Shopping', 'Competitor Landscape', 'New Product Development'],
  },
  {
    name: 'Tarun Sinhal',
    title: 'Senior Consultant',
    photo: '/team/tarun-sinhal.png',
    shortBio: '18+ years of experience in Market Research across Middle East, Africa, India. Expert in Branding, Communication, Demand Estimation, Pricing, and Channel Dynamics.',
    fullBio: 'Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including exposure to research projects in North America. He has worked on custom research projects across Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Unilever, Daimler, LG, Samsung, Kia Motors, Al-Futtaim, du, Etisalat, and Government entities.',
    expertise: ['Branding Research', 'Demand Estimation', 'Pricing Studies', 'Channel Dynamics'],
  },
  {
    name: 'Anu Param',
    title: 'Sr. Project Management Executive',
    photo: '/team/anu-param.png',
    shortBio: '15+ years in the MR industry. End-to-end client servicing across Telecom, Finance, Retail, and Auto.',
    fullBio: 'Anu has over 15 years in the MR industry, working within Business Consulting since 2020. She is responsible for end-to-end client servicing from project management through final reports — covering questionnaire scripting, interviewer briefing, fieldwork quality monitoring, vendor management, and client coordination across Telecom, Financial Services, Retail, and Auto.',
    expertise: ['Project Management', 'Field Operations', 'Questionnaire Design', 'Client Coordination'],
  },
  {
    name: 'Vamsi Ganti',
    title: 'Senior Consultant',
    photo: '/team/vamsi-ganti.png',
    shortBio: '15+ years specializing in Customer Experience — relationship assessment, mystery shopping, employee engagement.',
    fullBio: 'Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, and employee engagement studies. He has developed CX programs across Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies — and conducts client engagement workshops to drive CX adoption across organizations.',
    expertise: ['Customer Experience', 'Mystery Shopping', 'Employee Engagement', 'CX Workshops'],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        headline="Born From Excellence."
        subheadline="Built For What's Next."
      />

      {/* Sub-nav */}
      <nav className="bg-white border-b border-border sticky top-16 lg:top-[72px] z-30">
        <div className="container-content">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm font-heading font-medium text-text-muted">
            {[
              { label: 'Our Story', href: '#our-story' },
              { label: 'What We Stand For', href: '#what-we-stand-for' },
              { label: 'Why MEA', href: '#why-mea' },
              { label: 'Our Reach', href: '#geographical-footprint' },
              { label: 'The Team', href: '#our-team' },
              { label: 'How We Work', href: '#how-we-work' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="whitespace-nowrap hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Our Story ── */}
      <section id="our-story" className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">

            {/* Left — narrative */}
            <AnimatedSection>
              <span className="section-tag">Our Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-8">
                <GradientText hoverOnly animationSpeed={2}>Born From Excellence. Built For What's Next.</GradientText>
              </h2>
              <div className="space-y-5 font-body text-text-muted leading-relaxed text-[16px]">
                <p>
                  In 2007, a small focused team within Kantar MENA started doing something different. Not just conducting research — but establishing a new standard for what market intelligence could look like across the Middle East and Africa.
                </p>
                <p>
                  Over the next thirteen years, that team became Kantar MENA's fastest-growing and most profitable research unit. They advised global multinationals, regional conglomerates, and national governments across 40+ markets. They built a reputation for rigour, for listening deeply, and for delivering insight that actually changed decisions.
                </p>
                <p>
                  Then, in 2020, the entire team made a deliberate choice.
                </p>
                <p>
                  They stepped out as one — people, clients, case studies, methodologies, expertise — and founded 4BC Global.
                </p>
                <p className="font-heading font-semibold text-text text-[18px]">
                  Not to start from scratch. But to evolve.
                </p>
                <p>
                  We carried our DNA forward. We left the limitations behind.
                </p>
              </div>

              {/* Principles callout */}
              <div className="mt-10 rounded-2xl border border-primary/20 overflow-hidden">
                <div className="bg-primary/8 border-b border-primary/15 px-6 py-4">
                  <p className="font-heading font-bold text-[20px] text-primary">Method Neutral. Ground-Level. Bespoke.</p>
                  <p className="font-body text-[13px] text-text-muted mt-1">The three principles that have guided us since day one.</p>
                </div>
                <div className="bg-white px-6 py-5 space-y-3 font-body text-[14px] text-text-muted leading-relaxed">
                  <p>
                    We start with your business question, not a pre-packaged methodology. We build insight on the ground, in the market, not in databases alone. And we design every engagement from the ground up around your specific challenge, your market, and your objective.
                  </p>
                  <p>
                    No templates. No off-the-shelf thinking. No corporate frameworks that force a square brief into a round solution.
                  </p>
                  <p className="text-text font-medium">
                    This is what independence gives us. The freedom to listen first, design second, and deliver with precision that only comes when there's true accountability for the work.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — timeline + quote */}
            <AnimatedSection delay={0.15} className="lg:sticky lg:top-32">
              {/* Timeline */}
              <div className="rounded-2xl border border-border bg-bg-soft p-6 mb-6">
                <p className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-text-muted mb-6">Our Journey</p>
                <div className="space-y-0">
                  {[
                    { year: '2007', title: 'The Beginning', desc: 'A focused team inside Kantar MENA sets a new standard for MEA intelligence.' },
                    { year: '2013', title: 'Regional Leadership', desc: 'Become Kantar MENA\'s fastest-growing and most profitable research unit.' },
                    { year: '2020', title: '4BC Global Founded', desc: 'The entire team steps out as one — people, clients, methodologies, expertise.' },
                    { year: 'Now', title: 'Built For What\'s Next', desc: '450+ engagements. 40+ markets. Still evolving.' },
                  ].map((m, i, arr) => (
                    <div key={m.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
                      </div>
                      <div className={`pb-6 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                        <span className="font-heading font-black text-[13px] text-primary">{m.year}</span>
                        <p className="font-heading font-semibold text-[14px] text-text mt-0.5">{m.title}</p>
                        <p className="font-body text-[12px] text-text-muted mt-1 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founding quote */}
              <blockquote className="rounded-2xl bg-accent/10 border border-accent/25 p-6">
                <p className="font-heading italic text-[16px] text-text leading-relaxed mb-3">
                  "We didn't just bring our clients with us. We brought the mission."
                </p>
                <cite className="font-body text-[12px] text-text-muted/70 not-italic">— Founding Team, 4BC Global</cite>
              </blockquote>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section id="what-we-stand-for" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">What We Stand For</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>These aren't values on a wall.<br />They shape how we work.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Five principles embedded in every engagement we take on.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-border hover:border-border hover:shadow-sm transition-all p-5 flex items-start gap-5">
                  <span className="font-heading font-black text-[52px] leading-none flex-shrink-0 w-16" style={{ color: v.accent }}>{v.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                      <h3 className="font-heading font-bold text-[16px] text-text">{v.title}</h3>
                      <div className="h-px flex-1 mx-4 bg-border hidden sm:block" />
                    </div>
                    <p className="font-body text-[13px] text-text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MEA ── */}
      <section id="why-mea" className="relative section-dark section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <AnimatedSection>
              <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Why MEA Demands Something Different</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8 leading-tight">
                These are not markets you understand from a distance.
              </h2>
              <div className="space-y-5 font-body text-white/65 leading-relaxed text-[16px]">
                <p>
                  Demographic complexity varies dramatically — from expat-majority urban centres in the UAE and Qatar, to rapidly evolving local populations in Saudi Arabia, to deeply community-rooted markets across Africa. Published data is often scarce. Online panels frequently underdeliver. And the answers that matter most rarely surface in a spreadsheet.
                </p>
                <p>
                  To operate here with confidence, you need people who have spent years in these markets — not working from remote desks, but operating on the ground, understanding the cultural context, the regulatory environment, the business norms, and the human dynamics that shape every outcome.
                </p>
                <p className="text-white/90 font-medium">
                  That's what we bring. Years of presence. Lived understanding. Tested methodologies refined across 450+ engagements.
                </p>
              </div>
            </AnimatedSection>

            {/* Right — stats */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { num: '450+', label: 'Bespoke Engagements', sub: 'Across MEA and beyond' },
                  { num: '40+', label: 'Countries Navigated', sub: 'With boots on the ground' },
                  { num: '100+', label: 'Years Combined Expertise', sub: 'Across our leadership team' },
                ].map((s, i) => (
                  <div key={s.label} className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5 flex items-center gap-5 backdrop-blur-sm">
                    <div className="font-heading font-black text-[2.8rem] text-accent leading-none w-28 flex-shrink-0">{s.num}</div>
                    <div>
                      <div className="font-heading font-semibold text-[15px] text-white">{s.label}</div>
                      <div className="font-body text-[12px] text-white/45 mt-0.5">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── Geographic Footprint ── */}
      <section id="geographical-footprint" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Our Reach</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>40+ Countries. 2 Offices. 4 Partner Hubs.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Operating across the full complexity of MEA — with local execution at every level.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — key numbers */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { num: '40+', label: 'Countries', accent: '#2B4A8C' },
                  { num: '2', label: 'Offices', accent: '#7D2B5E' },
                  { num: '4', label: 'Partner Hubs', accent: '#E8A020' },
                  { num: '11', label: 'Sectors', accent: '#1A7A5E' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-bg-soft p-5">
                    <div className="font-heading font-black text-[2.2rem] leading-none mb-1" style={{ color: item.accent }}>{item.num}</div>
                    <div className="font-body text-[12px] text-text-muted uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-accent/10 border border-accent/25 p-5">
                <p className="font-heading font-semibold text-[12px] uppercase tracking-[0.1em] text-accent mb-2">Partner Offices</p>
                <p className="font-body text-[14px] text-text-muted">India · Saudi Arabia · United Kingdom</p>
              </div>
            </AnimatedSection>

            {/* Right — regions list */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-2">
                {regions.map((r) => (
                  <div key={r.region} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-bg-soft transition-colors">
                    <div className="w-40 flex-shrink-0">
                      <span className="font-heading font-semibold text-[13px] text-primary">{r.region}</span>
                    </div>
                    <p className="font-body text-[13px] text-text-muted">{r.countries}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Experience ── */}
      <section id="our-experience" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">Our Experience</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>Across Every Stage. Across Every Scale.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                We have advised and supported organisations at every level — across 11 sectors, 450+ engagements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                title: 'Global & Regional Multinationals',
                desc: 'Across FMCG, retail, financial services, energy, and technology — supporting market entry, competitive intelligence, and customer understanding.',
                accent: '#2B4A8C',
              },
              {
                title: 'Government & Public Sector',
                desc: 'Policy intelligence, market assessment, and strategic advisory for national entities and government bodies across MEA.',
                accent: '#7D2B5E',
              },
              {
                title: 'Regional Conglomerates',
                desc: 'Growth strategy, market entry, and competitive positioning for leading regional conglomerates navigating complex MEA dynamics.',
                accent: '#E8A020',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-6 h-full" style={{ borderTop: `3px solid ${item.accent}` }}>
                  <h3 className="font-heading font-bold text-[16px] text-text mb-3" style={{ color: item.accent }}>{item.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Stats + categories */}
          <AnimatedSection>
            <div className="rounded-2xl border border-border overflow-hidden bg-white">
              <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
                {[
                  { num: '11', label: 'Sectors', accent: '#2B4A8C' },
                  { num: '450+', label: 'Engagements', accent: '#7D2B5E' },
                  { num: '6', label: 'Research Categories', accent: '#E8A020' },
                ].map((s) => (
                  <div key={s.label} className="py-6 text-center">
                    <div className="font-heading font-black text-[2.2rem] leading-none" style={{ color: s.accent }}>{s.num}</div>
                    <div className="font-body text-[11px] text-text-muted uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="px-8 py-5 bg-bg-soft">
                <p className="font-body text-[11px] text-text-muted uppercase tracking-[0.1em] mb-3">Research categories spanning</p>
                <div className="flex flex-wrap gap-2">
                  {['Market Assessment', 'Competitive Intelligence', 'Customer Understanding', 'Channel Strategy', 'Feasibility Studies', 'And Beyond'].map((cat) => (
                    <span key={cat} className="font-body text-[12px] text-text-muted bg-white border border-border rounded-full px-3 py-1">{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section id="our-team" className="bg-white section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
              <div>
                <span className="section-tag">The Team</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>100+ Years of Combined Research Expertise.</GradientText>
                </h2>
              </div>
            </div>
            <p className="font-body text-[16px] text-text-muted max-w-3xl leading-relaxed">
              Our team brings over <strong className="text-text">100 years of combined research and consulting experience</strong> across the Middle East, Africa, Asia, and Europe. Every engagement is led by a research director — so you always work with the person who truly understands your challenge.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section id="how-we-work" className="bg-bg-soft section-padding">
        <div className="container-content">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="section-tag">How We Work</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                  <GradientText hoverOnly animationSpeed={2}>A discipline forged over a decade of MEA research.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Every engagement follows the same rigorous approach — regardless of sector, scale, or geography.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeWork.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.12}>
                <div className={`${s.bg} border ${s.border} rounded-2xl p-6 h-full flex flex-col`}>
                  <span className={`font-heading font-black text-[64px] leading-none ${s.numColor} block mb-3`}>{s.num}</span>
                  <h3 className={`font-heading font-bold text-[17px] ${s.titleColor} mb-3 leading-tight`}>{s.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0">
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50 pointer-events-none" />
        <div className="container-content relative z-10 text-center">
          <AnimatedSection>
            <span className="font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-accent mb-4 inline-block">Get in Touch</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready To Work With A Team Built For This Region?
            </h2>
            <p className="font-body text-white/60 text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're entering a new market, evaluating a strategic opportunity, or seeking to understand the competitive dynamics shaping your category — we're ready to help you move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <OpenContactButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-dark font-body font-semibold text-[15px] rounded-full px-7 py-3.5 hover:brightness-110 transition-all">
                Start a Conversation <ArrowRight size={16} />
              </OpenContactButton>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-body font-medium text-[15px] rounded-full px-7 py-3.5 hover:bg-white/18 transition-all"
              >
                Explore Our Case Studies <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
