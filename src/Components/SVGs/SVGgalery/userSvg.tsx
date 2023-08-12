import React, { HTMLAttributes } from 'react';

export const userSVG = (
  color?: string,
  props?: HTMLAttributes<HTMLOrSVGElement>,
) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00002 7.6999C9.32551 7.6999 10.4 6.62539 10.4 5.2999C10.4 3.97442 9.32551 2.8999 8.00002 2.8999C6.67454 2.8999 5.60002 3.97442 5.60002 5.2999C5.60002 6.62539 6.67454 7.6999 8.00002 7.6999Z"
      fill={color ? color : '#727171'}
    />
    <path
      d="M2.40002 14.8999C2.40002 11.8071 4.90723 9.2999 8.00002 9.2999C11.0928 9.2999 13.6 11.8071 13.6 14.8999H2.40002Z"
      fill={color ? color : '#727171'}
    />
  </svg>
);
