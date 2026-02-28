import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Phone, Mail, ArrowRight, Lock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Login = () => {
    const [role, setRole] = useState('consumer'); // 'producer' | 'consumer'
    const [method, setMethod] = useState('phone'); // 'phone' | 'email'
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            const userData = {
                name: 'Test User',
                role: role,
                id: '123'
            };
            login(userData);
            navigate(role === 'producer' ? '/producer-dashboard' : '/consumer-dashboard');
        }, 600);
    };

    return (
        <PageTransition>
            <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 w-full max-w-md overflow-hidden relative">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                            <p className="text-slate-500">Sign in to continue sharing goodness.</p>
                        </div>

                        {/* Role Selection */}
                        <div className="grid grid-cols-2 gap-2 bg-slate-100/50 p-1.5 rounded-2xl mb-8">
                            {['consumer', 'producer'].map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setRole(r)}
                                    className={`py-3 rounded-xl text-sm font-semibold transition-all duration-300 capitalize ${role === r
                                        ? 'bg-white text-primary-700 shadow-sm ring-1 ring-slate-200'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Method Tabs */}
                            <div className="flex border-b border-slate-200 mb-6">
                                <button
                                    type="button"
                                    onClick={() => setMethod('phone')}
                                    className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${method === 'phone' ? 'text-slate-900' : 'text-slate-400'
                                        }`}
                                >
                                    Phone Number
                                    {method === 'phone' && (
                                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900" />
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMethod('email')}
                                    className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${method === 'email' ? 'text-slate-900' : 'text-slate-400'
                                        }`}
                                >
                                    Email Address
                                    {method === 'email' && (
                                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900" />
                                    )}
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {method === 'phone' ? (
                                    <motion.div
                                        key="phone"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-4"
                                    >
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                                required
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="email"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                                required
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    'Signing in...'
                                ) : (
                                    <>
                                        Login <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-500">
                                Don't have an account?{' '}
                                <Link to="/register" className="text-primary-600 font-bold hover:text-primary-700 hover:underline decoration-2 underline-offset-4">
                                    Create Free Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Login;
