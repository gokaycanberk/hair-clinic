import Header from "../components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-navy mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="mb-6">
            Welcome to Peak Hair. By accessing this website, you agree to be
            bound by these Terms of Service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            1. Medical Disclaimer
          </h2>
          <p className="mb-6">
            The information provided on peakhairturkey.com is for general
            informational purposes only. All information is provided in good
            faith, however, we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity,
            reliability, availability, or completeness of any information on the
            site.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            2. Consultation and Treatment
          </h2>
          <p className="mb-6">
            The consultation provided through our website is preliminary and
            does not constitute a medical diagnosis. A proper medical diagnosis
            can only be made after an in-person examination by our medical
            professionals. The final treatment plan may differ from initial
            consultations based on the physical examination and medical
            evaluation.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            3. Use License
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Permission is granted to temporarily download one copy of the
              materials on our website for personal, non-commercial transitory
              viewing only.
            </li>
            <li>This is the grant of a license, not a transfer of title.</li>
            <li>You may not modify or copy the materials.</li>
            <li>You may not use the materials for any commercial purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            4. Booking and Cancellation
          </h2>
          <p className="mb-6">
            When booking a consultation or treatment, you agree to provide
            accurate and complete information. We reserve the right to cancel or
            reschedule appointments. Cancellation policies and any associated
            fees will be communicated during the booking process.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            5. Payment Terms
          </h2>
          <p className="mb-6">
            All prices listed are subject to change without notice. Payment
            terms and conditions will be clearly communicated during the
            consultation process. Any promotional offers are subject to specific
            terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            6. Results and Expectations
          </h2>
          <p className="mb-6">
            While we strive to achieve the best possible results for all our
            patients, we cannot guarantee specific outcomes as results may vary
            from person to person. The success of the treatment depends on
            various factors including but not limited to individual healing
            capacity, adherence to post-operative care instructions, and natural
            hair characteristics.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            7. Modifications
          </h2>
          <p className="mb-6">
            Peak Hair may revise these Terms of Service at any time without
            notice. By using this website, you agree to be bound by the current
            version of these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            8. Contact Information
          </h2>
          <p className="mb-6">
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Email: info@peakhairturkey.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
