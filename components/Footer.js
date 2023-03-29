import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone, Inbox, Globe, Twitter, Facebook, Instagram, Youtube, GitHub } from 'react-feather';

function Footer() {
  const socialIcons = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "YouTube", href: "#" },
  ]

  const menuItems = [
    { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "About", href: "/about", icon: <Phone className="h-5 w-5" /> },
    { name: "Services", href: "/services", icon: <Inbox className="h-5 w-5" /> },
    { name: "Contact", href: "/contact", icon: <Globe className="h-5 w-5" /> },
  ]

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="kotec.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <div className="text-gray-500 text-sm">
              <p className="font-bold">My Company</p>
              <p>123 Main Street, Anytown USA</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {socialIcons.map((item) => (
              <Link className="text-gray-400 hover:text-gray-500" key={item.name} href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  {item.name === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {item.name === 'Instagram' && <Instagram className="h-5 w-5" />}
                  {item.name === 'Twitter' && <Twitter className="h-5 w-5" />}
                  {item.name === 'GitHub' && <GitHub className="h-5 w-5" />}
                  {item.name === 'YouTube' && <Youtube className="h-5 w-5" />}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {menuItems.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link className="text-base text-gray-500 hover:text-gray-900 flex items-center" href={item.href}>
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer