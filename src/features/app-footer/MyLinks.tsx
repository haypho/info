import './MyLinks.scss';
import React, { FC } from 'react';
import { faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import IconPrefix from '../../components/icon-prefix';
import { MyLink } from '../../models';
import { personalEmail } from '../../constants';
import Resume from '../../assets/pdf/Résumé_Hayden_Phothong.pdf';

const MyLinks: FC = () => {
  const myLinks: MyLink[] = [
    {
      href: Resume,
      icon: faFilePdf,
      text: 'Résumé',
    },
    {
      href: 'https://www.github.com/hphothong',
      icon: faGithub,
      text: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/hayden-phothong-a2393312',
      icon: faLinkedinIn,
      text: 'LinkedIn',
    },
    {
      href: `mailto:${personalEmail}`,
      icon: faEnvelope,
      text: personalEmail,
    },
  ];

  return (
    <div className="my-links">
      {myLinks.map((link: MyLink) => (
        <div className="my-link" key={link.href}>
          <a className="my-link-anchor" href={link.href} target="_blank" rel="noreferrer">
            <IconPrefix icon={link.icon} color="#f8f8f8">{link.text}</IconPrefix>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MyLinks;
