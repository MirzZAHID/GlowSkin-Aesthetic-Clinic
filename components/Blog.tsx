
import React from 'react';

const posts = [
  {
    category: 'Expert Tips',
    title: '5 Secrets to Maintaining Your Hydrafacial Glow',
    date: 'Oct 12, 2025',
    excerpt: 'Discover how the right post-treatment routine can extend your results for weeks...',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Treatment Guide',
    title: 'Laser Hair Removal: What to Expect During Your First Session',
    date: 'Oct 08, 2025',
    excerpt: 'Everything you need to know about preparation, sensation, and recovery for your laser journey...',
    image: 'https://images.unsplash.com/photo-1598911584262-50321ce7d042?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Skincare Science',
    title: 'The Role of Chemical Peels in Anti-Aging Therapy',
    date: 'Sep 29, 2025',
    excerpt: 'Understanding how different acid concentrations target fine lines and sun damage...',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Skincare Insights</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Latest From Our Blog
            </h2>
          </div>
          <a href="#" className="mt-6 md:mt-0 inline-flex items-center text-gold font-bold hover:underline">
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-3 font-medium uppercase tracking-tight">{post.date}</p>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-gold transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 font-light mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-slate-900 font-bold group-hover:text-gold transition-colors">
                Read Article
                <span className="ml-2 h-[1px] w-8 bg-slate-900 group-hover:bg-gold transition-all group-hover:w-12"></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
