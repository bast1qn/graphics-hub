import { Asset } from '@/types/assets';

interface AvatarPreviewProps {
  asset: Asset;
  fullSize?: boolean;
}

export default function AvatarPreview({ asset, fullSize = false }: AvatarPreviewProps) {
  const renderContent = () => {
    switch (asset.id) {
      // MINIMALIST & CLEAN
      case 'orb-indigo':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-indigo"></div>
            <div className="glass-pane"><div className="orb-text">B</div></div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose"></div>
            <div className="glass-pane"><div className="orb-text">B</div></div>
          </>
        );
      case 'grad-purple':
        return <div className="grad-text">B</div>;
      case 'grad-dark':
        return <div className="grad-text">B</div>;
      case 'sig-cursive':
        return <div className="sig-circle"><div className="sig-text">Bast1qn</div></div>;
      case 'badge-crest':
        return (
          <>
            <div className="badge-border">
              <div className="badge-main">BAST1QN</div>
              <div className="badge-sub">EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return <div className="neon-ring"><div className="neon-text">BAST1QN</div></div>;
      case 'tech-box':
        return (
          <div className="tech-box" style={{ borderColor: '#818cf8' }}>
            <div className="tech-b" style={{ color: '#818cf8' }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return <div className="glitch-text" data-text="BAST1QN">BAST1QN</div>;
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '10%', top: '-20px' }}>0<br/>1</div>
            <div className="matrix-col" style={{ left: '80%', top: '20px' }}>1<br/>0</div>
            <div className="matrix-text">bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces"></div>
            <div className="pcb-chip"><div className="pcb-text">bast1qn</div></div>
          </>
        );

      // ELEMENTS & MATERIALS
      case 'lux-gold':
        return (
          <>
            <div className="lux-border" style={{ borderColor: '#f59e0b' }}></div>
            <div className="lux-text" style={{ background: 'linear-gradient(to bottom, #fcd34d 20%, #b45309 50%, #fcd34d 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>BAST1QN</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl"></div>
            <div className="chrome-text">bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg"></div>
            <div className="magma-text">bast1qn</div>
          </>
        );
      case 'ice':
        return (
          <>
            <div className="ice-text">bast1qn</div>
            <div className="ice-crack"></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return <div className="pop-burst"><div className="pop-text">BAST1QN</div></div>;
      case 'holo':
        return <div className="holo-circle"><div className="holo-text">bast1qn</div></div>;
      case 'sticker':
        return <div className="sticker-body"><div className="sticker-text">bast1qn</div></div>;
      case 'fluid':
        return (
          <>
            <div className="fb-1"></div>
            <div className="fb-2"></div>
            <div className="fb-3"></div>
            <div className="fluid-text">bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return <div className="wood-board"><div className="wood-text">Bast1qn</div></div>;
      case 'leather':
        return <div className="leather-patch"><div className="leather-text">BAST1QN</div></div>;
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '500px', height: '300px', top: '250px', left: '150px' }}></div>
            <div className="cloud-shape" style={{ width: '400px', height: '300px', top: '200px', left: '300px' }}></div>
            <div className="cloud-text">bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text">
            BAST1QN<div className="graf-drip" style={{ left: '40px' }}></div>
            <div className="graf-drip" style={{ right: '80px', height: '90px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid">
              <div className="mosaic-tile"></div>
              <div className="mosaic-tile"></div>
              <div className="mosaic-tile"></div>
            </div>
            <div className="mosaic-text">BAST1QN</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume"></div>
            <div className="smoke-text">BAST1QN</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun"></div>
            <div className="vapor-text">BAST1QN</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box">
            <div className="rpg-text">NAME: BAST1QN<span className="rpg-cursor"></span></div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch"></div>
            <div className="horror-text">BAST1QN</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div className="origami-shape"></div>
            <div className="origami-text">bast1qn</div>
          </>
        );

      default:
        return <span className="text-6xl text-white">?</span>;
    }
  };

  // Build style classes for avatar-content
  const getAvatarClasses = () => {
    const baseClasses = 'avatar-content';

    // Add style class and custom backgrounds for specific avatars
    switch (asset.id) {
      case 'grad-purple':
        return `${baseClasses} ${asset.styleClass}`.trim();
      case 'grad-dark':
        return `${baseClasses} ${asset.styleClass}`.trim();
      default:
        return `${baseClasses} ${asset.styleClass}`.trim();
    }
  };

  // Apply custom inline styles for specific avatars
  const getCustomStyle = () => {
    switch (asset.id) {
      case 'grad-purple':
        return { background: 'linear-gradient(135deg, #4f46e5, #a855f7)' };
      case 'grad-dark':
        return { background: 'linear-gradient(135deg, #0f172a, #334155)' };
      default:
        return {};
    }
  };

  return (
    <div className={getAvatarClasses()} style={getCustomStyle()}>
      {renderContent()}
    </div>
  );
}
