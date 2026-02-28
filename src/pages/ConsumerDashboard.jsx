import { useState } from 'react';
import { Map as MapIcon, List, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import PageTransition from '../components/PageTransition';

const ConsumerDashboard = () => {
    const [view, setView] = useState('map'); // 'map' | 'list'

    return (
        <PageTransition>
            <div className="h-[calc(100vh-4rem)] flex flex-col">
                {/* Top Bar */}
                <div className="bg-white border-b border-slate-200 p-4">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-secondary focus:border-secondary placeholder-slate-400 text-sm"
                                placeholder="Search for food..."
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setView('map')}
                                className={`p-2 rounded-lg flex items-center gap-2 text-sm font-medium ${view === 'map' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <MapIcon className="w-4 h-4" /> Map
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`p-2 rounded-lg flex items-center gap-2 text-sm font-medium ${view === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <List className="w-4 h-4" /> List
                            </button>
                            <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                                <Filter className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow bg-slate-100 relative overflow-hidden">
                    {view === 'map' ? (
                        <div className="absolute inset-0">
                            <MapComponent />
                        </div>
                    ) : (
                        <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-full">
                            {/* Mock List Items */}
                            {[1, 2, 3, 4, 5].map(i => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                    <div className="h-32 bg-slate-200 relative">
                                        {/* Image Placeholder */}
                                        <span className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md">Available</span>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-slate-900">Fresh Vegetables</h3>
                                            <span className="text-xs text-slate-500">2km away</span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">Assorted fresh vegetables from local garden. Carrots, Spinach, and Tomatoes.</p>
                                        <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                                            <span>Qty: 2kg</span>
                                            <span>Expires: 2 days</span>
                                        </div>
                                        <button className="w-full py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-dark transition-colors">
                                            Request
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default ConsumerDashboard;
