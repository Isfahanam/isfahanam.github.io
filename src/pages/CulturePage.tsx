
import React from "react";
import { BookOpenIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Screen from "../components/Screen";
import TopNav from "../components/TopNav";
import Container from "../components/Container";
import BottomNav from "../components/BottomNav";

const cultureTips = [
  "احترام به فرهنگ اسلامی–ایرانی و آداب محلی",
  "حفظ محیط زیست و پاکیزگی مناطق گردشگری",
  "رعایت پوشش مناسب در اماکن مذهبی و تاریخی",
  "حمایت از اقتصاد محلی و خرید صنایع دستی"
];

const CulturePage: React.FC = () => (
  <Screen>
    <TopNav title="نکات فرهنگی و ارزشی" showBack={true} />
    <main className="flex-1 p-6 w-full">
      <Container>
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <BookOpenIcon className="w-7 h-7 text-indigo-500 ml-2" /> نکات فرهنگی و ارزشی
        </h1>
        <ul className="list-disc pr-5 space-y-2">
          {cultureTips.map((tip, idx) => (
            <li key={idx} className="flex items-center">
              <SparklesIcon className="w-5 h-5 text-green-400 ml-1" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <BottomNav />
  </Screen>
);

export default CulturePage;
