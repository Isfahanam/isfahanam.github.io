
import React from "react";
import { LightBulbIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

// داده نمونه پیشنهاد هوشمند
const suggestions = [
  { name: "کویر مرنجاب", city: "آران و بیدگل", season: "پاییز", type: "طبیعی" },
  { name: "باغ فین کاشان", city: "کاشان", season: "بهار", type: "تاریخی" },
];

const SmartSuggestPage: React.FC = () => (
  <Screen>
    <TopNav title="پیشنهاد هوشمند محلی" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <LightBulbIcon className="w-7 h-7 text-yellow-400 ml-2" /> پیشنهاد هوشمند محلی
        </h1>
        <ul className="space-y-4">
          {suggestions.map((item) => (
            <li key={item.name} className="flex items-center bg-white rounded shadow p-3">
              <MapPinIcon className="w-6 h-6 text-green-500 ml-2" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.city} - {item.type} - فصل مناسب: {item.season}</div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default SmartSuggestPage;
