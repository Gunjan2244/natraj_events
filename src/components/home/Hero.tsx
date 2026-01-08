'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--background)]">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[10%] w-64 h-64 bg-pink-200/50 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
                        ✨ #1 Event Planners in the City
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Let's Make Your Event <span className="text-gradient">Unforgettable</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg">
                        From intimate weddings to grand corporate festivals, we turn your wildest ideas into magical memories.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="shadow-xl shadow-red-200">
                            Plan Your Event
                        </Button>
                        <Button variant="outline" size="lg">
                            View Our Work
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="flex -space-x-4">
                            {/* Placeholders for avatars */}
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs">?</div>
                            ))}
                        </div>
                        <div>
                            <p className="font-bold text-lg">500+ Events Planned</p>
                            <p className="text-sm text-gray-500">for happy clients</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[600px] hidden md:block"
                >
                    {/* Abstract visual or Image placeholder */}
                    <div className="relative w-full h-full">
                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-pink-300 rounded-[40px] rotate-3 opacity-20" />
                        <div className="absolute inset-0 bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl">
                            {/* Replace with actual image later */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                Image Placeholder
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">🎉</div>
                                <div>
                                    <p className="font-bold text-sm">Perfect Execution</p>
                                    <p className="text-xs text-gray-500">Every detail matters</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -right-5 bg-white p-4 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-2">
                                <div className="text-yellow-500">★★★★★</div>
                                <p className="font-bold">98% Satisfaction</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
