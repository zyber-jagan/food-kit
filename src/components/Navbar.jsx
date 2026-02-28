import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, User, LogOut, LayoutDashboard, Map as MapIcon, Utensils } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Utensils className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
                                SharePlate
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-600 hover:text-primary font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/map" className="text-slate-600 hover:text-primary font-medium transition-colors flex items-center gap-1">
                            <MapIcon className="w-4 h-4" /> Map
                        </Link>

                        {!user ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-slate-600 hover:text-primary font-medium transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                    Get Started
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to={user.role === 'producer' ? '/producer-dashboard' : '/consumer-dashboard'}
                                    className="text-slate-600 hover:text-primary font-medium transition-colors flex items-center gap-1"
                                >
                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                </Link>
                                <Link to="/chat" className="text-slate-600 hover:text-primary font-medium transition-colors">
                                    Messages
                                </Link>
                                <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                                    <div className="text-right hidden lg:block">
                                        <p className="text-sm font-medium text-slate-700">{user.name}</p>
                                        <p className="text-xs text-slate-500 capitalize">{user.role}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        title="Logout"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-green-50">
                            Home
                        </Link>
                        <Link to="/map" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-green-50">
                            Map View
                        </Link>
                        {!user ? (
                            <>
                                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-green-50">
                                    Login
                                </Link>
                                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark">
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to={user.role === 'producer' ? '/producer-dashboard' : '/consumer-dashboard'} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-green-50">
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-red-50">
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
