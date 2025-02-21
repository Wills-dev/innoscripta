import { useState, useEffect } from "react";

interface LogoProps {
  logoHeight: string;
}

const Logo = ({ logoHeight }: LogoProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("/blob")
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      });

    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, []);

  return (
    imageUrl && (
      <img src={imageUrl} alt="Logo" className={`w-auto ${logoHeight}`} />
    )
  );
};

export default Logo;
