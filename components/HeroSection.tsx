'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-[100px] pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-[16px] p-10 shadow-md border-l-[6px] border-secondary flex flex-col justify-center">
          <div className="flex gap-4 mb-5 flex-wrap">
            <span className="bg-[#EDF2F7] text-primary px-4 py-2 rounded-full text-[12px] font-bold">✓ ISO CERTIFIED</span>
            <span className="bg-[#EDF2F7] text-primary px-4 py-2 rounded-full text-[12px] font-bold">★ 4.9 GOOGLE RATING</span>
          </div>

          <h1 className="text-[32px] md:text-[42px] leading-[1.1] text-primary font-bold mb-5">
            Empowering Students for Academic & Career Success
          </h1>

          <p className="text-[16px] md:text-[18px] text-muted mb-8 leading-[1.5] max-w-3xl">
            Comprehensive coaching for RPSC, SSC, and Railway exams plus industry-standard computer certifications in the heart of Naraina.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#courses" className="bg-secondary text-white px-5 py-2.5 rounded-md text-[13px] font-semibold uppercase hover:opacity-90 transition-opacity flex items-center gap-2">
              View Courses <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+919876543210" className="bg-[#E2E8F0] text-primary px-5 py-2.5 rounded-md text-[13px] font-semibold uppercase hover:bg-[#CBD5E0] transition-colors flex items-center gap-2">
              Free Demo Class
            </a>
          </div>

          <div className="mt-10 text-[13px] text-muted border-t border-[#E2E8F0] pt-5">
            <strong>Location:</strong> Near Naraina Bus Stand, Rajasthan 303348
          </div>
        </div>
      </div>
    </section>
  );
}
