import React from "react";
import avatar from "../../assets/cover/avatar.jpg"

function About () {

    return (
      <section className="container">
        <h2 class="top-title">Marika Di Carlo</h2>
        <hr></hr>
        <div>
          <img
            class="mb-5"
            id="avatar"
            src={avatar}
            alt=""
          ></img>
          <p>
            My name is Marika Di Carlo, and I am a few weeks away from
            completeing the UCONN coding bootcamp. Currently, I am an assistant
            community manager, and looking to branch away into the coding field.
          </p>
          <p>
            My current skills are HTML, CSS, JavaScript, Third-Party and
            Server-Side APIs, Node.js, OOP, Express.js, ORM, mySQL, and MVC.
          </p>
        </div>
      </section>
    );
}

export default About;