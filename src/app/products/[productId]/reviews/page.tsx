export default async function ProductReviews({params}: {params: {productId: string}}) {
    const {productId} = await params;

    return <div>Product Reviews for product {productId}</div>;
}