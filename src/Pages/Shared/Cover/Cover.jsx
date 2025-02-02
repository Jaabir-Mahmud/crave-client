import React from "react";
import { Parallax } from "react-parallax";
import coverImage from "../../../assets/menu/banner3.jpg";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      bgImage={img || coverImage}
      strength={500}
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `rgba(0, 0, 0, ${percentage * 0.5})`,
            filter: `blur(${percentage * 20}px)`,
            zIndex: -1,
          }}
        />
      )}
    >
      <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center p-8 bg-black bg-opacity-70 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4 uppercase">{title}</h1>
          <p className="text-gray-300 text-lg">
            Discover the finest dishes. Made with love.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;