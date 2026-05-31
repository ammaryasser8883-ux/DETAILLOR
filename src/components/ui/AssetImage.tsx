"use client";

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface AssetImageProps extends Omit<ImageProps, 'src'> {
  src?: string | null;
  debugLabel?: string;
}

export function AssetImage({ src, alt, className, debugLabel, ...rest }: AssetImageProps) {
  const [failedToLoad, setFailedToLoad] = useState(false);

  useEffect(() => {
    if (!src) {
      console.warn('[AssetImage] Missing asset path from centralized config.', {
        debugLabel,
        alt,
      });
      setFailedToLoad(true);
      return;
    }

    setFailedToLoad(false);
  }, [src, alt, debugLabel]);

  const handleError = () => {
    console.warn('[AssetImage] Failed to load local asset:', src, {
      debugLabel,
      alt,
    });
    setFailedToLoad(true);
  };

  if (!src || failedToLoad) {
    return <div className={`bg-[#0f0f0f] ${className ?? ''}`} role="presentation" aria-hidden="true" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      {...rest}
    />
  );
}
