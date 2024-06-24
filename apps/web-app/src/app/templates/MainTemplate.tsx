import { Navbar } from '@react-monorepo/web-ui';
import { Outlet } from 'react-router-dom';

export function MainTemplate() {
  return (
    <div className="px-4 py-2">
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
