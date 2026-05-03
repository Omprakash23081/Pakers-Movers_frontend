import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroForm from '../components/home/HeroForm';
import HeroContent from '../components/home/HeroContent';

const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'));
const AboutUs = dynamic(() => import('@/components/home/AboutUs'));
const Gallery = dynamic(() => import('@/components/home/Gallery'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const ReviewsWidget = dynamic(() => import('@/components/home/ReviewsWidget'));
const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews'));
const VisualProof = dynamic(() => import('@/components/home/VisualProof'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const ConnectWithUs = dynamic(() => import('@/components/home/ConnectWithUs'));
const VideoTestimonials = dynamic(() => import('@/components/home/VideoTestimonials'));
const PricingGuide = dynamic(() => import('@/components/home/PricingGuide'));
const LocationGrid = dynamic(() => import('@/components/home/LocationGrid'));
const CostCalculator = dynamic(() => import('@/components/home/CostCalculator'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-32 md:pt-24 lg:pt-28 lg:pb-40 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Abstract mesh and image background */}
          <Image
            src="/images/hero-bg.png"
            alt="Sunita Cargo Packers and Movers Background"
            fill
            sizes="100vw"
            className="object-cover opacity-80 dark:opacity-60 pointer-events-none"
            priority
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20 dark:from-background/95 dark:via-background/70 dark:to-background/30" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 dark:opacity-10" />
          <div className="absolute top-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <HeroContent />
            <div className="hidden lg:block">
              <HeroForm />
            </div>

          </div>
        </div>
      </section>

      {/* Mobile-only form before calculator */}
      <div className="lg:hidden w-full px-2 -mt-8 mb-8">
        <HeroForm />
      </div>

      <CostCalculator />
      <VisualProof />
      <ServiceCards />
      <GoogleReviews />
      <AboutUs />
      <Stats />
      <Gallery />
      <VideoTestimonials />
      <ReviewsWidget />
      <ConnectWithUs />
      <PricingGuide />
      <LocationGrid />
      <FAQ />

    </div>
  );
}

