import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { injected, bsc, walletconnect } from 'connectors'

import styled from 'styled-components'
import TwitterIcon from '../../assets/images/twitterIcon.svg'

import links from './config'

const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

function getIcon() {
    return (
      <IconWrapper size={16}>
        <img src={TwitterIcon} alt="Twitter Icon" />
      </IconWrapper>
    )
}


const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()

  return (

    <UikitMenu
      // enlaces del menu principal
      links={links}
      priceLink="https://www.coinmarketcap.com"

      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}

      isDark={isDark}
      toggleTheme={toggleTheme}

      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}

      // cakePriceUsd={cakePriceUsd}
      {...props}
    />
  )
}

export default Menu
