"use client";
import React, { useState } from 'react';
import { adData } from "@/lib/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import Image from 'next/image';

export default function Ads(ad: adData) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };
  console.log(ad);


  // image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = ad.imagesUrl.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };
  return (
    <>
      <div className="lg:flex m-0 mb:m-10 lg:m-10 lg:space-x-5">
        <div className="lg:flex-1 border-t-8 border-green-600 bg-white pb-10">
        <div className="carousel">
      {ad.imagesUrl.map((imageUrl, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            currentSlide === index ? 'block' : 'hidden'
          }`}
        >
          <img src={imageUrl} className="w-full h-[300px] md:w-[700px] md:h-[400px] lg:w-[700px] lg:h-[400px]" alt={`sliderImage${index}`} />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white flex justify-between font-semibold tracking-widest">
               {ad.userName && ad.userName.slice(0, 15)}
                <span className="">
                   {index + 1} / {ad.imagesUrl.length}
                </span>
           </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="btn btn-circle" onClick={prevSlide}>
              ❮
            </button>
           
            <button className="btn btn-circle" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
          <div className="m-5">
            <p className="text-2xl text-gray-700 font-bold">{ad.title}</p>

            {ad.negotiable && (
              <span className="text-green-600">Negotiable</span>
            )}

            <p className="my-5  text-gray-400">
            <CheckCircleOutlineOutlinedIcon className=""/><span className=""> Posted on: {ad.formattedDate}</span> - <LocationOnIcon /> {ad.location}
            </p>

            <a href={ad.youtube} className="mt-5">
              <YouTubeIcon /> Open on Youtube
            </a>

            <div className="divider"></div>

            <p className="my-5">{ad.description}</p>
            <div className="divider"></div>

           {/* <div className="flex space-x-5">
              {ad.imagesUrl.map((image: string, index: number) => (
                <span key={index}>
                  <img
                    src={image}
                    className="w-[100px] h-[100px]"
                    alt="AdImage"
                  />
                </span>
              ))}
              </div> */}
          </div>
        </div>

        <div className="lg:w-[30%] hidden lg:inline">
  <div className="bg-gray-200">
    <div className="bg-white p-5 text-sm border-double border rounded-lg">
      <div className="font-bold text-lg text-black">GHS {ad.price}, {ad.negotiable && (
              <span className="text-green-600">Negotiable</span>
            )}</div>
            <div className="text-center my-4">
       <span className="text-green-600 text-[11px]">Market Price: GHS {ad.marketprice}</span>
            </div>
      <button className="items-center text-green-500 justify-center w-full p-2 bg-white border border-green-500 hover:bg-green-100 hover:border-green-600">
          Request call back
      </button>
    </div>
  </div>

  <div className="bg-gray-200 mt-4">
    <div className="bg-white p-5 text-sm border-double border rounded-lg">
        
<div className="flex items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={ad.userImage} alt="profile" width={30} height={30} />
    <div className="font-medium dark:text-black mb-2">
        <div className="text-black">{ad.userName && ad.userName.slice(0, 15)}</div>
        <div className="text-[8px] text-black bg-gray-100 rounded-lg"><MailOutlineOutlinedIcon className="text-[12px] text-yellow-600"/> Typically replies within a few hours</div>
        <CheckCircleOutlineOutlinedIcon className="text-[10px]"/><span className="text-[10px]"> Posted on: {ad.formattedDate}</span>
    </div>
</div>
      <button className="items-center bg-green-500 justify-center w-full p-2 text-white border border-green-500 hover:bg-green-100 hover:text-green-500 hover:border-green-600 mb-4"
        onClick={handleClick}
      >
          {buttonClicked ? ad.contactNumber : 'Show Contact'}
      </button>
      <button className="items-center text-green-500 justify-center w-full p-2 bg-white border border-green-500 hover:bg-green-100 hover:border-green-600">
          Start Chat
      </button>
    </div>
  </div>


  <div className="bg-gray-200 mt-4">
    <div className="bg-white p-5 text-sm border rounded-lg">
      <div className="font-bold text-center text-black">Safety tips</div>
      <ul className="list-disc ml-6 text-black font-normal text-[10px]">
        <li>Dont pay in advance, including for delivery</li>
        <li>Meet the seller at a safe public place</li>
        <li>Inspect the item and ensure its exactly what you want</li>
        <li>On delivery, check that the item delivered is what was inspected</li>
        <li>Only pay when you are satisfied</li>
      </ul>
    </div>
  </div>

  <div className="bg-gray-200 mt-4">
    <div className="bg-white p-5 text-sm border rounded-lg">
    <div className="flex justify-between mt-3">
      <button className="text-blue-500 hover:bg-blue-600 hover:text-white bg-white px-4 py-2 rounded text-[10px] border border-blue-500">
        Mark Unavailable
      </button>
      <button className="text-red-500 hover:bg-red-500 hover:text-white bg-white px-4 py-2 rounded text-[10px] border border-red-500">
           <OutlinedFlagOutlinedIcon className="text-[12px] text-red-600"/>  Report Abuse
      </button>
    </div>
    </div>
  </div>

  <div className="bg-gray-200 mt-4">
    <div className="bg-white p-5 text-sm border rounded-lg">
      <button className="items-center text-green-500 justify-center font-semibold w-full p-2 bg-white border border-green-500 hover:bg-green-100 hover:border-green-600">
          Post Ad Like This
      </button>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
