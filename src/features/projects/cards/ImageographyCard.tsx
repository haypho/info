import React, { FC, useCallback, useState } from 'react';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/card';
import AndroidQRCodeImageography from '../../../assets/svg/android-qrcode-Imageography.svg';
import IOSQRCodeImageography from '../../../assets/svg/ios-qrcode-Imageography.svg';
import PlatformLabel from '../../../components/platform-label';
import PlatformToggleButton from '../../../components/platform-toggle-button';

const ImageographyCard: FC = () => {
  const title = 'Imageography';
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const qrCodes = {
    ios: IOSQRCodeImageography,
    android: AndroidQRCodeImageography,
  };

  const BackHeader = useCallback(() => (
    <>
      <p>{title}</p>
      <PlatformToggleButton onChange={setPlatform} />
    </>
  ), []);

  const BackContent: FC = () => <img src={qrCodes[platform]} alt="QR Code" />;

  return (
    <Card
      className="project-card"
      title={title}
      iconRight={faQrcode}
      renderFrontContent={<div>Hello</div>}
      renderFrontFooter={<PlatformLabel ios android />}
      renderBackHeader={<BackHeader />}
      renderBackContent={<BackContent />}
    />
  );
};

export default ImageographyCard;
