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
                            {[
                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
                                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
                                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
                                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
                            ].map((src, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                                    <img src={src} alt="Client" className="w-full h-full object-cover" />
                                </div>
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
                    {/* Main Visual */}
                    <div className="relative w-full h-full">
                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-pink-300 rounded-[40px] rotate-3 opacity-20 animate-pulse" />
                        <div className="absolute inset-0 bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                                alt="Joyful Celebration"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[200px] border border-white/50"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">🎉</div>
                                <div>
                                    <p className="font-bold text-sm text-gray-800">Perfect Execution</p>
                                    <p className="text-xs text-gray-500">Every detail matters</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                        >
                            <div className="flex items-center gap-2">
                                <div className="text-yellow-500 text-xl">★★★★★</div>
                                <div>
                                    <p className="font-bold text-sm text-gray-800">98% Satisfaction</p>
                                    <p className="text-xs text-gray-500">From 500+ clients</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
