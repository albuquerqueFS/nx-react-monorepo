function getTextSize(size: 'sm' | 'md' | 'lg' | undefined) {
  switch (size) {
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    default:
      return '';
  }
}

export default function Text({
  children,
  size = 'md',
}: {
  children?: React.ReactNode[] | string;
  size?: 'sm' | 'md' | 'lg';
}) {
  return <p className={`text-gray-900 ${getTextSize(size)}`}>{children}</p>;
}
