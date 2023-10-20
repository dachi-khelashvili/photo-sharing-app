import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  margin-left: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  transition: all 200ms;

  &#STATE_NORMAL {
    color: rgb(137, 137, 137);
    margin-top: 17px;
    font-size: 20px;
  }
  &#STATE_EDITED {
    color: dodgerblue;
    margin-top: 8px;
    font-size: 15px;
  }
  &#STATE_INVALID {
    color: red;
    margin-top: 8px;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  color: rgb(60, 60, 60);
  background-color: transparent;

  min-width: 0px;
  padding: 27px 46px 7px 16px;
  border-radius: 10px;
  border: 2px solid rgb(137, 137, 137);
  outline: none;

  flex: 1;

  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: normal;

  &#STATE_NORMAL {
    border-color: rgb(137, 137, 137);
  }
  &#STATE_EDITED {
    border-color: dodgerblue;
  }
  &#STATE_INVALID {
    border-color: red;
  }

  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InvalidLabel = styled.div`
  color: red;
  display: none;
  margin-right: 5px;

  &#STATE_INVALID {
    display: inline-block;
  }
`;
