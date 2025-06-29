"use client";

import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, UserCircle, ArrowRight, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

// Fonction pour formater les grands nombres
const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  }
  return number.toLocaleString();
};

interface BlogPostCardProps {
  post: BlogPost;
  onIncrementView?: (slug: string) => void;
}

export function BlogPostCard({ post, onIncrementView }: BlogPostCardProps) {
  const [localViews, setLocalViews] = useState(post.views);

  useEffect(() => {
    setLocalViews(post.views);
  }, [post.views]);

  const handleViewIncrement = () => {
    if (onIncrementView) {
      onIncrementView(post.slug);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative w-full h-56 aspect-video">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint={post.dataAiHint}
            />
          </div>
        </Link>
      )}
      <CardHeader className="p-6">
        <Link href={`/blog/${post.slug}`} className="block hover:text-primary transition-colors">
          <CardTitle className="text-2xl font-bold font-headline leading-tight">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1.5" />
            <span>{formatNumber(localViews)}</span>
          </div>
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            <span>{post.author}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <CardDescription className="text-base text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={handleViewIncrement}
        >
          <Link href={`/blog/${post.slug}`}>
            Lire la suite <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
