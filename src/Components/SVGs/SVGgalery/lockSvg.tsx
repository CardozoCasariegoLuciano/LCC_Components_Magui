import React, { HTMLAttributes } from 'react';

export const lockSVG = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00002 7.7001V6.1001C4.00002 3.89096 5.79089 2.1001 8.00002 2.1001C10.2092 2.1001 12 3.89096 12 6.1001V7.7001C12.8837 7.7001 13.6 8.41644 13.6 9.3001V13.3001C13.6 14.1838 12.8837 14.9001 12 14.9001H4.00002C3.11637 14.9001 2.40002 14.1838 2.40002 13.3001V9.3001C2.40002 8.41644 3.11637 7.7001 4.00002 7.7001ZM10.4 6.1001V7.7001H5.60002V6.1001C5.60002 4.77461 6.67454 3.7001 8.00002 3.7001C9.32551 3.7001 10.4 4.77461 10.4 6.1001Z"
      fill={color ? color : '#727171'}
    />
  </svg>
);
