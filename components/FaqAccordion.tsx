'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import GradientText from '@/components/GradientText'

const faqs = [
  {
    q: 'We are looking at a strategic decision — expansion, new market entry, or a major investment. How does 4BC Global fit in?',
    a: `Strategic decisions in the Middle East and Africa carry a weight that generic data cannot support. At 4BC Global, we are a research-led consulting firm — meaning every recommendation we make is grounded in evidence gathered specifically for your context, your market, and your business question.\n\nWhether you are evaluating a new market, launching a product, assessing competitive positioning, or stress-testing a major investment thesis, we design the research architecture that gives your leadership team the confidence to act.\n\nOur work spans the full spectrum of strategic need:\n• Market Entry & Feasibility — Is this market ready for you? Is your proposition ready for this market?\n• Expansion Strategy — Where is the demand? What does it look like at ground level?\n• New Product Development — What does the market actually need, and how should it be positioned?\n• B2B Research — Deep-dive intelligence on sector dynamics, competitor landscapes, and decision-maker sentiment\n• Brand & Customer Intelligence — Tracking, satisfaction, loyalty, and perception research for both B2B and B2C audiences\n• Network & Location Planning — Data-driven decisions on where to place assets, infrastructure, or retail presence\n\nWe work with equal rigour across qualitative and quantitative methodologies — and we are specialists in the nuanced, relationship-driven B2B environments that define much of the MEA business landscape.\n\nThe question is never just "what does the data say?" — it's "what should we do next?" That's the conversation we're built for.`,
  },
  {
    q: 'What makes 4BC Global different from other research firms?',
    a: `Most research firms lead with a methodology. We lead with your business question.\n\nAt 4BC Global, we are method-neutral by design — we diagnose the challenge first, then select the combination of approaches (qualitative, quantitative, digital, traditional, or AI-assisted) that actually delivers insight. No templated solutions, no forced frameworks.\n\nEvery engagement is directed by a senior research director with deep, on-the-ground presence in the Middle East and Africa. This means we bring not just years of experience, but also cultural understanding of how business actually gets done in these markets — something secondary data alone cannot provide.\n\nWe are equally at home running 10,000+ respondent studies across borders as we are conducting C-suite B2B interviews in markets where published data is scarce. That versatility, grounded in real regional expertise, is what separates us from generic research vendors.`,
  },
  {
    q: 'Which geographies do you cover?',
    a: `We focus where complexity meets opportunity — the Middle East, Africa, and selected South Asian markets.\n\nAt 4BC Global, we deliver research across 40+ geographies with consistent quality and accountability. Rather than relying on distant online panels or fragmented local agents, we bring senior research directors who act as your Single Point of Accountability (SPA) — while deploying experienced, locally rooted field agents who speak the language most comfortable for the respondent.\n\nOur strategic presence in Dubai (UAE), London (UK), and associate offices in Riyadh (KSA) and India ensures proximity to the markets we serve. Our teams travel wherever decision-makers convene — from C-suite rooms in Riyadh to community-level interviews in East Africa — to gather true ground-level intelligence that secondary data cannot replicate.`,
  },
  {
    q: 'Can you handle large-scale research projects?',
    a: `Scale Without Compromise\n\nMany firms can collect data; few can manage complexity across borders without losing rigour. At 4BC Global, our infrastructure handles the region's most ambitious research — from massive quantitative sweeps to intricate B2B engagements spanning multiple countries.\n\nQuantitative at Scale\n• 10,000+ SME respondents across single engagements\n• 1,500+ GPS-mapped data points for precise geospatial intelligence\n• Simultaneous fieldwork across multiple countries with consistent, accountable execution\n\nHigh-Bandwidth B2B & Qualitative\n• 100+ In-Depth Interviews with C-suite executives and subject matter experts\n• Complex market mapping in data-sparse environments\n• Seamless methodological pivots from deep ethnography to broad-scale quantitative work\n\nSingle Point of Accountability (SPA)\nMulti-country research is only valuable if someone owns it end-to-end. We serve as your SPA across the MEA region — managing field partners, data consistency, and quality assurance so you manage one vendor, not six. Whether treating the GCC as a unified market or navigating Africa's diverse landscape, you have one point of contact, one standard of quality, and one partner accountable for results.`,
  },
  {
    q: 'How do you determine which research methodologies to use?',
    a: `We don't believe in one-size-fits-all research. Instead, we design each engagement around one core principle: the methodology must fit the business question — not the other way around.\n\nOur senior researchers — deeply experienced in both qualitative and quantitative disciplines — begin by diagnosing the precise insights you need. Then we deploy the right mix of tools:\n\nFull-Spectrum Methodology Toolkit\n• Quantitative Surveys (CATI, online, face-to-face) — Essential for statistically robust insights, particularly in markets where digital-only samples fall short\n• Qualitative Depth (IDIs, focus groups, ethnographic research) — Uncovering the "why" behind the data, especially in relationship-driven markets\n• Observational & Immersion Techniques (mystery shopping, community-level fieldwork) — Capturing real behaviour, not just stated preferences\n• Secondary & Desk Research — Validating findings against existing data, regulatory contexts, and macro trends\n• Geo-Mapping & Spatial Analysis — Critical for market entry, location planning, and network optimisation\n• AI-Assisted Synthesis — Accelerating pattern recognition in large datasets while keeping human expertise at the helm\n\nIn the Middle East and Africa, where published data is often scarce and cultural context is everything, we frequently combine multiple methods — such as face-to-face quantitative surveys paired with in-depth local language interviews — to ensure no nuance is lost.\n\nThe result? Actionable intelligence, not just data — delivered with the rigour of a research firm and the strategic lens of a consulting partner.`,
  },
  {
    q: 'Do you have proprietary research tools?',
    a: `Yes — but not the kind that force you into a rigid framework.\n\nWe've developed three bespoke platforms to address gaps we repeatedly saw in MEA research: fragmented data, unreliable geo-spatial planning, and superficial impact assessments. Each tool is designed to enhance — not replace — human expertise, ensuring deeper insights while maintaining flexibility.\n\nOur Three Platforms\n• 4BC infUSE — Our secondary research intelligence engine, curating and cross-referencing disparate data sources (local reports, regulatory filings, market signals) to build a validated foundation for primary research. Critical in markets where published data is often scarce or outdated.\n• 4BC Landscape — A geo-mapping and network planning platform that overlays demographic, economic, and infrastructure data to model expansion strategies — whether you're planning retail locations, distribution networks, or service hubs across the GCC or Sub-Saharan Africa.\n• 4BC ImpactIQ — A socio-economic impact assessment framework that moves beyond generic ESG metrics to quantify localised community and market ripple effects — essential for projects requiring government buy-in or long-term stakeholder alignment.\n\nThese tools don't dictate our approach; they amplify it. Used alongside our qualitative and quantitative methodologies, they help us deliver precision where others offer guesswork.`,
  },
  {
    q: 'How do I get a proposal?',
    a: `Start with a conversation, not a document.\n\nWe offer a complimentary 20-minute consultation with a senior researcher who will diagnose your challenge, stress-test your assumptions, and sketch a preliminary approach — no commitment required. Many of our best engagements begin this way: a conversation that clarifies what you actually need, rather than what a generic brief might suggest.\n\nTwo Pathways Forward\n• Path 1: Exploratory Consultation — Book a call with one of our directors. We'll discuss your market, your objectives, and the gaps you're trying to close. You'll walk away with strategic clarity; we'll follow up with a tailored proposal within 1–2 business days.\n• Path 2: Ready to Brief — If you already have a detailed brief, submit it via our Contact page. We'll turn around a formal proposal and initial methodology framework within 1–2 business days.\n\nEither way, you're not paying for exploration — you're investing time in getting the approach right before committing to delivery.`,
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
            <span className="font-body text-xs font-medium tracking-widest uppercase text-primary mb-3 inline-block">Common Questions</span>
            <h2 className="font-heading font-medium text-3xl md:text-4xl text-text leading-tight mb-4">
              <GradientText hoverOnly animationSpeed={2}>Learn more about our MEA market research services</GradientText>
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
              Here are some common questions about working with 4BC Global.
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
                      const hasBullets = lines.some((l) => l.startsWith('•'))
                      const isTitleOnly = lines.length === 1 && !lines[0].match(/[.!?]$/)
                      const isHeadingWithProse = !hasBullets && lines.length > 1 && lines[0].length <= 60 && !lines[0].match(/[.!?]$/)
                      const showHeading = hasBullets || isTitleOnly || isHeadingWithProse
                      const headingText = showHeading ? lines[0] : null
                      const bullets = lines.filter((l) => l.startsWith('•'))
                      const proseLines = hasBullets
                        ? lines.slice(1).filter((l) => !l.startsWith('•'))
                        : isHeadingWithProse
                          ? lines.slice(1)
                          : isTitleOnly ? [] : lines
                      const prose = proseLines.join(' ')
                      return (
                        <div key={bi}>
                          {headingText && (
                            <p className={`font-semibold text-text mb-1 ${bi > 0 ? 'mt-3' : ''}`}>
                              {headingText}
                            </p>
                          )}
                          {bullets.length > 0 && (
                            <ul className="space-y-1.5 ml-1 mt-1">
                              {bullets.map((b, bj) => (
                                <li key={bj} className="flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span>{b.replace('• ', '')}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {prose && <p className={bullets.length > 0 ? 'mt-1' : ''}>{prose}</p>}
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
