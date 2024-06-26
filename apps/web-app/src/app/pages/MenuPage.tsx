import { Button, Group, Stack, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { useFoods } from '../api/foods';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMemo } from 'react';

export function MenuPage() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useFoods();

  const foods = useMemo(
    () =>
      data?.pages[0].data ? data?.pages.map(({ data }) => data).flat() : [],
    [data]
  );

  // console.log(foods, hasNextPage);

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

      <h1 className="mt-2">O que quer comer hoje?</h1>
      <TextInput
        placeholder="Pesquisar"
        rightSection={<MagnifyingGlassIcon />}
      />
      <InfiniteScroll
        dataLength={foods.length} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col">
          {!isLoading &&
            foods.map((food, index) => (
              <section key={index} className="flex py-2 border-t border-b">
                <div className="w-[70%] flex flex-col justify-start pr-2">
                  <p className="text-sm font-bold">{food.name}</p>
                  <p className="text-sm">{`R$${String(food.price).replace(
                    '.',
                    ','
                  )}`}</p>
                  <p className="text-sm text-gray-400">{food.description}</p>
                </div>
                <div className="w-[30%]">
                  <img src={food.image} alt="" />
                </div>
              </section>
            ))}
        </div>
        {`has next page?: ${hasNextPage}`}
        <Button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Fetch more data
        </Button>
      </InfiniteScroll>
    </Stack>
  );
}
