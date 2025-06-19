import { getBlogPostBySlug, blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, UserCircle, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Article non trouvé' };
  }
  return {
    title: `${post.title} | Maple Leaf Pathways Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <article className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <header className="mb-10 text-center md:text-left">
           <Button variant="outline" asChild className="mb-8 self-start group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour au Blog
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">{post.title}</h1>
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 md:space-x-6 text-md text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-2 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-5 w-5 mr-2 text-accent" />
              <span>Par {post.author}</span>
            </div>
          </div>
        </header>

        {post.imageUrl && (
          <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={post.dataAiHint}
            />
          </div>
        )}

        <div
          className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none 
                     prose-headings:font-headline prose-headings:text-primary prose-headings:font-semibold
                     prose-p:text-foreground/90 prose-p:leading-relaxed
                     prose-a:text-accent hover:prose-a:underline
                     prose-strong:text-foreground prose-strong:font-semibold
                     prose-ul:list-disc prose-ul:pl-6 prose-li:text-foreground/90
                     prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-foreground/90
                     prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold font-headline mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-accent" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Social Share Placeholder */}
        <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-lg font-semibold font-headline mb-4">Partager cet article</h3>
            <div className="flex justify-center space-x-4">
                {/* Replace with actual social sharing links/components */}
                <Button variant="outline" size="icon" aria-label="Share on Facebook">FB</Button>
                <Button variant="outline" size="icon" aria-label="Share on Twitter">TW</Button>
                <Button variant="outline" size="icon" aria-label="Share on LinkedIn">IN</Button>
            </div>
        </div>
      </article>
    </div>
  );
}
