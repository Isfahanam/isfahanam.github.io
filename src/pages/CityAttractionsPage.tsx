
import React from "react";
import { MapPinIcon, CameraIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

const attractions = [
  { name: "باغ فین", type: "تاریخی" },
  { name: "تپه سیلک", type: "تاریخی" },
  { name: "مسجد آقا بزرگ", type: "مذهبی" },
  { name: "کویر مرنجاب", type: "طبیعی" },
];

const CityAttractionsPage: React.FC = () => (
  <Screen>
    <TopNav title="مناطق گردشگری کاشان" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <ul className="space-y-4">
          {attractions.map((item) => (
            <li key={item.name} className="flex items-center bg-white rounded shadow p-3">
              <MapPinIcon className="w-7 h-7 text-purple-600 ml-2" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">نوع: {item.type}</div>
                <div className="flex items-center mt-1">
                  <CameraIcon className="w-5 h-5 text-gray-400 ml-1" />
                  <span className="text-xs text-gray-400">عکس (در اینجا قرار می‌گیرد)</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default CityAttractionsPage;
