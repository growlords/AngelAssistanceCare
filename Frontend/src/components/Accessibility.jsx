import React, { useState, useEffect } from 'react';
import { 
  Accessibility,
  Type, 
  ZoomIn, 
  ZoomOut, 
  PaintBucket, 
  Sun, 
  Moon, 
  Contrast, 
  Link as LinkIcon, 
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

  const applyStyles = () => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.filter = isGrayscale
      ? 'grayscale(1)'
      : isNegativeContrast
      ? 'invert(1)'
      : 'none';
    
    if (isHighContrast) {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#FFFFFF';
    } else {
      document.body.style.backgroundColor = isLightBackground ? '#F8FAFC' : '#111827';
      document.body.style.color = isLightBackground ? '#1E293B' : '#F8FAFC';
    }

    const links = document.getElementsByTagName('a');
    for (let link of links) {
      link.style.textDecoration = underlineLinks ? 'underline' : '';
    }
  };

  const resetStyles = () => {
    setFontSize(16);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsLightBackground(true);
    setUnderlineLinks(false);
    document.body.style.cssText = '';
    const links = document.getElementsByTagName('a');
    for (let link of links) {
      link.style.textDecoration = '';
    }
  };

  useEffect(() => {
    applyStyles();
  }, [fontSize, isGrayscale, isHighContrast, isNegativeContrast, isLightBackground, underlineLinks]);

  return (
    <div className="fixed right-4 bottom-8 z-[9990]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy text-brand-gold hover:text-white border-2 border-brand-gold/40 shadow-elevated hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
        aria-label="Open Accessibility Tools"
        title="Accessibility Tools"
      >
        <Accessibility className="w-6 h-6" />
        <span className="sr-only">Accessibility Preferences</span>
      </button>

      {/* Popover Panel */}
      {isOpen && (
        <div 
          className="absolute right-0 bottom-16 w-72 bg-brand-navy/95 backdrop-blur-xl text-white rounded-3xl shadow-2xl p-5 border border-white/20 animate-in fade-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <Accessibility className="w-5 h-5" />
              <h2 className="font-display font-bold text-sm text-white">Accessibility Tools</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-xs">
            {/* Text Zoom */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setFontSize(prev => prev + 2)}
                className="flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ZoomIn size={14} /> Increase
              </button>

              <button 
                onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                className="flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ZoomOut size={14} /> Decrease
              </button>
            </div>

            {/* High Contrast */}
            <button 
              onClick={() => setIsHighContrast(prev => !prev)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-colors ${
                isHighContrast ? 'bg-brand-gold text-brand-navy border-brand-gold font-bold' : 'bg-white/5 border-white/10 hover:bg-white/15'
              }`}
            >
              <span className="flex items-center gap-2"><Contrast size={14} /> High Contrast</span>
              <span>{isHighContrast ? 'ON' : 'OFF'}</span>
            </button>

            {/* Grayscale */}
            <button 
              onClick={() => setIsGrayscale(prev => !prev)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-colors ${
                isGrayscale ? 'bg-brand-gold text-brand-navy border-brand-gold font-bold' : 'bg-white/5 border-white/10 hover:bg-white/15'
              }`}
            >
              <span className="flex items-center gap-2"><PaintBucket size={14} /> Grayscale</span>
              <span>{isGrayscale ? 'ON' : 'OFF'}</span>
            </button>

            {/* Invert */}
            <button 
              onClick={() => setIsNegativeContrast(prev => !prev)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-colors ${
                isNegativeContrast ? 'bg-brand-gold text-brand-navy border-brand-gold font-bold' : 'bg-white/5 border-white/10 hover:bg-white/15'
              }`}
            >
              <span className="flex items-center gap-2"><Moon size={14} /> Invert Colors</span>
              <span>{isNegativeContrast ? 'ON' : 'OFF'}</span>
            </button>

            {/* Underline Links */}
            <button 
              onClick={() => setUnderlineLinks(prev => !prev)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-colors ${
                underlineLinks ? 'bg-brand-gold text-brand-navy border-brand-gold font-bold' : 'bg-white/5 border-white/10 hover:bg-white/15'
              }`}
            >
              <span className="flex items-center gap-2"><LinkIcon size={14} /> Highlight Links</span>
              <span>{underlineLinks ? 'ON' : 'OFF'}</span>
            </button>

            {/* Dyslexic Font */}
            <button 
              onClick={() => {
                const fontId = 'opendyslexic-font';
                if (!document.getElementById(fontId)) {
                  const font = document.createElement('link');
                  font.id = fontId;
                  font.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap';
                  font.rel = 'stylesheet';
                  document.head.appendChild(font);
                }
                document.body.style.fontFamily = 'OpenDyslexic, sans-serif';
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <span className="flex items-center gap-2"><Type size={14} /> Readable Font</span>
              <span className="text-[10px] text-slate-400">OpenDyslexic</span>
            </button>

            {/* Reset */}
            <button 
              onClick={() => {
                resetStyles();
                setIsOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-colors font-semibold"
            >
              <RotateCcw size={14} /> Reset All Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityTools;