import { AlertTriangle, Info } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Disclaimer = () => {
    return (
        <PageTransition>
            <div className="max-w-3xl mx-auto px-4 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-orange-500" />
                        <h1 className="text-3xl font-bold text-slate-900">Legal Disclaimer</h1>
                    </div>

                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p className="font-medium text-lg text-slate-800">
                            Please read this disclaimer carefully before using the SharePlate application.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-500" /> Platform Role
                            </h3>
                            <p>
                                SharePlate acts solely as an intermediary platform connecting food donors (Producers) and food receivers (Consumers).
                                We do not cook, store, or distribute food directly.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Food Quality & Safety</h3>
                            <p>
                                Users are solely responsible for ensuring the safety and quality of the food they share or consume.
                                SharePlate does not verify the quality, safety, or edibility of the food posted on the platform.
                                Consumers are advised to use their discretion and check the food before consumption.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Liability</h3>
                            <p>
                                SharePlate and its developers shall not be held liable for any health issues, food poisoning, or damages arising from the consumption of food obtained through this platform.
                                By using this app, you agree to release SharePlate from any liability related to food transactions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">User Conduct</h3>
                            <p>
                                We reserve the right to ban or suspend users who post inappropriate content, misuse the platform, or engage in fraudulent activities.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 text-sm text-slate-500">
                        Last updated: February 2024
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Disclaimer;
