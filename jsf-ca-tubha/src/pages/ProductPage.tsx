import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <main>
      <h1>Product</h1>
      <p>Product id: {id}</p>
    </main>
  );
}
