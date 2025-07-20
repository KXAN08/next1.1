import Food from "@/components/Food";
import ProtectedRoute from "@/components/ProtectedRoute";

const Users = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return (
    <ProtectedRoute>
      <Food data={data.users} type="users" />
    </ProtectedRoute>
  );
};

export default Users;
