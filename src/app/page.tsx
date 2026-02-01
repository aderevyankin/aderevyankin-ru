import {
  Hero,
  Benefits,
  Fit,
  Experience,
  Process,
  Formats,
  Contact,
  Footer,
  ThemeToggle,
} from '@/components';

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Benefits />
        <Fit />
        <Experience />
        <Process />
        <Formats />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}