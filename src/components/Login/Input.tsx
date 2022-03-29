import styled from '@emotion/styled';

interface InputProps {
  label: string;
  name: string;
  name2: string;
  type: string;
  type2: string;
  placeholder: string;
  placeholder2: string;
  btnValue: string;
}
export default function Input({
  label,
  name,
  name2,
  type,
  type2,
  placeholder,
  placeholder2,
  btnValue,
}: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {name === 'email' ? (
        <InputContainer>
          <input id={name} type={type} name={name} placeholder={placeholder} />
          <input type="submit" value={btnValue} />
        </InputContainer>
      ) : null}
      {name === 'phone' ? (
        <InputContainer>
          <input id={name} type={type} name={name} placeholder={placeholder} />
          <input type="submit" value={btnValue} />
        </InputContainer>
      ) : null}
      {name === 'userId' ? (
        <InputContainer>
          <input id={name} type={type} name={name} placeholder={placeholder} />
          <input
            id={name2}
            type={type2}
            name={name2}
            placeholder={placeholder2}
          />
          <input type="submit" value={btnValue} />
        </InputContainer>
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  /* background-color: red; */
  padding: 10px;
  label {
    display: block;
    margin-bottom: 5px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    padding: 10px;
  }
`;
