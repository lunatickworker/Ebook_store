import { useEffect, useState } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShowPrompt(false);
      });
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg p-4 rounded-lg z-50">
      <p className="text-sm mb-2">📱 이 앱을 홈 화면에 추가해보세요!</p>
      <button
        onClick={handleInstall}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
      >
        설치하기
      </button>
    </div>
  );
};

export default InstallPrompt;
