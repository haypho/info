import './Avatar.scss';
import React, { FC } from 'react';

export interface AvatarProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const Avatar: FC<AvatarProps> = ({
  src, alt, title, subtitle,
}: AvatarProps) => (
  <div className="avatar">
    <img className="avatar-img" src={src} alt={alt} />
    {title || subtitle ? (
      <div className="avatar-details">
        {title && (<p className="avatar-title">{title}</p>)}
        {subtitle && (<p className="avatar-subtitle">{subtitle}</p>)}
      </div>
    ) : null}
  </div>
);

export default Avatar;
