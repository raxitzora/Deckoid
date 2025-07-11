
import AwardSection from "./components/sections/Awards";
import Connect from "./components/sections/Connect";
import WorkSection from "./components/sections/Work";
import MarketingSection from "./components/sections/Marketing";
import TestimonialsSection from "./components/sections/Testimonials";
import ContactForm from "./Contact/page";


export default function Home() {
  return (
    <>
      <AwardSection />
      <Connect />
      <WorkSection />
      <MarketingSection />
      <TestimonialsSection />
      <ContactForm />
    </>
  );
}
