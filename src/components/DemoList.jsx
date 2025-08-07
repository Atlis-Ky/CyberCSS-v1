import "../styles/cyber.css";

const DemoList = () => {
  return (
    <div className="container">
      {/* Typography Test */}
      <header className="text-center mb-4">
        <h1 className="text-gradient">CyberCSS Framework</h1>
        <p>A modern, lightweight CSS framework with cyberpunk aesthetics</p>
      </header>

      <main>
        {/* Typography */}
        <section className="mb-4">
          <h2>Typography Examples</h2>
          <h1>This is an H1 heading</h1>
          <h2>This is an H2 heading</h2>
          <h3>This is an H3 heading</h3>
          <h4>This is an H4 heading</h4>
          <h5>This is an H5 heading</h5>
          <h6>This is an H6 heading</h6>
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

        {/* Buttons */}
        <section className="mb-4">
          <h2>Button Examples</h2>
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <button>Primary</button>
            <button className="btn-secondary">Secondary</button>
            <button className="btn-tertiary">Tertiary</button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-4">
          <h2>Card Examples</h2>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Basic Card</h3>
            </div>
            <div className="card-body">
              <p>
                This is a basic card component with header, body, and footer
                sections.
              </p>
            </div>
            <div className="card-footer">
              <button>Action</button>
              <button className="btn-secondary">Cancel</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="cyber-glow">Glowing Title Card</h4>
              <p>
                This card demonstrates the cyber-glow effect and simpler layout.
              </p>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="mb-4">
          <h2>Form Examples</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message"></textarea>

            <label htmlFor="country">Country</label>
            <select id="country">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button type="submit">Submit</button>
              <button type="reset" className="btn-secondary">
                Reset
              </button>
            </div>
          </form>
        </section>

        {/* Tables */}
        <section className="mb-4">
          <h2>Table Example</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Developer</td>
                <td>Active</td>
                <td>
                  <button className="btn-tertiary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Designer</td>
                <td>Active</td>
                <td>
                  <button className="btn-tertiary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Bob Johnson</td>
                <td>Manager</td>
                <td>Inactive</td>
                <td>
                  <button className="btn-tertiary">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Interactive Elements */}
        <section className="mb-4">
          <h2>Interactive Elements</h2>

          <details>
            <summary>Click to expand details</summary>
            <p>
              This is a collapsible details element. You can put any content
              here including forms, lists, or other components.
            </p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </details>

          <div style={{ marginTop: "2rem" }}>
            <h4>Progress Bar</h4>
            <progress value="70" max="100">
              70%
            </progress>
          </div>
        </section>

        {/* Text Effects */}
        <section className="mb-4">
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

      <footer className="text-center mt-4">
        <small>&copy; 2025 CyberCSS Framework - Test Page</small>
      </footer>
    </div>
  );
};

export default DemoList;
