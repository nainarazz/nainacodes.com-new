import siteMetadata from '@/data/siteMetadata';
import { PageSEO } from '@/components/SEO';

export default function Snippets() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
        Code Snippets
      </h1>
    </>
  );
}