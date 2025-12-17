import React, { useState } from 'react';
import { Send, User, AtSign, MapPin, Phone } from 'lucide-react';
import profile from '../../assets/profile.jpeg';

export default function ContactApp() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}`
    );
    
    const mailtoLink = `mailto:bhuvanshetty317@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="h-full bg-white flex flex-col md:flex-row font-sans">
        {/* Contact info sidebar */}
        <div className="md:w-64 bg-slate-50 border-r border-gray-200 p-6 flex flex-col shrink-0">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Card</h2>
            
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 overflow-hidden">
                    <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="font-bold text-lg">Bhuvan M</div>
                <div className="text-sm text-gray-500">AI Engineer</div>
            </div>

            <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3 text-gray-600">
                    <AtSign size={16} className="text-emerald-500" />
                    <span className="truncate">bhuvanshetty317@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={16} className="text-emerald-500" />
                    <span>+91 9353479947</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>Bangalore, Karnataka</span>
                </div>
            </div>
            
             <div className="mt-auto pt-6 border-t border-gray-200">
                <a 
                    href="mailto:bhuvanshetty317@gmail.com"
                    className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                >
                    Open Default Mail Client
                </a>
            </div>
        </div>

        {/* Message Form */}
        <div className="flex-1 p-8 bg-white flex flex-col justify-center max-w-2xl mx-auto w-full">
            <h1 className="text-2xl font-bold mb-2">Send a Message</h1>
            <p className="text-gray-500 mb-8">Interested in collaborating? Drop me a line.</p>

            {sent ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center justify-center animate-fade-in">
                    <Send className="mr-2" size={20} />
                    <span>Opening your email client to send message...</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Name</label>
                            <input 
                                required
                                type="text" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-500"
                                value={form.name}
                                onChange={e => setForm({...form, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Email</label>
                            <input 
                                required
                                type="email" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900 placeholder-gray-500"
                                value={form.email}
                                onChange={e => setForm({...form, email: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Message</label>
                        <textarea 
                            required
                            rows={6}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none text-gray-900 placeholder-gray-500"
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition-all flex items-center shadow-lg shadow-gray-200 active:scale-95 transform"
                    >
                        <Send size={18} className="mr-2" />
                        Send Message
                    </button>
                </form>
            )}
        </div>
    </div>
  );
}
