import { useParams } from "react-router-dom";
import { Header, Footer, Section, Container } from "@/components/layout";
import { useContent } from "@/i18n/LocaleProvider";

type LegalPageType = "terms" | "cookies" | "privacy";

interface LegalProps {
  page: LegalPageType;
}

export function Legal({ page }: LegalProps) {
  const content = useContent("legal");
  const pageContent = content[page];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <Section>
          <Container narrow>
            <h1 className="text-heading-2 text-foreground mb-8">
              {pageContent.title}
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-body text-muted-foreground">
                {pageContent.content}
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default Legal;
