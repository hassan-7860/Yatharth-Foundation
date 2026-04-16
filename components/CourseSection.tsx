'use client';
import { motion } from 'motion/react';

const computerCourses = [
  { title: 'Tally ERP-9', duration: '3 Months', desc: 'Master accounting, inventory, and taxation with practical training.', tag: 'Software' },
  { title: 'Basic Computer Course', duration: '2 Months', desc: 'Essential computer skills, internet browsing, and office tools.', tag: 'Essentials' },
  { title: 'Microsoft Excel', duration: '1 Month', desc: 'Advanced data management, formulas, and reporting.', tag: 'Software' },
];

const competitiveCourses = [
  { title: 'RPSC Coaching', duration: '6 Months', desc: 'Comprehensive syllabus coverage for Rajasthan state exams.', tag: 'Govt Job' },
  { title: 'Railway Exams', duration: '6 Months', desc: 'Mock tests, strategy, and intensive preparation for RRB.', tag: 'Govt Job' },
  { title: 'SSC Preparation', duration: '6 Months', desc: 'Expert faculty guidance for CGL, CHSL, and MTS exams.', tag: 'Govt Job' },
];

export default function CourseSection() {
  return (
    <section id="courses" className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[24px] font-bold text-primary mb-6">Computer Skills Training</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {computerCourses.map((course, i) => (
              <CourseCard key={i} course={course} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-bold text-primary mb-6">Competitive Exam Coaching</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {competitiveCourses.map((course, i) => (
              <CourseCard key={i} course={course} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index }: { course: any, index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-surface rounded-[12px] p-5 shadow-md relative flex flex-col h-full">
      <span className="absolute top-3 right-3 text-[10px] font-extrabold bg-[#EBF8FF] text-[#2B6CB0] px-2 py-0.5 rounded uppercase">
        {course.tag}
      </span>
      <h3 className="text-[16px] font-bold text-primary mb-2 pr-16">{course.title}</h3>
      <p className="text-[12px] text-muted leading-[1.4] flex-grow">{course.desc}</p>
      <div className="mt-4 text-[12px] font-semibold text-secondary flex items-center gap-1">
        {course.duration} • <a href="#contact" className="hover:underline">Join Now →</a>
      </div>
    </motion.div>
  );
}
