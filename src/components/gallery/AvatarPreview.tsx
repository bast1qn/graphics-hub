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
            <div className="orb-glow glow-indigo" style={{
              filter: 'blur(150px)',
              opacity: '1',
              background: 'radial-gradient(circle at 30% 30%, #818cf8, transparent 70%)'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 100px rgba(255,255,255,0.15), 0 50px 100px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.4)',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.4)'
            }}>
              <div className="orb-text" style={{
                fontSize: '150px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #c7d2fe 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.5))'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(150px)',
              opacity: '1',
              background: 'radial-gradient(circle at 30% 30%, #fb7185, transparent 70%)'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 100px rgba(255,255,255,0.15), 0 50px 100px rgba(244, 63, 94, 0.6), 0 0 60px rgba(244, 63, 94, 0.4)',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.4)'
            }}>
              <div className="orb-text" style={{
                fontSize: '150px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fda4af 50%, #fb7185 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.5))'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '180px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #c084fc, #e879f9, #f472b6, #fb7185)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 25px 50px rgba(192, 132, 252, 0.6)',
              letterSpacing: '-8px'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '180px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 15px 40px rgba(255,255,255,0.3)',
              letterSpacing: '-8px'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.05), 0 40px 80px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
            border: '6px solid #e2e8f0'
          }}>
            <div className="sig-text" style={{
              fontSize: '200px',
              background: 'linear-gradient(135deg, #475569, #334155, #1e293b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
              transform: 'rotate(-3deg)'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #1c1917, #292524, #44403c)',
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6), 0 50px 100px rgba(0,0,0,0.8), inset 0 0 2px rgba(255,255,255,0.1)',
              borderColor: '#d6d3d1',
              borderWidth: '8px'
            }}>
              <div className="badge-main" style={{
                fontSize: '110px',
                letterSpacing: '8px',
                background: 'linear-gradient(to bottom, #fefefe, #e7e5e4, #d6d3d1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '36px',
                letterSpacing: '20px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 80px currentColor, inset 0 0 80px currentColor, 0 0 160px #06b6d4, 0 0 200px rgba(6, 182, 212, 0.5)',
            borderWidth: '10px'
          }}>
            <div className="neon-text" style={{
              fontSize: '130px',
              letterSpacing: '8px',
              textShadow: '0 0 60px currentColor, 0 0 120px #22d3ee, 0 0 200px rgba(34, 211, 238, 0.4)'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 25px 80px rgba(129, 140, 248, 0.6), inset 0 0 60px rgba(129, 140, 248, 0.2), 0 0 100px rgba(99, 102, 241, 0.3)',
            background: 'linear-gradient(135deg, rgba(17,17,17,0.98), rgba(30,30,40,0.99))',
            borderWidth: '5px'
          }}>
            <div className="tech-b" style={{
              color: '#a5b4fc',
              fontSize: '120px',
              textShadow: '0 0 40px #818cf8, 0 0 80px rgba(129, 140, 248, 0.6)'
            }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '170px',
              fontWeight: '900',
              textShadow: '8px 0 #ff006e, -8px 0 #00f7ff, 4px 4px 0 rgba(0,0,0,0.5)',
              animation: 'glitch 0.2s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '170px',
              fontWeight: '900',
              color: '#ff006e',
              opacity: '0.5',
              animation: 'glitch2 0.3s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '3%', top: '-40px', fontSize: '20px', opacity: '0.8' }}>0<br/>1</div>
            <div className="matrix-col" style={{ left: '20%', top: '-20px', fontSize: '18px', opacity: '0.6' }}>1<br/>0</div>
            <div className="matrix-col" style={{ left: '80%', top: '40px', fontSize: '20px', opacity: '0.8' }}>0<br/>1</div>
            <div className="matrix-col" style={{ left: '88%', top: '10px', fontSize: '18px', opacity: '0.6' }}>1<br/>0</div>
            <div className="matrix-text" style={{
              fontSize: '110px',
              textShadow: '0 0 40px #22c55e, 0 0 80px #22c55e, 0 0 120px rgba(34, 211, 153, 0.6)',
              borderColor: '#22c55e',
              borderWidth: '4px',
              background: 'rgba(0,0,0,0.95)',
              padding: '30px 50px'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.5' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 40px 80px rgba(0,0,0,0.9), inset 0 0 40px rgba(52, 211, 153, 0.3), 0 0 20px rgba(52, 211, 153, 0.5)',
              borderColor: '#34d399',
              borderWidth: '6px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '110px',
                textShadow: '0 0 40px #34d399, 0 0 80px rgba(52, 211, 153, 0.6)',
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
              background: 'radial-gradient(circle at center, #fcd34d 0%, transparent 70%)',
              opacity: '0.4',
              filter: 'blur(30px)'
            }}></div>
            <div className="lux-border" style={{
              borderColor: '#f59e0b',
              opacity: '0.3',
              filter: 'blur(10px)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '150px',
              background: 'linear-gradient(to bottom, #fef3c7 0%, #fcd34d 20%, #f59e0b 45%, #d97706 70%, #92400e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 15px 40px rgba(251, 191, 36, 0.7))',
              letterSpacing: '4px'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{
              opacity: '0.5',
              background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '190px',
              background: 'linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 15%, #cbd5e1 30%, #64748b 45%, #1e293b 55%, #64748b 70%, #cbd5e1 85%, #f8fafc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 20px 0 rgba(0,0,0,0.5))',
              transform: 'skewY(-5deg) rotate(-1deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle at 30% 70%, #f97316 0%, #dc2626 30%, #7f1d1d 60%, #000 90%)',
              opacity: '1'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '190px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 30px #fca5a5, 0 0 60px #dc2626, 0 0 120px #7f1d1d, 0 8px 0 #f97316, 0 15px 30px rgba(0,0,0,0.8)',
              background: 'linear-gradient(to top, #fff 0%, #fca5a5 20%, #f87171 40%, #ef4444 60%, #dc2626 80%, #991b1b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>bast1qn</div>
          </>
        );
      case 'ice':
        return (
          <>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)'
            }}></div>
            <div className="ice-text" style={{
              fontSize: '180px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 5px 20px rgba(255,255,255,0.6), 0 0 40px #bae6fd, 0 0 60px #38bdf8, 0 0 80px rgba(56, 189, 248, 0.4)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #e0f2fe 50%, #bae6fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.4' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '25px 25px 50px rgba(0,0,0,0.6), inset 0 -5px 20px rgba(0,0,0,0.2)',
            background: 'radial-gradient(#facc15 20%, transparent 20%), linear-gradient(135deg, #fef08a, #facc15)',
            padding: '60px 90px'
          }}>
            <div className="pop-text" style={{
              fontSize: '200px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '10px 10px 0 #000, 5px 5px 0 #fff, 0 0 20px rgba(220, 38, 38, 0.5)'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 100px rgba(255,255,255,0.4), inset 0 0 80px rgba(255,255,255,0.15), 0 0 150px rgba(192, 132, 252, 0.3)',
            background: 'linear-gradient(135deg, #f0abfc 0%, #22d3ee 40%, #facc15 80%, #f472b6 100%)',
            animation: 'holoRotate 8s linear infinite'
          }}>
            <div className="holo-text" style={{
              fontSize: '120px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #cffafe, #fef9c3, #fed7aa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.6))',
              letterSpacing: '4px'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '30px 30px 50px rgba(0,0,0,0.7), inset 0 -8px 30px rgba(0,0,0,0.3)',
            transform: 'rotate(-4deg) scale(1.08)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            padding: '50px 90px'
          }}>
            <div className="sticker-text" style={{
              fontSize: '130px',
              fontWeight: '900',
              color: '#1e293b',
              textShadow: '3px 3px 0 rgba(255,255,255,0.4)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #a855f7, transparent)' }}></div>
            <div className="fb-2" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #ec4899, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #3b82f6, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(80px)', opacity: '0.8', background: 'radial-gradient(circle, #22d3ee, transparent)', top: '150px', left: '150px' }}></div>
            <div className="fluid-text" style={{
              fontSize: '180px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #22d3ee, #f0abfc, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.5px)',
              mixBlendMode: 'screen'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 150px rgba(0,0,0,0.7), 0 30px 60px rgba(0,0,0,0.7), inset 0 2px 4px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #5d4037, #4e342e, #3e2723)',
            border: '12px solid #3e2723'
          }}>
            <div className="wood-text" style={{
              fontSize: '140px',
              textShadow: '3px 3px 0 rgba(255,255,255,0.1), 5px 5px 12px rgba(0,0,0,1)'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.7), inset 0 4px 20px rgba(0,0,0,0.4), inset 0 2px 10px rgba(255,255,255,0.05)',
            background: 'linear-gradient(135deg, #292524, #1c1917)',
            borderWidth: '6px'
          }}>
            <div className="leather-text" style={{
              fontSize: '130px',
              textShadow: '3px 3px 0 rgba(255,255,255,0.05), -2px -2px 0 rgba(0,0,0,0.6)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '600px', height: '400px', top: '180px', left: '80px', filter: 'blur(40px)', opacity: '0.95' }}></div>
            <div className="cloud-shape" style={{ width: '500px', height: '350px', top: '120px', left: '220px', filter: 'blur(35px)', opacity: '0.9' }}></div>
            <div className="cloud-shape" style={{ width: '400px', height: '300px', top: '280px', left: '380px', filter: 'blur(30px)', opacity: '0.85' }}></div>
            <div className="cloud-shape" style={{ width: '300px', height: '250px', top: '350px', left: '180px', filter: 'blur(25px)', opacity: '0.8' }}></div>
            <div className="cloud-text" style={{
              fontSize: '220px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 10px 60px rgba(37, 99, 235, 0.6), 0 5px 30px rgba(255,255,255,0.9), 0 20px 40px rgba(0,0,0,0.2)',
              zIndex: '10',
              position: 'relative'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '180px',
            fontWeight: '900',
            color: '#facc15',
            textShadow: '15px 15px 0 #db2777, 30px 30px 0 #000, 0 0 30px rgba(250, 204, 21, 0.5)',
            WebkitTextStroke: '6px #000',
            transform: 'rotate(-8deg)'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '60px', height: '90px' }}></div>
            <div className="graf-drip" style={{ right: '50px', height: '120px' }}></div>
            <div className="graf-drip" style={{ left: '120px', height: '60px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '0.7' }}>
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e'][i % 8],
                  opacity: 0.6 + Math.random() * 0.4
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '160px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '4px 4px 0 rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.3)',
              position: 'relative',
              zIndex: '10'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '1' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.7', animationDelay: '0.5s' }}></div>
            <div className="smoke-text" style={{
              fontSize: '150px',
              fontWeight: '300',
              background: 'linear-gradient(to right, #64748b, #e2e8f0, #fff, #e2e8f0, #64748b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(2px)',
              position: 'relative',
              zIndex: '10'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #c084fc, #fbbf24, #fcd34d)',
              boxShadow: '0 0 120px rgba(251, 191, 36, 0.8), 0 0 200px rgba(192, 132, 252, 0.5)',
              marginBottom: '-120px'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '140px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '6px 6px 0 #000, 0 0 40px #d946ef, 0 0 80px rgba(232, 121, 249, 0.6)',
              marginTop: '60px',
              letterSpacing: '6px'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 10px #000, 0 0 0 18px #22c55e, 0 0 0 26px #000, 0 40px 80px rgba(0,0,0,0.9)',
            borderColor: '#22c55e',
            borderWidth: '10px',
            padding: '50px 60px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)'
          }}>
            <div className="rpg-text" style={{ fontSize: '140px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.3' }}></div>
            <div className="horror-text" style={{
              fontSize: '190px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '0 0 40px #7f1d1d, 0 0 80px #450a0a, 0 0 120px rgba(0,0,0,0.8), 0 10px 20px rgba(220, 38, 38, 0.8)',
              animation: 'horrorPulse 2s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '120px solid transparent',
              borderRight: '120px solid transparent',
              borderBottom: '240px solid #fcd34d',
              top: '100px'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '120px solid transparent',
              borderRight: '120px solid transparent',
              borderTop: '240px solid #f59e0b',
              top: '340px'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '140px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '3px 3px 0 rgba(255,255,255,0.2), 5px 5px 15px rgba(0,0,0,0.8)',
              position: 'relative',
              zIndex: '20',
              top: '-40px'
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
