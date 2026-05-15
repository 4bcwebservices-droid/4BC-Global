'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import GradientText from '@/components/GradientText'

const faqs = [
  {
    q: 'How can 4BC Global help my business?',
    a: '4BC Global helps B2B and B2C enterprises make informed strategic decisions. We design custom quantitative and qualitative research studies — from market entry assessments and brand tracking to customer satisfaction programs and network planning.',
  },
  {
    q: 'What makes 4BC Global different from other research firms?',
    a: 'Our method-neutral approach means we diagnose your business challenge first, then design the right research methodology. Every engagement is led by a research director with 15+ years of MEA experience — so you get clarity at every step.',
  },
  {
    q: 'Which geographies do you cover?',
    a: 'We operate where it matters most. With active research conducted across 40+ geographies, we bring ground-level intelligence and regional expertise to every engagement. Our teams travel directly to meet stakeholders and decision-makers wherever they are — driven by research requirements, business-critical needs, and situational awareness. We maintain strategic presence in Dubai (UAE), London (UK), with associate offices in Riyadh (KSA) and India, ensuring proximity to the markets we serve and the agility to deploy as demands evolve.',
  },
  {
    q: 'Can you handle large-scale research projects?',
    a: `Scale Without Compromise\n\nMany firms can collect data; few can manage complexity across borders without losing rigour. At 4BC Global, our infrastructure handles the region's most ambitious research — from massive quantitative sweeps to intricate B2B engagements spanning multiple countries.\n\nQuantitative at Scale\n• 10,000+ SME respondents across single engagements\n• 1,500+ GPS-mapped data points for precise geospatial intelligence\n• Simultaneous fieldwork across multiple countries with consistent, accountable execution\n\nHigh-Bandwidth B2B & Qualitative\n• 100+ In-Depth Interviews with C-suite executives and subject matter experts\n• Complex market mapping in data-sparse environments\n• Seamless methodological pivots from deep ethnography to broad-scale quantitative work\n\nSingle Point of Accountability (SPA)\nMulti-country research is only valuable if someone owns it end-to-end. We serve as your SPA across the MEA region — managing field partners, data consistency, and quality assurance so you manage one vendor, not six. Whether treating the GCC as a unified market or navigating Africa's diverse landscape, you have one point of contact, one standard of quality, and one partner accountable for results.`,
  },
  {
    q: 'What research methodologies do you use?',
    a: 'We take pride in our method-neutral research approach — where methodology is entirely driven by research requirements. Our researchers are experts in both qualitative and quantitative methods, ensuring no silos: the same team delivers 360° market insight through a seamless blend. We blend quantitative surveys (CATI, online, face-to-face), qualitative in-depth interviews (IDIs), focus groups, mystery shopping, observation research, secondary desk research, and geo-mapping — choosing the right mix for each unique challenge.',
  },
  {
    q: 'Do you have proprietary research tools?',
    a: 'Yes. We have built three proprietary platforms: 4BC InFuse (secondary research intelligence), 4BC Landscape (geo-mapping and network planning), and 4BC ImpactIQ (socio-economic impact assessment framework).',
  },
  {
    q: 'How do I get a proposal?',
    a: 'We offer a no-obligation 20-minute consultation with a senior researcher to understand your requirements. Many research and marketing challenges don\'t start with a written brief — and that\'s perfectly fine. This session allows us to conceptualize and clarify your needs before moving to proposal. Alternatively, if you have a written brief ready, use our Contact page to share your requirements, and we\'ll respond within 1–2 business days with an initial approach and proposal.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-bg-soft section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-primary mb-3 inline-block">FAQs</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text leading-tight mb-4">
              <GradientText hoverOnly animationSpeed={2}>Learn more about our MEA market research services</GradientText>
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
              Here are some frequently asked questions about working with 4BC Global.
            </p>
            <p className="font-body text-sm text-text-muted">
              Contact us today if you have any questions about your next research project.
            </p>
            <Link href="/contact" className="inline-block mt-5 font-body text-sm font-medium text-primary hover:underline">
              Get in touch →
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body text-[15px] text-text font-medium">{faq.q}</span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted">
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                {open === i && (
                  <div className="font-body text-sm text-text-muted leading-relaxed pb-4 space-y-2">
                    {faq.a.split('\n\n').map((block, bi) => {
                      const lines = block.split('\n')
                      const heading = lines[0]
                      const bullets = lines.slice(1).filter((l) => l.startsWith('•'))
                      const prose = lines.slice(1).filter((l) => !l.startsWith('•')).join(' ')
                      const isBulletBlock = bullets.length > 0
                      return (
                        <div key={bi}>
                          {heading && (
                            <p className={bi === 0 ? 'font-semibold text-text mb-1' : 'font-semibold text-text mt-3 mb-1'}>
                              {heading}
                            </p>
                          )}
                          {isBulletBlock && (
                            <ul className="space-y-1 ml-1">
                              {bullets.map((b, bj) => (
                                <li key={bj} className="flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span>{b.replace('• ', '')}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {prose && <p>{prose}</p>}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
