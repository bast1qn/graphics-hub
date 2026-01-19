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
              filter: 'blur(500px)',
              opacity: '5',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, transparent 70%)',
              animation: 'pulse 0.6s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(250px)',
              opacity: '3',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '2',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, transparent 50%)',
              animation: 'float 2.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, transparent 40%)',
              animation: 'float 3.5s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(70px)',
              opacity: '1',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, transparent 30%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 300px rgba(255,255,255,0.4), 0 150px 300px rgba(99, 102, 241, 1), 0 0 220px rgba(129, 140, 248, 0.9), 0 0 150px rgba(99, 102, 241, 0.7), 0 0 100px rgba(129, 140, 248, 0.6), 0 0 60px rgba(99, 102, 241, 0.5), 0 0 30px rgba(129, 140, 248, 0.4), inset 0 0 70px rgba(255,255,255,0.15)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.3), rgba(167,139,250,0.25), rgba(199,210,254,0.2), rgba(224,231,255,0.15))',
              border: '8px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(60px)',
              animation: 'float 2s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '420px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 8%, #f5f3ff 16%, #ede9fe 24%, #e0e7ff 32%, #c7d2fe 40%, #a5b4fc 48%, #818cf8 56%, #6366f1 64%, #4f46e5 72%, #4338ca 80%, #3730a3 88%, #312e81 94%, #1e1b4b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 100px rgba(255,255,255,1)) drop-shadow(0 0 200px rgba(129,140,248,1)) drop-shadow(0 0 300px rgba(99,102,241,0.8)) drop-shadow(0 0 400px rgba(79,70,229,0.6)) drop-shadow(0 0 500px rgba(67,56,202,0.4)) drop-shadow(0 0 600px rgba(55,48,163,0.3))',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(500px)',
              opacity: '5',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, transparent 70%)',
              animation: 'pulse 0.6s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(250px)',
              opacity: '3',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, transparent 60%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '2',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, transparent 50%)',
              animation: 'float 2.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '1.5',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, transparent 40%)',
              animation: 'float 3.5s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(70px)',
              opacity: '1',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, transparent 30%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 300px rgba(255,255,255,0.4), 0 150px 300px rgba(244, 63, 94, 1), 0 0 220px rgba(251, 113, 133, 0.9), 0 0 150px rgba(244, 63, 94, 0.7), 0 0 100px rgba(251, 113, 133, 0.6), 0 0 60px rgba(244, 63, 94, 0.5), 0 0 30px rgba(251, 113, 133, 0.4), inset 0 0 70px rgba(255,255,255,0.15)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(251,113,133,0.25), rgba(254,205,211,0.2), rgba(255,241,242,0.15))',
              border: '8px solid rgba(255,255,255,0.9)',
              backdropFilter: 'blur(60px)',
              animation: 'float 2s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '420px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 8%, #ffe4e6 16%, #fecdd3 24%, #fda4af 32%, #fb7185 40%, #f43f5e 48%, #e11d48 56%, #be123c 64%, #9f1239 72%, #881337 80%, #7c2d12 88%, #4c0519 96%, #1a0505 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 100px rgba(255,255,255,1)) drop-shadow(0 0 200px rgba(251,113,133,1)) drop-shadow(0 0 300px rgba(244,63,94,0.8)) drop-shadow(0 0 400px rgba(225,29,72,0.6)) drop-shadow(0 0 500px rgba(190,18,60,0.4)) drop-shadow(0 0 600px rgba(159,18,57,0.3))',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.8) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.8) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.7) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.5) 0%, transparent 40%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.4) 0%, transparent 30%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '460px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 80px 200px rgba(192, 132, 252, 1), 0 0 300px rgba(168, 85, 247, 1), 0 0 160px rgba(236, 72, 153, 0.8), 0 0 100px rgba(232, 121, 249, 0.7), 0 0 60px rgba(244, 114, 182, 0.6), 0 0 20px rgba(217, 70, 239, 0.5)',
              letterSpacing: '-22px',
              filter: 'drop-shadow(0 0 100px rgba(217, 70, 239, 1)) drop-shadow(0 0 200px rgba(192, 132, 252, 0.8)) drop-shadow(0 0 300px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 400px rgba(147, 51, 234, 0.4)) drop-shadow(0 0 500px rgba(126, 34, 206, 0.3))',
              animation: 'float 3s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.2) 0%, transparent 40%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.15) 0%, transparent 30%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '460px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 50px 130px rgba(255,255,255, 0.9), 0 0 200px rgba(226, 232, 240, 0.8), 0 0 110px rgba(255,255,255, 0.6), 0 0 70px rgba(203, 213, 225, 0.5), 0 0 30px rgba(241, 245, 249, 0.4), 0 0 10px rgba(255,255,255,0.3)',
              letterSpacing: '-22px',
              filter: 'drop-shadow(0 0 100px rgba(255,255,255, 0.7)) drop-shadow(0 0 200px rgba(226, 232, 240, 0.6)) drop-shadow(0 0 300px rgba(148, 163, 184, 0.5)) drop-shadow(0 0 400px rgba(71, 85, 105, 0.4)) drop-shadow(0 0 500px rgba(30, 58, 138, 0.3))',
              animation: 'float 4s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 250px rgba(0,0,0,0.18), 0 120px 240px rgba(0,0,0, 0.9), 0 0 200px rgba(0,0,0,0.6), 0 0 160px rgba(0,0,0,0.5), 0 0 120px rgba(0,0,0,0.4), 0 0 80px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 12%, #f8fafc 25%, #f1f5f9 38%, #e2e8f0 50%, #cbd5e1 62%, #94a3b8 75%, #64748b 87%, #475569 94%)',
            border: '20px solid #e2e8f0',
            backdropFilter: 'blur(30px)',
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '480px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #020617, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(7px 7px 14px rgba(0,0,0,0.35)) drop-shadow(0 0 60px rgba(0,0,0,0.3)) drop-shadow(0 0 120px rgba(0,0,0,0.25)) drop-shadow(0 0 180px rgba(0,0,0,0.2)) drop-shadow(0 0 240px rgba(30, 41, 59, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 6s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 15%, #1c1917 30%, #292524 45%, #44403c 60%, #57534e 75%, #78716c 90%, #a8a29e 100%)',
              boxShadow: 'inset 0 0 250px rgba(0,0,0,1), 0 120px 240px rgba(0,0,0,1), 0 0 200px rgba(0,0,0,0.9), 0 0 160px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.35), inset 0 8px 16px rgba(255,255,255,0.3), inset 0 0 80px rgba(255,255,255,0.1), inset 0 0 30px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.05)',
              borderColor: '#d6d3d1',
              borderWidth: '24px'
            }}>
              <div className="badge-main" style={{
                fontSize: '260px',
                letterSpacing: '22px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '7px 7px 14px rgba(0,0,0,0.8), 0 0 80px rgba(214, 211, 209, 0.7), 0 0 50px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.3), 0 0 8px rgba(214, 211, 209, 0.2)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '72px',
                letterSpacing: '40px',
                textShadow: '6px 6px 12px rgba(0,0,0,1), 0 0 50px rgba(168, 162, 158, 0.7), 0 0 30px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.3), 0 0 8px rgba(168, 162, 158, 0.2)'
              }}>EST. 2026</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-cyan':
        return (
          <div className="neon-ring" style={{
            boxShadow: '0 0 250px currentColor, inset 0 0 250px currentColor, 0 0 450px #06b6d4, 0 0 650px rgba(6, 182, 212, 1), 0 0 850px rgba(6, 182, 212, 0.8), 0 0 1050px rgba(6, 182, 212, 0.6), 0 0 1250px rgba(6, 182, 212, 0.4), 0 0 1450px rgba(6, 182, 212, 0.3), 0 0 1650px rgba(6, 182, 212, 0.2)',
            borderWidth: '30px',
            animation: 'neonPulse 0.5s ease-in-out infinite'
          }}>
            <div className="neon-text" style={{
              fontSize: '260px',
              letterSpacing: '18px',
              textShadow: '0 0 150px currentColor, 0 0 300px #22d3ee, 0 0 500px rgba(34, 211, 238, 0.9), 0 0 700px rgba(6, 182, 212, 0.7), 0 0 900px rgba(34, 211, 238, 0.5), 0 0 1100px rgba(6, 182, 212, 0.4), 0 0 1300px rgba(34, 211, 238, 0.3), 0 0 1500px rgba(6, 182, 212, 0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'tech-box':
        return (
          <div className="tech-box" style={{
            borderColor: '#818cf8',
            boxShadow: '0 90px 220px rgba(129, 140, 248, 1), inset 0 0 150px rgba(129, 140, 248, 0.6), 0 0 300px rgba(99, 102, 241, 0.7), 0 0 200px rgba(129, 140, 248, 0.9), 0 0 120px rgba(99, 102, 241, 0.7), inset 0 0 80px rgba(99, 102, 241, 0.5), 0 0 60px rgba(129, 140, 248, 0.6), 0 0 30px rgba(99, 102, 241, 0.4)',
            background: 'linear-gradient(135deg, rgba(17,17,17,1), rgba(30,30,40,1), rgba(17,17,17,1))',
            borderWidth: '18px',
            animation: 'pulse 1s ease-in-out infinite'
          }}>
            <div className="tech-b" style={{
              color: '#a5b4fc',
              fontSize: '250px',
              textShadow: '0 0 110px #818cf8, 0 0 220px rgba(129, 140, 248, 1), 0 0 330px rgba(99, 102, 241, 0.9), 0 0 440px rgba(129, 140, 248, 0.7), 0 0 550px rgba(99, 102, 241, 0.5), 0 0 660px rgba(129, 140, 248, 0.4), 0 0 770px rgba(99, 102, 241, 0.3)'
            }}>bast1qn</div>
          </div>
        );
      case 'glitch':
        return (
          <>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '300px',
              fontWeight: '900',
              textShadow: '25px 0 #ff006e, -25px 0 #00f7ff, 12px 12px 0 rgba(0,0,0,0.9), 0 0 120px rgba(255,0,110,0.7), 0 0 250px rgba(0,247,255,0.7), 0 0 380px rgba(255,0,110,0.5), 0 0 510px rgba(0,247,255,0.4), 0 0 640px rgba(255,0,110,0.3)',
              animation: 'glitch 0.08s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '300px',
              fontWeight: '900',
              color: '#ff006e',
              opacity: '1',
              animation: 'glitch2 0.12s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '300px',
              fontWeight: '900',
              color: '#00f7ff',
              opacity: '0.8',
              animation: 'glitch3 0.15s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '300px',
              fontWeight: '900',
              color: '#ffff00',
              opacity: '0.6',
              animation: 'glitch4 0.18s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '300px',
              fontWeight: '900',
              color: '#ff00ff',
              opacity: '0.4',
              animation: 'glitch5 0.22s infinite'
            }}>bast1qn</div>
            <div style={{
              position: 'absolute',
              fontSize: '300px',
              fontWeight: '900',
              color: '#00ff00',
              opacity: '0.2',
              animation: 'glitch6 0.3s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'matrix':
        return (
          <>
            <div className="matrix-col" style={{ left: '0%', top: '-80px', fontSize: '32px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '8%', top: '-60px', fontSize: '30px', opacity: '0.95' }}>1<br/>0<br/>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '92%', top: '80px', fontSize: '32px', opacity: '1' }}>0<br/>1<br/>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '96%', top: '50px', fontSize: '30px', opacity: '0.95' }}>1<br/>0<br/>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '3%', top: '140px', fontSize: '28px', opacity: '0.85' }}>0<br/>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '68%', top: '-50px', fontSize: '28px', opacity: '0.85' }}>1<br/>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '16%', top: '180px', fontSize: '26px', opacity: '0.7' }}>0<br/>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '52%', top: '-80px', fontSize: '26px', opacity: '0.7' }}>1<br/>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '30%', top: '200px', fontSize: '24px', opacity: '0.5' }}>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '37%', top: '-90px', fontSize: '24px', opacity: '0.5' }}>1<br/>0<br/>1</div>
            <div className="matrix-col" style={{ left: '44%', top: '220px', fontSize: '22px', opacity: '0.4' }}>0<br/>1<br/>0</div>
            <div className="matrix-col" style={{ left: '24%', top: '-100px', fontSize: '22px', opacity: '0.4' }}>1<br/>0<br/>1</div>
            <div className="matrix-text" style={{
              fontSize: '240px',
              textShadow: '0 0 110px #22c55e, 0 0 220px #22c55e, 0 0 330px rgba(34, 211, 153, 1), 0 0 440px rgba(34, 211, 153, 0.9), 0 0 550px rgba(34, 211, 153, 0.7), 0 0 660px rgba(34, 211, 153, 0.5), 0 0 770px rgba(34, 211, 153, 0.4)',
              borderColor: '#22c55e',
              borderWidth: '12px',
              background: 'rgba(0,0,0,1)',
              padding: '70px 90px',
              boxShadow: '0 0 200px rgba(34, 211, 153, 0.8), 0 0 400px rgba(34, 211, 153, 0.6), 0 0 600px rgba(34, 211, 153, 0.4), inset 0 0 120px rgba(34, 211, 153, 0.5)'
            }}>bast1qn</div>
          </>
        );
      case 'pcb':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '1' }}></div>
            <div className="pcb-chip" style={{
              boxShadow: '0 100px 200px rgba(0,0,0,1), inset 0 0 120px rgba(52, 211, 153, 0.7), 0 0 90px rgba(52, 211, 153, 1), 0 0 180px rgba(52, 211, 153, 0.8), 0 0 270px rgba(52, 211, 153, 0.6), inset 0 0 80px rgba(52, 211, 153, 0.6), 0 0 40px rgba(52, 211, 153, 0.7), 0 0 20px rgba(52, 211, 153, 0.5)',
              borderColor: '#34d399',
              borderWidth: '18px',
              animation: 'pulse 1.8s ease-in-out infinite'
            }}>
              <div className="pcb-text" style={{
                fontSize: '240px',
                textShadow: '0 0 110px #34d399, 0 0 220px rgba(52, 211, 153, 1), 0 0 330px rgba(52, 211, 153, 0.9), 0 0 440px rgba(52, 211, 153, 0.7), 0 0 550px rgba(52, 211, 153, 0.5), 0 0 660px rgba(52, 211, 153, 0.4), 0 0 770px rgba(52, 211, 153, 0.3)',
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
              background: 'radial-gradient(circle at center, #fef3c7 0%, #fcd34d 15%, #fbbf24 30%, #f59e0b 45%, transparent 100%)',
              opacity: '1.2',
              filter: 'blur(70px)',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div className="lux-border" style={{
              borderColor: '#f59e0b',
              opacity: '1',
              filter: 'blur(30px)',
              boxShadow: '0 0 180px rgba(251, 191, 36, 1), 0 0 360px rgba(251, 191, 36, 0.9), 0 0 540px rgba(251, 191, 36, 0.7), 0 0 720px rgba(251, 191, 36, 0.5), 0 0 900px rgba(251, 191, 36, 0.3)'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '340px',
              background: 'linear-gradient(to bottom, #fffbeb 0%, #fef3c7 5%, #fcd34d 12%, #fbbf24 20%, #f59e0b 28%, #d97706 36%, #b45309 44%, #92400e 52%, #78350f 60%, #451a03 68%, #000 76%, #000 82%, #000 88%, #000 94%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 35px 80px rgba(251, 191, 36, 1)) drop-shadow(0 0 150px rgba(245, 158, 11, 1)) drop-shadow(0 0 270px rgba(217, 119, 6, 0.8)) drop-shadow(0 0 390px rgba(180, 83, 9, 0.6)) drop-shadow(0 0 510px rgba(120, 53, 15, 0.4)) drop-shadow(0 0 630px rgba(69, 26, 3, 0.3))',
              letterSpacing: '10px'
            }}>bast1qn</div>
          </>
        );
      case 'chrome':
        return (
          <>
            <div className="chrome-refl" style={{
              opacity: '1',
              background: 'linear-gradient(135deg, transparent 10%, rgba(255,255,255,0.7) 50%, transparent 90%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '420px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 5%, #e2e8f0 10%, #cbd5e1 15%, #94a3b8 20%, #64748b 25%, #475569 30%, #334155 35%, #1e293b 40%, #0f172a 45%, #1e293b 50%, #0f172a 55%, #334155 60%, #475569 65%, #64748b 70%, #94a3b8 75%, #cbd5e1 80%, #e2e8f0 85%, #f8fafc 90%, #ffffff 95%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 40px 0 rgba(0,0,0,0.9)) drop-shadow(0 0 70px rgba(255,255,255,0.6)) drop-shadow(0 0 150px rgba(203, 213, 225, 0.7)) drop-shadow(0 0 230px rgba(148, 163, 184, 0.5)) drop-shadow(0 0 310px rgba(100, 116, 139, 0.4)) drop-shadow(0 0 390px rgba(71, 85, 105, 0.3))',
              transform: 'skewY(-5deg) rotate(-1deg)'
            }}>bast1qn</div>
          </>
        );
      case 'magma':
        return (
          <>
            <div className="magma-bg" style={{
              background: 'radial-gradient(circle at 30% 70%, #fef3c7 0%, #fcd34d 6%, #fbbf24 12%, #f97316 18%, #ef4444 25%, #dc2626 32%, #b91c1c 40%, #7f1d1d 48%, #450a0a 58%, #000 70%)',
              opacity: '1',
              animation: 'magmaPulse 1s ease-in-out infinite'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '420px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 80px #fef3c7, 0 0 160px #fca5a5, 0 0 320px #dc2626, 0 0 480px #7f1d1d, 0 0 640px rgba(127, 29, 29, 1), 0 0 800px rgba(0,0,0,0.9), 0 18px 0 #f97316, 0 36px 0 #ea580c, 0 54px 70px rgba(0,0,0,1), 0 0 240px rgba(249, 115, 22, 1), 0 0 400px rgba(234, 88, 12, 0.8), 0 0 560px rgba(194, 65, 12, 0.6), 0 0 720px rgba(162, 28, 0, 0.4)',
              background: 'linear-gradient(to top, #fff 0%, #fef3c7 6%, #fca5a5 12%, #f87171 18%, #ef4444 25%, #dc2626 32%, #b91c1c 38%, #991b1b 44%, #7f1d1d 50%, #450a0a 56%, #000 62%, #000 68%, #000 74%, #000 80%)',
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
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.8) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 80%, rgba(186, 230, 253, 0.7) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.5) 0%, transparent 60%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)'
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 80% 70%, rgba(2, 132, 199, 0.3) 0%, transparent 50%)'
            }}></div>
            <div className="ice-text" style={{
              fontSize: '400px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 15px 60px rgba(255,255,255,1), 0 0 110px #bae6fd, 0 0 180px #38bdf8, 0 0 250px rgba(56, 189, 248, 0.9), 0 0 320px rgba(14, 165, 233, 0.7), 0 0 390px rgba(3, 105, 161, 0.5), 0 0 460px rgba(2, 132, 199, 0.4), 0 0 530px rgba(3, 105, 161, 0.3), 0 30px 40px rgba(0,0,0,0.6)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f0f9ff 12%, #e0f2fe 24%, #bae6fd 36%, #7dd3fc 48%, #38bdf8 58%, #0ea5e9 68%, #0284c7 76%, #0369a1 84%, #075985 90%, #0369a1 94%, #0284c7 97%, #0c4a6e 99%, #075985 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 100px rgba(186, 230, 253, 1)) drop-shadow(0 0 200px rgba(56, 189, 248, 0.9)) drop-shadow(0 0 300px rgba(14, 165, 233, 0.7)) drop-shadow(0 0 400px rgba(2, 132, 199, 0.5))'
            }}>bast1qn</div>
            <div className="ice-crack" style={{ opacity: '0.9' }}></div>
          </>
        );

      // ART & ABSTRACT
      case 'pop-art':
        return (
          <div className="pop-burst" style={{
            boxShadow: '65px 65px 130px rgba(0,0,0,1), inset 0 -15px 60px rgba(0,0,0,0.6), 0 0 150px rgba(250, 204, 21, 0.8), 0 0 270px rgba(250, 204, 21, 0.6), 0 0 390px rgba(250, 204, 21, 0.4), 0 0 510px rgba(250, 204, 21, 0.2)',
            background: 'radial-gradient(#facc15 40%, transparent 40%), linear-gradient(135deg, #fef08a, #facc15, #eab308, #ca8a04, #a16207, #92400e)',
            padding: '100px 130px',
            animation: 'bounce 1.5s ease-in-out infinite'
          }}>
            <div className="pop-text" style={{
              fontSize: '400px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '30px 30px 0 #000, 20px 20px 0 #fff, 0 0 60px rgba(220, 38, 38, 1), 0 0 120px rgba(220, 38, 38, 0.8), 0 0 180px rgba(220, 38, 38, 0.6), 0 0 240px rgba(220, 38, 38, 0.4), 0 0 300px rgba(220, 38, 38, 0.3)'
            }}>bast1qn</div>
          </div>
        );
      case 'holo':
        return (
          <div className="holo-circle" style={{
            boxShadow: '0 0 220px rgba(255,255,255,0.8), inset 0 0 180px rgba(255,255,255,0.35), 0 0 350px rgba(192, 132, 252, 0.7), 0 0 480px rgba(232, 121, 249, 0.6), 0 0 610px rgba(250, 204, 21, 0.5), 0 0 740px rgba(244, 114, 182, 0.4), 0 0 870px rgba(250, 204, 21, 0.3), 0 0 1000px rgba(192, 132, 252, 0.2)',
            background: 'linear-gradient(135deg, #f0abfc 0%, #d946ef 10%, #22d3ee 20%, #facc15 30%, #f472b6 40%, #a78bfa 50%, #f0abfc 60%, #22d3ee 70%, #d946ef 80%, #facc15 90%, #f472b6 100%)',
            animation: 'holoRotate 3s linear infinite'
          }}>
            <div className="holo-text" style={{
              fontSize: '240px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f0abfc, #cffafe, #fef9c3, #fed7aa, #fce7f3, #e0e7ff, #fae8ff, #cffafe, #fef9c3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 110px rgba(255,255,255,1)) drop-shadow(0 0 220px rgba(255,255,255,0.8)) drop-shadow(0 0 330px rgba(255,255,255,0.6)) drop-shadow(0 0 440px rgba(255,255,255,0.4))',
              letterSpacing: '10px'
            }}>bast1qn</div>
          </div>
        );
      case 'sticker':
        return (
          <div className="sticker-body" style={{
            boxShadow: '70px 70px 140px rgba(0,0,0,1), inset 0 -18px 70px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.6), 0 0 60px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.15), 0 0 15px rgba(255,255,255,0.1)',
            transform: 'rotate(-4deg) scale(1.25)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #f1f5f9 100%)',
            padding: '90px 130px',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <div className="sticker-text" style={{
              fontSize: '260px',
              fontWeight: '900',
              color: '#1e293b',
              textShadow: '7px 7px 0 rgba(255,255,255,0.8), 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>bast1qn</div>
          </div>
        );
      case 'fluid':
        return (
          <>
            <div className="fb-1" style={{ filter: 'blur(180px)', opacity: '2.5', background: 'radial-gradient(circle, #f5d0fe, #d8b4fe, #c084fc, #a855f7, #9333ea, transparent)' }}></div>
            <div className="fb-2" style={{ filter: 'blur(180px)', opacity: '2.5', background: 'radial-gradient(circle, #fbcfe8, #f9a8d4, #f472b6, #ec4899, #db2777, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(180px)', opacity: '2.5', background: 'radial-gradient(circle, #93c5fd, #60a5fa, #3b82f6, #2563eb, #1d4ed8, transparent)' }}></div>
            <div className="fb-3" style={{ filter: 'blur(160px)', opacity: '2', background: 'radial-gradient(circle, #a5f3fc, #67e8f9, #22d3ee, #06b6d4, #0891b2, transparent)', top: '150px', left: '150px' }}></div>
            <div className="fb-1" style={{ filter: 'blur(140px)', opacity: '1.5', background: 'radial-gradient(circle, #f0abfc, #e879f9, #d946ef, #c026d3, #a21caf, transparent)', top: '400px', left: '500px' }}></div>
            <div className="fb-2" style={{ filter: 'blur(120px)', opacity: '1.2', background: 'radial-gradient(circle, #bae6fd, #a5f3fc, #67e8f9, #22d3ee, #06b6d4, transparent)', top: '300px', left: '200px' }}></div>
            <div className="fb-3" style={{ filter: 'blur(100px)', opacity: '1', background: 'radial-gradient(circle, #e9d5ff, #d8b4fe, #c084fc, #a855f7, transparent)', top: '350px', left: '400px' }}></div>
            <div className="fb-1" style={{ filter: 'blur(80px)', opacity: '0.8', background: 'radial-gradient(circle, #f9a8d4, #f472b6, #ec4899, transparent)', top: '250px', left: '300px' }}></div>
            <div className="fluid-text" style={{
              fontSize: '360px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e879f9, #f0abfc, #22d3ee, #67e8f9, #c084fc, #f472b6, #d8b4fe, #f9a8d4, #a5f3fc, #93c5fd, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0px)',
              mixBlendMode: 'screen',
              textShadow: '0 0 120px rgba(232, 121, 249, 0.8), 0 0 240px rgba(34, 211, 238, 0.7), 0 0 360px rgba(192, 132, 252, 0.6), 0 0 480px rgba(232, 121, 249, 0.5), 0 0 600px rgba(34, 211, 238, 0.4)'
            }}>bast1qn</div>
          </>
        );

      // NEW STYLES
      case 'wood':
        return (
          <div className="wood-board" style={{
            boxShadow: 'inset 0 0 350px rgba(0,0,0,1), 0 70px 140px rgba(0,0,0,1), 0 0 240px rgba(0,0,0,1), inset 0 8px 16px rgba(0,0,0,1), inset 0 0 80px rgba(255,255,255,0.12), 0 0 120px rgba(109, 76, 65, 0.6), 0 0 60px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #93746c, #8c735f, #7c6954, #6d4c41, #5d4037, #4e342e, #3e2723, #27241a)',
            border: '28px solid #3e2723',
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div className="wood-text" style={{
              fontSize: '300px',
              textShadow: '7px 7px 0 rgba(255,255,255,0.3), 12px 12px 50px rgba(0,0,0,1), 0 0 100px rgba(255,255,255,0.25), 0 0 50px rgba(255,255,255,0.15)',
              filter: 'drop-shadow(0 0 80px rgba(255,255,255,0.25))'
            }}>bast1qn</div>
          </div>
        );
      case 'leather':
        return (
          <div className="leather-patch" style={{
            boxShadow: '0 60px 130px rgba(0,0,0,1), inset 0 12px 60px rgba(0,0,0,1), inset 0 6px 30px rgba(255,255,255,0.15), 0 0 180px rgba(0,0,0,0.8), 0 0 100px rgba(41, 37, 36, 0.6), 0 0 50px rgba(0,0,0,0.5), 0 0 25px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, #2d2826, #292524, #1c1917, #171714, #0c0a09, #000000)',
            borderWidth: '16px',
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="leather-text" style={{
              fontSize: '290px',
              textShadow: '7px 7px 0 rgba(255,255,255,0.15), -6px -6px 0 rgba(0,0,0,1), 0 0 100px rgba(255,255,255,0.12), 0 0 50px rgba(255,255,255,0.1)'
            }}>bast1qn</div>
          </div>
        );
      case 'cloud':
        return (
          <>
            <div className="cloud-shape" style={{ width: '1000px', height: '600px', top: '100px', left: '0px', filter: 'blur(80px)', opacity: '1' }}></div>
            <div className="cloud-shape" style={{ width: '900px', height: '550px', top: '40px', left: '140px', filter: 'blur(75px)', opacity: '0.95' }}></div>
            <div className="cloud-shape" style={{ width: '800px', height: '500px', top: '200px', left: '300px', filter: 'blur(70px)', opacity: '0.9' }}></div>
            <div className="cloud-shape" style={{ width: '700px', height: '450px', top: '270px', left: '100px', filter: 'blur(65px)', opacity: '0.85' }}></div>
            <div className="cloud-shape" style={{ width: '650px', height: '420px', top: '140px', left: '420px', filter: 'blur(60px)', opacity: '0.8' }}></div>
            <div className="cloud-shape" style={{ width: '600px', height: '400px', top: '60px', left: '260px', filter: 'blur(55px)', opacity: '0.75' }}></div>
            <div className="cloud-shape" style={{ width: '550px', height: '380px', top: '180px', left: '80px', filter: 'blur(50px)', opacity: '0.7' }}></div>
            <div className="cloud-shape" style={{ width: '500px', height: '360px', top: '240px', left: '360px', filter: 'blur(45px)', opacity: '0.65' }}></div>
            <div className="cloud-text" style={{
              fontSize: '420px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 30px 140px rgba(37, 99, 235, 1), 0 18px 70px rgba(255,255,255,1), 0 60px 120px rgba(0,0,0,0.6), 0 0 250px rgba(255,255,255,0.9), 0 0 400px rgba(37, 99, 235, 0.7), 0 0 550px rgba(14, 165, 233, 0.5), 0 0 700px rgba(2, 132, 199, 0.4)',
              zIndex: '10',
              position: 'relative',
              filter: 'drop-shadow(0 0 120px rgba(255,255,255,1)) drop-shadow(0 0 240px rgba(186, 230, 253, 0.8)) drop-shadow(0 0 360px rgba(14, 165, 233, 0.6)) drop-shadow(0 0 480px rgba(3, 105, 161, 0.5))'
            }}>bast1qn</div>
          </>
        );
      case 'graffiti':
        return (
          <div className="graf-text" style={{
            fontSize: '360px',
            fontWeight: '900',
            color: '#facc15',
            textShadow: '35px 35px 0 #db2777, 70px 70px 0 #000, 0 0 80px rgba(250, 204, 21, 1), 0 0 160px rgba(250, 204, 21, 0.8), 0 0 240px rgba(250, 204, 21, 0.6), 0 0 320px rgba(250, 204, 21, 0.4), 0 0 400px rgba(250, 204, 21, 0.3)',
            WebkitTextStroke: '14px #000',
            transform: 'rotate(-8deg)',
            filter: 'drop-shadow(0 0 120px rgba(250, 204, 21, 0.9)) drop-shadow(0 0 240px rgba(250, 204, 21, 0.7)) drop-shadow(0 0 360px rgba(250, 204, 21, 0.5)) drop-shadow(0 0 480px rgba(250, 204, 21, 0.4))'
          }}>
            bast1qn<div className="graf-drip" style={{ left: '100px', height: '170px' }}></div>
            <div className="graf-drip" style={{ right: '90px', height: '200px' }}></div>
            <div className="graf-drip" style={{ left: '200px', height: '140px' }}></div>
            <div className="graf-drip" style={{ left: '260px', height: '130px' }}></div>
            <div className="graf-drip" style={{ right: '160px', height: '110px' }}></div>
            <div className="graf-drip" style={{ left: '320px', height: '100px' }}></div>
            <div className="graf-drip" style={{ left: '160px', height: '90px' }}></div>
          </div>
        );
      case 'mosaic':
        return (
          <>
            <div className="mosaic-grid" style={{ opacity: '1' }}>
              {Array.from({ length: 200 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4', '#84cc16', '#14b8a6', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6', '#a855f7', '#f97316'][i % 16],
                  opacity: 0.2 + Math.random() * 0.8,
                  transform: `scale(${0.2 + Math.random() * 1})`
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '340px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '12px 12px 0 rgba(0,0,0,0.9), 0 0 110px rgba(255,255,255,0.7), 0 0 220px rgba(255,255,255,0.6), 0 0 330px rgba(255,255,255,0.5), 0 0 440px rgba(255,255,255,0.4), 0 0 550px rgba(255,255,255,0.3)',
              position: 'relative',
              zIndex: '10',
              filter: 'drop-shadow(0 0 100px rgba(255,255,255,0.8)) drop-shadow(0 0 200px rgba(255,255,255,0.6)) drop-shadow(0 0 300px rgba(255,255,255,0.4)) drop-shadow(0 0 400px rgba(255,255,255,0.3))'
            }}>bast1qn</div>
          </>
        );
      case 'smoke':
        return (
          <>
            <div className="smoke-plume" style={{ opacity: '2.5' }}></div>
            <div className="smoke-plume" style={{ opacity: '2', animationDelay: '0.2s' }}></div>
            <div className="smoke-plume" style={{ opacity: '1.5', animationDelay: '0.4s' }}></div>
            <div className="smoke-plume" style={{ opacity: '1.2', animationDelay: '0.6s' }}></div>
            <div className="smoke-plume" style={{ opacity: '1', animationDelay: '0.8s' }}></div>
            <div className="smoke-plume" style={{ opacity: '0.8', animationDelay: '1s' }}></div>
            <div className="smoke-text" style={{
              fontSize: '300px',
              fontWeight: '300',
              background: 'linear-gradient(to right, #0f172a, #1e293b, #334155, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f8fafc, #ffffff, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(0.6px)',
              position: 'relative',
              zIndex: '10',
              textShadow: '0 0 120px rgba(255,255,255,0.6), 0 0 240px rgba(203, 213, 225, 0.5), 0 0 360px rgba(148, 163, 184, 0.4), 0 0 480px rgba(100, 116, 139, 0.3), 0 0 600px rgba(71, 85, 105, 0.2)'
            }}>bast1qn</div>
          </>
        );
      case 'vaporwave':
        return (
          <>
            <div className="vapor-sun" style={{
              background: 'linear-gradient(to top, #f472b6, #ec4899, #d946ef, #c084fc, #a855f7, #8b5cf6, #7c3aed, #6366f1, #4f46e5, #3730a3, #fbbf24, #fcd34d)',
              boxShadow: '0 0 220px rgba(251, 191, 36, 1), 0 0 400px rgba(192, 132, 252, 1), 0 0 580px rgba(217, 70, 239, 0.8), 0 0 760px rgba(244, 114, 182, 0.6), 0 0 940px rgba(251, 191, 36, 0.4), 0 0 1120px rgba(192, 132, 252, 0.3), 0 0 1300px rgba(217, 70, 239, 0.2)',
              marginBottom: '-120px',
              animation: 'vaporPulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '280px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '14px 14px 0 #000, 0 0 120px #d946ef, 0 0 220px rgba(232, 121, 249, 1), 0 0 320px rgba(192, 132, 252, 0.9), 0 0 420px rgba(168, 85, 247, 0.7), 0 0 520px rgba(147, 51, 234, 0.5), 0 0 620px rgba(126, 34, 206, 0.4)',
              marginTop: '60px',
              letterSpacing: '14px',
              filter: 'drop-shadow(0 0 100px rgba(217, 70, 239, 0.9)) drop-shadow(0 0 200px rgba(192, 132, 252, 0.7)) drop-shadow(0 0 300px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 400px rgba(147, 51, 234, 0.4))'
            }}>bast1qn</div>
          </>
        );
      case 'rpg':
        return (
          <div className="rpg-box" style={{
            boxShadow: '0 0 0 24px #000, 0 0 0 42px #22c55e, 0 0 0 60px #000, 0 0 0 78px #22c55e, 0 0 0 96px #000, 0 0 0 114px #22c55e, 0 0 0 132px #000, 0 0 0 150px #22c55e, 0 110px 220px rgba(0,0,0,1), 0 0 350px rgba(34, 197, 94, 0.7), 0 0 480px rgba(34, 197, 94, 0.5), 0 0 610px rgba(34, 197, 94, 0.3), 0 0 740px rgba(34, 197, 94, 0.2)',
            borderColor: '#22c55e',
            borderWidth: '24px',
            padding: '90px 100px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            animation: 'pulse 1.2s ease-in-out infinite'
          }}>
            <div className="rpg-text" style={{ fontSize: '280px' }}>
              NAME: bast1qn<span className="rpg-cursor"></span>
            </div>
          </div>
        );
      case 'horror':
        return (
          <>
            <div className="horror-scratch" style={{ opacity: '0.8' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.6', transform: 'scaleX(-1)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.5', transform: 'scaleY(-1)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.4', transform: 'scale(1.3)' }}></div>
            <div className="horror-scratch" style={{ opacity: '0.3', transform: 'scale(1.1) rotate(45deg)' }}></div>
            <div className="horror-text" style={{
              fontSize: '400px',
              fontWeight: '900',
              color: '#dc2626',
              textShadow: '0 0 120px #7f1d1d, 0 0 240px #450a0a, 0 0 360px rgba(0,0,0,1), 0 0 480px rgba(220, 38, 38, 1), 0 0 600px rgba(220, 38, 38, 0.9), 0 0 720px rgba(220, 38, 38, 0.7), 0 30px 60px rgba(220, 38, 38, 1), 0 0 240px rgba(127, 29, 29, 1), 0 0 360px rgba(69, 10, 10, 1), 0 0 480px rgba(0,0,0,0.8), 0 0 600px rgba(220, 38, 38, 0.6), 0 0 720px rgba(127, 29, 29, 0.5)',
              animation: 'horrorPulse 0.8s infinite'
            }}>bast1qn</div>
          </>
        );
      case 'origami':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '200px solid transparent',
              borderRight: '200px solid transparent',
              borderBottom: '400px solid #fcd34d',
              top: '20px',
              boxShadow: '0 70px 120px rgba(0,0,0,1), inset 0 0 100px rgba(255,255,255,0.35), 0 0 20px rgba(251, 191, 36, 1)',
              filter: 'drop-shadow(0 0 100px rgba(251, 191, 36, 1)) drop-shadow(0 0 200px rgba(245, 158, 11, 0.8)) drop-shadow(0 0 300px rgba(217, 119, 6, 0.6)) drop-shadow(0 0 400px rgba(180, 83, 9, 0.5))'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '0', height: '0',
              borderLeft: '200px solid transparent',
              borderRight: '200px solid transparent',
              borderTop: '400px solid #f59e0b',
              top: '420px',
              boxShadow: '0 -70px 120px rgba(0,0,0,1), inset 0 0 100px rgba(255,255,255,0.35), 0 0 20px rgba(245, 158, 11, 1)',
              filter: 'drop-shadow(0 0 100px rgba(245, 158, 11, 1)) drop-shadow(0 0 200px rgba(217, 119, 6, 0.8)) drop-shadow(0 0 300px rgba(180, 83, 9, 0.6)) drop-shadow(0 0 400px rgba(162, 28, 0, 0.5))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '300px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '7px 7px 0 rgba(255,255,255,0.4), 12px 12px 50px rgba(0,0,0,1), 0 0 100px rgba(251, 191, 36, 0.7), 0 0 200px rgba(251, 191, 36, 0.5), 0 0 300px rgba(251, 191, 36, 0.4), 0 0 400px rgba(251, 191, 36, 0.3)',
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
