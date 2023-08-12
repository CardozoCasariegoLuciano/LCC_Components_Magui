import React, { HTMLAttributes } from 'react';

export const AcountSVG = (
  color?: string,
  props?: HTMLAttributes<HTMLOrSVGElement>,
) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4628 10C18.4628 14.4183 14.881 18 10.4628 18C6.04449 18 2.46277 14.4183 2.46277 10C2.46277 5.58172 6.04449 2 10.4628 2C14.881 2 18.4628 5.58172 18.4628 10ZM12.4628 7C12.4628 8.10457 11.5673 9 10.4628 9C9.3582 9 8.46277 8.10457 8.46277 7C8.46277 5.89543 9.3582 5 10.4628 5C11.5673 5 12.4628 5.89543 12.4628 7ZM10.4627 11C8.44516 11 6.70671 12.195 5.9165 13.9157C7.0168 15.192 8.64542 16 10.4628 16C12.28 16 13.9086 15.1921 15.0089 13.9158C14.2187 12.195 12.4803 11 10.4627 11Z"
      fill={color ? color : '#2F2E2E'}
    />
  </svg>
);
