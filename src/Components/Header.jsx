import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="header">
        <h1 className="name">Sean Oyler</h1>
        <aside className="email">
          <button>Download PDF</button>
          <p>
            <a href="mailto:sean.oyler@gmail.com">sean.oyler@gmail.com</a>
          </p>
          <p>(250)-510-3457</p>
        </aside>
      </section>
      <section id = "tag-line">
        <h2 className="tag-line">Junior Web Developer</h2>
        <p className="social">Test</p>
      </section>
    </div>
  );
};

export default Header;
