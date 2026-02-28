import { useState } from 'react';
import { Plus, Package, Clock, Users, MapPin, Trash2, Edit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PostFoodForm from '../components/PostFoodForm';
import PageTransition from '../components/PageTransition';

const ProducerDashboard = () => {
    const [activeTab, setActiveTab] = useState('posts'); // 'posts', 'requests', 'stats'
    const [showForm, setShowForm] = useState(false);

    // Mock data
    const posts = [
        { id: 1, type: 'Homemade Curry', qty: '5kg', expiry: '2h', status: 'Available', requests: 2 },
        { id: 2, type: 'Bread Loaves', qty: '10 packs', expiry: '5h', status: 'Reserved', requests: 1 },
    ];

    const requests = [
        { id: 1, food: 'Homemade Curry', consumer: 'Alice', distance: '1.2km', time: '10m ago' },
    ];

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
                {showForm && <PostFoodForm onClose={() => setShowForm(false)} />}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Producer Dashboard</h1>
                        <p className="text-slate-600">Manage your donations and requests</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                        <Plus className="w-5 h-5" />
                        Donate Food
                    </motion.button>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Package className="w-6 h-6" /></div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Total Donated</p>
                                <h3 className="text-2xl font-bold text-slate-900">128 kg</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl"><Users className="w-6 h-6" /></div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">People Fed</p>
                                <h3 className="text-2xl font-bold text-slate-900">340+</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Clock className="w-6 h-6" /></div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Active Posts</p>
                                <h3 className="text-2xl font-bold text-slate-900">2</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tabs */}
                <div className="border-b border-slate-200 mb-6">
                    <div className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`pb-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'posts' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                        >
                            Active Listings
                        </button>
                        <button
                            onClick={() => setActiveTab('requests')}
                            className={`pb-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'requests' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                        >
                            Pickup Requests <span className="ml-2 bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs">1</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'posts' && (
                        <motion.div
                            key="posts"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid gap-6"
                        >
                            {posts.map(post => (
                                <motion.div
                                    layout
                                    key={post.id}
                                    className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <Package className="text-slate-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{post.type}</h3>
                                            <div className="flex gap-4 text-sm text-slate-500 mt-1">
                                                <span className="flex items-center gap-1"><Package className="w-3 h-3" /> {post.qty}</span>
                                                <span className="flex items-center gap-1 text-orange-500"><Clock className="w-3 h-3" /> Expires in {post.expiry}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                            {post.status}
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"><Edit className="w-5 h-5" /></button>
                                            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-5 h-5" /></button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'requests' && (
                        <motion.div
                            key="requests"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid gap-6"
                        >
                            {requests.map(req => (
                                <motion.div layout key={req.id} className="bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                                            {req.consumer[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{req.consumer} requested {req.food}</h3>
                                            <p className="text-sm text-slate-500">{req.distance} away • {req.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200">Decline</button>
                                        <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark shadow-md shadow-primary/20">Accept</button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
};

export default ProducerDashboard;
