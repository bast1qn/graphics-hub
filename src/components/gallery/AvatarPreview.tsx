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
              filter: 'blur(900px)',
              opacity: '12',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, #312e81, #1e1b4b, #030712, transparent 90%)',
              animation: 'pulse 0.3s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(450px)',
              opacity: '10',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, transparent 80%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(250px)',
              opacity: '8',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 70%)',
              animation: 'float 1.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '6',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, #6366f1, #4f46e5, transparent 60%)',
              animation: 'float 2s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '4',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, #6366f1, #4f46e5, transparent 50%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 500px rgba(255,255,255,0.6), 0 250px 500px rgba(99, 102, 241, 1), 0 0 400px rgba(129, 140, 248, 1), 0 0 300px rgba(99, 102, 241, 0.9), 0 0 200px rgba(129, 140, 248, 0.8), 0 0 150px rgba(99, 102, 241, 0.7), 0 0 100px rgba(129, 140, 248, 0.6), 0 0 50px rgba(99, 102, 241, 0.5), 0 0 30px rgba(129, 140, 248, 0.4), inset 0 0 120px rgba(255,255,255,0.25)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.5), rgba(167,139,250,0.45), rgba(199,210,254,0.4), rgba(224,231,255,0.35))',
              border: '16px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(100px)',
              animation: 'float 1s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '600px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 6%, #f5f3ff 12%, #ede9fe 18%, #e0e7ff 24%, #c7d2fe 30%, #a5b4fc 36%, #818cf8 42%, #6366f1 48%, #4f46e5 54%, #4338ca 60%, #3730a3 66%, #312e81 72%, #1e1b4b 78%, #030712 84%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 200px rgba(255,255,255,1)) drop-shadow(0 0 400px rgba(129,140,248,1)) drop-shadow(0 0 600px rgba(99,102,241,1)) drop-shadow(0 0 800px rgba(79,70,229,0.8)) drop-shadow(0 0 1000px rgba(67,56,202,0.6)) drop-shadow(0 0 1200px rgba(55,48,163,0.5)) drop-shadow(0 0 1400px rgba(30,27,75,0.4)) drop-shadow(0 0 1600px rgba(0,0,0,0.3))',
                animation: 'pulse 0.7s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(900px)',
              opacity: '12',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, transparent 90%)',
              animation: 'pulse 0.3s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(450px)',
              opacity: '10',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, transparent 80%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(250px)',
              opacity: '8',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, #e11d48, #be123c, transparent 70%)',
              animation: 'float 1.5s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(150px)',
              opacity: '6',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, #be123c, #9f1239, transparent 60%)',
              animation: 'float 2s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(100px)',
              opacity: '4',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, #f43f5e, #e11d48, transparent 50%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 500px rgba(255,255,255,0.6), 0 250px 500px rgba(244, 63, 94, 1), 0 0 400px rgba(251, 113, 133, 1), 0 0 300px rgba(244, 63, 94, 0.9), 0 0 200px rgba(251, 113, 133, 0.8), 0 0 150px rgba(244, 63, 94, 0.7), 0 0 100px rgba(251, 113, 133, 0.6), 0 0 50px rgba(244, 63, 94, 0.5), 0 0 30px rgba(251, 113, 133, 0.4), inset 0 0 120px rgba(255,255,255,0.25)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.5), rgba(251,113,133,0.45), rgba(254,205,211,0.4), rgba(255,241,242,0.35))',
              border: '16px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(100px)',
              animation: 'float 1s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '600px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 6%, #ffe4e6 12%, #fecdd3 18%, #fda4af 24%, #fb7185 30%, #f43f5e 36%, #e11d48 42%, #be123c 48%, #9f1239 54%, #881337 60%, #7c2d12 66%, #4c0519 72%, #1a0505 78%, #000000 84%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 200px rgba(255,255,255,1)) drop-shadow(0 0 400px rgba(251,113,133,1)) drop-shadow(0 0 600px rgba(244,63,94,1)) drop-shadow(0 0 800px rgba(225,29,72,0.8)) drop-shadow(0 0 1000px rgba(190,18,60,0.6)) drop-shadow(0 0 1200px rgba(159,18,57,0.5)) drop-shadow(0 0 1400px rgba(88,19,55,0.4)) drop-shadow(0 0 1600px rgba(0,0,0,0.3))',
                animation: 'pulse 0.7s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 1) 0%, transparent 70%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.95) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.9) 0%, transparent 80%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.85) 0%, transparent 70%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.8) 0%, transparent 60%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.75) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(192, 132, 252, 0.7) 0%, transparent 40%), radial-gradient(circle at 25% 50%, rgba(244, 114, 182, 0.6) 0%, transparent 35%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '660px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 120px 300px rgba(192, 132, 252, 1), 0 0 500px rgba(168, 85, 247, 1), 0 0 250px rgba(236, 72, 153, 1), 0 0 160px rgba(232, 121, 249, 0.9), 0 0 100px rgba(244, 114, 182, 0.8), 0 0 40px rgba(217, 70, 239, 0.7), 0 0 20px rgba(192, 132, 252, 0.6)',
              letterSpacing: '-32px',
              filter: 'drop-shadow(0 0 200px rgba(217, 70, 239, 1)) drop-shadow(0 0 400px rgba(192, 132, 252, 1)) drop-shadow(0 0 600px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 800px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 1000px rgba(126, 34, 206, 0.5)) drop-shadow(0 0 1200px rgba(88, 28, 135, 0.4)) drop-shadow(0 0 1400px rgba(49, 14, 85, 0.3))',
              animation: 'float 1.5s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.5) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.45) 0%, transparent 80%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.45) 0%, transparent 70%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.4) 0%, transparent 60%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.35) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(226, 232, 240, 0.3) 0%, transparent 40%), radial-gradient(circle at 35% 65%, rgba(255,255,255,0.25) 0%, transparent 35%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '660px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 90px 220px rgba(255,255,255, 1), 0 0 300px rgba(226, 232, 240, 1), 0 0 200px rgba(255,255,255, 0.8), 0 0 130px rgba(203, 213, 225, 0.7), 0 0 70px rgba(241, 245, 249, 0.6), 0 0 30px rgba(255,255,255,0.5), 0 0 15px rgba(226, 232, 240, 0.4)',
              letterSpacing: '-32px',
              filter: 'drop-shadow(0 0 200px rgba(255,255,255, 0.9)) drop-shadow(0 0 400px rgba(226, 232, 240, 0.8)) drop-shadow(0 0 600px rgba(148, 163, 184, 0.7)) drop-shadow(0 0 800px rgba(71, 85, 105, 0.6)) drop-shadow(0 0 1000px rgba(30, 58, 138, 0.5)) drop-shadow(0 0 1200px rgba(15, 23, 42, 0.4)) drop-shadow(0 0 1400px rgba(2, 6, 23, 0.3))',
              animation: 'float 2s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 450px rgba(0,0,0,0.3), 0 250px 500px rgba(0,0,0, 1), 0 0 400px rgba(0,0,0, 0.9), 0 0 320px rgba(0,0,0,0.8), 0 0 240px rgba(0,0,0,0.7), 0 0 180px rgba(0,0,0,0.6), 0 0 120px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 8%, #f8fafc 16%, #f1f5f9 24%, #e2e8f0 32%, #cbd5e1 40%, #94a3b8 48%, #64748b 56%, #475569 64%, #334155 72%, #1e293b 80%, #0f172a 88%, #020617 94%, #000000 100%)',
            border: '36px solid #e2e8f0',
            backdropFilter: 'blur(50px)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '680px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(15px 15px 30px rgba(0,0,0,0.5)) drop-shadow(0 0 100px rgba(0,0,0,0.4)) drop-shadow(0 0 200px rgba(0,0,0,0.35)) drop-shadow(0 0 300px rgba(0,0,0,0.3)) drop-shadow(0 0 400px rgba(0,0,0,0.25)) drop-shadow(0 0 500px rgba(30, 41, 59, 0.2)) drop-shadow(0 0 600px rgba(15, 23, 42, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 4s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 8%, #1c1917 16%, #292524 24%, #44403c 32%, #57534e 40%, #78716c 48%, #a8a29e 56%, #d6d3d1 64%, #f5f5f4 72%, #ffffff 80%, #ffffff 88%, #f5f5f4 94%, #d6d3d1 100%)',
              boxShadow: 'inset 0 0 450px rgba(0,0,0,1), 0 250px 500px rgba(0,0,0,1), 0 0 400px rgba(0,0,0,1), 0 0 320px rgba(0,0,0,0.9), 0 0 240px rgba(0,0,0,0.8), 0 0 180px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,255,255,0.5), inset 0 16px 32px rgba(255,255,255,0.4), inset 0 0 120px rgba(255,255,255,0.2), inset 0 0 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.1)',
              borderColor: '#d6d3d1',
              borderWidth: '40px'
            }}>
              <div className="badge-main" style={{
                fontSize: '350px',
                letterSpacing: '32px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c, #292524, #1c1917, #0a0a0a, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '12px 12px 24px rgba(0,0,0,1), 0 0 120px rgba(214, 211, 209, 0.9), 0 0 90px rgba(255,255,255, 0.7), 0 0 60px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.4), 0 0 10px rgba(214, 211, 209, 0.3)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '100px',
                letterSpacing: '60px',
                textShadow: '10px 10px 20px rgba(0,0,0,1), 0 0 90px rgba(168, 162, 158, 0.9), 0 0 60px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.4), 0 0 10px rgba(168, 162, 158, 0.3)'
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
              boxShadow: '0 0 100px #3b82f6, 0 0 200px #3b82f6, 0 0 300px #2563eb, 0 0 400px #1d4ed8, 0 0 500px #1e40af, inset 0 0 100px #3b82f6, inset 0 0 150px #2563eb',
              animation: 'neonPulse 0.8s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 80%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '600px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '10px',
                textShadow: '0 0 80px #3b82f6, 0 0 160px #3b82f6, 0 0 240px #2563eb, 0 0 320px #1d4ed8, 0 0 400px #1e40af, 0 0 480px #1e3a8a, 0 0 560px #1e3a8a'
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
              boxShadow: '0 0 100px #ec4899, 0 0 200px #ec4899, 0 0 300px #db2777, 0 0 400px #be185d, 0 0 500px #9d174d, inset 0 0 100px #ec4899, inset 0 0 150px #db2777',
              animation: 'neonPulse 0.8s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 80%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '600px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '10px',
                textShadow: '0 0 80px #ec4899, 0 0 160px #ec4899, 0 0 240px #db2777, 0 0 320px #be185d, 0 0 400px #9d174d, 0 0 480px #831843, 0 0 560px #831843'
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
              boxShadow: '0 60px 150px rgba(0,0,0,0.9), 0 0 120px rgba(34, 197, 94, 0.6), inset 0 0 60px rgba(34, 197, 94, 0.15)',
              padding: '80px 120px',
              background: 'rgba(0, 20, 0, 0.98)'
            }}>
              <div className="tech-b" style={{
                fontSize: '600px',
                color: '#22c55e',
                textShadow: '0 0 100px #22c55e, 0 0 200px #16a34a, 0 0 300px #15803d, 0 0 400px #166534, 0 0 500px #14532d',
                letterSpacing: '-10px'
              }}>b</div>
            </div>
          </>
        );
      case 'glitch':
        return (
          <>
            <div className="noise"></div>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '660px',
              fontWeight: '900',
              textShadow: '50px 0 #ff006e, -50px 0 #00f7ff, 25px 25px 0 rgba(0,0,0,0.9), 0 0 220px rgba(255,0,110,0.9), 0 0 440px rgba(0,247,255,0.9), 0 0 660px rgba(255,0,110,0.7), 0 0 880px rgba(0,247,255,0.6), 0 0 1100px rgba(255,0,110,0.5), 0 0 1320px rgba(0,247,255,0.4)',
              animation: 'glitch 0.04s infinite'
            }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#ff006e', opacity: '1', animation: 'glitch2 0.08s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#00f7ff', opacity: '0.9', animation: 'glitch3 0.1s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#ffff00', opacity: '0.8', animation: 'glitch4 0.12s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#ff00ff', opacity: '0.7', animation: 'glitch5 0.15s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#00ff00', opacity: '0.6', animation: 'glitch6 0.18s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#ff6600', opacity: '0.5', animation: 'glitch 0.22s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#0066ff', opacity: '0.4', animation: 'glitch2 0.26s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#ff00ff', opacity: '0.3', animation: 'glitch3 0.3s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '660px', fontWeight: '900', color: '#00ff00', opacity: '0.2', animation: 'glitch4 0.34s infinite' }}>bast1qn</div>
          </>
        );
      case 'matrix-code':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="matrix-col" style={{
                left: `${40 + i * 40}px`,
                animationDelay: `${i * 0.12}s`,
                fontSize: '50px',
                opacity: '1',
                textShadow: '0 0 25px #22c55e'
              }}>
                {Array.from({ length: 25 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${j * 0.08}s` }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
            <div className="matrix-text" style={{
              fontSize: '600px',
              padding: '40px 80px',
              borderColor: '#22c55e',
              borderWidth: '5px',
              textShadow: '0 0 50px #22c55e, 0 0 100px #16a34a, 0 0 150px #15803d, 0 0 200px #166534, 0 0 250px #14532d',
              background: 'rgba(0, 0, 0, 0.95)',
              boxShadow: '0 0 120px rgba(34, 197, 94, 0.8)'
            }}>b</div>
          </>
        );
      case 'pcb-board':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.6' }}></div>
            <div className="noise"></div>
            <div className="pcb-chip" style={{
              borderColor: '#22c55e',
              boxShadow: '0 60px 150px rgba(0,0,0,0.9), 0 0 120px rgba(34, 197, 94, 0.7), inset 0 0 60px rgba(34, 197, 94, 0.25)',
              width: '700px',
              height: '450px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '600px',
                color: '#22c55e',
                textShadow: '0 0 80px #22c55e, 0 0 160px #16a34a, 0 0 240px #15803d, 0 0 320px #166534, 0 0 400px #14532d',
                letterSpacing: '-6px'
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
              opacity: '0.8',
              transform: 'scale(0.9)',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '620px',
              fontWeight: '700',
              background: 'linear-gradient(to bottom, #fff 12%, #fcd34d 20%, #f59e0b 28%, #d97706 36%, #b45309 40%, #92400e 44%, #b45309 48%, #d97706 52%, #f59e0b 60%, #fcd34d 68%, #fff 76%, #fcd34d 84%, #f59e0b 92%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 100px rgba(251, 191, 36, 0.9), 0 0 200px rgba(245, 158, 11, 0.7), 0 0 300px rgba(217, 119, 6, 0.6), 0 0 400px rgba(180, 83, 9, 0.5)',
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.6))'
            }}>b</div>
          </>
        );
      case 'chrome-metal':
        return (
          <>
            <div className="chrome-refl" style={{
              animation: 'float 1.5s ease-in-out infinite',
              background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '680px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 8%, #cbd5e1 16%, #94a3b8 24%, #64748b 32%, #475569 40%, #1e293b 48%, #0f172a 50%, #1e293b 52%, #475569 60%, #64748b 68%, #94a3b8 76%, #cbd5e1 84%, #e2e8f0 92%, #f1f5f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 25px 0 rgba(0,0,0,0.7)) drop-shadow(0 0 100px rgba(148, 163, 184, 0.6)) drop-shadow(0 0 200px rgba(203, 213, 225, 0.4))',
              textShadow: '0 0 80px rgba(226, 232, 240, 0.9), 0 0 160px rgba(148, 163, 184, 0.6)'
            }}>b</div>
          </>
        );
      case 'magma-flare':
        return (
          <>
            <div className="magma-bg" style={{
              opacity: '1',
              background: 'radial-gradient(circle, #fca5a5 0%, #fef08a 10%, #fcd34d 15%, #f59e0b 20%, #ef4444 25%, #dc2626 35%, #b91c1c 45%, #7f1d1d 55%, #450a0a 70%, #000 90%)'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '680px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 30px #fca5a5, 0 0 80px #fef08a, 0 0 150px #ef4444, 0 0 220px #dc2626, 0 0 300px #b91c1c, 0 0 400px #7f1d1d, 0 0 500px #450a0a',
              background: 'linear-gradient(to top, #fef08a 0%, #fcd34d 10%, #f59e0b 20%, #ef4444 35%, #dc2626 50%, #7f1d1d 65%, #450a0a 80%, #000 95%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'magmaPulse 0.8s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'ice-crystal':
        return (
          <div style={{
            background: 'radial-gradient(circle, #f0f9ff 0%, #e0f2fe 15%, #bae6fd 30%, #7dd3fc 45%, #38bdf8 60%, #0ea5e9 75%, #0284c7 90%, #0369a1 100%)'
          }}>
            <div className="ice-crack" style={{ opacity: '0.8' }}></div>
            <div className="ice-text" style={{
              fontSize: '660px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 15px 40px rgba(0,0,0,0.2), 0 0 80px #bae6fd, 0 0 160px #7dd3fc, 0 0 240px #38bdf8, 0 0 320px #0ea5e9, 0 0 400px #0284c7',
              filter: 'drop-shadow(0 25px 50px rgba(14, 165, 233, 0.4))'
            }}>b</div>
          </div>
        );

      // ART & ABSTRACT
      case 'holo-card':
        return (
          <>
            <div className="noise"></div>
            <div className="holo-circle" style={{
              background: 'linear-gradient(135deg, #f0f 0%, #0ff 20%, #ff0 40%, #f0f 60%, #0ff 80%, #ff0 100%)',
              boxShadow: '0 0 120px rgba(255,255,255,0.4), 0 0 240px rgba(255,0,255,0.3), 0 0 360px rgba(0,255,255,0.3), 0 0 480px rgba(255,255,0,0.2)',
              animation: 'holoRotate 2s linear infinite',
              width: '750px',
              height: '750px'
            }}>
              <div className="holo-text" style={{
                fontSize: '620px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f0f 0%, #0ff 20%, #ff0 40%, #f0f 60%, #0ff 80%, #ff0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'pop-burst':
        return (
          <div style={{
            background: '#fef08a',
            backgroundImage: 'radial-gradient(#facc15 30%, transparent 30%), radial-gradient(#facc15 30%, transparent 30%)',
            backgroundSize: '35px 35px',
            backgroundPosition: '0 0, 17px 17px'
          }}>
            <div className="pop-burst" style={{
              width: '900px',
              height: '900px',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 120px rgba(239, 68, 68, 0.6), 0 0 200px rgba(239, 68, 68, 0.4), inset 0 0 60px rgba(255,255,255,0.4)'
            }}>
              <div className="pop-text" style={{
                fontSize: '700px',
                color: '#ef4444',
                textShadow: '12px 12px 0 #000, 0 0 80px rgba(239, 68, 68, 0.9), 0 0 160px rgba(239, 68, 68, 0.6), 0 0 240px rgba(239, 68, 68, 0.4)',
                letterSpacing: '10px',
                transform: 'rotate(-10deg)',
                animation: 'bounce 0.6s ease-in-out infinite'
              }}>b</div>
            </div>
          </div>
        );
      case 'fluid-art':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 12 }).map((_, i) => {
              const configs = [
                { width: '800px', height: '800px', background: '#7c3aed', top: '-150px', left: '-150px' },
                { width: '700px', height: '700px', background: '#db2777', bottom: '-80px', right: '-80px' },
                { width: '600px', height: '600px', background: '#2563eb', top: '200px', left: '200px' },
                { width: '550px', height: '550px', background: '#059669', bottom: '180px', left: '120px' },
                { width: '500px', height: '500px', background: '#dc2626', top: '300px', right: '150px' },
                { width: '450px', height: '450px', background: '#7c3aed', bottom: '250px', right: '250px' },
                { width: '400px', height: '400px', background: '#db2777', top: '120px', right: '300px' },
                { width: '350px', height: '350px', background: '#2563eb', bottom: '120px', left: '300px' },
                { width: '300px', height: '300px', background: '#059669', top: '350px', left: '250px' },
                { width: '280px', height: '280px', background: '#dc2626', bottom: '350px', right: '300px' },
                { width: '250px', height: '250px', background: '#7c3aed', top: '400px', left: '150px' },
                { width: '220px', height: '220px', background: '#db2777', bottom: '400px', right: '350px' }
              ];
              return (
                <div key={i} className="fluid-blob" style={{
                  ...configs[i],
                  position: 'absolute',
                  borderRadius: '50%',
                  filter: 'blur(100px)',
                  opacity: '1',
                  animation: `float ${1.8 + i * 0.25}s ease-in-out infinite`
                }}></div>
              );
            })}
            <div className="fluid-text" style={{
              fontSize: '660px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              textShadow: '0 0 100px rgba(255,255,255,0.9), 0 0 200px rgba(255,255,255,0.6), 0 0 300px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'sticker-style':
        return (
          <div style={{
            background: '#3f3f46',
            backgroundImage: 'linear-gradient(30deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a), linear-gradient(150deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a)',
            backgroundSize: '120px 200px'
          }}>
            <div className="sticker-body" style={{
              background: '#fff',
              padding: '80px 150px',
              transform: 'rotate(-15deg)',
              borderRadius: '40px',
              boxShadow: '50px 50px 80px rgba(0,0,0,0.8), 0 0 120px rgba(255,255,255,0.15)'
            }}>
              <div className="sticker-text" style={{
                fontSize: '620px',
                fontWeight: '900',
                color: '#000',
                textShadow: '12px 12px 0 rgba(0,0,0,0.25), 0 0 80px rgba(0,0,0,0.15)'
              }}>b</div>
            </div>
          </div>
        );

      // NEW STYLES
      case 'wood-carved':
        return (
          <div style={{
            background: '#3f2e21',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 18px, transparent 18px, transparent 36px)'
          }}>
            <div className="wood-board" style={{
              width: '900px',
              height: '700px',
              background: '#5d4037',
              borderColor: '#3e2723',
              borderWidth: '20px',
              boxShadow: 'inset 0 0 200px rgba(0,0,0,0.9), 0 50px 100px rgba(0,0,0,0.9), 0 0 150px rgba(93, 64, 55, 0.6), 0 0 200px rgba(62, 39, 35, 0.4)'
            }}>
              <div className="wood-text" style={{
                fontSize: '640px',
                color: '#3e2723',
                textShadow: '5px 5px 12px rgba(255,255,255,0.3), inset 10px 10px 25px rgba(0,0,0,1), 0 0 100px rgba(62, 39, 35, 0.6), 0 0 150px rgba(93, 64, 55, 0.4)'
              }}>b</div>
            </div>
          </div>
        );
      case 'leather-patch':
        return (
          <div style={{ background: '#1c1917' }}>
            <div className="leather-patch" style={{
              width: '800px',
              height: '800px',
              background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9), inset 0 0 100px rgba(0,0,0,0.6), 0 0 120px rgba(120, 113, 108, 0.4), 0 0 180px rgba(120, 113, 108, 0.2)',
              borderColor: '#78716c',
              borderWidth: '10px',
              borderStyle: 'dashed'
            }}>
              <div className="leather-text" style={{
                fontSize: '620px',
                color: '#1c1917',
                textShadow: '5px 5px 0 rgba(255,255,255,0.15), -5px -5px 0 rgba(0,0,0,0.8), 0 0 100px rgba(28, 25, 23, 0.9), 0 0 150px rgba(41, 37, 36, 0.6)'
              }}>b</div>
            </div>
          </div>
        );
      case 'cloud-dream':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="cloud-shape" style={{
                ...{
                  0: { width: '600px', height: '240px', top: '40px', left: '40px' },
                  1: { width: '550px', height: '220px', top: '80px', right: '60px' },
                  2: { width: '500px', height: '200px', bottom: '220px', left: '80px' },
                  3: { width: '450px', height: '180px', bottom: '180px', right: '100px' },
                  4: { width: '400px', height: '160px', top: '220px', left: '220px' },
                  5: { width: '350px', height: '140px', top: '280px', right: '200px' },
                  6: { width: '300px', height: '120px', bottom: '80px', left: '280px' },
                  7: { width: '280px', height: '110px', top: '120px', right: '280px' },
                  8: { width: '260px', height: '100px', bottom: '280px', left: '200px' },
                  9: { width: '240px', height: '90px', top: '320px', right: '220px' },
                  10: { width: '220px', height: '80px', bottom: '60px', right: '320px' },
                  11: { width: '200px', height: '70px', top: '60px', left: '350px' },
                  12: { width: '180px', height: '60px', bottom: '320px', right: '380px' },
                  13: { width: '160px', height: '50px', top: '360px', left: '120px' },
                  14: { width: '140px', height: '40px', bottom: '40px', left: '400px' }
                }[i],
                filter: 'blur(35px)',
                opacity: '1',
                animation: `float ${2.5 + i * 0.2}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="cloud-text" style={{
              fontSize: '680px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 25px 100px rgba(37, 99, 235, 0.6), 0 0 200px rgba(96, 165, 250, 0.5), 0 0 300px rgba(147, 197, 253, 0.4), 0 0 400px rgba(186, 230, 253, 0.3)',
              filter: 'drop-shadow(0 35px 70px rgba(37, 99, 235, 0.5))'
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
              fontSize: '680px',
              color: '#facc15',
              transform: 'rotate(-18deg)',
              textShadow: '20px 20px 0 #db2777, 40px 40px 0 #000, 0 0 120px rgba(250, 204, 21, 0.9), 0 0 240px rgba(250, 204, 21, 0.6), 0 0 360px rgba(250, 204, 21, 0.4)',
              WebkitTextStroke: '8px #000',
              filter: 'drop-shadow(10px 10px 20px rgba(0,0,0,0.8))'
            }}>b</div>
            <div className="graf-drip" style={{
              width: '20px',
              height: '120px',
              background: '#facc15',
              bottom: '-80px',
              borderRadius: '10px',
              boxShadow: '0 0 25px rgba(250, 204, 21, 0.7)'
            }}></div>
          </div>
        );
      case 'mosaic-tile':
        return (
          <>
            <div className="noise"></div>
            <div className="mosaic-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(15, 1fr)',
              gap: '8px',
              width: '800px',
              height: '400px',
              opacity: '1'
            }}>
              {Array.from({ length: 300 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9'][Math.floor(Math.random() * 7)],
                  borderRadius: '8px',
                  opacity: '0.95'
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '640px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              letterSpacing: '16px',
              textShadow: '0 0 120px rgba(255,255,255,0.9), 0 0 240px rgba(255,255,255,0.6), 0 0 360px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'smoke-fade':
        return (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="smoke-plume" style={{
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, ${['#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd'][i]} 0%, transparent 85%)`,
                filter: 'blur(80px)',
                opacity: '0.9',
                animation: `drift ${6 + i * 1.5}s infinite`,
                left: `${40 + i * 35}px`,
                top: `${40 + i * 25}px`
              }}></div>
            ))}
            <div className="smoke-text" style={{
              fontSize: '640px',
              fontWeight: '700',
              color: 'transparent',
              background: 'linear-gradient(to right, #bbb, #fff, #eee, #fff, #ddd, #fff)',
              WebkitBackgroundClip: 'text',
              filter: 'blur(7px)',
              letterSpacing: '16px',
              textShadow: '0 0 100px rgba(255,255,255,0.7), 0 0 200px rgba(255,255,255,0.5)'
            }}>b</div>
          </>
        );
      case 'vaporwave':
        return (
          <div style={{
            background: 'linear-gradient(to bottom, #f9a8d4 0%, #c4b5fd 40%, #a78bfa 70%, #8b5cf6 100%)'
          }}>
            <div className="vapor-sun" style={{
              width: '500px',
              height: '500px',
              background: 'linear-gradient(to top, #fbbf24 0%, #f472b6 40%, #c084fc 70%, #a855f7 100%)',
              borderRadius: '50%',
              marginBottom: '-250px',
              boxShadow: '0 0 200px rgba(251, 191, 36, 0.9), 0 0 400px rgba(244, 114, 182, 0.7), 0 0 600px rgba(192, 132, 252, 0.5), 0 0 800px rgba(168, 85, 247, 0.3)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '640px',
              color: '#fff',
              textShadow: '10px 10px 0 #000, 0 0 100px rgba(255,255,255,0.9), 0 0 200px rgba(192, 132, 252, 0.6), 0 0 300px rgba(192, 132, 252, 0.4)',
              zIndex: '10',
              marginTop: '100px'
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
              borderWidth: '16px',
              boxShadow: '0 0 0 16px #000, 0 0 100px rgba(255,255,255,0.4), 0 40px 80px rgba(0,0,0,0.9)',
              padding: '80px'
            }}>
              <div className="rpg-text" style={{
                fontSize: '640px',
                color: '#fff',
                textShadow: '10px 10px 0 #000, 0 0 80px rgba(255,255,255,0.6), 0 0 160px rgba(255,255,255,0.4), 0 0 240px rgba(255,255,255,0.3)',
                lineHeight: '1'
              }}>b<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror-scream':
        return (
          <>
            <div className="noise" style={{ opacity: '0.2' }}></div>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="horror-scratch" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `repeating-linear-gradient(${90 + i * 12}deg, transparent, transparent ${80 + i * 15}px, rgba(255,0,0,0.18) ${82 + i * 15}px, transparent ${84 + i * 15}px)`,
                pointerEvents: 'none',
                animation: `horrorPulse ${1.5 + i * 0.4}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="horror-text" style={{
              fontSize: '680px',
              fontWeight: '700',
              color: '#ef4444',
              textShadow: '0 0 50px #7f1d1d, 0 0 100px #991b1b, 0 0 150px #b91c1c, 0 0 200px #dc2626, 0 0 250px rgba(239, 68, 68, 0.9), 0 0 350px rgba(127, 29, 29, 0.7), 0 0 450px rgba(185, 28, 28, 0.5), 0 0 550px rgba(220, 38, 38, 0.4), 0 0 650px rgba(153, 27, 27, 0.3)',
              letterSpacing: '10px',
              animation: 'horrorPulse 1s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'origami-fold':
        return (
          <div style={{
            background: '#fef3c7'
          }}>
            <div className="origami-shape" style={{
              borderLeftWidth: '180px',
              borderRightWidth: '180px',
              borderBottomWidth: '360px',
              borderBottomColor: '#f59e0b',
              filter: 'drop-shadow(0 50px 80px rgba(0,0,0,0.5)) drop-shadow(0 0 100px rgba(251, 191, 36, 0.6)) drop-shadow(0 0 150px rgba(217, 119, 6, 0.4))'
            }}></div>
            <div className="origami-shape" style={{
              position: 'absolute',
              top: '360px',
              left: '-180px',
              borderLeftWidth: '180px',
              borderRightWidth: '180px',
              borderTopWidth: '360px',
              borderTopColor: '#d97706',
              filter: 'drop-shadow(0 -25px 50px rgba(0,0,0,0.4))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '640px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '5px 5px 0 rgba(255,255,255,0.6), 10px 10px 25px rgba(0,0,0,0.5), 0 0 100px rgba(245, 158, 11, 0.8), 0 0 150px rgba(217, 119, 6, 0.6)'
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
