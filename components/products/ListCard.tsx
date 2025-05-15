import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import StarRating from "../ui/star-rating";
import Image from "next/image";


const ListCard = ({ id, thumbnail, title, description, rating, reviews }: { id: number, thumbnail: string, title: string, description: string, rating: number, reviews: number }) => {
    return (
        <Card className="w-full flex flex-row justify-center items-center gap-4 p-3">
            <div className="flex-none relative w-[200px] h-[200px]">
                <Image 
                    src={thumbnail} 
                    alt={title} 
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 200px"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between items-start w-full h-[200px] p-3">
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="line-clamp-4">{description}</CardDescription>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <StarRating rating={rating} />
                        <span className="text-sm text-gray-600">{rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{`${reviews} reviews`}</p>
                </div>
            </div>
        </Card>
    )
}

export default ListCard;