import { generateSlug } from '@/lib/utils/slug';

export const CATEGORY_FILTERS = [
  'All Posts',
  'Market Trends',
  'Leadership',
  'Career Advice',
  'Interview Prep',
  'Case Studies',
  'Salary Insights',
  'HR Compliance',
] as const;

export type BlogCategory = (typeof CATEGORY_FILTERS)[number];
export type ContentCategory = Exclude<BlogCategory, 'All Posts'>;

type BlogSection = {
  heading: string;
  paragraphs: string[];
  checklist: string[];
};

type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: ContentCategory;
  author: string;
  date: string;
  publishedAtIso: string;
  readTime: string;
  image: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  faq: BlogFaq[];
};

const CONTENT_CATEGORIES = CATEGORY_FILTERS.filter(
  (category): category is ContentCategory => category !== 'All Posts'
);

const topicMap: Record<ContentCategory, string[]> = {
  'Market Trends': [
    'AI Hiring Demand',
    'GCC Expansion Jobs',
    'Manufacturing Talent Shifts',
    'BFSI Digital Recruitment',
    'Healthcare Staffing Growth',
    'Green Energy Workforce',
    'Fintech Compliance Roles',
    'Data Engineering Demand',
    'Cybersecurity Talent Gap',
    'Sales Hiring Momentum',
  ],
  Leadership: [
    'High-Performance Hiring Teams',
    'Workforce Planning for Scale-ups',
    'Employer Branding Strategy',
    'Reducing Offer Dropouts',
    'Structured Interview Design',
    'Hiring Manager Training',
    'Diversity Hiring Frameworks',
    'Remote Team Leadership Hiring',
    'Succession Planning for Key Roles',
    'Recruitment Analytics Dashboards',
  ],
  'Career Advice': [
    'ATS Resume Optimization',
    'LinkedIn Profile Branding',
    'Career Switch to Product Management',
    'Upskilling for Data Analytics',
    'Salary Negotiation Tactics',
    'Personal Branding for Freshers',
    'Networking with Chennai Recruiters',
    'Portfolio Building for Tech Roles',
    'Freelance to Full-Time Transition',
    'Mid-Career Growth Roadmap',
  ],
  'Interview Prep': [
    'Technical Interviews for Developers',
    'System Design Interview Basics',
    'Behavioral Interviews with STAR',
    'HR Interview Questions and Answers',
    'Aptitude and Reasoning Tests',
    'Group Discussion Strategy',
    'Case Interview Framework',
    'Mock Interview Routine',
    'Post-Interview Follow-Up Emails',
    'Final Round Leadership Interviews',
  ],
  'Case Studies': [
    'Startup Scaling from 20 to 120 Employees',
    'IT Services Time-to-Hire Reduction',
    'E-commerce Seasonal Hiring Campaign',
    'Manufacturing Plant Bulk Recruitment',
    'Healthcare Chain Nursing Recruitment',
    'BPO Attrition Reduction Program',
    'Campus Hiring for Engineering Graduates',
    'Executive Search for CTO Position',
    'Women Returnship Hiring Success',
    'Multi-Location Hiring Transformation',
  ],
  'Salary Insights': [
    'Software Engineer Compensation',
    'Data Analyst Salary Trends',
    'DevOps Engineer Pay Bands',
    'Product Manager Salary Ranges',
    'Digital Marketing Compensation',
    'HR Manager Salary Benchmarks',
    'Finance Analyst Pay Trends',
    'Sales Manager Incentive Structures',
    'UX Designer Compensation Trends',
    'Cybersecurity Specialist Salaries',
  ],
  'HR Compliance': [
    'Offer Letter Compliance Checklist',
    'Employment Contract Essentials',
    'Background Verification Policy',
    'PF and ESI Onboarding Rules',
    'POSH Policy Implementation',
    'Payroll Compliance for Startups',
    'Contractor vs Employee Classification',
    'Statutory Registers and Records',
    'Exit Process Compliance',
    'Gig Workforce Compliance in India',
  ],
};

const authorMap: Record<ContentCategory, string> = {
  'Market Trends': 'Solvifie Editorial',
  Leadership: 'Talent Leadership Desk',
  'Career Advice': 'Career Coach Team',
  'Interview Prep': 'Interview Excellence Team',
  'Case Studies': 'Recruitment Strategy Team',
  'Salary Insights': 'Compensation Analyst',
  'HR Compliance': 'HR Compliance Advisor',
};

const imagePool = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=720&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=720&fit=crop',
];

const createDate = (daysOffset: number) => {
  const baseDate = new Date(Date.UTC(2026, 1, 20));
  baseDate.setUTCDate(baseDate.getUTCDate() - daysOffset);
  return {
    iso: baseDate.toISOString(),
    label: baseDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      timeZone: 'UTC',
    }),
  };
};

const buildTitle = (category: ContentCategory, topic: string) => {
  switch (category) {
    case 'Market Trends':
      return `${topic}: Chennai Hiring Trends 2026`;
    case 'Leadership':
      return `${topic}: Leadership Hiring Playbook`;
    case 'Career Advice':
      return `${topic}: Career Growth Guide 2026`;
    case 'Interview Prep':
      return `${topic}: Interview Preparation Blueprint`;
    case 'Case Studies':
      return `${topic}: Recruitment Case Study`;
    case 'Salary Insights':
      return `${topic}: Chennai Salary Insights 2026`;
    case 'HR Compliance':
      return `${topic}: India HR Compliance Guide`;
    default:
      return topic;
  }
};

const buildExcerpt = (category: ContentCategory, topic: string) => {
  switch (category) {
    case 'Market Trends':
      return `Analyze ${topic.toLowerCase()} with current Chennai market signals, role demand forecasts, and practical hiring actions for 2026.`;
    case 'Leadership':
      return `Apply ${topic.toLowerCase()} frameworks to improve hiring velocity, candidate quality, and team performance in growing organizations.`;
    case 'Career Advice':
      return `Use this ${topic.toLowerCase()} guide to strengthen your profile, improve job search outcomes, and grow your career in Chennai.`;
    case 'Interview Prep':
      return `Master ${topic.toLowerCase()} with practical preparation steps, expected questions, and a structured strategy to improve interview performance.`;
    case 'Case Studies':
      return `See how ${topic.toLowerCase()} delivered measurable recruitment outcomes, including reduced time-to-hire and stronger retention results.`;
    case 'Salary Insights':
      return `Review ${topic.toLowerCase()} benchmarks with compensation ranges, market comparisons, and offer strategy tips for 2026 hiring.`;
    case 'HR Compliance':
      return `Follow this ${topic.toLowerCase()} checklist to stay compliant across hiring documentation, onboarding, payroll, and statutory requirements.`;
    default:
      return topic;
  }
};

const buildSections = (category: ContentCategory, topic: string): BlogSection[] => [
  {
    heading: `Why ${topic} Matters`,
    paragraphs: [
      `${topic} has become a priority area for companies that want predictable hiring outcomes in Chennai and across India. Teams that monitor this closely are better at planning headcount, reducing hiring delays, and improving role-to-candidate fit.`,
      `In 2026, businesses are shifting from reactive recruitment to skill-based planning. This means mapping role criticality, forecasting demand early, and aligning hiring timelines with business expansion goals.`,
    ],
    checklist: [
      `Define business outcomes linked to ${topic.toLowerCase()}.`,
      'Audit current hiring funnel performance by role and location.',
      'Build a 90-day execution plan with weekly recruiting milestones.',
    ],
  },
  {
    heading: `${category} Execution Framework`,
    paragraphs: [
      `Start with a clear baseline: sourcing volume, screening conversion, interview-to-offer ratio, and joining rate. Once baseline data is captured, standardize interview scorecards and decision criteria to improve quality and speed.`,
      `For sustained performance, assign clear ownership between HR, hiring managers, and leadership. Weekly reviews should focus on blockers, offer risks, and candidate experience metrics instead of only raw application counts.`,
    ],
    checklist: [
      `Create role scorecards aligned to ${topic.toLowerCase()}.`,
      'Use structured interviews and documented feedback rubrics.',
      'Track time-to-hire, quality-of-hire, and 90-day retention in one dashboard.',
    ],
  },
  {
    heading: 'Common Gaps and How to Fix Them',
    paragraphs: [
      `A common mistake is scaling recruitment activity without improving hiring process design. More interviews do not automatically produce better hires when role clarity and evaluation standards are weak.`,
      `Another frequent gap is late-stage candidate drop-off due to slow decision cycles or unclear compensation positioning. Fast, transparent communication with defined approval windows significantly improves conversions.`,
    ],
    checklist: [
      'Publish decision timelines for every hiring stage.',
      'Pre-align compensation bands before offer release.',
      'Run monthly process retrospectives and close high-impact gaps first.',
    ],
  },
];

const buildKeyTakeaways = (topic: string) => [
  `${topic} should be measured with clear business and hiring KPIs.`,
  'Structured process design outperforms ad-hoc recruitment activity.',
  'Weekly decision cadence reduces drop-offs and improves closure rates.',
  'Data-led execution is the fastest path to sustainable hiring quality.',
];

const buildFaq = (topic: string, category: ContentCategory): BlogFaq[] => [
  {
    question: `How quickly can teams implement ${topic.toLowerCase()} improvements?`,
    answer:
      'Most organizations can implement the first process upgrades in 2 to 4 weeks, then optimize continuously based on conversion and quality metrics.',
  },
  {
    question: `What metric should we track first for ${category.toLowerCase()}?`,
    answer:
      'Start with time-to-hire and offer acceptance rate. These two metrics quickly reveal pipeline bottlenecks and candidate experience issues.',
  },
  {
    question: 'Is this relevant for startups as well as larger companies?',
    answer:
      'Yes. Startups benefit from faster execution and clarity, while larger teams benefit from process standardization and cross-team consistency.',
  },
];

export const blogPosts: BlogPost[] = CONTENT_CATEGORIES.flatMap((category, categoryIndex) =>
  topicMap[category].map((topic, topicIndex) => {
    const globalIndex = categoryIndex * 10 + topicIndex;
    const date = createDate(globalIndex);
    const title = buildTitle(category, topic);

    return {
      id: globalIndex + 1,
      slug: generateSlug(title),
      title,
      excerpt: buildExcerpt(category, topic),
      category,
      author: authorMap[category],
      date: date.label,
      publishedAtIso: date.iso,
      readTime: `${6 + (topicIndex % 4)} min read`,
      image: imagePool[globalIndex % imagePool.length],
      sections: buildSections(category, topic),
      keyTakeaways: buildKeyTakeaways(topic),
      faq: buildFaq(topic, category),
    };
  })
);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedBlogPosts = (post: BlogPost, limit = 3) =>
  blogPosts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, limit);
