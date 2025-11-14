export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-5">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Brand Logo */}
                <div className="flex items-center space-x-2">
                    <a className="text-xl font-semibold" href="/"> <span className="text-[#3e8be8]">Shortify</span> Link</a>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
                    <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
                    <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
                    <a href="mailto:praveendurairaj.in">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Shortify Link. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
