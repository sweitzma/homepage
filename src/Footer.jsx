import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const Footer = () => {
  const lorem = new LoremIpsum();
  return(
    <div className="mx-auto rounded-sm bg-gray-200">
      <div className="m-auto text-center tracking-widest hover:underline">
        <a href="https://github.com/sweitzma/homepage">
          Made by me :)
        </a>
      </div>
    </div>
  );
};

export default Footer;
