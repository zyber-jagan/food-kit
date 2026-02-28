import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Lock, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Register = () => {
    const [role, setRole] = useState('producer');
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate register & login
        setTimeout(() => {
            const userData = {
                name: 'New User',
                role: role,
                id: '456'
            };
            login(userData);
            navigate(role === 'producer' ? '/producer-dashboard' : '/consumer-dashboard');
        }, 800);
    };

    return (
        <PageTransition>
            <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-100/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                </div>

                <motion.div
                    className="max-w-md w-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
                        <p className="text-slate-500">
                            Step {step} of 2 • {step === 1 ? 'Choose Role' : 'Your Details'}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        { id: 'producer', icon: User, label: 'Producer', desc: 'I want to donate food' },
                                        { id: 'consumer', icon: User, label: 'Consumer', desc: 'I need food' }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setRole(item.id)}
                                            className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden ${role === item.id
                                                    ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200 ring-offset-2'
                                                    : 'border-slate-100 hover:border-primary-200 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${role === item.id ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-400'
                                                }`}>
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className={`font-bold ${role === item.id ? 'text-primary-900' : 'text-slate-900'}`}>{item.label}</h3>
                                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>

                                            {role === item.id && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute top-2 right-2 text-primary-500"
                                                >
                                                    <CheckCircle className="w-5 h-5 fill-current" />
                                                </motion.div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setStep(2)}
                                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    Continue <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                        <input type="text" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" placeholder="Full Name" />
                                    </div>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                        <input type="tel" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" placeholder="Phone Number" />
                                    </div>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                                        <input type="password" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-6 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleRegister}
                                        disabled={isLoading}
                                        className="flex-1 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? 'Creating...' : 'Create Account'}
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary-600 font-bold hover:underline decoration-2 underline-offset-4">
                                Login here
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Register;
