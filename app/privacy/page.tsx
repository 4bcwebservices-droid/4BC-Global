import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy — 4BC Global',
  description: 'How 4BC Global collects, uses, and protects your personal data.',
}

const sections = [
  {
    num: '1',
    title: 'Information We Collect',
    content: [
      {
        sub: 'a) Information you provide directly',
        body: 'Name, email address, phone number, company name, job title, and other details submitted through contact forms, inquiry forms, or email communications. Any additional information you voluntarily provide when engaging with us for business inquiries or service requests.',
      },
      {
        sub: 'b) Automatically collected information',
        body: 'We may collect IP address, browser type, device information, operating system, and browsing behaviour on our website. Cookies and similar tracking technologies may be used to enhance user experience and analyse website performance.',
      },
    ],
  },
  {
    num: '2',
    title: 'How We Use Your Information',
    bullets: [
      'To respond to inquiries and provide requested information or services',
      'To communicate with you regarding our research and consulting services',
      'To improve our website, services, and user experience',
      'To analyse website traffic and usage trends',
      'To comply with legal and regulatory obligations',
    ],
  },
  {
    num: '3',
    title: 'Sharing of Information',
    intro: 'We do not sell or rent your personal data. We may share your information only in the following circumstances:',
    bullets: [
      'With trusted service providers who assist us in operating our website and business (subject to confidentiality obligations)',
      'When required by law, regulation, or legal process',
      'To protect the rights, safety, or security of 4BC Global, our clients, or others',
    ],
  },
  {
    num: '4',
    title: 'Data Retention',
    body: 'We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including legal, regulatory, and business requirements.',
  },
  {
    num: '5',
    title: 'Cookies',
    intro: 'Our website may use cookies to:',
    bullets: [
      'Improve website functionality',
      'Understand user behaviour and website performance',
      'Enhance user experience',
    ],
    footer: 'You may choose to disable cookies through your browser settings; however, some features of the website may not function properly.',
  },
  {
    num: '6',
    title: 'Data Security',
    body: 'We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    num: '7',
    title: 'Third-Party Links',
    body: 'Our website may contain links to external websites. We are not responsible for the privacy practices or content of such third-party websites.',
  },
  {
    num: '8',
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        headline="Privacy Policy"
        subheadline="How we collect, use, and protect your information."
      />

      <section className="bg-white section-padding">
        <div className="container-content max-w-3xl">
          <AnimatedSection>
            <p className="font-body text-[15px] text-text-muted leading-relaxed mb-10">
              4BC Global DMCC (&ldquo;4BC Global&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy and
              personal data of visitors to our website and individuals who engage with us through our services.
              This Privacy Policy explains how we collect, use, disclose, and safeguard information obtained
              through our website and related communications.
            </p>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.num} className="border-t border-border pt-8">
                  <h2 className="font-heading font-bold text-[18px] text-text mb-4">
                    <span className="text-primary mr-2">{s.num}.</span>
                    {s.title}
                  </h2>

                  {'content' in s && s.content && (
                    <div className="space-y-4">
                      {s.content.map((c) => (
                        <div key={c.sub}>
                          <p className="font-heading font-semibold text-[14px] text-text mb-1">{c.sub}</p>
                          <p className="font-body text-[14px] text-text-muted leading-relaxed">{c.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {'body' in s && s.body && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed">{s.body}</p>
                  )}

                  {'intro' in s && s.intro && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed mb-3">{s.intro}</p>
                  )}

                  {'bullets' in s && s.bullets && (
                    <ul className="space-y-2 mt-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="font-body text-[14px] text-text-muted leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {'footer' in s && s.footer && (
                    <p className="font-body text-[14px] text-text-muted leading-relaxed mt-3">{s.footer}</p>
                  )}
                </div>
              ))}

              {/* Contact section */}
              <div className="border-t border-border pt-8">
                <h2 className="font-heading font-bold text-[18px] text-text mb-4">
                  <span className="text-primary mr-2">9.</span>Contact Us
                </h2>
                <p className="font-body text-[14px] text-text-muted leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
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
