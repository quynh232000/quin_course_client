
type props = {
  url: string;
};

function IframeVideo({ url }: props) {
  
  return (
    <iframe
      className="w-full h-full"
      src={url+'?autoplay=1&mute=2'}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

export default IframeVideo;
