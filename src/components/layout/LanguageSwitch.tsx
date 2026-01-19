import { useNavigate } from "react-router-dom";
import { useLocale, useContent } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitch() {
  const { locale, swapLocalePrefix } = useLocale();
  const content = useContent("common");
  const navigate = useNavigate();

  const handleSwitch = (targetLocale: "fr" | "en") => {
    if (targetLocale === locale) return;
    const newPath = swapLocalePrefix(targetLocale);
    navigate(newPath);
  };

  return (
    <div
      role="group"
      aria-label={content.language.switch}
      className="flex items-center rounded-md border border-border bg-muted/50 p-0.5"
    >
      <button
        type="button"
        onClick={() => handleSwitch("fr")}
        aria-pressed={locale === "fr"}
        className={cn(
          "relative rounded px-2.5 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          locale === "fr"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {content.language.fr}
      </button>
      <button
        type="button"
        onClick={() => handleSwitch("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "relative rounded px-2.5 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          locale === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {content.language.en}
      </button>
    </div>
  );
}
