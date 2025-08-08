import "../styles/cyber.css";
import "../styles/DemoList.css";

const DemoList = () => {
  return (
    <div className="container demo-container">
      {/* Typography Test */}
      <header className="text-center mb-4">
        <h1 className="text-gradient">CyberCSS Framework</h1>
        <p>A modern, lightweight CSS framework with cyberpunk aesthetics</p>
      </header>

      <main>
        {/* Typography */}
        <section className="mb-4">
          <h2 className="h2-subheading">Typography Examples</h2>
          <h1>This is an H1 heading</h1>
          <h2>This is an H2 heading</h2>
          <h3>This is an H3 heading</h3>
          <h4>This is an H4 heading</h4>
          <h5>This is an H5 heading</h5>
          <h6>This is an H6 heading</h6>
          <p style={{ marginTop: "2rem" }}>
            Here's a paragraph with some <strong>bold text</strong> and{" "}
            <em>italic text</em>. It also contains a{" "}
            <a href="#">link example</a> and some <code>inline code</code>. I
            should probably fill this out with a big chunk of lorem ipsum, but
            thats boring and it's everywhere, I'm sure you've already seen
            enough of that in your time. I'll give you a quote from our most
            beloved animated turtle Master Oogway instead: "Yesterday is
            history, tomorrow is a mystery, but today is a gift. That's why it's
            called the present."
          </p>

          <blockquote>
            <p>
              This is a blockquote example to test our styling. Fill out the box
              with as much or as little text as you feel like. maybe some
              forbidden wisom or ancient proverb or something along those lines
              haha
            </p>
            <footer>— Incredibly Wise Individual</footer>
          </blockquote>
        </section>

        {/* Buttons */}
        <section className="mb-4">
          <h2 className="h2-subheading">Button Examples</h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <button className="btn-primary">Primary</button>
            <button className="btn-secondary">Secondary</button>
            <button className="btn-edit">Edit</button>
            <button className="btn-cancel">Cancel</button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-4">
          <h2 className="h2-subheading">Card Examples</h2>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Basic Card</h3>
            </div>
            <div className="card-body">
              <p>
                This is a basic card component with header, body, and footer
                sections. I've loosely split it up into 3 sections to give it a
                header, body and footer, got some buttons down there for now but
                feel free to swap that out with whatever you want in your cards.
                you can find a few card classes in the cyber.css file to play
                around with and change the layout of these.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-primary">Action</button>
              <button className="btn-cancel">Cancel</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="cyber-glow">Glowing Title Card</h4>
              <p>
                maybe you want just a super slim card with a glow effect on the
                title? or maybe you don't who knows. Search for the cyber-glow
                class in the cyber.css file if you want to have a play around
                with the glow effects and colours.
              </p>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="mb-4">
          <h2 className="h2-subheading">Form Examples</h2>

          <h4 className="h4-subheading">Submission Form</h4>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message"></textarea>

            <label htmlFor="country">Country</label>
            <select id="country">
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button type="submit" className="btn-primary">
                Submit
              </button>
              <button type="reset" className="btn-cancel">
                Reset
              </button>
            </div>
          </form>

          <h4 className="h4-subheading">Fieldset</h4>
          <fieldset style={{ marginTop: "2rem" }}>
            <legend>Select Engineering Role:</legend>
            <div className="radio-group">
              <label className="radio-item">
                <input type="radio" name="role" value="frontend" />
                <span>Frontend</span>
              </label>
              <label className="radio-item">
                <input type="radio" name="role" value="backend" />
                <span>Backend</span>
              </label>
              <label className="radio-item">
                <input type="radio" name="role" value="fullstack" />
                <span>FullStack</span>
              </label>
              <label className="radio-item">
                <input type="radio" name="role" value="security" />
                <span>Security</span>
              </label>
              <label className="radio-item">
                <input type="radio" name="role" value="hardware" />
                <span>Hardware</span>
              </label>
            </div>
          </fieldset>
        </section>

        {/* Tables */}
        <section className="mb-4">
          <h2 className="h2-subheading">Table Example</h2>
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
                <td>Kyle Smith</td>
                <td> Frontend Developer</td>
                <td>Active</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-cancel">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Darcy Designer</td>
                <td>Designer</td>
                <td>Active</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-cancel">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Mike McManager</td>
                <td>Manager</td>
                <td>Inactive</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-cancel">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Interactive Elements */}
        <section className="mb-4">
          <h2 className="h2-subheading">Interactive Elements</h2>

          <details>
            <summary>Click to expand details</summary>
            <p>
              This is a collapsible details element. Stick whatever you want in
              here, maybe some forms, lists, or other components. uses a ul/li
              structure so you can target those classes to have a fiddle around
              with stylings on the inner components if you feel like it.
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
