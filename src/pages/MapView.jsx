import MapComponent from '../components/MapComponent';
import PageTransition from '../components/PageTransition';

const MapView = () => {
    return (
        <PageTransition>
            <div className="h-[calc(100vh-4rem)] p-4 bg-slate-100 relative">
                <div className="absolute inset-0 p-4">
                    <MapComponent />
                </div>
            </div>
        </PageTransition>
    );
};

export default MapView;
