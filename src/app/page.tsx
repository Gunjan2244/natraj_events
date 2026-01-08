import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />

      {/* Temporary Placeholder for other sections */}
      <section className="py-20 text-center container-custom">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="text-xl text-gray-600">Coming Soon: Interactive Service Cards</p>
      </section>

      <Footer />
    </main>
  );
}
