"use client";

import React, { useState, useMemo } from "react";

export default function RawMaterialDispensingTag() {
  const [form, setForm] = useState({
    materialName: "MICA ESTER",
    arNo: "RM246026",
    productStage: "CFX-A",
    batchNo: "CFX06051725N",
    containers: "XYZ",
    mfgDate: "28.03.2025",
    retestDate: "21.10.2026",
    expiryDate: "NA",
    grWt: "12",
    kgTwt: "",
    kgNetWt: "",
    date: "13.12.2025",
    sign: "",
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Total Qty = Gr Wt + KG T.WT + KG Net Wt
  const totalQty = useMemo(() => {
    const gr = parseFloat(form.grWt) || 0;
    const tWt = parseFloat(form.kgTwt) || 0;
    const net = parseFloat(form.kgNetWt) || 0;
    return (gr + tWt + net).toFixed(2);
  }, [form.grWt, form.kgTwt, form.kgNetWt]);

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    setForm({
      materialName: "",
      arNo: "",
      productStage: "",
      batchNo: "",
      containers: "",
      mfgDate: "",
      retestDate: "",
      expiryDate: "",
      grWt: "",
      kgTwt: "",
      kgNetWt: "",
      date: "",
      sign: "",
    });
  };

  return (
    <>
      {/* PRINT AREA */}
      <div className="max-w-4xl mx-auto border border-black text-sm">
        {/* Header */}
        <div className="text-center font-bold border-b border-black py-2">
          <div className="text-lg">
            CEPH LIFESCIENCES PRIVATE LIMITED (UNIT II)
          </div>
          <div className="text-base">RAW MATERIAL DISPENSING TAG</div>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3">
          <div className="flex gap-3">
            <span className="font-semibold w-48">Name of Material:</span>
            <input
              name="materialName"
              value={form.materialName}
              onChange={handleChange}
              className="border-b border-black flex-1"
            />
          </div>

          <div className="flex gap-3">
            <span className="font-semibold w-48">A.R. No.:</span>
            <input
              name="arNo"
              value={form.arNo}
              onChange={handleChange}
              className="border-b border-black flex-1"
            />
          </div>

          <div className="flex gap-3">
            <span className="font-semibold w-48">
              Product Name & Stage:
            </span>
            <input
              name="productStage"
              value={form.productStage}
              onChange={handleChange}
              className="border-b border-black flex-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="font-semibold w-48">Batch No.:</span>
              <input
                name="batchNo"
                value={form.batchNo}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>

            <div className="flex gap-3">
              <span className="font-semibold w-32">Total Qty:</span>
              <span className="font-bold">{totalQty} kg</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="font-semibold w-48">
                No. of Containers:
              </span>
              <input
                name="containers"
                value={form.containers}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>

            <div className="flex gap-3">
              <span className="font-semibold w-32">Mfg Date:</span>
              <input
                name="mfgDate"
                value={form.mfgDate}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="font-semibold w-48">Retest Date:</span>
              <input
                name="retestDate"
                value={form.retestDate}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>

            <div className="flex gap-3">
              <span className="font-semibold w-32">Expiry Date:</span>
              <input
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>
          </div>

          {/* Weights */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex gap-2">
              <span className="font-semibold">Gr. Wt.:</span>
              <input
                name="grWt"
                value={form.grWt}
                onChange={handleChange}
                className="border-b border-black w-24"
              />
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">KG T.WT.:</span>
              <input
                name="kgTwt"
                value={form.kgTwt}
                onChange={handleChange}
                className="border-b border-black w-24"
              />
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">KG Net Wt.:</span>
              <input
                name="kgNetWt"
                value={form.kgNetWt}
                onChange={handleChange}
                className="border-b border-black w-24"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex gap-3">
              <span className="font-semibold w-48">Date:</span>
              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>

            <div className="flex gap-3">
              <span className="font-semibold w-32">Sign:</span>
              <input
                name="sign"
                value={form.sign}
                onChange={handleChange}
                className="border-b border-black flex-1"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-black py-3 font-semibold">
          Reference SOP No. WH-SG-005
        </div>
      </div>

      {/* ACTION BUTTONS (NOT PRINTED) */}
      <div className="flex gap-4 justify-center mt-6 print:hidden">
        <button
          onClick={handlePrint}
          className="px-6 py-2 border border-black font-semibold hover:bg-gray-100"
        >
          Print
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-2 border border-black font-semibold hover:bg-gray-100"
        >
          Clear Form
        </button>
      </div>
    </>
  );
}
