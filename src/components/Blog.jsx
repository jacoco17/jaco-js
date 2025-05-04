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
    <div className="relative min-h-screen bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern - matching the Hero component */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.22676%200C1.91374%200%202.45351%200.539773%202.45351%201.22676C2.45351%201.91374%201.91374%202.45351%201.22676%202.45351C0.539773%202.45351%200%201.91374%200%201.22676C0%200.539773%200.539773%200%201.22676%200Z%22%20fill%3D%22rgba(200%2C200%2C200%2C0.15)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"></div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 font-light mb-4 tracking-widest uppercase text-sm">
            Travel Journal
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-5">
            7 Days in <span className="text-emerald-400">Zamboanga</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A week-long adventure exploring the hidden gems and breathtaking landscapes of Zamboanga City and its surroundings.
          </p>
        </motion.div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {blogPosts.map((post) => (
            <motion.button
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: post.id * 0.05 }}
              onClick={() => {
                setActivePost(post.id);
                setIsExpanded(false);
              }}
              className={`px-5 py-2 text-sm uppercase tracking-wide font-medium transition-all duration-300 ${
                activePost === post.id 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent'
              }`}
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
            className="bg-zinc-900/30 border border-zinc-800 rounded-sm overflow-hidden shadow-lg relative"
          >
            {/* Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={post.headerImage} 
                alt={post.title}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-70"></div>
              
              {/* Post Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center mb-3">
                  <p className="text-emerald-400 text-sm uppercase tracking-wider">{post.date}</p>
                  <div className="ml-auto flex items-center text-zinc-400 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
                  {post.title}
                </h3>
              </div>
            </div>
            
            {/* Post Content */}
            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8 mt-10"
                  >
                    {/* Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {post.tourImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="relative group"
                        >
                          <div className="overflow-hidden border border-zinc-800">
                            <img 
                              src={image.url} 
                              alt={image.caption} 
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-zinc-950 to-transparent">
                            <p className="text-zinc-300 text-sm">{image.caption}</p>
                          </div>
                          
                          {/* Accent corner matching the Hero component style */}
                          <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Additional content could go here */}
                    <div className="text-zinc-400 space-y-4">
                      <p>
                        As we ventured through the diverse landscapes of Zamboanga, each moment revealed new wonders and experiences, connecting us with both nature and local culture in meaningful ways.
                      </p>
                      <p>
                        The rich biodiversity and warm hospitality of the locals made this journey truly unforgettable, leaving us with memories that will last a lifetime.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Read More / Show Less Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white hover:border-emerald-400 transition-colors duration-300"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-400 mb-5">Want to plan your own adventure to Zamboanga?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-zinc-900 border border-zinc-800 text-white hover:border-emerald-400 transition-colors duration-300"
          >
            Contact me for travel tips
          </a>
        </motion.div>
      </div>
    </div>
  );
} 