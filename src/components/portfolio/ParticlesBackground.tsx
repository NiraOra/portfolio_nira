import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load('particles-js', '/particles.json', () => {
          console.log('particles.js loaded - callback');
          const canvas = document.querySelector('#particles-js canvas') as HTMLCanvasElement;
          if (canvas) {
            canvas.style.zIndex = '-1';
            canvas.style.pointerEvents = 'auto'; 
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="fixed inset-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'auto', 
      }}
    />
  );
};

export default ParticlesBackground;