import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="pointer-events-auto border rounded dark:bg-black px-3 py-2 text-lg font-semibold leading-5 text-black dark:text-white dark:hover:bg-slate-900"
      {...props}
    >
      {props.children}
    </button>
  );
}
