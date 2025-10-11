import Header from "../components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-navy mb-8">
          Privacy Policy for Peak Hair
        </h1>

        <div className="prose max-w-none">
          <p className="mb-6">
            At peakhairturkey.com, accessible from
            https://www.peakhairturkey.com/, one of our main priorities is the
            privacy of our visitors. This Privacy Policy document contains types
            of information that is collected and recorded by peakhairturkey.com
            and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Consent</h2>
          <p className="mb-6">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            Information we collect
          </h2>
          <p className="mb-6">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p className="mb-6">
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            How we use your information
          </h2>
          <p className="mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service and updates</li>
            <li>Send you emails regarding your treatment and care</li>
            <li>Process your appointments and consultations</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            GDPR Data Protection Rights
          </h2>
          <p className="mb-4">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              The right to access – You have the right to request copies of your
              personal data.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data.
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer your data to another organization.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            Contact Information
          </h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>By email: info@peakhairturkey.com</li>
            <li>By phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
