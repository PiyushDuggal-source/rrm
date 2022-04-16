import React from 'react'
import styled from 'styled-components'
import { Box } from '../../utils'
import Card from '../Card/Card'

const CardPage = () => {
  return (
      <CardContainer>

          <Card/>
      </CardContainer>
  )
}

const CardContainer = styled(Box)`


display: grid;
padding: 2rem;

`

export default CardPage