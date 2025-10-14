import Header from "../components/Header";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-navy mb-8">
          Cookie Policy for Peak Hair
        </h1>

        <div className="prose max-w-none">
          <p className="mb-6">
            This is the Cookie Policy for peakhairturkey.com, accessible from
            https://www.peakhairturkey.com/
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            What Are Cookies
          </h2>
          <p className="mb-6">
            As is common practice with almost all professional websites, our
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it, and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored, however, this may downgrade or 'break'
            certain elements of the site's functionality.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            How We Use Cookies
          </h2>
          <p className="mb-6">
            We use cookies for a variety of reasons detailed below.
            Unfortunately, in most cases, there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            The Cookies We Set
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-4">
              <strong>Account related cookies</strong>
              <br />
              If you create an account with us, we will use cookies for the
              management of the signup process and general administration. These
              cookies will usually be deleted when you log out; however, in some
              cases, they may remain afterward to remember your site
              preferences.
            </li>
            <li className="mb-4">
              <strong>Forms related cookies</strong>
              <br />
              When you submit data through a form such as those found on contact
              pages or comment forms, cookies may be set to remember your user
              details for future correspondence.
            </li>
            <li className="mb-4">
              <strong>Site preferences cookies</strong>
              <br />
              To provide you with a great experience on this site, we provide
              the functionality to set your preferences for how this site runs
              when you use it.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            Third Party Cookies
          </h2>
          <p className="mb-6">
            In some special cases, we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-4">
              This site uses Google Analytics, which is one of the most
              widespread and trusted analytics solutions on the web, to help us
              understand how you use the site and ways that we can improve your
              experience.
            </li>
            <li className="mb-4">
              We also use social media buttons and/or plugins on this site that
              allow you to connect with your social network in various ways. For
              these to work, social media sites will set cookies through our
              site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
            More Information
          </h2>
          <p className="mb-6">
            If you are looking for more information, you can contact us through
            one of our preferred contact methods:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Email: info@peakhairtransplant.com</li>
            <li>Phone: +1-646-667-3919</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
