import Food from "@/components/Food";
import ProtectedRoute from "@/components/ProtectedRoute";

const Posts = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return (
    <ProtectedRoute>
      <Food data={data.posts} type="posts" />
    </ProtectedRoute>
  );
};

export default Posts;
