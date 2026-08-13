import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import OurBlogs from "@/components/Home/OurBlogs";
import OurTestimonials from "@/components/Home/OurTestimonials";
import OurPricing from "@/components/Home/OurPricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <OurBlogs />
      <OurTestimonials />
      <OurPricing />
    </main>
  );
}
