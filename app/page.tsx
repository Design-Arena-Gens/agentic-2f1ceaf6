"use client";

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForLawyers from '@/components/ForLawyers';
import ForClients from '@/components/ForClients';
import Tech from '@/components/Tech';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { handleForms } from '@/lib/forms';

export default function Page() {
  useEffect(() => {
    handleForms();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ForLawyers />
        <ForClients />
        <Tech />
        <Testimonials />
        <section id="cta" className="container-max py-20 sm:py-24">
          <div className="card p-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">Pronto(a) para operar com performance?</h2>
              <p className="mt-3 text-white/70">Fale com nossa equipe e receba um diagn?stico gratuito.</p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2" method="post" action="/api/lead" data-role="contact">
                <input type="hidden" name="role" value="contact" />
                <input className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="name" placeholder="Seu nome" required />
                <input className="rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="email" placeholder="Seu e-mail" type="email" required />
                <textarea className="sm:col-span-2 h-28 rounded-lg border border-white/15 bg-white/5 p-3 outline-none" name="message" placeholder="Conte-nos seus objetivos" />
                <div className="sm:col-span-2">
                  <button className="button-primary w-full sm:w-auto" type="submit">Quero falar com a SmartJus</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
