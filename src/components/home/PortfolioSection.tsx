'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// Mock data for now
const projects = [
    {
        id: 1,
        title: 'Chhath Pooja Dhurwa Dam',
        category: 'Festival',
        image: 'https://images.herzindagi.info/her-zindagi-english/images/2025/10/23/article/image/Main---2025-10-23T134641.851-1761207478712.webp',
        size: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
        id: 2,
        title: 'Sarah & Mike',
        category: 'Wedding',
        image: 'Indian-Wedding-Trends-2025-3.webp',
        size: 'col-span-1',
    },
    {
        id: 3,
        title: 'School Function SVS',
        category: 'Functions',
        image: 'Gemini_Generated_Image_bns15ibns15ibns1.png',
        size: 'col-span-1',
    },
    {
        id: 4,
        title: 'Golden Jubilee',
        category: 'Private Party',
        image: 'pngtree-indian-wedding-mandap-decor-yellow-and-white-flowers-picture-image_15566633.jpg',
        size: 'col-span-1 md:col-span-2',
    },
];

export const PortfolioSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--primary)] font-bold uppercase text-sm">Recent Work</span>
                        <h2 className="text-4xl font-bold mt-2">Moments We <span className="text-gradient">Created</span></h2>
                    </div>
                    <Button variant="outline" className="hidden md:flex mt-4 md:mt-0">View Full Gallery</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-[20px] ${project.size}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                                <span className="text-sm font-medium text-[var(--primary)] mb-1">{project.category}</span>
                                <h3 className="text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline">View Full Gallery</Button>
                </div>
            </div>
        </section>
    );
};
