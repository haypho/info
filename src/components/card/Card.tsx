import './Card.scss';
import React, {
  FC, ReactNode, useState,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faQrcode } from '@fortawesome/free-solid-svg-icons';
import PlatformToggleButton from '../platform-toggle-button';

export interface CardProps {
  children?: ReactNode;
  title?: string;
  iconLeft?: IconProp;
  footer?: ReactNode;
  webQRCode?: string;
  iOSQRCode?: string
  androidQRCode?: string;
  className?: string;
}

const Card: FC<CardProps> = ({
  children, title, iconLeft, footer, iOSQRCode, androidQRCode, webQRCode, className,
}: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'web'>(iOSQRCode ? 'ios' : 'web');
  const qrcodes = {
    ios: iOSQRCode,
    android: androidQRCode,
    web: webQRCode,
  };
  const hasQRCode: boolean = !!iOSQRCode || !!androidQRCode || !!webQRCode;

  return (
    <div className={['card', className].join(' ')}>
      <div className={['card-view', showBack ? 'flipped' : ''].join(' ')}>
        <div className="card-front">
          <div className="card-details">
            <div className="card-header">
              {iconLeft && (<FontAwesomeIcon icon={iconLeft} />)}
              {title && (<p className="card-header-title">{title}</p>)}
              {hasQRCode && (<FontAwesomeIcon className="card-button" icon={faQrcode} onClick={() => setShowBack(true)} />)}
            </div>
            <div className="card-content">
              {children}
            </div>
            {footer && (
            <div className="card-footer">
              {footer}
            </div>
            )}
          </div>
        </div>
        <div className="card-back">
          <div className="card-details">
            <div className="card-header">
              <FontAwesomeIcon className="card-button" icon={faArrowLeft} onClick={() => setShowBack(false)} />
              {title && (<p className="card-header-title">{title}</p>)}
              <PlatformToggleButton onChange={setPlatform} />
            </div>
            <div className="card-content">
              <img className="card-qr-code" src={qrcodes[platform]} alt="QR Code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
