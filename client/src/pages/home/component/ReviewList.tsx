import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

interface Review {
  id: string; // ou number selon votre API
  rating: number;
  profileName: string;
  comment: string;
}

interface ReviewListProps {
  apiEndpoint: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ apiEndpoint }) => {
  const [reviews, setReviews] = useState<Review[]>([]); // Liste des avis
  const [loading, setLoading] = useState<boolean>(true); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Erreur éventuelle

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des avis.");
        }
        const data: Review[] = await response.json(); // Typage des données récupérées
        setReviews(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Une erreur inconnue s'est produite.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiEndpoint]);

  if (loading) {
    return <p className="text-center">Chargement des avis...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id} // Utilisez un identifiant unique de l'avis
          rating={review.rating}
          profileName={review.profileName}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default ReviewList;
