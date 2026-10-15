import * as React from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
  className,
  style,
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const state = open ? "expanded" : "collapsed";

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  }, [isMobile]);

  return (
    <SidebarContext.Provider
      value={{
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
      <div
        className={cn("flex min-h-screen w-full bg-background", className)}
        style={style}
        data-state={state}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function Sidebar({ className, collapsible = "icon", children, ...props }) {
  const { isMobile, openMobile, setOpenMobile, state } = useSidebar();

  if (isMobile) {
    if (!openMobile) return null;
    return (
      <div className="fixed inset-0 z-50 flex">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={() => setOpenMobile(false)}
        />
        <aside
          className={cn(
            "relative z-50 flex h-full w-[17rem] flex-col border-r bg-sidebar p-3 shadow-2xl animate-in slide-in-from-left duration-200",
            className
          )}
          data-mobile="true"
          data-sidebar="sidebar"
          {...props}
        >
          {children}
        </aside>
      </div>
    );
  }

  return (
    <aside
      className={cn(
        "group sticky top-0 flex h-screen flex-col border-r bg-sidebar transition-[width] duration-200 ease-in-out shrink-0",
        state === "collapsed" ? "w-[var(--sidebar-width-icon,5.125rem)]" : "w-[var(--sidebar-width,16.25rem)]",
        className
      )}
      data-collapsible={collapsible}
      data-state={state}
      {...props}
    >
      {children}
    </aside>
  );
}

export const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2 p-2", className)} {...props} />
));
SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden p-2", className)} {...props} />
));
SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2 p-2 mt-auto", className)} {...props} />
));
SidebarFooter.displayName = "SidebarFooter";

export const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative flex w-full min-w-0 flex-col p-2", className)} {...props} />
));
SidebarGroup.displayName = "SidebarGroup";

export const SidebarGroupLabel = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider group-data-[state=collapsed]:hidden",
      className
    )}
    {...props}
  />
));
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full text-sm", className)} {...props} />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

export const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex w-full min-w-0 flex-col gap-1 list-none p-0 m-0", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

export const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

export const SidebarMenuButton = React.forwardRef(
  ({ asChild = false, isActive = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-active={isActive}
        className={cn(
          "flex w-full items-center gap-2 overflow-hidden rounded-xl p-2 text-left text-sm outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer",
          isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-9 rounded-xl", className)}
      onClick={(e) => {
        onClick?.(e);
        toggleSidebar();
      }}
      aria-label="Toggle sidebar"
      {...props}
    >
      <PanelLeft className="size-4.5" />
    </Button>
  );
}
