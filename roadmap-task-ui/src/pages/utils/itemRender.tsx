import React from 'react';

type ItemRenderPaginationType = 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';

export const itemRender = (current: number, type: ItemRenderPaginationType, originalElement: React.ReactElement<HTMLElement>) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
