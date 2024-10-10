"use client";

import { useMediaQuery } from "~@/src/shared/hooks/use-mobile";
import { HeaderMobileMenu } from "./header.nav";
import { cn } from "~@/src/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~@/src/shared/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~@/src/shared/ui/popover";
import { usePathname } from "next/navigation";

export function Header() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const pathname = usePathname();

  return (
    <header className="w-full h-full container pb-2.5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5 w-full h-full items-center">
          <div className="relative size-20">
            <Image
              src="/logo/logo.jpg"
              className="object-contain"
              sizes="100%"
              alt="Logo"
              fill
            />
          </div>
          <p className="md:block hidden">
            Союз поддержки и развития предпринимательства
          </p>
        </div>

        {!isMobile && (
          <p className="w-auto min-w-[140px] self-center justify-self-end">
            8 (800) 000-00-00
          </p>
        )}
        {isMobile && <HeaderMobileMenu />}
      </div>

      <NavigationMenu aria-label="Навигационная панель">
        {!isMobile && (
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/" ? "bg-primary text-white" : ""
                  )}
                >
                  Нормативно-правовая база
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/juridical" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/juridical" ? "bg-primary text-white" : ""
                  )}
                >
                  Юридическая помощь
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/exchange" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/exchange" ? "bg-primary text-white" : ""
                  )}
                >
                  Обмен опытом
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/news" ? "bg-primary text-white" : ""
                  )}
                >
                  Новости
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <NavigationMenuTrigger
                    className={cn(
                      pathname === "/foreign" || pathname === "/erp-crm"
                        ? "bg-primary text-white"
                        : ""
                    )}
                  >
                    Личный кабинет
                  </NavigationMenuTrigger>
                </PopoverTrigger>
                <PopoverContent>
                  <ul
                    className={cn("grid gap-2 w-[200px] lg:grid-cols-[_1fr]")}
                  >
                    <ListItem
                      href={`/foreign`}
                      className={cn(
                        pathname === "/foreign" ? "bg-primary text-white" : ""
                      )}
                    >
                      Ино. платежная система
                    </ListItem>
                    <ListItem
                      href={`/erp-crm`}
                      className={cn(
                        pathname === "/erp-crm" ? "bg-primary text-white" : ""
                      )}
                    >
                      ERP, CRM
                    </ListItem>
                  </ul>
                </PopoverContent>
              </Popover>
            </NavigationMenuItem>
          </NavigationMenuList>
        )}
      </NavigationMenu>
    </header>
  );
}
