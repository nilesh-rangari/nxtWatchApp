import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const FailedViewImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailedViewHeading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const FailedViewNote = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: roboto;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`
