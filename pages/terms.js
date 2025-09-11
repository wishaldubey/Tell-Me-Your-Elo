import React from "react";
import Link from "next/link";
import Head from "next/head";
import { DisplayAd, InFeedAd, InArticleAd, MultiplexAd } from "../components/ads";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Tell Me Your Elo | Legal Terms</title>
        <meta name="description" content="Read the Terms of Service for Tell Me Your Elo. Understand your rights and responsibilities when using our chess rating analysis platform." />
        <meta name="keywords" content="terms of service, legal, chess platform terms, user agreement" />
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
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-blue-400 font-semibold">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Terms of Service
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess.com Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto text-white">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <p className="text-gray-300 mb-8 text-center">
                <strong>Last Updated:</strong> January 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By accessing and using Tell Me Your Elo ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of our website and services provided by Tell Me Your Elo. We reserve the right to update these terms at any time without prior notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Description of Service</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tell Me Your Elo is a chess analysis platform that provides:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Chess player statistics and rating information from Chess.com</li>
                    <li>Game analysis and visualization tools</li>
                    <li>Player comparison features</li>
                    <li>Historical performance tracking</li>
                    <li>Interactive chess board for game review</li>
                  </ul>
                </section>

                {/* In-Feed Ad after service description */}
                <div className="my-8">
                  <InFeedAd className="max-w-2xl mx-auto" />
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">3. User Responsibilities</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When using our service, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Use the service only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use automated scripts or bots to access our service excessively</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Provide accurate information when contacting us</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Data and Privacy</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our service accesses publicly available data from Chess.com through their official API. We do not:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Store personal user data beyond what's necessary for service operation</li>
                    <li>Access private or confidential chess.com account information</li>
                    <li>Share user search queries with third parties</li>
                    <li>Require user registration or personal information for basic features</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    For detailed information about data handling, please refer to our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The Tell Me Your Elo platform, including its design, code, and original content, is owned by us and protected by intellectual property laws. Chess data is provided by Chess.com and remains their property.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You may not reproduce, distribute, or create derivative works from our platform without explicit written permission.
                  </p>
                </section>

                {/* In-Article Ad after intellectual property */}
                <div className="my-8">
                  <InArticleAd className="max-w-3xl mx-auto" />
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Service Availability</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We strive to maintain high service availability, but we cannot guarantee uninterrupted access. Service may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Scheduled maintenance</li>
                    <li>Technical issues</li>
                    <li>Third-party service dependencies (Chess.com API)</li>
                    <li>Force majeure events</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tell Me Your Elo is provided "as is" without warranties of any kind. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Accuracy of chess data provided by third-party sources</li>
                    <li>Service interruptions or technical issues</li>
                    <li>Any damages resulting from use of our service</li>
                    <li>Loss of data or information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Third-Party Services</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our service integrates with Chess.com's API and may include links to external websites. We are not responsible for the content, privacy policies, or practices of these third-party services. Your use of third-party services is subject to their respective terms and conditions.
                  </p>
                </section>

                {/* Multiplex Ad before termination */}
                <div className="my-8">
                  <MultiplexAd className="max-w-4xl mx-auto" />
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Termination</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">11. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or use of our service shall be resolved through appropriate legal channels.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">12. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us through our Contact page or reach out to us on social media at @lipstickeraservishal.
                  </p>
                </section>
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-blue-400 font-semibold mb-2">Questions about these terms?</p>
                <p className="text-gray-300 text-sm">
                  We're here to help! Contact us if you need clarification on any of these terms or have concerns about your use of our service.
                </p>
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

export default Terms;
