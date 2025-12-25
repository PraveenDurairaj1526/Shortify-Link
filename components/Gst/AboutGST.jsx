export default function AboutGST() {
    return (
        <section id="about" className="py-20 bg-[#f0f8ff]">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        How to Calculate GST in India
                    </h2>
                    <p className="text-gray-600 text-lg">
                        If you’re wondering how to calculate GST, here’s a simple
                        explanation to help you understand the process easily.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* GST Exclusive */}
                    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold mb-4">
                            +
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            GST Exclusive
                        </h3>
                        <p className="text-gray-600">
                            GST is added on top of the base price. This method is
                            commonly used in invoices where tax is calculated
                            separately.
                        </p>
                    </div>

                    {/* GST Inclusive */}
                    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold mb-4">
                            =
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            GST Inclusive
                        </h3>
                        <p className="text-gray-600">
                            GST is already included in the final amount. This
                            helps you find the original price and tax value.
                        </p>
                    </div>

                    {/* Reverse GST */}
                    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold mb-4">
                            ↺
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Reverse GST Calculator
                        </h3>
                        <p className="text-gray-600">
                            Extracts the original amount from a GST-inclusive
                            price, useful for MRP and invoice reconciliation.
                        </p>
                    </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-lg">
                        Our <span className="font-semibold text-blue-600">GST calculator </span> 
                         automatically handles all these calculations, so you don’t
                        have to worry about formulas.
                    </p>
                </div>
            </div>
        </section>
    );
}
