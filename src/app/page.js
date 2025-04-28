import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen  justify-center items-center  p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-black font-bold mb-4">
          Browse our user collection
        </h2>
        <Link
          href={"/user-management"}
          className="bg-white text-sm border-1 border-black hover:bg-blue-700 hover:text-white cursor-pointer font-semibold py-2 px-6 rounded "
        >
          Explore Users
        </Link>
      </div>
    </div>
  );
}
