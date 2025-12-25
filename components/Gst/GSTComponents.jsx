export default function ReverseGSTSection() {
    return (
        <section className="py-20  bg-[linear-gradient(1deg,#9fe8c3,#008dd300)]" id="reverseGST">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12 text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Reverse GST Calculator – Find Base Price from Final Amount
                    </h2>
                    <p className="text-white-600 text-lg">
                        The reverse GST calculator helps you remove GST from a total
                        amount. This is especially useful when dealing with invoices,
                        MRP pricing, or tax reconciliation.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Steps */}
                    <div className="bg-gray-50 border rounded-2xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            How Reverse GST Works
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                                    1
                                </span>
                                <p className="text-gray-700">
                                    Enter the <strong>final amount</strong> that already
                                    includes GST.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                                    2
                                </span>
                                <p className="text-gray-700">
                                    Select the applicable <strong>GST rate</strong>.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                                    3
                                </span>
                                <p className="text-gray-700">
                                    The calculator instantly shows the GST breakup.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-gray-700">
                                The tool will calculate:
                            </p>
                            <ul className="mt-3 space-y-2 text-gray-700">
                                <li>✔ Original base price</li>
                                <li>✔ GST amount</li>
                                <li>✔ Total tax breakup (CGST/SGST or IGST)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Example */}
                    <div className="bg-white border rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold mb-6">
                            Reverse GST Example
                        </h3>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                Suppose you receive an invoice with a <strong>final
                                amount of ₹118</strong> and the GST rate is
                                <strong> 18%</strong>.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-5">
                                <div className="flex justify-between mb-2">
                                    <span>Final Amount</span>
                                    <span className="font-semibold">₹118.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>GST Rate</span>
                                    <span className="font-semibold">18%</span>
                                </div>
                                <hr className="my-3" />
                                <div className="flex justify-between mb-2">
                                    <span>Base Price</span>
                                    <span className="font-semibold">₹100.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>GST Amount</span>
                                    <span className="font-semibold text-blue-600">
                                        ₹18.00
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500">
                                This method is commonly used for MRP-based pricing,
                                purchase bills, and GST reconciliation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
