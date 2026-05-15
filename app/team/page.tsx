'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, User } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import PillButton from '@/components/PillButton'
import Grainient from '@/components/Grainient'

const team = [
  {
    name: 'Sukhdev Singh',
    title: 'Partner, Insights & Strategy',
    shortBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers.',
    fullBio: 'With over 25 years of experience across the Middle East, Africa, Asia, and Far-East Asian markets, Sukhdev is one of the region\'s most seasoned business researchers — known for getting beneath the surface of a client\'s challenge and surfacing insights that genuinely move strategy forward.\n\nHis expertise spans the full breadth of what rigorous research demands: understanding how an industry works end-to-end, mapping go-to-market dynamics, and designing the customer experience (CX) research that tells organisations what their customers and stakeholders truly think — not just what they say. He has applied this across market entry strategy, B2B research, and government sector advisory, working with organisations ranging from multinationals to public sector institutions across MEA.\n\nThe practice grew because clients kept coming back — and sending others. Each engagement built on the last, deepening relationships and expanding the range of questions 4BC was trusted to answer.\n\nA researcher at heart, Sukhdev is as comfortable conducting an in-depth interview with a shopfloor worker as he is in a boardroom with a CEO. That breadth of human curiosity — and the discipline to listen without agenda — is what drives the quality of insight that clients rely on.',
    expertise: ['Market Entry Strategy', 'B2B Research', 'Government Sector', 'CX Research', 'Stakeholder Satisfaction'],
  },
  {
    name: 'Siva Sankar',
    title: 'Director, Insights & Strategy',
    shortBio: 'Over 15 years of experience in business and industrial research with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets.',
    fullBio: 'Siva brings over 15 years of experience in business and industrial research, with extensive exposure across the Middle East, North Africa, India, China, Russia, Turkey, and other international markets. Over the years, he has worked with clients across a wide range of sectors, supporting strategic decision-making through in-depth market intelligence and advisory-led research solutions.\n\nHis expertise spans market sizing and opportunity assessment, market entry and expansion strategy, competitive intelligence, customer satisfaction studies, mystery shopping, impact assessment, benchmarking, channel and distribution analysis, network development/geo-mapping, and regulatory landscape assessment. He has also led multiple large-scale business and industrial studies focused on identifying growth opportunities, evaluating market potential, understanding competitive dynamics, and supporting long-term strategic planning.\n\nSiva has worked closely with both public and private sector organizations. His experience includes managing multi-country research engagements, developing tailored research frameworks, and delivering insights to senior stakeholders across industries such as energy, automotive, retail, education, financial services, entertainment, manufacturing, and infrastructure.\n\nHe also brings along a strong understanding of regional business environments and consumer dynamics.',
    expertise: ['Market Sizing', 'Competitive Intelligence', 'Impact Assessment', 'Geo-mapping & Network Development', 'Customer Experience', 'Mystery Shopping'],
  },
  {
    name: 'Sandeep Vaddey',
    title: 'Director, Insights & Strategy',
    shortBio: '19+ years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia. Expert in Oil & Gas, Energy, Construction, ICT sectors.',
    fullBio: 'Sandeep has more than 19 years of Business Research and Consulting experience across Middle East, Africa, Turkey and Russia. He has advised clients across a wide range of sectors including Oil & Gas, Energy, Construction, Petrochemicals, General Engineering, and ICT. Sandeep\'s core competence is in conducting Market and Competitive Assessment, Market entry strategies, Market expansion, New product development, Geo-mapping and Feasibility studies.',
    expertise: ['Oil & Gas', 'Energy', 'Market Assessment', 'Feasibility Studies'],
  },
  {
    name: 'Angad Kenghe',
    title: 'Senior Manager, Insights & Strategy',
    shortBio: '5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology across MEA, US, Europe, and India.',
    fullBio: 'Angad has over 5+ years of diverse research experience across consumer research, business research, videometrics, and retail panel-based methodology. He has worked with small & medium businesses, as well as large players, spanning MEA, US, Europe, and India regions, and has helped clients with projects across market overview, industry analysis, competitor landscape, new product development, mystery shopping and customer experience.',
    expertise: ['Consumer Research', 'Videometrics', 'Retail Panel Research', 'Mystery Shopping', 'Competitor Landscape', 'New Product Development'],
  },
  {
    name: 'Tarun Sinhal',
    title: 'Senior Consultant',
    shortBio: '18+ years of experience in Market Research across Middle East, Africa, India. Expert in Branding, Communication, Demand Estimation, Pricing, and Channel Dynamics.',
    fullBio: 'Tarun possesses over 18 years of experience in Market Research across Middle East, Africa, India, including a brief exposure to research projects in North America. He has worked on custom research projects across various domains including Branding, Communication, Demand Estimation, Pricing, New Product Development, Channel Dynamics, and Market Landscape. Key clients include Multinationals (Unilever, Daimler, LG, Samsung, Kia Motors), Regional businesses (Al-Futtaim, du, Etisalat, Thermax), and Government (MoTC Qatar, Insurance Authority UAE).',
    expertise: ['Branding Research', 'Demand Estimation', 'Pricing Studies', 'Channel Dynamics'],
  },
  {
    name: 'Anu Param',
    title: 'Sr. Project Management Executive',
    shortBio: '15+ years in the MR industry. Responsible for end-to-end client servicing from project management through final reports across Telecom, Finance, Retail, and Auto.',
    fullBio: 'Anu has over 15 years in the MR industry and has been working within Business Consulting since 2020. She has worked with clients across sectors including Telecom, Financial services, Retail, and Auto. Anu is responsible for end-to-end client servicing from project management activities (including Field & Tab Projects) through to preparation of final reports. She is directly involved in all project activities including questionnaire scripting, briefing of interviewers, monitoring fieldwork quality & timelines, managing vendors, and managing client co-ordination activities.',
    expertise: ['Project Management', 'Field Operations', 'Questionnaire Design', 'Client Coordination'],
  },
  {
    name: 'Vamsi Ganti',
    title: 'Senior Consultant',
    shortBio: '15+ years specializing in Customer Experience — relationship assessment, mystery shopping, employee engagement across Telecom, Retail, Oil & Gas, Automotive.',
    fullBio: 'Vamsi brings more than 15 years of specialization in the Customer Experience domain with experience in relationship assessment, mystery shopping, employee engagement studies. His expertise varies in helping clients find solutions on developing customer experience programs, mystery shopping programs, employee experience, and trade experience. He has been engaged in developing CX programs across a wide variety of clients in diverse fields like Telecom, Retail, Oil & Gas, Automotive, SEZ, Finance, and Regulatory bodies. He also has experience in conducting client engagement workshops to drive customer experience adoption across the client organization.',
    expertise: ['Customer Experience', 'Mystery Shopping', 'Employee Engagement', 'CX Workshops'],
  },
]

function TeamCard({ member }: { member: typeof team[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="p-6">
        {/* Avatar placeholder */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-plum/20 flex items-center justify-center mb-4 mx-auto">
          <User size={36} className="text-primary/60" />
        </div>
        <div className="text-center mb-4">
          <h3 className="font-heading font-medium text-lg text-text">{member.name}</h3>
          <p className="font-body text-sm text-accent font-medium mt-1">{member.title}</p>
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
        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
          {member.expertise.map((e) => (
            <span key={e} className="text-xs font-body text-text-muted bg-bg-soft border border-border rounded-full px-2 py-0.5">
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
