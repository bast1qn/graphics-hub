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
              filter: 'blur(700px)',
              opacity: '8',
              background: 'radial-gradient(circle at 30% 30%, #faf5ff, #f5f3ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca, #3730a3, #312e81, #1e1b4b, transparent 80%)',
              animation: 'pulse 0.4s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(350px)',
              opacity: '6',
              background: 'radial-gradient(circle at 70% 70%, #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, transparent 70%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '4',
              background: 'radial-gradient(circle at 50% 50%, #c7d2fe, #818cf8, #6366f1, #4f46e5, transparent 60%)',
              animation: 'float 2s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '3',
              background: 'radial-gradient(circle at 20% 80%, #a5b4fc, #818cf8, #6366f1, transparent 50%)',
              animation: 'float 3s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(80px)',
              opacity: '2',
              background: 'radial-gradient(circle at 80% 20%, #818cf8, #6366f1, transparent 40%)',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 400px rgba(255,255,255,0.5), 0 200px 400px rgba(99, 102, 241, 1), 0 0 300px rgba(129, 140, 248, 0.95), 0 0 200px rgba(99, 102, 241, 0.8), 0 0 150px rgba(129, 140, 248, 0.7), 0 0 100px rgba(99, 102, 241, 0.6), 0 0 50px rgba(129, 140, 248, 0.5), 0 0 30px rgba(99, 102, 241, 0.4), inset 0 0 100px rgba(255,255,255,0.2)',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.4), rgba(167,139,250,0.35), rgba(199,210,254,0.3), rgba(224,231,255,0.25))',
              border: '12px solid rgba(255,255,255,0.95)',
              backdropFilter: 'blur(80px)',
              animation: 'float 1.5s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '500px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 7%, #f5f3ff 14%, #ede9fe 21%, #e0e7ff 28%, #c7d2fe 35%, #a5b4fc 42%, #818cf8 49%, #6366f1 56%, #4f46e5 63%, #4338ca 70%, #3730a3 77%, #312e81 84%, #1e1b4b 91%, #030712 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 150px rgba(255,255,255,1)) drop-shadow(0 0 300px rgba(129,140,248,1)) drop-shadow(0 0 450px rgba(99,102,241,0.9)) drop-shadow(0 0 600px rgba(79,70,229,0.7)) drop-shadow(0 0 750px rgba(67,56,202,0.5)) drop-shadow(0 0 900px rgba(55,48,163,0.4)) drop-shadow(0 0 1050px rgba(30,27,75,0.3))',
                animation: 'pulse 1s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'orb-rose':
        return (
          <>
            <div className="noise"></div>
            <div className="orb-glow glow-rose" style={{
              filter: 'blur(700px)',
              opacity: '8',
              background: 'radial-gradient(circle at 30% 30%, #fff1f2, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519, transparent 80%)',
              animation: 'pulse 0.4s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(350px)',
              opacity: '6',
              background: 'radial-gradient(circle at 70% 70%, #ffe4e6, #fecdd3, #fda4af, #fb7185, #f43f5e, transparent 70%)'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(200px)',
              opacity: '4',
              background: 'radial-gradient(circle at 50% 50%, #fb7185, #f43f5e, #e11d48, transparent 60%)',
              animation: 'float 2s ease-in-out infinite'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(120px)',
              opacity: '3',
              background: 'radial-gradient(circle at 20% 80%, #f43f5e, #e11d48, #be123c, transparent 50%)',
              animation: 'float 3s ease-in-out infinite reverse'
            }}></div>
            <div className="orb-glow" style={{
              filter: 'blur(80px)',
              opacity: '2',
              background: 'radial-gradient(circle at 80% 20%, #fb7185, #f43f5e, transparent 40%)',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div className="glass-pane" style={{
              boxShadow: 'inset 0 0 400px rgba(255,255,255,0.5), 0 200px 400px rgba(244, 63, 94, 1), 0 0 300px rgba(251, 113, 133, 0.95), 0 0 200px rgba(244, 63, 94, 0.8), 0 0 150px rgba(251, 113, 133, 0.7), 0 0 100px rgba(244, 63, 94, 0.6), 0 0 50px rgba(251, 113, 133, 0.5), 0 0 30px rgba(244, 63, 94, 0.4), inset 0 0 100px rgba(255,255,255,0.2)',
              background: 'linear-gradient(135deg, rgba(244,63,94,0.4), rgba(251,113,133,0.35), rgba(254,205,211,0.3), rgba(255,241,242,0.25))',
              border: '12px solid rgba(255,255,255,0.95)',
              backdropFilter: 'blur(80px)',
              animation: 'float 1.5s ease-in-out infinite'
            }}>
              <div className="orb-text" style={{
                fontSize: '500px',
                fontWeight: '900',
                background: 'linear-gradient(180deg, #ffffff 0%, #fff1f2 7%, #ffe4e6 14%, #fecdd3 21%, #fda4af 28%, #fb7185 35%, #f43f5e 42%, #e11d48 49%, #be123c 56%, #9f1239 63%, #881337 70%, #7c2d12 77%, #4c0519 84%, #1a0505 91%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 150px rgba(255,255,255,1)) drop-shadow(0 0 300px rgba(251,113,133,1)) drop-shadow(0 0 450px rgba(244,63,94,0.9)) drop-shadow(0 0 600px rgba(225,29,72,0.7)) drop-shadow(0 0 750px rgba(190,18,60,0.5)) drop-shadow(0 0 900px rgba(159,18,57,0.4)) drop-shadow(0 0 1050px rgba(88,19,55,0.3))',
                animation: 'pulse 1s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'grad-purple':
        return (
          <div style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.95) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.9) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.85) 0%, transparent 70%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.8) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(232, 121, 249, 0.75) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(217, 70, 239, 0.7) 0%, transparent 40%), radial-gradient(circle at 60% 40%, rgba(192, 132, 252, 0.6) 0%, transparent 35%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '560px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #fae8ff, #f5d0fe, #e9d5ff, #d8b4fe, #c084fc, #e879f9, #f472b6, #fb7185, #f43f5e, #e11d48, #be123c, #9f1239, #881337, #7c2d12, #4c0519)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 100px 250px rgba(192, 132, 252, 1), 0 0 400px rgba(168, 85, 247, 1), 0 0 200px rgba(236, 72, 153, 0.9), 0 0 130px rgba(232, 121, 249, 0.8), 0 0 80px rgba(244, 114, 182, 0.7), 0 0 30px rgba(217, 70, 239, 0.6), 0 0 15px rgba(192, 132, 252, 0.5)',
              letterSpacing: '-28px',
              filter: 'drop-shadow(0 0 150px rgba(217, 70, 239, 1)) drop-shadow(0 0 300px rgba(192, 132, 252, 0.9)) drop-shadow(0 0 450px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 600px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 750px rgba(126, 34, 206, 0.4)) drop-shadow(0 0 900px rgba(88, 28, 135, 0.3))',
              animation: 'float 2s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'grad-dark':
        return (
          <div style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(226, 232, 240, 0.35) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(241, 245, 249, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.25) 0%, transparent 40%), radial-gradient(circle at 60% 40%, rgba(226, 232, 240, 0.2) 0%, transparent 35%)'
          }}>
            <div className="grad-text" style={{
              fontSize: '560px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff, #fafafa, #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 70px 180px rgba(255,255,255, 1), 0 0 250px rgba(226, 232, 240, 0.9), 0 0 150px rgba(255,255,255, 0.7), 0 0 100px rgba(203, 213, 225, 0.6), 0 0 50px rgba(241, 245, 249, 0.5), 0 0 20px rgba(255,255,255,0.4), 0 0 10px rgba(226, 232, 240, 0.3)',
              letterSpacing: '-28px',
              filter: 'drop-shadow(0 0 150px rgba(255,255,255, 0.8)) drop-shadow(0 0 300px rgba(226, 232, 240, 0.7)) drop-shadow(0 0 450px rgba(148, 163, 184, 0.6)) drop-shadow(0 0 600px rgba(71, 85, 105, 0.5)) drop-shadow(0 0 750px rgba(30, 58, 138, 0.4)) drop-shadow(0 0 900px rgba(15, 23, 42, 0.3))',
              animation: 'float 3s ease-in-out infinite'
            }}>b</div>
          </div>
        );
      case 'sig-cursive':
        return (
          <div className="sig-circle" style={{
            boxShadow: 'inset 0 0 350px rgba(0,0,0,0.25), 0 180px 360px rgba(0,0,0, 1), 0 0 300px rgba(0,0,0,0.8), 0 0 240px rgba(0,0,0,0.7), 0 0 180px rgba(0,0,0,0.6), 0 0 120px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 10%, #f8fafc 20%, #f1f5f9 30%, #e2e8f0 40%, #cbd5e1 50%, #94a3b8 60%, #64748b 70%, #475569 80%, #334155 90%, #1e293b 100%)',
            border: '28px solid #e2e8f0',
            backdropFilter: 'blur(40px)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <div className="sig-text" style={{
              fontSize: '580px',
              background: 'linear-gradient(135deg, #64748b, #475569, #334155, #1e293b, #0f172a, #020617, #000000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(10px 10px 20px rgba(0,0,0,0.4)) drop-shadow(0 0 80px rgba(0,0,0,0.35)) drop-shadow(0 0 160px rgba(0,0,0,0.3)) drop-shadow(0 0 240px rgba(0,0,0,0.25)) drop-shadow(0 0 320px rgba(0,0,0,0.2)) drop-shadow(0 0 400px rgba(30, 41, 59, 0.15))',
              transform: 'rotate(-3deg)',
              animation: 'pulse 5s ease-in-out infinite'
            }}>bast1qn</div>
          </div>
        );
      case 'badge-crest':
        return (
          <>
            <div className="badge-border" style={{
              background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 10%, #1c1917 20%, #292524 30%, #44403c 40%, #57534e 50%, #78716c 60%, #a8a29e 70%, #d6d3d1 80%, #f5f5f4 90%, #ffffff 100%)',
              boxShadow: 'inset 0 0 350px rgba(0,0,0,1), 0 180px 360px rgba(0,0,0,1), 0 0 300px rgba(0,0,0,0.95), 0 0 240px rgba(0,0,0,0.8), 0 0 180px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.4), inset 0 12px 24px rgba(255,255,255,0.35), inset 0 0 100px rgba(255,255,255,0.15), inset 0 0 40px rgba(0,0,0,0.7), inset 0 0 15px rgba(255,255,255,0.08)',
              borderColor: '#d6d3d1',
              borderWidth: '32px'
            }}>
              <div className="badge-main" style={{
                fontSize: '300px',
                letterSpacing: '28px',
                background: 'linear-gradient(to bottom, #ffffff, #fefefe, #fafafa, #f5f5f4, #e7e5e4, #d6d3d1, #a8a29e, #78716c, #57534e, #44403c, #292524, #1c1917)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '10px 10px 20px rgba(0,0,0,0.9), 0 0 100px rgba(214, 211, 209, 0.8), 0 0 70px rgba(255,255,255, 0.6), 0 0 50px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.3), 0 0 8px rgba(214, 211, 209, 0.2)'
              }}>bast1qn</div>
              <div className="badge-sub" style={{
                color: '#a8a29e',
                fontSize: '85px',
                letterSpacing: '50px',
                textShadow: '8px 8px 16px rgba(0,0,0,1), 0 0 70px rgba(168, 162, 158, 0.8), 0 0 50px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.3), 0 0 8px rgba(168, 162, 158, 0.2)'
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
              boxShadow: '0 0 80px #3b82f6, 0 0 160px #3b82f6, 0 0 240px #2563eb, 0 0 320px #1d4ed8, inset 0 0 80px #3b82f6, inset 0 0 120px #2563eb',
              animation: 'neonPulse 1s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '500px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '8px',
                textShadow: '0 0 60px #3b82f6, 0 0 120px #3b82f6, 0 0 180px #2563eb, 0 0 240px #1d4ed8, 0 0 300px #1e40af, 0 0 360px #1e3a8a'
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
              boxShadow: '0 0 80px #ec4899, 0 0 160px #ec4899, 0 0 240px #db2777, 0 0 320px #be185d, inset 0 0 80px #ec4899, inset 0 0 120px #db2777',
              animation: 'neonPulse 1s ease-in-out infinite',
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)'
            }}>
              <div className="neon-text" style={{
                fontSize: '500px',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '8px',
                textShadow: '0 0 60px #ec4899, 0 0 120px #ec4899, 0 0 180px #db2777, 0 0 240px #be185d, 0 0 300px #9d174d, 0 0 360px #831843'
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
              boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(34, 197, 94, 0.5), inset 0 0 40px rgba(34, 197, 94, 0.1)',
              padding: '60px 90px',
              background: 'rgba(0, 20, 0, 0.95)'
            }}>
              <div className="tech-b" style={{
                fontSize: '500px',
                color: '#22c55e',
                textShadow: '0 0 80px #22c55e, 0 0 160px #16a34a, 0 0 240px #15803d, 0 0 320px #166534',
                letterSpacing: '-8px'
              }}>b</div>
            </div>
          </>
        );
      case 'glitch':
        return (
          <>
            <div className="noise"></div>
            <div className="glitch-text" data-text="bast1qn" style={{
              fontSize: '550px',
              fontWeight: '900',
              textShadow: '40px 0 #ff006e, -40px 0 #00f7ff, 20px 20px 0 rgba(0,0,0,0.9), 0 0 180px rgba(255,0,110,0.8), 0 0 360px rgba(0,247,255,0.8), 0 0 540px rgba(255,0,110,0.6), 0 0 720px rgba(0,247,255,0.5), 0 0 900px rgba(255,0,110,0.4)',
              animation: 'glitch 0.06s infinite'
            }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#ff006e', opacity: '1', animation: 'glitch2 0.1s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#00f7ff', opacity: '0.85', animation: 'glitch3 0.12s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#ffff00', opacity: '0.7', animation: 'glitch4 0.15s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#ff00ff', opacity: '0.55', animation: 'glitch5 0.18s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#00ff00', opacity: '0.4', animation: 'glitch6 0.22s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#ff6600', opacity: '0.3', animation: 'glitch 0.26s infinite' }}>bast1qn</div>
            <div style={{ position: 'absolute', fontSize: '550px', fontWeight: '900', color: '#0066ff', opacity: '0.2', animation: 'glitch2 0.3s infinite' }}>bast1qn</div>
          </>
        );
      case 'matrix-code':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="matrix-col" style={{
                left: `${50 + i * 50}px`,
                animationDelay: `${i * 0.15}s`,
                fontSize: '45px',
                opacity: '0.9',
                textShadow: '0 0 20px #22c55e'
              }}>
                {Array.from({ length: 20 }).map((_, j) => (
                  <div key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </div>
            ))}
            <div className="matrix-text" style={{
              fontSize: '500px',
              padding: '30px 60px',
              borderColor: '#22c55e',
              borderWidth: '4px',
              textShadow: '0 0 40px #22c55e, 0 0 80px #16a34a, 0 0 120px #15803d, 0 0 160px #166534',
              background: 'rgba(0, 0, 0, 0.9)',
              boxShadow: '0 0 100px rgba(34, 197, 94, 0.7)'
            }}>b</div>
          </>
        );
      case 'pcb-board':
        return (
          <>
            <div className="pcb-traces" style={{ opacity: '0.5' }}></div>
            <div className="noise"></div>
            <div className="pcb-chip" style={{
              borderColor: '#22c55e',
              boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(34, 197, 94, 0.6), inset 0 0 40px rgba(34, 197, 94, 0.2)',
              width: '600px',
              height: '380px'
            }}>
              <div className="pcb-text" style={{
                fontSize: '500px',
                color: '#22c55e',
                textShadow: '0 0 60px #22c55e, 0 0 120px #16a34a, 0 0 180px #15803d, 0 0 240px #166534',
                letterSpacing: '-5px'
              }}>b</div>
            </div>
          </>
        );

      // ELEMENTS & MATERIALS
      case 'luxury-gold':
        return (
          <>
            <div className="lux-border" style={{ opacity: '0.9' }}></div>
            <div className="lux-border" style={{
              opacity: '0.7',
              transform: 'scale(0.92)',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div className="lux-text" style={{
              fontSize: '520px',
              fontWeight: '700',
              background: 'linear-gradient(to bottom, #fff 15%, #fcd34d 25%, #f59e0b 35%, #d97706 45%, #b45309 50%, #d97706 55%, #f59e0b 65%, #fcd34d 75%, #fff 85%, #fcd34d 95%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(251, 191, 36, 0.8), 0 0 160px rgba(245, 158, 11, 0.6), 0 0 240px rgba(217, 119, 6, 0.5)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
            }}>b</div>
          </>
        );
      case 'chrome-metal':
        return (
          <>
            <div className="chrome-refl" style={{
              animation: 'float 2s ease-in-out infinite',
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)'
            }}></div>
            <div className="chrome-text" style={{
              fontSize: '580px',
              background: 'linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 10%, #cbd5e1 20%, #94a3b8 30%, #64748b 40%, #475569 45%, #1e293b 50%, #475569 55%, #64748b 60%, #94a3b8 70%, #cbd5e1 80%, #e2e8f0 90%, #f1f5f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 20px 0 rgba(0,0,0,0.6)) drop-shadow(0 0 80px rgba(148, 163, 184, 0.5))',
              textShadow: '0 0 60px rgba(203, 213, 225, 0.8)'
            }}>b</div>
          </>
        );
      case 'magma-flare':
        return (
          <>
            <div className="magma-bg" style={{
              opacity: '1',
              background: 'radial-gradient(circle, #fca5a5 0%, #ef4444 20%, #dc2626 40%, #b91c1c 60%, #7f1d1d 80%, #000 100%)'
            }}></div>
            <div className="magma-text" style={{
              fontSize: '580px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 0 20px #fca5a5, 0 0 60px #ef4444, 0 0 120px #dc2626, 0 0 180px #b91c1c, 0 0 240px #7f1d1d, 0 0 300px #450a0a',
              background: 'linear-gradient(to top, #fef08a 0%, #fcd34d 15%, #f59e0b 30%, #ef4444 50%, #dc2626 70%, #7f1d1d 90%, #450a0a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'magmaPulse 1s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'ice-crystal':
        return (
          <div style={{
            background: 'radial-gradient(circle, #f0f9ff 0%, #e0f2fe 20%, #bae6fd 40%, #7dd3fc 60%, #38bdf8 80%, #0ea5e9 100%)'
          }}>
            <div className="ice-crack" style={{ opacity: '0.7' }}></div>
            <div className="ice-text" style={{
              fontSize: '560px',
              fontWeight: '700',
              color: '#fff',
              textShadow: '0 10px 30px rgba(0,0,0,0.15), 0 0 60px #bae6fd, 0 0 120px #7dd3fc, 0 0 180px #38bdf8, 0 0 240px #0ea5e9',
              filter: 'drop-shadow(0 20px 40px rgba(14, 165, 233, 0.3))'
            }}>b</div>
          </div>
        );

      // ART & ABSTRACT
      case 'holo-card':
        return (
          <>
            <div className="noise"></div>
            <div className="holo-circle" style={{
              background: 'linear-gradient(135deg, #f0f 0%, #0ff 25%, #ff0 50%, #f0f 75%, #0ff 100%)',
              boxShadow: '0 0 100px rgba(255,255,255,0.3), 0 0 200px rgba(255,0,255,0.2), 0 0 300px rgba(0,255,255,0.2)',
              animation: 'holoRotate 3s linear infinite',
              width: '650px',
              height: '650px'
            }}>
              <div className="holo-text" style={{
                fontSize: '520px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f0f 0%, #0ff 25%, #ff0 50%, #f0f 75%, #0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pulse 2s ease-in-out infinite'
              }}>b</div>
            </div>
          </>
        );
      case 'pop-burst':
        return (
          <div style={{
            background: '#fef08a',
            backgroundImage: 'radial-gradient(#facc15 30%, transparent 30%), radial-gradient(#facc15 30%, transparent 30%)',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px'
          }}>
            <div className="pop-burst" style={{
              width: '800px',
              height: '800px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 100px rgba(239, 68, 68, 0.5), inset 0 0 40px rgba(255,255,255,0.3)'
            }}>
              <div className="pop-text" style={{
                fontSize: '600px',
                color: '#ef4444',
                textShadow: '10px 10px 0 #000, 0 0 60px rgba(239, 68, 68, 0.8), 0 0 120px rgba(239, 68, 68, 0.5)',
                letterSpacing: '8px',
                transform: 'rotate(-8deg)',
                animation: 'bounce 0.8s ease-in-out infinite'
              }}>b</div>
            </div>
          </div>
        );
      case 'fluid-art':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 10 }).map((_, i) => {
              const configs = [
                { width: '700px', height: '700px', background: '#7c3aed', top: '-120px', left: '-120px' },
                { width: '600px', height: '600px', background: '#db2777', bottom: '-60px', right: '-60px' },
                { width: '500px', height: '500px', background: '#2563eb', top: '180px', left: '180px' },
                { width: '450px', height: '450px', background: '#059669', bottom: '150px', left: '100px' },
                { width: '400px', height: '400px', background: '#dc2626', top: '250px', right: '120px' },
                { width: '350px', height: '350px', background: '#7c3aed', bottom: '200px', right: '200px' },
                { width: '300px', height: '300px', background: '#db2777', top: '100px', right: '250px' },
                { width: '280px', height: '280px', background: '#2563eb', bottom: '100px', left: '250px' },
                { width: '250px', height: '250px', background: '#059669', top: '300px', left: '200px' },
                { width: '220px', height: '220px', background: '#dc2626', bottom: '300px', right: '250px' }
              ];
              return (
                <div key={i} className="fluid-blob" style={{
                  ...configs[i],
                  position: 'absolute',
                  borderRadius: '50%',
                  filter: 'blur(80px)',
                  opacity: '0.9',
                  animation: `float ${2 + i * 0.3}s ease-in-out infinite`
                }}></div>
              );
            })}
            <div className="fluid-text" style={{
              fontSize: '560px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              textShadow: '0 0 80px rgba(255,255,255,0.8), 0 0 160px rgba(255,255,255,0.5)'
            }}>b</div>
          </>
        );
      case 'sticker-style':
        return (
          <div style={{
            background: '#3f3f46',
            backgroundImage: 'linear-gradient(30deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a), linear-gradient(150deg, #27272a 12%, transparent 12.5%, transparent 87%, #27272a 87.5%, #27272a)',
            backgroundSize: '100px 180px'
          }}>
            <div className="sticker-body" style={{
              background: '#fff',
              padding: '60px 120px',
              transform: 'rotate(-12deg)',
              borderRadius: '30px',
              boxShadow: '40px 40px 60px rgba(0,0,0,0.7), 0 0 100px rgba(255,255,255,0.1)'
            }}>
              <div className="sticker-text" style={{
                fontSize: '520px',
                fontWeight: '900',
                color: '#000',
                textShadow: '10px 10px 0 rgba(0,0,0,0.2), 0 0 60px rgba(0,0,0,0.1)'
              }}>b</div>
            </div>
          </div>
        );

      // NEW STYLES
      case 'wood-carved':
        return (
          <div style={{
            background: '#3f2e21',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 15px, transparent 15px, transparent 30px)'
          }}>
            <div className="wood-board" style={{
              width: '800px',
              height: '600px',
              background: '#5d4037',
              borderColor: '#3e2723',
              borderWidth: '16px',
              boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8), 0 40px 80px rgba(0,0,0,0.8), 0 0 120px rgba(93, 64, 55, 0.5)'
            }}>
              <div className="wood-text" style={{
                fontSize: '540px',
                color: '#3e2723',
                textShadow: '4px 4px 10px rgba(255,255,255,0.25), inset 8px 8px 20px rgba(0,0,0,0.9), 0 0 80px rgba(62, 39, 35, 0.5)'
              }}>b</div>
            </div>
          </div>
        );
      case 'leather-patch':
        return (
          <div style={{ background: '#1c1917' }}>
            <div className="leather-patch" style={{
              width: '700px',
              height: '700px',
              background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 0 80px rgba(0,0,0,0.5), 0 0 100px rgba(120, 113, 108, 0.3)',
              borderColor: '#78716c',
              borderWidth: '8px',
              borderStyle: 'dashed'
            }}>
              <div className="leather-text" style={{
                fontSize: '520px',
                color: '#1c1917',
                textShadow: '4px 4px 0 rgba(255,255,255,0.12), -4px -4px 0 rgba(0,0,0,0.7), 0 0 80px rgba(28, 25, 23, 0.8)'
              }}>b</div>
            </div>
          </div>
        );
      case 'cloud-dream':
        return (
          <>
            <div className="noise"></div>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="cloud-shape" style={{
                ...{
                  0: { width: '500px', height: '200px', top: '50px', left: '50px' },
                  1: { width: '450px', height: '180px', top: '100px', right: '80px' },
                  2: { width: '400px', height: '160px', bottom: '200px', left: '100px' },
                  3: { width: '350px', height: '140px', bottom: '150px', right: '120px' },
                  4: { width: '300px', height: '120px', top: '200px', left: '200px' },
                  5: { width: '280px', height: '110px', top: '250px', right: '180px' },
                  6: { width: '260px', height: '100px', bottom: '100px', left: '250px' },
                  7: { width: '240px', height: '90px', top: '150px', right: '250px' },
                  8: { width: '220px', height: '80px', bottom: '250px', left: '180px' },
                  9: { width: '200px', height: '70px', top: '300px', right: '200px' },
                  10: { width: '180px', height: '60px', bottom: '80px', right: '300px' },
                  11: { width: '160px', height: '50px', top: '80px', left: '320px' }
                }[i],
                filter: 'blur(30px)',
                opacity: '0.95',
                animation: `float ${3 + i * 0.25}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="cloud-text" style={{
              fontSize: '580px',
              fontWeight: '900',
              color: '#fff',
              textShadow: '0 20px 80px rgba(37, 99, 235, 0.5), 0 0 160px rgba(96, 165, 250, 0.4), 0 0 240px rgba(147, 197, 253, 0.3)',
              filter: 'drop-shadow(0 30px 60px rgba(37, 99, 235, 0.4))'
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
              fontSize: '580px',
              color: '#facc15',
              transform: 'rotate(-15deg)',
              textShadow: '16px 16px 0 #db2777, 32px 32px 0 #000, 0 0 100px rgba(250, 204, 21, 0.8), 0 0 200px rgba(250, 204, 21, 0.5)',
              WebkitTextStroke: '6px #000',
              filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.7))'
            }}>b</div>
            <div className="graf-drip" style={{
              width: '16px',
              height: '100px',
              background: '#facc15',
              bottom: '-60px',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(250, 204, 21, 0.6)'
            }}></div>
          </div>
        );
      case 'mosaic-tile':
        return (
          <>
            <div className="noise"></div>
            <div className="mosaic-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '6px',
              width: '750px',
              height: '350px',
              opacity: '0.9'
            }}>
              {Array.from({ length: 250 }).map((_, i) => (
                <div key={i} className="mosaic-tile" style={{
                  background: ['#334155', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0'][Math.floor(Math.random() * 6)],
                  borderRadius: '6px',
                  opacity: '0.9'
                }}></div>
              ))}
            </div>
            <div className="mosaic-text" style={{
              fontSize: '540px',
              fontWeight: '700',
              color: '#fff',
              mixBlendMode: 'overlay',
              letterSpacing: '14px',
              textShadow: '0 0 100px rgba(255,255,255,0.8), 0 0 200px rgba(255,255,255,0.5)'
            }}>b</div>
          </>
        );
      case 'smoke-fade':
        return (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="smoke-plume" style={{
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, ${['#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc'][i]} 0%, transparent 80%)`,
                filter: 'blur(60px)',
                opacity: '0.8',
                animation: `drift ${8 + i * 2}s infinite`,
                left: `${50 + i * 40}px`,
                top: `${50 + i * 30}px`
              }}></div>
            ))}
            <div className="smoke-text" style={{
              fontSize: '540px',
              fontWeight: '700',
              color: 'transparent',
              background: 'linear-gradient(to right, #ccc, #fff, #eee, #fff, #ddd)',
              WebkitBackgroundClip: 'text',
              filter: 'blur(6px)',
              letterSpacing: '14px',
              textShadow: '0 0 80px rgba(255,255,255,0.6)'
            }}>b</div>
          </>
        );
      case 'vaporwave':
        return (
          <div style={{
            background: 'linear-gradient(to bottom, #f9a8d4 0%, #c4b5fd 50%, #a78bfa 100%)'
          }}>
            <div className="vapor-sun" style={{
              width: '400px',
              height: '400px',
              background: 'linear-gradient(to top, #fbbf24 0%, #f472b6 50%, #c084fc 100%)',
              borderRadius: '50%',
              marginBottom: '-200px',
              boxShadow: '0 0 150px rgba(251, 191, 36, 0.8), 0 0 300px rgba(244, 114, 182, 0.6), 0 0 450px rgba(192, 132, 252, 0.4)'
            }}></div>
            <div className="vapor-text" style={{
              fontSize: '540px',
              color: '#fff',
              textShadow: '8px 8px 0 #000, 0 0 80px rgba(255,255,255,0.8), 0 0 160px rgba(192, 132, 252, 0.5)',
              zIndex: '10',
              marginTop: '80px'
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
              borderWidth: '12px',
              boxShadow: '0 0 0 12px #000, 0 0 80px rgba(255,255,255,0.3), 0 30px 60px rgba(0,0,0,0.8)',
              padding: '60px'
            }}>
              <div className="rpg-text" style={{
                fontSize: '540px',
                color: '#fff',
                textShadow: '8px 8px 0 #000, 0 0 60px rgba(255,255,255,0.5), 0 0 120px rgba(255,255,255,0.3)',
                lineHeight: '1'
              }}>b<span className="rpg-cursor"></span></div>
            </div>
          </div>
        );
      case 'horror-scream':
        return (
          <>
            <div className="noise" style={{ opacity: '0.15' }}></div>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="horror-scratch" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `repeating-linear-gradient(${90 + i * 15}deg, transparent, transparent ${100 + i * 20}px, rgba(255,0,0,0.15) ${102 + i * 20}px, transparent ${104 + i * 20}px)`,
                pointerEvents: 'none',
                animation: `horrorPulse ${2 + i * 0.5}s ease-in-out infinite`
              }}></div>
            ))}
            <div className="horror-text" style={{
              fontSize: '580px',
              fontWeight: '700',
              color: '#ef4444',
              textShadow: '0 0 40px #7f1d1d, 0 0 80px #991b1b, 0 0 120px #b91c1c, 0 0 160px #dc2626, 0 0 200px rgba(239, 68, 68, 0.8), 0 0 280px rgba(127, 29, 29, 0.6), 0 0 360px rgba(185, 28, 28, 0.4), 0 0 440px rgba(220, 38, 38, 0.3)',
              letterSpacing: '8px',
              animation: 'horrorPulse 1.5s ease-in-out infinite'
            }}>b</div>
          </>
        );
      case 'origami-fold':
        return (
          <div style={{
            background: '#fef3c7'
          }}>
            <div className="origami-shape" style={{
              borderLeftWidth: '140px',
              borderRightWidth: '140px',
              borderBottomWidth: '280px',
              borderBottomColor: '#f59e0b',
              filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 80px rgba(251, 191, 36, 0.5))'
            }}></div>
            <div className="origami-shape" style={{
              position: 'absolute',
              top: '280px',
              left: '-140px',
              borderLeftWidth: '140px',
              borderRightWidth: '140px',
              borderTopWidth: '280px',
              borderTopColor: '#d97706',
              filter: 'drop-shadow(0 -20px 40px rgba(0,0,0,0.3))'
            }}></div>
            <div className="origami-text" style={{
              fontSize: '540px',
              fontWeight: '900',
              color: '#78350f',
              textShadow: '4px 4px 0 rgba(255,255,255,0.5), 8px 8px 20px rgba(0,0,0,0.4), 0 0 80px rgba(245, 158, 11, 0.7)'
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
