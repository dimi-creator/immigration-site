import { blogPosts } from '@/lib/blogData';
import { BlogPostCard } from '@/components/BlogPostCard';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground text-center">
         <div className="absolute inset-0">
            <Image 
              src="https://placehold.co/1600x400.png" 
              alt="Blog banner" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-20"
              data-ai-hint="library books"
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Notre Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Actualités, conseils et informations sur l'immigration et la vie au Canada.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Aucun article pour le moment.</h2>
              <p className="text-muted-foreground">Revenez bientôt pour des mises à jour !</p>
            </div>
          )}
          {/* Placeholder for pagination if many posts */}
        </div>
      </section>
    </div>
  );
}
