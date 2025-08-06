import "../styles/cyber.css";

const DemoList = () => {
  return (
    <>
      {/* Typography Test */}
      <header>
        <h1 className="text-gradient">CyberCSS Framework</h1>
        <p>A modern, lightweight CSS framework with cyberpunk aesthetics</p>
      </header>

      <main>
        {/* Headings */}
        <section>
          <h2>Typography Examples</h2>
          <h3>This is an H3 heading</h3>
          <h4>This is an H4 heading</h4>
          <p>
            This is a paragraph with some <strong>bold text</strong> and{" "}
            <em>italic text</em>. It also contains a{" "}
            <a href="#">link example</a> and some <code>inline code</code>.
          </p>

          <blockquote>
            <p>This is a blockquote example to test our styling.</p>
            <footer>— Test Author</footer>
          </blockquote>
        </section>

        {/* Lists */}
        <section>
          <h3>Lists</h3>
          <ul>
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
          </ul>

          <ol>
            <li>Ordered list item 1</li>
            <li>Ordered list item 2</li>
            <li>Ordered list item 3</li>
          </ol>
        </section>

        {/* Code Examples */}
        <section>
          <h3>Code Examples</h3>
          <p>
            Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy
          </p>
          <p>
            Here's some <code>inline code</code> and a{" "}
            <mark>highlighted text</mark>
          </p>

          <pre>
            <code>{`function hello() {
  console.log("Hello, CyberCSS!");
  return true;
}`}</code>
          </pre>
        </section>

        {/* Text Effects */}
        <section>
          <h3 className="cyber-glow">Special Effects</h3>
          <h4 className="text-gradient">Gradient Text Example</h4>
          <p>
            Normal text alongside{" "}
            <span className="cyber-glow">glowing text</span>
          </p>
        </section>

        <hr />

        {/* Aside */}
        <aside>
          <p>
            This is an aside element to test the border and background styling.
          </p>
        </aside>
      </main>

      <footer>
        <small>&copy; 2025 CyberCSS Framework - Test Page</small>
      </footer>
    </>
  );
};

export default DemoList;
