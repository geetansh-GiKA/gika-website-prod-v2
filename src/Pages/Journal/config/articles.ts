import type { FC } from 'react'
import { CoverKnowledgeGraph } from '../components/covers/CoverKnowledgeGraph'
import { CoverStructuredGrid } from '../components/covers/CoverStructuredGrid'
import { CoverNeuralNet } from '../components/covers/CoverNeuralNet'

export type ArticleVariant = 'default' | 'sage' | 'dark'

export interface Article {
  slug: string
  issue: number
  tag: string
  readTime: string
  date: string
  headline: string
  summary: string
  author: string
  authorRole: string
  variant: ArticleVariant
  CoverSvg: FC
}

export const articles: Article[] = [
  {
    slug: 'gikagraph-ai-intelligence-layer',
    issue: 3,
    tag: 'Platform Insights',
    readTime: '5 min',
    date: 'Dec 4, 2025',
    headline: 'AI that Truly Understands your Business',
    summary:
      'GiKA blends your internal data with global knowledge, understands complex relationships between business entities, and reasons across multiple layers to deliver insights that drive smarter, strategic decisions.',
    author: 'GiKA AI Team',
    authorRole: 'GiKA AI',
    variant: 'default',
    CoverSvg: CoverKnowledgeGraph,
  },
  {
    slug: 'copilot-for-the-business',
    issue: 2,
    tag: 'AI & Technology',
    readTime: '6 min',
    date: 'Sep 2, 2025',
    headline: 'AI Copilot for the Business: Bringing Structure to Enterprise Decision-Making',
    summary:
      'Why has coding seen such a leap in AI performance and trust, while other domains grapple with hallucinations? The answer lies in structure — and GiKA is bringing that structure to enterprise decision-making.',
    author: 'GiKA AI Team',
    authorRole: 'GiKA AI',
    variant: 'sage',
    CoverSvg: CoverStructuredGrid,
  },
  {
    slug: 'ai-that-truly-understands-your-business',
    issue: 1,
    tag: 'AI & Technology',
    readTime: '12 min',
    date: 'Jul 7, 2025',
    headline: 'Redefining How Business Thinks With GiKA',
    summary:
      "Explore why neural networks alone are not enough for intelligent decision-making, and how GiKA's reasoning-first AI goes beyond workflow automation to augment analyst thinking.",
    author: 'Gika AI Team',
    authorRole: 'Co-Founder, GiKA AI',
    variant: 'dark',
    CoverSvg: CoverNeuralNet,
  },
]
