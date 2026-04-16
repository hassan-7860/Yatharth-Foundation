'use client';
import { motion } from 'motion/react';
import { Users, Trophy, Target, Wallet, Accessibility, MapPin, Phone, Calendar, CheckSquare } from 'lucide-react';
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-[30px] items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[28px] md:text-[36px] font-bold text-primary mb-4">Trusted by Local Students in Naraina</h2>
              <p className="text-[16px] text-muted mb-6 leading-[1.5]">
                Located conveniently near the Naraina Bus Stand, Yatharth Foundation Classes & Computer Centre is the highly recommended institute for students seeking academic excellence and professional growth.
              </p>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-[12px] shadow-sm border border-[#E2E8F0] mb-6">
                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-primary text-[14px]">Prime Location</h4>
                  <p className="text-[12px] text-muted">Bus Stand, Nagar Palika Road, Naraina</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[400px] rounded-[16px] overflow-hidden shadow-md border-4 border-surface">
              <Image src="https://picsum.photos/seed/classroom/800/1000" alt="Classroom" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Trust Section) */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[16px] p-6 md:p-8 text-white shadow-md flex flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-[22px] font-bold">Why Choose Yatharth?</h2>
                <p className="text-[12px] mt-1 opacity-80">Building futures through quality education since 2015.</p>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded-lg text-[11px] font-semibold">
                Limited Seats Available!
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-[15px] mt-8">
              <div className="text-center border-r border-white/20">
                <span className="block text-[20px] md:text-[24px] font-extrabold text-secondary">500+</span>
                <label className="text-[10px] uppercase opacity-80">Trained Students</label>
              </div>
              <div className="text-center border-r border-white/20">
                <span className="block text-[20px] md:text-[24px] font-extrabold text-secondary">12+</span>
                <label className="text-[10px] uppercase opacity-80">Years Expertise</label>
              </div>
              <div className="text-center">
                <span className="block text-[20px] md:text-[24px] font-extrabold text-secondary">100%</span>
                <label className="text-[10px] uppercase opacity-80">Practical Focus</label>
              </div>
            </div>

            <div className="mt-8 text-[11px] leading-[1.5] text-[#CBD5E0] border-t border-white/10 pt-4">
              ✓ Wheelchair Accessible Parking • ✓ Modern Labs • ✓ Personalized Mentorship • ✓ Affordable Fee Structure
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-primary mb-2">Simple Admission Process</h2>
            <p className="text-muted text-[14px]">Start your journey with us in four easy steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-[15px]">
            {[
              { icon: Phone, title: 'Visit or Call', desc: 'Reach out to our center.' },
              { icon: CheckSquare, title: 'Choose Course', desc: 'Select the right path.' },
              { icon: Calendar, title: 'Free Demo', desc: 'Attend a counseling session.' },
              { icon: Users, title: 'Enrollment', desc: 'Join the Yatharth family.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-surface p-5 rounded-[12px] shadow-md text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#EBF8FF] rounded-full flex items-center justify-center mb-4 text-[#2B6CB0]">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[12px] font-bold text-secondary mb-1 uppercase tracking-wider">Step {i + 1}</h4>
                <h5 className="font-bold text-primary text-[16px] mb-2">{step.title}</h5>
                <p className="text-muted text-[12px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
