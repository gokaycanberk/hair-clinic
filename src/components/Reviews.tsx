import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import ad6 from "../assets/images/review.jpeg";
import ad8 from "../assets/images/review1.jpeg";
import ad11 from "../assets/images/review2.jpeg";
import review3 from "../assets/images/review3.jpeg";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  image?: string;
  verified?: boolean;
}

const ReviewCard = ({
  name,
  location,
  rating,
  date,
  review,
  image,
  verified = true,
}: ReviewCardProps) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-navy/10 flex items-center justify-center">
            <span className="text-2xl text-navy">{name[0]}</span>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-navy">
            {name.split(" ")[0]} {/* First name */}
            <span className="opacity-50">{name.split(" ")[1]}</span>{" "}
            {/* Last initial with reduced opacity */}
          </h3>
          {verified && (
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <StarIcon key={i} className="w-5 h-5 text-golden" />
            ) : (
              <StarOutline key={i} className="w-5 h-5 text-golden" />
            )
          )}
          <span className="text-sm text-gray-500 ml-2">{date}</span>
        </div>
        <p className="text-gray-600 mt-3">{review}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const [expandLevel, setExpandLevel] = useState(0); // 0: initial 3, 1: all 6

  const allReviews = [
    {
      name: "Michael R.",
      location: "New York, NY",
      rating: 5,
      date: "2 months ago",
      review:
        "The team at Peak Hair made me feel so comfortable throughout the whole process. My new hairline looks amazing and natural. Really glad I took this step!",
      image: ad6,
    },
    {
      name: "James S.",
      location: "Los Angeles, CA",
      rating: 5,
      date: "1 month ago",
      review:
        "After researching many clinics, I chose Peak Hair and couldn't be happier. The staff treated me like family and the results are incredible. Worth every penny!",
      image: ad8,
    },
    {
      name: "Robert B.",
      location: "Miami, FL",
      rating: 5,
      date: "3 months ago",
      review:
        "Worried about the procedure at first, but it was so much easier than expected. The team was professional and my hair looks great now!",
      image: ad11,
    },
    {
      name: "Sarah K.",
      location: "San Francisco, CA",
      rating: 5,
      date: "2 weeks ago",
      review:
        "As a woman dealing with hair loss, I was really self-conscious. The team was so understanding and gentle. Now my hair looks full and natural again, I feel like myself!",
      image: review3,
    },
    {
      name: "Alexander L.",
      location: "New York, NY",
      rating: 5,
      date: "1 month ago",
      review:
        "Wish I had done it sooner! The procedure was relaxing and the team was great. My confidence is through the roof now.",
    },
    {
      name: "William H.",
      location: "Los Angeles, CA",
      rating: 5,
      date: "2 months ago",
      review:
        "They were honest about what to expect and delivered exactly what they promised. No regrets!",
    },
  ];

  const stats = [
    { value: "4.9", label: "Average Rating" },
    { value: "1,500+", label: "Reviews" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-navy/5">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-semibold text-navy">Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-8 h-8 text-golden" />
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our patients say about their experience with Peak Hair
            Turkey. We're proud to maintain a high satisfaction rate and
            excellent reviews from our clients worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-md"
            >
              <div className="text-3xl font-bold text-navy mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          {(expandLevel === 0 ? allReviews.slice(0, 3) : allReviews).map(
            (review, index) => (
              <ReviewCard key={index} {...review} />
            )
          )}
        </div>

        {/* See More Reviews Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setExpandLevel(expandLevel === 0 ? 1 : 0)}
            className="inline-flex items-center gap-2 bg-white text-navy border-2 border-navy px-8 py-4 rounded-xl font-medium hover:bg-navy hover:text-white transition-all duration-300"
          >
            {expandLevel === 0 ? "See More Reviews" : "Show Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
