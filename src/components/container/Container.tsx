import './Container.scss';
import React, { ReactNode, FC } from 'react';

export interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }: ContainerProps) => (
  <div className={['container', className].join(' ')}>
    {children}
  </div>
);

export default Container;
