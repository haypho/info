import Image from "next/image";
import { ASSET_IMAGE_MINIFIED_JS } from "@/constants";
import { useState } from "react";
import { WelcomeMessage } from "./WelcomeMessage";
import { SocialLinks } from "./SocialLinks";

export const Welcome = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {isImageLoaded && (
        <div className="w-3/4 flex">
          <div className="flex flex-col items-center">
            <WelcomeMessage />
            <SocialLinks />
          </div>
        </div>
      )}
      <Image
        alt=""
        src={ASSET_IMAGE_MINIFIED_JS}
        className="absolute w-screen h-screen -z-10 brightness-50"
        width={100}
        height={100}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};
