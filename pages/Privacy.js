import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-end space-x-6 py-4 mb-6">
        <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/Analyze" className="text-gray-300 hover:text-blue-400 transition-colors">
          Analyze
        </Link>
        <Link href="/Privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
          Privacy Policy
        </Link>
      </nav>

       {/* Title and Logo */}
       <div className="flex items-center justify-center mb-6">
  <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
    Privacy Policy
  </h1>
  <img
    src="/chess-logo.png"
    alt="Chess.com Logo"
    className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
  />
</div>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-2xl text-white leading-relaxed text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6">
          We value your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and share your information when you use our services.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-6">
          - <strong>User Data:</strong> When you search for chess usernames, we may collect data related to these searches to improve our services.
          <br />
          - <strong>Cookies:</strong> We may use cookies to enhance your experience and provide personalized content.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          The information we collect is used to:
          <br />
          - Provide and improve our services.
          <br />
          - Personalize user experiences.
          <br />
          - Ensure the security of our platform.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-6">
          We may use third-party services (such as Chess.com) for certain functionalities. These third parties may collect information as governed by their own privacy policies.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-6">
          You have the right to request access to, correction, or deletion of your personal information. Please contact us for any privacy concerns.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about our privacy practices, feel free to reach out to us on Instagram at{" "}
          <a
            href="https://www.instagram.com/lipstickeraservishal"
            className="font-bold text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @lipstickeraservishal
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
