"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6c93bbc0-0157-438e-abf6-d99dda6d083a",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
      
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon.",
          icon: "success",
          confirmButtonColor: "#f59e0b", 
          confirmButtonText: "Awesome!",
          background: "rgba(255, 255, 255, 0.9)", 
          backdrop: "rgba(0,0,0,0.4)"
        });
        
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
          
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          icon: "error",
          confirmButtonColor: "#f59e0b",
        });
      }
    } catch (error) {
      
      Swal.fire({
        title: "Error!",
        text: "Network issue. Please check your connection.",
        icon: "error",
        confirmButtonColor: "#f59e0b",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Let's talk about everything!</h3>
            <p className="text-slate-500 mb-8">
              Don't like forms? Send me an email.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="mailto:gulamrasulrahim23@gmail.com" className="font-semibold hover:text-amber-500 transition-colors">
                    gulamrasulrahim23@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone / WhatsApp</p>
                  <a href="tel:+8801976801779" className="font-semibold hover:text-amber-500 transition-colors">
                    +8801976801779
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="font-semibold text-foreground">
                    Dhaka, Bangladesh (Remote available)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-card p-6 lg:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/50 dark:bg-black/4 border-2 border-slate-500/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-white/50 dark:bg-black/4 border-2 border-slate-500/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white/50 dark:bg-black/4 border-2 border-slate-500/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full bg-white/50 dark:bg-black/4 border-2 border-slate-500/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 disabled:bg-amber-500/50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}