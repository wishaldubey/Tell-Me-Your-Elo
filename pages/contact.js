import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { DisplayAd, InFeedAd, InArticleAd, MultiplexAd } from "../components/ads";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Tell Me Your Elo | Get in Touch</title>
        <meta name="description" content="Contact Tell Me Your Elo for support, feedback, or questions about our chess rating analysis platform. We're here to help improve your chess experience." />
        <meta name="keywords" content="contact, support, chess help, feedback, chess analysis support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto p-4">
          {/* Top Display Ad */}
          <div className="my-6">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>

          {/* Navigation Bar */}
          <nav className="w-full flex justify-end space-x-6 py-4 mb-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/analyze" className="text-gray-300 hover:text-blue-400 transition-colors">
              Analyze
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-blue-400 font-semibold">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Contact Us
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess.com Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We'd love to hear from you! Whether you have questions about our platform, 
                  need technical support, or want to share feedback, we're here to help.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-blue-400">📧</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Support</h3>
                      <p className="text-gray-400">support@tellmeyourelo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-purple-400">📱</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Social Media</h3>
                      <a 
                        href="https://www.instagram.com/lipstickeraservishal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        @lipstickeraservishal
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-500/20 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-green-400">⏰</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Response Time</h3>
                      <p className="text-gray-400">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h3 className="text-blue-400 font-semibold mb-2">Quick Tips</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Include your Chess.com username for account-related issues</li>
                    <li>• Describe the issue in detail for faster resolution</li>
                    <li>• Check our FAQ section for common questions</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-green-400 font-semibold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="feature-request">Feature Request</option>
                        <option value="bug-report">Bug Report</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-vertical"
                        placeholder="Please describe your question or issue in detail..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* In-Feed Ad after contact form */}
            <div className="my-8">
              <InFeedAd className="max-w-2xl mx-auto" />
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">How do I search for a player?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Simply enter the Chess.com username in the search bar on our homepage. 
                    You can also compare two players by separating their usernames with a comma.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Is my data secure?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Yes! We only access publicly available data from Chess.com and don't store 
                    any personal information. Check our Privacy Policy for more details.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Can I analyze my games?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Absolutely! Use our Analyze page to view your recent games with an 
                    interactive chess board and detailed game information.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Why can't I find a player?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Make sure you're using the exact Chess.com username. The player's 
                    profile must be public and exist on Chess.com.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Display Ad */}
            <div className="my-8">
              <DisplayAd className="max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
