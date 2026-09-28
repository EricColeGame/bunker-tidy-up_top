import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Gamepad2,
  Lightbulb,
  Star,
  Trophy,
  Wrench,
} from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 分类 slug 与 content/<locale>/ 下的子目录名一一对应，
// 同时作为 nav 翻译键、GROUP_TITLES/GROUP_ORDER 的 slug。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "items", path: "/items", icon: Boxes, isContentType: true },
  { key: "progression", path: "/progression", icon: Trophy, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
