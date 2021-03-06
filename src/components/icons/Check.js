import React from "react";

export default props => (
  <svg x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#B4F4E5" />
        <stop offset="100%" stopColor="#7DE6C6" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M9.842 17.541L4.447 12a1.597 1.597 0 0 1 0-2.216l1.079-1.109a1.498 1.498 0 0 1 2.158 0L10.921 12l5.395-5.541a1.498 1.498 0 0 1 2.158 0l1.08 1.108a1.597 1.597 0 0 1 0 2.217L12 17.54a1.498 1.498 0 0 1-2.158 0z"
    />
  </svg>
);
