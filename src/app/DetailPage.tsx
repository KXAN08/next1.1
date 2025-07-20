import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const router = useRouter();
  const { type, id } = router.query;

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (router.isReady) {
      fetch(`/api/${type}/${id}`)
        .then(res => {
          if (!res.ok) throw new Error("Topilmadi");
          return res.json();
        })
        .then(setData)
        .catch(() => setData({ error: "Topilmadi" }));
    }
  }, [router.isReady, type, id]);

  if (!data) return <p className="p-8">Yuklanmoqda...</p>;

  if (data.error) return <p className="p-8 text-red-500">Ma'lumot topilmadi.</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.name || data.title}</h1>

      {data.image && (
        <img
          src={data.image}
          alt={data.name || data.title}
          className="w-96 h-64 object-cover rounded mb-4"
        />
      )}

      {type === "products" && (
        <p className="text-indigo-600 text-xl mb-2">{data.price}$</p>
      )}

      {type === "users" && (
        <>
          <p className="text-gray-700 mb-2">Email: {data.email}</p>
          <p className="text-gray-500">Address: {data.address || "Manzil yo'q"}</p>
        </>
      )}

      {type === "posts" && (
        <p className="text-gray-700">{data.body}</p>
      )}

      {type === "recipes" && (
        <>
          <p className="text-gray-600 mb-2">Prep time: {data.prepTimeMinutes} mins</p>
          <p className="text-gray-700">{data.description}</p>
        </>
      )}
    </div>
  );
};

export default DetailPage;
