interface ReviewCardProps {
  rating: number;
  profileName: string;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, profileName, comment }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex items-center justify-between">
        {/* Nom du profil */}
        <h2 className="font-bold text-lg">{profileName}</h2>

        {/* Note en étoiles */}
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Commentaire */}
      <p className="mt-2 text-gray-600">{comment}</p>
    </div>
  );
};

export default ReviewCard;
