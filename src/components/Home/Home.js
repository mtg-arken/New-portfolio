import React from "react";
import Introducing from "./Introducing";
import Greeting from "./Greeting";

function Home() {
  return (
    <div>
      <section className="Greeting-section ">
        <Greeting/>
      </section>
      <section className="Introducing-section">
        <Introducing />
      </section>
    </div>
  );
}

export default Home;
