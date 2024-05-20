import React, { useState } from "react";

function Card({ setCart, props }) {
  let [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          <img className="card-img-top" src={`${props.productImg}`} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.productName}</h5>
              <span className="text-muted text-decoration-line-through">
                {props.originalPrice}
              </span>
              {props.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {toggle ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setCart((prev) => prev + 1);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setCart((prev) => prev - 1);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
