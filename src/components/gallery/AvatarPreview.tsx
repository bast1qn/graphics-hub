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
            <div className="orb-glow glow-indigo" style={{ filter: 'blur(120px)', opacity: '0.8' }}></div>
            <div className="glass-pane" style={{ boxShadow: 'inset 0 0 100px rgba(255,255,255,0.1), 0 40px 80px rgba(99, 102, 241, 0.4)' }}>
              <div className="orb-text" style={{ fontSize: '130px', fontWeight: '900' }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{ filter: 'blur(120px)', opacity: '0.8' }}></div>
            <div className="glass-pane" style={{ boxShadow: 'inset 0 0 100px rgba(255,255,255,0.1), 0 40px 80px rgba(244, 63, 94, 0.4)' }}>
              <div className="orb-text" style={{ fontSize: '130px', fontWeight: '900' }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div className="grad-text" style={{
            fontSize: '150px',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #a855f7, #ec4899, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 20px 40px rgba(168, 85, 247, 0.5)'
          }}>b</div>
        );
      case 'grad-dark':
        return (
          <div className="grad-text" style={{
            fontSize: '150px',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #e2e8f0, #94a3b8, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 10px 30px rgba(255,255,255,0.2)'
          }}>b</div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.1), 0 30px 60px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #ffffff, #f1f5f9)'
          }}>
            <div className="sig-text" style={{
              fontSize: '180px',
              background: 'linear-gradient(135deg, #64748b, #334155)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #1c1917, #292524)',
              boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5), 0 40px 80px rgba(0,0,0,0.6)',
              borderColor: '#d6d3d1'
            }}>
              <div className="badge-main" style={{
                fontSize: '100px',
                background: 'linear-gradient(to bottom, #f5f5f4, #d6d3d1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>bast1qn</div>
              <div className="badge-sub" style={{ color: '#a8a29e', fontSize: '32px' }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 60px currentColor, inset 0 0 60px currentColor, 0 0 120px #22d3ee'
          }}>
            <div className="neon-text" style={{
              fontSize: '120px',
              textShadow: '0 0 40px currentColor, 0 0 80px #22d3ee'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 20px 60px rgba(129, 140, 248, 0.4), inset 0 0 40px rgba(129, 140, 248, 0.1)',
            background: 'linear-gradient(135deg, rgba(17,17,17,0.95), rgba(30,30,40,0.98))'
          }}>
            <div className="tech-b" style={{ color: '#818cf8', fontSize: '110px', textShadow: '0 0 30px #818cf8' }}>
              bast1qn
            </div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '150px',
              textShadow: '6px 0 #ff006e, -6px 0 #00f7ff',
              animation: 'glitch 0.3s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '5%', top: '-30px', fontSize: '24px' }}>0<br/>1</div>
            <div className="matrix-col" style={{ left: '85%', top: '30px', fontSize: '24px' }}>1<br/>0</div>
            <div className="matrix-text" style={{
              fontSize: '100px',
              textShadow: '0 0 30px #22c55e, 0 0 60px #22c55e',
              borderColor: '#22c55e',
              background: 'rgba(0,0,0,0.9)'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.4' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 30px rgba(52, 211, 153, 0.2)',
              borderColor: '#22c55e'
            }}>
              <div className="pcb-text" style={{
                fontSize: '100px',
                textShadow: '0 0 30px #34d399',
                color: '#4ade80'
              }}>bast1qn</div>
            </div>
          </>
        );

      // ELEMENTS & MATERIALS
      case 'lux-gold':
        return (
          <>
            <div className="lux-border" style={{
              borderColor: 'transparent',
              background: 'linear-gradient(135deg, #fcd34d, #f59e0b, #d97706)',
              opacity: '0.3',
              filter: 'blur(20px)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '130px',
              background: 'linear-gradient(to bottom, #fef3c7, #fcd34d 30%, #d97706 60%, #92400e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 10px 30px rgba(251, 191, 36, 0.5))'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{ opacity: '0.3' }}></div>
            <div className="chrome-text" style={{
              fontSize: '170px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #cbd5e1 25%, #64748b 50%, #94a3b8 75%, #f8fafc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 15px 0 rgba(0,0,0,0.4))',
              transform: 'skewY(-5deg) rotate(-2deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle, #dc2626 0%, #7f1d1d 50%, #000 80%)',
              opacity: '1'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '170px',
              color: '#fff',
              textShadow: '0 0 20px #fca5a5, 0 0 40px #dc2626, 0 0 80px #7f1d1d, 0 5px 0 #f97316',
              background: 'linear-gradient(to top, #fff 0%, #fca5a5 30%, #ef4444 60%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>bast1qn</div>
          </>
        );
      case 'ice':
        return (
          <>
            <div className="ice-text" style={{
              fontSize: '160px',
              color: '#fff',
              textShadow: '0 5px 15px rgba(255,255,255,0.5), 0 0 30px #bae6fd, 0 0 50px #38bdf8',
              background: 'linear-gradient(to bottom, #ffffff, #e0f2fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.3' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '20px 20px 40px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #fef08a, #facc15)'
          }}>
            <div className="pop-text" style={{
              fontSize: '190px',
              color: '#dc2626',
              textShadow: '8px 8px 0 #000, 4px 4px 0 #fff'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 80px rgba(255,255,255,0.3), inset 0 0 60px rgba(255,255,255,0.1)',
            background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #facc15 100%)'
          }}>
            <div className="holo-text" style={{
              fontSize: '110px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #cffafe, #fef9c3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.5))'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '25px 25px 40px rgba(0,0,0,0.6), inset 0 -5px 20px rgba(0,0,0,0.2)',
            transform: 'rotate(-6deg) scale(1.05)',
            background: 'linear-gradient(135deg, #ffffff, #f1f5f9)'
          }}>
            <div className="sticker-text" style={{
              fontSize: '120px',
              color: '#1e293b',
              textShadow: '2px 2px 0 rgba(255,255,255,0.5)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(80px)', opacity: '1' }}></div>
            <div className="fb-2" style={{ filter: 'blur(80px)', opacity: '1' }}></div>
            <div className="fb-3" style={{ filter: 'blur(80px)', opacity: '1' }}></div>
            <div className="fluid-text" style={{
              fontSize: '160px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #22d3ee, #f0abfc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(1px)'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.6), 0 25px 50px rgba(0,0,0,0.6)',
            background: 'linear-gradient(135deg, #5d4037, #4e342e)'
          }}>
            <div className="wood-text" style={{
              fontSize: '130px',
              textShadow: '2px 2px 0 rgba(255,255,255,0.2), 4px 4px 10px rgba(0,0,0,0.9)'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 15px 40px rgba(0,0,0,0.6), inset 0 2px 10px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #292524, #1c1917)'
          }}>
            <div className="leather-text" style={{
              fontSize: '120px',
              textShadow: '2px 2px 0 rgba(255,255,255,0.1), -2px -2px 0 rgba(0,0,0,0.5)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '550px', height: '350px', top: '200px', left: '100px', filter: 'blur(30px)' }}></div>
            <div className="cloud-shape" style={{ width: '450px', height: '300px', top: '150px', left: '250px', filter: 'blur(25px)' }}></div>
            <div className="cloud-shape" style={{ width: '350px', height: '250px', top: '300px', left: '400px', filter: 'blur(20px)' }}></div>
            <div className="cloud-text" style={{
              fontSize: '200px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 10px 50px rgba(37, 99, 235, 0.5), 0 5px 20px rgba(255,255,255,0.8)'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '170px',
            color: '#facc15',
            textShadow: '12px 12px 0 #db2777, 24px 24px 0 #000',
            WebkitTextStroke: '5px #000'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '50px', height: '70px' }}></div>
            <div className="graf-drip" style={{ right: '60px', height: '100px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '0.6' }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][i % 5]
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '150px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fff, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mixBlendMode: 'normal'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '0.8' }}></div>
            <div className="smoke-text" style={{
              fontSize: '140px',
              fontWeight: '200',
              background: 'linear-gradient(to right, #94a3b8, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(3px)'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #c084fc, #fbbf24)',
              boxShadow: '0 0 80px rgba(251, 191, 36, 0.6)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '130px',
              color: '#fff',
              textShadow: '4px 4px 0 #000, 0 0 30px #d946ef',
              marginTop: '40px'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 8px #000, 0 0 0 12px #22c55e, 0 30px 60px rgba(0,0,0,0.8)',
            borderColor: '#22c55e'
          }}>
            <div className="rpg-text" style={{ fontSize: '130px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.2' }}></div>
            <div className="horror-text" style={{
              fontSize: '170px',
              color: '#dc2626',
              textShadow: '0 0 30px #991b1b, 0 0 60px #7f1d1d, 0 0 90px #450a0a'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div className="origami-shape" style={{
              borderLeftColor: '#fcd34d',
              borderRightColor: '#fcd34d',
              borderBottomColor: '#f59e0b'
            }}></div>
            <div className="origami-shape" style={{
              top: '200px',
              left: '-100px',
              borderTopColor: '#d97706',
              borderLeftColor: '#d97706',
              borderRightColor: '#d97706'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '130px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '2px 2px 0 rgba(255,255,255,0.3)',
              zIndex: '20'
            }}>bast1qn</div>
          </>
        );

      default:
        return <span className="text-6xl text-white">?</span>;
    }
  };

  return (
    <div className={`avatar-content ${asset.styleClass}`}>
      {renderContent()}
    </div>
  );
}
