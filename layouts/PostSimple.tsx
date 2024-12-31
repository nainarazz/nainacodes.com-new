import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import Image from '@/components/Image';
import SectionContainer from '@/components/SectionContainer';
import ImageAttribution from '@/components/ImageAttribution';
import formatDate from '@/lib/utils/formatDate';
import Comments from '@/components/comments';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import { ReactNode } from 'react';
import { PostFrontMatter } from 'types/PostFrontMatter';

interface Props {
  frontMatter: PostFrontMatter;
  children: ReactNode;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function PostLayout({ frontMatter, next, prev, children }: Props) {
  const { date, title, coverImageAttributionUrl, coverImageAttributionText, images } = frontMatter;

  return (
    <SectionContainer className="mt-0">
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </header>

          {images && images[0] ? (
            <div className="mx-auto w-full py-4 md:w-3/4">
              <Image src={images[0]} width="768" height="512" alt="avatar" className="rounded-md" />
              {coverImageAttributionText && coverImageAttributionUrl ? (
                <ImageAttribution text={coverImageAttributionText} url={coverImageAttributionUrl} />
              ) : null}
            </div>
          ) : null}

          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
