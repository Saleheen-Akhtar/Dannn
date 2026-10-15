import React, { useState } from "react";
import { LogOut, Moon, Sun, ExternalLink } from "lucide-react";
import { BuildingIcon, CaretUpDownIcon } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  adminNavigation,
  companies,
  currentUser,
  workspaceNavigation,
} from "../../data";
import { DemostackLogo } from "./logo";
import { DashboardLink, useDashboardNavigation } from "./navigation";
import { useTheme } from "./theme-provider";

export function DashboardSidebar({ onLogout }) {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useDashboardNavigation();
  const { isMobile, setOpenMobile, state } = useSidebar();
  const collapsed = !isMobile && state === "collapsed";
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  return (
    <Sidebar collapsible="icon" className="border-r border-border p-2">
      <SidebarHeader className="p-0">
        <div className="border border-border/80 bg-card rounded-2xl p-3 pt-3.5 group-data-[state=collapsed]:p-2.5 shadow-xs">
          <div className="flex items-center justify-between mb-4 group-data-[state=collapsed]:mb-2 group-data-[state=collapsed]:justify-center">
            <DemostackLogo className="h-6 w-auto group-data-[state=collapsed]:hidden" />
            <SidebarTrigger className="size-9 group-data-[state=collapsed]:size-10" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className="bg-secondary w-full p-2 pr-2.5 rounded-xl flex items-center gap-2 group-data-[state=collapsed]:size-10 group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:p-2 cursor-pointer transition-colors hover:bg-muted"
            >
              <div className="size-7 bg-foreground dark:bg-background rounded-full flex items-center justify-center text-background dark:text-foreground shrink-0">
                <BuildingIcon className="size-3.5" />
              </div>
              <div className="flex items-start flex-col group-data-[state=collapsed]:hidden text-left overflow-hidden">
                <p className="font-medium text-xs truncate max-w-[125px]">{selectedCompany.name}</p>
                <p className="text-[0.62rem] text-muted-foreground uppercase tracking-wider">
                  {selectedCompany.role}
                </p>
              </div>

              <CaretUpDownIcon className="size-4 ml-auto group-data-[state=collapsed]:hidden text-muted-foreground" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Select Studio Facility</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={selectedCompany.name}
                onValueChange={(companyName) => {
                  const company = companies.find(({ name }) => name === companyName);
                  if (company) setSelectedCompany(company);
                }}
              >
                {companies.map((company) => (
                  <DropdownMenuRadioItem key={company.name} value={company.name} className="p-2 cursor-pointer">
                    <div className="flex flex-col text-muted-foreground">
                      <p className="text-xs font-medium text-foreground">{company.name}</p>
                      <p className="text-[0.65rem] text-muted-foreground">{company.role}</p>
                    </div>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="mt-3 group-data-[state=collapsed]:hidden">
            <p className="text-[0.68rem] font-semibold text-muted-foreground uppercase tracking-wider">
              Studio Leads [{selectedCompany.members.length}]
            </p>
            <div className="flex flex-wrap mt-1.5 gap-1.5">
              {selectedCompany.members.map((member) => (
                <Avatar key={member.name} className="size-7 border border-border">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-[0.65rem]">{member.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-4 pb-3 px-1.5">
        {[
          { label: "Executive Workspace", items: workspaceNavigation },
          { label: "Studio Controls", items: adminNavigation },
        ].map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1.5">
                {group.items.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        className="p-0 rounded-xl"
                      >
                        <DashboardLink
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className="flex items-center gap-2.5 rounded-xl border border-transparent p-2.5 text-muted-foreground aria-[current=page]:border-border aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-foreground transition-all hover:bg-secondary w-full"
                          onClick={() => {
                            if (isMobile) setOpenMobile(false);
                          }}
                        >
                          <item.icon className="size-4.5 shrink-0" />
                          <span className="text-sm truncate group-data-[state=collapsed]:hidden">{item.name}</span>
                          {item.badge && (
                            <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[0.65rem] font-bold text-primary group-data-[state=collapsed]:hidden">
                              {item.badge}
                            </span>
                          )}
                        </DashboardLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-0 mt-auto">
        <div className="p-2 border-t group-data-[state=collapsed]:p-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className="w-full flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-secondary transition-colors cursor-pointer outline-none"
            >
              <Avatar className="size-9 border border-primary/30">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.initials}</AvatarFallback>
              </Avatar>
              <div className="group-data-[state=collapsed]:hidden flex-1 min-w-0">
                <p className="font-medium text-xs text-foreground truncate">
                  {currentUser.name}
                </p>
                <p className="text-[0.68rem] text-muted-foreground truncate">
                  {currentUser.role}
                </p>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-56 mb-2">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-normal p-2">
                  <p className="font-semibold text-xs text-foreground">{currentUser.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{currentUser.email}</p>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer">
                  <ExternalLink className="size-4" />
                  View Public Website
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onClick={onLogout} className="cursor-pointer">
                <LogOut className="size-4" />
                Sign Out of Portal
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
