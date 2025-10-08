import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import ad6 from "../assets/images/ad6.jpeg";
import ad8 from "../assets/images/ad8.jpeg";
import ad11 from "../assets/images/ad11.jpeg";

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
          <h3 className="font-semibold text-navy">{name}</h3>
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
  const reviews = [
    {
      name: "Michael Thompson",
      location: "New York, USA",
      rating: 5,
      date: "2 months ago",
      review:
        "I had my procedure at Peak Hair Turkey and I couldn't be happier with the results. The team was professional, caring, and the results exceeded my expectations. The whole process from consultation to aftercare was seamless.",
      image: ad6,
    },
    {
      name: "David Martinez",
      location: "Los Angeles, USA",
      rating: 5,
      date: "1 month ago",
      review:
        "Best decision I've ever made! The staff was incredibly knowledgeable and made me feel comfortable throughout the entire process. The facility is state-of-the-art and the results are amazing.",
      image: ad8,
    },
    {
      name: "James Wilson",
      location: "Chicago, USA",
      rating: 5,
      date: "3 months ago",
      review:
        "From start to finish, my experience with Peak Hair Turkey was exceptional. The results look completely natural, and the recovery was much easier than I expected. Highly recommend!",
      image: ad11,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Google Review Button */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/peak-hair-turkey/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-navy border-2 border-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.504 16.583h2.785v-2.786h-2.785v2.786zM12 5.77c-2.531 0-4.584 2.053-4.584 4.584h2.785c0-0.993 0.806-1.799 1.799-1.799s1.799 0.806 1.799 1.799c0 1.799-2.785 1.574-2.785 4.584h2.785c0-2.087 2.785-2.311 2.785-4.584 0-2.531-2.053-4.584-4.584-4.584z" />
            </svg>
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
