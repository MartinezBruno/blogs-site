export default function OptimizedImage ({ src, alt }) {
  const isLocalImage = src.startsWith('/')
  return (
    <picture>
      <source
        srcSet={isLocalImage ? require(`../public${src}?webp`) : `${src}?webp`}
        type='image/webp'
      />
      <source
        srcSet={isLocalImage ? require(`../public${src}`) : src}
        type='image/jpeg'
      />
      <img
        fetchPriority='high'
        loading='eager'
        src={isLocalImage ? require(`../public${src}`) : src}
        alt={alt}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </picture>
  )
}
