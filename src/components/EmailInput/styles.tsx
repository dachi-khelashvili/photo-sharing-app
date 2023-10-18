import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  margin-left: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  transition: all 200ms;

  &#normal {
    color: rgb(137, 137, 137);
    margin-top: 17px;
    font-size: 20px;
  }
  &#edited {
    color: dodgerblue;
    margin-top: 8px;
    font-size: 15px;
  }
  &#invalid {
    color: red;
    margin-top: 8px;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  color: rgb(60, 60, 60);
  background-color: transparent;

  padding: 27px 16px 7px 16px;
  border-radius: 10px;
  border: 2px solid rgb(137, 137, 137);
  outline: none;

  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: normal;

  &#normal {
    border-color: rgb(137, 137, 137);
  }
  &#edited {
    border-color: dodgerblue;
  }
  &#invalid {
    border-color: red;
  }

  z-index: 1;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InvalidLabel = styled.div`
  color: red;
  display: none;
  margin-right: 5px;

  &#invalid {
    display: inline-block;
  }
`;
