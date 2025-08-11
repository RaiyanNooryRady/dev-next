export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Product Details Layout</h2>
      {children}
    </div>
  );
}