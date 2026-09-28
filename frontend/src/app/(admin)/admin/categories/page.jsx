"use client";

import Link from "next/link";
import React, { useState } from "react";

const initialCategories = [
  { id: 1, name: "Wireless Bluetooth Headphones", slug: "wireless-bluetooth-headphones" },
  { id: 2, name: "Men's T-Shirt", slug: "mens-t-shirt" },
  { id: 3, name: "Men's Leather Wallet", slug: "mens-leather-wallet" },
  { id: 4, name: "Memory Foam Pillow", slug: "memory-foam-pillow" },
  { id: 5, name: "Coffee Maker", slug: "coffee-maker" },
  { id: 6, name: "Casual Baseball Cap", slug: "casual-baseball-cap" },
  { id: 7, name: "Full HD Webcam", slug: "full-hd-webcam" },
  { id: 8, name: "Smart LED Color Bulb", slug: "smart-led-color-bulb" },
  { id: 9, name: "Men's Shirt", slug: "mens-shirt" },
  { id: 10, name: "Men's Leather Wallet", slug: "mens-leather-wallet-2" },
];

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
  </svg>
);

const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
    <path d="M3 6h18" />
    <path d="M8 6V4h8v2" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

const Page = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedCategory(null);
    setIsDeleteOpen(false);
  };

  const confirmDelete = () => {
    if (!selectedCategory) return;

    setCategories((prev) => prev.filter((item) => item.id !== selectedCategory.id));
    closeDeleteModal();
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] p-5 dark:bg-slate-950">
      <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button className="rounded-md bg-[#e8f7ef] px-3 py-1.5 text-xs font-medium text-[#1d9d57] dark:bg-emerald-500/10 dark:text-emerald-300">
              All Product <span className="ml-1 text-[#1d9d57] dark:text-emerald-300">(145)</span>
            </button>
            <button className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Featured Products
            </button>
            <button className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              On Sale
            </button>
            <button className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Out of Stock
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <span className="text-sm">⌕</span>
              <input
                type="text"
                placeholder="Search your product"
                className="w-52 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400"
              />
            </div>

            <Link href="/admin/categories/add-new-category" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              +
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              ⋯
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#eaf5eb] text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <th className="px-4 py-3">No.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 bg-white text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-200">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">/{item.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3 text-slate-500 dark:text-slate-300">
                      <button
                        type="button"
                        aria-label={`Edit ${item.name}`}
                        className="rounded-md border border-slate-200 bg-slate-50 p-2 transition hover:border-[#1d9d57] hover:text-[#1d9d57] dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
                      >
                        <EditIcon />
                      </button>
                      <button
                        type="button"
                        aria-label={`Delete ${item.name}`}
                        onClick={() => handleDeleteClick(item)}
                        className="rounded-md border border-red-200 bg-red-50 p-2 text-red-500 transition hover:bg-red-100 dark:border-red-500/50 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900">
          <button className="text-sm text-slate-500 dark:text-slate-300">← Previous</button>

          <div className="flex items-center gap-2">
            <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">1</button>
            <button className="rounded-md border border-[#1d9d57] bg-[#eaf7f0] px-3 py-1.5 text-sm font-medium text-[#1d9d57] dark:border-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-300">2</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">3</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">4</button>
            <span className="px-1 text-slate-400 dark:text-slate-500">...</span>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">24</button>
          </div>

          <button className="text-sm text-slate-500 dark:text-slate-300">Next →</button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 transition-opacity duration-300 ${
          isDeleteOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDeleteModal}
      >
        <div
          className={`w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 ease-out dark:bg-slate-900 ${
            isDeleteOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-300">
            <DeleteIcon />
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Delete category?</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Are you sure you want to delete <span className="font-semibold text-slate-700 dark:text-slate-100">{selectedCategory?.name}</span>?
            This action cannot be undone.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={closeDeleteModal}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={confirmDelete}
              className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;