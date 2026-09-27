import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { HiOutlineArrowUp, HiOutlineArrowDown } from 'react-icons/hi';

const stats = [
  {
    label: 'Total Sales',
    period: 'Last 7 days',
    amount: '$350K',
    change: 'Sales',
    delta: '10.4%',
    isUp: true,
    previous: 'Previous 7days',
    previousVal: '($235)',
  },
  {
    label: 'Total Orders',
    period: 'Last 7 days',
    amount: '10.7K',
    change: 'order',
    delta: '14.4%',
    isUp: true,
    previous: 'Previous 7days',
    previousVal: '(7.6k)',
  },
  {
    label: 'Pending & Canceled',
    period: 'Last 7 days',
    isSplitCard: true,
    pendingLabel: 'Pending',
    pendingVal: '509',
    pendingMeta: 'user 204',
    canceledLabel: 'Canceled',
    canceledVal: '94',
    canceledMeta: '14.4%',
    isCanceledUp: false,
  },
];

const HomeStates = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Card Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-400">{item.period}</p>
            </div>

            <button
              type="button"
              aria-label="More options"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <FiMoreVertical className="text-lg" />
            </button>
          </div>

          {/* Card Content */}
          <div className="my-4">
            {item.isSplitCard ? (
              <div className="flex items-center gap-6">
                {/* Pending Column */}
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.pendingLabel}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">
                      {item.pendingVal}
                    </span>
                    <span className="text-xs text-emerald-500 font-medium">{item.pendingMeta}</span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="h-8 w-[1px] bg-slate-100 dark:bg-slate-800" />

                {/* Canceled Column */}
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.canceledLabel}</p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-rose-500">{item.canceledVal}</span>
                    <span className="inline-flex items-center text-xs font-medium text-rose-400">
                      <HiOutlineArrowDown className="mr-0.5 text-xs" />
                      {item.canceledMeta}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {item.amount}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span>{item.change}</span>
                    <span className="inline-flex items-center font-medium text-emerald-500">
                      <HiOutlineArrowUp className="mr-0.5 text-xs" />
                      {item.delta}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  {item.previous} <span className="text-indigo-500 font-medium">{item.previousVal}</span>
                </p>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-full border border-indigo-200 px-4 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-950/30"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeStates;