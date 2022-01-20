import styled from "styled-components"
import { FcSearch } from "react-icons/fc"
import { FC } from "react"

// #region styled
const Container = styled.div`
  position: relative;
  width: 400px;  
  max-width: 100%;
  margin: 1rem 0;
  z-index: 1;
`

const SearchIcon = styled(FcSearch)`
  font-size: 2rem;
  position: absolute;
  top: 6px;
  left: 12px;
  z-index: 1;
`

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: .75rem 0 .75rem 64px;
  border-radius: var(--radius-md);
  outline: none;
  border: none;
  opacity: 0.8;
  color: var(--color);
  transition: all 150ms ease-out;

  &:hover, &:focus {
    opacity: 1;
  }

  &:focus {
    caret-color: var(--color);
  }
`
// #endregion

const Searchbar: FC<SearchbarType> = ({ onChange }) => {
  return (
    <Container>
      <SearchIcon />
      <Input type="text" placeholder="Muffins..." onChange={e => onChange(e.currentTarget.value.toLowerCase())} />
    </Container>
  )
}

export default Searchbar
