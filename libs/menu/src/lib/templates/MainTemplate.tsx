import { Stack } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '@react-monorepo/core';

export function MainTemplate() {
  return (
    <div className="max-w-[1100px]">
      <Stack className="h-screen px-4 py-2">
        <Navbar />
        <Outlet />
        <Footer />
      </Stack>
    </div>
  );
}
