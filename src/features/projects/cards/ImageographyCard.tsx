import React, { FC, useCallback, useState } from 'react';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/card';
import AndroidQRCodeImageography from '../../../assets/svg/android-qrcode-imageography.svg';
import IOSQRCodeImageography from '../../../assets/svg/ios-qrcode-imageography.svg';
import PlatformLabel from '../../../components/platform-label';
import PlatformToggleButton from '../../../components/platform-toggle-button';
import { Imageography } from '../../../constants';

const ImageographyCard: FC = () => {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const qrCodes = {
    ios: IOSQRCodeImageography,
    android: AndroidQRCodeImageography,
  };

  const FrontContent = useCallback(() => (
    <div>
      <p>{Imageography.description}</p>
      <strong>Tech Stack:</strong>
      <p>{Imageography.techStack}</p>
      <p>
        You can find the app on the
        {' '}
        <a href={Imageography.ios.url} target="_blank" rel="noreferrer">App Store</a>
        {' '}
        and the
        {' '}
        <a href={Imageography.android.url} target="_blank" rel="noreferrer">Play Store</a>
        .
      </p>
    </div>
  ), []);

  const BackHeader = useCallback(() => (
    <>
      <p>{Imageography.name}</p>
      <PlatformToggleButton onChange={setPlatform} />
    </>
  ), []);

  const BackContent: FC = () => <img src={qrCodes[platform]} alt="QR Code" />;

  return (
    <Card
      className="project-card"
      title={Imageography.name}
      iconRight={faQrcode}
      renderFrontContent={<FrontContent />}
      renderFrontFooter={<PlatformLabel ios android />}
      renderBackHeader={<BackHeader />}
      renderBackContent={<BackContent />}
    />
  );
};

export default ImageographyCard;
