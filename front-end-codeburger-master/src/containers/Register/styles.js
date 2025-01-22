import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterImage = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 255px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 200px;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
`
export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-top: ${props => (props.error ? '9px' : '19px')};
  margin-bottom: 3px;
`
export const Input = styled.input`
  width: 391px;
  height: 38px;
  background: #fff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
  padding: 8px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
