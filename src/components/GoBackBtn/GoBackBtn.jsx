import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ children, path }) => {
  return (
    <Link to={path} className={css.link}>
      <button>{children}</button>
    </Link>
  );
};
