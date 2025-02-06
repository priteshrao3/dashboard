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
        <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">

                    {/* Logo & Branding */}
                    <div className="text-center md:text-left pt-10">
                        <h1 className="text-4xl font-extrabold text-white">Mail Blaster</h1>
                        <p className="text-sm text-gray-200 mt-2 max-w-xs mx-auto md:mx-0">
                            Simplify your email marketing with automation and boost your outreach.
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Menu</h5>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Pages Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Pages</h5>
                        <ul className="space-y-2">
                            <li><Link href="subjectlines" className="hover:text-blue-400 transition duration-300">Subjects</Link></li>
                            <li><Link href="templatesall" className="hover:text-blue-400 transition duration-300">Templates</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-10 border-t border-white pt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">

                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white text-blue-900 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright Text */}
                    <p className="text-sm text-gray-200 text-center mt-6 md:mt-0">
                        © {new Date().getFullYear()} All Rights Reserved by
                        <Link href="/" className="font-semibold hover:text-blue-400 transition duration-300 ml-1">PRWebTechno</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
