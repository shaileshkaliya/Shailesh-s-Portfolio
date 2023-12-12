import profilePic from '../assets/mine.png'
const Profile = () => {
  return (
    <svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
>
  <defs>
    <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
      <stop id="stop1" stopColor="rgba(145, 94, 255, 1)" offset="0%" />
      <stop id="stop2" stopColor="rgba(145, 94, 255, 1)" offset="100%" />
    </linearGradient>
  </defs>

    <mask id="mask1" mask-type="alpha">
    <path
    fill="url(#sw-gradient)"
    d="M16.4,-19.2C21.1,-15.7,24.5,-10.3,27.5,-3.4C30.5,3.6,33.1,12.1,30.9,19.7C28.7,27.3,21.8,34,13.8,36.1C5.8,38.3,-3.2,35.9,-11.8,32.7C-20.4,29.4,-28.5,25.3,-31.4,18.8C-34.3,12.4,-31.8,3.6,-29.9,-5C-28.1,-13.6,-26.8,-21.9,-21.9,-25.4C-17,-28.9,-8.5,-27.5,-1.3,-25.9C5.9,-24.4,11.8,-22.7,16.4,-19.2Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    strokeWidth={0}
    style={{ transition: "all 0.3s ease 0s" }}
    stroke="url(#sw-gradient)"
    />
    </mask>

  <g mask="url(#mask1)">
  <path
    fill="url(#sw-gradient)"
    d="M16.4,-19.2C21.1,-15.7,24.5,-10.3,27.5,-3.4C30.5,3.6,33.1,12.1,30.9,19.7C28.7,27.3,21.8,34,13.8,36.1C5.8,38.3,-3.2,35.9,-11.8,32.7C-20.4,29.4,-28.5,25.3,-31.4,18.8C-34.3,12.4,-31.8,3.6,-29.9,-5C-28.1,-13.6,-26.8,-21.9,-21.9,-25.4C-17,-28.9,-8.5,-27.5,-1.3,-25.9C5.9,-24.4,11.8,-22.7,16.4,-19.2Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    strokeWidth={0}
    style={{ transition: "all 0.3s ease 0s" }}
    stroke="url(#sw-gradient)"
    />
    <image href='../assets/mine.png' className='w-72 absolute' alt="prof" />
    </g>
</svg>

  )
}

export default Profile ;