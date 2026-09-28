"use client";

import React, { useEffect, useRef, useState } from "react";

const colorOptions = ["#d9e8d7", "#f4dfe4", "#e7d7c8", "#d9d9d9", "#b2d4d9", "#c7d4a5"];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 text-slate-500">
    <path d="M21 21L16.65 16.65M18.5 11.25C18.5 15.254 15.254 18.5 11.25 18.5C7.246 18.5 4 15.254 4 11.25C4 7.246 7.246 4 11.25 4C15.254 4 18.5 7.246 18.5 11.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 text-slate-500">
    <path d="M7 3V6M17 3V6M4 9H20M5 5H19C20.1046 5 21 5.89543 21 7V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 text-slate-500">
    <path d="M12 16V4M7.5 8.5L12 4L16.5 8.5M4 18.5V18.5C4 17.6716 4.67157 17 5.5 17H18.5C19.3284 17 20 17.6716 20 18.5V18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M5 4H15L19 8V19C19 19.5523 18.5523 20 18 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4V9H16V4M9 15H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PlaceholderImage = ({ previewUrl }) => (
  <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-100 via-white to-slate-100 shadow-inner">
    {previewUrl ? (
      <img src={previewUrl} alt="Product preview" className="h-full w-full object-cover" />
    ) : (
      <div className="flex flex-col items-center justify-center gap-3 text-slate-400">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <UploadIcon />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-slate-500">Upload Product Image</p>
          <p className="text-xs text-slate-400">PNG, JPG, WEBP</p>
        </div>
      </div>
    )}
  </div>
);

const applyEditorAction = (command, value = null, updateHtml) => {
  const editor = document.getElementById("product-description-editor");
  if (!editor) return;

  editor.focus();
  document.execCommand(command, false, value);

  if (typeof updateHtml === "function") {
    updateHtml(editor.innerHTML || "");
  }
};

const applyHeading = (level, updateHtml) => {
  const editor = document.getElementById("product-description-editor");
  if (!editor) return;

  editor.focus();

  const tag = `H${level}`;
  const selection = window.getSelection();

  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    let parentTag = range.commonAncestorContainer.parentNode;
    if (parentTag.nodeType === Node.TEXT_NODE) {
      parentTag = parentTag.parentNode;
    }

    // Toggle back to paragraph if the heading is already applied
    if (parentTag.tagName === tag) {
      document.execCommand("formatBlock", false, "<P>");
    } else {
      document.execCommand("formatBlock", false, `<${tag}>`);
    }
  } else {
    document.execCommand("formatBlock", false, `<${tag}>`);
  }

  if (typeof updateHtml === "function") {
    updateHtml(editor.innerHTML || "");
  }
};

const addLinkToEditor = (updateHtml) => {
  const url = window.prompt("Enter a link URL", "https://");
  if (!url) return;
  applyEditorAction("createLink", url, updateHtml);
};

const AddProductForm = () => {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [expirationEnabled, setExpirationEnabled] = useState(true);
  const [unlimitedStock, setUnlimitedStock] = useState(true);
  const [descriptionHtml, setDescriptionHtml] = useState("");
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    const editor = document.getElementById("product-description-editor");
    if (editor && !editor.innerHTML.trim()) {
      editor.innerHTML = descriptionHtml;
    }
  }, []);

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const imageUrls = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        id: `${file.name}-${file.lastModified}`,
        url: URL.createObjectURL(file),
      }));

    setSelectedImages((prev) => [...prev, ...imageUrls].slice(0, 3));
    event.target.value = "";
  };

  const removeImage = (imageId) => {
    setSelectedImages((prev) => prev.filter((image) => image.id !== imageId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    formValues.images = selectedImages.map((image) => image.url);
    formValues.expirationEnabled = expirationEnabled;
    formValues.longDescription = descriptionHtml;
    formValues.variants = variants.filter((variant) => variant.name || variant.value);

    console.log("Product form data:", formValues);
  };

  const previewUrl = selectedImages[0]?.url || "";
  const galleryImages = selectedImages.slice(0, 3);

  const addVariantRow = () => {
    setVariants((prev) => [...prev, { name: "", value: "" }]);
  };

  const updateVariant = (index, field, value) => {
    setVariants((prev) =>
      prev.map((variant, variantIndex) =>
        variantIndex === index ? { ...variant, [field]: value } : variant,
      ),
    );
  };

  const removeVariant = (index) => {
    setVariants((prev) => prev.filter((_, variantIndex) => variantIndex !== index));
  };

  const toolbarButtons = [
    { label: "H1", action: () => applyHeading(1, setDescriptionHtml), className: "font-bold" },
    { label: "H2", action: () => applyHeading(2, setDescriptionHtml), className: "font-semibold" },
    { label: "H3", action: () => applyHeading(3, setDescriptionHtml), className: "font-medium" },
    { label: "H4", action: () => applyHeading(4, setDescriptionHtml), className: "font-medium" },
    { label: "B", action: () => applyEditorAction("bold", null, setDescriptionHtml), className: "font-bold" },
    { label: "U", action: () => applyEditorAction("underline", null, setDescriptionHtml), className: "underline" },
    { label: "Link", action: () => addLinkToEditor(setDescriptionHtml), className: "" },
    { label: "L", action: () => applyEditorAction("justifyLeft", null, setDescriptionHtml), className: "text-left" },
    { label: "C", action: () => applyEditorAction("justifyCenter", null, setDescriptionHtml), className: "text-center" },
    { label: "R", action: () => applyEditorAction("justifyRight", null, setDescriptionHtml), className: "text-right" },
    { label: "• List", action: () => applyEditorAction("insertUnorderedList", null, setDescriptionHtml), className: "" },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full bg-[#f5f5f5] px-3 py-3 sm:px-5 lg:px-7">
      <div className="mx-auto max-w-[1360px]">
        <header className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <h1 className="text-[2rem] font-bold leading-none tracking-[-0.04em] text-slate-800">Add New Product</h1>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center xl:justify-end">
            <label className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm sm:w-[330px]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search product for add"
                className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>

            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <SaveIcon />
              Save to draft
            </button>

            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50">
              <PlusIcon />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-[1.1rem] font-semibold text-slate-800">Basic Details</h2>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    placeholder="Enter product name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Short Description</label>
                  <textarea
                    rows={4}
                    name="shortDescription"
                    placeholder="Write a short product description"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>

                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-white px-3 py-2">
                      {toolbarButtons.map((tool) => (
                        <button
                          key={tool.label}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevents focus loss from contenteditable
                            tool.action();
                          }}
                          className={`inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-slate-200 px-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 ${tool.className}`}
                        >
                          {tool.label}
                        </button>
                      ))}
                    </div>

                    <div
                      id="product-description-editor"
                      contentEditable
                      suppressContentEditableWarning
                      data-placeholder="Write your full product description here..."
                      onInput={(event) => setDescriptionHtml(event.currentTarget.innerHTML)}
                      className="min-h-[180px] w-full px-3 py-3 text-base leading-7 text-slate-700 outline-none placeholder:text-slate-400 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:text-lg [&_h3]:font-medium [&_h4]:text-base [&_h4]:font-medium [&_ul]:list-disc [&_ul]:pl-5 empty:before:content-[attr(data-placeholder)] empty:before:text-slate-400 empty:before:pointer-events-none"
                    />
                    <input type="hidden" name="longDescription" value={descriptionHtml} />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-[1.1rem] font-semibold text-slate-800">Pricing</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Product Price</label>
                  <input
                    type="text"
                    name="productPrice"
                    placeholder="Enter product price"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Discount Price (Optional)</label>
                  <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <span className="mr-2 text-base text-slate-600">$</span>
                    <input
                      type="text"
                      name="discountPrice"
                      placeholder="0.00"
                      className="w-full bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <span className="text-sm font-medium text-slate-700">Sale Price</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-base font-medium text-slate-800">$999.99</span>
                    <span className="rounded-md bg-[#eaf7ef] px-2 py-1 text-xs font-medium text-[#1d9d57]">-10%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <span className="text-sm font-medium text-slate-700">Tax Included</span>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="taxIncluded" value="yes" className="h-4 w-4 accent-[#1d9d57]" defaultChecked />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="taxIncluded" value="no" className="h-4 w-4 accent-[#1d9d57]" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-[1.1rem] font-semibold text-slate-800">Expiration</h2>

                <button
                  type="button"
                  onClick={() => setExpirationEnabled((prev) => !prev)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${expirationEnabled ? "bg-[#1d9d57]" : "bg-slate-300"}`}
                  aria-label="Toggle expiration"
                >
                  <span
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${expirationEnabled ? "translate-x-6" : "translate-x-1"}`}
                  />
                </button>
              </div>

              {expirationEnabled ? (
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Start</span>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                      <input type="date" name="startDate" defaultValue="" className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400" onClick={(e) => e.currentTarget.showPicker?.()} />
                      <CalendarIcon />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">End</span>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                      <input type="date" name="endDate" defaultValue="" className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400" onClick={(e) => e.currentTarget.showPicker?.()} />
                      <CalendarIcon />
                    </div>
                  </label>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                  Expiration is disabled.
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-[1.1rem] font-semibold text-slate-800">Inventory</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Stock Quantity</label>
                  <input
                    type={unlimitedStock ? "text" : "number"}
                    name="stockQuantity"
                    placeholder={unlimitedStock ? "Unlimited" : "Enter stock quantity"}
                    disabled={unlimitedStock}
                    className={`w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white placeholder:text-slate-400 ${unlimitedStock ? "cursor-not-allowed opacity-70" : ""}`}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Stock Status</label>
                  <select name="stockStatus" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white">
                    <option value="">Select stock status</option>
                    <option>In Stock</option>
                    <option>Out of Stock</option>
                    <option>Low Stock</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    name="isUnlimited"
                    checked={unlimitedStock}
                    onChange={() => setUnlimitedStock((prev) => !prev)}
                    className="peer sr-only"
                  />
                  <span className="h-6 w-11 rounded-full bg-[#b5d8b8] transition peer-checked:bg-[#1d9d57]" />
                  <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
                </label>
                <span className="text-sm text-slate-600">Unlimited</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#edfce8] text-[10px] font-bold text-[#1d9d57]">✓</span>
                Highlight this product in a featured section.
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-[1.1rem] font-semibold text-slate-800">Upload Product Image</h2>

              <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-5">
                  <button type="button" onClick={triggerUpload} className="mb-3 flex w-full items-center justify-center rounded-xl bg-slate-50 p-2">
                    <PlaceholderImage previewUrl={previewUrl} />
                  </button>

                  <div className="mt-2 flex w-full items-center justify-between gap-3">
                    <button type="button" onClick={triggerUpload} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                      Browse
                    </button>
                    <button type="button" onClick={triggerUpload} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                      Replace
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, index) => {
                  const image = galleryImages[index];

                  return (
                    <div key={index} className="relative h-20 overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:bg-slate-100">
                      {image ? (
                        <>
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute right-1 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[10px] font-bold text-white"
                            aria-label="Remove image"
                          >
                            ×
                          </button>
                          <img src={image.url} alt={`Uploaded preview ${index + 1}`} className="h-full w-full object-cover" />
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={triggerUpload}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                            <UploadIcon />
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <button type="button" onClick={triggerUpload} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
                <UploadIcon />
                Add Image
              </button>

              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Product Categories</label>
                  <select name="productCategory" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white">
                    <option value="">Select product category</option>
                    <option>Smartphones</option>
                    <option>Accessories</option>
                    <option>Audio</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Product Tag</label>
                  <select name="productTag" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-base text-slate-700 outline-none transition focus:border-[#1d9d57] focus:bg-white">
                    <option value="">Select product tag</option>
                    <option>Popular</option>
                    <option>New Arrival</option>
                    <option>Featured</option>
                  </select>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-slate-700">Variants</label>
                    <button
                      type="button"
                      onClick={addVariantRow}
                      className="inline-flex items-center justify-center rounded-lg bg-[#1d9d57] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#168a4d]"
                    >
                      + Add
                    </button>
                  </div>

                  <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    {variants.map((variant, index) => (
                      <div key={index} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                        <input
                          type="text"
                          value={variant.name}
                          onChange={(event) => updateVariant(index, "name", event.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1d9d57]"
                        />
                        <input
                          type="text"
                          value={variant.value}
                          onChange={(event) => updateVariant(index, "value", event.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#1d9d57]"
                        />
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-lg font-bold text-red-500 transition hover:bg-red-100"
                          aria-label="Remove variant"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>

        <div className="mt-6 flex justify-end">
          <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#1d9d57] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#168a4d]">
            Publish Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;