export default function WhyUseGSTCalculator() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="whyUseGst">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Why Use Our GST Calculator India?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        A simple, accurate, and reliable tool designed to make
                        GST calculation easy for everyone in India.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Accurate GST Calculation"
                        description="Calculates GST correctly as per the latest Indian GST structure."
                        icon="✔"
                    />
                    <FeatureCard
                        title="Inclusive & Exclusive GST"
                        description="Supports both GST inclusive and GST exclusive price calculations."
                        icon="₹"
                    />
                    <FeatureCard
                        title="Reverse GST Calculator"
                        description="Easily find the original base price from a GST-inclusive amount."
                        icon="↺"
                    />
                    <FeatureCard
                        title="All GST Rates Supported"
                        description="Works with all GST rates used in India, from low to high slabs."
                        icon="%"
                    />
                    <FeatureCard
                        title="Fast & Free Tool"
                        description="Get instant results without signup, cost, or hidden limits."
                        icon="⚡"
                    />
                    <FeatureCard
                        title="Works on Any Device"
                        description="Use the calculator seamlessly on mobile, tablet, or desktop."
                        icon="📱"
                    />
                </div>

                {/* Audience */}
                <div className="mt-14 bg-white border rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                        Who Is This GST Calculator For?
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Our <span className="font-semibold text-blue-600">GST Calculator India </span> 
                        is ideal for business owners, accountants, freelancers,
                        students, and anyone who needs a dependable GST
                        calculation tool.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* 🔹 Reusable Feature Card */

function FeatureCard({ title, description, icon }) {
    return (
        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                {icon}
            </div>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
