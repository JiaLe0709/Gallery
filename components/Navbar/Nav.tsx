import React from "react";
import NextLink from "next/link";
import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switcher";
import Logo from '../Common/Logo'
import app from '../../app.config'
// import { useRouter } from 'next/router';
import md5 from 'md5';
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/Icons";

const email = app.email;

const hashedEmail = md5(email)

const avatarLink = `https://gravatar.com/avatar/${hashedEmail}`
// console.log(avatarLink)
export default function Nav() {
	// const router = useRouter();
	// const currentURL = router.asPath;
	// console.log(currentURL)
	//const logged = false;

	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);
	return (
		<NextUINavbar maxWidth="xl" position="static">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">{app.title}</p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2">

				{app.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}

				</div>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href="">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href="">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href="">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="group text-sm font-normal text-default-600 bg-default-400/20 dark:bg-default-500/20"
						href=""
						startContent={
							<HeartFilledIcon className="text-danger group-data-[hover=true]:animate-bounce " />
						}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href="{siteConfig.links.github}">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
				{app.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 0
										? "primary"
										: index === app.navMenuItems.length - 0
										? "danger"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
}

