"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FiFilter, FiMoreHorizontal, FiPlus, FiSearch } from 'react-icons/fi';

const products = [
  {
    id: 'P-1001',
    name: 'Aero Wireless Headphones',
    sku: 'AWH-2049',
    stock: 128,
    price: 129.99,
    categories: ['Electronics', 'Audio'],
    image: '🎧',
    published: '2026-09-05',
  },
  {
    id: 'P-1002',
    name: 'Urban Flex Sneakers',
    sku: 'UFS-3128',
    stock: 64,
    price: 89.5,
    categories: ['Fashion', 'Footwear'],
    image: '👟',
    published: '2026-09-08',
  },
  {
    id: 'P-1003',
    name: 'Luma Smart Watch',
    sku: 'LSW-8801',
    stock: 18,
    price: 199,
    categories: ['Wearables', 'Tech'],
    image: '⌚',
    published: '2026-09-12',
  },
  {
    id: 'P-1004',
    name: 'Terra Coffee Maker',
    sku: 'TCM-7314',
    stock: 42,
    price: 149.99,
    categories: ['Home', 'Kitchen'],
    image: '☕',
    published: '2026-09-15',
  },
  {
    id: 'P-1005',
    name: 'Glow Desk Lamp',
    sku: 'GDL-5402',
    stock: 0,
    price: 72.4,
    categories: ['Office', 'Lighting'],
    image: '💡',
    published: '2026-09-18',
  },
  {
    id: 'P-1006',
    name: 'Peak Travel Backpack',
    sku: 'PTB-7780',
    stock: 92,
    price: 58.75,
    categories: ['Travel', 'Accessories'],
    image: '🎒',
    published: '2026-09-20',
  },
];

const categoryColors = {
  Electronics: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300',
  Audio: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300',
  Fashion: 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  Footwear: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  Wearables: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
  Tech: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
  Home: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  Kitchen: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
  Office: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300',
  Lighting: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300',
  Travel: 'bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300',
  Accessories: 'bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300',
};

const ProductTable = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      const activeMenuId = openMenuId;
      if (!activeMenuId) return;

      const menuRef = menuRefs.current[activeMenuId];
      if (menuRef && !menuRef.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMenuId]);

  const filteredProducts = products.filter((product) => {
    const query = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.categories.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const toggleRowSelection = (productId) => {
    setSelectedProducts((current) => {
      const alreadySelected = current.includes(productId);
      return alreadySelected
        ? current.filter((id) => id !== productId)
        : [...current, productId];
    });
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    const nextSelection = checked ? filteredProducts.map((product) => product.id) : [];
    setSelectedProducts(nextSelection);
  };

  const handleAction = (action, product) => {
    console.log(action, product);
    setOpenMenuId(null);
  };

  return (
    <div className="mt-6 w-full rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header Controls */}
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
            Product inventory
          </p>
          <h2 className="mt-0.5 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            All Products
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-64 sm:min-w-[220px]">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search product or SKU"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:flex-none"
            >
              <FiFilter className="text-sm" />
              <span>Filter</span>
            </button>

            <Link
              href="/admin/add-product"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 sm:flex-none"
            >
              <FiPlus className="text-sm" />
              <span>Add Product</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Card View (< lg screens) */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:hidden">
        {filteredProducts.map((product) => {
          const isSelected = selectedProducts.includes(product.id);
          return (
            <div
              key={product.id}
              className={`relative flex flex-col justify-between rounded-xl border p-4 transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50/40 dark:border-emerald-500/50 dark:bg-slate-800/80'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/40'
              }`}
            >
              {/* Top Row: Checkbox, Details, Action Menu */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRowSelection(product.id)}
                      className="h-4 w-4 rounded cursor-pointer accent-emerald-600"
                    />
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-700">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        #{product.id} • SKU: {product.sku}
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <div
                    ref={(element) => {
                      menuRefs.current[`mobile-${product.id}`] = element;
                    }}
                    className="relative shrink-0"
                  >
                    <button
                      type="button"
                      aria-label="More options"
                      onClick={() =>
                        setOpenMenuId(openMenuId === `mobile-${product.id}` ? null : `mobile-${product.id}`)
                      }
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                    >
                      <FiMoreHorizontal className="text-lg" />
                    </button>

                    {openMenuId === `mobile-${product.id}` && (
                      <div className="absolute right-0 top-[calc(100%+0.25rem)] z-20 w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                        <button
                          type="button"
                          onClick={() => handleAction('View Details', product)}
                          className="flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction('Edit', product)}
                          className="flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction('Delete', product)}
                          className="flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.categories.map((category) => (
                    <span
                      key={category}
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        categoryColors[category] || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Stats & Status */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-700/60">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Price
                  </p>
                  <p className="font-bold text-slate-900 dark:text-slate-100">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      product.stock > 0
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-300'
                    }`}
                  >
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Pub: {product.published}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop & Laptop Table View (lg+ screens) */}
      <div className="hidden w-full overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 lg:block">
        <table className="w-full border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <th className="px-4 py-3 font-semibold">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    aria-label="Select all products"
                    checked={filteredProducts.length > 0 && selectedProducts.length === filteredProducts.length}
                    onChange={handleSelectAll}
                    className="h-4 w-4 cursor-pointer rounded accent-emerald-600"
                  />
                </div>
              </th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Product</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">SKU</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Stock</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Price</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Categories</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Date Published</th>
              <th className="px-4 py-3 text-center font-semibold whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className={`transition-colors ${
                  selectedProducts.includes(product.id)
                    ? 'bg-emerald-50/50 dark:bg-slate-800/70'
                    : 'bg-white hover:bg-slate-50/50 dark:bg-slate-900 dark:hover:bg-slate-800/40'
                }`}
              >
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleRowSelection(product.id)}
                    className="h-4 w-4 cursor-pointer rounded accent-emerald-600"
                  />
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800">
                      {product.image}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{product.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">#{product.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  {product.sku}
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      product.stock > 0
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-300'
                    }`}
                  >
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </td>

                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5">
                    {product.categories.map((category) => (
                      <span
                        key={category}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          categoryColors[category] || 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {product.published}
                </td>

                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <div
                    ref={(element) => {
                      menuRefs.current[product.id] = element;
                    }}
                    className="relative inline-block"
                  >
                    <button
                      type="button"
                      aria-label="More options"
                      onClick={() => setOpenMenuId(openMenuId === product.id ? null : product.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      <FiMoreHorizontal className="text-lg" />
                    </button>

                    {openMenuId === product.id && (
                      <div className="absolute right-0 top-[calc(100%+0.25rem)] z-10 w-36 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                        <button
                          type="button"
                          onClick={() => handleAction('View Details', product)}
                          className="flex w-full items-center rounded-lg px-2 py-1.5 text-left text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction('Edit', product)}
                          className="flex w-full items-center rounded-lg px-2 py-1.5 text-left text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction('Delete', product)}
                          className="flex w-full items-center rounded-lg px-2 py-1.5 text-left text-sm text-rose-600 transition hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-10 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          No products match your search.
        </div>
      )}
    </div>
  );
};

export default ProductTable;