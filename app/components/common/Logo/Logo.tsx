import React, { FC, HTMLAttributes } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import logoImg from './images/cyber-eye.png'

import { baseUrl } from '../../../config/site.config';

import styles from './Logo.module.scss'

const Logo: FC<HTMLAttributes<HTMLAnchorElement>> = () => {
  const { i18n: { language }} = useTranslation();

  return (
      <Link href='/' passHref>
        <a className={styles.logo} title={baseUrl}>
          <Image alt="logo" src={logoImg} width="80" height="80"/>
        </a>
      </Link>
  )
}

export default Logo
