import React from 'react'
import { StyledCard } from './styled/Card.styled'
import { StyledFlex } from './styled/Flex.styled'

function Card({name, image}) {
  return (
    <StyledCard>
       <img src={image} alt="" />
       <div className="card-text">
       <StyledFlex>
           <h5 style={{color: '#FF8139'}}>Gloop Series</h5>
           <span>Top BID</span>
       </StyledFlex>
       <StyledFlex style={{display: 'flex', alignItems: 'center'}}>
           <h5>{name}</h5>
           <h5><img src='./assets/eth.svg' alt="" style={{width: '10px'}} /> 2.99 ETH</h5>
       </StyledFlex>
       <StyledFlex>
           <p>#12983</p>
           <p>1 day Left</p>
       </StyledFlex>
       </div>
    </StyledCard>
  )
}

export default Card