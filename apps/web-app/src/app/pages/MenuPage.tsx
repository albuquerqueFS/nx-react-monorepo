import { Center, Group, Loader, Stack, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useFoods } from '../api/foods';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMemo, useState } from 'react';

export function MenuPage() {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useFoods();

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
    <Stack gap={'xs'}>
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
            foods.map((food, index) => (
              <section key={index} className="flex py-4 border-t border-b">
                <div className="w-[70%] flex flex-col justify-start pr-2">
                  <div className="flex items-start justify-between">
                    <p className="pr-1 text-sm font-bold">{food.name}</p>
                    <p className="text-base">{`R$${String(food.price).replace(
                      '.',
                      ','
                    )}`}</p>
                  </div>
                  <p className="mt-auto text-sm text-gray-400">
                    {food.description}
                  </p>
                </div>
                <div className="w-[30%]">
                  <img
                    src={food.image}
                    alt=""
                    className="object-contain h-full"
                  />
                </div>
              </section>
            ))}
        </div>
      </InfiniteScroll>
    </Stack>
  );
}
