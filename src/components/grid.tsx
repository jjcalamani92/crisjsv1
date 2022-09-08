import { FC } from 'react';
interface Grid {
  children: React.ReactNode;
}

export const Grid: FC<Grid> = ({ children }) => {
  const grid = {
    _: '2',
    sm: '3',
    lg:'4',
    xl: '6'}
  return (
    <div className={`  grid grid-cols-${grid._} gap-3 sm:gap-6  sm:grid-cols-${grid.sm}  lg:grid-cols-${grid.lg} xl:grid-cols-${grid.xl}`}>
      {children}
    </div>
  )
}