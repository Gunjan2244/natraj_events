'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 rounded-t-[40px] mt-20">
            <div className="container-custom grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-3xl font-bold font-header text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6 inline-block">
                        Natraj Events
                    </Link>
                    <p className="text-gray-400 mb-6">
                        Creating magical moments and unforgettable memories for every occasion. Let's celebrate life together!
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Services</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Corporate Events</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Weddings</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Social Gatherings</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Festivals</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Work</Link></li>
                        <li><Link href="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-pink-500" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-pink-500" />
                            <span>hello@natrajevents.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-pink-500 mt-1" />
                            <span>123 Celebration St, Party City, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Natraj Events. Made with ❤️ and confetti.</p>
            </div>
        </footer>
    );
};
