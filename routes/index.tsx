/** @jsx h */
import { h } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p>
        Welcome to `fresh`. Try update this msg in the ./routes/index.tsx
        file.
      </p>
      <Counter start={3} />
    </div>
  );
}
