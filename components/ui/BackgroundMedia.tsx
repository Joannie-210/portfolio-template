import Image from "next/image";

interface BackgroundMediaProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export const BackgroundMedia = ({
  src,
  alt,
  priority = false,
}: BackgroundMediaProps) => {
  const isRemote = src.startsWith("http");
  const isGif = src.endsWith(".gif");
  const isVideo = src.endsWith(".mp4");

  // 🎞 MP4 support (future-proof)
  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    );
  }

  // 🖼 Remote GIFs → <img> (avoid next/image error)
  if (isRemote && isGif) {
    return (
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    );
  }

  // 🧠 Everything else → next/image
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      placeholder="blur"
      blurDataURL="/assets/blur.png"
      className="object-cover object-center opacity-20"
    />
  );
};
