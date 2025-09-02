import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p><strong>Effective Date:</strong> 6 August 2024</p>

      <h2 className="text-2xl font-semibold mt-4">1. Acceptance of Terms</h2>
      <p>
        By accessing or using CircuitCure, you agree to be bound by these Terms of Service. If you do not agree, please do not use our app.
      </p>

      <h2 className="text-2xl font-semibold mt-4">2. Use of the App</h2>
      <ul className="list-disc list-inside">
        <li><strong>Eligibility</strong>: You must be at least 13 years old to use our app.</li>
        <li><strong>Account Responsibility</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">3. Prohibited Conduct</h2>
      <p>
        You agree not to:
        <ul className="list-disc list-inside">
          <li>Use the app for illegal purposes.</li>
          <li>Harass, abuse, or harm others.</li>
          <li>Interfere with or disrupt the app’s functionality.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-4">4. Intellectual Property</h2>
      <p>
        All content and materials on CircuitCure are owned by us or our licensors and are protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-4">5. Limitation of Liability</h2>
      <p>
        We are not liable for any damages resulting from your use or inability to use the app. Our liability is limited to the maximum extent permitted by law.
      </p>

      <h2 className="text-2xl font-semibold mt-4">6. Termination</h2>
      <p>
        We may suspend or terminate your access to the app at any time if you violate these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-4">7. Changes to Terms</h2>
      <p>
        We may update these Terms of Service from time to time. Your continued use of the app constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-4">8. Governing Law</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction].
      </p>

      <h2 className="text-2xl font-semibold mt-4">9. Contact Us</h2>
      <p>
        For any questions regarding these Terms of Service, please contact us at <a href="mailto:hello@circuitcure.com">hello@circuitcure.com</a>.
      </p>

    </div>
  );
};

export default TermsOfService;
