import { Footer } from '@react-monorepo/web-ui';
import { Stack } from '@mantine/core';
import { Navbar } from '@react-monorepo/web-ui';
import { Outlet } from 'react-router-dom';

export function MainTemplate() {
  return (
    <Stack className="h-screen px-4 py-2">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Stack>
  );
}
