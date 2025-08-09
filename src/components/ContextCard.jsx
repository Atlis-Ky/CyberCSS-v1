import React from "react";
import "../styles/cyber.css";

const ContextCard = () => {
  return (
    <section className="text-center mb-3" style={{ padding: "2rem 0" }}>
      <div className="container">
        <h1 className="h2-subheading">
          Welcome to{" "}
          <span style={{ color: "var(--main-accent)", fontFamily: "inherit" }}>
            CyberCSS
          </span>
        </h1>
        <p>
          A lightweight, modern looking CSS file that you can use to style your
          own projects. An ideal way to get your HTML based elements looking
          fresh super speedily by having access to a wide range of preset CSS
          classes. Feel free to play around and customise anything in there! you
          can switch up the colours and styles anywhere you like to personalise
          things for your own websites!
        </p>

        <h3 className="mt-3">How To Use</h3>
        <p>
          Easy! Just head to the rep and either download the cyber.css file into
          your project, or just paste the file into your own code, super
          straightforward stuff. The stylesheet is designed to target both
          generic and some unique classes, I'd reccomend having a quick scroll
          through the sections, and using the shortcut <code>⌘ + F</code> on MacOS,
          or <code>CTRL + F</code> on windows to find any specific classes you're looking to
          target.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <button className="btn-secondary">View on GitHub</button>
        </div>

        <h3 className="mt-3">Full List of Demos Below:</h3>
        <hr />
      </div>
    </section>
  );
};

export default ContextCard;
