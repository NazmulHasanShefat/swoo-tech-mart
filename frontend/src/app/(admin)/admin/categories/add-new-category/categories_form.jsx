"use client";

import Image from "next/image";
import React, { useState } from "react";

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CategoriesForm = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    image: null,
  });

  const [preview, setPreview] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    setForm((prev) => ({
      ...prev,
      name,
      slug: prev.slug ? prev.slug : slugify(name),
    }));
  };

  const handleSlugChange = (event) => {
    setForm((prev) => ({
      ...prev,
      slug: slugify(event.target.value),
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setForm((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-5 md:p-8">
      <div className="mx-auto max-w-4xl rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Add New Category
          </h1>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-[#1d9d57] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#188a4d]"
          >
            Save Category
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
          <h2 className="mb-5 text-2xl font-semibold text-slate-800">Basic Details</h2>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-base font-medium text-slate-700">
                  Category Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleNameChange}
                  placeholder="Enter category name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1d9d57] focus:ring-2 focus:ring-[#1d9d57]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-base font-medium text-slate-700">
                  Slug
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={handleSlugChange}
                  placeholder="category-slug"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1d9d57] focus:ring-2 focus:ring-[#1d9d57]/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-base font-medium text-slate-700">
                Category Image
              </label>

              <label
                htmlFor="category-image"
                className="flex  min-h-[180px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-4 transition hover:border-[#1d9d57] hover:bg-[#f8fdf9]"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="Category preview"
                    width={640}
                    height={400}
                    unoptimized
                    className="h-40 w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center text-slate-500">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-500">
                      +
                    </span>
                    <span className="text-sm font-medium">Upload category image</span>
                  </div>
                )}
              </label>

              <input
                id="category-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm;