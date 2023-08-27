"use client";
import { NGnaira } from "@/lib/help";
import { adData, uploadData } from "@/lib/types";
import Link from "next/link";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useEffect } from "react";
import Image from 'next/image';

export default function AllAds({ ads }: any) {
  const handleError = () => {
    if (ads.length === 0) {
      throw new Error();
    }
  };
  useEffect(() => {
    handleError();
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {ads?.map((ad: any) => (
        <div className="bg-white m-2" key={ad.id}>
          <Image
            src={ad.imagesUrl[0]}
            alt="Ads Image"
            className="w-full h-[150px] lg:h-[120px]"
            width={110}
            height={120}
          />

          <p className="m-2">
            <Link href={`/adverts/${ad.id}`} className="hover:underline">
                 {ad.title.length > 15 ? `${ad.title.slice(0, 15)}...` : ad.title}
            </Link>
            <br />
            <span className="text-sm text-green-600 m-1">
              {NGnaira.format(ad.price)}
            </span>
          </p>

          <div className="ml-3 text-gray-500">
            <MyLocationIcon /> - {ad.location}
          </div>
        </div>
      ))}
    </div>
  );
}
