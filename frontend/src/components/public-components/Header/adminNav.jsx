"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaBell, FaMoon, FaSearch, FaSun, FaUserCircle } from 'react-icons/fa';

const notifications = [
    {
        id: 1,
        title: 'New order received',
        time: '2 min ago',
        accent: 'bg-[#2ec27e]',
    },
    {
        id: 2,
        title: 'Product stock updated',
        time: '18 min ago',
        accent: 'bg-[#f4b942]',
    },
    {
        id: 3,
        title: 'Customer review added',
        time: '1 hour ago',
        accent: 'bg-[#4aa3ff]',
    },
];

const userMenuItems = [
    { label: 'Manage Account', icon: '👤' },
    { label: 'Profile', icon: '🧑‍💼' },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Logout', icon: '🚪' },
];

const AdminNav = () => {
    const [isDark, setIsDark] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const notificationRef = useRef(null);
    const userMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }

            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className="sticky left-0 top-0 w-full border border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
                    <div className="flex-1" />

                    <div className="hidden min-w-0 flex-1 justify-center md:flex">
                        <div className="relative w-full max-w-md">
                            <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 dark:text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="relative" ref={notificationRef}>
                            <button
                                type="button"
                                aria-label="Notifications"
                                onClick={() => setShowNotifications((prev) => !prev)}
                                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-700 transition-all duration-200 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-200 dark:hover:bg-slate-700"
                            >
                                <FaBell className="text-base" />
                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-bold text-white">
                                    3
                                </span>
                            </button>

                            {showNotifications && (
                                <div className="absolute right-0 top-14 w-72 rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                                    <div className="flex items-center justify-between border-b border-emerald-100 px-4 py-3 text-sm font-semibold dark:border-slate-700">
                                        <span>Notifications</span>
                                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                                            3 new
                                        </span>
                                    </div>

                                    <div className="max-h-64 overflow-y-auto p-2">
                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className="mb-2 flex items-start gap-3 rounded-xl bg-emerald-50 px-3 py-2 dark:bg-slate-800"
                                            >
                                                <span className={`mt-1 h-2.5 w-2.5 rounded-full ${notification.accent}`} />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium leading-5 text-slate-800 dark:text-slate-100">
                                                        {notification.title}
                                                    </p>
                                                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-300">
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative" ref={userMenuRef}>
                            <button
                                type="button"
                                aria-label="User profile"
                                onClick={() => setShowUserMenu((prev) => !prev)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-700 transition-all duration-200 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-200 dark:hover:bg-slate-700"
                            >
                                <FaUserCircle className="text-xl" />
                            </button>

                            {showUserMenu && (
                                <div className="absolute right-0 top-14 w-52 rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                                    <div className="border-b border-emerald-100 px-4 py-3 dark:border-slate-700">
                                        <p className="text-sm font-semibold">Admin User</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-300">
                                            admin@swootech.com
                                        </p>
                                    </div>

                                    <div className="p-2">
                                        {userMenuItems.map((item) => (
                                            <button
                                                key={item.label}
                                                type="button"
                                                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-slate-800"
                                            >
                                                <span>{item.icon}</span>
                                                <span>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative flex h-9 w-20 items-center rounded-full border border-emerald-100 bg-emerald-50 p-1 dark:border-slate-700 dark:bg-slate-800">
                            <button
                                type="button"
                                aria-label="Light mode"
                                onClick={() => setIsDark(false)}
                                className={`z-10 flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                                    !isDark ? 'text-emerald-900' : 'text-slate-400 dark:text-slate-300'
                                }`}
                            >
                                <FaSun size={14} />
                            </button>

                            <button
                                type="button"
                                aria-label="Dark mode"
                                onClick={() => setIsDark(true)}
                                className={`z-10 ml-auto flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                                    isDark ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-300'
                                }`}
                            >
                                <FaMoon size={12} />
                            </button>

                            <span
                                className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow-md transition-all duration-300 ${
                                    isDark ? 'left-[calc(100%-2.125rem)]' : 'left-1'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AdminNav;