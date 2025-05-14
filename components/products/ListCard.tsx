import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const ListCard = ({ id, thumbnail, title, description, rating, reviews }: { id: number, thumbnail: string, title: string, description: string, rating: number, reviews: number }) => {
    return (
        <Card className="flex flex-row gap-4 p-3">


            <CardHeader>
                <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            </CardHeader>


            <CardContent className="flex flex-col justify-between items-start gap-2 w-full">
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>

                <div className="w-full flex flex-row justify-between">
                    <p>{`${rating} / 5`}</p>
                    <p>{`${reviews} reviews`}</p>
                </div>
            </CardContent>





        </Card>
    )
}

export default ListCard;