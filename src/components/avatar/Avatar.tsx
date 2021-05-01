import './Avatar.scss';
import React, { FC } from 'react';

export interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt }: AvatarProps) => (
  <div className="avatar">
    <img className="avatar-img" src={src} alt={alt} />
  </div>
);

export default Avatar;
