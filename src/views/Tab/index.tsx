import React, { useState, useEffect, useRef } from 'react';
import { Container, TabItem } from './styles';
import { StyledButtonComponent, Radio } from 'components';
import { SimpleModal, Screen } from 'components/Modal';

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
  const onClick = () => {
    setShow(true);
  };
  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const uploadFile = () => {
    console.log('upload file');
  };
  return (
    <>
      {showUploadModal && (
        <Screen>
          <SimpleModal ref={showRef} style={{ width: '25%' }}>
            <div className="grid margin-20 height-100">
              <div className="flex fit-content">
                <div className="col-8">
                  <img
                    src="./avatar.jpg"
                    alt="uploaded image"
                    className="col-12"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="col-4 grid justify-center">
                  <Radio
                    name="photo"
                    options={[
                      { label: 'private', value: 1 },
                      { label: 'public', value: 0 },
                    ]}
                    onChange={changePhoto}
                  />
                </div>
              </div>
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
            </div>
          </SimpleModal>
        </Screen>
      )}
      <Container>
        <TabItem>Explore</TabItem>
        <TabItem>My Photos</TabItem>
        <TabItem>Friends</TabItem>
        <div style={{ marginLeft: 'auto' }}>
          <StyledButtonComponent buttonStyle="transparent" onClick={onClick}>
            Upload
          </StyledButtonComponent>
        </div>
      </Container>
    </>
  );
};
