"use client";

import Image from "next/image";
import Link from "next/link";

const Food = ({ data, type }: { data: any[]; type: string }) => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {data.map((item: any) => (
        <Link
          key={item.id}
          href={{
            pathname: `/${type}/${item.id}`,
            query: {
              name: item.name || item.title,
              price: item.price,
              email: item.email,
              body: item.body,
              prepTimeMinutes: item.prepTimeMinutes,
              image: item.image || item.images?.[0]
            }
          }}
          className="border p-4 rounded shadow bg-white block hover:shadow-lg transition"
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name || item.title || "image"}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
          ) : item.images?.length ? (
            <Image
              src={item.images[0]}
              alt={item.name || item.title || "image"}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
          ) : null}

          <h2 className="text-xl font-semibold mb-2">{item.name || item.title}</h2>

          <p className="text-gray-600">
            {type === "users" && item.email}
            {type === "posts" && item.body}
            {type === "recipes" && `Prep time: ${item.prepTimeMinutes} mins`}
            {type === "products" && `${item.price} $`}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Food;
