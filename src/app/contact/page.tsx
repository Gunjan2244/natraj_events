'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/ui/ContactForm';
import { CostCalculator } from '@/components/ui/CostCalculator';

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <Header />

            <section className="pt-32 pb-20">
                <div className="text-center container-custom mb-16">
                    <h1 className="text-5xl font-bold mb-6">Let's <span className="text-gradient">Talk</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start planning? Use our calculator to get an idea or fill out the form to get the party started!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>

                    <div className="lg:col-span-1 sticky top-32">
                        <CostCalculator />

                        <div className="mt-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[30px] p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                                <p className="mb-6 opacity-90">Call our support team directly for urgent inquiries.</p>
                                <a href="tel:+919304113120" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                    +91 9304113120
                                </a>
                            </div>
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
