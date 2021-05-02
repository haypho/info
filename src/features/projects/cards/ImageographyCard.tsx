import React, { FC, useCallback, useState } from 'react';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/card';
import AndroidQRCodeImageography from '../../../assets/svg/android-qrcode-Imageography.svg';
import IOSQRCodeImageography from '../../../assets/svg/ios-qrcode-Imageography.svg';
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
      <p>A mobile application built on the React-Native framework.</p>
      <strong>Tech Stack:</strong>
      <p>React Native, Redux, TypeScript, Firebase (e.g., Auth, Firestore)</p>
      <div>
        <p>
          You can find the app on
          {' '}
          <a href={Imageography.ios.url} target="_blank" rel="noreferrer">iOS</a>
          {' '}
          and
          {' '}
          <a href={Imageography.android.url} target="_blank" rel="noreferrer">Android</a>
          .
          {' '}
          <em>QR code is also available.</em>
        </p>
      </div>
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
