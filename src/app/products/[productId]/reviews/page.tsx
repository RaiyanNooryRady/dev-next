import Link from "next/link";
export default async function ProductReviews({params}: {params: {productId: string}}) {
    const {productId} = await params;

    return <div>
        
        <h2>Product Reviews for product {productId}</h2>
        <ul className="reviews-list">
            <li>
                <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
                <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
                <Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
            </li>
        </ul>
    </div>;
}