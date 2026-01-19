import { Asset } from '@/types/assets';

interface AvatarPreviewProps {
  asset: Asset;
  fullSize?: boolean;
}

export default function AvatarPreview({ asset, fullSize = false }: AvatarPreviewProps) {
  const renderAvatar = () => {
    switch (asset.id) {
      // MINIMALIST & CLEAN
      case 'orb-indigo':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="noise"></div>
            <div className="orb-glow glow-indigo"></div>
            <div className="glass-pane"><div className="orb-text">B</div></div>
          </div>
        );
      case 'orb-rose':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="noise"></div>
            <div className="orb-glow glow-rose"></div>
            <div className="glass-pane"><div className="orb-text">B</div></div>
          </div>
        );
      case 'grad-purple':
        return (
          <div className={`${asset.styleClass} avatar-content`} style={{ background: 'linear-gradient(135deg, #4f46e5, #a855f7)' }}>
            <div className="grad-text">B</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div className={`${asset.styleClass} avatar-content`} style={{ background: 'linear-gradient(135deg, #0f172a, #334155)' }}>
            <div className="grad-text">B</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="sig-circle"><div className="sig-text">Bast1qn</div></div>
          </div>
        );
      case 'badge-crest':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="badge-border"><div className="badge-main">BAST1QN</div><div className="badge-sub">EST. 2026</div></div>
          </div>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="neon-ring"><div className="neon-text">BAST1QN</div></div>
          </div>
        );
      case 'tech-box':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="tech-box" style={{ borderColor: '#818cf8' }}><div className="tech-b" style={{ color: '#818cf8' }}>bast1qn</div></div>
          </div>
        );
      case 'glitch':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="glitch-text" data-text="BAST1QN">BAST1QN</div>
          </div>
        );
      case 'matrix':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="matrix-col" style={{ left: '10%', top: '-20px' }}>0<br/>1</div>
            <div className="matrix-col" style={{ left: '80%', top: '20px' }}>1<br/>0</div>
            <div className="matrix-text">bast1qn</div>
          </div>
        );
      case 'pcb':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="pcb-traces"></div>
            <div className="pcb-chip"><div className="pcb-text">bast1qn</div></div>
          </div>
        );

      // ELEMENTS & MATERIALS
      case 'lux-gold':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="lux-border" style={{ borderColor: '#f59e0b' }}></div>
            <div className="lux-text" style={{ background: 'linear-gradient(to bottom, #fcd34d 20%, #b45309 50%, #fcd34d 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>BAST1QN</div>
          </div>
        );
      case 'chrome':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="chrome-refl"></div>
            <div className="chrome-text">bast1qn</div>
          </div>
        );
      case 'magma':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="magma-bg"></div>
            <div className="magma-text">bast1qn</div>
          </div>
        );
      case 'ice':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="ice-text">bast1qn</div>
            <div className="ice-crack"></div>
          </div>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="pop-burst"><div className="pop-text">BAST1QN</div></div>
          </div>
        );
      case 'holo':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="holo-circle"><div className="holo-text">bast1qn</div></div>
          </div>
        );
      case 'sticker':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="sticker-body"><div className="sticker-text">bast1qn</div></div>
          </div>
        );
      case 'fluid':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="fb-1"></div>
            <div className="fb-2"></div>
            <div className="fb-3"></div>
            <div className="fluid-text">bast1qn</div>
          </div>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="wood-board"><div className="wood-text">Bast1qn</div></div>
          </div>
        );
      case 'leather':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="leather-patch"><div className="leather-text">BAST1QN</div></div>
          </div>
        );
      case 'cloud':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="cloud-shape" style={{ width: '500px', height: '300px', top: '250px', left: '150px' }}></div>
            <div className="cloud-shape" style={{ width: '400px', height: '300px', top: '200px', left: '300px' }}></div>
            <div className="cloud-text">bast1qn</div>
          </div>
        );
      case 'graffiti':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="graf-text">BAST1QN<div className="graf-drip" style={{ left: '40px' }}></div><div className="graf-drip" style={{ right: '80px', height: '90px' }}></div></div>
          </div>
        );
      case 'mosaic':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="mosaic-grid">
              <div className="mosaic-tile"></div><div className="mosaic-tile"></div><div className="mosaic-tile"></div>
            </div>
            <div className="mosaic-text">BAST1QN</div>
          </div>
        );
      case 'smoke':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="smoke-plume"></div>
            <div className="smoke-text">BAST1QN</div>
          </div>
        );
      case 'vaporwave':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="vapor-sun"></div>
            <div className="vapor-text">BAST1QN</div>
          </div>
        );
      case 'rpg':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="rpg-box">
              <div className="rpg-text">NAME: BAST1QN<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="horror-scratch"></div>
            <div className="horror-text">BAST1QN</div>
          </div>
        );
      case 'origami':
        return (
          <div className={`${asset.styleClass} avatar-content`}>
            <div className="origami-shape"></div>
            <div className="origami-text">bast1qn</div>
          </div>
        );

      default:
        return (
          <div className="avatar-content bg-zinc-900 flex items-center justify-center">
            <span className="text-6xl text-white">?</span>
          </div>
        );
    }
  };

  if (fullSize) {
    return (
      <div className="relative w-[800px] h-[800px]">
        {renderAvatar()}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {renderAvatar()}
    </div>
  );
}
