import { Link } from "react-router-dom";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const dropdowns = [
   {
      title: "Laptop & Computers",
      href: "/products?category=test",
      links: [
         {
            title: "smart phone",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
         {
            title: "smart awd",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "devices",
      href: "/products?category=test",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "testing2",
      href: "/products?category=test",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
   {
      title: "testing3",
      href: "/products?category=test",
      links: [
         {
            title: "smart watch",
            links: [
               {
                  title: "Iphone",
                  href: "/products?category=test",
               },
               {
                  title: "smart phone",
                  href: "/products?category=test",
               },
            ],
         },
      ],
   },
];

export default function DesktopNav() {
   return (
      <div className="mx-auto hidden max-w-7xl items-center justify-between text-body-sm md:flex">
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <Link
                     to="/"
                     className={`${navigationMenuTriggerStyle()} text-gray font-semibold hover:text-navyBlue`}
                  >
                     Home
                  </Link>
               </NavigationMenuItem>
               {dropdowns.map((item) => (
                  <NavigationMenuItem key={item.title}>
                     <NavigationMenuTrigger className="text-gray font-semibold hover:text-navyBlue">
                        <Link className="" to={item.href}>
                           {item.title}
                        </Link>
                     </NavigationMenuTrigger>
                     <NavigationMenuContent className="bg-white">
                        <div className="flex min-w-max items-start">
                           <ul className="grid gap-10 p-4 md:grid-cols-3">
                              {item.links.map((component) => {
                                 return (
                                    <div
                                       className="flex flex-col gap-2"
                                       key={component.title}
                                    >
                                       <h2 className="mb-1 text-body-sm font-semibold">
                                          {component.title}
                                       </h2>
                                       {component.links.map((link) => (
                                          <Link
                                             className="text-gray text-small-xl hover:text-navyBlue"
                                             key={link.title}
                                             to={link.href}
                                          >
                                             {link.title}
                                          </Link>
                                       ))}
                                    </div>
                                 );
                              })}
                           </ul>
                        </div>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
               ))}
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
}
