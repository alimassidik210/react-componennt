import React from "react";
import "./CSS/Jumbotron.css";
import Button from "react-bootstrap/esm/Button";

function Jumbotron() {
  return (
    <div>
      <section class="hero" id="home">
        <main class="content">
          <p>CTO and Co-Founder ATQAS</p>
          <h2>Alim Assidik</h2>
          <br />
          <br />
          <Button variant="warning"> MY Profil</Button>{" "}
        </main>
      </section>
    </div>
  );
}

export default Jumbotron;
