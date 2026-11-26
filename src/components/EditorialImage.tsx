import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface EditorialImageProps {
  src?: string;
  alt: string;
  caption: string;
  aspectClass?: string;
}

export function EditorialImage({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="editorial-plate group">
      <div
        className={`relative w-full overflow-hidden border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] ${aspectClass}`}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setHasError(true)}
            className="editorial-plate-img h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-[#4A4945] dark:text-[#B5B2AA]">
            <ImageOff className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
              Archival Plate Unavailable
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 font-serif text-xs italic leading-snug text-[#4A4945] dark:text-[#B5B2AA]">
        {caption}
      </figcaption>
    </figure>
  );
}
