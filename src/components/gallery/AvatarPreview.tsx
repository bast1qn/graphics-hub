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
              filter: 'blur(400px)',
              opacity: '4',
              background: 'radial-gradient(circle at 30% 30%, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 70%)',
              animation: 'pulse 0.8s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '2',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, transparent 50%)',
              animation: 'float 3s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(80px)',
              opacity: '1',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, transparent 40%)',
              animation: 'float 4s ease-in-out infinite reverse'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 250px rgba(255,255,255,0.35), 0 120px 240px rgba(99, 102, 241, 1), 0 0 180px rgba(129, 140, 248, 0.8), 0 0 120px rgba(99, 102, 241, 0.6), 0 0 80px rgba(129, 140, 248, 0.5), 0 0 40px rgba(99, 102, 241, 0.4), 0 0 20px rgba(129, 140, 248, 0.3), inset 0 0 50px rgba(255,255,255,0.1)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.25), rgba(167,139,250,0.2), rgba(199,210,254,0.15), rgba(224,231,255,0.12))',
              border: '6px solid rgba(255,255,255,0.8)',
              backdropFilter: 'blur(50px)',
              animation: 'float 2.5s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '350px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 10%, #f5f3ff 20%, #ede9fe 30%, #e0e7ff 40%, #c7d2fe 50%, #a5b4fc 60%, #818cf8 70%, #6366f1 80%, #4f46e5 90%, #4338ca 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 80px rgba(255,255,255,1)) drop-shadow(0 0 160px rgba(129,140,248,0.9)) drop-shadow(0 0 240px rgba(99,102,241,0.7)) drop-shadow(0 0 320px rgba(79,70,229,0.5)) drop-shadow(0 0 400px rgba(67,56,202,0.3))',
                animation: 'pulse 2s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(400px)',
              opacity: '4',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, transparent 70%)',
              animation: 'pulse 0.8s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '2',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, transparent 50%)',
              animation: 'float 3s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(80px)',
              opacity: '1',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, transparent 40%)',
              animation: 'float 4s ease-in-out infinite reverse'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 250px rgba(255,255,255,0.35), 0 120px 240px rgba(244, 63, 94, 1), 0 0 180px rgba(251, 113, 133, 0.8), 0 0 120px rgba(244, 63, 94, 0.6), 0 0 80px rgba(251, 113, 133, 0.5), 0 0 40px rgba(244, 63, 94, 0.4), 0 0 20px rgba(251, 113, 133, 0.3), inset 0 0 50px rgba(255,255,255,0.1)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.25), rgba(251,113,133,0.2), rgba(254,205,211,0.15), rgba(255,241,242,0.12))',
              border: '6px solid rgba(255,255,255,0.8)',
              backdropFilter: 'blur(50px)',
              animation: 'float 2.5s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '350px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 10%, #ffe4e6 20%, #fecdd3 30%, #fda4af 40%, #fb7185 50%, #f43f5e 60%, #e11d48 70%, #be123c 80%, #9f1239 90%, #881337 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 80px rgba(255,255,255,1)) drop-shadow(0 0 160px rgba(251,113,133,0.9)) drop-shadow(0 0 240px rgba(244,63,94,0.7)) drop-shadow(0 0 320px rgba(225,29,72,0.5)) drop-shadow(0 0 400px rgba(190,18,60,0.3))',
                animation: 'pulse 2s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.7) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.7) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.6) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.5) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.4) 0%, transparent 40%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '380px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 60px 150px rgba(192, 132, 252, 1), 0 0 220px rgba(168, 85, 247, 0.9), 0 0 120px rgba(236, 72, 153, 0.7), 0 0 80px rgba(232, 121, 249, 0.6), 0 0 40px rgba(244, 114, 182, 0.5)',
              letterSpacing: '-18px',
              filter: 'drop-shadow(0 0 80px rgba(217, 70, 239, 0.9)) drop-shadow(0 0 160px rgba(192, 132, 252, 0.7)) drop-shadow(0 0 240px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 320px rgba(147, 51, 234, 0.3))',
              animation: 'float 3.5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.15) 0%, transparent 40%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '380px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 40px 100px rgba(255,255,255,0.8), 0 0 160px rgba(226, 232, 240, 0.7), 0 0 90px rgba(255,255,255,0.5), 0 0 50px rgba(203, 213, 225, 0.4), 0 0 20px rgba(241, 245, 249, 0.3)',
              letterSpacing: '-18px',
              filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.6)) drop-shadow(0 0 160px rgba(226, 232, 240, 0.5)) drop-shadow(0 0 240px rgba(148, 163, 184, 0.4)) drop-shadow(0 0 320px rgba(71, 85, 105, 0.3))',
              animation: 'float 4.5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 200px rgba(0,0,0,0.15), 0 100px 200px rgba(0,0,0,0.8), 0 0 160px rgba(0,0,0,0.5), 0 0 120px rgba(0,0,0,0.4), 0 0 80px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 15%, #f8fafc 30%, #f1f5f9 45%, #e2e8f0 60%, #cbd5e1 75%, #94a3b8 90%)',
            border: '16px solid #e2e8f0',
            backdropFilter: 'blur(25px)',
            animation: 'float 5.5s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '400px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #020617)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(6px 6px 12px rgba(0,0,0,0.3)) drop-shadow(0 0 50px rgba(0,0,0,0.25)) drop-shadow(0 0 100px rgba(0,0,0,0.2)) drop-shadow(0 0 150px rgba(30, 41, 59, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 7s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #050505 0%, #1c1917 20%, #292524 40%, #44403c 60%, #57534e 80%, #78716c 100%)',
              boxShadow: 'inset 0 0 200px rgba(0,0,0,1), 0 100px 200px rgba(0,0,0,1), 0 0 160px rgba(0,0,0,0.8), 0 0 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.4), inset 0 0 8px rgba(255,255,255,0.3), inset 0 6px 12px rgba(255,255,255,0.25), inset 0 0 60px rgba(255,255,255,0.08), inset 0 0 20px rgba(0,0,0,0.5)',
              borderColor: '#d6d3d1',
              borderWidth: '20px'
            }}>
              <div className="badge-main" style={{
                fontSize: '220px',
                letterSpacing: '18px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '6px 6px 12px rgba(0,0,0,0.7), 0 0 60px rgba(214, 211, 209, 0.6), 0 0 40px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.2)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '64px',
                letterSpacing: '36px',
                textShadow: '5px 5px 10px rgba(0,0,0,0.9), 0 0 40px rgba(168, 162, 158, 0.6), 0 0 20px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.2)'
              }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 200px currentColor, inset 0 0 200px currentColor, 0 0 350px #06b6d4, 0 0 500px rgba(6, 182, 212, 0.9), 0 0 650px rgba(6, 182, 212, 0.7), 0 0 800px rgba(6, 182, 212, 0.5), 0 0 950px rgba(6, 182, 212, 0.3), 0 0 1100px rgba(6, 182, 212, 0.2)',
            borderWidth: '24px',
            animation: 'neonPulse 0.6s ease-in-out infinite'
          }}>
            <div className="neon-text" style={{
              fontSize: '220px',
              letterSpacing: '15px',
              textShadow: '0 0 120px currentColor, 0 0 250px #22d3ee, 0 0 400px rgba(34, 211, 238, 0.8), 0 0 550px rgba(6, 182, 212, 0.6), 0 0 700px rgba(34, 211, 238, 0.4), 0 0 850px rgba(6, 182, 212, 0.3), 0 0 1000px rgba(34, 211, 238, 0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 70px 180px rgba(129, 140, 248, 1), inset 0 0 120px rgba(129, 140, 248, 0.5), 0 0 240px rgba(99, 102, 241, 0.6), 0 0 150px rgba(129, 140, 248, 0.8), 0 0 90px rgba(99, 102, 241, 0.6), inset 0 0 60px rgba(99, 102, 241, 0.4), 0 0 40px rgba(129, 140, 248, 0.5)',
            background: 'linear-gradient(135deg, rgba(17,17,17,1), rgba(30,30,40,1), rgba(17,17,17,1))',
            borderWidth: '14px',
            animation: 'pulse 1.2s ease-in-out infinite'
          }}>
            <div className="tech-b" style={{
              color: '#a5b4fc',
              fontSize: '210px',
              textShadow: '0 0 90px #818cf8, 0 0 180px rgba(129, 140, 248, 1), 0 0 270px rgba(99, 102, 241, 0.8), 0 0 360px rgba(129, 140, 248, 0.6), 0 0 450px rgba(99, 102, 241, 0.4), 0 0 540px rgba(129, 140, 248, 0.3)'
            }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '260px',
              fontWeight: '900',
              textShadow: '20px 0 #ff006e, -20px 0 #00f7ff, 10px 10px 0 rgba(0,0,0,0.8), 0 0 100px rgba(255,0,110,0.6), 0 0 200px rgba(0,247,255,0.6), 0 0 300px rgba(255,0,110,0.4), 0 0 400px rgba(0,247,255,0.3)',
              animation: 'glitch 0.1s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '260px',
              fontWeight: '900',
              color: '#ff006e',
              opacity: '0.9',
              animation: 'glitch2 0.15s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '260px',
              fontWeight: '900',
              color: '#00f7ff',
              opacity: '0.7',
              animation: 'glitch3 0.18s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '260px',
              fontWeight: '900',
              color: '#ffff00',
              opacity: '0.5',
              animation: 'glitch4 0.22s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '260px',
              fontWeight: '900',
              color: '#ff00ff',
              opacity: '0.3',
              animation: 'glitch5 0.3s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '0%', top: '-70px', fontSize: '28px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '10%', top: '-50px', fontSize: '26px', opacity: '0.95' }}>1<br/>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '90%', top: '70px', fontSize: '28px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '96%', top: '40px', fontSize: '26px', opacity: '0.95' }}>1<br/>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '4%', top: '120px', fontSize: '24px', opacity: '0.8' }}>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '72%', top: '-40px', fontSize: '24px', opacity: '0.8' }}>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '20%', top: '160px', fontSize: '22px', opacity: '0.6' }}>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '56%', top: '-70px', fontSize: '22px', opacity: '0.6' }}>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '35%', top: '180px', fontSize: '20px', opacity: '0.4' }}>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '40%', top: '-80px', fontSize: '20px', opacity: '0.4' }}>1<br/>0<br/>1</div>
            <div className="matrix-text" style={{
              fontSize: '200px',
              textShadow: '0 0 90px #22c55e, 0 0 180px #22c55e, 0 0 270px rgba(34, 211, 153, 1), 0 0 360px rgba(34, 211, 153, 0.8), 0 0 450px rgba(34, 211, 153, 0.6), 0 0 540px rgba(34, 211, 153, 0.4)',
              borderColor: '#22c55e',
              borderWidth: '10px',
              background: 'rgba(0,0,0,1)',
              padding: '60px 80px',
              boxShadow: '0 0 160px rgba(34, 211, 153, 0.7), 0 0 320px rgba(34, 211, 153, 0.5), 0 0 480px rgba(34, 211, 153, 0.3), inset 0 0 100px rgba(34, 211, 153, 0.4)'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.9' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 80px 160px rgba(0,0,0,1), inset 0 0 100px rgba(52, 211, 153, 0.6), 0 0 70px rgba(52, 211, 153, 0.9), 0 0 140px rgba(52, 211, 153, 0.7), 0 0 210px rgba(52, 211, 153, 0.5), inset 0 0 60px rgba(52, 211, 153, 0.5), 0 0 30px rgba(52, 211, 153, 0.6)',
              borderColor: '#34d399',
              borderWidth: '14px',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <div className="pcb-text" style={{
                fontSize: '200px',
                textShadow: '0 0 90px #34d399, 0 0 180px rgba(52, 211, 153, 1), 0 0 270px rgba(52, 211, 153, 0.8), 0 0 360px rgba(52, 211, 153, 0.6), 0 0 450px rgba(52, 211, 153, 0.4), 0 0 540px rgba(52, 211, 153, 0.3)',
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
              background: 'radial-gradient(circle at center, #fef3c7 0%, #fcd34d 20%, #fbbf24 40%, #f59e0b 60%, transparent 100%)',
              opacity: '1',
              filter: 'blur(60px)',
              animation: 'pulse 2.5s ease-in-out infinite'
            }}></div>
            <div className="lux-border" style={{
              borderColor: '#f59e0b',
              opacity: '0.8',
              filter: 'blur(25px)',
              boxShadow: '0 0 150px rgba(251, 191, 36, 1), 0 0 300px rgba(251, 191, 36, 0.8), 0 0 450px rgba(251, 191, 36, 0.6), 0 0 600px rgba(251, 191, 36, 0.4)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '280px',
              background: 'linear-gradient(to bottom, #fffbeb 0%, #fef3c7 6%, #fcd34d 15%, #fbbf24 25%, #f59e0b 35%, #d97706 45%, #b45309 55%, #92400e 65%, #78350f 75%, #451a03 85%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 30px 70px rgba(251, 191, 36, 1)) drop-shadow(0 0 120px rgba(245, 158, 11, 0.9)) drop-shadow(0 0 210px rgba(217, 119, 6, 0.7)) drop-shadow(0 0 300px rgba(180, 83, 9, 0.5)) drop-shadow(0 0 390px rgba(69, 26, 3, 0.3))',
              letterSpacing: '8px'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{
              opacity: '0.9',
              background: 'linear-gradient(135deg, transparent 15%, rgba(255,255,255,0.6) 50%, transparent 85%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '350px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 6%, #e2e8f0 12%, #cbd5e1 18%, #94a3b8 24%, #64748b 30%, #475569 36%, #334155 42%, #1e293b 48%, #0f172a 50%, #1e293b 52%, #334155 58%, #475569 64%, #64748b 70%, #94a3b8 76%, #cbd5e1 82%, #e2e8f0 88%, #f8fafc 94%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 35px 0 rgba(0,0,0,0.8)) drop-shadow(0 0 60px rgba(255,255,255,0.5)) drop-shadow(0 0 120px rgba(203, 213, 225, 0.6)) drop-shadow(0 0 180px rgba(148, 163, 184, 0.4)) drop-shadow(0 0 240px rgba(100, 116, 139, 0.3))',
              transform: 'skewY(-5deg) rotate(-1deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle at 30% 70%, #fef3c7 0%, #fcd34d 8%, #fbbf24 15%, #f97316 22%, #ef4444 30%, #dc2626 38%, #b91c1c 48%, #7f1d1d 58%, #450a0a 70%, #000 85%)',
              opacity: '1',
              animation: 'magmaPulse 1.2s ease-in-out infinite'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '350px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 60px #fef3c7, 0 0 120px #fca5a5, 0 0 240px #dc2626, 0 0 360px #7f1d1d, 0 0 480px rgba(127, 29, 29, 0.95), 0 0 600px rgba(0,0,0,0.8), 0 15px 0 #f97316, 0 30px 0 #ea580c, 0 45px 60px rgba(0,0,0,1), 0 0 180px rgba(249, 115, 22, 0.9), 0 0 300px rgba(234, 88, 12, 0.7), 0 0 420px rgba(194, 65, 12, 0.5)',
              background: 'linear-gradient(to top, #fff 0%, #fef3c7 8%, #fca5a5 15%, #f87171 22%, #ef4444 30%, #dc2626 38%, #b91c1c 45%, #991b1b 52%, #7f1d1d 60%, #450a0a 70%, #000 80%)',
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
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.7) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 80%, rgba(186, 230, 253, 0.6) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.4) 0%, transparent 60%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)'
            }}></div>
            <div className="ice-text" style={{
              fontSize: '340px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 12px 50px rgba(255,255,255,1), 0 0 90px #bae6fd, 0 0 150px #38bdf8, 0 0 210px rgba(56, 189, 248, 0.8), 0 0 270px rgba(14, 165, 233, 0.6), 0 0 330px rgba(3, 105, 161, 0.4), 0 0 390px rgba(2, 132, 199, 0.3), 0 25px 35px rgba(0,0,0,0.5)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f0f9ff 15%, #e0f2fe 30%, #bae6fd 45%, #7dd3fc 60%, #38bdf8 72%, #0ea5e9 82%, #0284c7 90%, #0369a1 96%, #075985 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 80px rgba(186, 230, 253, 1)) drop-shadow(0 0 160px rgba(56, 189, 248, 0.8)) drop-shadow(0 0 240px rgba(14, 165, 233, 0.6))'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.8' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '55px 55px 110px rgba(0,0,0,1), inset 0 -12px 50px rgba(0,0,0,0.5), 0 0 120px rgba(250, 204, 21, 0.7), 0 0 220px rgba(250, 204, 21, 0.5), 0 0 320px rgba(250, 204, 21, 0.3)',
            background: 'radial-gradient(#facc15 35%, transparent 35%), linear-gradient(135deg, #fef08a, #facc15, #eab308, #ca8a04, #a16207)',
            padding: '90px 120px',
            animation: 'bounce 1.8s ease-in-out infinite'
          }}>
            <div className="pop-text" style={{
              fontSize: '340px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '25px 25px 0 #000, 16px 16px 0 #fff, 0 0 50px rgba(220, 38, 38, 0.9), 0 0 100px rgba(220, 38, 38, 0.7), 0 0 150px rgba(220, 38, 38, 0.5), 0 0 200px rgba(220, 38, 38, 0.3)'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 180px rgba(255,255,255,0.7), inset 0 0 150px rgba(255,255,255,0.3), 0 0 280px rgba(192, 132, 252, 0.6), 0 0 380px rgba(232, 121, 249, 0.5), 0 0 480px rgba(250, 204, 21, 0.4), 0 0 580px rgba(244, 114, 182, 0.3), 0 0 680px rgba(250, 204, 21, 0.2)',
            background: 'linear-gradient(135deg, #f0abfc 0%, #d946ef 12%, #22d3ee 24%, #facc15 36%, #f472b6 48%, #a78bfa 60%, #f0abfc 72%, #22d3ee 84%, #d946ef 96%, #facc15 100%)',
            animation: 'holoRotate 4s linear infinite'
          }}>
            <div className="holo-text" style={{
              fontSize: '200px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f0abfc, #cffafe, #fef9c3, #fed7aa, #fce7f3, #e0e7ff, #fae8ff, #cffafe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 90px rgba(255,255,255,1)) drop-shadow(0 0 180px rgba(255,255,255,0.7)) drop-shadow(0 0 270px rgba(255,255,255,0.5))',
              letterSpacing: '8px'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '60px 60px 120px rgba(0,0,0,1), inset 0 -15px 60px rgba(0,0,0,0.6), 0 0 100px rgba(0,0,0,0.5), 0 0 50px rgba(255,255,255,0.15), 0 0 25px rgba(255,255,255,0.1)',
            transform: 'rotate(-4deg) scale(1.2)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 35%, #f1f5f9 100%)',
            padding: '80px 120px',
            animation: 'float 4.5s ease-in-out infinite'
          }}>
            <div className="sticker-text" style={{
              fontSize: '220px',
              fontWeight: '900',
              color: '#1e293b',
              textShadow: '6px 6px 0 rgba(255,255,255,0.7), 0 0 50px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(160px)', opacity: '2', background: 'radial-gradient(circle, #f5d0fe, #d8b4fe, #c084fc, #a855f7, transparent)' }}></div>
            <div className="fb-2" style={{ filter: 'blur(160px)', opacity: '2', background: 'radial-gradient(circle, #fbcfe8, #f9a8d4, #f472b6, #ec4899, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(160px)', opacity: '2', background: 'radial-gradient(circle, #93c5fd, #60a5fa, #3b82f6, #2563eb, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(140px)', opacity: '1.5', background: 'radial-gradient(circle, #a5f3fc, #67e8f9, #22d3ee, #06b6d4, transparent)', top: '150px', left: '150px' }}></div>
            <div className="fb-1" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #f0abfc, #e879f9, #d946ef, #c026d3, transparent)', top: '400px', left: '500px' }}></div>
            <div className="fb-2" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #bae6fd, #a5f3fc, #67e8f9, #22d3ee, transparent)', top: '300px', left: '200px' }}></div>
            <div className="fb-3" style={{ filter: 'blur(80px)', opacity: '0.8', background: 'radial-gradient(circle, #e9d5ff, #d8b4fe, #c084fc, transparent)', top: '350px', left: '400px' }}></div>
            <div className="fluid-text" style={{
              fontSize: '300px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #f0abfc, #22d3ee, #67e8f9, #c084fc, #f472b6, #d8b4fe, #f9a8d4, #a5f3fc, #93c5fd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.1px)',
              mixBlendMode: 'screen',
              textShadow: '0 0 100px rgba(232, 121, 249, 0.7), 0 0 200px rgba(34, 211, 238, 0.6), 0 0 300px rgba(192, 132, 252, 0.5), 0 0 400px rgba(232, 121, 249, 0.4)'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 300px rgba(0,0,0,1), 0 60px 120px rgba(0,0,0,1), 0 0 200px rgba(0,0,0,0.9), inset 0 6px 12px rgba(0,0,0,1), inset 0 0 60px rgba(255,255,255,0.1), 0 0 100px rgba(109, 76, 65, 0.5), 0 0 50px rgba(0,0,0,0.6)',
            background: 'linear-gradient(135deg, #8c735f, #7c6954, #6d4c41, #5d4037, #4e342e, #3e2723)',
            border: '24px solid #3e2723',
            animation: 'float 6.5s ease-in-out infinite'
          }}>
            <div className="wood-text" style={{
              fontSize: '250px',
              textShadow: '6px 6px 0 rgba(255,255,255,0.25), 10px 10px 40px rgba(0,0,0,1), 0 0 80px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)',
              filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.2))'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 50px 110px rgba(0,0,0,1), inset 0 10px 50px rgba(0,0,0,0.9), inset 0 5px 25px rgba(255,255,255,0.12), 0 0 150px rgba(0,0,0,0.7), 0 0 80px rgba(41, 37, 36, 0.5), 0 0 40px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, #2d2826, #292524, #1c1917, #171714, #0c0a09)',
            borderWidth: '12px',
            animation: 'float 5.5s ease-in-out infinite'
          }}>
            <div className="leather-text" style={{
              fontSize: '240px',
              textShadow: '6px 6px 0 rgba(255,255,255,0.12), -5px -5px 0 rgba(0,0,0,1), 0 0 80px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.08)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '900px', height: '550px', top: '120px', left: '20px', filter: 'blur(70px)', opacity: '1' }}></div>
            <div className="cloud-shape" style={{ width: '800px', height: '500px', top: '60px', left: '160px', filter: 'blur(65px)', opacity: '0.95' }}></div>
            <div className="cloud-shape" style={{ width: '700px', height: '450px', top: '220px', left: '320px', filter: 'blur(60px)', opacity: '0.9' }}></div>
            <div className="cloud-shape" style={{ width: '600px', height: '400px', top: '290px', left: '120px', filter: 'blur(55px)', opacity: '0.85' }}></div>
            <div className="cloud-shape" style={{ width: '550px', height: '370px', top: '160px', left: '440px', filter: 'blur(50px)', opacity: '0.8' }}></div>
            <div className="cloud-shape" style={{ width: '500px', height: '350px', top: '80px', left: '280px', filter: 'blur(45px)', opacity: '0.75' }}></div>
            <div className="cloud-shape" style={{ width: '450px', height: '320px', top: '200px', left: '100px', filter: 'blur(40px)', opacity: '0.7' }}></div>
            <div className="cloud-text" style={{
              fontSize: '360px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 25px 120px rgba(37, 99, 235, 1), 0 15px 60px rgba(255,255,255,1), 0 50px 100px rgba(0,0,0,0.5), 0 0 200px rgba(255,255,255,0.8), 0 0 300px rgba(37, 99, 235, 0.6), 0 0 400px rgba(14, 165, 233, 0.4)',
              zIndex: '10',
              position: 'relative',
              filter: 'drop-shadow(0 0 100px rgba(255,255,255,1)) drop-shadow(0 0 200px rgba(186, 230, 253, 0.7)) drop-shadow(0 0 300px rgba(14, 165, 233, 0.5))'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '300px',
            fontWeight: '900',
            color: '#facc15',
            textShadow: '30px 30px 0 #db2777, 60px 60px 0 #000, 0 0 60px rgba(250, 204, 21, 0.9), 0 0 120px rgba(250, 204, 21, 0.7), 0 0 180px rgba(250, 204, 21, 0.5), 0 0 240px rgba(250, 204, 21, 0.3)',
            WebkitTextStroke: '12px #000',
            transform: 'rotate(-8deg)',
            filter: 'drop-shadow(0 0 100px rgba(250, 204, 21, 0.8)) drop-shadow(0 0 200px rgba(250, 204, 21, 0.6)) drop-shadow(0 0 300px rgba(250, 204, 21, 0.4))'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '90px', height: '150px' }}></div>
            <div className="graf-drip" style={{ right: '80px', height: '180px' }}></div>
            <div className="graf-drip" style={{ left: '180px', height: '120px' }}></div>
            <div className="graf-drip" style={{ left: '240px', height: '110px' }}></div>
            <div className="graf-drip" style={{ right: '150px', height: '90px' }}></div>
            <div className="graf-drip" style={{ left: '300px', height: '80px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '1' }}>
              {Array.from({ length: 150 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4', '#84cc16', '#14b8a6', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6'][i % 15],
                  opacity: 0.3 + Math.random() * 0.7,
                  transform: `scale(${0.4 + Math.random() * 0.8})`
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '280px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '10px 10px 0 rgba(0,0,0,0.8), 0 0 90px rgba(255,255,255,0.6), 0 0 180px rgba(255,255,255,0.5), 0 0 270px rgba(255,255,255,0.4), 0 0 360px rgba(255,255,255,0.3)',
              position: 'relative',
              zIndex: '10',
              filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.7)) drop-shadow(0 0 160px rgba(255,255,255,0.5)) drop-shadow(0 0 240px rgba(255,255,255,0.3))'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '2' }}></div>
            <div className="smoke-plume" style={{ opacity: '1.5', animationDelay: '0.25s' }}></div>
            <div className="smoke-plume" style={{ opacity: '1.2', animationDelay: '0.5s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.9', animationDelay: '0.75s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.7', animationDelay: '1s' }}></div>
            <div className="smoke-text" style={{
              fontSize: '250px',
              fontWeight: '300',
              background: 'linear-gradient(to right, #0f172a, #1e293b, #334155, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f8fafc, #ffffff, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.8px)',
              position: 'relative',
              zIndex: '10',
              textShadow: '0 0 100px rgba(255,255,255,0.5), 0 0 200px rgba(203, 213, 225, 0.4), 0 0 300px rgba(148, 163, 184, 0.3), 0 0 400px rgba(100, 116, 139, 0.2)'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #ec4899, #d946ef, #c084fc, #a855f7, #8b5cf6, #7c3aed, #6366f1, #4f46e5, #fbbf24, #fcd34d)',
              boxShadow: '0 0 200px rgba(251, 191, 36, 1), 0 0 350px rgba(192, 132, 252, 0.9), 0 0 500px rgba(217, 70, 239, 0.7), 0 0 650px rgba(244, 114, 182, 0.5), 0 0 800px rgba(251, 191, 36, 0.3), 0 0 950px rgba(192, 132, 252, 0.2)',
              marginBottom: '-120px',
              animation: 'vaporPulse 2s ease-in-out infinite'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '240px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '12px 12px 0 #000, 0 0 100px #d946ef, 0 0 180px rgba(232, 121, 249, 1), 0 0 260px rgba(192, 132, 252, 0.8), 0 0 340px rgba(168, 85, 247, 0.6), 0 0 420px rgba(147, 51, 234, 0.4)',
              marginTop: '60px',
              letterSpacing: '12px',
              filter: 'drop-shadow(0 0 80px rgba(217, 70, 239, 0.8)) drop-shadow(0 0 160px rgba(192, 132, 252, 0.6)) drop-shadow(0 0 240px rgba(168, 85, 247, 0.4))'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 20px #000, 0 0 0 35px #22c55e, 0 0 0 50px #000, 0 0 0 65px #22c55e, 0 0 0 80px #000, 0 0 0 95px #22c55e, 0 90px 180px rgba(0,0,0,1), 0 0 280px rgba(34, 197, 94, 0.6), 0 0 380px rgba(34, 197, 94, 0.4), 0 0 480px rgba(34, 197, 94, 0.2)',
            borderColor: '#22c55e',
            borderWidth: '20px',
            padding: '80px 90px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}>
            <div className="rpg-text" style={{ fontSize: '240px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.7' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.5', transform: 'scaleX(-1)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.4', transform: 'scaleY(-1)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.3', transform: 'scale(1.2)' }}></div>
            <div className="horror-text" style={{
              fontSize: '320px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '0 0 100px #7f1d1d, 0 0 200px #450a0a, 0 0 300px rgba(0,0,0,0.98), 0 0 400px rgba(220, 38, 38, 1), 0 0 500px rgba(220, 38, 38, 0.8), 0 0 600px rgba(220, 38, 38, 0.6), 0 25px 50px rgba(220, 38, 38, 1), 0 0 200px rgba(127, 29, 29, 1), 0 0 300px rgba(69, 10, 10, 0.9), 0 0 400px rgba(0,0,0,0.7)',
              animation: 'horrorPulse 1s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '180px solid transparent',
              borderRight: '180px solid transparent',
              borderBottom: '360px solid #fcd34d',
              top: '40px',
              boxShadow: '0 60px 100px rgba(0,0,0,0.9), inset 0 0 80px rgba(255,255,255,0.3)',
              filter: 'drop-shadow(0 0 80px rgba(251, 191, 36, 0.9)) drop-shadow(0 0 160px rgba(245, 158, 11, 0.7)) drop-shadow(0 0 240px rgba(217, 119, 6, 0.5))'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '180px solid transparent',
              borderRight: '180px solid transparent',
              borderTop: '360px solid #f59e0b',
              top: '400px',
              boxShadow: '0 -60px 100px rgba(0,0,0,0.9), inset 0 0 80px rgba(255,255,255,0.3)',
              filter: 'drop-shadow(0 0 80px rgba(245, 158, 11, 0.9)) drop-shadow(0 0 160px rgba(217, 119, 6, 0.7)) drop-shadow(0 0 240px rgba(180, 83, 9, 0.5))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '250px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '6px 6px 0 rgba(255,255,255,0.35), 10px 10px 40px rgba(0,0,0,1), 0 0 80px rgba(251, 191, 36, 0.6), 0 0 160px rgba(251, 191, 36, 0.4), 0 0 240px rgba(251, 191, 36, 0.3)',
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
