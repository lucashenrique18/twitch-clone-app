import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { List, StreamItemContainer, StreamThumbnail, StreamCollumn, StreamRow, StreamHeader, StreamAvatar, StreamUsername, StreamDescription, StreamCategory, TagRow, TagView, TagText } from './styles'

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamItemContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamCollumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>DovahNazes</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>

      </StreamCollumn>
    </StreamItemContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
