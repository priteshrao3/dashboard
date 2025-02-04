import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function FooterPage() {
    const socialLinks = [
        { icon: <FaFacebookF />, url: "https://facebook.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <FaInstagram />, url: "https://instagram.com" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
        { icon: <FaYoutube />, url: "https://youtube.com" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    
                    {/* Logo & Branding */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-white mb-2">Mail Blaster</h1>
                        <p className="text-sm text-gray-400">Simplify your email marketing with automation.</p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 text-white">Menu</h5>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Pages Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 text-white">Pages</h5>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="hover:text-blue-400 transition">Subjects</Link></li>
                            <li><Link href="/announcement" className="hover:text-blue-400 transition">Templates</Link></li>
                        </ul>
                    </div>

                    {/* Terms & Policies */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 text-white">Terms & Policies</h5>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-blue-400 transition">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col items-center">
                    
                    {/* Social Icons */}
                    <div className="flex space-x-4 mb-4">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300">
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright Text */}
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} All Rights Reserved by 
                        <Link href="/" className="text-white font-semibold hover:text-blue-400 transition ml-1">PRWebTechno</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
