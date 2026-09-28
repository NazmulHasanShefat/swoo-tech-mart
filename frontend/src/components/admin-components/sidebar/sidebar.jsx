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
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({ Product: true, Admin: true });

  const toggleMenu = (title) => {
    if (!title) return;

    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      className={`sticky top-0 hidden h-screen border-r z-50 border-slate-200 bg-white text-slate-800 shadow-sm transition-all duration-300 ease-out md:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${
        collapsed ? 'w-20' : 'w-[260px]'
      }`}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200 px-3 dark:border-slate-700">
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${
            collapsed ? 'w-full justify-center' : 'gap-2'
          }`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-sm font-bold text-white shadow-sm">
            D
          </div>

          {!collapsed && (
            <div className="flex items-center text-[19px] font-bold tracking-tight text-slate-800 dark:text-slate-100">
              <span>Deal</span>
              <span className="text-red-500">xRT</span>
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setCollapsed((prev) => !prev)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          <FiChevronLeft className={`text-sm transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation Links Area */}
      <div className="h-[calc(100vh-64px)] overflow-y-auto">
        <nav className="space-y-1 px-2 py-4">
          {menuSections.map((item, index) => {
            if (!item.title) return null;

            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isExpanded = !!expandedMenus[item.title];
            const Icon = item.icon;

            return (
              <div key={item.title || index} className="group relative">
                <button
                  type="button"
                  aria-label={item.title}
                  aria-expanded={hasChildren ? isExpanded : undefined}
                  onClick={() => hasChildren && !collapsed && toggleMenu(item.title)}
                  className={`relative flex w-full items-center rounded-lg text-left text-sm transition-all duration-200 ${
                    collapsed ? 'justify-center px-2 py-2.5' : 'justify-between px-3 py-2'
                  } ${
                    item.active
                      ? 'bg-slate-100 font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                >
                  <span className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
                    {Icon ? <Icon className="text-base shrink-0" /> : null}
                    {!collapsed && <span className="truncate">{item.title}</span>}
                  </span>

                  {!collapsed && hasChildren ? (
                    <FiChevronDown
                      className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  ) : null}
                </button>

                {/* Submenu for Expanded View */}
                {!collapsed && hasChildren ? (
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

                {/* Fixed Floating Tooltip for Collapsed View */}
                {collapsed && (
                  <div className="pointer-events-none fixed left-16 z-50 hidden -translate-y-9 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-md transition-all group-hover:block dark:bg-slate-100 dark:text-slate-900">
                    {item.title}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;