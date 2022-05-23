import React, { FC, HTMLAttributes, Children, cloneElement } from "react";

import styles from "./IndexContent.module.scss";

interface IndexContentProps extends React.HTMLProps<FC> {

}

const IndexContent: FC<IndexContentProps> = ({
  className = ''
}) => {
  const getClassName = () => {
    let classList = `${styles.indexContent}`;

    if(className) {
      classList += ` ${className}`
    }

    return classList;
  };

  console.log(getClassName());


  return (
    <main className={getClassName()}>

teeesat
    </main>
  );
};

export default IndexContent;
