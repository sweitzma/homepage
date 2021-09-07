import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const Footer = () => {
  const lorem = new LoremIpsum();
  return(
    <div className="mx-auto rounded-sm bg-gray-200">
      <div className="m-auto text-center tracking-widest hover:underline p-1">
        <a href="https://github.com/sweitzma/homepage">
          Made by me :)
        </a>
      </div>

      <div className="text-xs text-center text-gray-600 font-mono p-1">
        powered by too much javascript, react, tailwindcss, esbuild, and aws
      </div>
    </div>
  );
};

export default Footer;
