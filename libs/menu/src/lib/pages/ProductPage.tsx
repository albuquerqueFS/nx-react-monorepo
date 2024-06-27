import { Button, Group, Skeleton, Stack } from '@mantine/core';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';
import { useFood } from '@react-monorepo/api';

export const ProductPage = () => {
  const { data: food, isLoading } = useFood('1');

  return (
    <Stack className="h-full gap-2">
      {!isLoading && (
        <>
          <img
            src={food?.image}
            className="w-full max-h-[400px] object-cover"
            alt="Foto do prato"
            loading="lazy"
          />
          <Group className="items-center justify-between">
            <h1>{food?.name}</h1>
            <p className="text-base">{food?.category}</p>
          </Group>
          <p className="text-xl">{`R$${String(food?.price).replace(
            '.',
            ','
          )}`}</p>
          <p className="text-sm text-gray-500">{food?.description}</p>

          <Group className="mt-auto">
            <Button>
              <PlusCircleIcon />
            </Button>
            <Button>
              <MinusCircleIcon />
            </Button>
          </Group>
        </>
      )}
      {isLoading && (
        <Stack>
          <Skeleton
            height={400}
            className="w-full max-h-[400px] object-cover"
          />
          <Skeleton height={16} radius="xl" className="w-full" />
          <div className="flex justify-between gap-2">
            <Skeleton height={16} radius="xl" />
            <Skeleton height={16} radius="xl" />
          </div>
          <Skeleton height={100} radius="xl" />
        </Stack>
      )}
    </Stack>
  );
};
