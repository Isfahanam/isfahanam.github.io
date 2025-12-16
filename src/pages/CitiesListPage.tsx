
import React from "react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

const cities = [
  { name: "کاشان", desc: "شهر تاریخی و فرهنگی" },
  { name: "اصفهان", desc: "مرکز استان و قطب گردشگری" },
  { name: "نطنز", desc: "طبیعت و آثار تاریخی" },
  { name: "اردستان", desc: "آب‌انبارها و معماری خاص" },
  { name: "خمینی‌شهر", desc: "فرهنگ بومی و غذاهای سنتی" },
];

const CitiesListPage: React.FC = () => (
  <Screen>
    <TopNav title="شهرهای استان اصفهان" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <ul className="space-y-4">
          {cities.map((city) => (
            <li key={city.name} className="flex items-center bg-white rounded shadow p-3">
              <BuildingOffice2Icon className="w-7 h-7 text-green-600 ml-2" />
              <div>
                <div className="font-semibold">{city.name}</div>
                <div className="text-sm text-gray-500">{city.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default CitiesListPage;
