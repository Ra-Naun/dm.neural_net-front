import React, { FC } from 'react';

import styles from './Layout.module.scss';

interface LayoutProps {
  bottomMenu: LayoutListItem[];
}

interface LayoutListItem {
  href: string;
  text: string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
