import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

const ProductCard = ({ id, name, price, description, imageUrl }: ProductCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={imageUrl} alt={name} width={100} height={100} />
                <p>{price}</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    );
};

export default ProductCard;
