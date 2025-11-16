import clsx from 'clsx';

export default function HowItWorks({ containerClass, content }) {
    return (
        <section id="howItWorks" className={clsx("w-full py-20 px-6 bg-[#f9fbff]", containerClass)}>
            <div className="max-w-[1150px] mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{content?.title}</h2>
                <p className="text-lg text-gray-600 mb-14 max-w-[650px] mx-auto">{content?.subTitle}</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {content?.stepsData?.map((step) => (
                        <div key={step.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                            <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#066ae510", color: "#066ae5", border: "1px solid #066ae533", }}>{step.label}</div>
                            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-5 text-3xl bg-[#066ae520] text-[#066ae5]">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2"> {step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description} </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
