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
            // {/* position={app.navbarMode } is not error but display error */}
	return (
		<NextUINavbar maxWidth="xl" position={app.navbarMode}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">{app.title}</p>
					</NextLink>
				</NavbarBrand>
				<div className="hidden lg:flex gap-4 justify-start ml-2">
					
						<NavbarItem key="">
							<NextLink
								className={
						
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								}
								color="foreground"
								href="/"
							>
								Home
							</NextLink>
						</NavbarItem>
					
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
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href=""
						startContent={<HeartFilledIcon className="text-danger" />}
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
				<NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
						<NavbarMenuItem key={`profile`}>
							<Link
								color={"primary"
								}
								href="#"
								size="lg"
							>
								Home
							</Link>
						</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
}

