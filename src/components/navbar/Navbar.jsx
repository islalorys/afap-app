"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { publicRoutes, privateRoutes } from "./NavbarRoutes.js";
// import Link from "next/link";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Link href="/" className="cursor-pointer">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">AFAP</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Link href="/" className="cursor-pointer">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">AFAP</p>
          </NavbarBrand>
        </Link>

        {publicRoutes.map((route, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={route.path}>
              {route.name}
            </Link>
          </NavbarItem>
        ))}

        {/* <NavbarItem>
          <Link color="foreground" href="/search">
            Registro
          </Link>
        </NavbarItem> */}

        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem> */}
        
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login-userx">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login-userx/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
        {
            publicRoutes.map((route, index) => (
              <NavbarMenuItem key={index}>
                <Link color="foreground" href={route.path}>
                  {route.name}
                </Link>
              </NavbarMenuItem>
            ))
        }
      </NavbarMenu>
    </Navbar>
  );
}
