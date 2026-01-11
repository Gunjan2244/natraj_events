'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ashwani Ekka",
        role: "Bride",
        content: "Natraj Events made our wedding absolutely magical. Every detail was perfect, and the team was so supportive!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Simpi Sharma",
        role: "Director, TechCorp",
        content: "The most professional event planners we've worked with. Our annual summit was a huge success thanks to them.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Anita Raj",
        role: "Birthday Host",
        content: "They turned my 50th birthday into a memorable festival. The decor was stunning!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-[var(--background)]">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[var(--primary)] font-bold uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl font-bold mt-2 mb-6">Happy <span className="text-gradient">Clients</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[30px] shadow-lg relative border border-gray-100"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-8 italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[var(--primary)]" />
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <span className="text-sm text-gray-400">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
