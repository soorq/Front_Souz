"use client";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "~@/src/shared/hooks/use-mobile";
import { cn } from "~@/src/shared/lib/utils";
import {
  ListItem,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~@/src/shared/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "~@/src/shared/ui/sheet";
import { Menu } from "lucide-react";
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
          <p className="md:block hidden">Союз поддержки мательства</p>
        </div>

        {!isMobile && (
          <p className="w-auto min-w-[140px] self-center justify-self-end">
            8 (800) 000-00-00
          </p>
        )}
        {isMobile && (
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto overflow-x-hidden">
              <NavigationMenu>
                <NavigationMenuList className="flex-col items-start gap-1 space-x-0">
                  <NavigationMenuItem className="flex flex-col">
                    <Link href={`/codecs`} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Нормативно-правовая база
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1.5">
                    <Link href="/yuridi" legacyBehavior passHref>
                      <NavigationMenuLink className="py-2.5">
                        Юридическая помощь
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1.5">
                    <Link href="/obmen" legacyBehavior passHref>
                      <NavigationMenuLink className="py-2.5">
                        Обмен опытом
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="py-1.5">
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="py-1.5">
                        Новости
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="flex flex-col">
                    <p className="mb-1">Личный кабинет</p>

                    <Link href={`/inoplatej`} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Ино. платежная система
                      </NavigationMenuLink>
                    </Link>
                    <Link href={`/erp-crm`} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        ERP, CRM
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="mt-1 flex justify-center items-center flex-col gap-2 border-t pt-3.5 border-input">
                <p>8 (800) 000-00-00</p>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>

      <NavigationMenu aria-label="Навигационная панель">
        {!isMobile && (
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Нормативно-правовая база
              </NavigationMenuLink>
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
