import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Day 1: Exploring the Majestic Mountains of Zamboanga",
    excerpt: "Our journey began with a breathtaking trek through the rolling hills and majestic mountains surrounding Zamboanga City, where we discovered hidden waterfalls and encountered local wildlife.",
    date: "July 10, 2023",
    readTime: "8 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1552057426-9f23e61fa7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        caption: "The trail leading to the hidden waterfall"
      },
      {
        url: "https://images.unsplash.com/photo-1542665952-14413f09bdf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Local wildlife spotted during our hike"
      },
      {
        url: "https://images.unsplash.com/photo-1621068621248-4b9db5e799d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        caption: "The view from our mountain camping site"
      }
    ]
  },
  {
    id: 2,
    title: "Day 2: Diving the Crystal Waters of Zamboanga's Coral Reefs",
    excerpt: "We spent our second day exploring the vibrant underwater world of Zamboanga's coral reefs, swimming alongside colorful marine life and discovering stunning coral formations.",
    date: "July 11, 2023",
    readTime: "7 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1682687982183-c2937a37a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80",
        caption: "Vibrant coral formations teeming with life"
      },
      {
        url: "https://images.unsplash.com/photo-1669513374891-ca9e958532c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Tropical fish in their natural habitat"
      },
      {
        url: "https://images.unsplash.com/photo-1586434361016-9d6a129511ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "The beachside resting spot after our dive"
      }
    ]
  },
  {
    id: 3,
    title: "Day 3: Cultural Journey Through Zamboanga's Historic Sites",
    excerpt: "Our third day was dedicated to immersing ourselves in Zamboanga's rich history and diverse culture, visiting ancient fortresses, colorful vintas, and sampling the local Chavacano cuisine.",
    date: "July 12, 2023",
    readTime: "9 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1626265774643-f1aa53da0d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1598628461950-268968751a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        caption: "The historic Fort Pilar from the Spanish era"
      },
      {
        url: "https://images.unsplash.com/photo-1619450893800-d2cce5e64508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        caption: "Traditional colorful vintas sailing at sunset"
      },
      {
        url: "https://images.unsplash.com/photo-1673509258266-28c337b9c9b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Local market with traditional Zamboangueño cuisine"
      }
    ]
  },
  {
    id: 4,
    title: "Day 4: Island Hopping Adventure in Zamboanga's Archipelago",
    excerpt: "We spent our fourth day island hopping across Zamboanga's pristine archipelago, relaxing on white sand beaches, exploring hidden caves, and enjoying the crystal clear waters.",
    date: "July 13, 2023",
    readTime: "6 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1551304197-3f7be968bef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Approaching one of Zamboanga's secluded islands"
      },
      {
        url: "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1525&q=80",
        caption: "Exploring a hidden sea cave during low tide"
      },
      {
        url: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        caption: "Beachside picnic with freshly caught seafood"
      }
    ]
  },
  {
    id: 5,
    title: "Day 5: Pink Beach and Sandbar Excursion in Zamboanga",
    excerpt: "Our fifth day led us to Zamboanga's famous pink beach and stunning sandbars, where we witnessed the rare pink sand phenomenon and enjoyed spectacular sunset views.",
    date: "July 14, 2023",
    readTime: "7 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
        caption: "The unique pink sand beach up close"
      },
      {
        url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        caption: "Walking along the disappearing sandbar at low tide"
      },
      {
        url: "https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "The breathtaking sunset view from the beach"
      }
    ]
  },
  {
    id: 6,
    title: "Day 6: Mangrove Forest and Firefly Watching Tour",
    excerpt: "Day six took us through Zamboanga's lush mangrove forests by day, followed by a magical evening river cruise to witness thousands of fireflies illuminating the night.",
    date: "July 15, 2023",
    readTime: "10 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1628984868838-032206abb227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Kayaking through the dense mangrove forest"
      },
      {
        url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Rare birds spotted in the mangrove ecosystem"
      },
      {
        url: "https://images.unsplash.com/photo-1536294746696-cf660c82cdb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Evening river cruise for firefly watching"
      }
    ]
  },
  {
    id: 7,
    title: "Day 7: Local Food Tour and Culinary Adventures in Zamboanga",
    excerpt: "Our final day was a feast for the senses as we embarked on a culinary journey through Zamboanga, sampling local delicacies, visiting markets, and learning traditional cooking methods.",
    date: "July 16, 2023",
    readTime: "8 min read",
    author: "Riean Bob",
    headerImage: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tourImages: [
      {
        url: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
        caption: "Local market with fresh seafood and produce"
      },
      {
        url: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Learning traditional cooking methods from locals"
      },
      {
        url: "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        caption: "Farewell dinner with Zamboanga's famous seafood platter"
      }
    ]
  },
];

export default function Blog() {
  const [activePost, setActivePost] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const post = blogPosts.find(post => post.id === activePost);
  
  return (
    <section id="blog" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-5xl font-bold text-white">7 Days in Zamboanga</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 blur-sm"></div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">A week-long adventure exploring the hidden gems and breathtaking landscapes of Zamboanga City and its surroundings.</p>
        </motion.div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {blogPosts.map((post) => (
            <motion.button
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: post.id * 0.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePost === post.id 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              onClick={() => {
                setActivePost(post.id);
                setIsExpanded(false);
              }}
            >
              Day {post.id}
            </motion.button>
          ))}
        </div>

        {/* Featured Blog Post */}
        {post && (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 shadow-xl relative"
          >
            {/* Header Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img 
                src={post.headerImage} 
                alt={post.title}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              
              {/* Post Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center mb-3">
                  <div className="h-px w-8 bg-blue-400 mr-3"></div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">{post.date}</p>
                  <div className="ml-auto flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {post.title}
                </h3>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                    RB
                  </div>
                  <p className="text-gray-300 text-sm">
                    By <span className="text-blue-400 font-medium">{post.author}</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Post Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-400 mb-8">
                    This adventure was part of our week-long exploration of Zamboanga's diverse landscapes and rich cultural heritage. Each day brought new discoveries and unforgettable experiences as we immersed ourselves in the natural beauty and local traditions of this remarkable region.
                  </p>
                  
                  {/* Tour Images Section */}
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="w-8 h-1 bg-blue-400 mr-3"></span>
                    Tour Highlights
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {post.tourImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="relative h-64 overflow-hidden rounded-lg">
                          <img 
                            src={image.url} 
                            alt={image.caption}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    Read Full Article
                  </Link>
                </motion.div>
              )}
              
              {!isExpanded && (
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-full hover:bg-blue-400/10 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                </div>
              )}
            </div>
            
            {/* Day Indicator */}
            <div className="absolute top-4 right-4 flex items-center bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/30 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
              <span className="text-xs text-gray-300">Day {post.id} of 7</span>
            </div>
          </motion.div>
        )}
        
        {/* Navigation Arrows */}
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActivePost(prev => prev > 1 ? prev - 1 : 7);
              setIsExpanded(false);
            }}
            className="p-3 rounded-full bg-gray-800/70 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActivePost(prev => prev < 7 ? prev + 1 : 1);
              setIsExpanded(false);
            }}
            className="p-3 rounded-full bg-gray-800/70 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
        
        {/* View All Blog Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <span>View All Blog Posts</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 