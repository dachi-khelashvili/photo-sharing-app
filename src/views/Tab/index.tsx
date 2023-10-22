import React, { useState, useEffect, useRef } from 'react';
import { Container, TabItem } from './styles';
import {
  StyledButtonComponent,
  Radio,
  StyledInput,
  StyledTextAreaComponent,
} from 'components';
import { SimpleModal, Screen } from 'components/Modal/styles';
import { Grid, Flex, Img, RadioGroup, RightGrid } from './styles';

export const Tab: React.FC = () => {
  const useOutsideMenuAlerter = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          // alert('You clicked outside of me!');
          setShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  const showRef = useRef(null);
  useOutsideMenuAlerter(showRef);

  const [showUploadModal, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClick = () => {
    setShow(true);
  };
  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const uploadFile = () => {
    console.log('upload file');
  };
  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
    console.log(description);
  };
  return (
    <>
      {showUploadModal && (
        <Screen>
          <SimpleModal ref={showRef} style={{ width: '25%' }}>
            <Grid>
              <StyledInput width="100%" label="Title" onChange={changeTitle} />
              <Flex>
                <Img
                  src="./avatar.jpg"
                  alt="uploaded image"
                  className="col-12"
                />
                <RadioGroup>
                  <Radio
                    name="photo"
                    options={[
                      { label: 'public', value: 0 },
                      { label: 'private', value: 1 },
                      { label: 'private', value: 2 },
                    ]}
                    onChange={changePhoto}
                  />
                </RadioGroup>
              </Flex>
              <StyledTextAreaComponent onChange={changeDescription} />
              <div>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                  <StyledButtonComponent
                    buttonStyle="blue"
                    onClick={uploadFile}
                  >
                    Upload
                  </StyledButtonComponent>
                </div>
              </div>
            </Grid>
          </SimpleModal>
        </Screen>
      )}
      <Container>
        <TabItem>Explore</TabItem>
        <TabItem>My Photos</TabItem>
        <TabItem>Friends</TabItem>
        <RightGrid>
          <StyledButtonComponent buttonStyle="transparent" onClick={onClick}>
            Upload
          </StyledButtonComponent>
        </RightGrid>
      </Container>
    </>
  );
};
