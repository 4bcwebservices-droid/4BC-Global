'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { useContactModal } from '@/lib/contact-modal-context'

export default function Footer() {
  const { openModal } = useContactModal()
  return (
    <footer className="relative text-white overflow-hidden bg-[#0F1320]">

      {/* ── Footer columns ── */}
      <div className="container-content relative z-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">

          {/* Col 1 — Tagline + social */}
          <div className="flex flex-col gap-4">
            <p className="font-heading font-medium text-[13px] text-accent tracking-[0.1em] uppercase">
              Research Based Advisory
            </p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Specialist B2B &amp; B2C market research for the MEA region — from market entry to competitive intelligence.
            </p>
            <a
              href="https://www.linkedin.com/company/4bcglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors mt-1 self-start"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>

          {/* Col 2 — Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Contact</p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Got a question or need a proposal? We'll get back to you today.
            </p>
            <a href="tel:+97143595123" className="font-body text-sm text-white hover:text-accent transition-colors">
              +971 4 3595123 ↗
            </a>
            <a href="mailto:info@4bcglobal.com" className="font-body text-sm text-white hover:text-accent transition-colors">
              info@4bcglobal.com ↗
            </a>
          </div>

          {/* Col 3 — Site links */}
          <div className="flex flex-col gap-2.5">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Navigate</p>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/sectors', label: 'Sectors' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/about#our-team', label: 'Our Team' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — CTA */}
          <div className="flex flex-col gap-4 items-start">
            <p className="font-heading font-semibold text-[13px] text-white tracking-wide uppercase mb-1">Work With Us</p>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Let's bring the same depth of insight to your business challenges.
            </p>
            <button
              onClick={openModal}
              className="font-body text-sm font-medium text-dark bg-accent rounded-full px-5 py-2.5 hover:brightness-110 transition-all duration-200 inline-block"
            >
              Start a Conversation →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© 4BC Global. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/15">·</span>
            <a
              href="https://theleaders.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Image src="/brand/leaders-network-logo.png" alt="The Leaders Network" width={16} height={20} className="h-5 w-auto" />
              <span>A part of Leaders Network ↗</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 mt-6 pt-5">
          <p className="font-body text-[10px] text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-500">Disclaimer:</span> The project experience, case studies, and credentials presented on this website reflect the collective experience of the 4BC Global leadership and consulting team. Certain projects were delivered by team members in their professional capacities prior to the establishment of 4BC Global in 2020, including during their tenure with other organisations such as Kantar. Where referenced, such projects are included to demonstrate the team&apos;s expertise and experience and do not imply that they were contracted directly through 4BC Global.
          </p>
        </div>
      </div>
    </footer>
  )
}
