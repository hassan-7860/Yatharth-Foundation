import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import FeatureSection from '@/components/FeatureSection';
import ReviewSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CourseSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
}
