import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

interface HireMeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);


        try {
            const templateParams = {
                subject: name,
                email: email,
                message: message,
            };
            await new Promise(resolve => setTimeout(resolve, 500));
            await emailjs.send(
                'service_12owe4e',
                'template_8avxz7n',
                templateParams,
                'EQ3hFdS1w325V8_bb'
            );
            console.log({ name, email, message });
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.log(error);

            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative mx-4 w-full max-w-lg p-8 bg-surface rounded-2xl shadow-2xl border border-primary/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-primary"
                        >
                            <FiX size={24} />
                        </button>

                        <h2 className="text-3xl font-bold text-center mb-6">
                            Hire <span className="text-primary">Me</span>
                        </h2>

                        {submitStatus === 'success' ? (
                            <div className="text-center">
                                <p className="text-lg text-primary mb-4">Thank you for reaching out!</p>
                                <p>I'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 bg-black/20 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 16px rgb(0,245,212)" }}
                                        style={{ boxShadow: "0px 0px 5px rgb(0,245,212)" }}
                                        whileTap={{ scale: 0.95 }}
                                        disabled={isSubmitting}
                                        className="inline-block rounded-full bg-primary px-10 py-3 font-bold cursor-pointer text-primary text-lg disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </motion.button>
                                    {submitStatus === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}

                                </div>

                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}