import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'What is the Average Cost of House Shifting in Nagpur?',
    excerpt: 'A comprehensive guide to understanding the factors that influence your moving costs...',
    category: 'Cost & Pricing',
    date: 'May 1, 2026',
    slug: 'average-cost-house-shifting-nagpur',
    content: `
      <h2>Understanding Moving Costs in Nagpur</h2>
      <p>Moving house can be a stressful and expensive endeavor. If you are planning a move within or from Nagpur, understanding the average costs and the factors that influence them can help you budget effectively and avoid surprises.</p>
      
      <h3>Key Factors Influencing Cost</h3>
      <ul>
        <li><strong>Distance:</strong> Local moves within Nagpur are generally cheaper than intercity relocations.</li>
        <li><strong>Volume of Goods:</strong> The size of your home (1BHK, 2BHK, 3BHK+) directly impacts the cost.</li>
        <li><strong>Packing Materials:</strong> Premium packing materials cost more but offer better protection.</li>
        <li><strong>Labor and Handling:</strong> Floor level, lack of elevator, and heavy items can increase labor costs.</li>
      </ul>

      <h3>Average Cost Breakdown</h3>
      <p>For a standard 2BHK local move in Nagpur, costs typically range from ₹4,000 to ₹10,000. For intercity moves, prices vary significantly based on distance and volume.</p>
    `
  },
  {
    id: 2,
    title: 'The Ultimate Moving Checklist: 30 Days to Moving Day',
    excerpt: 'Follow this step-by-step checklist to ensure you do not miss anything important before the big day.',
    category: 'Relocation Tips',
    date: 'April 25, 2026',
    slug: 'ultimate-moving-checklist',
    content: `
      <h2>Your 30-Day Moving Checklist</h2>
      <p>A successful move is all about planning and organization. Here is our comprehensive 30-day checklist to ensure your relocation is as smooth as possible.</p>

      <h3>4 Weeks Before Moving</h3>
      <ul>
        <li>Declutter and decide what to keep, sell, or donate.</li>
        <li>Start collecting packing supplies (boxes, tape, bubble wrap).</li>
        <li>Book your packers and movers.</li>
      </ul>

      <h3>2 Weeks Before Moving</h3>
      <ul>
        <li>Begin packing non-essential items (books, out-of-season clothing).</li>
        <li>Notify utility companies of your move.</li>
        <li>Update your address with banks, subscriptions, and post office.</li>
      </ul>

      <h3>Moving Day</h3>
      <ul>
        <li>Do a final walk-through of your old home.</li>
        <li>Ensure all boxes are properly labeled.</li>
        <li>Keep your moving day survival kit handy.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'Moving from Nagpur to Mumbai: A Complete Relocation Guide',
    excerpt: 'Everything you need to know about routes, planning, and adjusting to the fast-paced life in Mumbai.',
    category: 'City-to-City Guides',
    date: 'April 18, 2026',
    slug: 'moving-from-nagpur-to-mumbai',
    content: `
      <h2>Relocating from Nagpur to Mumbai</h2>
      <p>Moving from the Orange City to the Financial Capital of India is a major transition. Here is everything you need to know about the journey and adjusting to life in Mumbai.</p>

      <h3>Planning the Move</h3>
      <p>The distance between Nagpur and Mumbai is approximately 800 km. It's crucial to hire reliable packers and movers experienced in long-distance transportation.</p>

      <h3>Choosing the Right Neighborhood in Mumbai</h3>
      <p>Mumbai offers diverse neighborhoods. Consider factors like proximity to work, budget, and lifestyle preferences. Popular areas include Andheri, Powai, and Navi Mumbai.</p>

      <h3>Adjusting to Mumbai Life</h3>
      <p>Embrace the fast-paced lifestyle, explore the local street food, and familiarize yourself with the local transport network.</p>
    `
  },
  {
    id: 4,
    title: 'How to Pack Fragile Items for Long-Distance Moving',
    excerpt: 'Expert techniques for wrapping and packing glassware, electronics, and artwork securely.',
    category: 'Relocation Tips',
    date: 'April 10, 2026',
    slug: 'how-to-pack-fragile-items',
    content: `
      <h2>Expert Tips for Packing Fragile Items</h2>
      <p>Long-distance moves require extra care, especially when it comes to fragile items. Follow these expert techniques to ensure your valuables arrive intact.</p>

      <h3>Glassware and Dishes</h3>
      <p>Wrap each item individually in packing paper. Use plenty of bubble wrap for extra cushioning. Fill empty spaces in the box with crumpled paper to prevent movement.</p>

      <h3>Electronics</h3>
      <p>Whenever possible, use the original packaging. If not, use anti-static bubble wrap. Disconnect all cables and label them clearly.</p>

      <h3>Artwork and Mirrors</h3>
      <p>Use specialized picture boxes or telescope boxes. Protect the corners with cardboard protectors and wrap the entire piece in bubble wrap.</p>
    `
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Sunita Cargo Packers Movers`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-[95%] max-w-4xl mx-auto py-12 md:py-24">
      <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 sm:mb-8 font-medium px-2 sm:px-0">
        <ArrowLeft size={16} className="mr-2" />
        Back to Blog
      </Link>

      <article className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="p-5 sm:p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Tag size={16} className="mr-2 text-primary" />
              {post.category}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-primary" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2 text-primary" />
              Sunita Cargo
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
