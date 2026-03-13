import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Solvifie Consultancy - Recruitment & HR Solutions in Chennai';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0033a0 0%, #0055d4 50%, #0077ff 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Solvifie Consultancy
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Building Teams. Powering Growth.
          </div>
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 16,
            }}
          >
            {['Recruitment', 'HR Consulting', 'Staffing Solutions'].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: '10px 24px',
                    borderRadius: 50,
                    border: '2px solid rgba(255,255,255,0.4)',
                    color: '#ffffff',
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 16,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            solvifie.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
