export type StackIconSlug =
  | "astro"
  | "tailwindcss"
  | "nextdotjs"
  | "laravel"
  | "php"
  | "firebase"
  | "supabase"
  | "netlify"
  | "html5"
  | "css"
  | "hostinger";

export const STACK_ICON_MAP: Record<string, StackIconSlug[]> = {
  astroTailwind: ["astro", "tailwindcss"],
  nextjs: ["nextdotjs"],
  laravel: ["laravel"],
  laravelBlade: ["laravel", "php"],
  nextLaravelHostinger: ["nextdotjs", "laravel", "hostinger"],
  nextjsPhpHostinger: ["nextdotjs", "php", "hostinger"],
  nextjsFirebase: ["nextdotjs", "firebase"],
  astroSupabaseNetlify: ["astro", "supabase", "netlify"],
};
