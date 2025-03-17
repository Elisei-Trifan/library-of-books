const Logo = ({ width = 40, height = 40, className = '' }) => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="368"
        width="64"
        x="32"
        y="96"
        rx="16"
        ry="16"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <line
        x1="112"
        y1="224"
        x2="240"
        y2="224"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <line
        x1="112"
        y1="400"
        x2="240"
        y2="400"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <rect
        height="304"
        width="128"
        x="112"
        y="160"
        rx="16"
        ry="16"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <rect
        height="416"
        width="96"
        x="256"
        y="48"
        rx="16"
        ry="16"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <path
        d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
    </svg>
  )
}

export default Logo
