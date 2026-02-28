import { Star, Shield, MapPin, Calendar, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PageTransition from '../components/PageTransition';

const Profile = () => {
    const { user } = useAuth();

    // Mock Profile Data
    const profile = {
        name: user?.name || 'John Doe',
        role: user?.role || 'Producer',
        joinDate: 'January 2024',
        location: 'Mumbai, India',
        verified: true,
        rating: 4.8,
        reviews: 24,
        impact: '150+ Meals Shared'
    };

    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto p-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Header/Cover */}
                    <div className="h-48 bg-gradient-to-r from-primary to-emerald-400 relative">
                        <div className="absolute -bottom-16 left-8">
                            <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md flex items-center justify-center text-4xl font-bold text-slate-300">
                                {profile.name[0]}
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-8 px-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                                    {profile.name}
                                    {profile.verified && <Shield className="w-6 h-6 text-primary fill-current" />}
                                </h1>
                                <p className="text-slate-500 font-medium capitalize flex items-center gap-2 mt-1">
                                    {profile.role} • <MapPin className="w-4 h-4" /> {profile.location}
                                </p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 justify-end">
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                    <span className="text-2xl font-bold text-slate-900">{profile.rating}</span>
                                    <span className="text-sm text-slate-500">({profile.reviews} reviews)</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-1">Trust Score: High</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Joined</p>
                                    <p className="font-semibold text-slate-900">{profile.joinDate}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Impact</p>
                                    <p className="font-semibold text-slate-900">{profile.impact}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p>
                                    <p className="font-semibold text-slate-900">Phone Verified</p>
                                </div>
                            </div>
                        </div>

                        {/* Badges / ID Verification Placeholders */}
                        <div className="mt-10">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Verification Badges</h3>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium flex items-center gap-2">
                                    <Shield className="w-4 h-4" /> Phone Verified
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium flex items-center gap-2">
                                    <Shield className="w-4 h-4" /> Email Verified
                                </span>
                                <span className="px-4 py-2 bg-slate-50 text-slate-500 border border-slate-200 rounded-full text-sm font-medium flex items-center gap-2 opacity-50">
                                    <Shield className="w-4 h-4" /> Govt ID (Optional)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Profile;
