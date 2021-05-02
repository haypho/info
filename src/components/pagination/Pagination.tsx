import './Pagination.scss';
import React, { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

export interface PaginationProps {
  children?: ReactNode;
  page: number;
  pageCount: number;
  onChange?(page: number): void;
}

const Pagination: FC<PaginationProps> = ({
  children, page, pageCount,
}: PaginationProps) => {
  const PaginationControl: FC = () => (
    <>
      <p className="pagination-page-indicator">{`${page} of ${pageCount}`}</p>
      <div>
        <FontAwesomeIcon className={['pagination-button', page - 2 < 1 && 'disabled'].join(' ')} icon={faAngleDoubleLeft} />
        <FontAwesomeIcon className="pagination-button" icon={faAngleLeft} />
        <FontAwesomeIcon className="pagination-button" icon={faAngleRight} />
        <FontAwesomeIcon className="pagination-button" icon={faAngleDoubleRight} />
      </div>
    </>
  );

  return (
    <div className="pagination">
      <div className="pagination-header">
        <PaginationControl />
      </div>
      <div className="pagination-content">
        {children}
      </div>
      <div className="pagination-footer">
        <PaginationControl />
      </div>
    </div>
  );
};
export default Pagination;
