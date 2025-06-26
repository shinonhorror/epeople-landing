import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import '../Header.css';

interface DropdownItem {
  label: string;
  href: string;
  isLogin?: boolean;
  onClick?: () => void;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}

export default function DropdownMenu({ title, items }: DropdownMenuProps) {
  return (
    <Menu as="div" className="dropdown">
      {({ open }) => (
        <>
          <Menu.Button className="dropdown__trigger">
            {title}
            <span className={`caret ${open ? 'caret--open' : ''}`}>
              <img src="/vector.svg" alt="vector" />
            </span>
          </Menu.Button>

          <Menu.Items className="dropdown__menu">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`dropdown__item ${item.isLogin ? 'login-link' : ''} ${
                      active ? 'dropdown__item--active' : ''
                    }`}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
