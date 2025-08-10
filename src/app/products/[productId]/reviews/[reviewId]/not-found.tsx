"use client";
import { usePathname } from "next/navigation";
export default function ReviewNotFound() {
    const pathname = usePathname(); 
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    console.log(productId, reviewId);
    return (
        <div>
            <h1>404! Review {reviewId} for product {productId} Not Found</h1>
        </div>
    )
}