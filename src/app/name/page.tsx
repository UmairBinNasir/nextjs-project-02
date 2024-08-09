"use client";

import { useRouter } from "next/navigation";

export default function GiveName() {
  const router = useRouter();
  return (
    <div className="text-center m-5">
      <h1 className="text-2xl p-5">My name is Umair Bin Nasir.</h1>
      <button
        className="border-2 border-purple-400 px-3 py-2 rounded-lg hover:bg-slate-800"
        type="button"
        onClick={() => router.push("/name/address")}
      >
        Get Address
      </button>
    </div>
  );
}
