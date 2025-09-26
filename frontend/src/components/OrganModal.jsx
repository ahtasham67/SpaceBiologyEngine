import BrainModal from './organs/BrainModal';
import HeartModal from './organs/HeartModal';
import LungsModal from './organs/LungsModal';
import LiverModal from './organs/LiverModal';
import KidneysModal from './organs/KidneysModal';
import DefaultOrganModal from './organs/DefaultOrganModal';

export default function OrganModal({ selectedPart, onClose }) {
  if (!selectedPart) return null;

  const renderOrganModal = () => {
    switch (selectedPart) {
      case 'Brain':
        return <BrainModal onClose={onClose} />;
      case 'Heart':
        return <HeartModal onClose={onClose} />;
      case 'Lungs':
        return <LungsModal onClose={onClose} />;
      case 'Liver':
        return <LiverModal onClose={onClose} />;
      case 'Kidneys':
        return <KidneysModal onClose={onClose} />;
      default:
        return <DefaultOrganModal selectedPart={selectedPart} onClose={onClose} />;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      {renderOrganModal()}
    </div>
  );
}