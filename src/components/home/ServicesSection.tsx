'use client';

import React from 'react';
import { motion } from 'framer-motion';


const services = [
    {
        id: 1,
        title: 'Shadi & Receptions',
        description: 'Grand Indian weddings planned to perfection, from Haldi to Bidaai.',
        image: '/images/wedding.jpg',
    },
    {
        id: 2,
        title: 'Corporate Events',
        description: 'Award shows, annual meets, and conferences that inspire success.',
        image: '/images/corporate.jpg',
    },
    {
        id: 3,
        title: 'Birthdays & Parties',
        description: 'celebrating life milestones with fun, frolic, and family.',
        image: '/images/birthday.webp',
    },
    {
        id: 4,
        title: 'Cultural Festivals',
        description: 'Chhath Pooja, Navratri, and community gatherings managed with devotion.',
        image: '/images/haldi.jpg',
    },
];

export const ServicesSection = () => {
    return (
        <section className="py-20 relative bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--primary)] font-bold tracking-wider uppercase text-sm">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Celebrating <span className="text-gradient">Indian Moments</span></h2>
                    <p className="text-gray-600 text-lg">
                        From grand weddings to intimate family gatherings, we add the perfect touch of tradition and modernity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-[30px] overflow-hidden shadow-xl cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
