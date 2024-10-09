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

export function Header() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <header className="w-full h-full container pb-2.5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5 w-full h-full items-center">
          <div className="relative size-20">
            <Image
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              className="object-cover"
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Нормативно-правовая база
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/yuridi" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Юридическая помощь
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/obmen" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Обмен опытом
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Новости
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <NavigationMenuTrigger>Личный кабинет</NavigationMenuTrigger>
                </PopoverTrigger>
                <PopoverContent>
                  <ul
                    className={cn(
                      "grid gap-2 p-1.5 w-[200px] lg:grid-cols-[_1fr]"
                    )}
                  >
                    <ListItem href={`/inoplatej`}>
                      Ино. платежная система
                    </ListItem>
                    <ListItem href={`/erp-crm`}>ERP, CRM</ListItem>
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
