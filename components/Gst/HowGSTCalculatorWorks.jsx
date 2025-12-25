export default function HowGSTCalculatorWorks() {
    return (
        <section className="py-20 bg-white" id="howToUseGst">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        How GST Calculator India Works
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Using our <strong>GST Calculator India</strong> is simple and
                        requires just a few steps. The tool instantly shows accurate
                        GST calculations without any manual effort.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    <StepCard
                        step="1"
                        title="Enter the Amount"
                        description="Enter the transaction value for which you want to calculate GST."
                    />
                    <StepCard
                        step="2"
                        title="Select GST Rate"
                        description="Choose the applicable GST rate based on the goods or services."
                    />
                    <StepCard
                        step="3"
                        title="Choose GST Type"
                        description="Select whether the amount is inclusive or exclusive of GST."
                    />
                </div>

                {/* Results */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                        What the Calculator Shows Instantly
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ResultItem text="Base amount (before GST)" />
                        <ResultItem text="GST amount" />
                        <ResultItem text="CGST & SGST (for intra-state supply)" />
                        <ResultItem text="IGST (for inter-state supply)" />
                        <ResultItem text="Total payable amount" />
                    </div>

                    <p className="text-center text-gray-700 mt-6">
                        This makes understanding GST clear, accurate, and
                        completely hassle-free.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* 🔹 Reusable components */

function StepCard({ step, title, description }) {
    return (
        <div className="bg-gray-50 border rounded-2xl p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                {step}
            </div>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function ResultItem({ text }) {
    return (
        <div className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">
                ✓
            </span>
            <span className="text-gray-700">{text}</span>
        </div>
    );
}
