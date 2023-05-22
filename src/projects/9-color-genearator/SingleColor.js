import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";

const SingleColor = ({ colorItem, index }) => {
  // console.log(index);
  const [copy, setCopy] = useState(false);
  const { rgb, hex, weight } = colorItem;
  const bcg = rgb.join(",");
  // console.log(bcg);
  const hexValue = `#${hex}`;

  useEffect(() => {
    const copyTimeout = setTimeout(() => {
      setCopy(false);
    }, 3000);
    return () => clearTimeout(copyTimeout);
  }, [copy]);

  return (
    <>
      <article
        className={`color-box ${index >= 10 && "text-light"}`}
        style={{
          backgroundColor: `rgb(${bcg})`,
        }}
      >
        <div className="color-info">
          <p className="percentage">{weight}%</p>
          <div className="hex-box">
            <p className="hex-value">{hexValue}</p>
            {copy ? (
              <p>Copied</p>
            ) : (
              <FiCopy
                className="copy-icon"
                onClick={() => {
                  setCopy(true);
                  navigator.clipboard.writeText(hexValue);
                }}
              />
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleColor;
