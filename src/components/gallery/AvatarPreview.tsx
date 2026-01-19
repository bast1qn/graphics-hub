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
              filter: 'blur(1200px)',
              opacity: '20',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, #312e81, #1e1b4b, #030712, #000000, transparent 95%)',
              animation: 'pulse 0.2s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(600px)',
              opacity: '18',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 90%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(350px)',
              opacity: '15',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, transparent 80%)',
              animation: 'float 1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '12',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 70%)',
              animation: 'float 1.5s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '10',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, #6366f1, #4f46e5, transparent 60%)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 600px rgba(255,255,255,0.7), 0 300px 600px rgba(99, 102, 241, 1), 0 0 500px rgba(129, 140, 248, 1), 0 0 400px rgba(99, 102, 241, 1), 0 0 300px rgba(129, 140, 248, 0.9), 0 0 200px rgba(99, 102, 241, 0.8), 0 0 150px rgba(129, 140, 248, 0.7), 0 0 100px rgba(99, 102, 241, 0.6), 0 0 50px rgba(129, 140, 248, 0.5), inset 0 0 150px rgba(255,255,255,0.3)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.6), rgba(167,139,250,0.55), rgba(199,210,254,0.5), rgba(224,231,255,0.45))',
              border: '20px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(120px)',
              animation: 'float 0.8s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '700px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 5%, #f5f3ff 10%, #ede9fe 15%, #e0e7ff 20%, #c7d2fe 25%, #a5b4fc 30%, #818cf8 35%, #6366f1 40%, #4f46e5 45%, #4338ca 50%, #3730a3 55%, #312e81 60%, #1e1b4b 65%, #030712 70%, #000000 75%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 250px rgba(255,255,255,1)) drop-shadow(0 0 500px rgba(129,140,248,1)) drop-shadow(0 0 750px rgba(99,102,241,1)) drop-shadow(0 0 1000px rgba(79,70,229,0.9)) drop-shadow(0 0 1250px rgba(67,56,202,0.7)) drop-shadow(0 0 1500px rgba(55,48,163,0.6)) drop-shadow(0 0 1750px rgba(30,27,75,0.5)) drop-shadow(0 0 2000px rgba(0,0,0,0.4))',
                animation: 'pulse 0.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(1200px)',
              opacity: '20',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000, transparent 95%)',
              animation: 'pulse 0.2s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(600px)',
              opacity: '18',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, transparent 90%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(350px)',
              opacity: '15',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, transparent 80%)',
              animation: 'float 1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '12',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, #be123c, #9f1239, #881337, transparent 70%)',
              animation: 'float 1.5s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '10',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, #f43f5e, #e11d48, transparent 60%)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 600px rgba(255,255,255,0.7), 0 300px 600px rgba(244, 63, 94, 1), 0 0 500px rgba(251, 113, 133, 1), 0 0 400px rgba(244, 63, 94, 1), 0 0 300px rgba(251, 113, 133, 0.9), 0 0 200px rgba(244, 63, 94, 0.8), 0 0 150px rgba(251, 113, 133, 0.7), 0 0 100px rgba(244, 63, 94, 0.6), 0 0 50px rgba(251, 113, 133, 0.5), inset 0 0 150px rgba(255,255,255,0.3)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.6), rgba(251,113,133,0.55), rgba(254,205,211,0.5), rgba(255,241,242,0.45))',
              border: '20px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(120px)',
              animation: 'float 0.8s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '700px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 5%, #ffe4e6 10%, #fecdd3 15%, #fda4af 20%, #fb7185 25%, #f43f5e 30%, #e11d48 35%, #be123c 40%, #9f1239 45%, #881337 50%, #7c2d12 55%, #4c0519 60%, #1a0505 65%, #000000 70%, #000000 75%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 250px rgba(255,255,255,1)) drop-shadow(0 0 500px rgba(251,113,133,1)) drop-shadow(0 0 750px rgba(244,63,94,1)) drop-shadow(0 0 1000px rgba(225,29,72,0.9)) drop-shadow(0 0 1250px rgba(190,18,60,0.7)) drop-shadow(0 0 1500px rgba(159,18,57,0.6)) drop-shadow(0 0 1750px rgba(88,19,55,0.5)) drop-shadow(0 0 2000px rgba(0,0,0,0.4))',
                animation: 'pulse 0.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 1) 0%, transparent 80%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 1) 0%, transparent 80%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.95) 0%, transparent 90%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.9) 0%, transparent 80%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.85) 0%, transparent 70%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.8) 0%, transparent 60%), radial-gradient(circle at 60% 40%, rgba(192, 132, 252, 0.75) 0%, transparent 50%), radial-gradient(circle at 25% 50%, rgba(244, 114, 182, 0.7) 0%, transparent 45%), radial-gradient(circle at 75% 25%, rgba(251, 113, 133, 0.65) 0%, transparent 40%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '750px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 150px 350px rgba(192, 132, 252, 1), 0 0 600px rgba(168, 85, 247, 1), 0 0 300px rgba(236, 72, 153, 1), 0 0 200px rgba(232, 121, 249, 1), 0 0 120px rgba(244, 114, 182, 0.9), 0 0 50px rgba(217, 70, 239, 0.8), 0 0 25px rgba(192, 132, 252, 0.7)',
              letterSpacing: '-36px',
              filter: 'drop-shadow(0 0 250px rgba(217, 70, 239, 1)) drop-shadow(0 0 500px rgba(192, 132, 252, 1)) drop-shadow(0 0 750px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 1000px rgba(147, 51, 234, 0.7)) drop-shadow(0 0 1250px rgba(126, 34, 206, 0.6)) drop-shadow(0 0 1500px rgba(88, 28, 135, 0.5)) drop-shadow(0 0 1750px rgba(49, 14, 85, 0.4)) drop-shadow(0 0 2000px rgba(30, 6, 67, 0.3))',
              animation: 'float 1s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.65) 0%, transparent 70%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.6) 0%, transparent 80%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 90%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.55) 0%, transparent 80%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.5) 0%, transparent 70%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.45) 0%, transparent 60%), radial-gradient(circle at 60% 40%, rgba(226, 232, 240, 0.4) 0%, transparent 50%), radial-gradient(circle at 35% 65%, rgba(255,255,255,0.35) 0%, transparent 40%), radial-gradient(circle at 65% 35%, rgba(241, 245, 249, 0.3) 0%, transparent 35%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '750px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 100px 250px rgba(255,255,255, 1), 0 0 350px rgba(226, 232, 240, 1), 0 0 250px rgba(255,255,255, 0.9), 0 0 150px rgba(203, 213, 225, 0.8), 0 0 90px rgba(241, 245, 249, 0.7), 0 0 40px rgba(255,255,255,0.6), 0 0 20px rgba(226, 232, 240, 0.5)',
              letterSpacing: '-36px',
              filter: 'drop-shadow(0 0 250px rgba(255,255,255, 1)) drop-shadow(0 0 500px rgba(226, 232, 240, 0.9)) drop-shadow(0 0 750px rgba(148, 163, 184, 0.8)) drop-shadow(0 0 1000px rgba(71, 85, 105, 0.7)) drop-shadow(0 0 1250px rgba(30, 58, 138, 0.6)) drop-shadow(0 0 1500px rgba(15, 23, 42, 0.5)) drop-shadow(0 0 1750px rgba(2, 6, 23, 0.4)) drop-shadow(0 0 2000px rgba(0, 0, 0, 0.3))',
              animation: 'float 1.5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 550px rgba(0,0,0,0.35), 0 300px 600px rgba(0,0,0, 1), 0 0 500px rgba(0,0,0, 1), 0 0 400px rgba(0,0,0, 0.9), 0 0 300px rgba(0,0,0,0.8), 0 0 250px rgba(0,0,0,0.7), 0 0 200px rgba(0,0,0,0.6), 0 0 150px rgba(0,0,0,0.5), 0 0 100px rgba(0,0,0,0.4), 0 0 50px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 6%, #f8fafc 12%, #f1f5f9 18%, #e2e8f0 24%, #cbd5e1 30%, #94a3b8 36%, #64748b 42%, #475569 48%, #334155 54%, #1e293b 60%, #0f172a 66%, #020617 72%, #000000 78%, #000000 84%, #000000 90%, #000000 100%)',
            border: '44px solid #e2e8f0',
            backdropFilter: 'blur(60px)',
            animation: 'float 2s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '780px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(18px 18px 36px rgba(0,0,0,0.6)) drop-shadow(0 0 120px rgba(0,0,0,0.5)) drop-shadow(0 0 250px rgba(0,0,0,0.4)) drop-shadow(0 0 400px rgba(0,0,0,0.35)) drop-shadow(0 0 550px rgba(0,0,0,0.3)) drop-shadow(0 0 700px rgba(0,0,0,0.25)) drop-shadow(0 0 850px rgba(30, 41, 59, 0.2)) drop-shadow(0 0 1000px rgba(15, 23, 42, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 3s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 6%, #1c1917 12%, #292524 18%, #44403c 24%, #57534e 30%, #78716c 36%, #a8a29e 42%, #d6d3d1 48%, #f5f5f4 54%, #ffffff 60%, #ffffff 66%, #ffffff 72%, #f5f5f4 78%, #d6d3d1 84%, #a8a29e 90%, #78716c 94%, #57534e 97%, #44403c 100%)',
              boxShadow: 'inset 0 0 550px rgba(0,0,0,1), 0 300px 600px rgba(0,0,0,1), 0 0 500px rgba(0,0,0,1), 0 0 400px rgba(0,0,0,1), 0 0 320px rgba(0,0,0,0.95), 0 0 240px rgba(0,0,0,0.9), 0 0 180px rgba(0,0,0,0.8), 0 0 120px rgba(0,0,0,0.7), 0 0 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.6), inset 0 20px 40px rgba(255,255,255,0.5), inset 0 0 150px rgba(255,255,255,0.25), inset 0 0 60px rgba(0,0,0,0.9), inset 0 0 25px rgba(255,255,255,0.12)',
              borderColor: '#d6d3d1',
              borderWidth: '48px'
            }}>
              <div className="badge-main" style={{
                fontSize: '400px',
                letterSpacing: '36px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c, #292524, #1c1917, #0a0a0a, #000000, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '15px 15px 30px rgba(0,0,0,1), 0 0 150px rgba(214, 211, 209, 1), 0 0 100px rgba(255,255,255, 0.8), 0 0 70px rgba(255,255,255,0.7), 0 0 50px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.5), 0 0 15px rgba(214, 211, 209, 0.4), 0 0 8px rgba(255,255,255,0.3)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '110px',
                letterSpacing: '70px',
                textShadow: '12px 12px 24px rgba(0,0,0,1), 0 0 100px rgba(168, 162, 158, 1), 0 0 70px rgba(255,255,255,0.7), 0 0 50px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.5), 0 0 15px rgba(255,255,255,0.4), 0 0 8px rgba(168, 162, 158, 0.3)'
              }}>GRAPHICS</div>
            </div>
          </>
        );

      // TECH & CYBER
      case 'neon-blue':
        return (
          <>
            <div className="noise"></div>
            <div className="neon-ring" style={{
              borderColor: '#3b82f6',
              boxShadow: '0 0 120px #3b82f6, 0 0 250px #3b82f6, 0 0 400px #2563eb, 0 0 550px #1d4ed8, 0 0 700px #1e40af, 0 0 850px #1e3a8a, inset 0 0 120px #3b82f6, inset 0 0 180px #2563eb',
              animation: 'neonPulse 0.6s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 90%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '700px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '12px',
                textShadow: '0 0 100px #3b82f6, 0 0 200px #3b82f6, 0 0 300px #2563eb, 0 0 400px #1d4ed8, 0 0 500px #1e40af, 0 0 600px #1e3a8a, 0 0 700px #1e3a8a, 0 0 800px #172554'
              }}>B</div>
            </div>
          </>
        );
      case 'neon-pink':
        return (
          <>
            <div className="noise"></div>
            <div className="neon-ring" style={{
              borderColor: '#ec4899',
              boxShadow: '0 0 120px #ec4899, 0 0 250px #ec4899, 0 0 400px #db2777, 0 0 550px #be185d, 0 0 700px #9d174d, 0 0 850px #831843, inset 0 0 120px #ec4899, inset 0 0 180px #db2777',
              animation: 'neonPulse 0.6s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 90%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '700px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '12px',
                textShadow: '0 0 100px #ec4899, 0 0 200px #ec4899, 0 0 300px #db2777, 0 0 400px #be185d, 0 0 500px #9d174d, 0 0 600px #831843, 0 0 700px #831843, 0 0 800px #4c0519'
              }}>B</div>
            </div>
          </>
        );
      case 'tech-terminal':
        return (
          <>
            <div className="noise"></div>
            <div className="tech-box" style={{
              borderColor: '#22c55e',
              boxShadow: '0 80px 200px rgba(0,0,0,1), 0 0 150px rgba(34, 197, 94, 0.7), inset 0 0 80px rgba(34, 197, 94, 0.2)',
              padding: '100px 150px',
              background: 'rgba(0, 20, 0, 1)'
            }}>
              <div className="tech-b" style={{
                fontSize: '700px',
                color: '#22c55e',
                textShadow: '0 0 120px #22c55e, 0 0 250px #16a34a, 0 0 400px #15803d, 0 0 550px #166534, 0 0 700px #14532d, 0 0 850px #064e3b',
                letterSpacing: '-12px'
              }}>b</div>
            </div>
          </>
        );
      case 'glitch':
        return (
          <>
            <div className="noise"></div>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '750px',
              fontWeight: '900',
              textShadow: '60px 0 #ff006e, -60px 0 #00f7ff, 30px 30px 0 rgba(0,0,0,0.9), 0 0 250px rgba(255,0,110,1), 0 0 500px rgba(0,247,255,1), 0 0 750px rgba(255,0,110,0.8), 0 0 1000px rgba(0,247,255,0.7), 0 0 1250px rgba(255,0,110,0.6), 0 0 1500px rgba(0,247,255,0.5), 0 0 1750px rgba(255,0,110,0.4)',
              animation: 'glitch 0.02s infinite'
            }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ff006e', opacity: '1', animation: 'glitch2 0.04s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#00f7ff', opacity: '0.95', animation: 'glitch3 0.06s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ffff00', opacity: '0.9', animation: 'glitch4 0.08s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ff00ff', opacity: '0.85', animation: 'glitch5 0.1s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#00ff00', opacity: '0.8', animation: 'glitch6 0.12s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ff6600', opacity: '0.7', animation: 'glitch 0.14s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#0066ff', opacity: '0.65', animation: 'glitch2 0.16s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ff00ff', opacity: '0.6', animation: 'glitch3 0.18s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#00ff00', opacity: '0.55', animation: 'glitch4 0.2s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#ff6600', opacity: '0.5', animation: 'glitch5 0.22s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '750px', fontWeight: '900', color: '#0066ff', opacity: '0.45', animation: 'glitch6 0.24s infinite' }}>bast1qn</div>
          </>
        );
      case 'matrix-code':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="matrix-col" style={{
                left: `${30 + i * 30}px`,
                animationDelay: `${i * 0.1}s`,
                fontSize: '55px',
                opacity: '1',
                textShadow: '0 0 30px #22c55e'
              }}>
                {Array.from({ length: 30 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${j * 0.06}s` }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
            <div className="matrix-text" style={{
              fontSize: '700px',
              padding: '50px 100px',
              borderColor: '#22c55e',
              borderWidth: '6px',
              textShadow: '0 0 60px #22c55e, 0 0 120px #16a34a, 0 0 180px #15803d, 0 0 240px #166534, 0 0 300px #14532d, 0 0 360px #064e3b',
              background: 'rgba(0, 0, 0, 1)',
              boxShadow: '0 0 150px rgba(34, 197, 94, 0.9)'
            }}>b</div>
          </>
        );
      case 'pcb-board':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.7' }}></div>
            <div className="noise"></div>
            <div className="pcb-chip" style={{
              borderColor: '#22c55e',
              boxShadow: '0 80px 200px rgba(0,0,0,1), 0 0 150px rgba(34, 197, 94, 0.8), inset 0 0 80px rgba(34, 197, 94, 0.3)',
              width: '800px',
              height: '500px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '700px',
                color: '#22c55e',
                textShadow: '0 0 100px #22c55e, 0 0 200px #16a34a, 0 0 300px #15803d, 0 0 400px #166534, 0 0 500px #14532d, 0 0 600px #064e3b',
                letterSpacing: '-7px'
              }}>b</div>
            </div>
          </>
        );

      // ELEMENTS & MATERIALS
      case 'luxury-gold':
        return (
          <>
            <div className="lux-border" style={{ opacity: '1' }}></div>
            <div className="lux-border" style={{
              opacity: '0.9',
              transform: 'scale(0.88)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '720px',
              fontWeight: '700',
              background: 'linear-gradient(to bottom, #fff 10%, #fcd34d 16%, #f59e0b 22%, #d97706 28%, #b45309 32%, #92400e 36%, #78350f 40%, #92400e 44%, #b45309 48%, #d97706 52%, #f59e0b 58%, #fcd34d 64%, #fff 70%, #fcd34d 76%, #f59e0b 82%, #d97706 88%, #92400e 94%, #78350f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 120px rgba(251, 191, 36, 1), 0 0 250px rgba(245, 158, 11, 0.8), 0 0 400px rgba(217, 119, 6, 0.7), 0 0 550px rgba(180, 83, 9, 0.6), 0 0 700px rgba(146, 64, 14, 0.5)',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))'
            }}>b</div>
          </>
        );
      case 'chrome-metal':
        return (
          <>
            <div className="chrome-refl" style={{
              animation: 'float 1s ease-in-out infinite',
              background: 'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.25) 50%, transparent 80%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '780px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 6%, #cbd5e1 12%, #94a3b8 18%, #64748b 24%, #475569 30%, #1e293b 36%, #0f172a 40%, #1e293b 44%, #475569 50%, #64748b 56%, #94a3b8 62%, #cbd5e1 68%, #e2e8f0 74%, #f1f5f9 80%, #f8fafc 86%, #ffffff 92%, #f1f5f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 30px 0 rgba(0,0,0,0.8)) drop-shadow(0 0 120px rgba(148, 163, 184, 0.7)) drop-shadow(0 0 250px rgba(203, 213, 225, 0.5))',
              textShadow: '0 0 100px rgba(226, 232, 240, 1), 0 0 200px rgba(148, 163, 184, 0.7), 0 0 300px rgba(100, 116, 139, 0.4)'
            }}>b</div>
          </>
        );
      case 'magma-flare':
        return (
          <>
            <div className="magma-bg" style={{
              opacity: '1',
              background: 'radial-gradient(circle, #fca5a5 0%, #fef3c7 6%, #fef08a 10%, #fcd34d 13%, #fbbf24 16%, #f59e0b 20%, #ef4444 25%, #dc2626 30%, #b91c1c 38%, #7f1d1d 48%, #450a0a 60%, #000 80%, #000 90%)'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '780px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 40px #fca5a5, 0 0 100px #fef08a, 0 0 200px #ef4444, 0 0 300px #dc2626, 0 0 400px #b91c1c, 0 0 500px #7f1d1d, 0 0 600px #450a0a, 0 0 700px #000000',
              background: 'linear-gradient(to top, #fef08a 0%, #fcd34d 8%, #f59e0b 14%, #ef4444 22%, #dc2626 32%, #7f1d1d 42%, #450a0a 54%, #000 68%, #000 80%, #000 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'magmaPulse 0.6s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'ice-crystal':
        return (
          <div style={{
            background: 'radial-gradient(circle, #f0f9ff 0%, #e0f2fe 12%, #bae6fd 24%, #7dd3fc 36%, #38bdf8 48%, #0ea5e9 60%, #0284c7 72%, #0369a1 84%, #075985 96%, #042f2e 100%)'
          }}>
            <div className="ice-crack" style={{ opacity: '0.9' }}></div>
            <div className="ice-text" style={{
              fontSize: '750px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 20px 50px rgba(0,0,0,0.25), 0 0 100px #bae6fd, 0 0 200px #7dd3fc, 0 0 300px #38bdf8, 0 0 400px #0ea5e9, 0 0 500px #0284c7, 0 0 600px #0369a1',
              filter: 'drop-shadow(0 30px 60px rgba(14, 165, 233, 0.5))'
            }}>b</div>
          </div>
        );

      // ART & ABSTRACT
      case 'holo-card':
        return (
          <>
            <div className="noise"></div>
            <div className="holo-circle" style={{
              background: 'linear-gradient(135deg, #f0f 0%, #0ff 16%, #ff0 32%, #f0f 48%, #0ff 64%, #ff0 80%, #f0f 100%)',
              boxShadow: '0 0 150px rgba(255,255,255,0.5), 0 0 300px rgba(255,0,255,0.4), 0 0 450px rgba(0,255,255,0.4), 0 0 600px rgba(255,255,0,0.3), 0 0 750px rgba(255,0,255,0.2)',
              animation: 'holoRotate 1.5s linear infinite',
              width: '850px',
              height: '850px'
            }}>
              <div className="holo-text" style={{
                fontSize: '720px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f0f 0%, #0ff 16%, #ff0 32%, #f0f 48%, #0ff 64%, #ff0 80%, #f0f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pulse 1s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'pop-burst':
        return (
          <div style={{
            background: '#fef08a',
            backgroundImage: 'radial-gradient(#facc15 30%, transparent 30%), radial-gradient(#facc15 30%, transparent 30%)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}>
            <div className="pop-burst" style={{
              width: '1000px',
              height: '1000px',
              boxShadow: '0 50px 100px rgba(0,0,0,0.6), 0 0 150px rgba(239, 68, 68, 0.7), 0 0 250px rgba(239, 68, 68, 0.5), 0 0 350px rgba(239, 68, 68, 0.3), inset 0 0 80px rgba(255,255,255,0.5)'
            }}>
              <div className="pop-text" style={{
                fontSize: '800px',
                color: '#ef4444',
                textShadow: '15px 15px 0 #000, 0 0 100px rgba(239, 68, 68, 1), 0 0 200px rgba(239, 68, 68, 0.7), 0 0 300px rgba(239, 68, 68, 0.5), 0 0 400px rgba(239, 68, 68, 0.3)',
                letterSpacing: '12px',
                transform: 'rotate(-12deg)',
                animation: 'bounce 0.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </div>
        );
      case 'fluid-art':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 15 }).map((_, i) => {
              const configs = [
                { width: '900px', height: '900px', background: '#7c3aed', top: '-200px', left: '-200px' },
                { width: '800px', height: '800px', background: '#db2777', bottom: '-100px', right: '-100px' },
                { width: '700px', height: '700px', background: '#2563eb', top: '250px', left: '250px' },
                { width: '650px', height: '650px', background: '#059669', bottom: '220px', left: '150px' },
                { width: '600px', height: '600px', background: '#dc2626', top: '350px', right: '200px' },
                { width: '550px', height: '550px', background: '#7c3aed', bottom: '300px', right: '300px' },
                { width: '500px', height: '500px', background: '#db2777', top: '150px', right: '350px' },
                { width: '450px', height: '450px', background: '#2563eb', bottom: '150px', left: '350px' },
                { width: '400px', height: '400px', background: '#059669', top: '400px', left: '300px' },
                { width: '350px', height: '350px', background: '#dc2626', bottom: '400px', right: '350px' },
                { width: '300px', height: '300px', background: '#7c3aed', top: '450px', left: '200px' },
                { width: '280px', height: '280px', background: '#db2777', bottom: '450px', right: '400px' },
                { width: '250px', height: '250px', background: '#2563eb', top: '500px', left: '100px' },
                { width: '220px', height: '220px', background: '#dc2626', bottom: '500px', right: '450px' },
                { width: '200px', height: '200px', background: '#7c3aed', top: '550px', left: '50px' }
              ];
              return (
                <div key={i} className="fluid-blob" style={{
                  ...configs[i],
                  position: 'absolute',
                  borderRadius: '50%',
                  filter: 'blur(120px)',
                  opacity: '1',
                  animation: `float ${1.5 + i * 0.2}s ease-in-out infinite`
                }}></div>
              );
            })}
            <div className="fluid-text" style={{
              fontSize: '750px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              textShadow: '0 0 120px rgba(255,255,255,1), 0 0 240px rgba(255,255,255,0.7), 0 0 360px rgba(255,255,255,0.5), 0 0 480px rgba(255,255,255,0.3)'
            }}>b</div>
          </>
        );
      case 'sticker-style':
        return (
          <div style={{
            background: '#3f3f46',
            backgroundImage: 'linear-gradient(30deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a), linear-gradient(150deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a)',
            backgroundSize: '140px 240px'
          }}>
            <div className="sticker-body" style={{
              background: '#fff',
              padding: '100px 180px',
              transform: 'rotate(-18deg)',
              borderRadius: '50px',
              boxShadow: '60px 60px 100px rgba(0,0,0,0.9), 0 0 150px rgba(255,255,255,0.2)'
            }}>
              <div className="sticker-text" style={{
                fontSize: '720px',
                fontWeight: '900',
                color: '#000',
                textShadow: '15px 15px 0 rgba(0,0,0,0.3), 0 0 100px rgba(0,0,0,0.2)'
              }}>b</div>
            </div>
          </div>
        );

      // NEW STYLES
      case 'wood-carved':
        return (
          <div style={{
            background: '#3f2e21',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 20px, transparent 20px, transparent 40px)'
          }}>
            <div className="wood-board" style={{
              width: '1000px',
              height: '800px',
              background: '#5d4037',
              borderColor: '#3e2723',
              borderWidth: '24px',
              boxShadow: 'inset 0 0 250px rgba(0,0,0,1), 0 60px 120px rgba(0,0,0,1), 0 0 200px rgba(93, 64, 55, 0.7), 0 0 250px rgba(62, 39, 35, 0.5), 0 0 300px rgba(41, 26, 14, 0.3)'
            }}>
              <div className="wood-text" style={{
                fontSize: '740px',
                color: '#3e2723',
                textShadow: '6px 6px 15px rgba(255,255,255,0.35), inset 12px 12px 30px rgba(0,0,0,1), 0 0 120px rgba(62, 39, 35, 0.7), 0 0 200px rgba(93, 64, 55, 0.5), 0 0 250px rgba(29, 19, 13, 0.3)'
              }}>b</div>
            </div>
          </div>
        );
      case 'leather-patch':
        return (
          <div style={{ background: '#1c1917' }}>
            <div className="leather-patch" style={{
              width: '900px',
              height: '900px',
              background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
              boxShadow: '0 40px 100px rgba(0,0,0,1), inset 0 0 120px rgba(0,0,0,0.7), 0 0 150px rgba(120, 113, 108, 0.5), 0 0 250px rgba(120, 113, 108, 0.3), 0 0 300px rgba(120, 113, 108, 0.2)',
              borderColor: '#78716c',
              borderWidth: '12px',
              borderStyle: 'dashed'
            }}>
              <div className="leather-text" style={{
                fontSize: '720px',
                color: '#1c1917',
                textShadow: '6px 6px 0 rgba(255,255,255,0.18), -6px -6px 0 rgba(0,0,0,0.9), 0 0 120px rgba(28, 25, 23, 1), 0 0 200px rgba(41, 37, 36, 0.7), 0 0 250px rgba(63, 51, 43, 0.5)'
              }}>b</div>
            </div>
          </div>
        );
      case 'cloud-dream':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="cloud-shape" style={{
                ...{
                  0: { width: '700px', height: '280px', top: '30px', left: '30px' },
                  1: { width: '650px', height: '260px', top: '60px', right: '40px' },
                  2: { width: '600px', height: '240px', bottom: '240px', left: '60px' },
                  3: { width: '550px', height: '220px', bottom: '200px', right: '80px' },
                  4: { width: '500px', height: '200px', top: '240px', left: '240px' },
                  5: { width: '450px', height: '180px', top: '300px', right: '220px' },
                  6: { width: '400px', height: '160px', bottom: '60px', left: '300px' },
                  7: { width: '380px', height: '150px', top: '100px', right: '300px' },
                  8: { width: '360px', height: '140px', bottom: '300px', left: '220px' },
                  9: { width: '340px', height: '130px', top: '340px', right: '240px' },
                  10: { width: '320px', height: '120px', bottom: '40px', right: '340px' },
                  11: { width: '300px', height: '110px', top: '40px', left: '370px' },
                  12: { width: '280px', height: '100px', bottom: '340px', right: '400px' },
                  13: { width: '260px', height: '90px', top: '380px', left: '100px' },
                  14: { width: '240px', height: '80px', bottom: '30px', left: '420px' },
                  15: { width: '220px', height: '70px', top: '420px', right: '100px' },
                  16: { width: '200px', height: '60px', bottom: '380px', right: '440px' },
                  17: { width: '180px', height: '50px', top: '20px', left: '460px' }
                }[i],
                filter: 'blur(40px)',
                opacity: '1',
                animation: `float ${2 + i * 0.15}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="cloud-text" style={{
              fontSize: '780px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 30px 120px rgba(37, 99, 235, 0.7), 0 0 250px rgba(96, 165, 250, 0.6), 0 0 380px rgba(147, 197, 253, 0.5), 0 0 510px rgba(186, 230, 253, 0.4), 0 0 640px rgba(125, 211, 252, 0.3)',
              filter: 'drop-shadow(0 40px 80px rgba(37, 99, 235, 0.6))'
            }}>b</div>
          </>
        );
      case 'graffiti-wall':
        return (
          <div style={{
            background: '#444',
            backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill-rule="evenodd"><g fill="%23222" fill-opacity="0.4"><path d="M0 0h20v20H0V0zm20 20h20v20H20V20z" /></g></g></svg>\')'
          }}>
            <div className="graf-text" style={{
              fontSize: '780px',
              color: '#facc15',
              transform: 'rotate(-20deg)',
              textShadow: '25px 25px 0 #db2777, 50px 50px 0 #000, 0 0 150px rgba(250, 204, 21, 1), 0 0 300px rgba(250, 204, 21, 0.7), 0 0 450px rgba(250, 204, 21, 0.5), 0 0 600px rgba(250, 204, 21, 0.3)',
              WebkitTextStroke: '10px #000',
              filter: 'drop-shadow(12px 12px 25px rgba(0,0,0,0.9))'
            }}>b</div>
            <div className="graf-drip" style={{
              width: '25px',
              height: '150px',
              background: '#facc15',
              bottom: '-100px',
              borderRadius: '12px',
              boxShadow: '0 0 30px rgba(250, 204, 21, 0.8)'
            }}></div>
          </div>
        );
      case 'mosaic-tile':
        return (
          <>
            <div className="noise"></div>
            <div className="mosaic-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(18, 1fr)',
              gap: '10px',
              width: '900px',
              height: '450px',
              opacity: '1'
            }}>
              {Array.from({ length: 350 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9', '#f8fafc'][Math.floor(Math.random() * 9)],
                  borderRadius: '10px',
                  opacity: '1'
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '740px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              letterSpacing: '18px',
              textShadow: '0 0 150px rgba(255,255,255,1), 0 0 300px rgba(255,255,255,0.7), 0 0 450px rgba(255,255,255,0.5), 0 0 600px rgba(255,255,255,0.3)'
            }}>b</div>
          </>
        );
      case 'smoke-fade':
        return (
          <>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="smoke-plume" style={{
                width: '700px',
                height: '700px',
                background: `radial-gradient(circle, ${['#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff'][i]} 0%, transparent 90%)`,
                filter: 'blur(100px)',
                opacity: '1',
                animation: `drift ${4 + i * 1}s infinite`,
                left: `${30 + i * 30}px`,
                top: `${30 + i * 20}px`
              }}></div>
            ))}
            <div className="smoke-text" style={{
              fontSize: '740px',
              fontWeight: '700',
              color: 'transparent',
              background: 'linear-gradient(to right, #ccc, #eee, #fff, #eee, #ddd, #fff, #ccc)',
              WebkitBackgroundClip: 'text',
              filter: 'blur(8px)',
              letterSpacing: '18px',
              textShadow: '0 0 120px rgba(255,255,255,0.8), 0 0 250px rgba(255,255,255,0.6), 0 0 380px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'vaporwave':
        return (
          <div style={{
            background: 'linear-gradient(to bottom, #f9a8d4 0%, #c4b5fd 30%, #a78bfa 60%, #8b5cf6 80%, #7c3aed 95%, #6d28d9 100%)'
          }}>
            <div className="vapor-sun" style={{
              width: '600px',
              height: '600px',
              background: 'linear-gradient(to top, #fbbf24 0%, #f472b6 30%, #c084fc 60%, #a855f7 80%, #7c3aed 95%, #6d28d9 100%)',
              borderRadius: '50%',
              marginBottom: '-300px',
              boxShadow: '0 0 250px rgba(251, 191, 36, 1), 0 0 500px rgba(244, 114, 182, 0.8), 0 0 750px rgba(192, 132, 252, 0.6), 0 0 1000px rgba(168, 85, 247, 0.4), 0 0 1250px rgba(139, 92, 246, 0.3)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '740px',
              color: '#fff',
              textShadow: '12px 12px 0 #000, 0 0 120px rgba(255,255,255, 1), 0 0 250px rgba(192, 132, 252, 0.7), 0 0 400px rgba(192, 132, 252, 0.5), 0 0 550px rgba(168, 85, 247, 0.4), 0 0 700px rgba(139, 92, 246, 0.3)',
              zIndex: '10',
              marginTop: '120px'
            }}>b</div>
          </div>
        );
      case 'retro-rpg':
        return (
          <div style={{
            background: '#4a044e',
            imageRendering: 'pixelated'
          }}>
            <div className="rpg-box" style={{
              background: '#1e293b',
              borderColor: '#fff',
              borderWidth: '20px',
              boxShadow: '0 0 0 20px #000, 0 0 120px rgba(255,255,255,0.5), 0 50px 100px rgba(0,0,0,1), 0 0 200px rgba(255,255,255,0.3)',
              padding: '100px'
            }}>
              <div className="rpg-text" style={{
                fontSize: '740px',
                color: '#fff',
                textShadow: '12px 12px 0 #000, 0 0 100px rgba(255,255,255,0.7), 0 0 200px rgba(255,255,255,0.5), 0 0 300px rgba(255,255,255,0.4), 0 0 400px rgba(255,255,255,0.3)',
                lineHeight: '1'
              }}>b<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror-scream':
        return (
          <>
            <div className="noise" style={{ opacity: '0.25' }}></div>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="horror-scratch" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `repeating-linear-gradient(${90 + i * 10}deg, transparent, transparent ${60 + i * 10}px, rgba(255,0,0,0.2) ${62 + i * 10}px, transparent ${64 + i * 10}px)`,
                pointerEvents: 'none',
                animation: `horrorPulse ${1 + i * 0.3}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="horror-text" style={{
              fontSize: '780px',
              fontWeight: '700',
              color: '#ef4444',
              textShadow: '0 0 60px #7f1d1d, 0 0 120px #991b1b, 0 0 180px #b91c1c, 0 0 250px #dc2626, 0 0 320px rgba(239, 68, 68, 1), 0 0 400px rgba(127, 29, 29, 0.8), 0 0 500px rgba(185, 28, 28, 0.6), 0 0 600px rgba(220, 38, 38, 0.5), 0 0 700px rgba(153, 27, 27, 0.4), 0 0 800px rgba(127, 29, 29, 0.3), 0 0 900px rgba(220, 38, 38, 0.2)',
              letterSpacing: '12px',
              animation: 'horrorPulse 0.8s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'origami-fold':
        return (
          <div style={{
            background: '#fef3c7'
          }}>
            <div className="origami-shape" style={{
              borderLeftWidth: '220px',
              borderRightWidth: '220px',
              borderBottomWidth: '440px',
              borderBottomColor: '#f59e0b',
              filter: 'drop-shadow(0 60px 100px rgba(0,0,0,0.6)) drop-shadow(0 0 120px rgba(251, 191, 36, 0.7)) drop-shadow(0 0 200px rgba(217, 119, 6, 0.5)) drop-shadow(0 0 280px rgba(180, 83, 9, 0.4))'
            }}></div>
            <div className="origami-shape" style={{
              position: 'absolute',
              top: '440px',
              left: '-220px',
              borderLeftWidth: '220px',
              borderRightWidth: '220px',
              borderTopWidth: '440px',
              borderTopColor: '#d97706',
              filter: 'drop-shadow(0 -30px 60px rgba(0,0,0,0.5))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '740px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '6px 6px 0 rgba(255,255,255,0.7), 12px 12px 30px rgba(0,0,0,0.6), 0 0 120px rgba(245, 158, 11, 0.9), 0 0 200px rgba(217, 119, 6, 0.7), 0 0 280px rgba(180, 83, 9, 0.5)'
            }}>b</div>
          </div>
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
