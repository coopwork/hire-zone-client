import React from 'react';
import clsx from 'clsx';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';

type VariantsType = Record<TagType, string>;

type PropsType = {
  children?: React.ReactNode;
  tag?: TagType;
  className?: string;
};
export function Typography({ children, tag = 'p', className }: PropsType) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  const variants: VariantsType = {
    h1: 'text-4xl font-semibold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-md font-semibold',
    p: 'text-base',
    small: 'text-xs',
    span: 'text-base',
  };

  return <Tag className={clsx(variants[tag] || '', className)}>{children}</Tag>;
}
