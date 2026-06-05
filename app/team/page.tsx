'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp, User } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

const team = [
  {
    name: 'Sukhdev Singh',
    title: 'Partner, Insights & Strategy',
    image: '/team/sukhdev-singh.png',
    shortBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers.',
    fullBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers — known for getting beneath the surface of a client\'s challenge and surfacing insights that genuinely move strategy forward.\n\nHis expertise spans the full breadth of what rigorous research demands: understanding how an industry works end-to-end, mapping go-to-market dynamics, and designing the customer experience (CX) research that tells organisations what their customers and stakeholders truly think — not just what they say. He has applied this across market entry strategy, B2B research, and government sector advisory, working with organisations ranging from multinationals to public sector institutions across MEA.\n\nThe practice grew because clients kept coming back — and sending others. Each engagement built on the last, deepening relationships and expanding the range of questions 4BC was trusted to answer.\n\nA researcher at heart, Sukhdev is as comfortable conducting an in-depth interview with a shopfloor worker as he is in a boardroom with a CEO. That breadth of human curiosity — and the discipline to listen without agenda — is what drives the quality of insight that clients rely on.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'CX Research', 'Stakeholder Satisfaction'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights & Strategy',
    image: '/team/siva-sankar.jpg',
    shortBio: 'Over 15 years of experience in business and industrial research with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets.',
    fullBio: 'Siva brings over 15 years of experience in business and industrial research, with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets. Over the years, he has worked with clients across a wide range of sectors, supporting strategic decision-making through in-depth market intelligence and advisory-led research solutions.\n\nHis expertise spans market sizing and opportunity assessment, market entry and expansion strategy, competitive intelligence, customer satisfaction studies, mystery shopping, impact assessment, benchmarking, channel and distribution analysis, network development/geo-mapping, and regulatory landscape assessment. He has also led multiple large-scale business and industrial studies focused on identifying growth opportunities, evaluating market potential, understanding competitive dynamics, and supporting long-term strategic planning.\n\nSiva has worked closely with both public and private sector organizations. His experience includes managing multi-country research engagements, developing tailored research frameworks, and delivering insights to senior stakeholders across industries such as energy, automotive, retail, education, financial services, entertainment, manufacturing, and infrastructure.\n\nHe also brings along a strong understanding of regional business environments and consumer dynamics.',
    expertise: ['Market Sizing', 'Competitive Intelligence', 'Impact Assessment', 'Geo-mapping & Network Development', 'Customer Experience', 'Mystery Shopping'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights & Strategy',
    image: '/team/sandeep-vaddey.jpg',
    shortBio: 'A business research and consulting professional with over 20 years of experience across the Middle East, Africa, Asia, Turkey, and Russia, spanning Oil & Gas, Energy, Construction, ICT, Retail, Real Estate, Automotive, and more.',
    fullBio: 'Sandeep is a business research and consulting professional with over 20 years of experience across the Middle East, Africa, Asia, Turkey, and Russia. Throughout his career, he has partnered with organizations across a broad spectrum of industries including Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, ICT, Electronics, Retail, Real Estate, FMCG, Automotive, and Industrial sectors.\n\nOver the years, Sandeep has worked with leading consulting and research organizations such as Frost & Sullivan, Ventures Middle East, and Kantar, where he spent nearly a decade leading and managing strategic consulting and market intelligence assignments for multinational and regional clients. In addition, he has also worked on the corporate side in a Strategy role at ACWA Power, where he was involved in driving strategic initiatives, supporting business planning, and contributing to the company\'s regional growth agenda. This combination of consulting and corporate experience gives him a well-rounded perspective on both advisory and execution-driven business environments.\n\nSandeep\'s core areas of expertise include Market and Competitive Assessments, Market Entry and Expansion Strategies, Industry Analysis, New Product Development, Customer Insights, Geo-Mapping, Opportunity Assessment, and Feasibility Studies. He has significant experience in designing and executing qualitative, quantitative, and desk research studies, translating complex data into actionable business insights and strategic recommendations. He has advised a wide range of clients, including blue-chip multinational corporations, regional conglomerates, government entities, regulators, ministries, trade development organizations, NGOs, Special Economic Zones, and investment promotion agencies. Sandeep has closely collaborated with C-suite executives, Strategy Directors, Insights and Research Managers, Marketing leaders, and Business Development teams to support critical decision-making and long-term strategic planning.',
    expertise: ['Feasibility Studies', 'Competitive Intelligence', 'New Product Development', 'Geo-mapping & Network Development'],
  },
  {
    name: 'Angad Kenghe',
    title: 'Senior Manager, Insights & Strategy',
    image: '/team/angad-kenghe.jpg',
    shortBio: '5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology across MEA, US, Europe, and India.',
    fullBio: 'Angad has over 5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses, as well as large players, spanning MEA, US, Europe, and India regions, and has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, mystery shopping and customer experience.',
    expertise: ['Consumer Research', 'Mystery Shopping', 'Customer Experience', 'Secondary Research'],
  },
  {
    name: 'Tarun Sinhal',
    title: 'Senior Consultant',
    image: '/team/tarun-sinhal.png',
    shortBio: '18+ years of experience in Market Research across Middle East, Africa, India. Expert in Branding, Communication, Demand Estimation, Pricing, and Channel Dynamics.',
    fullBio: 'Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including a brief exposure to research projects in North America. He has worked on custom research projects across various domains including Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Multinationals (Unilever, Daimler, LG, Samsung, Kia Motors), Regional businesses (Al-Futtaim, du, Etisalat, Thermax), and Government (MoTC Qatar, Insurance Authority UAE).',
    expertise: ['Branding Research', 'Demand Estimation', 'Pricing Studies', 'Channel Dynamics'],
  },
  {
    name: 'Anu Param',
    title: 'Sr. Project Management Executive',
    image: '/team/anu-param.png',
    shortBio: '15+ years in the MR industry. Responsible for end-to-end client servicing from project management through final reports across Telecom, Finance, Retail, and Auto.',
    fullBio: 'Anu has over 15 years in the MR industry and has been working within Business Consulting since 2020. She has worked with clients across sectors including Telecom, Financial services, Retail, and Auto. Anu is responsible for end-to-end client servicing from project management activities (including Field & Tab Projects) through to preparation of final reports. She is directly involved in all project activities including questionnaire scripting, briefing of interviewers, monitoring fieldwork quality & timelines, managing vendors, and managing client co-ordination activities.',
    expertise: ['Project Management', 'Field Operations', 'Questionnaire Design', 'Client Coordination'],
  },
  {
    name: 'Vamsi Ganti',
    title: 'Senior Consultant',
    image: '/team/vamsi-ganti.png',
    shortBio: '15+ years specializing in Customer Experience — relationship assessment, mystery shopping, employee engagement across Telecom, Retail, Oil & Gas, Automotive.',
    fullBio: 'Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, employee engagement studies. His expertise varies in helping clients find solutions on developing customer experience programs, mystery shopping programs, employee experience, and trade experience. He has been engaged in developing CX programs across a wide variety of clients in diverse fields like Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies. He also has experience in conducting client engagement workshops to drive customer experience adoption across the client organization.',
    expertise: ['Customer Experience', 'Mystery Shopping', 'Employee Engagement', 'CX Workshops'],
  },
  {
    name: 'Hiteshkumar Mahyavanshi',
    title: 'Associate Manager, Finance & Admin',
    image: '/team/hiteshkumar-mahyavanshi.jpg',
    shortBio: 'Hitesh is a seasoned finance professional responsible for the overall financial management, monthly reporting, and audits, while also overseeing administrative functions and operational governance.',
    fullBio: 'Hitesh is a seasoned finance professional responsible for the overall financial management, monthly reporting, and audits. Beyond finance, he also oversees the administrative functions, ensuring operational effectiveness and governance.',
    expertise: ['Finance', 'Administration'],
  },
  {
    name: 'Pascale Haddad Djabulu',
    title: 'Consultant',
    image: '/team/pascale-haddad.png',
    shortBio: 'Multidisciplinary consultant and education professional with over two decades of experience across the Middle East and sub-Saharan Africa, specializing in music, entertainment, education, and the creative industry sectors.',
    fullBio: 'Pascale is a multidisciplinary consultant and education professional with over two decades of experience across the Middle East and sub-Saharan Africa, specializing in the music, entertainment, education, and creative industry sectors. Pascale has worked across a range of strategic, research, and stakeholder engagement initiatives supporting both public and private sector organizations.\n\nHer expertise includes qualitative research, stakeholder interviews and moderation, ecosystem mapping, audience and consumer understanding, socio-cultural and impact-focused studies, benchmarking, and sector development initiatives. Pascale has contributed to projects involving government entities, ministries, educational institutions, cultural organizations, and music industry stakeholders across the region, supporting initiatives related to policy development, sector growth, talent development, and creative economy expansion.\n\nAlongside her consulting work, Pascale has held leadership and advisory roles across educational and cultural initiatives, including arts education strategy, curriculum development, talent identification frameworks, artist engagement programs, and creative capacity-building initiatives. Her cross-sector experience allows her to bridge industry insight with education, culture, and community engagement perspectives.\n\nIn addition to her consulting and advisory work, Pascale is also an active educator and musician who has performed on internationally recognized stages including Dubai Opera and Carnegie Hall. Alongside her performance experience, she has worked extensively behind the scenes across research, cultural programming, artist engagement, and creative industry development initiatives, giving her a well-rounded understanding of the entertainment and cultural ecosystem from both strategic and practitioner perspectives.\n\nShe is fluent in Arabic, English, and French, and is recognized for her strong regional insight, cross-cultural perspective, and ability to connect strategic research with real-world industry and creative practice.',
    expertise: ['Qualitative Research', 'Impact Assessment', 'Benchmarking'],
  },
  {
    name: 'Brenda Oyetomi',
    title: 'Consultant',
    image: '/team/brenda-oyetomi.jpg',
    shortBio: 'Managing Research Partner in Africa with over 14 years of experience delivering strategic insights to private and public sector companies across FMCG, FinTech, Financial Institutions, Medical Research, and government entities.',
    fullBio: 'Brenda is our Managing Research Partner in Africa with over 14 years experience in delivering strategic insights to companies across private and public sector companies.\n\nShe has worked with FMCG, FinTech, Financial Institutions, Medical Research companies and government entities to bring insights that influence strategy for clients thereby creating long lasting partnerships. Brenda is an advocate for self-fulfilment and — in turn — wants to contribute significantly in and to an organisation with a clear vision and mandate for progress. Some of the areas of expertise include Brand Health, Usage and Attitudes, Concept evaluation, Competition analysis, Project Management and Report writing.\n\nBrenda is proficient in qualitative and quantitative research, with strong knowledge and information management capabilities.',
    expertise: ['Brand Health', 'Usage & Attitudes', 'Competitive Intelligence'],
  },
  {
    name: 'Anjan Lahiri',
    title: 'Partner, askPlus – Leaders Network',
    image: '/team/anjan-lahiri.png',
    shortBio: 'Nearly 30 years of marketing research experience across Asia, Middle East, and Africa, specializing in cross-industry market research and large multi-country segmentation, tracking, and pricing studies.',
    fullBio: 'Anjan brings over nearly 30 years of marketing research experience across Asia, Middle East, and Africa. He is experienced in cross-industry market research and has managed large multi-country Segmentation studies, set up and managed multi-country Continuous Tracking studies, complex Pricing & Portfolio Optimization studies, apart from other tactical studies such as Product and Pack tests across multiple markets.',
    expertise: ['Segmentation', 'Pricing & Portfolio', 'Product Testing / Pack Testing'],
  },
  {
    name: 'Arup Bose',
    title: 'Partner, askPlus – Leaders Network',
    image: '/team/arup-bose.png',
    shortBio: 'Client relationship professional with a proven track record in global organizations spanning Europe, Asia, Middle East & Africa, with deep expertise in Brand & Communication research and large-scale market sizing.',
    fullBio: 'Arup is a Client Relationship professional with a proven track record in global organizations spanning Europe, Asia, Middle East & Africa, where he has successfully led large client engagements both at Global and Regional levels. He has extensive experience in Brand & Communication research, Segmentation and large-scale market sizing studies across multiple sectors and geographies.',
    expertise: ['Brand & Communication', 'Market Sizing'],
  },
  {
    name: 'Dinesh Nair',
    title: 'Partner, DGIC – Leaders Network',
    image: '/team/dinesh-nair.jpg',
    shortBio: 'Founder of Drive Global Insights & Consultancy with nearly two decades of market research experience across the Middle East, Africa and India, specializing deeply in automotive research.',
    fullBio: 'Dinesh is the Founder of Drive Global Insights & Consultancy (DGIC) and brings nearly two decades of market research experience across the Middle East, Africa and India. His cross-sector expertise includes Automotive, Retail, BFSI, Gaming and Real Estate, with deep specialization in automotive research covering customer experience, brand health tracking, car clinics, pricing (vehicle, parts and service) and aftersales retention.',
    expertise: ['Automotive Research', 'Pricing', 'Aftersales & Aftermarket', 'Car Clinics', 'Brand Health Tracking', 'Customer Experience', 'Segmentation', 'Gaming Research'],
  },
]

function TeamCard({ member }: { member: typeof team[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-primary/10 to-plum/10 flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        ) : (
          <User size={48} className="text-primary/40" />
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-center mb-3">
          <h3 className="font-heading font-semibold text-[17px] text-text">{member.name}</h3>
          <p className="font-body text-sm text-primary font-medium mt-0.5">{member.title}</p>
        </div>
        <div className="font-body text-sm text-text-muted leading-relaxed mb-4 text-center">
          {expanded
            ? member.fullBio.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>{para}</p>
              ))
            : <p>{member.shortBio}</p>
          }
        </div>
        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-4 mt-auto">
          {member.expertise.map((e) => (
            <span key={e} className="text-xs font-body text-text-muted bg-bg-soft border border-border rounded-full px-2.5 py-0.5">
              {e}
            </span>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-heading font-medium text-plum hover:text-primary transition-colors flex items-center gap-1 mx-auto"
          >
            {expanded ? (
              <><ChevronUp size={14} /> Show Less</>
            ) : (
              <><ChevronDown size={14} /> Full Bio</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28 px-4">
        <div className="container-content text-center">
          <div className="h-[3px] w-20 mx-auto bg-gradient-accent rounded-full mb-6" />
          <h1 className="font-heading font-medium text-4xl md:text-5xl text-white mb-4">Our Team</h1>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto">
            Senior-led. MEA-experienced. Genuinely curious.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="container-content text-center">
          <AnimatedSection>
            <p className="font-body text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Our team brings a cumulative <strong className="text-primary">100+ years</strong> of market research and consulting experience across the Middle East, Africa, Asia and Europe. Every engagement is led by a research director — so you always work with the person who truly understands your challenge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-bg-soft section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <Grainient color1="#351e6b" color2="#9a4788" color3="#b19f2b" timeSpeed={2.35} colorBalance={-0.47} warpStrength={1.9} warpFrequency={4.2} warpSpeed={0.5} warpAmplitude={26} blendAngle={28} blendSoftness={0.39} rotationAmount={260} noiseScale={2} grainAmount={0.1} grainScale={2} contrast={1.5} gamma={1} saturation={1} zoom={0.9} />
        </div>
        <div className="container-content text-center">
          <AnimatedSection>
            <h2 className="font-heading font-medium text-3xl text-white mb-4">
              Work With Our Team
            </h2>
            <p className="font-body text-gray-400 mb-8 max-w-lg mx-auto">
              Senior-led engagements. Every project is personally managed by our directors and partners.
            </p>
            <PillButton href="/contact" bgColor="#E8A020" textColor="#1A1A2E" fillColor="#7D2B5E" hoverTextColor="#ffffff" className="font-heading font-semibold text-[15px] px-7 py-3.5">
              Get in Touch
            </PillButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
