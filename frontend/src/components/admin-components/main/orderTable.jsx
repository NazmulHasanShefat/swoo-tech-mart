"use client";
import React, { useState } from 'react';
import {
  FiSearch,
  FiFilter,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiTruck,
  FiClock,
  FiXCircle,
} from 'react-icons/fi';
import { LuArrowUpDown } from 'react-icons/lu';

const initialOrders = [
  { id: '#ORD0001', no: 1, name: 'Wireless Bluetooth Headphones', image: '🎧', date: '01-01-2025', price: 49.99, payment: 'Paid', status: 'Delivered' },
  { id: '#ORD0002', no: 2, name: "Men's T-Shirt", image: '👕', date: '01-01-2025', price: 14.99, payment: 'Unpaid', status: 'Pending' },
  { id: '#ORD0003', no: 3, name: "Men's Leather Wallet", image: '👛', date: '01-01-2025', price: 49.99, payment: 'Paid', status: 'Delivered' },
  { id: '#ORD0004', no: 4, name: 'Memory Foam Pillow', image: '🛏️', date: '01-01-2025', price: 39.99, payment: 'Paid', status: 'Shipped' },
  { id: '#ORD0005', no: 5, name: 'Adjustable Dumbbells', image: '🏋️', date: '01-01-2025', price: 14.99, payment: 'Unpaid', status: 'Pending' },
  { id: '#ORD0006', no: 6, name: 'Coffee Maker', image: '☕', date: '01-01-2025', price: 79.99, payment: 'Unpaid', status: 'Canceled' },
  { id: '#ORD0007', no: 7, name: 'Casual Baseball Cap', image: '🧢', date: '01-01-2025', price: 49.99, payment: 'Paid', status: 'Delivered' },
  { id: '#ORD0008', no: 8, name: 'Full HD Webcam', image: '📷', date: '01-01-2025', price: 39.99, payment: 'Paid', status: 'Delivered' },
  { id: '#ORD0009', no: 9, name: 'Smart LED Color Bulb', image: '💡', date: '01-01-2025', price: 79.99, payment: 'Unpaid', status: 'Delivered' },
  { id: '#ORD0010', no: 10, name: "Men's T-Shirt", image: '👕', date: '01-01-2025', price: 14.99, payment: 'Unpaid', status: 'Delivered' },
];

const OrderTable = () => {
  const [activeTab, setActiveTab] = useState('All order');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    { name: 'All order', count: 240 },
    { name: 'Completed', count: 180 },
    { name: 'Pending', count: 42 },
    { name: 'Canceled', count: 18 },
  ];

  // Toggle selection for all rows
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(initialOrders.map((o) => o.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Toggle single row selection
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Filter products based on active tab and search input
  const filteredOrders = initialOrders.filter((order) => {
    const matchesSearch =
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === 'Completed') return matchesSearch && (order.status === 'Delivered' || order.status === 'Shipped');
    if (activeTab === 'Pending') return matchesSearch && order.status === 'Pending';
    if (activeTab === 'Canceled') return matchesSearch && order.status === 'Canceled';
    return matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return (
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <FiTruck className="text-sm" />
            Delivered
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-500 dark:text-amber-400">
            <FiClock className="text-sm" />
            Pending
          </span>
        );
      case 'Shipped':
        return (
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
            <FiTruck className="text-sm" />
            Shipped
          </span>
        );
      case 'Canceled':
        return (
          <span className="inline-flex items-center gap-1.5 font-medium text-rose-500 dark:text-rose-400">
            <FiXCircle className="text-sm" />
            Canceled
          </span>
        );
      default:
        return status;
    }
  };

  return (
    <div className="w-full mt-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      {/* Header Controls */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Navigation Tabs */}
        <div className="inline-flex items-center gap-1 rounded-xl bg-emerald-50/60 p-1 dark:bg-slate-800/80">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                type="button"
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {tab.name}
                {tab.count && (
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                      isActive
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search order report"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-transparent bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-emerald-500 focus:bg-white dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-emerald-500"
            />
          </div>

          {/* Action Buttons */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <FiFilter className="text-sm" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <LuArrowUpDown className="text-sm" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <FiMoreHorizontal className="text-sm" />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          {/* Table Header */}
          <thead>
            <tr className="bg-emerald-50/70 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
              <th className="w-10 rounded-l-lg py-3.5 pl-4 pr-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === initialOrders.length && initialOrders.length > 0}
                  className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
                />
              </th>
              <th className="py-3.5 font-semibold">No.</th>
              <th className="py-3.5 font-semibold">Order Id</th>
              <th className="py-3.5 font-semibold">Product</th>
              <th className="py-3.5 font-semibold">Date</th>
              <th className="py-3.5 font-semibold">Price</th>
              <th className="py-3.5 font-semibold">Payment</th>
              <th className="rounded-r-lg py-3.5 font-semibold">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => {
                const isSelected = selectedRows.includes(order.id);
                return (
                  <tr
                    key={order.id}
                    className={`transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-800/40 ${
                      isSelected ? 'bg-emerald-50/30 dark:bg-slate-800/80' : ''
                    }`}
                  >
                    <td className="py-3.5 pl-4 pr-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectRow(order.id)}
                        className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
                      />
                    </td>
                    <td className="py-3.5 font-medium text-slate-500 dark:text-slate-400">{order.no}</td>
                    <td className="py-3.5 font-semibold text-slate-800 dark:text-slate-200">{order.id}</td>
                    <td className="py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-base dark:bg-slate-800">
                          {order.image}
                        </div>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{order.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-slate-500 dark:text-slate-400">{order.date}</td>
                    <td className="py-3.5 font-medium text-slate-800 dark:text-slate-200">${order.price.toFixed(2)}</td>
                    <td className="py-3.5">
                      <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            order.payment === 'Paid' ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                        {order.payment}
                      </div>
                    </td>
                    <td className="py-3.5">{getStatusBadge(order.status)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-40 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <FiChevronLeft className="text-sm" />
          Previous
        </button>

        <div className="flex items-center gap-1 text-xs">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              type="button"
              className={`flex h-8 w-8 items-center justify-center rounded-lg font-medium transition ${
                currentPage === page
                  ? 'bg-emerald-200/80 font-bold text-slate-800 dark:bg-emerald-800 dark:text-emerald-100'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-1 text-slate-400">...</span>
          <button
            onClick={() => setCurrentPage(24)}
            type="button"
            className={`flex h-8 w-8 items-center justify-center rounded-lg font-medium transition ${
              currentPage === 24
                ? 'bg-emerald-200/80 font-bold text-slate-800 dark:bg-emerald-800 dark:text-emerald-100'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            24
          </button>
        </div>

        <button
          type="button"
          onClick={() => setCurrentPage((p) => p + 1)}
          className="flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          Next
          <FiChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default OrderTable;