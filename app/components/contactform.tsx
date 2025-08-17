"use client"
import React, { useState, useEffect } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', phoneno: '' });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
     useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message || !formData.phoneno) {
          setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
          return;
        }

        setFormStatus({ type: 'loading', message: 'Sending message...' });

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            phone: formData.phoneno,
            time: new Date().toLocaleString(),
        };

        emailjs
          .send(
            "service_1kk82ia",
            "template_5da0stt",
            templateParams,
            "PoxYQxpli-aUPEua2"
          )
          .then(
            () => {
              setFormStatus({ type: 'success', message: 'Message sent successfully!' });
              setFormData({ name: '', email: '', message: '', phoneno: '' });
            
              setTimeout(() => setFormStatus({ type: '', message: '' }), 3000);
            },
            (error) => {
              console.error(error);
              setFormStatus({ type: 'error', message: 'Failed to send message. Try again later.' });
            }
          );
    };
  return (
    <div>
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
            <div
              id="contact"
              data-aos="fade-up"
              className='text-center mb-16 transition-all duration-1000'
            >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400">
              Ready to bring your next project to life? Let's connect!
            </p>
          </div>

          <div
            data-aos="fade-up"
            className='bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-1000'
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneno}
                    onChange={(e) => setFormData({...formData, phoneno: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="+234 9186745324"
                  />
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Let's Connect
                </div>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {formStatus.message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 
                  formStatus.type === 'error' ? 'bg-red-500/20 text-red-400' : 
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={formStatus.type === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formStatus.type === 'loading' ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
