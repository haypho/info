import './Avatar.scss';
import React, { FC, useCallback, useState } from 'react';

export interface AvatarProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  fallback?: string;
}

const Avatar: FC<AvatarProps> = ({
  src, alt, title, subtitle, className, fallback,
}: AvatarProps) => {
  const [source, setSource] = useState<string>(src);
  const onErrorLoadingImage = useCallback(() => {
    if (fallback) {
      setSource(fallback);
    }
  }, [fallback, setSource]);

  return (
    <div className={['avatar', className].join(' ')}>
      <img className="avatar-img" src={source} alt={alt} onError={onErrorLoadingImage} />
      {title || subtitle ? (
        <div className="avatar-details">
          {title && (<p className="avatar-title">{title}</p>)}
          {subtitle && (<p className="avatar-subtitle">{subtitle}</p>)}
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
