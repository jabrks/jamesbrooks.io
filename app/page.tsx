import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../public/james.jpeg";
import * as classes from "./page.css";

function Span({ children }: { children: ReactNode }) {
  return <span className={classes.span}>{children}</span>;
}

function Arrow() {
  return (
    <svg
      className={classes.arrow}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      height="16"
      width="16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0.75 12h22.5"
        strokeWidth="1.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 22.5 23.25 12 12.75 1.5"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.profile}>
        <Image
          className={classes.image}
          src={profile}
          alt="Photo of James Brooks"
          priority
          quality={90}
        />
      </div>

      <div className={classes.content}>
        <h1 className={classes.heading}>
          <Span>James</Span>
          <Span>Brooks</Span>
        </h1>

        <p className={classes.paragraph}>
          <Span>Full-stack software engineer</Span>
          <Span>
            at{" "}
            <Link
              className={classes.starling}
              href="https://www.starlingbank.com/"
              target="_blank"
              rel="noreferrer"
            >
              Starling Bank
            </Link>{" "}
            in London
          </Span>
        </p>

        <Link className={classes.link} href="mailto:james@jamesbrooks.io">
          Get in touch <Arrow />
        </Link>
      </div>
    </main>
  );
}
