import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #222121;
`;

export const WrapRegister = styled.div`
  width: 390px;
  background-color: #c29009;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(216, 168, 36, 0.2);
`;

export const RegisterForm = styled.form`
  width: 100%;
`;

export const RegisterFormTitle = styled.span`
  display: block;
  font-size: 30px;
  color: azure;
  line-height: 1.2;
  text-align: center;
`;

export const RegisterFormTitleImg = styled.img`
  width: 90px;
`;

export const WrapInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #ffffff;
  margin-bottom: 37px;
`;

export const Input = styled.input`
  font-size: 15px;
  color: black;
  line-height: 1.2;
  border: none;
  display: block;
  width: 100%;
  height: 45px;
  background-color: transparent;
  padding: 0 5px;
  outline-style: none;

  ::placeholder {
    color: black;
  }
`;

export const ContainerRegisterFormBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 13px;
`;

export const RegisterFormBtn = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: black;
  background-color: white;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  font-family: "Poppins";
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  :hover {
    cursor: pointer;
    background-color: #ebeae8;
    transition: all 0.2s ease;
  }
`;

export const HaveNotAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const SpanLoginAccount = styled.span`
  font-size: 14px;
  color: #adadad;
  padding-right: 5px;
  line-height: 1.5;
  text-decoration: none;
`;

export const LoginAccount = styled(Link)`
  font-size: 14px;
  color: blue;
  line-height: 1.5;
  text-decoration: none;
`;