
import React from "react";
import { HomeModernIcon, CakeIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

const ecotourism = [
  { name: "خانه بوم‌گردی صفا", city: "نطنز", desc: "تجربه زندگی روستایی و غذاهای محلی" },
  { name: "خانه بوم‌گردی گلستان", city: "کاشان", desc: "آیین‌های سنتی و اقامت بومی" },
];

const localRituals = [
  "آیین گلاب‌گیری کاشان",
  "مراسم قالیشویی مشهد اردهال",
  "جشنواره غذاهای سنتی"
];

const EcotourismPage: React.FC = () => (
  <Screen>
    <TopNav title="خانه‌های بوم‌گردی و آیین‌های محلی" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <HomeModernIcon className="w-7 h-7 text-amber-700 ml-2" /> خانه‌های بوم‌گردی و آیین‌های محلی
        </h1>
        <h2 className="font-semibold mt-4 mb-2">خانه‌های بوم‌گردی</h2>
        <ul className="space-y-3">
          {ecotourism.map((item) => (
            <li key={item.name} className="bg-white rounded shadow p-3">
              <div className="font-semibold">{item.name} ({item.city})</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </li>
          ))}
        </ul>
        <h2 className="font-semibold mt-6 mb-2">آیین‌ها و جشنواره‌های محلی</h2>
        <ul className="list-disc pr-5 space-y-1">
          {localRituals.map((ritual, idx) => (
            <li key={idx} className="flex items-center">
              <CakeIcon className="w-5 h-5 text-pink-400 ml-1" />
              <span>{ritual}</span>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default EcotourismPage;
