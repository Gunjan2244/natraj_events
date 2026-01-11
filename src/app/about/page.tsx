'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const team = [
    { name: 'Priya Sharma', role: 'Founder & Visionary', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80', funFact: 'Loves confetti cannons more than coffee.' },
    { name: 'Rahul Verma', role: 'Head of Design & Co-Founder', image: '/images/founder.png', funFact: 'Owns 50+ patterned bowties.' },
    { name: 'Sonia Lee', role: 'Lead Coordinator', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80', funFact: 'Can organize a chaotic room in 5 mins.' },
    { name: 'Arjun Das', role: 'Tech Logistics', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80', funFact: 'Gamer by night, lighting wizard by day.' }
];

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen">
            <Header />

            <section className="pt-32 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-5xl font-bold mb-6">We Are <span className="text-gradient">Natraj</span></h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Born from a passion for celebration, Natraj Events has grown into a premier event management company. We believe every moment is worth celebrating in style.
                        </p>
                        <p className="text-lg text-gray-500">
                            Our mission is simple: To banish boring events from the face of the earth and replace them with vibrant, unforgettable experiences.
                        </p>
                    </motion.div>
                    <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80" alt="Team celebrating" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-center mb-16">Meet the <span className="text-gradient">Party Planners</span></h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-2 border-2 border-dashed border-[var(--secondary-yellow)]">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                                        <p className="text-white text-sm">{member.funFact}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-[var(--primary)]">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
