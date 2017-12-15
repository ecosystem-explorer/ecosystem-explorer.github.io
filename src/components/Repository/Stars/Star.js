import React from "react";

import { darkGreen } from './../../../utils/colors'

const Star = props => (
  <svg
    viewBox="0 0 25 24"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    {...props}
  >
    <path
      d="M12.363-.002l2.919 8.983h9.445l-7.641 5.551 2.919 8.983-7.642-5.55-7.641 5.55 2.919-8.983L0 8.982h9.445l2.918-8.984z"
      fill={darkGreen}
    />
  </svg>
);

export default Star;

