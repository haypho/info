import React, { FC } from 'react';
import Card from '../../../components/card';
import AndroidQRCodeImageography from '../../../assets/svg/android-qrcode-Imageography.svg';
import IOSQRCodeImageography from '../../../assets/svg/ios-qrcode-Imageography.svg';

const ImageographyCard: FC = () => (
  <Card
    className="project-card"
    title="Imageography"
    footer="Web Only"
    androidQRCode={AndroidQRCodeImageography}
    iOSQRCode={IOSQRCodeImageography}
  >
    <div>Hello</div>
  </Card>
);

export default ImageographyCard;
