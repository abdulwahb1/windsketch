import React from "react";
import ReactPlayer from "react-player";
import Image from 'next/image';

interface Props {
    url: string;
}

const VideoCard: React.FC<Props> = ({ url }: Props) => {
  const isMP4 = url.toLowerCase().endsWith('.mp4');
    if (isMP4){
  return (
    <div    className="mt-[80px] w-100%   h-full xl:w-[1000px] xl:h-[800px]  2xl:w-[1440px] 2xl:h-[800px] w-full h-[400px]  rounded-xl overflow-y-hidden" >
<ReactPlayer
      url={url}
      display="block"
      width='100%'
      height='100%'
      position="relative"
      controls={true}
    />
    </div>
  )} else {
    return (
      <Image
        src={url}
        alt="video"
        width={1000}
        height={100}
        className="mt-[80px] w-full h-full xl:w-[1000px] xl:h-[800px]  2xl:w-[1440px] 2xl:h-[800px] w-full h-[400px]  rounded-xl overflow-y-hidden"
      />
    )
  }
};

export default VideoCard;