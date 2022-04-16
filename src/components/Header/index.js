import React from "react";
import coverImage from "../../assets/cover/cover-image.png";

function Header() {
  return (
    <section className="my-5">
      <h1 id="about">Marika</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "33%" }}
        alt="cover"
      />
    </section>
  );
}

export default Header;
