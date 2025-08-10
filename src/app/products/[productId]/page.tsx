export default async function Product({params} :{params: {productId: string}}) {

  const {productId} = await params;
  return (
    <div>
      <h1>Product details page for {productId}</h1>
    </div>
  );
}