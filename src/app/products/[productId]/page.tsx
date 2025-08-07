export default function Product({params} :{params: {productId: string}}) {
  return (
    <div>
      <h1>Product details page for {params.productId}</h1>
    </div>
  );
}