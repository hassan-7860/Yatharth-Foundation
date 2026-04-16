'use client';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  { name: 'Rahul Sharma', role: 'SSC Aspirant', text: 'The mock tests here are very similar to the actual exam pattern. It helped me boost my confidence significantly.' },
  { name: 'Priya Patel', role: 'Tally Course', text: 'I joined for Tally and ended up learning so much more. The practical approach is what makes this place stand out.' },
  { name: 'Amit Singh', role: 'Railway Student', text: 'The teachers are always available to clear doubts, even after class hours. Truly dedicated staff.' },
  { name: 'Sneha Gupta', role: 'RPSC Aspirant', text: 'I was struggling with RPSC syllabus, but the structured approach here made it much easier to manage.' },
  { name: 'Vikram Meena', role: 'Computer Student', text: 'The computer lab is well-maintained and the instructors are very helpful with hands-on practice.' },
  { name: 'Anjali Kumari', role: 'SSC Student', text: 'A very safe and focused environment for girls. I feel very comfortable studying here.' },
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold text-primary mb-3">What Our Students Say</h2>
            <p className="text-muted text-[14px] md:text-[16px] max-w-2xl mx-auto">Real experiences from students who transformed their careers with Yatharth Foundation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-surface rounded-[20px] p-6 shadow-sm border border-[#E2E8F0] flex flex-col relative group"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H17.017C16.4647 18 16.017 18.4477 16.017 19V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 8.44772 2.01697 9V12C2.01697 12.5523 1.56925 13 1.01697 13H-0.983032C-1.53532 13 -1.98303 12.5523 -1.98303 12V9C-1.98303 7.34315 -0.639885 6 1.01697 6H7.01697C8.67382 6 10.017 7.34315 10.017 9V15C10.017 16.6569 8.67382 18 7.01697 18H5.01697C4.46468 18 4.01697 18.4477 4.01697 19V21H2.01697Z" />
                  </svg>
                </div>
                <p className="text-[14px] text-muted leading-[1.6] mb-6 italic">"{t.text}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-[14px]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-primary font-bold text-[15px] block leading-tight">{t.name}</span>
                    <span className="text-secondary text-[12px] font-medium">{t.role}</span>
                  </div>
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
