
interface Params{
    productId: string, reviewId: string
}
export default async function ProductReview({ params }: { params: Params }) {
    const { productId, reviewId } = await params;

    return <div>Product Review {reviewId} for product {productId}</div>;
}
