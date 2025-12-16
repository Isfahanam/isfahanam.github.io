
import React from "react";
import { BuildingOffice2Icon, FireIcon, CloudIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

// داده نمونه
const city = {
  name: "کاشان",
  desc: "شهر تاریخی با معماری منحصر به فرد و آیین‌های سنتی",
  foods: ["گوشت و لوبیا", "شیرینی حاجی بادام", "خورش لوبیا"],
  culture: "آیین گلاب‌گیری، مراسم قالیشویی مشهد اردهال",
  climate: "آب و هوای گرم و خشک",
};

const CityDetailPage: React.FC = () => (
  <Screen>
    <TopNav title={city.name} showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-2">{city.name}</h1>
        <p className="mb-2">{city.desc}</p>
        <div className="mb-4">
          <FireIcon className="w-6 h-6 text-red-500 inline ml-1" />
          <span className="font-semibold">غذاهای سنتی:</span> {city.foods.join("، ")}
        </div>
        <div className="mb-4">
          <BuildingOffice2Icon className="w-6 h-6 text-blue-500 inline ml-1" />
          <span className="font-semibold">فرهنگ:</span> {city.culture}
        </div>
        <div>
          <CloudIcon className="w-6 h-6 text-gray-500 inline ml-1" />
          <span className="font-semibold">اقلیم:</span> {city.climate}
        </div>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default CityDetailPage;
