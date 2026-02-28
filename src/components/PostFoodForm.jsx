import { useState } from 'react';
import { Camera, Clock, MapPin, X } from 'lucide-react';

const PostFoodForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">Donate Food</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <form className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Food Type</label>
                        <input type="text" className="block w-full p-3 border border-slate-200 rounded-xl focus:ring-primary focus:border-primary" placeholder="e.g., Rice, Curry, Bread" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                            <input type="text" className="block w-full p-3 border border-slate-200 rounded-xl focus:ring-primary focus:border-primary" placeholder="e.g., 5kg, 10 packs" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Time</label>
                            <input type="text" className="block w-full p-3 border border-slate-200 rounded-xl focus:ring-primary focus:border-primary" placeholder="e.g., 2 hours" />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900">Current Location</p>
                            <p className="text-xs text-slate-500">Detecting via GPS...</p>
                        </div>
                    </div>

                    {/* Photo Verification */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Food Verification Photo</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors cursor-pointer bg-slate-50">
                            <Camera className="w-8 h-8 mb-2" />
                            <span className="text-sm font-medium">Click to capture or upload</span>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark shadow-xl shadow-primary/20 transition-all mt-4">
                        Post Donation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostFoodForm;
