import React from "react";

const Projects: React.FC = () => {
  const project = {
    name: "Imageography",
    qr: {
      android: `${process.env.PUBLIC_URL}/android-qrcode-Imageography.svg`,
      ios: `${process.env.PUBLIC_URL}/iOS-qrcode-Imageography.svg`,
    },
  };

  return (
    <>
      <h1>{project.name}</h1>
      <p>A mobile app built on the firebase stack.</p>

      <div>
        <h3>iOS</h3>
        <img src={project.qr.ios} />
      </div>

      <div>
        <h3>Android</h3>
        <img src={project.qr.android} />
      </div>
    </>
  );
};

export default Projects;
