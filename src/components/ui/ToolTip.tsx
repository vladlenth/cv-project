import React, { FC, ReactNode, useState, useRef } from 'react';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      let top = 0;
      let left = rect.left + rect.width / 2;

      switch (position) {
        case 'top':
          top = rect.top;
          break;
        case 'bottom':
          top = rect.bottom;
          break;
        case 'left':
          top = rect.top + rect.height / 2;
          left = rect.left;
          break;
        case 'right':
          top = rect.top + rect.height / 2;
          left = rect.right;
          break;
      }

      setCoords({ top, left });
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div ref={wrapperRef}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>

      {visible && <div>{content}</div>}
    </div>
  );
};

export default Tooltip;
