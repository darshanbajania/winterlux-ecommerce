import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">WinterLux</h3>
                        <p className="text-sm leading-relaxed">
                            Premium winter wear designed for those who refuse to compromise on style or comfort.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Men</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Women</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Accessories</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-center text-sm">
                    &copy; {new Date().getFullYear()} WinterLux. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
