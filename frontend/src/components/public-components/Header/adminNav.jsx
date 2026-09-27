"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaBell, FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';

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
        <header
            className={`fixed w-full border-b shadow-sm transition-colors duration-300 ${
                isDark
                    ? 'border-[#1e3d34] bg-[#0f261d] text-white'
                    : 'border-[#fbfdfc] bg-[#fbfcfb] text-[#fafafa]'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9ae7b5] to-[#2a9d78] text-lg font-extrabold text-[#0c2d22] shadow-md">
                        ST
                    </div>

                    <div>
                        <p
                            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                                isDark ? 'text-[#bfead1]' : 'text-[#4a7f67]'
                            }`}
                        >
                            Admin Panel
                        </p>
                        <h1 className="text-lg font-bold tracking-tight">SwooTech Mart</h1>
                    </div>
                </div>

                <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className="relative" ref={notificationRef}>
                        <button
                            type="button"
                            aria-label="Notifications"
                            onClick={() => setShowNotifications((prev) => !prev)}
                            className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
                                isDark
                                    ? 'border-[#234f3d] bg-[#14342b] text-[#dcfce7] hover:bg-[#1a453a]'
                                    : 'border-[#d5f1df] bg-white text-[#1f5a46] hover:bg-[#ecfff3]'
                            }`}
                        >
                            <FaBell className="text-base" />
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2ec27e] px-1 text-[10px] font-bold text-white">
                                3
                            </span>
                        </button>

                        {showNotifications && (
                            <div
                                className={`absolute right-0 top-14 w-72 rounded-2xl border shadow-xl ${
                                    isDark
                                        ? 'border-[#234f3d] bg-[#112d27] text-[#edfdf3]'
                                        : 'border-[#dfeee4] bg-white text-[#123b2d]'
                                }`}
                            >
                                <div className="flex items-center justify-between border-b border-[#d8f0dd] px-4 py-3 text-sm font-semibold">
                                    <span>Notifications</span>
                                    <span className="rounded-full bg-[#ebfff1] px-2 py-0.5 text-[10px] font-bold text-[#1f7d5c]">
                                        3 new
                                    </span>
                                </div>

                                <div className="max-h-64 overflow-y-auto p-2">
                                    {notifications.map((notification) => (
                                        <div
                                            key={notification.id}
                                            className={`mb-2 flex items-start gap-3 rounded-xl px-3 py-2 ${
                                                isDark ? 'bg-[#163b35]' : 'bg-[#f4fff7]'
                                            }`}
                                        >
                                            <span
                                                className={`mt-1 h-2.5 w-2.5 rounded-full ${notification.accent}`}
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium leading-5">
                                                    {notification.title}
                                                </p>
                                                <p
                                                    className={`mt-1 text-[11px] ${
                                                        isDark ? 'text-[#c4ddd1]' : 'text-[#5d7f70]'
                                                    }`}
                                                >
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
                            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
                                isDark
                                    ? 'border-[#234f3d] bg-[#14342b] text-[#dcfce7] hover:bg-[#1a453a]'
                                    : 'border-[#d5f1df] bg-white text-[#1f5a46] hover:bg-[#ecfff3]'
                            }`}
                        >
                            <FaUserCircle className="text-xl" />
                        </button>

                        {showUserMenu && (
                            <div
                                className={`absolute right-0 top-14 w-52 rounded-2xl border shadow-xl ${
                                    isDark
                                        ? 'border-[#234f3d] bg-[#112d27] text-[#edfdf3]'
                                        : 'border-[#dfeee4] bg-white text-[#123b2d]'
                                }`}
                            >
                                <div className="border-b border-[#d8f0dd] px-4 py-3">
                                    <p className="text-sm font-semibold">Admin User</p>
                                    <p className={`text-xs ${isDark ? 'text-[#c4ddd1]' : 'text-[#5d7f70]'}`}>
                                        admin@swootech.com
                                    </p>
                                </div>

                                <div className="p-2">
                                    {userMenuItems.map((item) => (
                                        <button
                                            key={item.label}
                                            type="button"
                                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
                                                isDark ? 'hover:bg-[#163b35]' : 'hover:bg-[#f4fff7]'
                                            }`}
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className={`relative flex h-9 w-20 items-center rounded-full border p-1 ${
                            isDark ? 'border-[#234f3d] bg-[#17392f]' : 'border-[#d5f1df] bg-[#e2faef]'
                        }`}
                    >
                        <button
                            type="button"
                            aria-label="Light mode"
                            onClick={() => setIsDark(false)}
                            className={`z-10 flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                                !isDark ? 'text-[#0c2d22]' : 'text-[#c9f2d7]'
                            }`}
                        >
                            <FaSun size={14} />
                        </button>

                        <button
                            type="button"
                            aria-label="Dark mode"
                            onClick={() => setIsDark(true)}
                            className={`z-10 ml-auto flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                                isDark ? 'text-[#dfffe9]' : 'text-[#5b866f]'
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
    );
};

export default AdminNav;