import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const GridCard = ({ id, thumbnail, title, description, rating, reviews }: { id: number, thumbnail: string, title: string, description: string, rating: number, reviews: number }) => {
    return (
        <Card>
            <CardHeader>
                <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>


            </CardContent>
            <CardFooter>
                <div className="w-full flex flex-row justify-between">
                    <p>{`${rating} / 5`}</p>
                    <p>{`${reviews} reviews`}</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default GridCard;