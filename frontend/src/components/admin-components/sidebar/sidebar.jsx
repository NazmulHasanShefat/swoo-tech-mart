"use client";
import React, { useState } from 'react';
import {
  FiBarChart2,
  FiChevronDown,
  FiChevronLeft,
  FiFileText,
  FiFolder,
  FiGrid,
  FiPackage,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiTag,
  FiUser,
  FiUsers,
} from 'react-icons/fi';

const menuSections = [
  {
    title: 'Dashboard',
    icon: FiGrid,
    active: true,
  },
  {
    title: 'Order Management',
    icon: FiShoppingBag,
  },
  {
    title: 'Customers',
    icon: FiUsers,
  },
  {
    title: 'Coupon code',
    icon: FiTag,
  },
  {
    title: 'Categories',
    icon: FiFolder,
  },
  {
    title: 'Transaction',
    icon: FiBarChart2,
  },
  {
    title: 'Brand',
    icon: FiPackage,
  },
  {
    title: 'Product',
    icon: FiShoppingBag,
    children: ['Add Products', 'Product Media', 'Product List', 'Product Reviews'],
  },
  {
    title: 'Admin',
    icon: FiShield,
    children: ['Admin role', 'Control authority'],
  },
  {
    title: 'Settings',
    icon: FiSettings,
  },
  {
    title: 'Reports',
    icon: FiFileText,
  },
  {},
];

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState({ Product: true, Admin: true });

  const toggleMenu = (title) => {
    if (!title) return;

    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-[260px] overflow-auto border-r border-slate-200 bg-white text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
        <div className="flex items-center gap-2 text-[19px] font-bold tracking-tight text-slate-800 dark:text-slate-100">
          <span>Deal</span>
          <span className="text-red-500">xRT</span>
        </div>

        <button
          type="button"
          aria-label="Collapse sidebar"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          <FiChevronLeft className="text-sm" />
        </button>
      </div>

      <nav className="space-y-2 px-3 py-4">
        {menuSections.map((item) => {
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;
          const isExpanded = !!item.title && !!expandedMenus[item.title];
          const Icon = item.icon;

          return (
            <div key={item.title || 'menu-item'}>
              {item.title ? (
                <button
                  type="button"
                  onClick={() => hasChildren && toggleMenu(item.title)}
                  aria-expanded={hasChildren ? isExpanded : undefined}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    item.active
                      ? 'bg-slate-100 text-slate-900 font-medium dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {Icon ? <Icon className="text-base" /> : null}
                    {item.title}
                  </span>

                  {hasChildren ? (
                    <FiChevronDown
                      className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  ) : null}
                </button>
              ) : null}

              {hasChildren ? (
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-8 mt-1 space-y-1 border-l border-slate-200 pl-3 dark:border-slate-700">
                      {item.children.map((child) => (
                        <button
                          key={child}
                          type="button"
                          className="block w-full rounded-md px-2 py-1.5 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                        >
                          {child}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;