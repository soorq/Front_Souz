import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~@/src/shared/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "~@/src/shared/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function HeaderMobileMenu() {
    return (
            <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto overflow-x-hidden">
              <NavigationMenu>
                <NavigationMenuList className="flex-col items-start gap-1 space-x-0">
                  <NavigationMenuItem className="py-1.5">
                    <Link href={`/codecs`} legacyBehavior passHref>
                      <NavigationMenuLink className="py-2.5">
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
    )
} 