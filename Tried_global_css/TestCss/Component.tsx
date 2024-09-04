import React from 'react';
import styles from './TestCss.module.pcss';
import type { CustomComponentProps } from 'aurora/externalContext';
import globalStyles from '@aurora/common-styles/common-styles.module.pcss';

const Component: React.FC<CustomComponentProps> = ({ auroraContext }) => {
  const { utils } = auroraContext;
  const { useClassNameMapper, useQuery } = utils;
  const cx = useClassNameMapper(styles);
  return (
    <>
      <div className={cx('auroratestlocal')}>Test Component to apply local css</div>
      <button className={globalStyles.AuroraBtn}>Start a conversation</button>
    </>
  );
};

export default Component;
