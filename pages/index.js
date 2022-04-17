import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Ciao!{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
