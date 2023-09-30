// Sidebar.tsx
import React, { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled('aside')`
  ${({ theme }) => `
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 220px;
    max-width: 480px;
    background-color: ${theme.palette.secondary.main};
    border-right: #e9e9e9 1px solid;
    z-index: 2;
    transition-delay: 0s;
    box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
    //box-shadow: -8px 2px 22px -7px rgba(0, 0, 0, 0.25);
    
    .content-wrapper {
      flex-grow: 1;
      overflow-y: auto;
    }
  `}
`;

const SidebarResizer = styled('div')`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 6px;
  justify-self: flex-end;
  cursor: col-resize;
  resize: horizontal;
  &:hover {
    width: 3px;
    background: #c1c3c5b4;
  }
`;

interface SidebarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({ children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        const newWidth =
          e.clientX - sidebarRef.current.getBoundingClientRect().left;
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <SidebarContainer ref={sidebarRef} style={{ width: sidebarWidth }}>
      <div className="content-wrapper">{children}</div>
      <SidebarResizer onMouseDown={() => setIsResizing(true)} />
    </SidebarContainer>
  );
};

export { SideBar };
