"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "../ui/separator"

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string
  children?: React.ReactNode
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

type DropdownItem = {
  title: string
  content: React.ReactNode
}

type DropdownProps = {
  triggerText: string
  items: DropdownItem[]
}

export function Dropdown({ triggerText, items }: DropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 bg-transparent font-semibold text-md hover:bg-transparent">
            {triggerText}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[120px] gap-2 p-1 ">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem className="bg-slate-200 hover:bg-slate-50" title={item.title}>
                    {item.content}
                  </ListItem>
                  {index < items.length - 1 && <Separator className="my-0.5" />}
                </React.Fragment>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
