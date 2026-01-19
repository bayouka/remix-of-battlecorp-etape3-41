import { useState } from "react";
import { Menu, ExternalLink } from "lucide-react";
import { useContent } from "@/i18n/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LanguageSwitch } from "./LanguageSwitch";
import battlecorpLogo from "@/assets/battlecorp-logo.png";

export function Header() {
  const content = useContent("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comingSoonModal, setComingSoonModal] = useState<"login" | "register" | null>(null);

  const battlecorpUrl = content.nav.battlecorpHref;

  const navLinks = [
    { label: content.nav.whitepaper, href: content.nav.whitepaperHref },
    { label: content.nav.wiki, href: content.nav.wikiHref },
    { label: content.nav.support, href: content.nav.supportHref },
  ].filter((l) => Boolean(l.href));

  const handleAuthClick = (type: "login" | "register") => {
    setComingSoonModal(type);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-sticky border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-page">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href={battlecorpUrl}
              className="flex items-center gap-3 focus-ring rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={battlecorpLogo} alt="Battlecorp Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">BATTLECORP</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav inline-flex items-center gap-1 focus-ring rounded-md px-1"
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 md:flex">
              <LanguageSwitch />
              <Button variant="ghost" size="sm" onClick={() => handleAuthClick("login")}>
                {content.nav.login}
              </Button>
              <Button size="sm" onClick={() => handleAuthClick("register")}>
                {content.nav.register}
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitch />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                  <SheetTitle className="sr-only">Menu</SheetTitle>

                  <nav className="mt-8 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}

                    <hr className="my-4 border-border" />

                    <Button variant="ghost" className="justify-start" onClick={() => handleAuthClick("login")}>
                      {content.nav.login}
                    </Button>
                    <Button className="justify-start" onClick={() => handleAuthClick("register")}>
                      {content.nav.register}
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Coming Soon Modal */}
      <Dialog open={comingSoonModal !== null} onOpenChange={() => setComingSoonModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{content.modal.comingSoon}</DialogTitle>
            <DialogDescription>{content.modal.comingSoonMessage}</DialogDescription>
          </DialogHeader>

          <div className="flex justify-end">
            <Button onClick={() => setComingSoonModal(null)}>{content.modal.close}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
