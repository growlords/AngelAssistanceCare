import React, { useState } from 'react';
import { 
  Accessibility,
  Type, 
  ZoomIn, 
  ZoomOut, 
  PaintBucket, 
  Sun, 
  Moon, 
  Contrast, 
  Link, 
  RotateCcw,
  X 
} from 'lucide-react';

const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isNegativeContrast, setIsNegativeContrast] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(true);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  // Apply styles to the entire document body
  const applyStyles = () => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.filter = isGrayscale ? 'grayscale(1)' : 'none';
    
    if (isHighContrast) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else if (isNegativeContrast) {
      document.body.style.filter = 'invert(1)';
    } else {
      document.body.style.backgroundColor = isLightBackground ? '#fff' : '#222';
      document.body.style.color = isLightBackground ? '#000' : '#fff';
      document.body.style.filter = 'none';
    }

    if (underlineLinks) {
      const links = document.getElementsByTagName('a');
      for (let link of links) {
        link.style.textDecoration = 'underline';
      }
    }
  };

  const resetStyles = () => {
    setFontSize(16);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsLightBackground(true);
    setUnderlineLinks(false);
    document.body.style = '';
    const links = document.getElementsByTagName('a');
    for (let link of links) {
      link.style.textDecoration = '';
    }
  };

  React.useEffect(() => {
    applyStyles();
  }, [fontSize, isGrayscale, isHighContrast, isNegativeContrast, isLightBackground, underlineLinks]);

  return (
    <div className="fixed right-4 top-4 z-50">
      {/* Main Accessibility Icon Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-yellow-300 p-3 rounded-full hover:bg-gray-800 transition-colors"
        aria-label="Accessibility Tools"
      >
        <Accessibility size={24} />
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-900 text-yellow-300 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Accessibility Tools</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-yellow-300 hover:text-yellow-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => setFontSize(prev => prev + 2)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <ZoomIn size={18} /> Increase Text
            </button>

            <button 
              onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <ZoomOut size={18} /> Decrease Text
            </button>

            <button 
              onClick={() => setIsGrayscale(prev => !prev)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <PaintBucket size={18} /> Grayscale
            </button>

            <button 
              onClick={() => setIsHighContrast(prev => !prev)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <Contrast size={18} /> High Contrast
            </button>

            <button 
              onClick={() => setIsNegativeContrast(prev => !prev)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <Moon size={18} /> Negative Contrast
            </button>

            <button 
              onClick={() => setIsLightBackground(prev => !prev)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <Sun size={18} /> Light Background
            </button>

            <button 
              onClick={() => setUnderlineLinks(prev => !prev)}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <Link size={18} /> Links Underline
            </button>

            <button 
              onClick={() => {
                const font = document.createElement('link');
                font.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap';
                font.rel = 'stylesheet';
                document.head.appendChild(font);
                document.body.style.fontFamily = 'OpenDyslexic, sans-serif';
              }}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <Type size={18} /> Readable Font
            </button>

            <button 
              onClick={() => {
                resetStyles();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 hover:text-yellow-100 transition-colors"
            >
              <RotateCcw size={18} /> Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityTools;