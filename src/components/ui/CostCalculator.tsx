'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CostCalculator = () => {
    const [guests, setGuests] = useState(50);
    const [eventType, setEventType] = useState('social');
    const [services, setServices] = useState<string[]>([]);
    const [estimatedCost, setEstimatedCost] = useState(0);

    const baseRates: Record<string, number> = {
        social: 50000,
        corporate: 100000,
        wedding: 300000,
    };

    const perGuestRate = 500; // Basic cost per guest in INR

    const serviceAddons = [
        { id: 'decor', name: 'Premium Decor (Mandap/Stage)', price: 75000 },
        { id: 'catering', name: 'Catering Coordination', price: 25000 },
        { id: 'music', name: 'DJ & Sound System', price: 40000 },
        { id: 'photo', name: 'Photography & Videography', price: 60000 },
        { id: 'mehendi', name: 'Mehendi & Makeup', price: 30000 },
    ];

    useEffect(() => {
        let total = baseRates[eventType] + (guests * perGuestRate);

        // Add selected services
        services.forEach(sId => {
            const service = serviceAddons.find(s => s.id === sId);
            if (service) total += service.price;
        });

        setEstimatedCost(total);
    }, [guests, eventType, services]);

    const toggleService = (id: string) => {
        setServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-white rounded-[30px] shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Quick Cost Estimator</h3>

            <div className="space-y-6">
                {/* Event Type */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Event Type</label>
                    <div className="flex gap-2">
                        {['social', 'corporate', 'wedding'].map(type => (
                            <button
                                key={type}
                                onClick={() => setEventType(type)}
                                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${eventType === type
                                        ? 'bg-[var(--primary)] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Guest Slider */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        Guests: <span className="text-[var(--primary)]">{guests}</span>
                    </label>
                    <input
                        type="range"
                        min="50"
                        max="2000"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full accent-[var(--primary)] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                {/* Add-ons */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Add-on Services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceAddons.map(s => (
                            <button
                                key={s.id}
                                onClick={() => toggleService(s.id)}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg border text-sm transition-all text-left ${services.includes(s.id)
                                        ? 'border-[var(--primary)] bg-red-50 text-[var(--primary)]'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <span>{s.name}</span>
                                <span className="font-bold whitespace-nowrap">+₹{(s.price / 1000).toFixed(0)}k</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Total */}
                <div className="pt-6 border-t mt-6">
                    <p className="text-gray-500 text-sm mb-1">Estimated Cost</p>
                    <motion.p
                        key={estimatedCost}
                        initial={{ scale: 0.8, color: '#FF6B6B' }}
                        animate={{ scale: 1, color: '#2D3436' }}
                        className="text-4xl font-bold"
                    >
                        ₹{estimatedCost.toLocaleString('en-IN')}
                    </motion.p>
                    <p className="text-xs text-gray-400 mt-2">*This is a rough estimate. Final quote may vary.</p>
                </div>
            </div>
        </div>
    );
};
