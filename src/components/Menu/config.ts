import { MenuEntry } from '@pancakeswap-libs/uikit'
// import { MenuItem } from 'components/SearchModal/styleds'
// import { ExternalLink } from 'components/Shared'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.skullswap.cf/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },

  {
    label: 'Airdrop',
    icon: 'PoolIcon',
    href: 'https://www.skullswap.cf/airdrop.html'
    // type: DropdownMenuItemType.EXTERNAL_LINK
  },
  {
    label: 'Presale',
    icon: 'TicketIcon',
    href: 'https://www.skullswap.cf/presale.html'
  },


  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: 'https://www.goosedefi.com/farms'
  // },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: 'https://www.goosedefi.com/nests'
  // },
  // {
  
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/goosedefi/',
      },
      {
        label: 'Twitter',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
      {
        label: 'Telegram',
        href: 'https://goosefinance.medium.com/',
      },
    ],
  },

  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },

  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config


