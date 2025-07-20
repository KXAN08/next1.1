"use client";

import Image from "next/image";
import Link from "next/link";

const CardList = ({ items, type }: { items: any[]; type: string }) => (
  <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
    {items.map((item) => (
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
        className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition"
      >
        {item.image || item.images?.[0] ? (
          <Image
            src={item.image || item.images?.[0]!}
            alt={item.name || item.title}
            width={300}
            height={200}
            className="object-cover rounded"
          />
        ) : (
          <div className="bg-gray-200 h-48 rounded mb-4"></div>
        )}
        <h2 className="font-semibold mt-4">{item.name || item.title}</h2>
        {type === "products" && <p className="text-indigo-600 mt-1">{item.price}$</p>}
        {type === "users" && <p className="text-gray-600 mt-1">{item.email}</p>}
        {type === "posts" && <p className="text-gray-600 mt-1 line-clamp-3">{item.body}</p>}
        {type === "recipes" && (
          <p className="text-gray-600 mt-1">Prep time: {item.prepTimeMinutes} mins</p>
        )}
      </Link>
    ))}
  </div>
);

export default CardList;
