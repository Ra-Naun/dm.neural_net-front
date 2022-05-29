import React, { FC } from 'react';
import Header from '../common/Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  children?: FC;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
