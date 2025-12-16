
import React from "react";
import { MapPinIcon, CalendarIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

// داده نمونه برای یک منطقه گردشگری
const attraction = {
  name: "باغ فین کاشان",
  city: "کاشان",
  type: "تاریخی",
  description: "یکی از باغ‌های ایرانی ثبت جهانی یونسکو با معماری و فضای سبز منحصر به فرد.",
  images: [], // عکس‌ها بعداً اضافه می‌شود
  lat: 34.005,
  lng: 51.409,
  bestTime: "بهار و پاییز",
  access: "دسترسی از بلوار امیرکبیر کاشان.",
  facilities: ["پارکینگ", "سرویس بهداشتی", "کافه"],
  culture: "رعایت احترام به محیط تاریخی و پوشش مناسب.",
  localLevel: "عمومی"
};

const AttractionDetailPage: React.FC = () => (
  <Screen>
    <TopNav title={attraction.name} showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-2">{attraction.name}</h1>
        <div className="mb-2 text-gray-600">{attraction.city} - نوع: {attraction.type}</div>
        <div className="mb-4 flex items-center">
          <PhotoIcon className="w-8 h-8 text-gray-400 ml-2" />
          <span className="text-sm text-gray-400">عکس (در اینجا قرار می‌گیرد)</span>
        </div>
        <p className="mb-2">{attraction.description}</p>
        <div className="mb-2 flex items-center">
          <CalendarIcon className="w-5 h-5 text-blue-500 ml-1" />
          <span className="text-sm">بهترین زمان بازدید: {attraction.bestTime}</span>
        </div>
        <div className="mb-2 flex items-center">
          <MapPinIcon className="w-5 h-5 text-green-500 ml-1" />
          <span className="text-sm">موقعیت: lat {attraction.lat}, lng {attraction.lng}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">امکانات:</span> {attraction.facilities.join("، ")}
        </div>
        <div className="mb-2">
          <span className="font-semibold">دسترسی:</span> {attraction.access}
        </div>
        <div className="mb-2">
          <span className="font-semibold">نکات فرهنگی:</span> {attraction.culture}
        </div>
        <div className="mb-2">
          <span className="font-semibold">سطح بومی بودن:</span> {attraction.localLevel}
        </div>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default AttractionDetailPage;
