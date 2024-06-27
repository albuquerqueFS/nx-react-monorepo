export const ProductCard = ({ food }: { food: Food }) => {
  return (
    <a
      href={`/product/${food.id ?? 0}`}
      className="flex py-4 border-t border-b"
    >
      <div className="w-[70%] flex flex-col justify-between pr-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="pr-2 text-sm font-bold">{food.name}</p>
            <p className="pr-2 text-sm">{food.category}</p>
          </div>
          <p className="flex items-start justify-start text-base">
            <span className="mr-1 -mb-2 text-xs">{`R$`}</span>
            <span className="-mt-1 text-xl">{`${String(food.price).replace(
              '.',
              ','
            )}`}</span>
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          {food.description.length > 50
            ? food.description.slice(0, 50) + '...'
            : food.description}
        </p>
      </div>
      <div className="w-[30%] flex">
        <img
          src={food.image}
          alt=""
          className="object-contain h-full max-h-[300px]"
        />
      </div>
    </a>
  );
};
