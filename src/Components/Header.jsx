import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="header">
        <h1 className="name">Sean Oyler</h1>
        <aside className="email">
          <p>
            <a href="mailto:sean.oyler@gmail.com">sean.oyler@gmail.com</a>
          </p>
          <p>(250)-510-3457</p>
        </aside>
      </section>
      <section id="tag-line">
        <h2 className="tag-line">Full Stack Web Developer</h2>
        <p className="social">
          <a href="https://github.com/xrysen/" target="new">
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sean-oyler-20337370/"
            target="new"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </p>
      </section>
    </div>
  );
};

export default Header;
