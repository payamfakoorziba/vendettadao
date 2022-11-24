export const IFrameSection = ({ src }: { src: string }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="w-full h-full "
    ></iframe>
  </div>
);
