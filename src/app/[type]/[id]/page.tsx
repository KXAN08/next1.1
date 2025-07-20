"use client";

import { useSearchParams } from "next/navigation";

export default function DetailPage({ params }: { params: { type: string; id: string } }) {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const email = searchParams.get("email");
  const body = searchParams.get("body");
  const prepTimeMinutes = searchParams.get("prepTimeMinutes");
  const image = searchParams.get("image");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
        {name && <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">{name}</h1>}

        {image && (
          <img
            src={image}
            alt={name || ""}
            className="h-64 object-cover rounded-lg mb-6 shadow-md mx-auto"
          />
        )}

        {price && <p className="text-xl text-indigo-600 mb-3 font-semibold">{price} $</p>}
        {email && <p className="text-gray-600 mb-3">📧 {email}</p>}
        {body && <p className="text-gray-700 mb-3 leading-relaxed">{body}</p>}
        {prepTimeMinutes && (
          <p className="text-gray-600 mb-3">⏱️ Tayyorlash vaqti: {prepTimeMinutes} daqiqa</p>
        )}
      </div>
    </div>
  );
}
