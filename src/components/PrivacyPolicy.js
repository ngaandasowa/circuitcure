import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 6 August 2024</p>

      <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
      <p>
        Welcome to CircuitCure. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our application.
      </p>

      <h2 className="text-2xl font-semibold mt-4">2. Information We Collect</h2>
      <ul className="list-disc list-inside">
        <li><strong>Personal Information</strong>: Includes name, email address, profile picture, etc.</li>
        <li><strong>Usage Data</strong>: Information on how you interact with our app, including your IP address and browser type.</li>
        <li><strong>Device Information</strong>: Details about the device you use to access our app.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside">
        <li><strong>To Provide and Improve Our Services</strong>: We use your data to personalize your experience and improve our app.</li>
        <li><strong>For Communication</strong>: To send updates, notifications, and respond to your inquiries.</li>
        <li><strong>For Analytics</strong>: To analyze usage patterns and improve app functionality.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">4. Data Sharing</h2>
      <p>
        We do not sell or rent your personal information. We may share data with third parties who assist us in providing and improving our services, but only under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-4">5. Security</h2>
      <p>
        We implement reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
      </p>chir

      <h2 className="text-2xl font-semibold mt-4">6. Your Choices</h2>
      <p>
        You can access, correct, or delete your personal information by contacting us at <a href="mailto:hello@circuitcure.com">hello@circuitcure.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-4">7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-4">8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@circuitcure.com">hello@circuitcure.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
