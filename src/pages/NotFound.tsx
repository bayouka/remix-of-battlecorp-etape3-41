import { Link, useParams } from "react-router-dom";
import { Header, Footer, Section, Container } from "@/components/layout";
import { useContent, useLocale } from "@/i18n/LocaleProvider";
import { Button } from "@/components/ui/button";

export function NotFound() {
  const content = useContent("common");
  const { getLocalizedPath } = useLocale();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Section>
          <Container>
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h1 className="text-heading-1 text-foreground mb-4">404</h1>
              <h2 className="text-heading-3 text-foreground mb-4">
                {content.notFound.title}
              </h2>
              <p className="text-body text-muted-foreground mb-8 max-w-md">
                {content.notFound.message}
              </p>
              <Button asChild>
                <Link to={getLocalizedPath()}>
                  {content.notFound.backHome}
                </Link>
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
