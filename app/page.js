import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-black hover:text-green-100";
  return (
    <main className="h-screen bg-green-300 p-5">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link className={linkStyles} href="./week-2/">Week 2</Link></p>
      <p><Link className={linkStyles} href="./week-3/">Week 3</Link></p>
      <p><Link className={linkStyles} href="./week-4/">Week 4</Link></p>
      <p><Link className={linkStyles} href="./week-5/">Week 5</Link></p>
      <p><Link className={linkStyles} href="./week-6/">Week 6</Link></p>
      <p><Link className={linkStyles} href="./week-7/">Week 7</Link></p>
      <p><Link className={linkStyles} href="./week-8/">Week 8</Link></p>
    </main>
  );
}
