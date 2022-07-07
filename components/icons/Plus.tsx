// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/** @jsxImportSource https://esm.sh/react@18.2.0 */
type IconProps = {
  size?: number;
  className?: string;
};

export default function Icon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1429 8.85714H8.85714V13.1429C8.85714 13.3702 8.76684 13.5882 8.60609 13.7489C8.44535 13.9097 8.22733 14 8 14C7.77267 14 7.55465 13.9097 7.39391 13.7489C7.23316 13.5882 7.14286 13.3702 7.14286 13.1429V8.85714H2.85714C2.62981 8.85714 2.4118 8.76684 2.25105 8.60609C2.09031 8.44535 2 8.22733 2 8C2 7.77267 2.09031 7.55465 2.25105 7.39391C2.4118 7.23316 2.62981 7.14286 2.85714 7.14286H7.14286V2.85714C7.14286 2.62981 7.23316 2.4118 7.39391 2.25105C7.55465 2.09031 7.77267 2 8 2C8.22733 2 8.44535 2.09031 8.60609 2.25105C8.76684 2.4118 8.85714 2.62981 8.85714 2.85714V7.14286H13.1429C13.3702 7.14286 13.5882 7.23316 13.7489 7.39391C13.9097 7.55465 14 7.77267 14 8C14 8.22733 13.9097 8.44535 13.7489 8.60609C13.5882 8.76684 13.3702 8.85714 13.1429 8.85714Z"
        fill="currentColor"
      />
    </svg>
  );
}
