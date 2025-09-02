import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p><strong>Effective Date:</strong> 6 August 2024</p>

      <h2 className="text-2xl font-semibold mt-4">1. What Are Cookies</h2>
      <p>
        Cookies are small files stored on your device that help us improve your experience on our app.
      </p>

      <h2 className="text-2xl font-semibold mt-4">2. Types of Cookies We Use</h2>
      <ul className="list-disc list-inside">
        <li><strong>Necessary Cookies</strong>: Essential for the operation of the app.</li>
        <li><strong>Analytics Cookies</strong>: To help us understand how you use the app.</li>
        <li><strong>Functional Cookies</strong>: To remember your preferences and settings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">3. How to Manage Cookies</h2>
      <p>
        You can control cookies through your browser settings. However, disabling cookies may affect your experience on our app.
      </p>

      <h2 className="text-2xl font-semibold mt-4">4. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-4">5. Contact Us</h2>
      <p>
        For any questions regarding this Cookie Policy, please contact us at <a href="mailto:hello@circuitcure.com">hello@circuitcure.com</a>.
      </p>

    </div>
  );
};

export default CookiePolicy;
