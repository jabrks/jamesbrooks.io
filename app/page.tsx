import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../public/james.png";
import * as classes from "./page.css";

function Span({ children }: { children: ReactNode }) {
  return <span className={classes.span}>{children}</span>;
}

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.content}>
        <h1 className={classes.heading}>
          <Span>Hi, I’m</Span>
          <Span>James.</Span>
        </h1>

        <p className={classes.paragraph}>
          <Span>I’m a Software Engineer at</Span>
          <Span>
            <Link
              className={classes.starling}
              href="https://www.starlingbank.com/"
              target="_blank"
              rel="noreferrer"
            >
              Starling Bank
            </Link>{" "}
            in London.
          </Span>
        </p>

        <Link className={classes.link} href="mailto:james@jamesbrooks.io">
          Get in touch 👋
        </Link>
      </div>

      <div className={classes.profile}>
        <Image src={profile} alt="Photo of James Brooks" priority />
      </div>
    </main>
  );
}
