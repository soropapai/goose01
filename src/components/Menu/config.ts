import { MenuEntry } from '@pancakeswap-libs/uikit'
import { MenuItem } from 'components/SearchModal/styleds'

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
    icon: 'FarmIcon',
    href: 'https://www.skullswap.cf/airdrop.html',
    // type: DropdownMenuItemType.EXTERNAL_LINK
    type: MenuItem.EXTERNAL_LINK
  },
  {
    label: 'Presale',
    icon: 'PoolIcon',
    href: 'https://www.skullswap.cf/presale.html',
    type: MenuItem.EXTERNAL_LINK
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
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },

  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ]
  // },

  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/goosedefi/",
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://goosedefi.gitbook.io/goose-finance/",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://goosefinance.medium.com/",
  //     },
  //   ],
  // },

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
