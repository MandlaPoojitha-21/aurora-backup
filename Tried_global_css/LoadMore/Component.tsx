import React from 'react';

import type { CustomComponentProps } from 'aurora/externalContext';
import styles from '@aurora/common-styles/common-styles.module.pcss';

const Component: React.FC<CustomComponentProps> = ({ auroraContext }) => {
  return (
    <>
      <button className={styles.AuroraBtn}>Load More</button>
    </>
  );
};

export default Component;
