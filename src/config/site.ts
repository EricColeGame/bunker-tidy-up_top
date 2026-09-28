export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bunker Tidy Up Wiki",
  shortName: "Bunker Tidy Up",
  logoText: "BT",
  tagline: "Relaxing Bunker Organization Simulator",
  description: "A relaxing bunker organization simulation game where players sort thousands of survival supplies, arrange storage shelves, and restore order inside a post-apocalyptic shelter.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bunker-tidy-up.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bunker-tidy-up.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5212940/Bunker_Tidy_Up/",
  heroVideoId: "AiNCibcg9bs", // Bunker Tidy Up - Official Release Date Trailer (Tovarishch Games)
  social: {
    youtube: "https://www.youtube.com/watch?v=AiNCibcg9bs",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
