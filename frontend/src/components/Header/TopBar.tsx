import React from 'react';
import { Dropdown } from './NavDropdown';

export default function TopBar() {
  const languageItems = [
    { title: "English", content: "English" },
    { title: "Arabic", content: "Arabic" },
    { title: "Others", content: "Others" },
  ]
  const currencyItems = [
    { title: "USD", content: "USD" },
    { title: "Birr", content: "Birr" },
    { title: "Euro", content: "Euro" },
  ]

  return (
    <header className='w-full font-semibold p-2 bg-PrimaryColor text-md text-white'>
      <div className="max-w-[1400px] flex items-center justify-between mx-auto">
        <div className="flex gap-4 items-center">
          <a href="tel:+251926378367">+1 (251) 926-37-83670</a>
        </div>
        <div className="flex gap-4 mr-20 items-center">
          <p className="">Get 50% off on selected items</p>
          <p className="">|</p>
          <p className="">Shop Now</p>
        </div>
        <div className="flex gap-4 items-center">
          {/* <p className="">Language</p> */}
          {/* <NavigationMenuDemo /> */}
          {/* <NavigationMenuDemo /> */}
          <Dropdown triggerText="Language" items={languageItems} />
          <Dropdown triggerText="Currency" items={currencyItems} />
        </div>
      </div>
    </header>
  );
}
