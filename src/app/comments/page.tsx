import Food from "@/components/Food";
import ProtectedRoute from "@/components/ProtectedRoute";

const Comments = async () => {
  const res = await fetch("https://dummyjson.com/comments");
  const data = await res.json();

  return (
    <ProtectedRoute>
      <Food data={data.comments} type="comments" />
    </ProtectedRoute>
  );
};

export default Comments;
