import { BlogPost } from '@/types';
import { BlogPostCard } from './BlogPostCard';
import { useState } from 'react';

interface BlogPostsProps {
  posts: BlogPost[];
}

export function BlogPosts({ posts }: BlogPostsProps) {
  const [views, setViews] = useState<{ [key: string]: number }>({});

  const handleIncrementView = (slug: string) => {
    // Simuler l'appel à une API pour incrémenter les vues
    // Dans une application réelle, vous feriez une requête HTTP ici
    const newViews = {
      ...views,
      [slug]: (views[slug] || 0) + 1
    };
    setViews(newViews);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          post={post}
          onIncrementView={handleIncrementView}
        />
      ))}
    </div>
  );
}
