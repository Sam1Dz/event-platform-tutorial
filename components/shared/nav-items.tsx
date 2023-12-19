"use client";

import React from "react";
import NextLink from "next/link";

/* CONSTANT */
import { headerLinks } from "@/constant";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link, i) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={i}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <NextLink href={link.route}>{link.label}</NextLink>
          </li>
        );
      })}
    </ul>
  );
}
