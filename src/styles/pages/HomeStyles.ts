import styled from  'styled-components'

import {Carousel as ResponsiveCarousel} from 'react-responsive-carousel'


export const CarrosselContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    `

export const Carousel = styled(ResponsiveCarousel)`

  
`

export const ProductCardContainer = styled.main`
    margin: 0 auto;
    margin-top: 16px;
    max-width: 1200px;
    padding: 0 16px ;
    padding-bottom: 16px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 16px;
  
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 576px) {
        grid-template-columns: repeat(1,1fr);
    }


`