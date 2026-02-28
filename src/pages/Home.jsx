import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Heart, Shield, Users, ArrowRight, Salad, Truck, Utensils } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <div className="bg-slate-50 overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    {/* Background Blobs */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
                        <div className="absolute top-40 -right-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
                        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-primary-700 mb-6 animate-pulse-slow">
                                🚀 Bridging the gab between surplus and hunger
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                                Share Food, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                    Spread Hope.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Join our community-driven platform connecting local businesses and neighbors to reduce food waste and help those in need.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                                    >
                                        Start Sharing
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                                <Link to="/map">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className="w-5 h-5 text-primary-500" />
                                        Find Food Nearby
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Simple steps to make a big impact in your community.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Salad, title: "Post Food", desc: "Share surplus food details and location in seconds.", color: "bg-green-100 text-green-600" },
                                { icon: MapPin, title: "Locate", desc: "Real-time map showing available food donations nearby.", color: "bg-blue-100 text-blue-600" },
                                { icon: Truck, title: "Pickup", desc: "Coordinate pickup and help reduce food waste.", color: "bg-orange-100 text-orange-600" }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <div className="text-5xl font-bold text-primary-400">500+</div>
                                <div className="text-slate-400 font-medium">Meals Shared</div>
                            </motion.div>
                            <div className="w-px h-24 bg-slate-800 hidden md:block" />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-2"
                            >
                                <div className="text-5xl font-bold text-secondary-400">120+</div>
                                <div className="text-slate-400 font-medium">Community Heroes</div>
                            </motion.div>
                            <div className="w-px h-24 bg-slate-800 hidden md:block" />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                            >
                                <div className="text-5xl font-bold text-accent-500">24/7</div>
                                <div className="text-slate-400 font-medium">Support</div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
