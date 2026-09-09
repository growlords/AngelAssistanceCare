import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Accessibility,
  Type,
  ZoomIn,
  ZoomOut,
  PaintBucket,
  Moon,
  Contrast,
  Link as LinkIcon,
  RotateCcw,
  X,
} from 'lucide-react';

// =====================================================================
// STYLE SHEET MANAGERS (Isolated from the rest of the application)
// =====================================================================

const INVERT_STYLE_ID = 'a11y-invert-theme';
const CONTRAST_STYLE_ID = 'a11y-high-contrast-theme';
const GRAYSCALE_STYLE_ID = 'a11y-grayscale-theme';
const READABLE_FONT_STYLE_ID = 'a11y-readable-font-theme';

// --- 1. Invert Theme (Dark -> Light Accessibility Theme) ---
function applyInvertTheme() {
  if (document.getElementById(INVERT_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = INVERT_STYLE_ID;
  style.textContent = `
    html.a11y-theme-invert,
    html.a11y-theme-invert body,
    html.a11y-theme-invert #root {
      background: #FFFFFF !important;
      background-color: #FFFFFF !important;
      color: #0F253E !important;
    }
    html.a11y-theme-invert header,
    html.a11y-theme-invert nav,
    html.a11y-theme-invert main,
    html.a11y-theme-invert section,
    html.a11y-theme-invert footer,
    html.a11y-theme-invert article,
    html.a11y-theme-invert aside,
    html.a11y-theme-invert .scene-hero,
    html.a11y-theme-invert .scene-aqua,
    html.a11y-theme-invert .scene-cream,
    html.a11y-theme-invert .scene-mist,
    html.a11y-theme-invert .scene-peach,
    html.a11y-theme-invert .scene-footer,
    html.a11y-theme-invert .scene-midnight,
    html.a11y-theme-invert .scene-cobalt,
    html.a11y-theme-invert .scene-sapphire,
    html.a11y-theme-invert .scene-contact {
      background: #FFFFFF !important;
      background-color: #FFFFFF !important;
      color: #0F253E !important;
    }
    html.a11y-theme-invert .light-glass-card,
    html.a11y-theme-invert .dark-glass-card,
    html.a11y-theme-invert .light-card-contrast {
      background: #F8FAFC !important;
      background-color: #F8FAFC !important;
      border: 1px solid #CBD5E1 !important;
      color: #0F253E !important;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06) !important;
    }
    html.a11y-theme-invert .glass-nav-default,
    html.a11y-theme-invert .glass-nav-scrolled {
      background: rgba(255, 255, 255, 0.98) !important;
      border-bottom: 1px solid #E2E8F0 !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
    }
    html.a11y-theme-invert h1,
    html.a11y-theme-invert h2,
    html.a11y-theme-invert h3,
    html.a11y-theme-invert h4,
    html.a11y-theme-invert h5,
    html.a11y-theme-invert h6 {
      color: #0F253E !important;
    }
    html.a11y-theme-invert p,
    html.a11y-theme-invert span:not([data-a11y-keep]),
    html.a11y-theme-invert li,
    html.a11y-theme-invert label,
    html.a11y-theme-invert input,
    html.a11y-theme-invert textarea {
      color: #1E293B !important;
    }
    html.a11y-theme-invert a:not([data-a11y-widget]) {
      color: #1D4ED8 !important;
    }
    html.a11y-theme-invert button:not([data-a11y-widget]) {
      background-color: #F1F5F9 !important;
      color: #0F253E !important;
      border: 1px solid #CBD5E1 !important;
    }
    html.a11y-theme-invert .bg-radial,
    html.a11y-theme-invert [class*="blur-3xl"] {
      opacity: 0.1 !important;
    }
    /* STRICT MEDIA PRESERVATION: Never invert photos, videos, canvas, or SVGs */
    html.a11y-theme-invert img,
    html.a11y-theme-invert picture,
    html.a11y-theme-invert video,
    html.a11y-theme-invert canvas,
    html.a11y-theme-invert svg,
    html.a11y-theme-invert iframe {
      filter: none !important;
      -webkit-filter: none !important;
      background-color: transparent !important;
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('a11y-theme-invert');
}

function removeInvertTheme() {
  const style = document.getElementById(INVERT_STYLE_ID);
  if (style) style.remove();
  document.documentElement.classList.remove('a11y-theme-invert');
}

// --- 2. High Contrast Theme ---
function applyContrastTheme() {
  if (document.getElementById(CONTRAST_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = CONTRAST_STYLE_ID;
  style.textContent = `
    html.a11y-high-contrast body,
    html.a11y-high-contrast #root,
    html.a11y-high-contrast header,
    html.a11y-high-contrast nav,
    html.a11y-high-contrast main,
    html.a11y-high-contrast section,
    html.a11y-high-contrast footer,
    html.a11y-high-contrast article {
      background-color: #000000 !important;
      background: #000000 !important;
      color: #FFFFFF !important;
    }
    html.a11y-high-contrast h1,
    html.a11y-high-contrast h2,
    html.a11y-high-contrast h3,
    html.a11y-high-contrast h4,
    html.a11y-high-contrast h5,
    html.a11y-high-contrast h6,
    html.a11y-high-contrast p,
    html.a11y-high-contrast span:not([data-a11y-keep]),
    html.a11y-high-contrast li,
    html.a11y-high-contrast label {
      color: #FFFFFF !important;
    }
    html.a11y-high-contrast a:not([data-a11y-widget]) {
      color: #00FFFF !important;
    }
    html.a11y-high-contrast button:not([data-a11y-widget]) {
      background-color: #FFFFFF !important;
      color: #000000 !important;
      border: 2px solid #FFFFFF !important;
    }
    html.a11y-high-contrast img,
    html.a11y-high-contrast picture,
    html.a11y-high-contrast video,
    html.a11y-high-contrast canvas,
    html.a11y-high-contrast svg {
      filter: none !important;
    }

    /* Surgical High Contrast fix: ONLY service card white-on-white text */
    html.a11y-high-contrast [aria-label*="Services"] .bg-white h3,
    html.a11y-high-contrast [aria-label*="Services"] .bg-white p,
    html.a11y-high-contrast [aria-label*="Services"] .bg-white span,
    html.a11y-high-contrast [aria-label*="services"] .bg-white h3,
    html.a11y-high-contrast [aria-label*="services"] .bg-white p,
    html.a11y-high-contrast [aria-label*="services"] .bg-white span {
      color: #000000 !important;
    }
    html.a11y-high-contrast [aria-label*="Services"] .bg-white a,
    html.a11y-high-contrast [aria-label*="services"] .bg-white a {
      color: #0000EE !important;
      text-decoration: underline !important;
    }
    html.a11y-high-contrast [aria-label*="Services"] .bg-white,
    html.a11y-high-contrast [aria-label*="services"] .bg-white {
      border: 2px solid #000000 !important;
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('a11y-high-contrast');
}

function removeContrastTheme() {
  const style = document.getElementById(CONTRAST_STYLE_ID);
  if (style) style.remove();
  document.documentElement.classList.remove('a11y-high-contrast');
}

// --- 3. Grayscale Theme (Targets #root only, never body or a11y widget) ---
function applyGrayscaleTheme() {
  if (document.getElementById(GRAYSCALE_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = GRAYSCALE_STYLE_ID;
  style.textContent = `
    html.a11y-grayscale #root {
      filter: grayscale(1) !important;
      -webkit-filter: grayscale(1) !important;
    }
    /* Explicitly guarantee the accessibility widget never receives grayscale */
    [data-a11y-widget] {
      filter: none !important;
      -webkit-filter: none !important;
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('a11y-grayscale');
}

function removeGrayscaleTheme() {
  const style = document.getElementById(GRAYSCALE_STYLE_ID);
  if (style) style.remove();
  document.documentElement.classList.remove('a11y-grayscale');
}

// --- 4. Readable Font Theme (OpenDyslexic via CORS-enabled WOFF) ---
function applyReadableFontTheme() {
  if (document.getElementById(READABLE_FONT_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = READABLE_FONT_STYLE_ID;
  style.textContent = `
    @font-face {
      font-family: 'OpenDyslexicFont';
      src: url('https://fonts.cdnfonts.com/s/29616/open-dyslexic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    html.a11y-readable-font body,
    html.a11y-readable-font #root,
    html.a11y-readable-font h1,
    html.a11y-readable-font h2,
    html.a11y-readable-font h3,
    html.a11y-readable-font h4,
    html.a11y-readable-font h5,
    html.a11y-readable-font h6,
    html.a11y-readable-font p,
    html.a11y-readable-font span:not([data-a11y-keep]),
    html.a11y-readable-font a:not([data-a11y-widget]),
    html.a11y-readable-font li,
    html.a11y-readable-font label,
    html.a11y-readable-font button:not([data-a11y-widget]),
    html.a11y-readable-font input,
    html.a11y-readable-font textarea {
      font-family: 'OpenDyslexicFont', 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;
      letter-spacing: 0.02em !important;
    }
    /* Protect the accessibility tool itself from font change */
    [data-a11y-widget],
    [data-a11y-widget] * {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('a11y-readable-font');
}

function removeReadableFontTheme() {
  const style = document.getElementById(READABLE_FONT_STYLE_ID);
  if (style) style.remove();
  document.documentElement.classList.remove('a11y-readable-font');
}

// =====================================================================
// TOGGLE BUTTON (Strong visual contrast)
// =====================================================================
const ToggleButton = ({ active, onClick, icon, label }) => {
  const AMBER = '#F4A261';
  const NAVY = '#0F253E';

  return (
    <button
      type="button"
      data-a11y-widget="true"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 14px',
        borderRadius: '14px',
        border: active ? `2px solid ${AMBER}` : '1px solid #E2E8F0',
        backgroundColor: active ? NAVY : '#F8FAFC',
        color: active ? '#FFFFFF' : NAVY,
        fontWeight: active ? '700' : '500',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        width: '100%',
        boxShadow: active ? '0 4px 12px rgba(15, 37, 62, 0.2)' : 'none',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = '#EDF2F7';
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = '#F8FAFC';
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }} data-a11y-keep="true">
        <span style={{ color: active ? AMBER : NAVY, display: 'flex' }} data-a11y-keep="true">{icon}</span>
        <span data-a11y-keep="true">{label}</span>
      </span>
      <span
        data-a11y-keep="true"
        style={{
          fontSize: '11px',
          fontWeight: '700',
          padding: '2px 8px',
          borderRadius: '8px',
          backgroundColor: active ? AMBER : '#E2E8F0',
          color: active ? NAVY : '#64748B',
        }}
      >
        {active ? 'ON' : 'OFF'}
      </span>
    </button>
  );
};

// =====================================================================
// MAIN ACCESSIBILITY TOOLS COMPONENT
// =====================================================================
const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isInvert, setIsInvert] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [mounted, setMounted] = useState(false);

  const panelRef = useRef(null);

  // Mount detection for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // ---- Text Size Zoom ----
  useEffect(() => {
    if (fontSize !== 16) {
      document.body.style.fontSize = `${fontSize}px`;
    } else {
      document.body.style.fontSize = '';
    }
  }, [fontSize]);

  // ---- High Contrast ----
  useEffect(() => {
    if (isHighContrast) {
      applyContrastTheme();
    } else {
      removeContrastTheme();
    }
    return () => removeContrastTheme();
  }, [isHighContrast]);

  // ---- Grayscale (Scoped to #root, keeps a11y widget visible and colorful) ----
  useEffect(() => {
    if (isGrayscale) {
      applyGrayscaleTheme();
    } else {
      removeGrayscaleTheme();
    }
    return () => removeGrayscaleTheme();
  }, [isGrayscale]);

  // ---- Invert (Dark -> Light Theme with photo protection) ----
  useEffect(() => {
    if (isInvert) {
      applyInvertTheme();
    } else {
      removeInvertTheme();
    }
    return () => removeInvertTheme();
  }, [isInvert]);

  // ---- Highlight Links ----
  useEffect(() => {
    const links = document.querySelectorAll('a:not([data-a11y-widget])');
    links.forEach((link) => {
      link.style.textDecoration = underlineLinks ? 'underline' : '';
    });
  }, [underlineLinks]);

  // ---- Readable Font (OpenDyslexic via @font-face) ----
  useEffect(() => {
    if (isReadableFont) {
      applyReadableFontTheme();
    } else {
      removeReadableFontTheme();
    }
    return () => removeReadableFontTheme();
  }, [isReadableFont]);

  // ---- Escape Key Listener ----
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // ---- Reset All Preferences ----
  const resetAll = () => {
    setFontSize(16);
    setIsHighContrast(false);
    setIsGrayscale(false);
    setIsInvert(false);
    setUnderlineLinks(false);
    setIsReadableFont(false);

    // Clean up all applied styles & style tags
    document.body.style.cssText = '';
    removeInvertTheme();
    removeContrastTheme();
    removeGrayscaleTheme();
    removeReadableFontTheme();

    document.querySelectorAll('a:not([data-a11y-widget])').forEach((a) => {
      a.style.textDecoration = '';
    });

    setIsOpen(false);
  };

  const AMBER = '#F4A261';
  const NAVY = '#0F253E';
  const TEAL = '#2A9D8F';

  const widgetContent = (
    <div
      data-a11y-widget="true"
      style={{
        position: 'fixed',
        right: '16px',
        bottom: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {/* ===================================================
          ACCESSIBILITY PANEL (Sits directly above trigger)
          =================================================== */}
      {isOpen && (
        <div
          id="a11y-panel"
          data-a11y-widget="true"
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility settings"
          style={{
            pointerEvents: 'auto',
            marginBottom: '12px',
            width: '288px',
            backgroundColor: '#FFFFFF',
            color: NAVY,
            borderRadius: '24px',
            border: '1px solid rgba(15, 37, 62, 0.12)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.08)',
            padding: '20px',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
          }}
        >
          {/* Header */}
          <div
            data-a11y-keep="true"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #E2E8F0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} data-a11y-keep="true">
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: `${NAVY}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: NAVY,
                }}
              >
                <Accessibility style={{ width: '18px', height: '18px' }} />
              </div>
              <h2
                data-a11y-keep="true"
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  margin: 0,
                  color: NAVY,
                  letterSpacing: '-0.01em',
                }}
              >
                Accessibility Tools
              </h2>
            </div>
            <button
              type="button"
              data-a11y-widget="true"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility panel"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748B',
                padding: '4px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = NAVY;
                e.currentTarget.style.backgroundColor = '#F1F5F9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748B';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <X style={{ width: '18px', height: '18px' }} />
            </button>
          </div>

          {/* Controls List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            
            {/* Text Size: Increase / Decrease */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                type="button"
                data-a11y-widget="true"
                onClick={() => setFontSize((prev) => Math.min(prev + 2, 28))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '9px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  color: NAVY,
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#EDF2F7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
              >
                <ZoomIn style={{ width: '14px', height: '14px', color: NAVY }} /> Increase
              </button>
              <button
                type="button"
                data-a11y-widget="true"
                onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '9px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  color: NAVY,
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#EDF2F7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
              >
                <ZoomOut style={{ width: '14px', height: '14px', color: NAVY }} /> Decrease
              </button>
            </div>

            {/* High Contrast */}
            <ToggleButton
              active={isHighContrast}
              onClick={() => setIsHighContrast((p) => !p)}
              icon={<Contrast style={{ width: '14px', height: '14px' }} />}
              label="High Contrast"
            />

            {/* Grayscale */}
            <ToggleButton
              active={isGrayscale}
              onClick={() => setIsGrayscale((p) => !p)}
              icon={<PaintBucket style={{ width: '14px', height: '14px' }} />}
              label="Grayscale"
            />

            {/* Invert (Dark -> Light Theme with photo protection) */}
            <ToggleButton
              active={isInvert}
              onClick={() => setIsInvert((p) => !p)}
              icon={<Moon style={{ width: '14px', height: '14px' }} />}
              label="Invert"
            />

            {/* Highlight Links */}
            <ToggleButton
              active={underlineLinks}
              onClick={() => setUnderlineLinks((p) => !p)}
              icon={<LinkIcon style={{ width: '14px', height: '14px' }} />}
              label="Highlight Links"
            />

            {/* Readable Font */}
            <ToggleButton
              active={isReadableFont}
              onClick={() => setIsReadableFont((p) => !p)}
              icon={<Type style={{ width: '14px', height: '14px' }} />}
              label="Readable Font"
            />

            {/* Reset All Preferences */}
            <button
              type="button"
              data-a11y-widget="true"
              onClick={resetAll}
              style={{
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px',
                borderRadius: '14px',
                backgroundColor: '#FEE2E2',
                border: '1px solid #FECACA',
                color: '#DC2626',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                width: '100%',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FCA5A5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FEE2E2'; }}
            >
              <RotateCcw style={{ width: '14px', height: '14px' }} /> Reset All Preferences
            </button>
          </div>
        </div>
      )}

      {/* ===================================================
          FLOATING TRIGGER BUTTON (Always visible at bottom-right)
          =================================================== */}
      <button
        type="button"
        data-a11y-widget="true"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close Accessibility Tools' : 'Open Accessibility Tools'}
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        title="Accessibility Tools"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: NAVY,
          color: AMBER,
          border: `2.5px solid ${AMBER}`,
          boxShadow: '0 8px 28px rgba(15, 37, 62, 0.35)',
          cursor: 'pointer',
          outline: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = `0 10px 32px rgba(244, 162, 97, 0.45)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(15, 37, 62, 0.35)';
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = `3px solid ${TEAL}`;
          e.currentTarget.style.outlineOffset = '3px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        <Accessibility style={{ width: '24px', height: '24px', color: AMBER }} />
        <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
          Accessibility Preferences
        </span>
      </button>
    </div>
  );

  // Portal directly to document.body to stay outside #root (immune to #root filters)
  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(widgetContent, document.body);
};

export default AccessibilityTools;
