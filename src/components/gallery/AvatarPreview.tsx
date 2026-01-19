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
              filter: 'blur(300px)',
              opacity: '3',
              background: 'radial-gradient(circle at 30% 30%, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, transparent 70%)',
              animation: 'pulse 1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 70% 70%, #f5f3ff, #e0e7ff, #c7d2fe, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '1',
              background: 'radial-gradient(circle at 50% 50%, #818cf8, transparent 50%)',
              animation: 'float 4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 200px rgba(255,255,255,0.3), 0 100px 200px rgba(99, 102, 241, 0.9), 0 0 150px rgba(129, 140, 248, 0.7), 0 0 100px rgba(99, 102, 241, 0.5), 0 0 60px rgba(129, 140, 248, 0.4), 0 0 30px rgba(99, 102, 241, 0.3)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(167,139,250,0.15), rgba(199,210,254,0.12), rgba(224,231,255,0.1))',
              border: '5px solid rgba(255,255,255,0.7)',
              backdropFilter: 'blur(40px)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '280px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f3ff 15%, #ede9fe 30%, #e0e7ff 45%, #c7d2fe 60%, #a5b4fc 75%, #818cf8 90%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 60px rgba(255,255,255,1)) drop-shadow(0 0 120px rgba(129,140,248,0.8)) drop-shadow(0 0 180px rgba(99,102,241,0.6)) drop-shadow(0 0 240px rgba(79,70,229,0.4))',
                animation: 'pulse 3s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(300px)',
              opacity: '3',
              background: 'radial-gradient(circle at 30% 30%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, transparent 70%)',
              animation: 'pulse 1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 70% 70%, #fff1f2, #ffe4e6, #fecdd3, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '1',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, transparent 50%)',
              animation: 'float 4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 200px rgba(255,255,255,0.3), 0 100px 200px rgba(244, 63, 94, 0.9), 0 0 150px rgba(251, 113, 133, 0.7), 0 0 100px rgba(244, 63, 94, 0.5), 0 0 60px rgba(251, 113, 133, 0.4), 0 0 30px rgba(244, 63, 94, 0.3)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(251,113,133,0.15), rgba(254,205,211,0.12), rgba(255,241,242,0.1))',
              border: '5px solid rgba(255,255,255,0.7)',
              backdropFilter: 'blur(40px)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '280px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 15%, #ffe4e6 30%, #fda4af 45%, #fb7185 60%, #f43f5e 75%, #e11d48 90%, #be123c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 60px rgba(255,255,255,1)) drop-shadow(0 0 120px rgba(251,113,133,0.8)) drop-shadow(0 0 180px rgba(244,63,94,0.6)) drop-shadow(0 0 240px rgba(225,29,72,0.4))',
                animation: 'pulse 3s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(232, 121, 249, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.6) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.5) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '300px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 50px 120px rgba(192, 132, 252, 1), 0 0 180px rgba(168, 85, 247, 0.8), 0 0 100px rgba(236, 72, 153, 0.6), 0 0 60px rgba(232, 121, 249, 0.5)',
              letterSpacing: '-15px',
              filter: 'drop-shadow(0 0 60px rgba(217, 70, 239, 0.8)) drop-shadow(0 0 120px rgba(192, 132, 252, 0.6)) drop-shadow(0 0 180px rgba(168, 85, 247, 0.4))',
              animation: 'float 4s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.15) 0%, transparent 50%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '300px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 30px 80px rgba(255,255,255,0.7), 0 0 120px rgba(226, 232, 240, 0.6), 0 0 70px rgba(255,255,255,0.4), 0 0 40px rgba(203, 213, 225, 0.3)',
              letterSpacing: '-15px',
              filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.5)) drop-shadow(0 0 120px rgba(226, 232, 240, 0.4)) drop-shadow(0 0 180px rgba(148, 163, 184, 0.3))',
              animation: 'float 5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 150px rgba(0,0,0,0.12), 0 80px 160px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.4), 0 0 80px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 20%, #f8fafc 40%, #f1f5f9 60%, #e2e8f0 80%, #cbd5e1 100%)',
            border: '12px solid #e2e8f0',
            backdropFilter: 'blur(20px)',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '320px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.25)) drop-shadow(0 0 40px rgba(0,0,0,0.2)) drop-shadow(0 0 80px rgba(30, 41, 59, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 8s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1c1917 25%, #292524 50%, #44403c 75%, #57534e 100%)',
              boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9), 0 80px 160px rgba(0,0,0,1), 0 0 120px rgba(0,0,0,0.7), 0 0 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.4), inset 0 0 6px rgba(255,255,255,0.25), inset 0 4px 8px rgba(255,255,255,0.2), inset 0 0 40px rgba(255,255,255,0.05)',
              borderColor: '#d6d3d1',
              borderWidth: '16px'
            }}>
              <div className="badge-main" style={{
                fontSize: '180px',
                letterSpacing: '15px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '5px 5px 10px rgba(0,0,0,0.6), 0 0 50px rgba(214, 211, 209, 0.5), 0 0 30px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.2)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '56px',
                letterSpacing: '32px',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(168, 162, 158, 0.5), 0 0 15px rgba(255,255,255,0.2)'
              }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 150px currentColor, inset 0 0 150px currentColor, 0 0 250px #06b6d4, 0 0 350px rgba(6, 182, 212, 0.8), 0 0 450px rgba(6, 182, 212, 0.6), 0 0 550px rgba(6, 182, 212, 0.4), 0 0 650px rgba(6, 182, 212, 0.2)',
            borderWidth: '18px',
            animation: 'neonPulse 0.8s ease-in-out infinite'
          }}>
            <div className="neon-text" style={{
              fontSize: '180px',
              letterSpacing: '12px',
              textShadow: '0 0 100px currentColor, 0 0 200px #22d3ee, 0 0 300px rgba(34, 211, 238, 0.7), 0 0 400px rgba(6, 182, 212, 0.5), 0 0 500px rgba(34, 211, 238, 0.3), 0 0 600px rgba(6, 182, 212, 0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 50px 140px rgba(129, 140, 248, 0.9), inset 0 0 100px rgba(129, 140, 248, 0.4), 0 0 180px rgba(99, 102, 241, 0.5), 0 0 100px rgba(129, 140, 248, 0.7), 0 0 60px rgba(99, 102, 241, 0.5), inset 0 0 40px rgba(99, 102, 241, 0.3)',
            background: 'linear-gradient(135deg, rgba(17,17,17,1), rgba(30,30,40,1), rgba(17,17,17,1))',
            borderWidth: '10px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}>
            <div className="tech-b" style={{
              color: '#a5b4fc',
              fontSize: '170px',
              textShadow: '0 0 70px #818cf8, 0 0 140px rgba(129, 140, 248, 0.9), 0 0 210px rgba(99, 102, 241, 0.7), 0 0 280px rgba(129, 140, 248, 0.5), 0 0 350px rgba(99, 102, 241, 0.3)'
            }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '220px',
              fontWeight: '900',
              textShadow: '15px 0 #ff006e, -15px 0 #00f7ff, 8px 8px 0 rgba(0,0,0,0.7), 0 0 80px rgba(255,0,110,0.5), 0 0 160px rgba(0,247,255,0.5), 0 0 240px rgba(255,0,110,0.3)',
              animation: 'glitch 0.12s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '220px',
              fontWeight: '900',
              color: '#ff006e',
              opacity: '0.8',
              animation: 'glitch2 0.18s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '220px',
              fontWeight: '900',
              color: '#00f7ff',
              opacity: '0.6',
              animation: 'glitch3 0.22s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '220px',
              fontWeight: '900',
              color: '#ffff00',
              opacity: '0.4',
              animation: 'glitch4 0.3s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '1%', top: '-60px', fontSize: '24px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '12%', top: '-40px', fontSize: '22px', opacity: '0.9' }}>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '88%', top: '60px', fontSize: '24px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '95%', top: '30px', fontSize: '22px', opacity: '0.9' }}>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '5%', top: '100px', fontSize: '20px', opacity: '0.7' }}>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '75%', top: '-30px', fontSize: '20px', opacity: '0.7' }}>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '22%', top: '140px', fontSize: '18px', opacity: '0.5' }}>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '60%', top: '-60px', fontSize: '18px', opacity: '0.5' }}>1<br/>0<br/>1</div>
            <div className="matrix-text" style={{
              fontSize: '160px',
              textShadow: '0 0 70px #22c55e, 0 0 140px #22c55e, 0 0 210px rgba(34, 211, 153, 0.9), 0 0 280px rgba(34, 211, 153, 0.7), 0 0 350px rgba(34, 211, 153, 0.5)',
              borderColor: '#22c55e',
              borderWidth: '8px',
              background: 'rgba(0,0,0,0.99)',
              padding: '50px 70px',
              boxShadow: '0 0 120px rgba(34, 211, 153, 0.6), 0 0 240px rgba(34, 211, 153, 0.4), 0 0 360px rgba(34, 211, 153, 0.2), inset 0 0 80px rgba(34, 211, 153, 0.3)'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.8' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 60px 120px rgba(0,0,0,1), inset 0 0 80px rgba(52, 211, 153, 0.5), 0 0 50px rgba(52, 211, 153, 0.8), 0 0 100px rgba(52, 211, 153, 0.6), 0 0 150px rgba(52, 211, 153, 0.4), inset 0 0 40px rgba(52, 211, 153, 0.4)',
              borderColor: '#34d399',
              borderWidth: '10px',
              animation: 'pulse 2.5s ease-in-out infinite'
            }}>
              <div className="pcb-text" style={{
                fontSize: '160px',
                textShadow: '0 0 70px #34d399, 0 0 140px rgba(52, 211, 153, 0.9), 0 0 210px rgba(52, 211, 153, 0.7), 0 0 280px rgba(52, 211, 153, 0.5), 0 0 350px rgba(52, 211, 153, 0.3)',
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
              background: 'radial-gradient(circle at center, #fcd34d 0%, #fbbf24 30%, #f59e0b 60%, transparent 90%)',
              opacity: '0.8',
              filter: 'blur(50px)',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div className="lux-border" style={{
              borderColor: '#f59e0b',
              opacity: '0.6',
              filter: 'blur(20px)',
              boxShadow: '0 0 120px rgba(251, 191, 36, 0.9), 0 0 240px rgba(251, 191, 36, 0.7), 0 0 360px rgba(251, 191, 36, 0.5)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '220px',
              background: 'linear-gradient(to bottom, #fffbeb 0%, #fef3c7 8%, #fcd34d 20%, #fbbf24 32%, #f59e0b 45%, #d97706 58%, #b45309 70%, #92400e 82%, #78350f 92%, #451a03 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 25px 60px rgba(251, 191, 36, 1)) drop-shadow(0 0 100px rgba(245, 158, 11, 0.8)) drop-shadow(0 0 160px rgba(217, 119, 6, 0.6)) drop-shadow(0 0 220px rgba(180, 83, 9, 0.4))',
              letterSpacing: '6px'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{
              opacity: '0.8',
              background: 'linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.5) 50%, transparent 80%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '280px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 8%, #e2e8f0 16%, #cbd5e1 24%, #94a3b8 32%, #64748b 40%, #475569 48%, #1e293b 50%, #475569 52%, #64748b 60%, #94a3b8 68%, #cbd5e1 76%, #e2e8f0 84%, #f8fafc 92%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 30px 0 rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(255,255,255,0.4)) drop-shadow(0 0 100px rgba(203, 213, 225, 0.5)) drop-shadow(0 0 150px rgba(148, 163, 184, 0.3))',
              transform: 'skewY(-5deg) rotate(-1deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle at 30% 70%, #fcd34d 0%, #fbbf24 10%, #f97316 20%, #ef4444 30%, #dc2626 40%, #b91c1c 55%, #7f1d1d 70%, #450a0a 85%, #000 100%)',
              opacity: '1',
              animation: 'magmaPulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '280px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 50px #fef3c7, 0 0 100px #fca5a5, 0 0 200px #dc2626, 0 0 300px #7f1d1d, 0 0 400px rgba(127, 29, 29, 0.9), 0 0 500px rgba(0,0,0,0.7), 0 12px 0 #f97316, 0 24px 0 #ea580c, 0 36px 50px rgba(0,0,0,1), 0 0 150px rgba(249, 115, 22, 0.8), 0 0 250px rgba(234, 88, 12, 0.6)',
              background: 'linear-gradient(to top, #fff 0%, #fef3c7 10%, #fca5a5 20%, #f87171 30%, #ef4444 40%, #dc2626 50%, #b91c1c 60%, #991b1b 70%, #7f1d1d 80%, #450a0a 90%)',
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
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 80%, rgba(186, 230, 253, 0.5) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.3) 0%, transparent 60%)'
            }}></div>
            <div className="ice-text" style={{
              fontSize: '270px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 10px 40px rgba(255,255,255,0.9), 0 0 70px #bae6fd, 0 0 120px #38bdf8, 0 0 180px rgba(56, 189, 248, 0.7), 0 0 240px rgba(14, 165, 233, 0.5), 0 0 300px rgba(3, 105, 161, 0.3), 0 20px 30px rgba(0,0,0,0.4)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #bae6fd 60%, #7dd3fc 75%, #38bdf8 85%, #0ea5e9 95%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(186, 230, 253, 0.9)) drop-shadow(0 0 120px rgba(56, 189, 248, 0.7)) drop-shadow(0 0 180px rgba(14, 165, 233, 0.5))'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.7' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '45px 45px 90px rgba(0,0,0,0.9), inset 0 -10px 40px rgba(0,0,0,0.4), 0 0 100px rgba(250, 204, 21, 0.6), 0 0 180px rgba(250, 204, 21, 0.4)',
            background: 'radial-gradient(#facc15 30%, transparent 30%), linear-gradient(135deg, #fef08a, #facc15, #eab308, #ca8a04)',
            padding: '80px 110px',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <div className="pop-text" style={{
              fontSize: '280px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '20px 20px 0 #000, 12px 12px 0 #fff, 0 0 40px rgba(220, 38, 38, 0.8), 0 0 80px rgba(220, 38, 38, 0.6), 0 0 120px rgba(220, 38, 38, 0.4)'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 150px rgba(255,255,255,0.6), inset 0 0 120px rgba(255,255,255,0.25), 0 0 220px rgba(192, 132, 252, 0.5), 0 0 300px rgba(232, 121, 249, 0.4), 0 0 380px rgba(250, 204, 21, 0.3), 0 0 460px rgba(244, 114, 182, 0.2)',
            background: 'linear-gradient(135deg, #f0abfc 0%, #d946ef 15%, #22d3ee 30%, #facc15 45%, #f472b6 60%, #a78bfa 75%, #f0abfc 90%, #22d3ee 100%)',
            animation: 'holoRotate 5s linear infinite'
          }}>
            <div className="holo-text" style={{
              fontSize: '170px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f0abfc, #cffafe, #fef9c3, #fed7aa, #fce7f3, #e0e7ff, #fae8ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 70px rgba(255,255,255,0.9)) drop-shadow(0 0 140px rgba(255,255,255,0.6)) drop-shadow(0 0 210px rgba(255,255,255,0.4))',
              letterSpacing: '6px'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '50px 50px 100px rgba(0,0,0,1), inset 0 -12px 50px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.1)',
            transform: 'rotate(-4deg) scale(1.15)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
            padding: '70px 110px',
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="sticker-text" style={{
              fontSize: '180px',
              fontWeight: '900',
              color: '#1e293b',
              textShadow: '5px 5px 0 rgba(255,255,255,0.6), 0 0 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(140px)', opacity: '1.5', background: 'radial-gradient(circle, #d8b4fe, #c084fc, #a855f7, transparent)' }}></div>
            <div className="fb-2" style={{ filter: 'blur(140px)', opacity: '1.5', background: 'radial-gradient(circle, #f9a8d4, #f472b6, #ec4899, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(140px)', opacity: '1.5', background: 'radial-gradient(circle, #60a5fa, #3b82f6, #2563eb, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #67e8f9, #22d3ee, #06b6d4, transparent)', top: '150px', left: '150px' }}></div>
            <div className="fb-1" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #f0abfc, #e879f9, #d946ef, transparent)', top: '400px', left: '500px' }}></div>
            <div className="fb-2" style={{ filter: 'blur(80px)', opacity: '0.9', background: 'radial-gradient(circle, #a5f3fc, #67e8f9, #22d3ee, transparent)', top: '300px', left: '200px' }}></div>
            <div className="fluid-text" style={{
              fontSize: '240px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #f0abfc, #22d3ee, #67e8f9, #c084fc, #f472b6, #d8b4fe, #f9a8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.2px)',
              mixBlendMode: 'screen',
              textShadow: '0 0 80px rgba(232, 121, 249, 0.6), 0 0 160px rgba(34, 211, 238, 0.5), 0 0 240px rgba(192, 132, 252, 0.4)'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 250px rgba(0,0,0,1), 0 50px 100px rgba(0,0,0,1), 0 0 150px rgba(0,0,0,0.8), inset 0 4px 8px rgba(0,0,0,0.9), inset 0 0 40px rgba(255,255,255,0.08), 0 0 80px rgba(109, 76, 65, 0.4)',
            background: 'linear-gradient(135deg, #7c6954, #6d4c41, #5d4037, #4e342e, #3e2723)',
            border: '20px solid #3e2723',
            animation: 'float 7s ease-in-out infinite'
          }}>
            <div className="wood-text" style={{
              fontSize: '200px',
              textShadow: '5px 5px 0 rgba(255,255,255,0.2), 8px 8px 30px rgba(0,0,0,1), 0 0 60px rgba(255,255,255,0.15)',
              filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.15))'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 40px 90px rgba(0,0,0,1), inset 0 8px 40px rgba(0,0,0,0.8), inset 0 4px 20px rgba(255,255,255,0.1), 0 0 120px rgba(0,0,0,0.6), 0 0 60px rgba(41, 37, 36, 0.4)',
            background: 'linear-gradient(135deg, #2d2826, #292524, #1c1917, #171714)',
            borderWidth: '10px',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div className="leather-text" style={{
              fontSize: '190px',
              textShadow: '5px 5px 0 rgba(255,255,255,0.1), -4px -4px 0 rgba(0,0,0,1), 0 0 60px rgba(255,255,255,0.08)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '800px', height: '500px', top: '140px', left: '40px', filter: 'blur(60px)', opacity: '1' }}></div>
            <div className="cloud-shape" style={{ width: '700px', height: '450px', top: '80px', left: '180px', filter: 'blur(55px)', opacity: '0.95' }}></div>
            <div className="cloud-shape" style={{ width: '600px', height: '400px', top: '240px', left: '340px', filter: 'blur(50px)', opacity: '0.9' }}></div>
            <div className="cloud-shape" style={{ width: '500px', height: '350px', top: '310px', left: '140px', filter: 'blur(45px)', opacity: '0.85' }}></div>
            <div className="cloud-shape" style={{ width: '450px', height: '320px', top: '180px', left: '460px', filter: 'blur(40px)', opacity: '0.8' }}></div>
            <div className="cloud-shape" style={{ width: '400px', height: '300px', top: '100px', left: '300px', filter: 'blur(35px)', opacity: '0.75' }}></div>
            <div className="cloud-text" style={{
              fontSize: '300px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 20px 100px rgba(37, 99, 235, 0.9), 0 12px 50px rgba(255,255,255,1), 0 40px 80px rgba(0,0,0,0.4), 0 0 150px rgba(255,255,255,0.7), 0 0 250px rgba(37, 99, 235, 0.5)',
              zIndex: '10',
              position: 'relative',
              filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.9)) drop-shadow(0 0 160px rgba(186, 230, 253, 0.6))'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '240px',
            fontWeight: '900',
            color: '#facc15',
            textShadow: '25px 25px 0 #db2777, 50px 50px 0 #000, 0 0 50px rgba(250, 204, 21, 0.8), 0 0 100px rgba(250, 204, 21, 0.6), 0 0 150px rgba(250, 204, 21, 0.4)',
            WebkitTextStroke: '10px #000',
            transform: 'rotate(-8deg)',
            filter: 'drop-shadow(0 0 80px rgba(250, 204, 21, 0.7)) drop-shadow(0 0 160px rgba(250, 204, 21, 0.5))'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '80px', height: '130px' }}></div>
            <div className="graf-drip" style={{ right: '70px', height: '160px' }}></div>
            <div className="graf-drip" style={{ left: '160px', height: '100px' }}></div>
            <div className="graf-drip" style={{ left: '220px', height: '90px' }}></div>
            <div className="graf-drip" style={{ right: '140px', height: '70px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '0.9' }}>
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4', '#84cc16', '#14b8a6', '#f59e0b'][i % 12],
                  opacity: 0.4 + Math.random() * 0.6,
                  transform: `scale(${0.6 + Math.random() * 0.6})`
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '220px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '8px 8px 0 rgba(0,0,0,0.7), 0 0 70px rgba(255,255,255,0.5), 0 0 140px rgba(255,255,255,0.4), 0 0 210px rgba(255,255,255,0.3)',
              position: 'relative',
              zIndex: '10',
              filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.6)) drop-shadow(0 0 120px rgba(255,255,255,0.4))'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '1.5' }}></div>
            <div className="smoke-plume" style={{ opacity: '1.2', animationDelay: '0.3s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.9', animationDelay: '0.6s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.7', animationDelay: '0.9s' }}></div>
            <div className="smoke-text" style={{
              fontSize: '200px',
              fontWeight: '300',
              background: 'linear-gradient(to right, #1e293b, #334155, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #ffffff, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(1px)',
              position: 'relative',
              zIndex: '10',
              textShadow: '0 0 80px rgba(255,255,255,0.4), 0 0 160px rgba(203, 213, 225, 0.3), 0 0 240px rgba(148, 163, 184, 0.2)'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #ec4899, #d946ef, #c084fc, #a855f7, #8b5cf6, #7c3aed, #fbbf24, #fcd34d)',
              boxShadow: '0 0 180px rgba(251, 191, 36, 1), 0 0 300px rgba(192, 132, 252, 0.8), 0 0 420px rgba(217, 70, 239, 0.6), 0 0 540px rgba(244, 114, 182, 0.4), 0 0 660px rgba(251, 191, 36, 0.2)',
              marginBottom: '-120px',
              animation: 'vaporPulse 2.5s ease-in-out infinite'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '190px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '10px 10px 0 #000, 0 0 80px #d946ef, 0 0 140px rgba(232, 121, 249, 0.9), 0 0 200px rgba(192, 132, 252, 0.7), 0 0 260px rgba(168, 85, 247, 0.5)',
              marginTop: '60px',
              letterSpacing: '10px',
              filter: 'drop-shadow(0 0 60px rgba(217, 70, 239, 0.7)) drop-shadow(0 0 120px rgba(192, 132, 252, 0.5))'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 16px #000, 0 0 0 28px #22c55e, 0 0 0 40px #000, 0 0 0 50px #22c55e, 0 0 0 60px #000, 0 70px 140px rgba(0,0,0,1), 0 0 220px rgba(34, 197, 94, 0.5), 0 0 320px rgba(34, 197, 94, 0.3)',
            borderColor: '#22c55e',
            borderWidth: '16px',
            padding: '70px 80px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            animation: 'pulse 1.8s ease-in-out infinite'
          }}>
            <div className="rpg-text" style={{ fontSize: '190px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.6' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.4', transform: 'scaleX(-1)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.3', transform: 'scaleY(-1)' }}></div>
            <div className="horror-text" style={{
              fontSize: '260px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '0 0 80px #7f1d1d, 0 0 160px #450a0a, 0 0 240px rgba(0,0,0,0.95), 0 0 320px rgba(220, 38, 38, 0.9), 0 0 400px rgba(220, 38, 38, 0.7), 0 20px 40px rgba(220, 38, 38, 1), 0 0 150px rgba(127, 29, 29, 1), 0 0 250px rgba(69, 10, 10, 0.8)',
              animation: 'horrorPulse 1.2s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '160px solid transparent',
              borderRight: '160px solid transparent',
              borderBottom: '320px solid #fcd34d',
              top: '60px',
              boxShadow: '0 50px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(255,255,255,0.25)',
              filter: 'drop-shadow(0 0 60px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 120px rgba(245, 158, 11, 0.6))'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '160px solid transparent',
              borderRight: '160px solid transparent',
              borderTop: '320px solid #f59e0b',
              top: '380px',
              boxShadow: '0 -50px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(255,255,255,0.25)',
              filter: 'drop-shadow(0 0 60px rgba(245, 158, 11, 0.8)) drop-shadow(0 0 120px rgba(217, 119, 6, 0.6))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '200px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '5px 5px 0 rgba(255,255,255,0.3), 8px 8px 30px rgba(0,0,0,1), 0 0 70px rgba(251, 191, 36, 0.5), 0 0 140px rgba(251, 191, 36, 0.3)',
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
