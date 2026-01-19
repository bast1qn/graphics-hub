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
              filter: 'blur(250px)',
              opacity: '2',
              background: 'radial-gradient(circle at 30% 30%, #c7d2fe, #a5b4fc, #818cf8, #6366f1, transparent 70%)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '1',
              background: 'radial-gradient(circle at 70% 70%, #e0e7ff, #c7d2fe, transparent 60%)'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 150px rgba(255,255,255,0.25), 0 80px 160px rgba(99, 102, 241, 0.8), 0 0 100px rgba(129, 140, 248, 0.6), 0 0 60px rgba(99, 102, 241, 0.4), 0 0 30px rgba(129, 140, 248, 0.3)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(167,139,250,0.12), rgba(199,210,254,0.1))',
              border: '4px solid rgba(255,255,255,0.6)',
              backdropFilter: 'blur(30px)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '200px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f3ff 20%, #e0e7ff 40%, #c7d2fe 60%, #a5b4fc 80%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.9)) drop-shadow(0 0 100px rgba(129,140,248,0.7)) drop-shadow(0 0 150px rgba(99,102,241,0.5))'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(250px)',
              opacity: '2',
              background: 'radial-gradient(circle at 30% 30%, #fecdd3, #fda4af, #fb7185, #f43f5e, transparent 70%)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '1',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, transparent 60%)'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 150px rgba(255,255,255,0.25), 0 80px 160px rgba(244, 63, 94, 0.8), 0 0 100px rgba(251, 113, 133, 0.6), 0 0 60px rgba(244, 63, 94, 0.4), 0 0 30px rgba(251, 113, 133, 0.3)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(251,113,133,0.12), rgba(254,205,211,0.1))',
              border: '4px solid rgba(255,255,255,0.6)',
              backdropFilter: 'blur(30px)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '200px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 20%, #ffe4e6 40%, #fda4af 60%, #fb7185 80%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.9)) drop-shadow(0 0 100px rgba(251,113,133,0.7)) drop-shadow(0 0 150px rgba(244,63,94,0.5))'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(217, 70, 239, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.5) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.4) 0%, transparent 60%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '240px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 40px 90px rgba(192, 132, 252, 0.9), 0 0 120px rgba(168, 85, 247, 0.7), 0 0 60px rgba(236, 72, 153, 0.5)',
              letterSpacing: '-12px',
              filter: 'drop-shadow(0 0 40px rgba(217, 70, 239, 0.6)) drop-shadow(0 0 80px rgba(192, 132, 252, 0.4))',
              animation: 'float 4s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '240px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 25px 70px rgba(255,255,255,0.6), 0 0 100px rgba(226, 232, 240, 0.5), 0 0 50px rgba(255,255,255,0.3)',
              letterSpacing: '-12px',
              filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.4)) drop-shadow(0 0 100px rgba(203, 213, 225, 0.3))'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.1), 0 60px 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 25%, #f8fafc 50%, #f1f5f9 75%, #e2e8f0 100%)',
            border: '10px solid #e2e8f0',
            backdropFilter: 'blur(15px)',
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '260px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.2)) drop-shadow(0 0 30px rgba(0,0,0,0.15)) drop-shadow(0 0 60px rgba(30, 41, 59, 0.1))',
              transform: 'rotate(-3deg)'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #0f0f0f 0%, #1c1917 30%, #292524 60%, #44403c 100%)',
              boxShadow: 'inset 0 0 120px rgba(0,0,0,0.8), 0 70px 140px rgba(0,0,0,1), 0 0 100px rgba(0,0,0,0.6), 0 0 50px rgba(0,0,0,0.4), inset 0 0 4px rgba(255,255,255,0.2), inset 0 3px 6px rgba(255,255,255,0.15)',
              borderColor: '#d6d3d1',
              borderWidth: '12px'
            }}>
              <div className="badge-main" style={{
                fontSize: '150px',
                letterSpacing: '12px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '4px 4px 8px rgba(0,0,0,0.5), 0 0 40px rgba(214, 211, 209, 0.4), 0 0 20px rgba(255,255,255,0.2)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '48px',
                letterSpacing: '28px',
                textShadow: '3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(168, 162, 158, 0.4)'
              }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 120px currentColor, inset 0 0 120px currentColor, 0 0 200px #06b6d4, 0 0 300px rgba(6, 182, 212, 0.7), 0 0 400px rgba(6, 182, 212, 0.4), 0 0 500px rgba(6, 182, 212, 0.2)',
            borderWidth: '14px',
            animation: 'pulse 1s ease-in-out infinite'
          }}>
            <div className="neon-text" style={{
              fontSize: '150px',
              letterSpacing: '10px',
              textShadow: '0 0 80px currentColor, 0 0 160px #22d3ee, 0 0 240px rgba(34, 211, 238, 0.6), 0 0 320px rgba(6, 182, 212, 0.4), 0 0 400px rgba(34, 211, 238, 0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 35px 100px rgba(129, 140, 248, 0.8), inset 0 0 80px rgba(129, 140, 248, 0.3), 0 0 120px rgba(99, 102, 241, 0.4), 0 0 60px rgba(129, 140, 248, 0.6), inset 0 0 20px rgba(99, 102, 241, 0.2)',
            background: 'linear-gradient(135deg, rgba(17,17,17,0.99), rgba(30,30,40,0.99), rgba(17,17,17,0.99))',
            borderWidth: '7px',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            <div className="tech-b" style={{
              color: '#a5b4fc',
              fontSize: '140px',
              textShadow: '0 0 50px #818cf8, 0 0 100px rgba(129, 140, 248, 0.8), 0 0 150px rgba(99, 102, 241, 0.6), 0 0 200px rgba(129, 140, 248, 0.4)'
            }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '190px',
              fontWeight: '900',
              textShadow: '12px 0 #ff006e, -12px 0 #00f7ff, 6px 6px 0 rgba(0,0,0,0.6), 0 0 60px rgba(255,0,110,0.4), 0 0 120px rgba(0,247,255,0.4)',
              animation: 'glitch 0.15s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '190px',
              fontWeight: '900',
              color: '#ff006e',
              opacity: '0.7',
              animation: 'glitch2 0.2s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '190px',
              fontWeight: '900',
              color: '#00f7ff',
              opacity: '0.5',
              animation: 'glitch3 0.25s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '2%', top: '-50px', fontSize: '22px', opacity: '1' }}>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '15%', top: '-30px', fontSize: '20px', opacity: '0.8' }}>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '85%', top: '50px', fontSize: '22px', opacity: '1' }}>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '92%', top: '20px', fontSize: '20px', opacity: '0.8' }}>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '7%', top: '80px', fontSize: '18px', opacity: '0.6' }}>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '78%', top: '-20px', fontSize: '18px', opacity: '0.6' }}>1<br/>0<br/>1</div>
            <div className="matrix-text" style={{
              fontSize: '130px',
              textShadow: '0 0 50px #22c55e, 0 0 100px #22c55e, 0 0 150px rgba(34, 211, 153, 0.8), 0 0 200px rgba(34, 211, 153, 0.6)',
              borderColor: '#22c55e',
              borderWidth: '6px',
              background: 'rgba(0,0,0,0.98)',
              padding: '40px 60px',
              boxShadow: '0 0 100px rgba(34, 211, 153, 0.5), 0 0 200px rgba(34, 211, 153, 0.3), inset 0 0 60px rgba(34, 211, 153, 0.2)'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.7' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 50px 100px rgba(0,0,0,1), inset 0 0 60px rgba(52, 211, 153, 0.4), 0 0 30px rgba(52, 211, 153, 0.7), 0 0 60px rgba(52, 211, 153, 0.5), inset 0 0 20px rgba(52, 211, 153, 0.3)',
              borderColor: '#34d399',
              borderWidth: '8px',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <div className="pcb-text" style={{
                fontSize: '130px',
                textShadow: '0 0 50px #34d399, 0 0 100px rgba(52, 211, 153, 0.8), 0 0 150px rgba(52, 211, 153, 0.6), 0 0 200px rgba(52, 211, 153, 0.4)',
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
              background: 'radial-gradient(circle at center, #fcd34d 0%, #f59e0b 50%, transparent 80%)',
              opacity: '0.6',
              filter: 'blur(40px)'
            }}></div>
            <div className="lux-border" style={{
              borderColor: '#f59e0b',
              opacity: '0.5',
              filter: 'blur(15px)',
              boxShadow: '0 0 100px rgba(251, 191, 36, 0.8), 0 0 200px rgba(251, 191, 36, 0.5)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '180px',
              background: 'linear-gradient(to bottom, #fffbeb 0%, #fef3c7 10%, #fcd34d 25%, #fbbf24 40%, #f59e0b 55%, #d97706 70%, #b45309 85%, #78350f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 20px 50px rgba(251, 191, 36, 0.9)) drop-shadow(0 0 80px rgba(245, 158, 11, 0.7)) drop-shadow(0 0 120px rgba(217, 119, 6, 0.5))',
              letterSpacing: '5px'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{
              opacity: '0.7',
              background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '220px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 10%, #e2e8f0 20%, #cbd5e1 30%, #64748b 40%, #1e293b 50%, #64748b 60%, #cbd5e1 70%, #e2e8f0 80%, #f8fafc 90%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 25px 0 rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(255,255,255,0.3)) drop-shadow(0 0 80px rgba(203, 213, 225, 0.4))',
              transform: 'skewY(-5deg) rotate(-1deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle at 30% 70%, #fbbf24 0%, #f97316 20%, #dc2626 40%, #b91c1c 60%, #7f1d1d 80%, #000 100%)',
              opacity: '1',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '220px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 40px #fca5a5, 0 0 80px #dc2626, 0 0 160px #7f1d1d, 0 0 240px rgba(127, 29, 29, 0.8), 0 10px 0 #f97316, 0 20px 0 #ea580c, 0 30px 40px rgba(0,0,0,0.9), 0 0 100px rgba(249, 115, 22, 0.6)',
              background: 'linear-gradient(to top, #fff 0%, #fca5a5 15%, #f87171 30%, #ef4444 45%, #dc2626 60%, #b91c1c 75%, #991b1b 90%, #7f1d1d 100%)',
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
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.5) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 80%, rgba(186, 230, 253, 0.4) 0%, transparent 50%)'
            }}></div>
            <div className="ice-text" style={{
              fontSize: '210px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 8px 30px rgba(255,255,255,0.8), 0 0 50px #bae6fd, 0 0 80px #38bdf8, 0 0 120px rgba(56, 189, 248, 0.6), 0 0 160px rgba(14, 165, 233, 0.4), 0 15px 25px rgba(0,0,0,0.3)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f0f9ff 30%, #e0f2fe 50%, #bae6fd 70%, #7dd3fc 90%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(186, 230, 253, 0.8)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.6))'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.6' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '35px 35px 70px rgba(0,0,0,0.8), inset 0 -8px 30px rgba(0,0,0,0.3), 0 0 60px rgba(250, 204, 21, 0.5)',
            background: 'radial-gradient(#facc15 25%, transparent 25%), linear-gradient(135deg, #fef08a, #facc15, #eab308)',
            padding: '70px 100px',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <div className="pop-text" style={{
              fontSize: '230px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '15px 15px 0 #000, 8px 8px 0 #fff, 0 0 30px rgba(220, 38, 38, 0.7), 0 0 60px rgba(220, 38, 38, 0.5)'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 120px rgba(255,255,255,0.5), inset 0 0 100px rgba(255,255,255,0.2), 0 0 180px rgba(192, 132, 252, 0.4), 0 0 240px rgba(232, 121, 249, 0.3), 0 0 300px rgba(250, 204, 21, 0.2)',
            background: 'linear-gradient(135deg, #f0abfc 0%, #22d3ee 25%, #facc15 50%, #f472b6 75%, #a78bfa 100%)',
            animation: 'holoRotate 6s linear infinite'
          }}>
            <div className="holo-text" style={{
              fontSize: '140px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #cffafe, #fef9c3, #fed7aa, #fce7f3, #e0e7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.8)) drop-shadow(0 0 100px rgba(255,255,255,0.5))',
              letterSpacing: '5px'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '40px 40px 70px rgba(0,0,0,0.9), inset 0 -10px 40px rgba(0,0,0,0.4), 0 0 60px rgba(0,0,0,0.3)',
            transform: 'rotate(-4deg) scale(1.12)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
            padding: '60px 100px',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <div className="sticker-text" style={{
              fontSize: '150px',
              fontWeight: '900',
              color: '#1e293b',
              textShadow: '4px 4px 0 rgba(255,255,255,0.5), 0 0 30px rgba(0,0,0,0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #c084fc, #a855f7, transparent)' }}></div>
            <div className="fb-2" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #f472b6, #ec4899, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #3b82f6, #2563eb, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #22d3ee, #06b6d4, transparent)', top: '150px', left: '150px' }}></div>
            <div className="fb-1" style={{ filter: 'blur(80px)', opacity: '0.9', background: 'radial-gradient(circle, #e879f9, #d946ef, transparent)', top: '400px', left: '500px' }}></div>
            <div className="fluid-text" style={{
              fontSize: '200px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #f0abfc, #22d3ee, #67e8f9, #c084fc, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.3px)',
              mixBlendMode: 'screen',
              textShadow: '0 0 60px rgba(232, 121, 249, 0.5), 0 0 120px rgba(34, 211, 238, 0.4)'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 200px rgba(0,0,0,0.9), 0 40px 80px rgba(0,0,0,0.9), 0 0 100px rgba(0,0,0,0.6), inset 0 3px 6px rgba(0,0,0,0.7), inset 0 0 20px rgba(255,255,255,0.05)',
            background: 'linear-gradient(135deg, #6d4c41, #5d4037, #4e342e, #3e2723)',
            border: '16px solid #3e2723',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div className="wood-text" style={{
              fontSize: '160px',
              textShadow: '4px 4px 0 rgba(255,255,255,0.15), 6px 6px 20px rgba(0,0,0,1), 0 0 40px rgba(255,255,255,0.1)',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.1))'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 30px 70px rgba(0,0,0,0.9), inset 0 6px 30px rgba(0,0,0,0.6), inset 0 3px 15px rgba(255,255,255,0.08), 0 0 80px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #292524, #1c1917, #171714)',
            borderWidth: '8px',
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="leather-text" style={{
              fontSize: '150px',
              textShadow: '4px 4px 0 rgba(255,255,255,0.08), -3px -3px 0 rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.05)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '700px', height: '450px', top: '160px', left: '60px', filter: 'blur(50px)', opacity: '1' }}></div>
            <div className="cloud-shape" style={{ width: '600px', height: '400px', top: '100px', left: '200px', filter: 'blur(45px)', opacity: '0.95' }}></div>
            <div className="cloud-shape" style={{ width: '500px', height: '350px', top: '260px', left: '360px', filter: 'blur(40px)', opacity: '0.9' }}></div>
            <div className="cloud-shape" style={{ width: '400px', height: '300px', top: '330px', left: '160px', filter: 'blur(35px)', opacity: '0.85' }}></div>
            <div className="cloud-shape" style={{ width: '350px', height: '280px', top: '200px', left: '480px', filter: 'blur(30px)', opacity: '0.8' }}></div>
            <div className="cloud-text" style={{
              fontSize: '250px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 15px 80px rgba(37, 99, 235, 0.8), 0 8px 40px rgba(255,255,255,1), 0 30px 60px rgba(0,0,0,0.3), 0 0 100px rgba(255,255,255,0.6)',
              zIndex: '10',
              position: 'relative',
              filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.8))'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '200px',
            fontWeight: '900',
            color: '#facc15',
            textShadow: '20px 20px 0 #db2777, 40px 40px 0 #000, 0 0 40px rgba(250, 204, 21, 0.7), 0 0 80px rgba(250, 204, 21, 0.5)',
            WebkitTextStroke: '8px #000',
            transform: 'rotate(-8deg)',
            filter: 'drop-shadow(0 0 60px rgba(250, 204, 21, 0.6))'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '70px', height: '110px' }}></div>
            <div className="graf-drip" style={{ right: '60px', height: '140px' }}></div>
            <div className="graf-drip" style={{ left: '140px', height: '80px' }}></div>
            <div className="graf-drip" style={{ left: '200px', height: '70px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '0.8' }}>
              {Array.from({ length: 70 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4', '#84cc16'][i % 10],
                  opacity: 0.5 + Math.random() * 0.5,
                  transform: `scale(${0.8 + Math.random() * 0.4})`
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '180px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '6px 6px 0 rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.3)',
              position: 'relative',
              zIndex: '10',
              filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.5))'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '1.2' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.9', animationDelay: '0.4s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.7', animationDelay: '0.8s' }}></div>
            <div className="smoke-text" style={{
              fontSize: '170px',
              fontWeight: '300',
              background: 'linear-gradient(to right, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #ffffff, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(1.5px)',
              position: 'relative',
              zIndex: '10',
              textShadow: '0 0 60px rgba(255,255,255,0.3), 0 0 100px rgba(203, 213, 225, 0.3)'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #ec4899, #d946ef, #c084fc, #a855f7, #fbbf24, #fcd34d)',
              boxShadow: '0 0 150px rgba(251, 191, 36, 1), 0 0 250px rgba(192, 132, 252, 0.7), 0 0 350px rgba(217, 70, 239, 0.5), 0 0 450px rgba(244, 114, 182, 0.3)',
              marginBottom: '-120px',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '160px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '8px 8px 0 #000, 0 0 60px #d946ef, 0 0 100px rgba(232, 121, 249, 0.8), 0 0 150px rgba(192, 132, 252, 0.6)',
              marginTop: '60px',
              letterSpacing: '8px',
              filter: 'drop-shadow(0 0 40px rgba(217, 70, 239, 0.6))'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 12px #000, 0 0 0 22px #22c55e, 0 0 0 32px #000, 0 0 0 40px #22c55e, 0 50px 100px rgba(0,0,0,1), 0 0 150px rgba(34, 197, 94, 0.4)',
            borderColor: '#22c55e',
            borderWidth: '12px',
            padding: '60px 70px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            <div className="rpg-text" style={{ fontSize: '160px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.5' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.3', transform: 'scaleX(-1)' }}></div>
            <div className="horror-text" style={{
              fontSize: '210px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '0 0 60px #7f1d1d, 0 0 120px #450a0a, 0 0 180px rgba(0,0,0,0.9), 0 0 240px rgba(220, 38, 38, 0.8), 0 15px 30px rgba(220, 38, 38, 0.9), 0 0 100px rgba(127, 29, 29, 1)',
              animation: 'horrorPulse 1.5s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '140px solid transparent',
              borderRight: '140px solid transparent',
              borderBottom: '280px solid #fcd34d',
              top: '80px',
              boxShadow: '0 40px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(255,255,255,0.2)',
              filter: 'drop-shadow(0 0 40px rgba(251, 191, 36, 0.6))'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '140px solid transparent',
              borderRight: '140px solid transparent',
              borderTop: '280px solid #f59e0b',
              top: '360px',
              boxShadow: '0 -40px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(255,255,255,0.2)',
              filter: 'drop-shadow(0 0 40px rgba(245, 158, 11, 0.6))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '160px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '4px 4px 0 rgba(255,255,255,0.25), 6px 6px 20px rgba(0,0,0,1), 0 0 50px rgba(251, 191, 36, 0.4)',
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
