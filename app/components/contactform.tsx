"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  AtSign,
  Github,
  Linkedin,
  X as XIcon,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "promiseobi2007@gmail.com",
      href: "mailto:promiseobi2007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 9079479267",
      href: "tel:+2349079479267",
    },
    { icon: MapPin, label: "Location", value: "Plateau, Nigeria", href: "#" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-black tracking-[0.2em] text-yellow-400 uppercase mb-4">
            Contact
          </h2>
          <h3 className="text-5xl font-black text-foreground">
            Let's <span className="text-gradient">Connect.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <p className="text-xl text-foreground/60 max-w-md leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and digital challenges.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-foreground group-hover:text-yellow-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-10 border-t border-foreground/5">
              <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">
                Stay Connected
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/Promise278"
                  className="text-foreground/60 hover:text-yellow-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/promise-obi-9a6878328/"
                  className="text-foreground/60 hover:text-yellow-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/promisenativeX"
                  className="text-foreground/60 hover:text-yellow-400 transition-colors"
                  aria-label="Twitter"
                >
                  <XIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-10 rounded-3xl relative">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-foreground/60">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-yellow-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/40 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-yellow-400/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/40 ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-yellow-400/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-4 px-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-yellow-400/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 ml-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-foreground/30" />
                    <textarea
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm animate-shake">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
