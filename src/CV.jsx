import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const CV = () => {
  const lorem = new LoremIpsum();
  return(
    <div>
      <div className="p-4">
        { lorem.generateParagraphs(1) }
      </div>

      <div className="text-center w-6/12 mx-auto p-4 text-4xl font-sarif">
        "A new day a new quote."
      </div>

      <div className="mx-auto p-4">
        { lorem.generateParagraphs(2) }
      </div>
    </div>
  );
};

export default CV;
