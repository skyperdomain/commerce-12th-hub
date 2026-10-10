export const subjectsData = [
  {
    id: 'accountancy',
    name: 'Accountancy (055)',
    code: '055',
    color: 'indigo',
    badge: 'Part A & B • 80 Marks',
    description: 'Master partnership accounts, company shares, debentures, and cash flow analysis.',
    chapters: [
      {
        id: 'acc-1',
        title: 'Accounting for Partnership Firms — Fundamentals',
        description: 'Profit and loss appropriation account, partners capital accounts, interest on capital/drawings, and past adjustments.',
        duration: '4 hours',
        videos: [
          { title: 'Partnership Fundamentals One-Shot Revision', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa0a-S_S_qXipX26T_LgA--a', channel: 'PW Commerce Wallah' }
        ],
        notes: {
          title: 'Partnership Fundamentals NCERT Revision Notes',
          summary: 'Essential formulas for interest on drawings (product method vs average period method) and P&L Appropriation rules.'
        },
        questions: [
          {
            id: 'q-acc-1',
            type: 'mcq',
            question: 'When partners capital accounts are fixed, which account is used to record items like interest on capital, salary, and share of profits?',
            options: ['Partners Capital Account', 'Partners Current Account', 'Profit and Loss Adjustment Account', 'Cash Account'],
            correct: 1,
            explanation: 'Under Fixed Capital Method, two accounts are maintained: Capital Account (remains fixed) and Current Account (records all periodic adjustments).'
          },
          {
            id: 'q-acc-2',
            type: 'numerical',
            question: 'A firm earned average profits of ₹1,20,000. Normal rate of return is 10%. Assets are ₹11,00,000 and outside liabilities are ₹2,00,000. Calculate Goodwill by Capitalisation of Average Profits.',
            modelAnswer: 'Capitalised Value = (1,20,000 * 100) / 10 = ₹12,00,000. Net Assets = 11,00,000 - 2,00,000 = ₹9,00,000. Goodwill = 12,00,000 - 9,00,000 = ₹3,00,000.',
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'acc-2',
        title: 'Accounting for Share Capital',
        description: 'Issue of shares at par, premium, oversubscription, calls-in-arrears, forfeiture, and re-issue of forfeited shares.',
        duration: '6 hours',
        videos: [
          { title: 'Issue and Forfeiture of Shares Complete Masterclass', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa0a-S_S_qXipX26T_LgA--a', channel: 'PW Commerce Wallah' }
        ],
        notes: {
          title: 'Share Forfeiture & Re-issue Quick Sheet',
          summary: 'Journal entry rules: Debit Share Capital with called-up amount; Debit Securities Premium if unpaid; Credit Share Forfeiture with amount received.'
        },
        questions: [
          {
            id: 'q-acc-3',
            type: 'mcq',
            question: 'When shares are forfeited, Share Capital Account is debited with:',
            options: ['Paid-up amount', 'Called-up amount', 'Face value', 'Issue price'],
            correct: 1,
            explanation: 'Share Capital is always debited with the exact amount called up by the company per share up to the date of forfeiture.'
          }
        ]
      },
      {
        id: 'acc-3',
        title: 'Cash Flow Statement (AS-3)',
        description: 'Classification of cash flows into Operating, Investing, and Financing activities.',
        duration: '5 hours',
        videos: [
          { title: 'Cash Flow Statement 6-Mark Numerical Marathon', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa0a-S_S_qXipX26T_LgA--a', channel: 'PW Commerce Wallah' }
        ],
        notes: {
          title: 'AS-3 Cash Flow Quick Reference',
          summary: 'Operating Activities start with Net Profit before Tax & Extra-ordinary items. Add back non-cash expenses like depreciation.'
        },
        questions: [
          {
            id: 'q-acc-4',
            type: 'mcq',
            question: 'Payment of dividend by a manufacturing company is classified under which activity in a Cash Flow Statement?',
            options: ['Operating Activity', 'Investing Activity', 'Financing Activity', 'Cash Equivalent'],
            correct: 2,
            explanation: 'Dividends paid relate to capital structure and financing of the enterprise, hence classified under Financing Activities.'
          }
        ]
      }
    ]
  },
  {
    id: 'bst',
    name: 'Business Studies (054)',
    code: '054',
    color: 'violet',
    badge: 'Theory + Project • 80 Marks',
    description: 'Learn management principles, business environment, financial markets, and marketing mix.',
    chapters: [
      {
        id: 'bst-1',
        title: 'Principles of Management',
        description: 'Fayol’s 14 principles of management and Taylor’s scientific management techniques.',
        duration: '3 hours',
        videos: [
          { title: 'Fayol vs Taylor Principles One-Shot', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa1j3sM_P0L-KjJ1S31fE_mH', channel: 'Xylem Commerce' }
        ],
        notes: {
          title: 'Management Principles Revision Notes',
          summary: 'Unity of Command vs Unity of Direction; Functional Foremanship and Scientific Techniques.'
        },
        questions: [
          {
            id: 'q-bst-1',
            type: 'mcq',
            question: 'Which principle of Henri Fayol states that there should be "one head and one plan" for a group of activities having the same objective?',
            options: ['Unity of Command', 'Unity of Direction', 'Scalar Chain', 'Order'],
            correct: 1,
            explanation: 'Unity of Direction ensures unity of action and coordination, meaning one head and one plan for a single set of objectives.'
          },
          {
            id: 'q-bst-2',
            type: 'case-study',
            question: 'Rakesh runs a shoe manufacturing unit. He notices workers waste time running to supervisors for small tool requests. He appoints 8 functional specialists. Name the technique used.',
            modelAnswer: 'Functional Foremanship. Taylor advocated 8 specialists (4 planning, 4 execution) to supervise workers.',
            difficulty: 'Hard'
          }
        ]
      },
      {
        id: 'bst-2',
        title: 'Marketing Management',
        description: 'Marketing philosophies, 4 Ps (Product, Price, Place, Promotion), branding, packaging, and consumer protection.',
        duration: '4 hours',
        videos: [
          { title: 'Marketing Management Complete Chapter Revision', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa1j3sM_P0L-KjJ1S31fE_mH', channel: 'Xylem Commerce' }
        ],
        notes: {
          title: 'Marketing Mix 4Ps Quick Summary',
          summary: 'Product, Price, Place (Channels of distribution), and Promotion (Advertising, Personal Selling, Sales Promotion).'
        },
        questions: [
          {
            id: 'q-bst-3',
            type: 'mcq',
            question: 'Which element of the marketing mix involves decisions regarding warehousing, inventory control, and transport?',
            options: ['Product', 'Price', 'Place', 'Promotion'],
            correct: 2,
            explanation: 'Place or physical distribution covers channels of distribution, transportation, and warehousing.'
          }
        ]
      }
    ]
  },
  {
    id: 'economics',
    name: 'Economics (030)',
    code: '030',
    color: 'emerald',
    badge: 'Macro & IED • 80 Marks',
    description: 'Master National Income aggregates, determination of income, government budget, and Indian economic development.',
    chapters: [
      {
        id: 'eco-1',
        title: 'National Income and Related Aggregates',
        description: 'Circular flow of income, value added method, income method, expenditure method, and real vs nominal GDP.',
        duration: '5 hours',
        videos: [
          { title: 'National Income Numericals Masterclass', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa32H-I44Wk_yM0eE2N1jY_x', channel: 'PW Commerce Wallah' }
        ],
        notes: {
          title: 'National Income Formulas Sheet',
          summary: 'GDP_MP = COE + OS + MI + Depreciation + Net Indirect Taxes. Net Factor Income from Abroad (NFI) rules.'
        },
        questions: [
          {
            id: 'q-eco-1',
            type: 'mcq',
            question: 'If Marginal Propensity to Consume (MPC) is 0.75, what is the value of the Investment Multiplier (k)?',
            options: ['1.33', '4', '5', '0.25'],
            correct: 1,
            explanation: 'Multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4.'
          }
        ]
      },
      {
        id: 'eco-2',
        title: 'Indian Economic Development (1990 Reforms)',
        description: 'State of Indian economy on eve of independence, five-year plans, and 1991 LPG (Liberalisation, Privatisation, Globalisation) reforms.',
        duration: '4 hours',
        videos: [
          { title: '1991 LPG Reforms & IED One-Shot', url: 'https://www.youtube.com/embed/videoseries?list=PL3EdypgfeNa32H-I44Wk_yM0eE2N1jY_x', channel: 'PW Commerce Wallah' }
        ],
        notes: {
          title: 'LPG Policy Quick Notes',
          summary: 'Liberalisation (industrial licensing abolition), Privatisation (disinvestment of PSU shares), and Globalisation (tariff reduction).'
        },
        questions: [
          {
            id: 'q-eco-2',
            type: 'mcq',
            question: 'Which policy reform under New Economic Policy 1991 aimed at reducing the role of the public sector by selling equity of public sector undertakings?',
            options: ['Liberalisation', 'Privatisation', 'Globalisation', 'Demonetisation'],
            correct: 1,
            explanation: 'Privatisation implies shedding the ownership or management of a government-owned enterprise.'
          }
        ]
      }
    ]
  }
];