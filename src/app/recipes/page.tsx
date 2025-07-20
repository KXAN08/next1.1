import Food from "@/components/Food";
import ProtectedRoute from "@/components/ProtectedRoute";

const Recipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return (
    <ProtectedRoute>
      <Food data={data.recipes} type="recipes" />
    </ProtectedRoute>
  );
};

export default Recipes;
    