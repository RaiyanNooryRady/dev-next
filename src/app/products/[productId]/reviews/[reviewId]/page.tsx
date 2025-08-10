import { notFound } from "next/navigation";

interface Params{
    productId: string, reviewId: string
}
export default async function ProductReview({ params }: { params: Params }) {
    const { productId, reviewId } = await params;

    if(parseInt(reviewId) > 1000 || parseInt(reviewId) < 1){
        notFound();
    }
    return <div>Product Review {reviewId} for product {productId}</div>;
}
