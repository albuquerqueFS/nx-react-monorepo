import { Center, Drawer, Group, Loader, Stack, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMemo, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useInfiniteFoods } from '@react-monorepo/api';
import { ProductCard } from '../menu/ProductCard';

export function MenuPage() {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteFoods();

  const [isProductOpen, { open: openProduct, close: closeProduct }] =
    useDisclosure(false);

  const [search, setSearch] = useState('');

  const foods = useMemo(() => {
    const foods = data?.pages[0].data
      ? data?.pages.map(({ data }) => data).flat()
      : [];

    if (search.length > 0) {
      return foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return foods;
  }, [data, search]);

  return (
    <Stack className="w-full gap-2">
      <h1>MENU</h1>
      <Group>
        <div className="flex">
          <p className="text-sm">{"Rua Sabbado D'angelo 281"}</p>
          <span className="mx-1">-</span>
          <p className="text-sm">{' Entrega em 30 min'}</p>
        </div>
      </Group>
      <Group className="flex items-center gap-1">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-sm">Aberto agora</p>
      </Group>

      <h1 className="mt-2">Qual o prato de hoje?</h1>
      <TextInput
        placeholder="Pesquisar"
        rightSection={<MagnifyingGlassIcon />}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <InfiniteScroll
        dataLength={foods.length} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={
          isFetching && (
            <Center className="py-6">
              <Loader color="blue" />
            </Center>
          )
        }
      >
        <div className="flex flex-col">
          {!isLoading &&
            foods.map((food, index) => <ProductCard food={food} key={index} />)}
        </div>
      </InfiniteScroll>

      <Drawer
        offset={8}
        radius="md"
        opened={isProductOpen}
        onClose={closeProduct}
        title="Product"
      >
        {/* Drawer content */}
      </Drawer>
    </Stack>
  );
}
