import React from 'react'
import { ComingSoonImg, ComingSoonText, StyledComingSoon } from './styled/ComingSoon.styled'

function ComingSoon() {
  return (
    <StyledComingSoon>
        <ComingSoonText>
          <span>Coming Soon</span>
          <h1>The First ever NFT of it's kind</h1>
          <p>
            Don’t miss out on the release of our new NFT. Sign up below to
            receive updates when we go live.
          </p>
          <button>Sign Up</button>
        </ComingSoonText>

        <ComingSoonImg>
            <img src="./assets/big-green.svg" alt="" />
        </ComingSoonImg>
    </StyledComingSoon>
  )
}

export default ComingSoon
