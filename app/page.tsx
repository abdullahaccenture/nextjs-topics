import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Bismillah : Root page</h1>

      <br />
      <br />
      <br />

      <Link href="/posts" className="text-green-500">
        Go to Posts page
      </Link>
    </main>
  );
}
