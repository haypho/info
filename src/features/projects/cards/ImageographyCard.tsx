import React, { FC } from 'react';
import Card from '../../../components/card';

const ImageographyCard: FC = () => (
  <Card
    className="project-card"
    title="Imageography"
    footer="Web Only"
    androidQRCode="assets/svg/android-qrcode-Imageography.svg"
    iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
  >
    <div>Hello</div>
  </Card>
);

export default ImageographyCard;
