'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Award } from 'lucide-react';

const blogPosts = [
  {
    title: 'Latest Trends in Construction Project Management',
    excerpt: 'Discover the latest technologies and methodologies that are revolutionizing the construction industry and how we implement them in our projects.',
    icon: Building,
    category: 'Project Management',
    readTime: '5 min read'
  },
  {
    title: 'Sustainable Building Practices in Modern Construction',
    excerpt: 'Exploring eco-friendly construction methods and sustainable materials that are shaping the future of building projects across India.',
    icon: TrendingUp,
    category: 'Sustainability',
    readTime: '7 min read'
  },
  {
    title: 'Success Story: Sawhney Buildwell LLP Project',
    excerpt: 'A detailed case study of our successful collaboration with Sawhney Buildwell LLP, delivering a 550,000 SQ FT project in Pune.',
    icon: Award,
    category: 'Case Study',
    readTime: '8 min read'
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Industry Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and insights from the construction and project management industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <post.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center transition-colors">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View All Insights
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;