import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import StarRating from "@/components/ui/star-rating"
import Image from "next/image"

const GridCard = ({ id, thumbnail, title, description, rating, reviews }: { id: number, thumbnail: string, title: string, description: string, rating: number, reviews: number }) => {
    return (
        <Card className="flex flex-col justify-between items-center">

            <Image
                src={thumbnail}
                alt={title}
                width={200}
                height={200}
                className="object-cover rounded-md"
            />

            <CardContent className="flex flex-col justify-between items-start gap-2 h-full">
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex items-center gap-2">
                        <StarRating rating={rating} />
                        <span className="text-sm text-gray-600">{rating}</span>
                    </div>
                    <p>{`${reviews} reviews`}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default GridCard;