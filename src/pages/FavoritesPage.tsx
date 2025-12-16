
import React from "react";
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

// داده نمونه علاقه‌مندی‌ها
const favorites = [
  { name: "باغ فین کاشان", city: "کاشان" },
  { name: "کویر مرنجاب", city: "آران و بیدگل" },
];

const FavoritesPage: React.FC = () => (
  <Screen>
    <TopNav title="علاقه‌مندی‌ها" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <HeartIcon className="w-7 h-7 text-pink-500 ml-2" /> علاقه‌مندی‌ها
        </h1>
        <ul className="space-y-4">
          {favorites.map((item) => (
            <li key={item.name} className="flex items-center bg-white rounded shadow p-3">
              <MapPinIcon className="w-6 h-6 text-blue-500 ml-2" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.city}</div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default FavoritesPage;
