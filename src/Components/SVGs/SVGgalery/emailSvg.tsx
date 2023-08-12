import React, { HTMLAttributes } from 'react';

export const Email = (
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
      d="M1.60264 5.20704L7.99993 8.40569L14.3973 5.207C14.349 4.36672 13.6523 3.7002 12.8 3.7002H3.19998C2.34759 3.7002 1.65088 4.36674 1.60264 5.20704Z"
      fill={color ? color : '#727171'}
    />
    <path
      d="M14.4 6.99452L7.99993 10.1945L1.59998 6.99456V11.7002C1.59998 12.5839 2.31632 13.3002 3.19998 13.3002H12.8C13.6836 13.3002 14.4 12.5839 14.4 11.7002V6.99452Z"
      fill={color ? color : '#727171'}
    />
  </svg>
);
