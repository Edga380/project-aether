"use client";

import Image from "next/image";
import Link from "next/link";
import ReusableButton from "./buttons/ReusableButton";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between bg-lighterGreyTeal h-20 p-2 border-b-2 border-lightGreyTeal">
      <Link href="/" className="my-auto">
        <Image src="/palogo.png" alt="Test" width={60} height={60} />
      </Link>
      <div className="my-auto">
        <Link
          href="/"
          className={`${pathname == "/" && "underline"} mr-2 font-semibold`}
        >
          HOME
        </Link>
        <Link
          href="/templates"
          className={`${
            pathname == "/templates" && "underline"
          } mr-2 font-semibold`}
        >
          TEMPLATES
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname == "/contact" && "underline"
          } mr-2 font-semibold`}
        >
          CONTACT
        </Link>
      </div>
      <div className="my-auto">
        <Link
          href="/signin"
          className={`${
            pathname == "/signin" && "underline"
          } mr-2 font-semibold`}
        >
          SIGN IN
        </Link>
        <ReusableButton name="Start free" />
      </div>
    </div>
  );
}
