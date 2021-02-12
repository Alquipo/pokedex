import * as S from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Search: React.FC<Props> = (props) => {
  return (
    <S.Wrapper>
      <S.Input type="text" {...props} autoFocus />
    </S.Wrapper>
  )
}

export default Search
