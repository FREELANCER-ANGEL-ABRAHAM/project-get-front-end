import Image from "./Image";

function SocialIcon({ src, alt, height, width}) {
  return (
    <span className="text-center mt-4 mb-4">
      <Image src={src} height={height} width={width} alt={alt} />
    </span>
  );
}

export default SocialIcon;
