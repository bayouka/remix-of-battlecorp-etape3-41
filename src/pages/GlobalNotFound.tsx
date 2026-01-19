import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Global 404 page for routes outside /fr/* and /en/*
 * Uses hardcoded text since we don't have locale context here
 */
export function GlobalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="text-center">
        <h1 className="text-heading-1 text-foreground mb-4">404</h1>
        <h2 className="text-heading-3 text-foreground mb-4">
          Page Not Found / Page introuvable
        </h2>
        <p className="text-body text-muted-foreground mb-8 max-w-md">
          The page you are looking for does not exist.<br />
          La page que vous recherchez n'existe pas.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/fr">Accueil (FR)</Link>
          </Button>
          <Button asChild>
            <Link to="/en">Home (EN)</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GlobalNotFound;
