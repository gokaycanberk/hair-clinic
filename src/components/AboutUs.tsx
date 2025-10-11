import {
  UserGroupIcon,
  TrophyIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import nurse from "../assets/images/nurse.jpeg";
import nurse2 from "../assets/images/nurse2.jpeg";
import ad6 from "../assets/images/ad6.jpeg";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <div className="w-12 h-12 text-primary mb-4">{icon}</div>
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-gray-600 text-center">{label}</div>
  </div>
);

const AboutUs = () => {
  const stats = [
    {
      icon: <UserGroupIcon />,
      value: "20k+",
      label: "Satisfied Patients",
    },
    {
      icon: <TrophyIcon />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <ClockIcon />,
      value: "24/7",
      label: "Patient Support",
    },
    {
      icon: <HeartIcon />,
      value: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Leading the Future of Hair Restoration
          </h2>
          <div className="space-y-3">
            <p className="text-gray-600">
              Founded by experienced doctors and managed by international health
              professionals, Peak Hair Transplant stands at the intersection of
              medical excellence and aesthetic perfection.
            </p>
            <p className="text-gray-600">
              Our Istanbul clinic is approved by the Turkish Ministry of Health,
              equipped with the latest technology and staffed by a team of
              specialized surgeons and nurses dedicated to achieving flawless,
              natural results.
            </p>
            <p className="text-gray-600">
              With our consultation offices in New York City and Berlin, we
              bring the best of Turkish medical expertise closer to you —
              wherever you are.
            </p>
            <blockquote className="text-primary italic text-md">
              "Our goal is simple — natural results, minimal downtime, and
              lifelong confidence."
            </blockquote>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-8">
                Our mission at Peak Hair Transplant is simple yet powerful — to
                deliver the most natural, safe, and advanced hair restoration
                results, tailored to each individual's unique needs. By
                combining medical excellence, cutting-edge technology like
                Sapphire FUE, DHI, Stem Cell Hair Transplant Techniques and a
                patient-first approach, we ensure every person who walks through
                our doors feels understood, confident, and valued.
              </p>
              <p className="text-gray-600">
                We don't just restore hair — we restore confidence, self-image,
                and quality of life.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 mb-8">
                Our vision is to be recognized as a global leader in hair
                restoration, setting new standards of medical integrity,
                innovation, and artistry — without boundaries of ethnicity,
                gender, or geography.
              </p>
              <p className="text-gray-600 mb-8">
                From Istanbul to New York and Berlin, we aim to make world-class
                Turkish hair transplant expertise accessible to everyone seeking
                lasting, natural beauty and confidence.
              </p>
              <blockquote className="text-primary italic text-lg">
                "Our vision is to redefine what excellence in hair
                transplantation looks like — globally."
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row">
              <button className="bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Book Consultation
              </button>
              <a
                href="https://www.instagram.com/peakhairturkey/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                Follow us on Instagram
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={nurse}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Dr. Sarah Smith</p>
                  <p className="text-sm text-gray-600">
                    Lead Hair Transplant Surgeon
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={nurse2}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Dr. John Davis</p>
                  <p className="text-sm text-gray-600">Senior Trichologist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
              <img
                src={ad6}
                alt="Our Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
