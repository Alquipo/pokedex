import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

import { Container } from 'components/Container'
import { PokemonTypesProps } from 'components/PokemonCard'

const customMedia = generateMedia({
  desktop: '980px'
})

export const ContainerInformation = styled(Container)`
  flex-direction: column;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.pokemonStatus-appear {
    animation: fadeIn 1.5s ease-in-out;
  }
`

// export const PokemonName = styled.h1`
//   ${({ theme }) => css`
//     width: 100%;
//     margin-top: ${theme.spacings.small};
//     margin-bottom: ${theme.spacings.xsmall};

//     color: ${theme.colors.gray};

//     text-transform: uppercase;
//     font-size: ${theme.font.sizes.xxlarge};
//     font-weight: ${theme.font.medium};
//     text-align: center;

//     cursor: default;
//   `}
// `

// type PokemonTypeColors = {
//   typeColor: PokemonTypesProps
// }

// export const PokemonCategory = styled.span<PokemonTypeColors>`
//   ${({ theme, typeColor }) => css`
//     padding: ${theme.spacings.xxsmall};
//     color: ${theme.colors.white};

//     background-color: ${theme.colors.pokemonText[typeColor]};

//     text-transform: capitalize;
//     border-radius: ${theme.border.radius.xsmall};

//     cursor: pointer;
//   `}
// `

// export const Wrapper = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     flex-direction: row;

//     width: 100%;
//     justify-content: center;
//     align-items: center;
//   `}

//   ${customMedia.lessThan('desktop')`
//     flex-direction: column;

//   `}
// `

// export const WrapperInformation = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   padding-left: 2rem;

//   ${customMedia.greaterThan('desktop')`
//    perspective: 30rem;
//   `}

//   ${customMedia.lessThan('desktop')`
//    margin-top: 2rem;
//   `}

//   cursor: default;
// `
// export const RotateDivRight = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 100%;

//     ${customMedia.greaterThan('desktop')`
//       transform: rotateY(30deg);
//       transition: 0.4s;
//       &:hover {
//         transform: rotateY(0);
//       }
//     `}
//   `}
// `

// export const TableInformation = styled.table`
//   ${({ theme }) => css`
//     line-height: 2;
//     color: ${theme.colors.gray};

//     border-collapse: collapse;

//     font-size: ${theme.font.sizes.large};

//     td {
//       padding: 0.5rem;
//       vertical-align: top;
//     }

//     td:first-child {
//       font-weight: ${theme.font.medium};
//       text-align: right;
//       padding-right: 2rem;
//     }

//     tr:nth-child(4) {
//       span:nth-child(2) {
//         filter: brightness(110%) saturate(50%);
//       }
//     }
//   `}
// `

// export const ButtonAbilities = styled.span<PokemonTypeColors>`
//   ${({ theme, typeColor }) => css`
//     color: ${theme.colors.white};
//     font-weight: ${theme.font.medium};

//     background-color: ${theme.colors.pokemonText[typeColor]};
//     transition: ${theme.transition.backgroundColor};

//     border-radius: ${theme.border.radius.xsmall};
//     border: none;
//     outline: none;

//     padding: 0.2rem 0.3rem;
//     margin-right: ${theme.spacings.xsmall};

//     line-height: inherit;
//     text-transform: uppercase;

//     cursor: pointer;
//   `}
// `

// export const WrapperTypes = styled.div`
//   display: flex;
//   flex-direction: row;
// `

// export const Type = styled.div<PokemonTypeColors>`
//   ${({ theme, typeColor }) => css`
//     text-transform: capitalize;

//     border-radius: ${theme.border.radius.small};
//     height: 3rem;
//     width: 9rem;

//     margin-right: ${theme.spacings.small};

//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;

//     background: ${theme.colors.pokemonType[typeColor]};
//     box-shadow: 0 0 20px ${theme.colors.pokemonType[typeColor]};
//     transition: all 0.2s;
//     filter: saturate(100%) brightness(110%);

//     cursor: default;

//     span {
//       line-height: 1;
//       padding: 0.5rem 0 0 0.5rem;
//       color: ${theme.colors.white};
//       cursor: default;
//     }

//     div {
//       margin: 0;
//     }
//   `}
// `

// export const WrapperStats = styled.section`
//   ${({ theme }) => css`
//     display: flex;

//     width: 100%;
//     padding-left: 2rem;
//     font-size: ${theme.font.sizes.xlarge};

//     ${customMedia.greaterThan('desktop')`
//  perspective: 35rem;
// `}

//     ${customMedia.lessThan('desktop')`
//  margin-top: 5rem;
// `}

// cursor: default;
//   `}
// `
// export const RotateDivLeft = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;

//   padding-right: 5rem;

//   ${customMedia.greaterThan('desktop')`
//       transform: rotateY(-30deg);
//       transition: 0.4s;

//       &:hover {
//         transform: rotateY(0);
//       }
//     `}
// `

// export const TableStats = styled.table`
//   ${({ theme }) => css`
//     height: 100%;

//     margin-bottom: 1rem;
//     line-height: 1.5;
//     color: ${theme.colors.gray};

//     border-collapse: collapse;

//     text-transform: capitalize;

//     td {
//       padding: ${theme.spacings.xsmall};
//       vertical-align: center;
//     }

//     td:first-child {
//       font-weight: ${theme.font.medium};
//       text-align: right;
//       width: 8rem;
//       vertical-align: top;

//       padding-right: 2rem;
//     }
//   `}
// `

// type ButtonProps = {
//   buttonActive: boolean
// } & PokemonTypeColors

// export const Button = styled.button<ButtonProps>`
//   ${({ theme, typeColor, buttonActive }) => css`
//     border-radius: 5rem;
//     font-weight: ${theme.font.bold};
//     text-align: center;
//     font-size: 1.6rem;
//     line-height: 1.7;

//     border: 1px solid transparent;
//     padding: 0.4rem 0.8rem;

//     color: ${theme.colors.gray};
//     background-color: ${theme.colors.lightBg};

//     ${buttonActive &&
//     css`
//       color: ${theme.colors.white};
//       background-color: ${theme.colors.pokemonText[typeColor]};
//       transition: background-color 1s ease-in, width 1.5s ease-in-out;
//     `}

//     &:focus {
//       outline: 0;
//     }
//   `}
// `
