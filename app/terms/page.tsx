import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Terms of Use — 4BC Global',
  description: 'Terms and conditions governing your use of the 4BC Global website.',
}

const sections = [
  {
    num: '1',
    title: 'Use of Website',
    intro: 'The content on this website is provided for general informational purposes only. It describes our services, capabilities, and experience in market research and consulting.',
    intro2: 'You agree to use this website only for lawful purposes and in a way that does not:',
    bullets: [
      'Violate applicable laws or regulations',
      'Infringe the rights of any third party',
      'Interfere with the operation or security of the website',
    ],
  },
  {
    num: '2',
    title: 'Intellectual Property',
    body: 'All content on this website, including but not limited to text, graphics, logos, visuals, case studies, and design elements, is the property of 4BC Global or its licensors. You may not reproduce, distribute, modify, or republish any content from this website without prior written consent from 4BC Global, except for personal and non-commercial reference use.',
  },
  {
    num: '3',
    title: 'No Professional Advice',
    body: 'The content provided on this website is for general informational purposes only and does not constitute professional advice, consulting advice, or a formal recommendation. Any reliance on website content is at your own discretion. For specific business decisions, you should seek direct consultation with our team.',
  },
  {
    num: '4',
    title: 'Accuracy of Information',
    body: 'While we aim to ensure that the information on this website is accurate and up to date, we do not guarantee its completeness, reliability, or accuracy. Content may be updated or changed without prior notice.',
  },
  {
    num: '5',
    title: 'Third-Party Links',
    body: 'This website may include links to third-party websites. These links are provided for convenience only. We do not control or take responsibility for the content, privacy practices, or availability of third-party websites.',
  },
  {
    num: '6',
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, 4BC Global shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or its content.',
  },
  {
    num: '7',
    title: 'User Submissions',
    body: 'Any information submitted through contact forms, emails, or inquiries may be used by us to respond to your request or for business communication purposes, in accordance with our Privacy Policy.',
  },
  {
    num: '8',
    title: 'Changes to These Terms',
    body: 'We may update these Terms of Use from time to time. Updates will be posted on this page with an updated effective date.',
  },
  {
    num: '9',
    title: 'Governing Law',
    body: 'These Terms shall be governed by and interpreted in accordance with the laws of the United Arab Emirates.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHeader
        headline="Terms of Use"
        subheadline="The terms and conditions governing your use of this website."
      />

      <section className="bg-white section-padding">
        <div className="container-content max-w-3xl">
          <AnimatedSection>
            <p className="font-body text-[15px] text-text-muted leading-relaxed mb-10">
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the website operated by
              4BC Global DMCC (&ldquo;4BC Global&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;). By accessing or using this website,
              you agree to these Terms.
            </p>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.num} className="border-t border-border pt-8">
                  <h2 className="font-heading font-bold text-[18px] text-text mb-4">
                    <span className="text-primary mr-2">{s.num}.</span>
                    {s.title}
                  </h2>

                  {'intro' in s && s.intro && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed mb-3">{s.intro}</p>
                  )}

                  {'intro2' in s && s.intro2 && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed mb-3">{s.intro2}</p>
                  )}

                  {'bullets' in s && s.bullets && (
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="font-body text-[14px] text-text-muted leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'body' in s && s.body && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed">{s.body}</p>
                  )}
                </div>
              ))}

              {/* Contact section */}
              <div className="border-t border-border pt-8">
                <h2 className="font-heading font-bold text-[18px] text-text mb-4">
                  <span className="text-primary mr-2">10.</span>Contact Us
                </h2>
                <p className="font-body text-[14px] text-text-muted leading-relaxed mb-4">
                  If you have any questions regarding these Terms, you may contact us at:
                </p>
                <div className="bg-bg-soft border border-border rounded-2xl p-6">
                  <p className="font-heading font-bold text-[15px] text-text mb-1">4BC Global DMCC</p>
                  <p className="font-body text-[14px] text-text-muted">906, Saba Tower 1, Jumeirah Lakes Towers, Dubai, UAE</p>
                  <a href="mailto:info@4bcglobal.com" className="font-body text-[14px] text-primary hover:underline mt-1 inline-block">
                    info@4bcglobal.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
