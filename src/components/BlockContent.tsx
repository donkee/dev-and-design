import SanityBlockContent from '@sanity/block-content-to-react';
import React from 'react';

const BlockContent = (props: {
  blocks: any;
  serializers?: any;
  imageOptions?: any;
}) => {
  return (
    <SanityBlockContent
      blocks={props.blocks}
      imageOptions={props.imageOptions}
      serializers={props.serializers}
      projectId={process.env.GATSBY_SANITY_PROJECTID}
      dataset={process.env.GATSBY_SANITY_DATASET}></SanityBlockContent>
  );
};

export default BlockContent;
