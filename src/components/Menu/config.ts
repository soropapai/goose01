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
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: 'https://www.goosedefi.com/nests'
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


