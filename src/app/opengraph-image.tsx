import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { siteConfig } from '@/lib/content/site'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), 'public/Foto-perfil.jpeg'))
  const photoSrc = `data:image/jpeg;base64,${photoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#131313',
          padding: '60px 72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow — top left */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            left: -220,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'rgba(88, 86, 214, 0.22)',
            display: 'flex',
          }}
        />

        {/* Purple glow — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: 200,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(194, 193, 255, 0.08)',
            display: 'flex',
          }}
        />

        {/* Main content row */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#c2c1ff',
                  display: 'flex',
                }}
              />
              <span
                style={{
                  color: '#c2c1ff',
                  fontSize: 16,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                }}
              >
                Software Engineer
              </span>
            </div>

            {/* Name */}
            <div
              style={{
                color: '#e5e2e1',
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              {siteConfig.brandName}
            </div>

            {/* Tagline */}
            <div
              style={{
                color: '#918f9f',
                fontSize: 22,
                lineHeight: 1.55,
                maxWidth: 500,
              }}
            >
              {siteConfig.tagline}
            </div>

            {/* Accent bars */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                marginTop: 52,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: '#c2c1ff',
                  borderRadius: 2,
                  display: 'flex',
                }}
              />
              <div
                style={{
                  width: 22,
                  height: 3,
                  background: '#5856d6',
                  borderRadius: 2,
                  display: 'flex',
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 3,
                  background: '#464554',
                  borderRadius: 2,
                  display: 'flex',
                }}
              />
            </div>
          </div>

          {/* Right: profile photo with gradient ring */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              paddingLeft: 48,
            }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c2c1ff 0%, #5856d6 60%, #1c0b9f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
              }}
            >
              <img
                src={photoSrc}
                width={272}
                height={272}
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
