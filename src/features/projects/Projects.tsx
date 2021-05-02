import './Projects.scss';
import React, { FC } from 'react';
import Card from '../../components/card';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';

const Projects: FC = () => (
  <Container>
    <SectionHeader title="Projects" />
    <div className="projects">
      <Card title="Personal Portfolio" className="project-card">
        <div>Hello Again</div>
      </Card>
      <Card
        className="project-card"
        title="Imageography"
        footer="Web Only"
        androidQRCode="assets/svg/android-qrcode-Imageography.svg"
        iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
      >
        <div>Hello</div>
      </Card>
      <Card
        className="project-card"
        title="Imageography"
        footer="Web Only"
        androidQRCode="assets/svg/android-qrcode-Imageography.svg"
        iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
      >
        <div>Hello</div>
      </Card>
      <Card
        className="project-card"
        title="Imageography"
        footer="Web Only"
        androidQRCode="assets/svg/android-qrcode-Imageography.svg"
        iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
      >
        <div>Hello</div>
      </Card>
      <Card
        className="project-card"
        title="Imageography"
        footer="Web Only"
        androidQRCode="assets/svg/android-qrcode-Imageography.svg"
        iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
      >
        <div>Hello</div>
      </Card>
      <Card
        className="project-card"
        title="Imageography"
        footer="Web Only"
        androidQRCode="assets/svg/android-qrcode-Imageography.svg"
        iOSQRCode="assets/svg/ios-qrcode-Imageography.svg"
      >
        <div>Hello</div>
      </Card>
    </div>
  </Container>
);

export default Projects;
