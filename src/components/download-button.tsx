import React from 'react';

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" 
       style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: '-webkit-optimize-contrast', fillRule: 'evenodd', clipRule: 'evenodd'}} 
       viewBox="0 0 784.11 815.53">
    <path className="fill-[#fec195] dark:fill-white" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
  </svg>
);

const DownloadButton = ({ href }: { href: string }) => {
  return (
    <a href={href} download className="animated-button">
      <button className="relative py-3 px-6 bg-[#fec195] dark:bg-[#fec195] text-black dark:text-black font-medium rounded-lg border-[3px] border-[#fec195] transition-all hover:bg-transparent hover:text-[#fec195] dark:hover:text-[#fec195] hover:shadow-[0_0_25px_#fec1958c] dark:hover:bg-transparent w-40">
        Mon CV
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`star-${i + 1} absolute w-[25px] transition-all opacity-0 group-hover:opacity-100`}>
            <Star />
          </div>
        ))}
      </button>
    </a>
  );
};

export default DownloadButton;