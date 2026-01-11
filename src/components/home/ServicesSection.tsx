'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Monitor, Music } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Corporate Events',
        description: 'Conferences, team building, and brand launches that leave a lasting impression.',
        icon: <Briefcase size={32} />,
        color: 'from-blue-400 to-cyan-300',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
    },
    {
        id: 2,
        title: 'Weddings & Private',
        description: 'Intimate gatherings to grand celebrations, tailored to your unique love story.',
        icon: <Heart size={32} />,
        color: 'from-pink-400 to-rose-300',
        bg: 'bg-pink-50',
        text: 'text-pink-600',
    },
    {
        id: 3,
        title: 'Virtual & Hybrid',
        description: 'Seamless digital experiences connecting audiences worldwide.',
        icon: <Monitor size={32} />,
        color: 'from-purple-400 to-indigo-300',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
    },
    {
        id: 4,
        title: 'Festivals & Large Scale',
        description: 'Mega productions, concerts, and public events managed with precision.',
        icon: <Music size={32} />,
        color: 'from-yellow-400 to-orange-300',
        bg: 'bg-yellow-50',
        text: 'text-yellow-600',
    },
];

export const ServicesSection = () => {
    return (
        <section className="py-20 relative bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Curating <span className="text-gradient">Magical Experiences</span></h2>
                    <p className="text-gray-600 text-lg">
                        We bring creativity and technical expertise together to craft events that are as unique as you are.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[30px] bg-white border border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.text} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${service.color}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
