import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p><strong>Effective Date:</strong> 6 August 2024</p>

      <h2 className="text-2xl font-semibold mt-4">1. No Warranty</h2>
      <p>
        CircuitCure provides information and services on an “as-is” basis. We do not warrant the accuracy, completeness, or reliability of any information or services provided through the app.
      </p>

      <h2 className="text-2xl font-semibold mt-4">2. Limitation of Liability</h2>
      <p>
        We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the app or any errors or omissions in the content.
      </p>

      <h2 className="text-2xl font-semibold mt-4">3. External Links</h2>
      <p>
        Our app may contain links to external sites. We are not responsible for the content or practices of these sites.
      </p>

      <h2 className="text-2xl font-semibold mt-4">4. Changes to Disclaimer</h2>
      <p>
        We may update this Disclaimer from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-4">5. Contact Us</h2>
      <p>
        For any questions regarding this Disclaimer, please contact us at <a href="mailto:hello@circuitcure.com">hello@circuitcure.com</a>.
      </p>

    </div>
  );
};

export default Disclaimer;
