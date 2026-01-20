import { Header, Footer, Section, Container } from "@/components/layout";
import { useContent } from "@/i18n/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/battlecorp-hero.webp";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Home() {
  const content = useContent("home");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="top"
          className="relative min-h-screen flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <Container className="relative z-10 text-center">
            <h1 className="text-heading-1 text-white drop-shadow-lg">
              {content.hero.title}
            </h1>
            <p className="mt-4 text-body text-white/90 max-w-2xl mx-auto drop-shadow-md">
              {content.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href={content.hero.ctaPrimaryHref}>
                  {content.hero.ctaPrimaryLabel}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <a 
                  href={content.hero.ctaSecondaryHref} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {content.hero.ctaSecondaryLabel}
                </a>
              </Button>
            </div>
          </Container>
        </section>

        {/* Wargame Section */}
        <Section id="wargame">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-heading-2 text-foreground">
                  {content.wargame.title}
                </h2>
                <p className="mt-4 text-body text-muted-foreground">
                  {content.wargame.description}
                </p>
                <ul className="mt-6 list-disc list-inside space-y-2 text-body text-muted-foreground">
                  {content.wargame.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={content.wargame.mediaSrc}
                  alt={content.wargame.mediaAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Two Views Section */}
        <Section id="two-views">
          <Container>
            <h2 className="text-heading-2 text-foreground text-center">
              {content.twoViews.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {content.twoViews.cards.map((card, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img 
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-body-sm text-muted-foreground">
                      {card.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Loop Section - Timeline */}
        <Section id="loop">
          <Container>
            <h2 className="text-heading-2 text-foreground text-center">
              {content.loop.title}
            </h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ol className="relative border-l border-border">
                {content.loop.steps.map((step, i) => (
                  <li key={i} className="mb-8 ml-6 last:mb-0">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full -left-4 text-sm font-semibold">
                      {i + 1}
                    </span>
                    <h3 className="text-heading-4 text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        {/* Battlefield Section */}
        <Section id="battlefield">
          <Container>
            <h2 className="text-heading-2 text-foreground text-center">
              {content.battlefield.title}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {content.battlefield.items.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-heading-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Playstyle Section */}
        <Section id="playstyle">
          <Container>
            <h2 className="text-heading-2 text-foreground text-center">
              {content.playstyle.title}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {content.playstyle.items.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-heading-4">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-body-sm text-muted-foreground">
                      {item.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <Container narrow>
            <h2 className="text-heading-2 text-foreground text-center">
              {content.faq.title}
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {content.faq.items.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>

        {/* Progress Section */}
        <Section id="progress" className="bg-muted/50">
          <Container narrow className="text-center">
            <h2 className="text-heading-2 text-foreground">
              {content.progress.title}
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              {content.progress.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a 
                  href={content.progress.ctaDiscordHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.progress.ctaDiscordLabel}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href={content.progress.ctaSupportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.progress.ctaSupportLabel}
                </a>
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
