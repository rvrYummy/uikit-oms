import React from "react";

import { CheckboxProps } from "./Checkbox.type";

const Checkbox = (props: CheckboxProps) => (
  <div onClick={() => !props.disabled && props.onPress()}>
    <div
      className={`${props.isChecked ? "bg-primary-green" : "bg-white"} ${
        props.isChecked ? "border-primary-green" : "border-gray-300"
      } rounded border h-5 w-5 ${
        props.disabled
          ? "bg-gray-200 border-gray-200"
          : !props.isChecked
          ? "bg-white border-gray-300 border-2"
          : ""
      }`}
    >
      {props.isChecked && (
        <div className="flex justify-center mt-1">
          <img
            src="/images/CheckmarkIcon.png"
            alt="product"
            height={10}
            width={10}
          />
        </div>
      )}
    </div>
  </div>
);

export default Checkbox;
