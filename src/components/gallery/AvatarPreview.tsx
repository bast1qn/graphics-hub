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
              filter: 'blur(3000px)',
              opacity: '50',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, #312e81, #1e1b4b, #030712, #000000, transparent 98%)',
              animation: 'pulse 0.05s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(2500px)',
              opacity: '45',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 97%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(2000px)',
              opacity: '40',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, transparent 95%)',
              animation: 'float 0.25s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1500px)',
              opacity: '38',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, transparent 92%)',
              animation: 'float 0.4s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1000px)',
              opacity: '35',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, #6366f1, #4f46e5, transparent 90%)',
              animation: 'pulse 0.4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 1000px rgba(255,255,255,0.95), 0 500px 1000px rgba(99, 102, 241, 1), 0 0 900px rgba(129, 140, 248, 1), 0 0 800px rgba(99, 102, 241, 1), 0 0 700px rgba(129, 140, 248, 0.98), 0 0 600px rgba(99, 102, 241, 0.95), 0 0 500px rgba(129, 140, 248, 0.92), 0 0 400px rgba(99, 102, 241, 0.9), 0 0 300px rgba(129, 140, 248, 0.85), 0 0 200px rgba(99, 102, 241, 0.8), 0 0 100px rgba(129, 140, 248, 0.75), inset 0 0 250px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.9), rgba(167,139,250,0.85), rgba(199,210,254,0.8), rgba(224,231,255,0.75))',
              border: '30px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(250px)',
              animation: 'float 0.2s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '1200px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 3%, #f5f3ff 6%, #ede9fe 9%, #e0e7ff 12%, #c7d2fe 15%, #a5b4fc 18%, #818cf8 21%, #6366f1 24%, #4f46e5 27%, #4338ca 30%, #3730a3 33%, #312e81 36%, #1e1b4b 39%, #030712 42%, #000000 45%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 450px rgba(255,255,255,1)) drop-shadow(0 0 900px rgba(129,140,248,1)) drop-shadow(0 0 1350px rgba(99,102,241,1)) drop-shadow(0 0 1800px rgba(79,70,229,0.98)) drop-shadow(0 0 2250px rgba(67,56,202,0.9)) drop-shadow(0 0 2700px rgba(55,48,163,0.85)) drop-shadow(0 0 3150px rgba(30,27,75,0.75)) drop-shadow(0 0 3600px rgba(0,0,0,0.65))',
                animation: 'pulse 0.1s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(3000px)',
              opacity: '50',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000, transparent 98%)',
              animation: 'pulse 0.05s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(2500px)',
              opacity: '45',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, transparent 97%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(2000px)',
              opacity: '40',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, transparent 95%)',
              animation: 'float 0.25s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1500px)',
              opacity: '38',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, #be123c, #9f1239, #881337, transparent 92%)',
              animation: 'float 0.4s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(1000px)',
              opacity: '35',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, #f43f5e, #e11d48, transparent 90%)',
              animation: 'pulse 0.4s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 1000px rgba(255,255,255,0.95), 0 500px 1000px rgba(244, 63, 94, 1), 0 0 900px rgba(251, 113, 133, 1), 0 0 800px rgba(244, 63, 94, 1), 0 0 700px rgba(251, 113, 133, 0.98), 0 0 600px rgba(244, 63, 94, 0.95), 0 0 500px rgba(251, 113, 133, 0.92), 0 0 400px rgba(244, 63, 94, 0.9), 0 0 300px rgba(251, 113, 133, 0.85), 0 0 200px rgba(244, 63, 94, 0.8), 0 0 100px rgba(251, 113, 133, 0.75), inset 0 0 250px rgba(255,255,255,0.5)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.9), rgba(251,113,133,0.85), rgba(254,205,211,0.8), rgba(255,241,242,0.75))',
              border: '30px solid rgba(255,255,255,1)',
              backdropFilter: 'blur(250px)',
              animation: 'float 0.2s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '1200px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 3%, #ffe4e6 6%, #fecdd3 9%, #fda4af 12%, #fb7185 15%, #f43f5e 18%, #e11d48 21%, #be123c 24%, #9f1239 27%, #881337 30%, #7c2d12 33%, #4c0519 36%, #1a0505 39%, #000000 42%, #000000 45%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 450px rgba(255,255,255,1)) drop-shadow(0 0 900px rgba(251,113,133,1)) drop-shadow(0 0 1350px rgba(244,63,94,1)) drop-shadow(0 0 1800px rgba(225,29,72,0.98)) drop-shadow(0 0 2250px rgba(190,18,60,0.9)) drop-shadow(0 0 2700px rgba(159,18,57,0.85)) drop-shadow(0 0 3150px rgba(88,19,55,0.75)) drop-shadow(0 0 3600px rgba(0,0,0,0.65))',
                animation: 'pulse 0.1s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 1) 0%, transparent 90%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 1) 0%, transparent 90%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.99) 0%, transparent 95%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.98) 0%, transparent 90%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.96) 0%, transparent 88%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.94) 0%, transparent 85%), radial-gradient(circle at 60% 40%, rgba(192, 132, 252, 0.92) 0%, transparent 82%), radial-gradient(circle at 25% 50%, rgba(244, 114, 182, 0.9) 0%, transparent 80%), radial-gradient(circle at 75% 25%, rgba(251, 113, 133, 0.88) 0%, transparent 78%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '1200px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, #1a0505, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 250px 550px rgba(192, 132, 252, 1), 0 0 1000px rgba(168, 85, 247, 1), 0 0 500px rgba(236, 72, 153, 1), 0 0 400px rgba(232, 121, 249, 1), 0 0 250px rgba(244, 114, 182, 0.98), 0 0 120px rgba(217, 70, 239, 0.95), 0 0 60px rgba(192, 132, 252, 0.9)',
              letterSpacing: '-55px',
              filter: 'drop-shadow(0 0 450px rgba(217, 70, 239, 1)) drop-shadow(0 0 900px rgba(192, 132, 252, 1)) drop-shadow(0 0 1350px rgba(168, 85, 247, 0.98)) drop-shadow(0 0 1800px rgba(147, 51, 234, 0.95)) drop-shadow(0 0 2250px rgba(126, 34, 206, 0.9)) drop-shadow(0 0 2700px rgba(88, 28, 135, 0.85)) drop-shadow(0 0 3150px rgba(49, 14, 85, 0.8)) drop-shadow(0 0 3600px rgba(30, 6, 67, 0.75))',
              animation: 'float 0.25s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 85%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.78) 0%, transparent 88%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.75) 0%, transparent 92%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.75) 0%, transparent 88%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.72) 0%, transparent 85%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.68) 0%, transparent 82%), radial-gradient(circle at 60% 40%, rgba(226, 232, 240, 0.65) 0%, transparent 80%), radial-gradient(circle at 35% 65%, rgba(255,255,255,0.6) 0%, transparent 75%), radial-gradient(circle at 65% 35%, rgba(241, 245, 249, 0.58) 0%, transparent 72%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '1200px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 200px 450px rgba(255,255,255, 1), 0 0 650px rgba(226, 232, 240, 1), 0 0 450px rgba(255,255,255, 0.98), 0 0 350px rgba(203, 213, 225, 0.95), 0 0 250px rgba(241, 245, 249, 0.92), 0 0 150px rgba(255,255,255,0.9), 0 0 80px rgba(226, 232, 240, 0.88)',
              letterSpacing: '-55px',
              filter: 'drop-shadow(0 0 450px rgba(255,255,255, 1)) drop-shadow(0 0 900px rgba(226, 232, 240, 0.98)) drop-shadow(0 0 1350px rgba(148, 163, 184, 0.95)) drop-shadow(0 0 1800px rgba(71, 85, 105, 0.92)) drop-shadow(0 0 2250px rgba(30, 58, 138, 0.88)) drop-shadow(0 0 2700px rgba(15, 23, 42, 0.85)) drop-shadow(0 0 3150px rgba(2, 6, 23, 0.82)) drop-shadow(0 0 3600px rgba(0, 0, 0, 0.78))',
              animation: 'float 0.4s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 900px rgba(0,0,0,0.5), 0 500px 1000px rgba(0,0,0, 1), 0 0 900px rgba(0,0,0, 1), 0 0 800px rgba(0,0,0, 0.98), 0 0 700px rgba(0,0,0,0.95), 0 0 600px rgba(0,0,0,0.92), 0 0 500px rgba(0,0,0,0.9), 0 0 400px rgba(0,0,0,0.85), 0 0 300px rgba(0,0,0,0.8), 0 0 200px rgba(0,0,0,0.75), 0 0 100px rgba(0,0,0,0.7)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 4%, #f8fafc 8%, #f1f5f9 12%, #e2e8f0 16%, #cbd5e1 20%, #94a3b8 24%, #64748b 28%, #475569 32%, #334155 36%, #1e293b 40%, #0f172a 44%, #020617 48%, #000000 52%, #000000 56%, #000000 60%, #000000 64%, #000000 68%, #000000 72%, #000000 76%, #000000 80%, #000000 84%, #000000 88%, #000000 92%, #000000 100%)',
            border: '55px solid #e2e8f0',
            backdropFilter: 'blur(100px)',
            animation: 'float 0.5s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '1300px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(30px 30px 60px rgba(0,0,0,0.75)) drop-shadow(0 0 225px rgba(0,0,0,0.65)) drop-shadow(0 0 450px rgba(0,0,0,0.55)) drop-shadow(0 0 675px rgba(0,0,0,0.48)) drop-shadow(0 0 900px rgba(0,0,0,0.42)) drop-shadow(0 0 1125px rgba(0,0,0,0.38)) drop-shadow(0 0 1350px rgba(30, 41, 59, 0.35)) drop-shadow(0 0 1575px rgba(15, 23, 42, 0.32))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 0.75s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 4%, #1c1917 8%, #292524 12%, #44403c 16%, #57534e 20%, #78716c 24%, #a8a29e 28%, #d6d3d1 32%, #f5f5f4 36%, #ffffff 40%, #ffffff 44%, #ffffff 48%, #ffffff 52%, #ffffff 56%, #f5f5f4 60%, #d6d3d1 64%, #a8a29e 68%, #78716c 72%, #57534e 76%, #44403c 80%, #292524 84%, #1c1917 88%, #0a0a0a 92%, #000000 96%, #000000 100%)',
              boxShadow: 'inset 0 0 900px rgba(0,0,0,1), 0 500px 1000px rgba(0,0,0,1), 0 0 900px rgba(0,0,0,1), 0 0 800px rgba(0,0,0,1), 0 0 700px rgba(0,0,0,1), 0 0 600px rgba(0,0,0,1), 0 0 500px rgba(0,0,0,0.99), 0 0 400px rgba(0,0,0,0.98), 0 0 300px rgba(0,0,0,0.95), 0 0 200px rgba(0,0,0,0.92), 0 0 100px rgba(0,0,0,0.9), inset 0 0 80px rgba(255,255,255,0.75), inset 0 40px 80px rgba(255,255,255,0.65), inset 0 0 250px rgba(255,255,255,0.35), inset 0 0 100px rgba(0,0,0,0.97), inset 0 0 50px rgba(255,255,255,0.18)',
              borderColor: '#d6d3d1',
              borderWidth: '60px'
            }}>
              <div className="badge-main" style={{
                fontSize: '560px',
                letterSpacing: '55px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c, #292524, #1c1917, #0a0a0a, #000000, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '25px 25px 50px rgba(0,0,0,1), 0 0 250px rgba(214, 211, 209, 1), 0 0 200px rgba(255,255,255, 0.95), 0 0 150px rgba(255,255,255,0.92), 0 0 120px rgba(255,255,255,0.9), 0 0 100px rgba(255,255,255,0.88), 0 0 80px rgba(214, 211, 209, 0.85), 0 0 60px rgba(255,255,255,0.82)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '170px',
                letterSpacing: '90px',
                textShadow: '25px 25px 50px rgba(0,0,0,1), 0 0 200px rgba(168, 162, 158, 1), 0 0 150px rgba(255,255,255,0.85), 0 0 120px rgba(255,255,255,0.82), 0 0 100px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.78), 0 0 60px rgba(168, 162, 158, 0.75), 0 0 40px rgba(255,255,255,0.72)'
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
              boxShadow: '0 0 250px #3b82f6, 0 0 500px #3b82f6, 0 0 750px #2563eb, 0 0 1000px #1d4ed8, 0 0 1250px #1e40af, 0 0 1500px #1e3a8a, 0 0 1750px #172554, 0 0 2000px #172554, inset 0 0 250px #3b82f6, inset 0 0 350px #2563eb',
              animation: 'neonPulse 0.15s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.6) 0%, transparent 95%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '1200px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '22px',
                textShadow: '0 0 250px #3b82f6, 0 0 500px #3b82f6, 0 0 750px #2563eb, 0 0 1000px #1d4ed8, 0 0 1250px #1e40af, 0 0 1500px #1e3a8a, 0 0 1750px #1e3a8a, 0 0 2000px #172554, 0 0 2250px #172554, 0 0 2500px #0c1729'
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
              boxShadow: '0 0 250px #ec4899, 0 0 500px #ec4899, 0 0 750px #db2777, 0 0 1000px #be185d, 0 0 1250px #9d174d, 0 0 1500px #831843, 0 0 1750px #4c0519, 0 0 2000px #4c0519, inset 0 0 250px #ec4899, inset 0 0 350px #db2777',
              animation: 'neonPulse 0.15s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.6) 0%, transparent 95%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '1200px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '22px',
                textShadow: '0 0 250px #ec4899, 0 0 500px #ec4899, 0 0 750px #db2777, 0 0 1000px #be185d, 0 0 1250px #9d174d, 0 0 1500px #831843, 0 0 1750px #831843, 0 0 2000px #4c0519, 0 0 2250px #4c0519, 0 0 2500px #1f0915'
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
              boxShadow: '0 150px 350px rgba(0,0,0,1), 0 0 280px rgba(34, 197, 94, 0.9), inset 0 0 150px rgba(34, 197, 94, 0.3)',
              padding: '170px 250px',
              background: 'rgba(0, 20, 0, 1)'
            }}>
              <div className="tech-b" style={{
                fontSize: '1200px',
                color: '#22c55e',
                textShadow: '0 0 250px #22c55e, 0 0 500px #16a34a, 0 0 750px #15803d, 0 0 1000px #166534, 0 0 1250px #14532d, 0 0 1500px #064e3b, 0 0 1750px #064e3b',
                letterSpacing: '-22px'
              }}>b</div>
            </div>
          </>
        );
      case 'glitch':
        return (
          <>
            <div className="noise"></div>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '1200px',
              fontWeight: '900',
              textShadow: '100px 0 #ff006e, -100px 0 #00f7ff, 50px 50px 0 rgba(0,0,0,0.98), 0 0 450px rgba(255,0,110,1), 0 0 900px rgba(0,247,255,1), 0 0 1350px rgba(255,0,110,0.95), 0 0 1800px rgba(0,247,255,0.9), 0 0 2250px rgba(255,0,110,0.88), 0 0 2700px rgba(0,247,255,0.85), 0 0 3150px rgba(255,0,110,0.82), 0 0 3600px rgba(0,247,255,0.8), 0 0 4050px rgba(255,0,110,0.78), 0 0 4500px rgba(0,247,255,0.75)',
              animation: 'glitch 0.005s infinite'
            }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff006e', opacity: '1', animation: 'glitch2 0.01s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#00f7ff', opacity: '0.99', animation: 'glitch3 0.015s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ffff00', opacity: '0.98', animation: 'glitch4 0.02s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff00ff', opacity: '0.97', animation: 'glitch5 0.025s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#00ff00', opacity: '0.96', animation: 'glitch6 0.03s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff6600', opacity: '0.95', animation: 'glitch 0.035s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#0066ff', opacity: '0.94', animation: 'glitch2 0.04s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff00ff', opacity: '0.93', animation: 'glitch3 0.045s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#00ff00', opacity: '0.92', animation: 'glitch4 0.05s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff6600', opacity: '0.91', animation: 'glitch5 0.055s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#0066ff', opacity: '0.9', animation: 'glitch6 0.06s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ffff00', opacity: '0.89', animation: 'glitch 0.065s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff00ff', opacity: '0.88', animation: 'glitch2 0.07s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#00ff00', opacity: '0.87', animation: 'glitch3 0.075s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff6600', opacity: '0.86', animation: 'glitch4 0.08s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#0066ff', opacity: '0.85', animation: 'glitch5 0.085s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ffff00', opacity: '0.84', animation: 'glitch6 0.09s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#ff00ff', opacity: '0.83', animation: 'glitch 0.095s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '1200px', fontWeight: '900', color: '#00ff00', opacity: '0.82', animation: 'glitch2 0.1s infinite' }}>bast1qn</div>
          </>
        );
      case 'matrix-code':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="matrix-col" style={{
                left: `${25 + i * 26}px`,
                animationDelay: `${i * 0.06}s`,
                fontSize: '75px',
                opacity: '1',
                textShadow: '0 0 50px #22c55e'
              }}>
                {Array.from({ length: 40 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${j * 0.04}s` }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
            <div className="matrix-text" style={{
              fontSize: '1200px',
              padding: '90px 160px',
              borderColor: '#22c55e',
              borderWidth: '10px',
              textShadow: '0 0 120px #22c55e, 0 0 240px #16a34a, 0 0 360px #15803d, 0 0 480px #166534, 0 0 600px #14532d, 0 0 720px #064e3b, 0 0 840px #064e3b',
              background: 'rgba(0, 0, 0, 1)',
              boxShadow: '0 0 280px rgba(34, 197, 94, 0.98)'
            }}>b</div>
          </>
        );
      case 'pcb-board':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.9' }}></div>
            <div className="noise"></div>
            <div className="pcb-chip" style={{
              borderColor: '#22c55e',
              boxShadow: '0 150px 350px rgba(0,0,0,1), 0 0 280px rgba(34, 197, 94, 0.95), inset 0 0 150px rgba(34, 197, 94, 0.4)',
              width: '1100px',
              height: '750px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '1200px',
                color: '#22c55e',
                textShadow: '0 0 200px #22c55e, 0 0 400px #16a34a, 0 0 600px #15803d, 0 0 800px #166534, 0 0 1000px #14532d, 0 0 1200px #064e3b, 0 0 1400px #064e3b',
                letterSpacing: '-11px'
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
              opacity: '0.98',
              transform: 'scale(0.92)',
              animation: 'pulse 0.4s ease-in-out infinite'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '1200px',
              fontWeight: '700',
              background: 'linear-gradient(to bottom, #fff 6%, #fcd34d 10%, #f59e0b 14%, #d97706 18%, #b45309 22%, #92400e 26%, #78350f 30%, #92400e 34%, #b45309 38%, #d97706 42%, #f59e0b 46%, #fcd34d 50%, #fff 54%, #fcd34d 58%, #f59e0b 62%, #d97706 66%, #92400e 70%, #78350f 74%, #92400e 78%, #b45309 82%, #d97706 86%, #f59e0b 90%, #fcd34d 94%, #fff 98%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 250px rgba(251, 191, 36, 1), 0 0 500px rgba(245, 158, 11, 0.95), 0 0 750px rgba(217, 119, 6, 0.9), 0 0 1000px rgba(180, 83, 9, 0.85), 0 0 1250px rgba(146, 64, 14, 0.8), 0 0 1500px rgba(120, 53, 15, 0.75)',
              filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.85))'
            }}>b</div>
          </>
        );
      case 'chrome-metal':
        return (
          <>
            <div className="chrome-refl" style={{
              animation: 'float 0.25s ease-in-out infinite',
              background: 'linear-gradient(45deg, transparent 10%, rgba(255,255,255,0.4) 50%, transparent 90%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '1300px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 4%, #cbd5e1 8%, #94a3b8 12%, #64748b 16%, #475569 20%, #1e293b 24%, #0f172a 28%, #1e293b 32%, #475569 36%, #64748b 40%, #94a3b8 44%, #cbd5e1 48%, #e2e8f0 52%, #f1f5f9 56%, #f8fafc 60%, #ffffff 64%, #f8fafc 68%, #f1f5f9 72%, #e2e8f0 76%, #f8fafc 80%, #ffffff 84%, #f1f5f9 88%, #e2e8f0 92%, #f8fafc 96%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 50px 0 rgba(0,0,0,0.95)) drop-shadow(0 0 250px rgba(148, 163, 184, 0.85)) drop-shadow(0 0 500px rgba(203, 213, 225, 0.75)) drop-shadow(0 0 750px rgba(148, 163, 184, 0.65)) drop-shadow(0 0 1000px rgba(100, 116, 139, 0.55)) drop-shadow(0 0 1250px rgba(71, 85, 105, 0.45))',
              textShadow: '0 0 200px rgba(226, 232, 240, 1), 0 0 400px rgba(148, 163, 184, 0.85), 0 0 600px rgba(100, 116, 139, 0.7)'
            }}>b</div>
          </>
        );
      case 'magma-flare':
        return (
          <>
            <div className="magma-bg" style={{
              opacity: '1',
              background: 'radial-gradient(circle, #fca5a5 0%, #fef3c7 4%, #fef08a 7%, #fcd34d 10%, #fbbf24 13%, #f59e0b 17%, #ef4444 22%, #dc2626 28%, #b91c1c 35%, #7f1d1d 45%, #450a0a 58%, #000 78%, #000 88%)'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '1300px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 80px #fca5a5, 0 0 200px #fef08a, 0 0 400px #ef4444, 0 0 600px #dc2626, 0 0 800px #b91c1c, 0 0 1000px #7f1d1d, 0 0 1200px #450a0a, 0 0 1400px #000000',
              background: 'linear-gradient(to top, #fef08a 0%, #fcd34d 5%, #f59e0b 10%, #ef4444 17%, #dc2626 27%, #7f1d1d 37%, #450a0a 50%, #000 65%, #000 78%, #000 88%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'magmaPulse 0.15s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'ice-crystal':
        return (
          <div style={{
            background: 'radial-gradient(circle, #f0f9ff 0%, #e0f2fe 9%, #bae6fd 18%, #7dd3fc 27%, #38bdf8 36%, #0ea5e9 45%, #0284c7 54%, #0369a1 63%, #075985 72%, #042f2e 81%, #000 90%)'
          }}>
            <div className="ice-crack" style={{ opacity: '0.98' }}></div>
            <div className="ice-text" style={{
              fontSize: '1200px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 40px 90px rgba(0,0,0,0.35), 0 0 200px #bae6fd, 0 0 400px #7dd3fc, 0 0 600px #38bdf8, 0 0 800px #0ea5e9, 0 0 1000px #0284c7, 0 0 1200px #0369a1',
              filter: 'drop-shadow(0 50px 100px rgba(14, 165, 233, 0.7))'
            }}>b</div>
          </div>
        );

      // ART & ABSTRACT
      case 'holo-card':
        return (
          <>
            <div className="noise"></div>
            <div className="holo-circle" style={{
              background: 'linear-gradient(135deg, #f0f 0%, #0ff 10%, #ff0 20%, #f0f 30%, #0ff 40%, #ff0 50%, #f0f 60%, #0ff 70%, #ff0 80%, #f0f 90%, #0ff 100%)',
              boxShadow: '0 0 280px rgba(255,255,255,0.7), 0 0 560px rgba(255,0,255,0.6), 0 0 840px rgba(0,255,255,0.6), 0 0 1120px rgba(255,255,0,0.5), 0 0 1400px rgba(255,0,255,0.4), 0 0 1680px rgba(0,255,255,0.3), 0 0 1960px rgba(255,255,0,0.2)',
              animation: 'holoRotate 0.4s linear infinite',
              width: '1100px',
              height: '1100px'
            }}>
              <div className="holo-text" style={{
                fontSize: '1200px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f0f 0%, #0ff 10%, #ff0 20%, #f0f 30%, #0ff 40%, #ff0 50%, #f0f 60%, #0ff 70%, #ff0 80%, #f0f 90%, #0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pulse 0.25s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'pop-burst':
        return (
          <div style={{
            background: '#fef08a',
            backgroundImage: 'radial-gradient(#facc15 20%, transparent 20%), radial-gradient(#facc15 20%, transparent 20%)',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px'
          }}>
            <div className="pop-burst" style={{
              width: '1400px',
              height: '1400px',
              boxShadow: '0 90px 180px rgba(0,0,0,0.8), 0 0 280px rgba(239, 68, 68, 0.9), 0 0 450px rgba(239, 68, 68, 0.7), 0 0 620px rgba(239, 68, 68, 0.5), inset 0 0 150px rgba(255,255,255,0.7)'
            }}>
              <div className="pop-text" style={{
                fontSize: '1300px',
                color: '#ef4444',
                textShadow: '25px 25px 0 #000, 0 0 200px rgba(239, 68, 68, 1), 0 0 400px rgba(239, 68, 68, 0.85), 0 0 600px rgba(239, 68, 68, 0.7), 0 0 800px rgba(239, 68, 68, 0.55)',
                letterSpacing: '22px',
                transform: 'rotate(-12deg)',
                animation: 'bounce 0.15s ease-in-out infinite'
              }}>b</div>
            </div>
          </div>
        );
      case 'fluid-art':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 20 }).map((_, i) => {
              const configs = [
                { width: '1200px', height: '1200px', background: '#7c3aed', top: '-300px', left: '-300px' },
                { width: '1100px', height: '1100px', background: '#db2777', bottom: '-150px', right: '-150px' },
                { width: '1000px', height: '1000px', background: '#2563eb', top: '350px', left: '350px' },
                { width: '900px', height: '900px', background: '#059669', bottom: '320px', left: '210px' },
                { width: '850px', height: '850px', background: '#dc2626', top: '500px', right: '280px' },
                { width: '800px', height: '800px', background: '#7c3aed', bottom: '420px', right: '420px' },
                { width: '750px', height: '750px', background: '#db2777', top: '210px', right: '500px' },
                { width: '700px', height: '700px', background: '#2563eb', bottom: '210px', left: '500px' },
                { width: '650px', height: '650px', background: '#059669', top: '560px', left: '420px' },
                { width: '600px', height: '600px', background: '#dc2626', bottom: '560px', right: '500px' },
                { width: '550px', height: '550px', background: '#7c3aed', top: '640px', left: '280px' },
                { width: '500px', height: '500px', background: '#db2777', bottom: '640px', right: '560px' },
                { width: '480px', height: '480px', background: '#2563eb', top: '720px', left: '140px' },
                { width: '450px', height: '450px', background: '#dc2626', bottom: '720px', right: '640px' },
                { width: '420px', height: '420px', background: '#7c3aed', top: '800px', left: '70px' },
                { width: '400px', height: '400px', background: '#059669', bottom: '800px', right: '720px' },
                { width: '380px', height: '380px', background: '#db2777', top: '880px', left: '0px' },
                { width: '360px', height: '360px', background: '#2563eb', bottom: '880px', right: '800px' },
                { width: '340px', height: '340px', background: '#dc2626', top: '960px', left: '-70px' },
                { width: '320px', height: '320px', background: '#7c3aed', bottom: '960px', right: '880px' }
              ];
              return (
                <div key={i} className="fluid-blob" style={{
                  ...configs[i],
                  position: 'absolute',
                  borderRadius: '50%',
                  filter: 'blur(180px)',
                  opacity: '1',
                  animation: `float ${0.8 + i * 0.12}s ease-in-out infinite`
                }}></div>
              );
            })}
            <div className="fluid-text" style={{
              fontSize: '1200px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              textShadow: '0 0 220px rgba(255,255,255,1), 0 0 440px rgba(255,255,255,0.85), 0 0 660px rgba(255,255,255,0.7), 0 0 880px rgba(255,255,255,0.55), 0 0 1100px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'sticker-style':
        return (
          <div style={{
            background: '#3f3f46',
            backgroundImage: 'linear-gradient(30deg, #27272a 8%, transparent 8.5%, transparent 91.5%, #27272a 91.5%, #27272a), linear-gradient(150deg, #27272a 8%, transparent 8.5%, transparent 91.5%, #27272a 91.5%, #27272a)',
            backgroundSize: '100px 170px'
          }}>
            <div className="sticker-body" style={{
              background: '#fff',
              padding: '160px 270px',
              transform: 'rotate(-18deg)',
              borderRadius: '90px',
              boxShadow: '100px 100px 180px rgba(0,0,0,0.98), 0 0 280px rgba(255,255,255,0.3)'
            }}>
              <div className="sticker-text" style={{
                fontSize: '1200px',
                fontWeight: '900',
                color: '#000',
                textShadow: '25px 25px 0 rgba(0,0,0,0.38), 0 0 200px rgba(0,0,0,0.28)'
              }}>b</div>
            </div>
          </div>
        );

      // NEW STYLES
      case 'wood-carved':
        return (
          <div style={{
            background: '#3f2e21',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 12px, transparent 12px, transparent 24px)'
          }}>
            <div className="wood-board" style={{
              width: '1400px',
              height: '1100px',
              background: '#5d4037',
              borderColor: '#3e2723',
              borderWidth: '32px',
              boxShadow: 'inset 0 0 400px rgba(0,0,0,1), 0 100px 200px rgba(0,0,0,1), 0 0 350px rgba(93, 64, 55, 0.85), 0 0 450px rgba(62, 39, 35, 0.7), 0 0 550px rgba(41, 26, 14, 0.55)'
            }}>
              <div className="wood-text" style={{
                fontSize: '1200px',
                color: '#3e2723',
                textShadow: '10px 10px 25px rgba(255,255,255,0.45), inset 20px 20px 50px rgba(0,0,0,1), 0 0 220px rgba(62, 39, 35, 0.85), 0 0 350px rgba(93, 64, 55, 0.7), 0 0 450px rgba(29, 19, 13, 0.55)'
              }}>b</div>
            </div>
          </div>
        );
      case 'leather-patch':
        return (
          <div style={{ background: '#1c1917' }}>
            <div className="leather-patch" style={{
              width: '1200px',
              height: '1200px',
              background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
              boxShadow: '0 80px 180px rgba(0,0,0,1), inset 0 0 220px rgba(0,0,0,0.85), 0 0 280px rgba(120, 113, 108, 0.65), 0 0 450px rgba(120, 113, 108, 0.45), 0 0 550px rgba(120, 113, 108, 0.35)',
              borderColor: '#78716c',
              borderWidth: '20px',
              borderStyle: 'dashed'
            }}>
              <div className="leather-text" style={{
                fontSize: '1200px',
                color: '#1c1917',
                textShadow: '10px 10px 0 rgba(255,255,255,0.22), -10px -10px 0 rgba(0,0,0,0.98), 0 0 220px rgba(28, 25, 23, 1), 0 0 350px rgba(41, 37, 36, 0.85), 0 0 450px rgba(63, 51, 43, 0.65)'
              }}>b</div>
            </div>
          </div>
        );
      case 'cloud-dream':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="cloud-shape" style={{
                ...{
                  0: { width: '900px', height: '360px', top: '15px', left: '15px' },
                  1: { width: '850px', height: '340px', top: '40px', right: '20px' },
                  2: { width: '800px', height: '320px', bottom: '320px', left: '40px' },
                  3: { width: '750px', height: '300px', bottom: '280px', right: '60px' },
                  4: { width: '700px', height: '280px', top: '320px', left: '320px' },
                  5: { width: '650px', height: '260px', top: '380px', right: '300px' },
                  6: { width: '600px', height: '240px', bottom: '40px', left: '400px' },
                  7: { width: '580px', height: '230px', top: '60px', right: '400px' },
                  8: { width: '560px', height: '220px', bottom: '380px', left: '300px' },
                  9: { width: '540px', height: '210px', top: '420px', right: '320px' },
                  10: { width: '520px', height: '200px', bottom: '20px', right: '440px' },
                  11: { width: '500px', height: '190px', top: '20px', left: '480px' },
                  12: { width: '480px', height: '180px', bottom: '420px', right: '500px' },
                  13: { width: '460px', height: '170px', top: '460px', left: '140px' },
                  14: { width: '440px', height: '160px', bottom: '10px', left: '520px' },
                  15: { width: '420px', height: '150px', top: '500px', right: '140px' },
                  16: { width: '400px', height: '140px', bottom: '480px', right: '560px' },
                  17: { width: '380px', height: '130px', top: '5px', left: '580px' },
                  18: { width: '360px', height: '120px', bottom: '520px', right: '600px' },
                  19: { width: '340px', height: '110px', top: '540px', left: '20px' },
                  20: { width: '320px', height: '100px', bottom: '10px', right: '640px' },
                  21: { width: '300px', height: '90px', top: '580px', left: '-20px' },
                  22: { width: '280px', height: '80px', bottom: '560px', right: '680px' },
                  23: { width: '260px', height: '70px', top: '620px', left: '-40px' },
                  24: { width: '240px', height: '60px', bottom: '600px', right: '720px' }
                }[i],
                filter: 'blur(60px)',
                opacity: '1',
                animation: `float ${1.2 + i * 0.1}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="cloud-text" style={{
              fontSize: '1300px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 50px 200px rgba(37, 99, 235, 0.85), 0 0 450px rgba(96, 165, 250, 0.75), 0 0 700px rgba(147, 197, 253, 0.65), 0 0 950px rgba(186, 230, 253, 0.55), 0 0 1200px rgba(125, 211, 252, 0.45), 0 0 1450px rgba(56, 189, 248, 0.35)',
              filter: 'drop-shadow(0 80px 160px rgba(37, 99, 235, 0.75))'
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
              fontSize: '1300px',
              color: '#facc15',
              transform: 'rotate(-20deg)',
              textShadow: '45px 45px 0 #db2777, 90px 90px 0 #000, 0 0 280px rgba(250, 204, 21, 1), 0 0 560px rgba(250, 204, 21, 0.85), 0 0 840px rgba(250, 204, 21, 0.7), 0 0 1120px rgba(250, 204, 21, 0.55), 0 0 1400px rgba(250, 204, 21, 0.4)',
              WebkitTextStroke: '18px #000',
              filter: 'drop-shadow(22px 22px 44px rgba(0,0,0,0.98))'
            }}>b</div>
            <div className="graf-drip" style={{
              width: '45px',
              height: '280px',
              background: '#facc15',
              bottom: '-200px',
              borderRadius: '22px',
              boxShadow: '0 0 70px rgba(250, 204, 21, 0.95)'
            }}></div>
          </div>
        );
      case 'mosaic-tile':
        return (
          <>
            <div className="noise"></div>
            <div className="mosaic-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(22, 1fr)',
              gap: '14px',
              width: '1200px',
              height: '550px',
              opacity: '1'
            }}>
              {Array.from({ length: 500 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9', '#f8fafc'][Math.floor(Math.random() * 9)],
                  borderRadius: '14px',
                  opacity: '1'
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '1200px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              letterSpacing: '30px',
              textShadow: '0 0 280px rgba(255,255,255,1), 0 0 560px rgba(255,255,255,0.85), 0 0 840px rgba(255,255,255,0.7), 0 0 1120px rgba(255,255,255,0.55), 0 0 1400px rgba(255,255,255,0.4)'
            }}>b</div>
          </>
        );
      case 'smoke-fade':
        return (
          <>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="smoke-plume" style={{
                width: '1000px',
                height: '1000px',
                background: `radial-gradient(circle, ${['#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff', '#f8f8f8', '#f0f0f0', '#e8e8e8', '#e0e0e0', '#d8d8d8', '#d0d0d0'][i]} 0%, transparent 94%)`,
                filter: 'blur(140px)',
                opacity: '1',
                animation: `drift ${2.5 + i * 0.7}s infinite`,
                left: `${20 + i * 22}px`,
                top: `${20 + i * 16}px`
              }}></div>
            ))}
            <div className="smoke-text" style={{
              fontSize: '1200px',
              fontWeight: '700',
              color: 'transparent',
              background: 'linear-gradient(to right, #ccc, #eee, #fff, #eee, #ddd, #fff, #ccc)',
              WebkitBackgroundClip: 'text',
              filter: 'blur(12px)',
              letterSpacing: '30px',
              textShadow: '0 0 220px rgba(255,255,255,0.95), 0 0 450px rgba(255,255,255,0.75), 0 0 680px rgba(255,255,255,0.55)'
            }}>b</div>
          </>
        );
      case 'vaporwave':
        return (
          <div style={{
            background: 'linear-gradient(to bottom, #f9a8d4 0%, #c4b5fd 20%, #a78bfa 40%, #8b5cf6 60%, #7c3aed 75%, #6d28d9 88%, #5b21b6 95%, #4c1d95 100%)'
          }}>
            <div className="vapor-sun" style={{
              width: '900px',
              height: '900px',
              background: 'linear-gradient(to top, #fbbf24 0%, #f472b6 20%, #c084fc 40%, #a855f7 60%, #7c3aed 75%, #6d28d9 88%, #5b21b6 95%, #4c1d95 100%)',
              borderRadius: '50%',
              marginBottom: '-450px',
              boxShadow: '0 0 450px rgba(251, 191, 36, 1), 0 0 900px rgba(244, 114, 182, 0.95), 0 0 1350px rgba(192, 132, 252, 0.9), 0 0 1800px rgba(168, 85, 247, 0.85), 0 0 2250px rgba(139, 92, 246, 0.8), 0 0 2700px rgba(124, 58, 237, 0.75), 0 0 3150px rgba(109, 40, 217, 0.7)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '1200px',
              color: '#fff',
              textShadow: '22px 22px 0 #000, 0 0 220px rgba(255,255,255, 1), 0 0 450px rgba(192, 132, 252, 0.85), 0 0 680px rgba(192, 132, 252, 0.7), 0 0 910px rgba(168, 85, 247, 0.55), 0 0 1140px rgba(139, 92, 246, 0.45), 0 0 1370px rgba(124, 58, 237, 0.35), 0 0 1600px rgba(109, 40, 217, 0.25)',
              zIndex: '10',
              marginTop: '180px'
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
              borderWidth: '35px',
              boxShadow: '0 0 0 35px #000, 0 0 220px rgba(255,255,255,0.7), 0 90px 180px rgba(0,0,0,1), 0 0 350px rgba(255,255,255,0.45)',
              padding: '170px'
            }}>
              <div className="rpg-text" style={{
                fontSize: '1200px',
                color: '#fff',
                textShadow: '22px 22px 0 #000, 0 0 200px rgba(255,255,255,0.85), 0 0 400px rgba(255,255,255,0.7), 0 0 600px rgba(255,255,255,0.55), 0 0 800px rgba(255,255,255,0.45), 0 0 1000px rgba(255,255,255,0.35), 0 0 1200px rgba(255,255,255,0.25)',
                lineHeight: '1'
              }}>b<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror-scream':
        return (
          <>
            <div className="noise" style={{ opacity: '0.35' }}></div>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="horror-scratch" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `repeating-linear-gradient(${90 + i * 6}deg, transparent, transparent ${40 + i * 6}px, rgba(255,0,0,0.28) ${42 + i * 6}px, transparent ${44 + i * 6}px)`,
                pointerEvents: 'none',
                animation: `horrorPulse ${0.6 + i * 0.2}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="horror-text" style={{
              fontSize: '1300px',
              fontWeight: '700',
              color: '#ef4444',
              textShadow: '0 0 120px #7f1d1d, 0 0 240px #991b1b, 0 0 360px #b91c1c, 0 0 480px #dc2626, 0 0 600px rgba(239, 68, 68, 1), 0 0 720px rgba(127, 29, 29, 0.95), 0 0 840px rgba(185, 28, 28, 0.9), 0 0 960px rgba(220, 38, 38, 0.85), 0 0 1080px rgba(153, 27, 27, 0.8), 0 0 1200px rgba(127, 29, 29, 0.75), 0 0 1320px rgba(220, 38, 38, 0.7), 0 0 1440px rgba(153, 27, 27, 0.65), 0 0 1560px rgba(220, 38, 38, 0.6), 0 0 1680px rgba(153, 27, 27, 0.55), 0 0 1800px rgba(220, 38, 38, 0.5)',
              letterSpacing: '22px',
              animation: 'horrorPulse 0.2s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'origami-fold':
        return (
          <div style={{
            background: '#fef3c7'
          }}>
            <div className="origami-shape" style={{
              borderLeftWidth: '350px',
              borderRightWidth: '350px',
              borderBottomWidth: '700px',
              borderBottomColor: '#f59e0b',
              filter: 'drop-shadow(0 100px 180px rgba(0,0,0,0.75)) drop-shadow(0 0 220px rgba(251, 191, 36, 0.85)) drop-shadow(0 0 350px rgba(217, 119, 6, 0.7)) drop-shadow(0 0 480px rgba(180, 83, 9, 0.6)) drop-shadow(0 0 610px rgba(146, 64, 14, 0.5)) drop-shadow(0 0 740px rgba(120, 53, 15, 0.4))'
            }}></div>
            <div className="origami-shape" style={{
              position: 'absolute',
              top: '700px',
              left: '-350px',
              borderLeftWidth: '350px',
              borderRightWidth: '350px',
              borderTopWidth: '700px',
              borderTopColor: '#d97706',
              filter: 'drop-shadow(0 -50px 100px rgba(0,0,0,0.65)) drop-shadow(0 0 150px rgba(217, 119, 6, 0.75)) drop-shadow(0 0 250px rgba(180, 83, 9, 0.65))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '1200px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '10px 10px 0 rgba(255,255,255,0.85), 20px 20px 50px rgba(0,0,0,0.75), 0 0 220px rgba(245, 158, 11, 0.98), 0 0 350px rgba(217, 119, 6, 0.85), 0 0 480px rgba(180, 83, 9, 0.7), 0 0 610px rgba(146, 64, 14, 0.55)'
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
