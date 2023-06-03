import React from "react";
import { FaReact } from "react-icons/fa";
function IconsHandling({ icons }) {
  console.log(icons);
  return (
    <div>
      {icons.map((item) => (
        <div key={item.name}>
          {item.techStack.map((tech) => {
            switch (tech.icon) {
              case "FaReact":
                return <FaReact />;
              // Add more cases for other icons as needed
              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default IconsHandling;
