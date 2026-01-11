'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Users, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';

type FormData = {
    name: string;
    email: string;
    eventType: string;
    date: string;
    guests: number;
    budget: string;
    message: string;
};

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        setIsSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="bg-white rounded-[30px] shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence>
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-6"
                        >
                            <CheckCircle size={48} />
                        </motion.div>
                        <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-500">Get ready to party! We'll be in touch within 24 hours.</p>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Your Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                            })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Event Type</label>
                        <select
                            {...register('eventType', { required: 'Please select an event type' })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all bg-white"
                        >
                            <option value="">Select Type...</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday Party</option>
                            <option value="festival">Festival / Concert</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.eventType && <span className="text-red-500 text-xs">{errors.eventType.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Event Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                                type="date"
                                {...register('date', { required: 'Date is required' })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                            />
                        </div>
                        {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Guest Count (Approx)</label>
                        <div className="relative">
                            <Users className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                                type="number"
                                {...register('guests', { min: { value: 1, message: 'At least 1 guest' } })}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                                placeholder="50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Budget Range</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <select
                                {...register('budget')}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all bg-white"
                            >
                                <option value="">Select Range...</option>
                                <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                                <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                                <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                                <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
                                <option value="₹25 Lakhs+">₹25 Lakhs+</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Tell us about your vision</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <textarea
                            {...register('message', { required: 'Please tell us a bit about your event' })}
                            rows={4}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
                            placeholder="Theme, colors, vibe, or any crazy ideas you have!"
                        />
                    </div>
                    {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary-pink)]"
                    isLoading={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
            </form>
        </div>
    );
};
