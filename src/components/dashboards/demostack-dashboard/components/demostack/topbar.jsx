import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ExternalLink, Search, X, Sun, Moon } from "lucide-react";
import { NavCmdIcon, NavSearchIcon } from "./icons";
import {
  adminNavigation,
  defaultNotifications,
  workspaceNavigation,
} from "../../data";
import { useDashboardNavigation } from "./navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "./theme-provider";

const navigationItems = [...workspaceNavigation, ...adminNavigation];

export function DashboardTopbar({ searchQuery, setSearchQuery, notifications = defaultNotifications }) {
  const { pathname } = useDashboardNavigation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);

  const currentPage =
    navigationItems.find(({ href }) => href === pathname) || navigationItems[0];

  const TitleIcon = currentPage.icon;

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    requestAnimationFrame(() => {
      mobileSearchInputRef.current?.focus();
    });
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (window.matchMedia("(max-width: 767px)").matches) {
          setIsMobileSearchOpen(true);
          requestAnimationFrame(() => {
            mobileSearchInputRef.current?.focus();
          });
          return;
        }
        requestAnimationFrame(() => {
          searchInputRef.current?.focus();
        });
      }
      if (event.key === "Escape") {
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:px-6 bg-background/95 backdrop-blur-sm sticky top-0 z-30">
      {isMobileSearchOpen ? (
        <div className="flex w-full items-center gap-2.5 md:hidden">
          <InputGroup className="h-9 flex-1 border-none bg-secondary p-1 pl-2.5">
            <InputGroupAddon className="pl-0">
              <span aria-hidden="true" className="flex items-center">
                <NavSearchIcon className="size-3.5 text-input-addon-foreground" />
              </span>
            </InputGroupAddon>

            <InputGroupInput
              ref={mobileSearchInputRef}
              className="h-full p-0 px-1.5"
              aria-label="Quick search"
              placeholder="Search enquiries, projects, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>

          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="size-8.5 shrink-0 rounded-full"
            aria-label="Close search"
            onClick={closeMobileSearch}
          >
            <X aria-hidden="true" className="size-4" />
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 md:gap-4">
            <SidebarTrigger className="size-9 shrink-0 md:hidden" />

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <TitleIcon aria-hidden="true" className="size-4.5" />
              </div>
              <h1 className="text-base font-semibold leading-none text-foreground">
                {currentPage.name}
              </h1>
            </div>

            <InputGroup className="hidden h-9 border-none bg-secondary p-1 pl-2.5 md:flex md:w-80 rounded-xl">
              <InputGroupAddon className="pl-0">
                <span aria-hidden="true" className="flex items-center">
                  <NavSearchIcon className="size-3.5 text-input-addon-foreground" />
                </span>
              </InputGroupAddon>

              <InputGroupInput
                ref={searchInputRef}
                className="h-full p-0 px-1.5 text-xs"
                aria-label="Quick search"
                placeholder="Search projects, client leads, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {!searchQuery && (
                <InputGroupAddon align="inline-end" className="pr-1 text-input-addon-foreground">
                  <div className="flex items-center gap-1 rounded bg-background px-1.5 py-0.5 border border-border/50 text-[0.62rem]">
                    <NavCmdIcon className="size-2.5" />
                    <span className="leading-none">K</span>
                  </div>
                </InputGroupAddon>
              )}
            </InputGroup>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-xl text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              className="size-9 rounded-full md:hidden"
              aria-label="Open search"
              onClick={openMobileSearch}
            >
              <Search aria-hidden="true" className="size-4" />
            </Button>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "hidden sm:flex h-9 gap-2 rounded-xl text-xs",
              })}
            >
              <ExternalLink className="size-3.5" />
              <span>Live Site</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon-lg",
                  className: "size-9 rounded-full relative cursor-pointer",
                })}
                aria-label="Notifications"
              >
                <Bell aria-hidden="true" className="size-4" />
                {notifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="p-3 pb-2 font-semibold text-xs">
                    Studio Activity &amp; Leads ({notifications.length})
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="items-start py-2.5 px-3 cursor-pointer">
                      <div>
                        <p className="font-semibold text-xs text-foreground">{notification.title}</p>
                        <p className="text-muted-foreground text-[0.72rem] leading-snug mt-0.5">
                          {notification.description}
                        </p>
                        <p className="text-primary text-[0.65rem] font-medium mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  );
}
