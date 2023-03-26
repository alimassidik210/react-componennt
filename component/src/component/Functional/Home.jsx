import React from "react";
import Product from "../Class/Product";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Blog
        date="25 Maret 2023"
        Title="Belajar HTML"
        summary="Reference site about Lorem Ipsum giving information on its origins, as well as a random Lipsum generator"
      />
      <Blog
        date="26 Maret 2023"
        Title="Belajar CSS"
        summary="Reference site about Lorem Ipsum giving information on its origins, as well as a random Lipsum generator"
      />
      <Blog
        date="27 Maret 2023"
        Title="Belajar JS"
        summary="Reference site about Lorem Ipsum giving information on its origins, as well as a random Lipsum generator"
      />
    </div>
  );
};

export default Home;
