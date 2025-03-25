"use client";

import { Button } from "@/src/components/ui/button";
import PageLayout from "@/src/components/layout/PageLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <PageLayout title="Contact Us" subtitle="Get in touch with us for any inquiries">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="prose prose-lg">
                        <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
                        <p className="text-gray-600">
                            We're here to help! Please feel free to reach out using any of the following methods.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: <MapPin className="w-5 h-5" />, title: "Address", content: "123 School Road, Your City" },
                            { icon: <Mail className="w-5 h-5" />, title: "Email", content: "info@joyiousss.com" },
                            { icon: <Phone className="w-5 h-5" />, title: "Phone", content: "+256 123 456 789" },
                            { icon: <Clock className="w-5 h-5" />, title: "Office Hours", content: "Monday - Friday: 8:00 AM - 5:00 PM" }
                        ].map((item) => (
                            <div key={item.title} className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                placeholder="Message subject"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Message</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                rows={6}
                                placeholder="Your message"
                            />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
} 