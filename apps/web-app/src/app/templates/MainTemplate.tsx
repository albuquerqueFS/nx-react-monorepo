import { Navbar } from '@react-monorepo/web-ui';
import { Outlet } from 'react-router-dom';

export function MainTemplate() {
  return (
    <div>
      <div className="px-4 py-2">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
