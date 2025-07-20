import ProtectedRoute from "@/components/ProtectedRoute";
import CardList from "@/components/CardList";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/products", { cache: "force-cache" });
  const data = await res.json();

  return (
    <ProtectedRoute>
      <h1 className="text-3xl font-bold p-8">Products</h1>
      <CardList items={data.products} type="products" />
    </ProtectedRoute>
  );
}
