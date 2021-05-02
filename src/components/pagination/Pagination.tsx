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
  disabled?: boolean;
}

const Pagination: FC<PaginationProps> = ({
  children, page, pageCount, onChange, disabled,
}: PaginationProps) => {
  const PaginationControl: FC = () => (
    <>
      <p className="pagination-page-indicator">{`${page} of ${pageCount}`}</p>
      <div>
        <FontAwesomeIcon
          className={['pagination-button', (disabled || page - 2 < 1) && 'disabled'].join(' ')}
          icon={faAngleDoubleLeft}
          onClick={() => {
            if (onChange && page - 2 >= 1) {
              onChange(page - 2);
            }
          }}
        />
        <FontAwesomeIcon
          className={['pagination-button', (disabled || page - 1 < 1) && 'disabled'].join(' ')}
          icon={faAngleLeft}
          onClick={() => {
            if (onChange && page - 1 >= 1) {
              onChange(page - 1);
            }
          }}
        />
        <FontAwesomeIcon
          className={['pagination-button', (disabled || page + 1 > pageCount) && 'disabled'].join(' ')}
          icon={faAngleRight}
          onClick={() => {
            if (onChange && page + 1 <= pageCount) {
              onChange(page + 1);
            }
          }}
        />
        <FontAwesomeIcon
          className={['pagination-button', (disabled || page + 2 > pageCount) && 'disabled'].join(' ')}
          icon={faAngleDoubleRight}
          onClick={() => {
            if (onChange && page + 2 <= pageCount) {
              onChange(page + 2);
            }
          }}
        />
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
