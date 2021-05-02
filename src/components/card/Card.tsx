import './Card.scss';
import React, {
  FC, ReactNode, useCallback, useState,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export interface CardProps {
  title?: string;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  onClickIconLeft?(): void;
  onClickIconRight?(): void;
  renderFrontContent?: ReactNode;
  renderFrontFooter?: ReactNode;
  renderBackHeader?: ReactNode;
  renderBackContent?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({
  title,
  iconLeft,
  iconRight,
  onClickIconLeft,
  onClickIconRight,
  renderFrontContent,
  renderFrontFooter,
  renderBackHeader,
  renderBackContent,
  className,
}: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const onShowBack = useCallback(() => {
    if (showBack !== true) {
      setShowBack(true);
    }
    if (onClickIconRight) {
      onClickIconRight();
    }
  }, [showBack, setShowBack, onClickIconRight]);

  return (
    <div className={['card', className].join(' ')}>
      <div className={['card-view', showBack ? 'flipped' : ''].join(' ')}>
        <div className="card-front">
          <div className="card-details">
            <div className="card-header">
              {iconLeft && (<FontAwesomeIcon className={onClickIconLeft ? 'card-button' : ''} icon={iconLeft} onClick={onClickIconLeft} />)}
              {title && (<p className="card-header-title">{title}</p>)}
              {iconRight && (<FontAwesomeIcon className="card-button" icon={iconRight} onClick={onShowBack} />)}
            </div>
            <div className="card-content">{renderFrontContent}</div>
            {renderFrontFooter && (<div className="card-footer">{renderFrontFooter}</div>)}
          </div>
        </div>
        <div className="card-back">
          <div className="card-details">
            <div className="card-header">
              <FontAwesomeIcon className="card-button" icon={faArrowLeft} onClick={() => setShowBack(false)} />
              {renderBackHeader}
            </div>
            <div className="card-content">
              {renderBackContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
