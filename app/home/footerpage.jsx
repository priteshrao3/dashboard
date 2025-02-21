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
        <footer className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-16">
            <div className="container mx-auto px-6">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
                    
                    {/* Brand Logo & Tagline */}
                    <div>
                        <h1 className="text-4xl font-extrabold">Mail Blaster</h1>
                        <p className="text-gray-200 text-sm mt-3 leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Elevate your email marketing with powerful automation and precision targeting.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Quick Links</h5>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 transition duration-300">About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Resources</h5>
                        <ul className="space-y-3">
                            <li><Link href="/subjectlines" className="hover:text-gray-300 transition duration-300">Subject Lines</Link></li>
                            <li><Link href="/templatesall" className="hover:text-gray-300 transition duration-300">Templates</Link></li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 border-b-2 pb-2 border-white">Stay Connected</h5>
                        <p className="text-sm text-gray-300 mb-4">Follow us on social media</p>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white text-blue-900 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md transform hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-400 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
                    <p>© {new Date().getFullYear()} All Rights Reserved by 
                        <Link href="/" className="font-semibold hover:text-white transition duration-300 ml-1">PRWebTechno</Link>
                    </p>
                    <p className="mt-4 sm:mt-0">Designed with ❤️ by PRWebTechno</p>
                </div>
            </div>
        </footer>
    );
}
