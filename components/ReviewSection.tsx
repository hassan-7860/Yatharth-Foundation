'use client';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  { name: 'Rahul Sharma', role: 'SSC Student', text: 'Highly recommended in Naraina! The faculty is incredibly supportive and the study material is top-notch.' },
  { name: 'Priya Verma', role: 'Tally Course', text: 'I learned Tally ERP-9 here. The practical sessions helped me secure a job immediately after completion.' },
  { name: 'Amit Singh', role: 'Railway Aspirant', text: 'Best coaching center in the area. The mock tests and personalized attention made a huge difference.' },
];

const faqs = [
  { q: 'What are the timings for the classes?', a: 'We offer flexible batch timings from early morning to late evening to accommodate both students and working professionals.' },
  { q: 'Do you provide study materials?', a: 'Yes, comprehensive study materials and notes are provided for all competitive exam courses.' },
  { q: 'Is there a demo class available?', a: 'Absolutely! We encourage students to take a free demo class before enrolling in any course.' },
  { q: 'What is the fee structure?', a: 'Our fees are highly affordable. Please visit the center or call us for detailed fee structures for specific courses.' },
];

export default function ReviewSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Testimonials */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-[15px]">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-surface rounded-[12px] p-5 shadow-md flex flex-col">
                <p className="text-[12px] text-muted leading-[1.4] mb-4">"{t.text}"</p>
                <div className="mt-auto text-[12px] font-semibold text-secondary">
                  <span className="text-primary text-[14px] block mb-0.5">{t.name}</span>
                  {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary mb-2">Life at Yatharth</h2>
            <p className="text-muted text-[14px]">Glimpses of our classrooms and events.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[15px]">
            {[
              { src: '/office.jpg', alt: 'Office Desk' },
              { src: '/computer-lab.jpg', alt: 'Computer Lab' },
              { src: '/award-ceremony.jpg', alt: 'Award Ceremony' },
              { src: '/board-exam-2025.jpg', alt: 'Board Exam 2025' },
              { src: '/student-event.jpg', alt: 'Student Event' },
              { src: '/toppers.jpg', alt: 'Toppers' },
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-[12px] overflow-hidden group shadow-sm border border-[#E2E8F0]">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary mb-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-[10px]">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface border border-[#E2E8F0] rounded-[12px] overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-primary text-[14px]">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-secondary shrink-0 w-5 h-5" /> : <ChevronDown className="text-muted shrink-0 w-5 h-5" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted text-[13px] leading-[1.5]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
