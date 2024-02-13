import React from "react";
import Iframe from "react-iframe";

interface Props {
  url: string;
}

const VideoCard: React.FC<Props> = ({ url }: Props) => {
  return (
    <Iframe
      url={url}
      className="mt-[80px] xl:w-[1000px] xl:h-[800px]  2xl:w-[1440px] 2xl:h-[800px] w-full h-[400px]  rounded-xl"
      display="block"
      position="relative"
    />
  );
};

export default VideoCard;
