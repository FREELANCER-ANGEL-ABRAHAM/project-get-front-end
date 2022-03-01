import Image from "./Image";

function SocialIcon({ src, alt, height, width, className}) {
  return (
    <span className={className}>
      <Image src={src} height={height} width={width} alt={alt} />
    </span>
  );
}

export default SocialIcon;
