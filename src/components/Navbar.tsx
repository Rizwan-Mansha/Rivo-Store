"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Facebook, Instagram, ShoppingBag, Twitter } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import Hamburger from "hamburger-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Child", href: "/Child" },
  { name: "All Products", href: "/AllProducts" },
];

// ... (import statements remain unchanged)

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Riz<span className="text-primary">Store</span>
          </h1>
        </Link>

        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl   sm:border-l">
          <nav className="list-none max-md:hidden gap-12 md:flex 2xl:ml-16">
            {links.map((link, idx) => (
              <div className="" key={idx}>
                {pathname === link.href ? (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-primary">
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <nav className={isOpen ? `${"fixed block z-20"}` : `${"hidden"}`}>
          <div className=" fixed inset-y-0 right-0 w-1/2 bg-white z-0 overflow-y-auto">
            <div className="flex ml-[50%]  sm:ml-[70%]">
              <Button
                onClick={() => handleCartClick()}
                variant={"outline"}
                className="flex flex-col gap-y-1.5 h-12 w-12 rounded-none ">
                <ShoppingBag />
                <span className="block text-xs font-semibold text-gray-500 sm:hidden"></span>
              </Button>

              <div className="flex  md:hidden max-md:block   items-center">
                <Hamburger toggled={isOpen} toggle={toggleMenu} />
              </div>
            </div>
            <div className="">
              {links.map((link, idx) => (
                <div
                  className="p-4 "
                  key={idx}
                  onClick={() => {
                    setOpen(false);
                    // Add any additional logic you want for handling menu item clicks
                  }}>
                  {pathname === link.href ? (
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-primary">
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="md:my-16 sm:my-12 px-3">
              <p className=" font-bold font-serif text-2xl mb-4">RizStore</p>
              <p className="text-sm font-serif">Social Media</p>
              <div className=" flex justify-start items-center gap-x-5 my-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100017772258554"
                  target="_blank">
                  <Facebook />
                </Link>
                <Link
                  href="https://twitter.com/Muhamma60041182"
                  target="_blank">
                  <Twitter />
                </Link>
                <Link
                  href={"https://www.instagram.com/riz_mansha/"}
                  target="_blank">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Button
          onClick={() => handleCartClick()}
          variant={"outline"}
          className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
          <ShoppingBag />
          <span className="hidden text-xs font-semibold text-gray-500 sm:block"></span>
        </Button>
        <div className="md:hidden max-sm:block flex justify-center items-center">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
