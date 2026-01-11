'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Corporate', 'Weddings', 'Social', 'Festivals'];

const projects = [
    { id: 1, title: 'Neon Nights', category: 'Festivals', image: 'https://images.unsplash.com/photo-1459749411177-0473ef716175?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Sarah & Mike', category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Tech Summit', category: 'Corporate', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80' },
    { id: 4, title: 'Golden Jubilee', category: 'Social', image: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&q=80' },
    { id: 5, title: 'Product Launch', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80' },
    { id: 6, title: 'Beach Wedding', category: 'Weddings', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80' },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <main className="bg-background min-h-screen">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold mb-6">Our <span className="text-gradient">Work</span></h1>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                    ? 'bg-[var(--primary)] text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <h3 className="text-2xl font-bold">{project.title}</h3>
                                            <p>{project.category}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
