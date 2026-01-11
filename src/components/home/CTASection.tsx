'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const CTASection = () => {
    return (
        <section className="py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-sunset rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start the Party?</h2>
                        <p className="text-xl mb-10 opacity-90">
                            Let's turn your vision into a spectacular reality. Whether it's a corporate gala or an intimate wedding, we're ready to make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white !text-gray-600 hover:bg-gradient-sunset hover:!text-white shadow-xl">
                                Get a Free Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-500">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
