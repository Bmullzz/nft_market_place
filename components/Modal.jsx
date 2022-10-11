import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const Modal = () => {
  const modalRef = useRef(null);
  const { theme } = useTheme();

  return (
    <div className="flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn">
      <div ref={modalRef} className="w-2/5 md:w-11/12 minlg:w-2/4 dark:bg-nft-dark bg-white flex flex-col rounded-lg ">
        <div className="flex justify-end mt-4 mr-4 minlg:mt-6 minlg:mr-6">
          <div className="relative w-3 h-3 minlg:w-6 minlg:h-6 cursor-pointer">
            <Image src={images.cross} layout="fill" className={theme === 'light' && 'filter invert'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
