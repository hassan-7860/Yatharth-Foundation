'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-[30px]">
            <div>
              <h2 className="text-[28px] font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-[16px] text-muted mb-8">Ready to start your journey? Contact us today for counseling and enrollment.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border border-[#E2E8F0]">
                     <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[14px]">Visit Us</h4>
                    <p className="text-[12px] text-muted">Bus Stand, Nagar Palika Road,<br />Naraina, Rajasthan 303348</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border border-[#E2E8F0]">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[14px]">Call Us</h4>
                    <p className="text-[12px] text-muted">+91 98765 43210<br />+91 98765 01234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-[12px] flex items-center justify-center shrink-0 shadow-sm border border-[#E2E8F0]">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[14px]">Email Us</h4>
                    <p className="text-[12px] text-muted">info@yatharthclasses.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-[12px] p-6 shadow-md">
              <h3 className="text-[16px] font-bold text-primary mb-4">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="w-full px-4 py-2 rounded-md border border-[#E2E8F0] bg-background text-[14px] outline-none focus:border-primary" placeholder="Full Name" />
                <input type="tel" className="w-full px-4 py-2 rounded-md border border-[#E2E8F0] bg-background text-[14px] outline-none focus:border-primary" placeholder="Phone Number" />
                <select className="w-full px-4 py-2 rounded-md border border-[#E2E8F0] bg-background text-[14px] outline-none focus:border-primary appearance-none">
                  <option>Select a course</option>
                  <option>Tally ERP-9</option>
                  <option>Basic Computer Course</option>
                  <option>SSC Preparation</option>
                  <option>Railway Exams</option>
                  <option>RPSC Coaching</option>
                </select>
                <button type="submit" className="w-full bg-primary text-white py-2.5 rounded-md text-[13px] font-semibold uppercase mt-2 hover:opacity-90 transition-opacity">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-[300px] w-full bg-background relative border-y border-[#E2E8F0]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14246.309489248235!2d75.1974105!3d26.789764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c141700000001%3A0x8e8b000000000000!2sNaraina%2C%20Rajasthan%20303348!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-[#A0AEC0] py-6 px-4 sm:px-8 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span>© {new Date().getFullYear()} Yatharth Foundation Classes & Computer Centre. All Rights Reserved.</span>
          <span>Call: +91 98765 43210 | info@yatharthnaraina.com</span>
        </div>
      </footer>

      {/* Floating CTAs */}
      <div className="fixed bottom-[30px] right-[30px] z-50 flex flex-col gap-[10px]">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-[48px] h-[48px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] font-bold text-[18px] hover:scale-105 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="tel:+919876543210" className="w-[48px] h-[48px] rounded-full bg-secondary text-white flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] font-bold text-[18px] hover:scale-105 transition-transform">
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
