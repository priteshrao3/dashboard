import Image from "next/image";
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
        <footer className="bg-blue-900 text-white pt-5">
            <div className="container mx-auto px-6">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & Branding */}
                    <div className="text-center md:text-left pt-10">
                        <h1 className="text-3xl font-bold">Mail Blaster</h1>
                        <p className="text-sm text-gray-200 mt-2">
                            Simplify your email marketing with automation.
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Menu</h5>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Pages Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Pages</h5>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="hover:text-gray-300 transition">Subjects</Link></li>
                            <li><Link href="/announcement" className="hover:text-gray-300 transition">Templates</Link></li>
                        </ul>
                    </div>

                    {/* Terms & Policies */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Terms & Policies</h5>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="hover:text-gray-300 transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-gray-300 transition">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-10 border-t border-white pt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white text-blue-900 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition duration-300 shadow-lg"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright Text */}
                    <p className="text-sm text-gray-200 text-center">
                        © {new Date().getFullYear()} All Rights Reserved by
                        <Link href="/" className="font-semibold hover:text-gray-300 transition ml-1">PRWebTechno</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
