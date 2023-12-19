import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

/* CLERK */
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

/* COMPONENTS SHARED */
import NavItems from "./nav-items";

/* COMPONENTS UI */
import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <NextLink href="/" className="w-36">
          <NextImage
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </NextLink>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <NextLink href="/sign-in">Login</NextLink>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
