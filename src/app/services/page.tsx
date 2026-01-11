'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Heart } from 'lucide-react';

const packages = [
    {
        title: 'Essential',
        price: 'Starting at ₹2,00,000',
        description: 'Perfect for intimate gatherings, Roka ceremonies, and small parties.',
        features: ['Day-of Coordination', 'Vendor Recommendations', 'Basic Decor Setup', 'Timeline Creation'],
        color: 'bg-blue-50',
        accent: 'text-blue-600',
        icon: <Star size={24} />
    },
    {
        title: 'Premium',
        price: 'Starting at ₹5,00,000',
        description: 'Full planning service for Weddings, Sangeet, and Corporate events.',
        features: ['Full Event Design', 'Vendor Management', 'Guest Logistics & Welcoming', 'Mehendi & Sangeet Planning', 'Rehearsal Coordination'],
        color: 'bg-pink-50',
        accent: 'text-pink-600',
        border: 'border-pink-200 shadow-xl scale-105',
        icon: <Heart size={24} />
    },
    {
        title: 'Royal / Ultimate',
        price: 'Custom Quote',
        description: 'The complete VIP experience for big fat Indian weddings.',
        features: ['Everything in Premium', 'Destination Planning', 'Multi-day Celebration Management', 'Celebrity Artist Booking', '24/7 Concierge for Family'],
        color: 'bg-yellow-50',
        accent: 'text-yellow-600',
        icon: <Zap size={24} />
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-background min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        From concept to execution, we handle every detail so you can focus on celebrating.
                    </p>
                </div>
            </section>

            {/* Packages */}
            <section className="pb-20">
                <div className="container-custom grid md:grid-cols-3 gap-8 items-start">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[30px] border ${pkg.border || 'border-gray-100'} ${pkg.color} relative group hover:shadow-lg transition-all`}
                        >
                            <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${pkg.accent} mb-6 shadow-sm`}>
                                {pkg.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                            <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                            <p className={`text-3xl font-bold ${pkg.accent} mb-8`}>{pkg.price}</p>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                                        <Check size={18} className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full" variant={pkg.title === 'Premium' ? 'primary' : 'outline'}>
                                Choose {pkg.title}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
