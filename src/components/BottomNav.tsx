import React from "react";
import {
  HomeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add("has-bottom-nav");
    return () => {
      root.classList.remove("has-bottom-nav");
    };
  }, []);

  return (
    <nav
      className="bg-white shadow-inner px-4 flex justify-around items-center fixed bottom-0 left-0 right-0 rtl h-16 z-50"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >

      <div className="flex flex-col items-center text-secondary cursor-pointer">
        <HomeIcon className="h-6 w-6" />
        <span className="text-sm">خانه</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer">
        <BookOpenIcon className="h-6 w-6" />
        <span className="text-sm">درس‌ها</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer">
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
        <span className="text-sm">پیام‌ها</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 cursor-pointer">
        <UserIcon className="h-6 w-6" />
        <span className="text-sm">پروفایل</span>
      </div>

    </nav>
  );
}
