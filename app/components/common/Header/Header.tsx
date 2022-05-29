import React, { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { i18n: { language }} = useTranslation();

  return (
    <div className={styles.header}>
      <Logo className="header_logo" />
      <Link href={'/dmca'} passHref>
        <a title="DMCA">
          DMCA
        </a>
      </Link>
    </div>
  )
}

export default Header
