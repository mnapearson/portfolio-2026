import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#812bfb',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 13,
            fontFamily: 'monospace',
            fontWeight: 400,
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}
        >
          MA
        </span>
      </div>
    ),
    { ...size },
  );
}
