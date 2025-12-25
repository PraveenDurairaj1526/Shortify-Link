"use client";

import { useMemo, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Select,
  Option,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function GSTForm() {
  const printRef = useRef(null);

  const { control, register, watch } = useForm({
    defaultValues: {
      amount: 100,
      rate: 18,
      calcType: "exclusive",
      supplyType: "intra",
    },
  });

  const amount = Number(watch("amount"));
  const rate = Number(watch("rate"));
  const calcType = watch("calcType");
  const supplyType = watch("supplyType");

  const handlePrint = () => window.print();

  // ✅ GST calculation logic
  const result = useMemo(() => {
    if (!amount || amount <= 0) return null;

    let base = 0;
    let gst = 0;
    let total = 0;

    if (calcType === "exclusive") {
      base = amount;
      gst = (amount * rate) / 100;
      total = amount + gst;
    } else {
      base = amount / (1 + rate / 100);
      gst = amount - base;
      total = amount;
    }

    return {
      base,
      gst,
      cgst: supplyType === "intra" ? gst / 2 : 0,
      sgst: supplyType === "intra" ? gst / 2 : 0,
      igst: supplyType === "inter" ? gst : 0,
      total,
    };
  }, [amount, rate, calcType, supplyType]);

  return (
    <>
      {/* 🔹 Print styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area,
          .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* INPUT CARD */}
        <Card className="p-8 rounded-2xl border shadow-sm print:hidden">
          <Typography variant="h4" className="mb-8">
            Enter GST Details
          </Typography>

          <div className="mb-6">
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <Input {...field} type="number" label="Amount (₹)" />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="rate"
              control={control}
              render={({ field }) => (
                <Select label="GST Rate" {...field}>
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((r) => (
                    <Option key={r} value={r}>
                      {r}%
                    </Option>
                  ))}
                </Select>
              )}
            />
          </div>

          <div className="mb-6">
            <Typography className="font-semibold mb-3">
              Calculation Type
            </Typography>
            <div className="flex gap-3 flex-wrap">
              <RadioPill
                label="Exclusive (Add GST)"
                value="exclusive"
                register={register("calcType")}
              />
              <RadioPill
                label="Inclusive (Remove GST)"
                value="inclusive"
                register={register("calcType")}
              />
            </div>
          </div>

          <div>
            <Typography className="font-semibold mb-3">
              Supply Type
            </Typography>
            <div className="flex gap-3 flex-wrap">
              <RadioPill
                label="Intra-State (CGST + SGST)"
                value="intra"
                register={register("supplyType")}
              />
              <RadioPill
                label="Inter-State (IGST)"
                value="inter"
                register={register("supplyType")}
              />
            </div>
          </div>
        </Card>

        {/* RESULT CARD */}
        <Card
          ref={printRef}
          className="p-8 rounded-2xl border shadow-sm bg-gradient-to-br from-white to-gray-50 print-area"
        >
          <div className="flex justify-between items-center mb-8">
            <Typography variant="h4">GST Breakdown</Typography>
            {result && (
              <Button
                size="sm"
                color="blue"
                onClick={handlePrint}
                className="print:hidden"
              >
                Print
              </Button>
            )}
          </div>

          {!result ? (
            <p className="text-gray-500">
              Enter an amount to view results
            </p>
          ) : (
            <>
              <ResultRow label="Base Amount" value={result.base} />
              <ResultRow label="GST Amount" value={result.gst} highlight />

              {supplyType === "intra" && (
                <>
                  <ResultRow label="CGST" value={result.cgst} small />
                  <ResultRow label="SGST" value={result.sgst} small />
                </>
              )}

              {supplyType === "inter" && (
                <ResultRow label="IGST" value={result.igst} small />
              )}

              <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">
                    Total Payable
                  </span>
                  <span className="text-4xl font-extrabold text-blue-600">
                    ₹{result.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
}

/* 🔹 UI Helpers */

function RadioPill({ label, value, register }) {
  return (
    <label className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 cursor-pointer text-sm hover:bg-blue-50 transition">
      <input
        type="radio"
        value={value}
        {...register}
        className="accent-blue-600 w-4 h-4"
      />
      {label}
    </label>
  );
}

function ResultRow({ label, value, highlight, small }) {
  return (
    <div
      className={`flex justify-between py-3 border-b last:border-none ${
        small ? "text-sm" : ""
      }`}
    >
      <span className="text-gray-600">{label}</span>
      <span
        className={`font-semibold ${
          highlight ? "text-blue-600" : ""
        }`}
      >
        ₹{value.toFixed(2)}
      </span>
    </div>
  );
}
