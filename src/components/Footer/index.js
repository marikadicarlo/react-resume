import React from "react";

function Footer() {
  return (
    <section className="footer bg-dark fixed-bottom">
      <footer>
        <a
          href="https://github.com/marikadicarlo"
          alt="Github"
          className="icon"
          target="_blank"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/marikadicarlo/"
          alt="LinkedIn" 
          target="_blank"
          >
          LinkedIn
        </a>
        <a href="mailto:mdicarlo19@yahoo.com">Email</a>
      </footer>
    </section>
  );
}

export default Footer;
