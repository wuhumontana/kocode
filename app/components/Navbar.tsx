"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/algorithm", label: "Algorithms" },
  { href: "/roadmap", label: "Road Map" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 z-50",
        isHomePage
          ? "absolute bg-transparent"
          : "sticky border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/coke.svg"
            alt="KOCode logo"
            width={250}
            height={467}
            className={cn(
              "w-auto object-contain transition-transform duration-200",
              isHomePage
                ? "h-11 drop-shadow-[0_6px_18px_rgba(15,23,42,0.35)]"
                : "h-10"
            )}
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "text-sm font-semibold tracking-[0.18em] uppercase",
                isHomePage ? "text-white" : "text-foreground"
              )}
            >
              KOCode
            </span>
            <span
              className={cn(
                "mt-1 text-xs font-medium",
                isHomePage ? "text-white/80" : "text-muted-foreground"
              )}
            >
              代码KO手册
            </span>
          </span>
        </Link>

        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={isActive}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3 py-2",
                        isHomePage
                          ? isActive
                            ? "bg-white/14 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                          : isActive && "bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
