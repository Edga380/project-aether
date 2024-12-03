"use client";

import Link from "next/link";
import { SetStateAction } from "react";

type ReusableButtonProps = {
  name: string;
  onClick?: () => void | SetStateAction<void>;
  path?: string;
};

/**
 * @description Reusable button to run functions/setStates/Link to navigate to different page. If path prop added onClick will not work anymore.
 * @param name Button name.
 * @param onClick Optional function/setState to run when button pressed.
 * @param path Optional to navigate to new page.
 */

export default function ReusableButton(props: ReusableButtonProps) {
  return props.path ? (
    <Link href={props.path}></Link>
  ) : (
    <button
      className="bg-midTeal text-lightTeal font-semibold px-6 py-1 rounded hover:bg-lightTeal hover:text-midTeal hover:shadow-md"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
