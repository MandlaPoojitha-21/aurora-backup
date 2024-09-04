import type { CustomComponentProps } from 'aurora/externalContext';
import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide/dist/glide.esm';
import Users from './Users.query.graphql';
import BoardsQuery from './BoardsData.query.graphql';
import styles from './BrettReact1.module.css';

/**
 * This component is an example of a simple content slider using GlideJS
 */
const Component: React.FC<CustomComponentProps> = ({ auroraContext }) => {
  const { utils, components } = auroraContext;
  const { Loading } = components;
  const { useClassNameMapper, useQuery } = utils;
  const cx = useClassNameMapper(styles);
  const glideRef = useRef<HTMLDivElement>(null);
  const { loading: usersLoading, error: usersError, data: usersData } = useQuery(Users);
  const { loading: BoardsLoading, error: BoardsError, data: BoardsData } = useQuery(BoardsQuery);

  useEffect(() => {
    console.log(BoardsData);
    if (!usersLoading) {
      new Glide(glideRef.current, {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        autoplay: 2000,
        animationDuration: 450
      }).mount();
    }
  }, [usersLoading]);

  if (usersLoading) {
    return <Loading />;
  }
  if (usersError) {
    return `Error ${usersError.message}`;
  }

  return (
    <div className={cx('glide')} ref={glideRef}>
      <div className={cx('glide__track')} data-glide-el="track">
        <ul className={cx('glide__slides')}>
          {usersData.users.edges.map(node => (
            <li className={cx('glide__slide')} key={node.node.login}>
              <img src={node.node.avatar.url} className={cx('avatar')} alt="" />
              <span>{node.node.login}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          type="button"
          className={cx('glide__arrow', 'glide__arrow--left')}
          data-glide-dir="<"
        >
          &lt;
        </button>
        <button
          type="button"
          className={cx('glide__arrow', 'glide__arrow--right')}
          data-glide-dir=">"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Component;
