import React, { useState, useMemo } from 'react';

import { Container, TabItem } from './styles';
import { Flex, FlexItem, Typography, Search, Wrap, RightGrid } from './styles';
import { Selector, PaginationBar, FriendCard } from 'components';
import { getFriends, PageFriendsSize } from 'consts';

export const FriendsView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const temp = getFriends();
  const [friends] = useState(temp);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageFriendsSize;
    const lastPageIndex = firstPageIndex + PageFriendsSize;
    return friends.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, friends]);

  const onClick = () => {
    return null;
  };
  return (
    <>
      <Container>
        <TabItem>Friends</TabItem>
        <TabItem>Add New Friends</TabItem>
        <TabItem>Friend Requests</TabItem>
        <TabItem>Pending Requests</TabItem>
      </Container>
      <Flex>
        <FlexItem>
          <Selector />
        </FlexItem>
        <FlexItem>
          <Typography>Search:</Typography>
          <Search placeholder="Search..." />
        </FlexItem>
        <RightGrid>
          <PaginationBar
            totalCount={friends.length}
            currentPage={currentPage}
            pageSize={PageFriendsSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </RightGrid>
      </Flex>
      <Wrap>
        {currentData.map((friend, index) => {
          return <FriendCard key={index} friend={friend} onClick={onClick} />;
        })}
      </Wrap>
    </>
  );
};
