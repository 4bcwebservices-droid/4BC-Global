import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react'
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
  { region: 'Africa', countries: 'Egypt, Algeria, Morocco, Kenya, Ghana, South Africa, Nigeria and others' },
  { region: 'Asia', countries: 'India, Pakistan, China, Korea, Thailand' },
  { region: 'Other', countries: 'UK, Russia, Turkey' },
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
    title: 'Multilingual by Practice',
    desc: 'We operate fluently in English, Arabic, and French — and across the cultural registers each language carries. In markets where meaning lives between the lines, language capability is a research capability.',
    accent: '#4A3AAA',
  },
  {
    num: '06',
    title: 'Integrity Without Compromise',
    desc: 'We do not misrepresent our work, our methods, or our findings — to clients or to respondents. Every engagement is conducted with full transparency, honest reporting, and an unwavering commitment to the truth of what the data shows.',
    accent: '#C0392B',
  },
  {
    num: '07',
    title: 'Confidentiality as Standard',
    desc: 'What you share with us stays with us. We maintain strict confidentiality for every client engagement — and equal protection for every research respondent. No data is ever shared, repurposed, or disclosed without explicit consent. We adhere to the ESOMAR Code of Conduct and operate in full alignment with applicable data protection regulations.',
    accent: '#0F7FAA',
  },
  {
    num: '08',
    title: 'Data Responsibility',
    desc: 'We handle data with the same rigour we apply to research design. Our practices align with international data protection standards — including GDPR principles and regional data governance frameworks — ensuring that how we collect, store, and process information is as defensible as what we conclude from it.',
    accent: '#2C7A4B',
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
    shortBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers.',
    fullBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers — known for getting beneath the surface of a client\'s challenge and surfacing insights that genuinely move strategy forward.\n\nHis expertise spans the full breadth of what rigorous research demands: understanding how an industry works end-to-end, mapping go-to-market dynamics, and designing the customer experience (CX) research that tells organisations what their customers and stakeholders truly think — not just what they say. He has applied this across market entry strategy, B2B research, and government sector advisory, working with organisations ranging from multinationals to public sector institutions across MEA.\n\nThe practice grew because clients kept coming back — and sending others. Each engagement built on the last, deepening relationships and expanding the range of questions 4BC was trusted to answer.\n\nA researcher at heart, Sukhdev is as comfortable conducting an in-depth interview with a shopfloor worker as he is in a boardroom with a CEO. That breadth of human curiosity — and the discipline to listen without agenda — is what drives the quality of insight that clients rely on.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'CX Research', 'Stakeholder Satisfaction'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights & Strategy',
    photo: '/team/siva-sankar.jpg',
    shortBio: 'Over 15 years of experience in business and industrial research with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets.',
    fullBio: 'Siva brings over 15 years of experience in business and industrial research, with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets. Over the years, he has worked with clients across a wide range of sectors, supporting strategic decision-making through in-depth market intelligence and advisory-led research solutions.\n\nHis expertise spans market sizing and opportunity assessment, market entry and expansion strategy, competitive intelligence, customer satisfaction studies, mystery shopping, impact assessment, benchmarking, channel and distribution analysis, network development/geo-mapping, and regulatory landscape assessment. He has also led multiple large-scale business and industrial studies focused on identifying growth opportunities, evaluating market potential, understanding competitive dynamics, and supporting long-term strategic planning.\n\nSiva has worked closely with both public and private sector organizations. His experience includes managing multi-country research engagements, developing tailored research frameworks, and delivering insights to senior stakeholders across industries such as energy, automotive, retail, education, financial services, entertainment, manufacturing, and infrastructure.\n\nHe also brings along a strong understanding of regional business environments and consumer dynamics.',
    expertise: ['Market Sizing', 'Competitive Intelligence', 'Impact Assessment', 'Geo-mapping & Network Development', 'Customer Experience', 'Mystery Shopping'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights & Strategy',
    photo: '/team/sandeep-vaddey.jpg',
    shortBio: 'A business research and consulting professional with over 20 years of experience across the Middle East, Africa, Asia, Turkey, and Russia, spanning Oil & Gas, Energy, Construction, ICT, Retail, Real Estate, Automotive, and more.',
    fullBio: 'Sandeep is a business research and consulting professional with over 20 years of experience across the Middle East, Africa, Asia, Turkey, and Russia. Throughout his career, he has partnered with organizations across a broad spectrum of industries including Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, ICT, Electronics, Retail, Real Estate, FMCG, Automotive, and Industrial sectors.\n\nOver the years, Sandeep has worked with leading consulting and research organizations such as Frost & Sullivan, Ventures Middle East, and Kantar, where he spent nearly a decade leading and managing strategic consulting and market intelligence assignments for multinational and regional clients. In addition, he has also worked on the corporate side in a Strategy role at ACWA Power, where he was involved in driving strategic initiatives, supporting business planning, and contributing to the company\'s regional growth agenda. This combination of consulting and corporate experience gives him a well-rounded perspective on both advisory and execution-driven business environments.\n\nSandeep\'s core areas of expertise include Market and Competitive Assessments, Market Entry and Expansion Strategies, Industry Analysis, New Product Development, Customer Insights, Geo-Mapping, Opportunity Assessment, and Feasibility Studies. He has advised a wide range of clients, including blue-chip multinational corporations, regional conglomerates, government entities, regulators, ministries, trade development organizations, NGOs, Special Economic Zones, and investment promotion agencies.',
    expertise: ['Feasibility Studies', 'Competitive Intelligence', 'New Product Development', 'Geo-mapping & Network Development'],
  },
  {
    name: 'Angad Kenghe',
    title: 'Senior Manager, Insights & Strategy',
    photo: '/team/angad-kenghe.jpg',
    shortBio: '5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology across MEA, US, Europe, and India.',
    fullBio: 'Angad has over 5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses, as well as large players, spanning MEA, US, Europe, and India regions, and has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, mystery shopping and customer experience.',
    expertise: ['Consumer Research', 'Mystery Shopping', 'Customer Experience', 'Secondary Research'],
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
  {
    name: 'Hiteshkumar Mahyavanshi',
    title: 'Associate Manager, Finance & Admin',
    photo: '/team/hiteshkumar-mahyavanshi.jpg',
    shortBio: 'Hitesh is a seasoned finance professional responsible for the overall financial management, monthly reporting, and audits, while also overseeing administrative functions and operational governance.',
    fullBio: 'Hitesh is a seasoned finance professional responsible for the overall financial management, monthly reporting, and audits. Beyond finance, he also oversees the administrative functions, ensuring operational effectiveness and governance.',
    expertise: ['Finance', 'Administration'],
  },
  {
    name: 'Pascale Haddad Djabulu',
    title: 'Consultant',
    photo: '/team/pascale-haddad.png',
    shortBio: 'Multidisciplinary consultant and education professional with over two decades of experience across the Middle East and sub-Saharan Africa, specializing in music, entertainment, education, and the creative industry sectors.',
    fullBio: 'Pascale is a multidisciplinary consultant and education professional with over two decades of experience across the Middle East and sub-Saharan Africa, specializing in the music, entertainment, education, and creative industry sectors. Pascale has worked across a range of strategic, research, and stakeholder engagement initiatives supporting both public and private sector organizations.\n\nHer expertise includes qualitative research, stakeholder interviews and moderation, ecosystem mapping, audience and consumer understanding, socio-cultural and impact-focused studies, benchmarking, and sector development initiatives. Pascale has contributed to projects involving government entities, ministries, educational institutions, cultural organizations, and music industry stakeholders across the region, supporting initiatives related to policy development, sector growth, talent development, and creative economy expansion.\n\nAlongside her consulting work, Pascale has held leadership and advisory roles across educational and cultural initiatives, including arts education strategy, curriculum development, talent identification frameworks, artist engagement programs, and creative capacity-building initiatives.\n\nShe is fluent in Arabic, English, and French, and is recognized for her strong regional insight, cross-cultural perspective, and ability to connect strategic research with real-world industry and creative practice.',
    expertise: ['Qualitative Research', 'Impact Assessment', 'Benchmarking'],
  },
  {
    name: 'Brenda Oyetomi',
    title: 'Consultant',
    photo: '/team/brenda-oyetomi.jpg',
    shortBio: 'Managing Research Partner in Africa with over 14 years of experience delivering strategic insights to private and public sector companies across FMCG, FinTech, Financial Institutions, Medical Research, and government entities.',
    fullBio: 'Brenda is our Managing Research Partner in Africa with over 14 years experience in delivering strategic insights to companies across private and public sector companies.\n\nShe has worked with FMCG, FinTech, Financial Institutions, Medical Research companies and government entities to bring insights that influence strategy for clients thereby creating long lasting partnerships. Some of the areas of expertise include Brand Health, Usage and Attitudes, Concept evaluation, Competition analysis, Project Management and Report writing.\n\nBrenda is proficient in qualitative and quantitative research, with strong knowledge and information management capabilities.',
    expertise: ['Brand Health', 'Usage & Attitudes', 'Competitive Intelligence'],
  },
  {
    name: 'Anjan Lahiri',
    title: 'Partner, askPlus – Leaders Network',
    photo: '/team/anjan-lahiri.png',
    shortBio: 'Nearly 30 years of marketing research experience across Asia, Middle East, and Africa, specializing in cross-industry market research and large multi-country segmentation, tracking, and pricing studies.',
    fullBio: 'Anjan brings over nearly 30 years of marketing research experience across Asia, Middle East, and Africa. He is experienced in cross-industry market research and has managed large multi-country Segmentation studies, set up and managed multi-country Continuous Tracking studies, complex Pricing & Portfolio Optimization studies, apart from other tactical studies such as Product and Pack tests across multiple markets.',
    expertise: ['Segmentation', 'Pricing & Portfolio', 'Product Testing / Pack Testing'],
  },
  {
    name: 'Arup Bose',
    title: 'Partner, askPlus – Leaders Network',
    photo: '/team/arup-bose.png',
    shortBio: 'Client relationship professional with a proven track record in global organizations spanning Europe, Asia, Middle East & Africa, with deep expertise in Brand & Communication research and large-scale market sizing.',
    fullBio: 'Arup is a Client Relationship professional with a proven track record in global organizations spanning Europe, Asia, Middle East & Africa, where he has successfully led large client engagements both at Global and Regional levels. He has extensive experience in Brand & Communication research, Segmentation and large-scale market sizing studies across multiple sectors and geographies.',
    expertise: ['Brand & Communication', 'Market Sizing'],
  },
  {
    name: 'Dinesh Nair',
    title: 'Partner, DGIC – Leaders Network',
    photo: '/team/dinesh-nair.jpg',
    shortBio: 'Founder of Drive Global Insights & Consultancy with nearly two decades of market research experience across the Middle East, Africa and India, specializing deeply in automotive research.',
    fullBio: 'Dinesh is the Founder of Drive Global Insights & Consultancy (DGIC) and brings nearly two decades of market research experience across the Middle East, Africa and India. His cross-sector expertise includes Automotive, Retail, BFSI, Gaming and Real Estate, with deep specialization in automotive research covering customer experience, brand health tracking, car clinics, pricing (vehicle, parts and service) and aftersales retention.',
    expertise: ['Automotive Research', 'Pricing', 'Aftersales & Aftermarket', 'Car Clinics', 'Brand Health Tracking', 'Customer Experience', 'Segmentation', 'Gaming Research'],
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
              { label: 'Saudi Arabia', href: '#saudi-arabia' },
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
                  Over the next thirteen years, that team became one of the most sought after teams at Kantar MENA. They advised global multinationals, regional conglomerates, and national governments across 40+ markets. They built a reputation for rigour, for listening deeply, and for delivering insight that actually changed decisions.
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
                  <GradientText hoverOnly animationSpeed={2}>These aren't just values on a wall.<br />They shape how we work.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Eight principles embedded in every engagement we take on.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-border hover:shadow-sm transition-all p-6 h-full flex flex-col">
                  <span className="font-heading font-black text-[40px] leading-none mb-4 block" style={{ color: v.accent }}>{v.num}</span>
                  <h3 className="font-heading font-bold text-[15px] text-text mb-2">{v.title}</h3>
                  <p className="font-body text-[13px] text-text-muted leading-relaxed flex-1">{v.desc}</p>
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
                  <GradientText hoverOnly animationSpeed={2}>40+ Countries. 2 Offices. 3 Partner Hubs.</GradientText>
                </h2>
              </div>
              <p className="font-body text-[14px] text-text-muted max-w-xs md:text-right leading-relaxed">
                Operating across the full complexity of MEA — with local execution at every level.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — key numbers + office addresses */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { num: '40+', label: 'Countries', accent: '#2B4A8C' },
                  { num: '2', label: 'Offices', accent: '#7D2B5E' },
                  { num: '3', label: 'Partner Hubs', accent: '#E8A020' },
                  { num: '10+', label: 'Sectors', accent: '#1A7A5E' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-bg-soft p-5">
                    <div className="font-heading font-black text-[2.2rem] leading-none mb-1" style={{ color: item.accent }}>{item.num}</div>
                    <div className="font-body text-[12px] text-text-muted uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Office address cards */}
              <div className="space-y-3">
                {[
                  {
                    flag: '🇦🇪',
                    city: 'Dubai, UAE',
                    label: 'Head Office',
                    address: 'Dubai, United Arab Emirates',
                    phone: '+971 4 3595123',
                    accent: '#2B4A8C',
                  },
                  {
                    flag: '🇬🇧',
                    city: 'Slough, United Kingdom',
                    label: 'UK Office',
                    address: '2 Thames Road, Langley, Slough, SL3 8DY',
                    phone: '+44 1753 777999',
                    email: 'info@4bcglobal.com',
                    accent: '#7D2B5E',
                  },
                  {
                    flag: '🇸🇦',
                    city: 'Riyadh, KSA',
                    label: 'KSA Partner Office',
                    address: 'Office 703, 7th Floor Aqarya #3, Olaya, Riyadh, Kingdom of Saudi Arabia',
                    email: 'info@4bcglobal.com',
                    accent: '#E8A020',
                  },
                ].map((office) => (
                  <div key={office.city} className="rounded-xl border border-border bg-bg-soft p-4 flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{office.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading font-bold text-[14px] text-text">{office.city}</span>
                        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full px-2 py-0.5" style={{ backgroundColor: `${office.accent}15`, color: office.accent }}>{office.label}</span>
                      </div>
                      <p className="font-body text-[12.5px] text-text-muted leading-snug mb-1.5">{office.address}</p>
                      {office.phone && (
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 font-body text-[12px] text-text-muted hover:text-primary transition-colors">
                          <Phone size={11} /> {office.phone}
                        </a>
                      )}
                      {office.email && (
                        <a href={`mailto:${office.email}`} className="inline-flex items-center gap-1.5 font-body text-[12px] text-text-muted hover:text-primary transition-colors">
                          <Mail size={11} /> {office.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — markets covered */}
            <AnimatedSection delay={0.2}>
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-4">Markets Covered</p>
              <div className="space-y-2">
                {regions.map((r) => (
                  <div key={r.region} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-bg-soft transition-colors">
                    <div className="w-44 flex-shrink-0">
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
                We have advised and supported organisations at every level — across 10+ sectors, 450+ engagements.
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
                  { num: '10+', label: 'Sectors', accent: '#2B4A8C' },
                  { num: '450+', label: 'Engagements', accent: '#7D2B5E' },
                  { num: '10+', label: 'Research Capabilities', accent: '#E8A020' },
                ].map((s) => (
                  <div key={s.label} className="py-6 text-center">
                    <div className="font-heading font-black text-[2.2rem] leading-none" style={{ color: s.accent }}>{s.num}</div>
                    <div className="font-body text-[11px] text-text-muted uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="px-8 py-5 bg-bg-soft">
                <p className="font-body text-[11px] text-text-muted uppercase tracking-[0.1em] mb-3">Research capabilities spanning</p>
                <div className="flex flex-wrap gap-2">
                  {['Market Assessment', 'Competitive Intelligence', 'Customer Understanding', 'Channel Strategy', 'Feasibility Studies', 'And Beyond'].map((cat) => (
                    <span key={cat} className="font-body text-[12px] text-text-muted bg-white border border-border rounded-full px-3 py-1">{cat}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href="/services#business-lifecycle-advisory" className="inline-flex items-center gap-1.5 font-body text-[12px] text-primary font-medium hover:underline">
                    Business Lifecycle Advisory <ArrowRight size={11} />
                  </a>
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

      {/* ── Saudi Arabia Partnership ── */}
      <section id="saudi-arabia" className="bg-bg-soft section-padding">
        <div className="container-content">

          {/* Header */}
          <AnimatedSection className="mb-12">
            <span className="section-tag">Strategic Partnership</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mt-1">
              <GradientText hoverOnly animationSpeed={2}>Entering Saudi Arabia? We're Here.</GradientText>
            </h2>
          </AnimatedSection>

          {/* Main card */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">

              {/* Left — content */}
              <AnimatedSection className="p-8 md:p-12 flex flex-col justify-between gap-10">

                {/* Partnership copy */}
                <div>
                  <div className="space-y-4 font-body text-[15px] text-text-muted leading-relaxed mb-8">
                    <p>Market research in the Kingdom demands more than datasets and surveys — it demands someone who understands how business actually gets done in Saudi Arabia.</p>
                    <p>That's why 4BC Global has partnered with 4SiGHT KSA, combining our research rigour, analytical depth, and technology with their extensive local expertise, field capabilities, and government and corporate networks.</p>
                  </div>

                  {/* Pull quote */}
                  <div className="rounded-2xl bg-[#E8A020]/8 border border-[#E8A020]/20 px-6 py-5 mb-8">
                    <p className="font-heading font-semibold text-[18px] text-text leading-snug">
                      One partnership. Two advantages. Complete market coverage.
                    </p>
                  </div>

                  {/* Dr Adil bio */}
                  <div className="flex gap-5 items-start">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-border">
                      <Image src="/team/dr-adil.png" alt="Dr. Adil Ali M. Al-Najaei" width={64} height={64} className="object-cover object-top w-full h-full" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[16px] text-text">Dr. Adil Ali M. Al-Najaei</p>
                      <p className="font-body text-[12px] text-text-muted mb-2">CEO & Founder, 4SiGHT KSA · Partner, Saudi Arabia</p>
                      <p className="font-body text-[13px] text-text-muted leading-relaxed">
                        With over 25 years of executive leadership across Saudi Arabia's public and private sectors, Dr. Adil brings deep, on-the-ground expertise to our operations in the Kingdom. As former Managing Director for global research firms including GfK and Kantar, alongside roles leading ART and MBC's pay-per-view channels, he combines rigorous market intelligence with extensive government and royal advisory experience — including consultation to Prince Sultan Bin Abdulaziz Humanitarian Foundation and multiple government agencies. His unique blend of commercial acumen, media sector knowledge, and high-level strategic relationships helps clients confidently navigate, invest, and scale within the region's most dynamic economy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Government Advisory', 'Market Intelligence', 'Royal Advisory', 'Media & Broadcasting', 'KSA Strategy'].map((tag) => (
                    <span key={tag} className="font-body text-[11px] bg-bg-soft border border-border text-text-muted rounded-full px-3 py-1.5">{tag}</span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right — photo + 4SiGHT logo */}
              <AnimatedSection delay={0.15} className="flex flex-col">
                {/* Photo — full height, larger */}
                <div className="relative flex-1 min-h-[420px] bg-bg-soft">
                  <Image
                    src="/team/dr-adil.png"
                    alt="Dr. Adil Ali M. Al-Najaei"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* 4SiGHT logo panel */}
                <div className="px-8 py-6 border-t border-border bg-white flex items-center gap-4">
                  <div className="relative h-12 w-44 flex-shrink-0">
                    <Image src="/brand/4sight-logo.png" alt="4SiGHT KSA" fill className="object-contain object-left" />
                  </div>
                  <p className="font-body text-[11px] text-text-muted leading-snug">Established 2009 · Riyadh, Saudi Arabia</p>
                </div>
              </AnimatedSection>

            </div>
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
            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-white/50 font-body text-[12px]">
              <span className="flex items-center gap-2"><MapPin size={11} /> Dubai, United Arab Emirates</span>
              <a href="tel:+97143595123" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Phone size={11} /> +971 4 3595123</a>
              <a href="mailto:info@4bcglobal.com" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Mail size={11} /> info@4bcglobal.com</a>
              <span className="text-white/15 hidden sm:inline">·</span>
              <a href="https://theleaders.network/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">A part of Leaders Network ↗</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
