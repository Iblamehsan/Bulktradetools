import React from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  }
};

export function SystemOverviewBento() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Card 1: What Bulk Trade Does */}
      <motion.div
        variants={itemVariants}
        className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#dfb743]/20 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#dfb743]/10 border border-[#dfb743]/20 flex items-center justify-center text-[#dfb743]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white">Platform Functions</h3>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">
          Bulk Trade focuses on bringing full-scale institutional-grade trading mechanics directly to decentralized ecosystems:
        </p>
        <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Perpetual Futures:</strong> Long or short leading crypto assets with flexible collateral leverage.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>High Leverage:</strong> Supports leveraged contract execution reaching up to ~50x parameters.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Central Limit Order Book:</strong> Implements a CLOB execution engine instead of standard AMM models.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Advanced Trading:</strong> Native support for cross-margin accounts and advanced order book triggers.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Incentive Campaign:</strong> Live rewards including points multipliers, staking pools, and airdrops.</span>
          </li>
        </ul>
      </motion.div>

      {/* Card 2: Architectural Edge */}
      <motion.div
        variants={itemVariants}
        className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#dfb743]/20 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#dfb743]/10 border border-[#dfb743]/20 flex items-center justify-center text-[#dfb743]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white">The Architectural Edge</h3>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">
          Engineered to close the latency gap between centralized matching and decentralized custody protocols:
        </p>
        <ul className="flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Ultra-Fast Execution:</strong> Processes orders with ~5–20ms matching and ~20–40ms block finality.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Validator-Level Engine:</strong> Embedded matching engines run inside Solana validators, bypassing network queues.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>Order Book Pricing:</strong> Precise pricing and tighter spreads optimized for professional/HFT trading.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfb743]">•</span>
            <span><strong>MEV-Resistant:</strong> Proprietary pipeline designed to protect traders against toxic front-running.</span>
          </li>
        </ul>
      </motion.div>

      {/* Card 3: Funding & VC Profile */}
      <motion.div
        variants={itemVariants}
        className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#dfb743]/20 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#dfb743]/10 border border-[#dfb743]/20 flex items-center justify-center text-[#dfb743]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white">Venture Backing & Capital</h3>
        </div>
        <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
          <div className="flex justify-between border-b border-zinc-800/50 pb-2">
            <span>Seed Capital Raised</span>
            <span className="text-white font-bold">~$8.00M USD</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800/50 pb-2">
            <span>Lead Backers</span>
            <span className="text-white font-bold">Big Brain Holdings & Associates</span>
          </div>
          <div className="flex justify-between">
            <span>Disclosure Status</span>
            <span className="text-zinc-500 font-semibold">Early Stage / Limited</span>
          </div>
        </div>
        <p className="text-[11px] text-zinc-500 leading-relaxed italic">
          Backed by prominent crypto-native venture capital groups to construct robust, enterprise orderbooks on hyper-speed infrastructure.
        </p>
      </motion.div>

      {/* Card 4: Current Status & Risk */}
      <motion.div
        variants={itemVariants}
        className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#dfb743]/20 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#dfb743]/10 border border-[#dfb743]/20 flex items-center justify-center text-[#dfb743]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white">Platform Growth & Risk</h3>
        </div>
        <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
          <div className="flex justify-between border-b border-zinc-800/50 pb-2">
            <span>Active TVL</span>
            <a href="https://early.bulk.trade/predeposits" target="_blank" rel="noopener noreferrer" className="text-[#dfb743] hover:underline font-bold flex items-center gap-1">
              <span>$39,562,728</span>
              <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="flex justify-between border-b border-zinc-800/50 pb-2">
            <span>Growth Phase</span>
            <span className="text-white font-bold">Early Growth Stage</span>
          </div>
          <div className="flex justify-between">
            <span>Maturity Profile</span>
            <span className="text-red-400/80 font-semibold">High Risk / Nascent</span>
          </div>
        </div>
        <p className="text-[11px] text-zinc-400 leading-relaxed">
          Bulk Trade is in an early growth phase featuring pre-deposit campaigns. The exact TVL of <strong>$39,562,728</strong> is verifiable at <a href="https://early.bulk.trade/predeposits" target="_blank" rel="noopener noreferrer" className="text-[#dfb743] hover:underline">early.bulk.trade/predeposits</a>.
        </p>
      </motion.div>
    </motion.div>
  );
}
