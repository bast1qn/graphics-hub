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
              filter: 'blur(2000px)',
              opacity: '35',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, #312e81, #1e1b4b, #030712, #000000, transparent 97%)',
              animation: 'pulse 0.1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1500px)',
              opacity: '32',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 95%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1000px)',
              opacity: '28',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, transparent 90%)',
              animation: 'float 0.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(700px)',
              opacity: '25',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 85%)',
              animation: 'float 0.8s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(500px)',
              opacity: '22',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, #6366f1, #4f46e5, transparent 80%)',
              animation: 'pulse 0.8s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 800px rgba(255,255,255,0.9), 0 400px 800px rgba(99, 102, 241, 1), 0 0 700px rgba(129, 140, 248, 1), 0 0 600px rgba(99, 102, 241, 1), 0 0 500px rgba(129, 140, 248, 0.95), 0 0 400px rgba(99, 102, 241, 0.9), 0 0 300px rgba(129, 140, 248, 0.85), 0 0 200px rgba(99, 102, 241, 0.8), 0 0 100px rgba(129, 140, 248, 0.7), 0 0 50px rgba(99, 102, 241, 0.6), inset 0 0 200px rgba(255,255,255,0.4)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.8), rgba(167,139,250,0.75), rgba(199,210,254,0.7), rgba(224,231,255,0.65))',
              border: '24px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(200px)',
              animation: 'float 0.4s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '950px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 4%, #f5f3ff 8%, #ede9fe 12%, #e0e7ff 16%, #c7d2fe 20%, #a5b4fc 24%, #818cf8 28%, #6366f1 32%, #4f46e5 36%, #4338ca 40%, #3730a3 44%, #312e81 48%, #1e1b4b 52%, #030712 56%, #000000 60%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 350px rgba(255,255,255,1)) drop-shadow(0 0 700px rgba(129,140,248,1)) drop-shadow(0 0 1050px rgba(99,102,241,1)) drop-shadow(0 0 1400px rgba(79,70,229,0.95)) drop-shadow(0 0 1750px rgba(67,56,202,0.85)) drop-shadow(0 0 2100px rgba(55,48,163,0.75)) drop-shadow(0 0 2450px rgba(30,27,75,0.65)) drop-shadow(0 0 2800px rgba(0,0,0,0.55))',
                animation: 'pulse 0.2s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(2000px)',
              opacity: '35',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000, transparent 97%)',
              animation: 'pulse 0.1s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1500px)',
              opacity: '32',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, transparent 95%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1000px)',
              opacity: '28',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, transparent 90%)',
              animation: 'float 0.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(700px)',
              opacity: '25',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, #be123c, #9f1239, #881337, transparent 85%)',
              animation: 'float 0.8s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(500px)',
              opacity: '22',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, #f43f5e, #e11d48, transparent 80%)',
              animation: 'pulse 0.8s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 800px rgba(255,255,255,0.9), 0 400px 800px rgba(244, 63, 94, 1), 0 0 700px rgba(251, 113, 133, 1), 0 0 600px rgba(244, 63, 94, 1), 0 0 500px rgba(251, 113, 133, 0.95), 0 0 400px rgba(244, 63, 94, 0.9), 0 0 300px rgba(251, 113, 133, 0.85), 0 0 200px rgba(244, 63, 94, 0.8), 0 0 100px rgba(251, 113, 133, 0.7), 0 0 50px rgba(244, 63, 94, 0.6), inset 0 0 200px rgba(255,255,255,0.4)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.8), rgba(251,113,133,0.75), rgba(254,205,211,0.7), rgba(255,241,242,0.65))',
              border: '24px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(200px)',
              animation: 'float 0.4s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '950px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 4%, #ffe4e6 8%, #fecdd3 12%, #fda4af 16%, #fb7185 20%, #f43f5e 24%, #e11d48 28%, #be123c 32%, #9f1239 36%, #881337 40%, #7c2d12 44%, #4c0519 48%, #1a0505 52%, #000000 56%, #000000 60%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 350px rgba(255,255,255,1)) drop-shadow(0 0 700px rgba(251,113,133,1)) drop-shadow(0 0 1050px rgba(244,63,94,1)) drop-shadow(0 0 1400px rgba(225,29,72,0.95)) drop-shadow(0 0 1750px rgba(190,18,60,0.85)) drop-shadow(0 0 2100px rgba(159,18,57,0.75)) drop-shadow(0 0 2450px rgba(88,19,55,0.65)) drop-shadow(0 0 2800px rgba(0,0,0,0.55))',
                animation: 'pulse 0.2s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 1) 0%, transparent 85%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 1) 0%, transparent 85%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.98) 0%, transparent 92%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.95) 0%, transparent 85%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.92) 0%, transparent 80%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.88) 0%, transparent 75%), radial-gradient(circle at 60% 40%, rgba(192, 132, 252, 0.85) 0%, transparent 70%), radial-gradient(circle at 25% 50%, rgba(244, 114, 182, 0.8) 0%, transparent 65%), radial-gradient(circle at 75% 25%, rgba(251, 113, 133, 0.75) 0%, transparent 60%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '950px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 200px 450px rgba(192, 132, 252, 1), 0 0 800px rgba(168, 85, 247, 1), 0 0 400px rgba(236, 72, 153, 1), 0 0 300px rgba(232, 121, 249, 1), 0 0 180px rgba(244, 114, 182, 0.95), 0 0 80px rgba(217, 70, 239, 0.9), 0 0 40px rgba(192, 132, 252, 0.85)',
              letterSpacing: '-45px',
              filter: 'drop-shadow(0 0 350px rgba(217, 70, 239, 1)) drop-shadow(0 0 700px rgba(192, 132, 252, 1)) drop-shadow(0 0 1050px rgba(168, 85, 247, 0.95)) drop-shadow(0 0 1400px rgba(147, 51, 234, 0.85)) drop-shadow(0 0 1750px rgba(126, 34, 206, 0.75)) drop-shadow(0 0 2100px rgba(88, 28, 135, 0.65)) drop-shadow(0 0 2450px rgba(49, 14, 85, 0.55)) drop-shadow(0 0 2800px rgba(30, 6, 67, 0.45))',
              animation: 'float 0.5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.75) 0%, transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.7) 0%, transparent 85%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.65) 0%, transparent 90%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.65) 0%, transparent 85%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.6) 0%, transparent 80%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.55) 0%, transparent 75%), radial-gradient(circle at 60% 40%, rgba(226, 232, 240, 0.5) 0%, transparent 70%), radial-gradient(circle at 35% 65%, rgba(255,255,255,0.45) 0%, transparent 65%), radial-gradient(circle at 65% 35%, rgba(241, 245, 249, 0.4) 0%, transparent 60%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '950px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 150px 350px rgba(255,255,255, 1), 0 0 500px rgba(226, 232, 240, 1), 0 0 350px rgba(255,255,255, 0.95), 0 0 250px rgba(203, 213, 225, 0.9), 0 0 150px rgba(241, 245, 249, 0.85), 0 0 80px rgba(255,255,255,0.8), 0 0 40px rgba(226, 232, 240, 0.75)',
              letterSpacing: '-45px',
              filter: 'drop-shadow(0 0 350px rgba(255,255,255, 1)) drop-shadow(0 0 700px rgba(226, 232, 240, 0.95)) drop-shadow(0 0 1050px rgba(148, 163, 184, 0.9)) drop-shadow(0 0 1400px rgba(71, 85, 105, 0.85)) drop-shadow(0 0 1750px rgba(30, 58, 138, 0.75)) drop-shadow(0 0 2100px rgba(15, 23, 42, 0.65)) drop-shadow(0 0 2450px rgba(2, 6, 23, 0.55)) drop-shadow(0 0 2800px rgba(0, 0, 0, 0.45))',
              animation: 'float 0.8s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 700px rgba(0,0,0,0.45), 0 400px 800px rgba(0,0,0, 1), 0 0 700px rgba(0,0,0, 1), 0 0 600px rgba(0,0,0, 0.95), 0 0 500px rgba(0,0,0,0.9), 0 0 400px rgba(0,0,0,0.85), 0 0 300px rgba(0,0,0,0.8), 0 0 200px rgba(0,0,0,0.7), 0 0 100px rgba(0,0,0,0.6), 0 0 50px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 5%, #f8fafc 10%, #f1f5f9 15%, #e2e8f0 20%, #cbd5e1 25%, #94a3b8 30%, #64748b 35%, #475569 40%, #334155 45%, #1e293b 50%, #0f172a 55%, #020617 60%, #000000 65%, #000000 70%, #000000 75%, #000000 80%, #000000 85%, #000000 90%, #000000 100%)',
            border: '48px solid #e2e8f0',
            backdropFilter: 'blur(80px)',
            animation: 'float 1s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '1050px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(24px 24px 48px rgba(0,0,0,0.7)) drop-shadow(0 0 180px rgba(0,0,0,0.6)) drop-shadow(0 0 350px rgba(0,0,0,0.5)) drop-shadow(0 0 550px rgba(0,0,0,0.45)) drop-shadow(0 0 750px rgba(0,0,0,0.4)) drop-shadow(0 0 950px rgba(0,0,0,0.35)) drop-shadow(0 0 1150px rgba(30, 41, 59, 0.3)) drop-shadow(0 0 1350px rgba(15, 23, 42, 0.25))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 5%, #1c1917 10%, #292524 15%, #44403c 20%, #57534e 25%, #78716c 30%, #a8a29e 35%, #d6d3d1 40%, #f5f5f4 45%, #ffffff 50%, #ffffff 55%, #ffffff 60%, #ffffff 65%, #f5f5f4 70%, #d6d3d1 75%, #a8a29e 80%, #78716c 85%, #57534e 90%, #44403c 95%, #292524 100%)',
              boxShadow: 'inset 0 0 700px rgba(0,0,0,1), 0 400px 800px rgba(0,0,0,1), 0 0 700px rgba(0,0,0,1), 0 0 600px rgba(0,0,0,1), 0 0 500px rgba(0,0,0,1), 0 0 400px rgba(0,0,0,0.98), 0 0 300px rgba(0,0,0,0.95), 0 0 200px rgba(0,0,0,0.9), 0 0 100px rgba(0,0,0,0.85), 0 0 50px rgba(0,0,0,0.8), inset 0 0 60px rgba(255,255,255,0.7), inset 0 30px 60px rgba(255,255,255,0.6), inset 0 0 200px rgba(255,255,255,0.3), inset 0 0 80px rgba(0,0,0,0.95), inset 0 0 40px rgba(255,255,255,0.15)',
              borderColor: '#d6d3d1',
              borderWidth: '52px'
            }}>
              <div className="badge-main" style={{
                fontSize: '480px',
                letterSpacing: '44px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c, #292524, #1c1917, #0a0a0a, #000000, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '20px 20px 40px rgba(0,0,0,1), 0 0 200px rgba(214, 211, 209, 1), 0 0 150px rgba(255,255,255, 0.9), 0 0 100px rgba(255,255,255,0.85), 0 0 80px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.75), 0 0 40px rgba(214, 211, 209, 0.7), 0 0 20px rgba(255,255,255,0.65)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '140px',
                letterSpacing: '80px',
                textShadow: '18px 18px 36px rgba(0,0,0,1), 0 0 150px rgba(168, 162, 158, 1), 0 0 100px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.75), 0 0 60px rgba(255,255,255,0.7), 0 0 40px rgba(255,255,255,0.65), 0 0 20px rgba(168, 162, 158, 0.6)'
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
              boxShadow: '0 0 180px #3b82f6, 0 0 350px #3b82f6, 0 0 520px #2563eb, 0 0 690px #1d4ed8, 0 0 860px #1e40af, 0 0 1030px #1e3a8a, 0 0 1200px #172554, inset 0 0 180px #3b82f6, inset 0 0 250px #2563eb',
              animation: 'neonPulse 0.3s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 92%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '950px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '18px',
                textShadow: '0 0 180px #3b82f6, 0 0 350px #3b82f6, 0 0 520px #2563eb, 0 0 690px #1d4ed8, 0 0 860px #1e40af, 0 0 1030px #1e3a8a, 0 0 1200px #1e3a8a, 0 0 1370px #172554, 0 0 1540px #172554'
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
              boxShadow: '0 0 180px #ec4899, 0 0 350px #ec4899, 0 0 520px #db2777, 0 0 690px #be185d, 0 0 860px #9d174d, 0 0 1030px #831843, 0 0 1200px #4c0519, inset 0 0 180px #ec4899, inset 0 0 250px #db2777',
              animation: 'neonPulse 0.3s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.5) 0%, transparent 92%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '950px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '18px',
                textShadow: '0 0 180px #ec4899, 0 0 350px #ec4899, 0 0 520px #db2777, 0 0 690px #be185d, 0 0 860px #9d174d, 0 0 1030px #831843, 0 0 1200px #831843, 0 0 1370px #4c0519, 0 0 1540px #4c0519'
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
              boxShadow: '0 120px 280px rgba(0,0,0,1), 0 0 220px rgba(34, 197, 94, 0.8), inset 0 0 120px rgba(34, 197, 94, 0.25)',
              padding: '140px 200px',
              background: 'rgba(0, 20, 0, 1)'
            }}>
              <div className="tech-b" style={{
                fontSize: '950px',
                color: '#22c55e',
                textShadow: '0 0 180px #22c55e, 0 0 350px #16a34a, 0 0 520px #15803d, 0 0 690px #166534, 0 0 860px #14532d, 0 0 1030px #064e3b',
                letterSpacing: '-18px'
              }}>b</div>
            </div>
          </>
        );
      case 'glitch':
        return (
          <>
            <div className="noise"></div>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '950px',
              fontWeight: '900',
              textShadow: '80px 0 #ff006e, -80px 0 #00f7ff, 40px 40px 0 rgba(0,0,0,0.95), 0 0 350px rgba(255,0,110,1), 0 0 700px rgba(0,247,255,1), 0 0 1050px rgba(255,0,110,0.9), 0 0 1400px rgba(0,247,255,0.85), 0 0 1750px rgba(255,0,110,0.8), 0 0 2100px rgba(0,247,255,0.75), 0 0 2450px rgba(255,0,110,0.7), 0 0 2800px rgba(0,247,255,0.65), 0 0 3150px rgba(255,0,110,0.6)',
              animation: 'glitch 0.01s infinite'
            }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff006e', opacity: '1', animation: 'glitch2 0.02s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#00f7ff', opacity: '0.98', animation: 'glitch3 0.03s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ffff00', opacity: '0.96', animation: 'glitch4 0.04s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff00ff', opacity: '0.94', animation: 'glitch5 0.05s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#00ff00', opacity: '0.92', animation: 'glitch6 0.06s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff6600', opacity: '0.9', animation: 'glitch 0.07s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#0066ff', opacity: '0.88', animation: 'glitch2 0.08s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff00ff', opacity: '0.86', animation: 'glitch3 0.09s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#00ff00', opacity: '0.84', animation: 'glitch4 0.1s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff6600', opacity: '0.82', animation: 'glitch5 0.11s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#0066ff', opacity: '0.8', animation: 'glitch6 0.12s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ffff00', opacity: '0.78', animation: 'glitch 0.13s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#ff00ff', opacity: '0.76', animation: 'glitch2 0.14s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '950px', fontWeight: '900', color: '#00ff00', opacity: '0.74', animation: 'glitch3 0.15s infinite' }}>bast1qn</div>
          </>
        );
      case 'matrix-code':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="matrix-col" style={{
                left: `${30 + i * 28}px`,
                animationDelay: `${i * 0.08}s`,
                fontSize: '65px',
                opacity: '1',
                textShadow: '0 0 40px #22c55e'
              }}>
                {Array.from({ length: 35 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${j * 0.05}s` }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
            <div className="matrix-text" style={{
              fontSize: '950px',
              padding: '70px 130px',
              borderColor: '#22c55e',
              borderWidth: '8px',
              textShadow: '0 0 90px #22c55e, 0 0 180px #16a34a, 0 0 270px #15803d, 0 0 360px #166534, 0 0 450px #14532d, 0 0 540px #064e3b',
              background: 'rgba(0, 0, 0, 1)',
              boxShadow: '0 0 220px rgba(34, 197, 94, 0.95)'
            }}>b</div>
          </>
        );
      case 'pcb-board':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.85' }}></div>
            <div className="noise"></div>
            <div className="pcb-chip" style={{
              borderColor: '#22c55e',
              boxShadow: '0 120px 280px rgba(0,0,0,1), 0 0 220px rgba(34, 197, 94, 0.9), inset 0 0 120px rgba(34, 197, 94, 0.35)',
              width: '950px',
              height: '650px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '950px',
                color: '#22c55e',
                textShadow: '0 0 150px #22c55e, 0 0 300px #16a34a, 0 0 450px #15803d, 0 0 600px #166534, 0 0 750px #14532d, 0 0 900px #064e3b',
                letterSpacing: '-9px'
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
              opacity: '0.95',
              transform: 'scale(0.9)',
              animation: 'pulse 0.8s ease-in-out infinite'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '950px',
              fontWeight: '700',
              background: 'linear-gradient(to bottom, #fff 8%, #fcd34d 12%, #f59e0b 16%, #d97706 20%, #b45309 24%, #92400e 28%, #78350f 32%, #92400e 36%, #b45309 40%, #d97706 44%, #f59e0b 48%, #fcd34d 52%, #fff 56%, #fcd34d 60%, #f59e0b 64%, #d97706 68%, #92400e 72%, #78350f 76%, #92400e 80%, #b45309 84%, #d97706 88%, #f59e0b 92%, #fcd34d 96%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 180px rgba(251, 191, 36, 1), 0 0 350px rgba(245, 158, 11, 0.9), 0 0 520px rgba(217, 119, 6, 0.8), 0 0 690px rgba(180, 83, 9, 0.7), 0 0 860px rgba(146, 64, 14, 0.6)',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))'
            }}>b</div>
          </>
        );
      case 'chrome-metal':
        return (
          <>
            <div className="chrome-refl" style={{
              animation: 'float 0.5s ease-in-out infinite',
              background: 'linear-gradient(45deg, transparent 15%, rgba(255,255,255,0.35) 50%, transparent 85%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '1050px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 5%, #cbd5e1 10%, #94a3b8 15%, #64748b 20%, #475569 25%, #1e293b 30%, #0f172a 35%, #1e293b 40%, #475569 45%, #64748b 50%, #94a3b8 55%, #cbd5e1 60%, #e2e8f0 65%, #f1f5f9 70%, #f8fafc 75%, #ffffff 80%, #f8fafc 85%, #f1f5f9 90%, #e2e8f0 95%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 40px 0 rgba(0,0,0,0.9)) drop-shadow(0 0 180px rgba(148, 163, 184, 0.8)) drop-shadow(0 0 350px rgba(203, 213, 225, 0.7)) drop-shadow(0 0 520px rgba(148, 163, 184, 0.6)) drop-shadow(0 0 690px rgba(100, 116, 139, 0.5))',
              textShadow: '0 0 150px rgba(226, 232, 240, 1), 0 0 300px rgba(148, 163, 184, 0.8), 0 0 450px rgba(100, 116, 139, 0.6)'
            }}>b</div>
          </>
        );
      case 'magma-flare':
        return (
          <>
            <div className="magma-bg" style={{
              opacity: '1',
              background: 'radial-gradient(circle, #fca5a5 0%, #fef3c7 5%, #fef08a 8%, #fcd34d 11%, #fbbf24 14%, #f59e0b 18%, #ef4444 22%, #dc2626 28%, #b91c1c 35%, #7f1d1d 45%, #450a0a 58%, #000 78%, #000 88%)'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '1050px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 60px #fca5a5, 0 0 150px #fef08a, 0 0 300px #ef4444, 0 0 450px #dc2626, 0 0 600px #b91c1c, 0 0 750px #7f1d1d, 0 0 900px #450a0a, 0 0 1050px #000000',
              background: 'linear-gradient(to top, #fef08a 0%, #fcd34d 6%, #f59e0b 12%, #ef4444 18%, #dc2626 28%, #7f1d1d 38%, #450a0a 50%, #000 65%, #000 78%, #000 88%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'magmaPulse 0.3s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'ice-crystal':
        return (
          <div style={{
            background: 'radial-gradient(circle, #f0f9ff 0%, #e0f2fe 10%, #bae6fd 20%, #7dd3fc 30%, #38bdf8 40%, #0ea5e9 50%, #0284c7 60%, #0369a1 70%, #075985 80%, #042f2e 90%)'
          }}>
            <div className="ice-crack" style={{ opacity: '0.95' }}></div>
            <div className="ice-text" style={{
              fontSize: '950px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 30px 70px rgba(0,0,0,0.3), 0 0 150px #bae6fd, 0 0 300px #7dd3fc, 0 0 450px #38bdf8, 0 0 600px #0ea5e9, 0 0 750px #0284c7, 0 0 900px #0369a1',
              filter: 'drop-shadow(0 40px 80px rgba(14, 165, 233, 0.6))'
            }}>b</div>
          </div>
        );

      // ART & ABSTRACT
      case 'holo-card':
        return (
          <>
            <div className="noise"></div>
            <div className="holo-circle" style={{
              background: 'linear-gradient(135deg, #f0f 0%, #0ff 12%, #ff0 24%, #f0f 36%, #0ff 48%, #ff0 60%, #f0f 72%, #0ff 84%, #ff0 100%)',
              boxShadow: '0 0 220px rgba(255,255,255,0.6), 0 0 450px rgba(255,0,255,0.5), 0 0 680px rgba(0,255,255,0.5), 0 0 910px rgba(255,255,0,0.4), 0 0 1140px rgba(255,0,255,0.3), 0 0 1370px rgba(0,255,255,0.2)',
              animation: 'holoRotate 0.8s linear infinite',
              width: '950px',
              height: '950px'
            }}>
              <div className="holo-text" style={{
                fontSize: '950px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f0f 0%, #0ff 12%, #ff0 24%, #f0f 36%, #0ff 48%, #ff0 60%, #f0f 72%, #0ff 84%, #ff0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pulse 0.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'pop-burst':
        return (
          <div style={{
            background: '#fef08a',
            backgroundImage: 'radial-gradient(#facc15 25%, transparent 25%), radial-gradient(#facc15 25%, transparent 25%)',
            backgroundSize: '35px 35px',
            backgroundPosition: '0 0, 17px 17px'
          }}>
            <div className="pop-burst" style={{
              width: '1200px',
              height: '1200px',
              boxShadow: '0 70px 140px rgba(0,0,0,0.7), 0 0 220px rgba(239, 68, 68, 0.8), 0 0 350px rgba(239, 68, 68, 0.6), 0 0 480px rgba(239, 68, 68, 0.4), inset 0 0 120px rgba(255,255,255,0.6)'
            }}>
              <div className="pop-text" style={{
                fontSize: '1050px',
                color: '#ef4444',
                textShadow: '20px 20px 0 #000, 0 0 150px rgba(239, 68, 68, 1), 0 0 300px rgba(239, 68, 68, 0.8), 0 0 450px rgba(239, 68, 68, 0.6), 0 0 600px rgba(239, 68, 68, 0.4)',
                letterSpacing: '18px',
                transform: 'rotate(-12deg)',
                animation: 'bounce 0.3s ease-in-out infinite'
              }}>b</div>
            </div>
          </div>
        );
      case 'fluid-art':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 18 }).map((_, i) => {
              const configs = [
                { width: '1050px', height: '1050px', background: '#7c3aed', top: '-250px', left: '-250px' },
                { width: '950px', height: '950px', background: '#db2777', bottom: '-120px', right: '-120px' },
                { width: '850px', height: '850px', background: '#2563eb', top: '300px', left: '300px' },
                { width: '750px', height: '750px', background: '#059669', bottom: '270px', left: '180px' },
                { width: '700px', height: '700px', background: '#dc2626', top: '420px', right: '240px' },
                { width: '650px', height: '650px', background: '#7c3aed', bottom: '360px', right: '360px' },
                { width: '600px', height: '600px', background: '#db2777', top: '180px', right: '420px' },
                { width: '550px', height: '550px', background: '#2563eb', bottom: '180px', left: '420px' },
                { width: '500px', height: '500px', background: '#059669', top: '480px', left: '360px' },
                { width: '450px', height: '450px', background: '#dc2626', bottom: '480px', right: '420px' },
                { width: '400px', height: '400px', background: '#7c3aed', top: '540px', left: '240px' },
                { width: '380px', height: '380px', background: '#db2777', bottom: '540px', right: '480px' },
                { width: '350px', height: '350px', background: '#2563eb', top: '600px', left: '120px' },
                { width: '320px', height: '320px', background: '#dc2626', bottom: '600px', right: '540px' },
                { width: '300px', height: '300px', background: '#7c3aed', top: '660px', left: '60px' },
                { width: '280px', height: '280px', background: '#059669', bottom: '660px', right: '600px' },
                { width: '260px', height: '260px', background: '#db2777', top: '720px', left: '0px' },
                { width: '240px', height: '240px', background: '#2563eb', bottom: '720px', right: '660px' }
              ];
              return (
                <div key={i} className="fluid-blob" style={{
                  ...configs[i],
                  position: 'absolute',
                  borderRadius: '50%',
                  filter: 'blur(150px)',
                  opacity: '1',
                  animation: `float ${1 + i * 0.15}s ease-in-out infinite`
                }}></div>
              );
            })}
            <div className="fluid-text" style={{
              fontSize: '950px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              textShadow: '0 0 180px rgba(255,255,255,1), 0 0 360px rgba(255,255,255,0.8), 0 0 540px rgba(255,255,255,0.6), 0 0 720px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'sticker-style':
        return (
          <div style={{
            background: '#3f3f46',
            backgroundImage: 'linear-gradient(30deg, #27272a 10%, transparent 10.5%, transparent 89.5%, #27272a 89.5%, #27272a), linear-gradient(150deg, #27272a 10%, transparent 10.5%, transparent 89.5%, #27272a 89.5%, #27272a)',
            backgroundSize: '120px 200px'
          }}>
            <div className="sticker-body" style={{
              background: '#fff',
              padding: '130px 220px',
              transform: 'rotate(-18deg)',
              borderRadius: '70px',
              boxShadow: '80px 80px 140px rgba(0,0,0,0.95), 0 0 220px rgba(255,255,255,0.25)'
            }}>
              <div className="sticker-text" style={{
                fontSize: '950px',
                fontWeight: '900',
                color: '#000',
                textShadow: '20px 20px 0 rgba(0,0,0,0.35), 0 0 150px rgba(0,0,0,0.25)'
              }}>b</div>
            </div>
          </div>
        );

      // NEW STYLES
      case 'wood-carved':
        return (
          <div style={{
            background: '#3f2e21',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 15px, transparent 15px, transparent 30px)'
          }}>
            <div className="wood-board" style={{
              width: '1200px',
              height: '950px',
              background: '#5d4037',
              borderColor: '#3e2723',
              borderWidth: '28px',
              boxShadow: 'inset 0 0 350px rgba(0,0,0,1), 0 80px 160px rgba(0,0,0,1), 0 0 280px rgba(93, 64, 55, 0.8), 0 0 350px rgba(62, 39, 35, 0.6), 0 0 420px rgba(41, 26, 14, 0.4)'
            }}>
              <div className="wood-text" style={{
                fontSize: '950px',
                color: '#3e2723',
                textShadow: '8px 8px 20px rgba(255,255,255,0.4), inset 16px 16px 40px rgba(0,0,0,1), 0 0 180px rgba(62, 39, 35, 0.8), 0 0 280px rgba(93, 64, 55, 0.6), 0 0 350px rgba(29, 19, 13, 0.4)'
              }}>b</div>
            </div>
          </div>
        );
      case 'leather-patch':
        return (
          <div style={{ background: '#1c1917' }}>
            <div className="leather-patch" style={{
              width: '1050px',
              height: '1050px',
              background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
              boxShadow: '0 60px 140px rgba(0,0,0,1), inset 0 0 180px rgba(0,0,0,0.8), 0 0 220px rgba(120, 113, 108, 0.6), 0 0 350px rgba(120, 113, 108, 0.4), 0 0 420px rgba(120, 113, 108, 0.3)',
              borderColor: '#78716c',
              borderWidth: '16px',
              borderStyle: 'dashed'
            }}>
              <div className="leather-text" style={{
                fontSize: '950px',
                color: '#1c1917',
                textShadow: '8px 8px 0 rgba(255,255,255,0.2), -8px -8px 0 rgba(0,0,0,0.95), 0 0 180px rgba(28, 25, 23, 1), 0 0 280px rgba(41, 37, 36, 0.8), 0 0 350px rgba(63, 51, 43, 0.6)'
              }}>b</div>
            </div>
          </div>
        );
      case 'cloud-dream':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="cloud-shape" style={{
                ...{
                  0: { width: '800px', height: '320px', top: '20px', left: '20px' },
                  1: { width: '750px', height: '300px', top: '50px', right: '30px' },
                  2: { width: '700px', height: '280px', bottom: '280px', left: '50px' },
                  3: { width: '650px', height: '260px', bottom: '240px', right: '70px' },
                  4: { width: '600px', height: '240px', top: '280px', left: '280px' },
                  5: { width: '550px', height: '220px', top: '340px', right: '260px' },
                  6: { width: '500px', height: '200px', bottom: '50px', left: '340px' },
                  7: { width: '480px', height: '190px', top: '80px', right: '340px' },
                  8: { width: '460px', height: '180px', bottom: '340px', left: '260px' },
                  9: { width: '440px', height: '170px', top: '380px', right: '280px' },
                  10: { width: '420px', height: '160px', bottom: '30px', right: '380px' },
                  11: { width: '400px', height: '150px', top: '30px', left: '420px' },
                  12: { width: '380px', height: '140px', bottom: '380px', right: '440px' },
                  13: { width: '360px', height: '130px', top: '420px', left: '120px' },
                  14: { width: '340px', height: '120px', bottom: '20px', left: '460px' },
                  15: { width: '320px', height: '110px', top: '460px', right: '120px' },
                  16: { width: '300px', height: '100px', bottom: '420px', right: '480px' },
                  17: { width: '280px', height: '90px', top: '10px', left: '500px' },
                  18: { width: '260px', height: '80px', bottom: '460px', right: '520px' },
                  19: { width: '240px', height: '70px', top: '500px', left: '0px' }
                }[i],
                filter: 'blur(50px)',
                opacity: '1',
                animation: `float ${1.5 + i * 0.12}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="cloud-text" style={{
              fontSize: '1050px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 40px 160px rgba(37, 99, 235, 0.8), 0 0 350px rgba(96, 165, 250, 0.7), 0 0 540px rgba(147, 197, 253, 0.6), 0 0 730px rgba(186, 230, 253, 0.5), 0 0 920px rgba(125, 211, 252, 0.4)',
              filter: 'drop-shadow(0 60px 120px rgba(37, 99, 235, 0.7))'
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
              fontSize: '1050px',
              color: '#facc15',
              transform: 'rotate(-20deg)',
              textShadow: '35px 35px 0 #db2777, 70px 70px 0 #000, 0 0 220px rgba(250, 204, 21, 1), 0 0 440px rgba(250, 204, 21, 0.8), 0 0 660px rgba(250, 204, 21, 0.6), 0 0 880px rgba(250, 204, 21, 0.4)',
              WebkitTextStroke: '14px #000',
              filter: 'drop-shadow(18px 18px 36px rgba(0,0,0,0.95))'
            }}>b</div>
            <div className="graf-drip" style={{
              width: '35px',
              height: '220px',
              background: '#facc15',
              bottom: '-150px',
              borderRadius: '18px',
              boxShadow: '0 0 50px rgba(250, 204, 21, 0.9)'
            }}></div>
          </div>
        );
      case 'mosaic-tile':
        return (
          <>
            <div className="noise"></div>
            <div className="mosaic-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(20, 1fr)',
              gap: '12px',
              width: '1050px',
              height: '500px',
              opacity: '1'
            }}>
              {Array.from({ length: 420 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9', '#f8fafc'][Math.floor(Math.random() * 9)],
                  borderRadius: '12px',
                  opacity: '1'
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '950px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              letterSpacing: '24px',
              textShadow: '0 0 220px rgba(255,255,255,1), 0 0 440px rgba(255,255,255,0.8), 0 0 660px rgba(255,255,255,0.6), 0 0 880px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'smoke-fade':
        return (
          <>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="smoke-plume" style={{
                width: '850px',
                height: '850px',
                background: `radial-gradient(circle, ${['#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff', '#f8f8f8', '#f0f0f0'][i]} 0%, transparent 92%)`,
                filter: 'blur(120px)',
                opacity: '1',
                animation: `drift ${3 + i * 0.8}s infinite`,
                left: `${25 + i * 25}px`,
                top: `${25 + i * 18}px`
              }}></div>
            ))}
            <div className="smoke-text" style={{
              fontSize: '950px',
              fontWeight: '700',
              color: 'transparent',
              background: 'linear-gradient(to right, #ccc, #eee, #fff, #eee, #ddd, #fff, #ccc)',
              WebkitBackgroundClip: 'text',
              filter: 'blur(10px)',
              letterSpacing: '24px',
              textShadow: '0 0 180px rgba(255,255,255,0.9), 0 0 350px rgba(255,255,255,0.7), 0 0 520px rgba(255,255,255,0.5)'
            }}>b</div>
          </>
        );
      case 'vaporwave':
        return (
          <div style={{
            background: 'linear-gradient(to bottom, #f9a8d4 0%, #c4b5fd 25%, #a78bfa 50%, #8b5cf6 70%, #7c3aed 85%, #6d28d9 95%, #5b21b6 100%)'
          }}>
            <div className="vapor-sun" style={{
              width: '750px',
              height: '750px',
              background: 'linear-gradient(to top, #fbbf24 0%, #f472b6 25%, #c084fc 50%, #a855f7 70%, #7c3aed 85%, #6d28d9 95%, #5b21b6 100%)',
              borderRadius: '50%',
              marginBottom: '-380px',
              boxShadow: '0 0 350px rgba(251, 191, 36, 1), 0 0 700px rgba(244, 114, 182, 0.9), 0 0 1050px rgba(192, 132, 252, 0.8), 0 0 1400px rgba(168, 85, 247, 0.7), 0 0 1750px rgba(139, 92, 246, 0.6), 0 0 2100px rgba(124, 58, 237, 0.5)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '950px',
              color: '#fff',
              textShadow: '18px 18px 0 #000, 0 0 180px rgba(255,255,255, 1), 0 0 350px rgba(192, 132, 252, 0.8), 0 0 520px rgba(192, 132, 252, 0.6), 0 0 690px rgba(168, 85, 247, 0.5), 0 0 860px rgba(139, 92, 246, 0.4), 0 0 1030px rgba(124, 58, 237, 0.3)',
              zIndex: '10',
              marginTop: '150px'
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
              borderWidth: '28px',
              boxShadow: '0 0 0 28px #000, 0 0 180px rgba(255,255,255,0.6), 0 70px 140px rgba(0,0,0,1), 0 0 280px rgba(255,255,255,0.4)',
              padding: '140px'
            }}>
              <div className="rpg-text" style={{
                fontSize: '950px',
                color: '#fff',
                textShadow: '18px 18px 0 #000, 0 0 150px rgba(255,255,255,0.8), 0 0 300px rgba(255,255,255,0.6), 0 0 450px rgba(255,255,255,0.5), 0 0 600px rgba(255,255,255,0.4), 0 0 750px rgba(255,255,255,0.3)',
                lineHeight: '1'
              }}>b<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror-scream':
        return (
          <>
            <div className="noise" style={{ opacity: '0.3' }}></div>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="horror-scratch" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `repeating-linear-gradient(${90 + i * 8}deg, transparent, transparent ${50 + i * 8}px, rgba(255,0,0,0.25) ${52 + i * 8}px, transparent ${54 + i * 8}px)`,
                pointerEvents: 'none',
                animation: `horrorPulse ${0.8 + i * 0.25}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="horror-text" style={{
              fontSize: '1050px',
              fontWeight: '700',
              color: '#ef4444',
              textShadow: '0 0 90px #7f1d1d, 0 0 180px #991b1b, 0 0 270px #b91c1c, 0 0 360px #dc2626, 0 0 450px rgba(239, 68, 68, 1), 0 0 540px rgba(127, 29, 29, 0.9), 0 0 630px rgba(185, 28, 28, 0.8), 0 0 720px rgba(220, 38, 38, 0.7), 0 0 810px rgba(153, 27, 27, 0.6), 0 0 900px rgba(127, 29, 29, 0.5), 0 0 990px rgba(220, 38, 38, 0.4), 0 0 1080px rgba(153, 27, 27, 0.3), 0 0 1170px rgba(220, 38, 38, 0.25)',
              letterSpacing: '18px',
              animation: 'horrorPulse 0.4s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'origami-fold':
        return (
          <div style={{
            background: '#fef3c7'
          }}>
            <div className="origami-shape" style={{
              borderLeftWidth: '280px',
              borderRightWidth: '280px',
              borderBottomWidth: '560px',
              borderBottomColor: '#f59e0b',
              filter: 'drop-shadow(0 80px 140px rgba(0,0,0,0.7)) drop-shadow(0 0 180px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 280px rgba(217, 119, 6, 0.6)) drop-shadow(0 0 380px rgba(180, 83, 9, 0.5)) drop-shadow(0 0 480px rgba(146, 64, 14, 0.4))'
            }}></div>
            <div className="origami-shape" style={{
              position: 'absolute',
              top: '560px',
              left: '-280px',
              borderLeftWidth: '280px',
              borderRightWidth: '280px',
              borderTopWidth: '560px',
              borderTopColor: '#d97706',
              filter: 'drop-shadow(0 -40px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 120px rgba(217, 119, 6, 0.7))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '950px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '8px 8px 0 rgba(255,255,255,0.8), 16px 16px 40px rgba(0,0,0,0.7), 0 0 180px rgba(245, 158, 11, 0.95), 0 0 280px rgba(217, 119, 6, 0.8), 0 0 380px rgba(180, 83, 9, 0.6)'
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
