"use client";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import SettingMenue from "./setting-menu";

export default function ProfileSettings() {
  const [showDropDown, setShowDropDown] = useState(false);
  function showMenu() {
    setShowDropDown(!showDropDown);
  }
  return (
    <div className="profile-settings p-1.25 relative" onClick={showMenu}>
      <EllipsisVertical size={18} className="cursor-pointer" />
      {showDropDown && (
        <div className="absolute -top-13 left-10 z-10">
          <SettingMenue />
        </div>
      )}
    </div>
  );
}
