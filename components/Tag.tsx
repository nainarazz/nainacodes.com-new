import Link from 'next/link';
import kebabCase from '@/lib/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:text-yellow-500 dark:hover:text-yellow-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default Tag;
