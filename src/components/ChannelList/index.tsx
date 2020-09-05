import React from 'react';

import { List, ChannelItemContainer, LeftSide, Avatar, Column, Username, Info, RightSide, WhiteCircle } from './styles';

const ChannelList: React.FC = () => {

  const ChannelItem = () => (
    <ChannelItemContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>DovahNazes_rerun</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelItemContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
