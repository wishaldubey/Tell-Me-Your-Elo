import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DisplayAd, InFeedAd, InArticleAd, MultiplexAd } from "../components/ads";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Tell Me Your Elo | Data Protection & Privacy</title>
        <meta name="description" content="Read our comprehensive privacy policy. Learn how Tell Me Your Elo protects your data and respects your privacy while providing chess analysis services." />
        <meta name="keywords" content="privacy policy, data protection, chess privacy, user data, GDPR compliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Privacy Policy - Tell Me Your Elo" />
        <meta property="og:description" content="Learn how we protect your privacy and handle data in our chess analysis platform." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-6">
          {/* Top Display Ad */}
          <div className="my-6">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Privacy Policy
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Privacy Policy Content */}
          <div className="mx-auto max-w-4xl text-white">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <p className="text-gray-300 mb-8 text-center">
                <strong>Last Updated:</strong> January 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At Tell Me Your Elo, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our chess analysis platform.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By using our service, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Information You Provide</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Chess.com usernames you search for</li>
                        <li>Contact information when you reach out to us</li>
                        <li>Feedback and communications you send us</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Automatically Collected Information</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Usage data and analytics</li>
                        <li>Device information and browser type</li>
                        <li>IP address and location data</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* In-Feed Ad after information collection */}
                <div className="my-8">
                  <InFeedAd className="max-w-2xl mx-auto" />
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the collected information for various purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide and maintain our chess analysis service</li>
                    <li>Improve and optimize our platform performance</li>
                    <li>Respond to your questions and provide customer support</li>
                    <li>Send you updates and important service notifications</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Ensure the security and integrity of our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Third-Party Services</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our service integrates with the following third-party services:
                  </p>
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Chess.com API</h4>
                    <p className="text-gray-300 text-sm">
                      We use Chess.com's official API to retrieve publicly available chess data. This data is governed by Chess.com's privacy policy and terms of service.
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Google AdSense</h4>
                    <p className="text-gray-300 text-sm">
                      We use Google AdSense to display advertisements. Google may use cookies and other tracking technologies as described in their privacy policy.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Secure HTTPS encryption for all data transmission</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure data storage and backup procedures</li>
                  </ul>
                </section>

                {/* In-Article Ad after data security */}
                <div className="my-8">
                  <InArticleAd className="max-w-3xl mx-auto" />
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Your Privacy Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Objection:</strong> Object to processing of your data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Cookies and Tracking</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Essential cookies for basic functionality</li>
                    <li>Analytics cookies to understand usage patterns</li>
                    <li>Advertising cookies for relevant ads</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    You can control cookies through your browser settings, though this may affect some functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <p className="text-gray-300">
                      <strong>Email:</strong> support@tellmeyourelo.com<br/>
                      <strong>Social Media:</strong>{" "}
                      <a
                        href="https://www.instagram.com/lipstickeraservishal"
                        className="text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @lipstickeraservishal
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Bottom Display Ad */}
            <div className="my-8">
              <DisplayAd className="max-w-4xl mx-auto" />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
