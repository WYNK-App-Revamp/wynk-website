import YouTube from "react-youtube";

function YouTubeEmbed(props) {
  const { videoId } = props;
  const options = {
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <div className="yt-video-responsive">
        <YouTube videoId={videoId} opts={options} className="w-full h-full" />
      </div>
    </div>
  );
}

export default YouTubeEmbed;
