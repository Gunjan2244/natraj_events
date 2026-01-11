'use client';

import React from 'react';
import Link from 'next/link';
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
                        <Link href="/contact">
                            <Button size="lg" className="shadow-xl shadow-red-200">
                                Plan Your Event
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg">
                            View Our Work
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="flex -space-x-4">
                            {[
                                'https://plus.unsplash.com/premium_photo-1681483544221-e04d719060ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
                                'https://images.unsplash.com/flagged/photo-1571367032928-3034d979fac1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                'https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww',
                                'https://images.unsplash.com/photo-1729157661483-ed21901ed892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww'
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
                                src="Screenshot from 2026-01-11 10-53-25.png"
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
