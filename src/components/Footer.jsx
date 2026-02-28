import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <div className="flex gap-6">
                        <p>© 2024 SharePlate. All rights reserved.</p>
                        <Link to="/disclaimer" className="hover:text-primary transition-colors">Legal Disclaimer</Link>
                    </div>
                    <div className="flex items-center gap-1 mt-4 md:mt-0">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>for the community</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
