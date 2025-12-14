"use client"
import React, { useState } from "react";

/**
 * Editable Under Test Label Component - form style for the main section
 */
export default function UnderTestLabel({
  materialName = "ACETOXY ETHYLE BROMINE",
  controlNo = "RM/02714/25",
  batchNo = "AEBD250714",
  mfgDate = "01/08/25",
  expDate = "31/12/2025",
  suppliedBy = "SCL LIFESCIENCES LIMITED",
  manufacBy = "SCL LIFESCIENCES LIMITED",
  qty = "312 KG",
  containers = "50/50",
  date = "11/12/2025",
}) {
  // Local editable state initialized from props so this section behaves like a form
  const [fields, setFields] = useState({
    materialName,
    controlNo,
    batchNo,
    mfgDate,
    expDate,
    suppliedBy,
    manufacBy,
    qty,
    containers,
    date,
    sign: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((s) => ({ ...s, [name]: value }));
  }

  return (
    <div className="w-full max-w-3xl border border-black mx-auto text-sm">
      {/* Header */}
      <div className="text-center bg-yellow-300 font-extrabold text-4xl py-4 border-b border-black">
        UNDER TEST
      </div>

      {/* Main Content - form style */}
      <div className="grid grid-cols-2 gap-4 p-4 text-base">
        <div>
          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Material Name:</span>
            <input
              name="materialName"
              value={fields.materialName}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Control No:</span>
            <input
              name="controlNo"
              value={fields.controlNo}
              onChange={handleChange}
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Batch No:</span>
            <input
              name="batchNo"
              value={fields.batchNo}
              onChange={handleChange}
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Mfg Date:</span>
            <input
              name="mfgDate"
              value={fields.mfgDate}
              onChange={handleChange}
              placeholder="DD/MM/YY or YYYY-MM-DD"
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Exp/Retest Date:</span>
            <input
              name="expDate"
              value={fields.expDate}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Supplied By:</span>
            <input
              name="suppliedBy"
              value={fields.suppliedBy}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Manufac By:</span>
            <input
              name="manufacBy"
              value={fields.manufacBy}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>

        <div>
          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Qty:</span>
            <input
              name="qty"
              value={fields.qty}
              onChange={handleChange}
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">No. Of Container:</span>
            <input
              name="containers"
              value={fields.containers}
              onChange={handleChange}
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Date:</span>
            <input
              name="date"
              value={fields.date}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          <label className="flex items-center justify-between gap-3 mb-2">
            <span className="font-semibold">Sign:</span>
            <input
              name="sign"
              value={fields.sign}
              onChange={handleChange}
              placeholder="Signature"
              className="w-1/2 border border-gray-400 rounded px-2 py-1"
            />
          </label>

          {/* optional: small preview of filled values or actions */}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 px-4 pb-4">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 border border-black font-semibold hover:bg-gray-100"
        >
          Print
        </button>

        <button
          onClick={() =>
            setFields({
              materialName: "",
              controlNo: "",
              batchNo: "",
              mfgDate: "",
              expDate: "",
              suppliedBy: "",
              manufacBy: "",
              qty: "",
              containers: "",
              date: "",
              sign: "",
            })
          }
          className="px-4 py-2 border border-black font-semibold hover:bg-gray-100"
        >
          Clear Form
        </button>
      </div>

      {/* Footer */}
      <div className="text-center font-bold text-xl border-t border-b border-black py-3">
        CEPH LIFESCIENCES PRIVATE LIMITED
      </div>

      <div className="p-3 text-base">
        <strong>Reference SOP NO WH-SG-004</strong>
      </div>
    </div>
  );
}
