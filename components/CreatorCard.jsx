import React from 'react';
import Image from 'next/image';

import images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => (
  <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4">
    <div>
      <p>{rank}</p>
    </div>
  </div>
);

export default CreatorCard;
