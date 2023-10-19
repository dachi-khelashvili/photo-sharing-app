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
  &#weak {
    color: red;
    margin-top: 8px;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  color: rgb(60, 60, 60);
  background-color: transparent;

  min-width: 0px;
  padding: 27px 0px 7px 16px;
  border-radius: 10px 0 0 10px;
  border: 2px solid rgb(137, 137, 137);
  border-width: 2px 0 2px 2px;
  outline: none;

  flex: 1;

  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: normal;

  &#normal {
    border-color: rgb(137, 137, 137);
  }
  &#edited {
    border-color: dodgerblue;
  }
  &#weak {
    border-color: red;
  }

  z-index: 1;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeakLabel = styled.div`
  color: red;
  display: none;
  margin-right: 5px;

  &#weak {
    display: inline-block;
  }
`;

export const Button = styled.button<{ icon: string }>`
  background-image: url('./password-eye.png');
  background-image: ${(props) => "url('./" + props.icon + "-eye.png')"};
  background-size: auto 40px;
  background-position: center;

  width: 50px;
  padding: 0;

  border: 2px solid black;
  border-width: 2px 2px 2px 0;
  border-radius: 0 10px 10px 0;
  outline: none;

  &#normal {
    border-color: rgb(137, 137, 137);
  }
  &#edited {
    border-color: dodgerblue;
  }
  &#weak {
    border-color: red;
  }

  &:hover {
    background-size: auto 46px;
  }
`;
