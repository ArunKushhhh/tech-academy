"use client";

import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <>
      <style>{`
        @keyframes star-movement-bottom {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(-100%, 0%); opacity: 0; }
        }
        @keyframes star-movement-top {
          0% { transform: translate(0%, 0%); opacity: 1; }
          100% { transform: translate(100%, 0%); opacity: 0; }
        }
      `}</style>
      <Component
        className={`relative inline-block overflow-hidden rounded-full ${className}`}
        {...(rest as any)}
        style={{
          padding: `${thickness}px`,
          ...(rest as any).style
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '300%',
            height: '50%',
            opacity: 0.7,
            bottom: '-11px',
            right: '-250%',
            borderRadius: '9999px',
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animation: `star-movement-bottom ${speed} linear infinite alternate`,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300%',
            height: '50%',
            opacity: 0.7,
            top: '-10px',
            left: '-250%',
            borderRadius: '9999px',
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animation: `star-movement-top ${speed} linear infinite alternate`,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'linear-gradient(to bottom, #000, #111827)',
            border: '1px solid #1f2937',
            color: 'white',
            textAlign: 'center',
            fontSize: '16px',
            padding: '10px 26px',
            borderRadius: '9999px',
          }}
        >
          {children}
        </div>
      </Component>
    </>
  );
};

export default StarBorder;
