import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    size?: number;
}

const StarRating = ({ rating, maxStars = 5, size = 20 }: StarRatingProps) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // 채워진 별
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <Star
                key={`full-${i}`}
                className="fill-yellow-400 text-yellow-400"
                size={size}
            />
        );
    }

    // 반 별
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative" style={{ width: size, height: size }}>
                <Star
                    className="absolute fill-gray-200 text-gray-200"
                    size={size}
                />
                <div className="absolute overflow-hidden" style={{ width: size / 2 }}>
                    <Star
                        className="fill-yellow-400 text-yellow-400"
                        size={size}
                    />
                </div>
            </div>
        );
    }

    // 빈 별
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <Star
                key={`empty-${i}`}
                className="fill-gray-200 text-gray-200"
                size={size}
            />
        );
    }

    return (
        <div className="flex items-center gap-0.5">
            {stars}
        </div>
    );
};

export default StarRating; 