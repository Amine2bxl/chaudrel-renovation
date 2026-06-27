import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Drop-in <img> replacement:
 * - native lazy-load + async decode (no JS intersection cost)
 * - smooth fade-in once decoded
 * - graceful error fallback
 * - explicit `width`/`height` recommended to avoid CLS
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  className,
  imgClassName,
  sizes,
  srcSet,
  decoding = 'async',
  onLoad,
  fallback,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <span
      className={cn('block overflow-hidden', className)}
      style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
    >
      {!errored ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          sizes={sizes}
          srcSet={srcSet}
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          onError={() => setErrored(true)}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
          {...rest}
        />
      ) : (
        <span
          role="img"
          aria-label={alt}
          className={cn(
            'flex h-full w-full items-center justify-center bg-stone-200 text-stone-500 text-xs',
            imgClassName,
          )}
        >
          {fallback ?? alt}
        </span>
      )}
    </span>
  );
}