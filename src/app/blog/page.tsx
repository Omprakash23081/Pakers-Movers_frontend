import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog & Moving Tips',
  description: 'Expert moving tips, relocation guides, and cost estimates for a stress-free move.',
};

const blogPosts = [
  {
    id: 1,
    title: 'What is the Average Cost of House Shifting in Nagpur?',
    excerpt: 'A comprehensive guide to understanding the factors that influence your moving costs...',
    category: 'Cost & Pricing',
    date: 'May 1, 2026',
    slug: 'average-cost-house-shifting-nagpur'
  },
  {
    id: 2,
    title: 'The Ultimate Moving Checklist: 30 Days to Moving Day',
    excerpt: 'Follow this step-by-step checklist to ensure you do not miss anything important before the big day.',
    category: 'Relocation Tips',
    date: 'April 25, 2026',
    slug: 'ultimate-moving-checklist'
  },
  {
    id: 3,
    title: 'Moving from Nagpur to Mumbai: A Complete Relocation Guide',
    excerpt: 'Everything you need to know about routes, planning, and adjusting to the fast-paced life in Mumbai.',
    category: 'City-to-City Guides',
    date: 'April 18, 2026',
    slug: 'moving-from-nagpur-to-mumbai'
  },
  {
    id: 4,
    title: 'How to Pack Fragile Items for Long-Distance Moving',
    excerpt: 'Expert techniques for wrapping and packing glassware, electronics, and artwork securely.',
    category: 'Relocation Tips',
    date: 'April 10, 2026',
    slug: 'how-to-pack-fragile-items'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving Tips & Guides</h1>
        <p className="text-xl text-muted-foreground">
          Expert advice to make your next move as smooth and stress-free as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="p-6 flex-grow">
              <div className="text-sm text-primary font-medium mb-3">{post.category}</div>
              <h2 className="text-2xl font-bold mb-3 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                {post.excerpt}
              </p>
            </div>
            <div className="px-6 py-4 border-t border-border mt-auto flex items-center justify-between text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
