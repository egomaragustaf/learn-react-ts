import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="pointer-events-auto rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold leading-5 text-white hover:bg-blue-500"
      {...props}>
      {props.children}
    </button>
  );
}
