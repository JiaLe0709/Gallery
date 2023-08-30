import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Logo from '../Common/Logo'
import app from '../../app.config'
// import { useRouter } from 'next/router';
import md5 from 'md5';

const email = app.email;

const hashedEmail = md5(email)

const avatarLink = `https://gravatar.com/avatar/${hashedEmail}`
// console.log(avatarLink)
export default function Nav() {
// const router = useRouter();
// const currentURL = router.asPath;
// console.log(currentURL)
    
    return (
        <Navbar>
            <NavbarBrand>
                <Logo />
                <p className=" text-inherit">&nbsp;{app.title}</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href='/'>Home</Link>
                </NavbarItem>
                <NavbarItem  >
                    <Link color="foreground" href='#'>2</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href='#'>3</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="success"
                            name={app.author}
                            size="sm"
                            src={avatarLink}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">{app.email}</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}

