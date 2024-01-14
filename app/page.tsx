import Image from "next/image";
import Link from "next/link";
import profile from "../public/james.png";

export default function Home() {
  return (
    <main>
      <h1>Hi, I’m James</h1>
      <p>
        I’m a Software Engineer at{" "}
        <Link
          href="https://www.starlingbank.com/"
          target="_blank"
          rel="noreferrer"
        >
          Starling Bank
        </Link>{" "}
        in London.
      </p>
      <Link href="mailto:james@jamesbrooks.io">Get in touch 👋</Link>

      <Image src={profile} alt="Photo of James Brooks" priority />
    </main>
  );
}
