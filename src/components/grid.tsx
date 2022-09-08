import { FC } from 'react';
interface Grid {
  children: React.ReactNode;
}

export const Grid: FC<Grid> = ({ children }) => {
  const sm = '6'
  return (
    <div className={`  grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-${sm} `}>
      {children}
    </div>
  )
}