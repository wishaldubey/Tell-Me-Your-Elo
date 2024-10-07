import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-end space-x-6 py-4 mb-6">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/analyze"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Analyze
        </Link>
        <Link
          href="/privacy-policy"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          Privacy Policy
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Privacy Policy
        </h1>
      </div>

      <div className="text-left mx-10 text-gray-700 leading-relaxed">
        <h2 className="text-2xl mb-4">Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal
          data. This privacy policy explains how we collect, use, and share your
          information when you use our services.
        </p>
        <h2 className="text-2xl mt-6 mb-4">Information We Collect</h2>
        <p>
          - **User Data:** When you search for chess usernames, we may collect
          data related to these searches to improve our services.
          <br />- **Cookies:** We may use cookies to enhance your experience and
          provide personalized content.
        </p>
        <h2 className="text-2xl mt-6 mb-4">How We Use Your Information</h2>
        <p>
          The information we collect is used to:
          <br />
          - Provide and improve our services.
          <br />
          - Personalize user experiences.
          <br />- Ensure the security of our platform.
        </p>
        <h2 className="text-2xl mt-6 mb-4">Third-Party Services</h2>
        <p>
          We may use third-party services (such as Chess.com) for certain
          functionalities. These third parties may collect information as
          governed by their own privacy policies.
        </p>
        <h2 className="text-2xl mt-6 mb-4">Your Rights</h2>
        <p>
          You have the right to request access to, correction, or deletion of
          your personal information. Please contact us for any privacy concerns.
        </p>
        <h2 className="text-2xl mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy practices,
          please reach out to us at
          <strong> support@chessstats.com.</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
