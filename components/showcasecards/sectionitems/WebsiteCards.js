// components/WebsiteCards.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WebsiteCard from './WebsiteCard';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const WebsiteCards = ({ websites }) => (
    <motion.div
    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    initial="hidden"
    animate="visible"
    variants={cardVariants}
  >
    {websites.map((website) => (
      <Link href={`/showcase/${website.category}`} key={website.id}>
        
        <motion.div variants={cardVariants}>
            <WebsiteCard website={website} />
          </motion.div>
        
      </Link>
    ))}
  </motion.div>
);

export default WebsiteCards;
