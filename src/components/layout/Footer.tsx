'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-10 rounded-t-[60px] relative overflow-hidden mt-0">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary-yellow)] to-[var(--secondary-pink)]" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom grid md:grid-cols-4 gap-12 mb-16 relative z-10">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-3xl font-bold font-header text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-6 inline-block">
                        Natraj Events
                    </Link>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Creating magical moments and unforgettable memories for every occasion. Let's celebrate life together!
                    </p>
                    <div className="flex gap-4">
                        {[
                            { Icon: Instagram, color: 'hover:bg-pink-600' },
                            { Icon: Facebook, color: 'hover:bg-blue-600' },
                            { Icon: Twitter, color: 'hover:bg-sky-500' }
                        ].map(({ Icon, color }, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${color} transition-all hover:scale-110 hover:shadow-lg hover:shadow-white/20`}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-8 text-yellow-400">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-8 text-yellow-400">Contact Us</h4>
                    <ul className="space-y-6 text-gray-400">
                        <li className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <Phone size={18} />
                            </div>
                            <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <Mail size={18} />
                            </div>
                            <span className="group-hover:text-white transition-colors">hello@natrajevents.com</span>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <MapPin size={18} />
                            </div>
                            <span className="group-hover:text-white transition-colors">123 Celebration St,<br />Party City, India</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-8 text-yellow-400">Join the Party</h4>
                    <p className="text-gray-400 text-sm mb-4">Get event tips & inspiration straight to your inbox!</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                        <Button variant="primary" className="w-full bg-gradient-to-r from-pink-500 to-orange-500 border-none">
                            Subscribe <Send size={16} className="ml-2" />
                        </Button>
                    </form>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} Natraj Events. All rights reserved.</p>
                <p className="flex items-center gap-1">Made with <span className="text-red-500 animate-pulse">❤️</span> and confetti</p>
            </div>
        </footer>
    );
};
