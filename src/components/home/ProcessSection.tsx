'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, CheckSquare, Sparkles, Heart } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb size={24} />,
        title: 'Consultation & Vision',
        description: 'We meet to understand your goals, style, and wildest dreams.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: <Palette size={24} />,
        title: 'Planning & Design',
        description: 'Our team crafts a custom mood board and detailed roadmap.',
        color: 'bg-pink-100 text-pink-600',
    },
    {
        icon: <CheckSquare size={24} />,
        title: 'Coordination',
        description: 'We handle vendors, logistics, and every tiny detail.',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        icon: <Sparkles size={24} />,
        title: 'Execution & Magic',
        description: 'Sit back and enjoy while we bring the party to life!',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        icon: <Heart size={24} />,
        title: 'Post-Event Joy',
        description: 'Relive the memories with photos and happy guests.',
        color: 'bg-red-100 text-red-600',
    },
];

export const ProcessSection = () => {
    return (
        <section className="py-20 bg-[var(--background)] overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary)] font-bold uppercase text-sm">How It Works</span>
                    <h2 className="text-4xl font-bold mt-2">From <span className="text-gradient">Idea</span> to <span className="text-gradient">Celebration</span></h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Mobile: hidden, Desktop: visible) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 relative z-10 border-4 border-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 max-w-[200px]">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
