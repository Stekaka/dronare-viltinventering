# Hur man lägger till slides

För att lägga till en ny slide, redigera `app/page.tsx`:

```tsx
import PresentationLayout from "./components/presentation/PresentationLayout";
import HeroSection from "./components/presentation/sections/HeroSection";
import Slide from "./components/presentation/Slide";

export default function Home() {
  return (
    <main className="relative">
      <PresentationLayout>
        <HeroSection />
        
        {/* Lägg till fler slides här */}
        <Slide className="bg-blue-600 text-white">
          <h2 className="text-6xl font-bold mb-4">Slide 2</h2>
          <p className="text-2xl">Din text här</p>
        </Slide>

        <Slide className="bg-green-600 text-white">
          <h2 className="text-6xl font-bold mb-4">Slide 3</h2>
          <p className="text-2xl">Mer innehåll</p>
        </Slide>
      </PresentationLayout>
    </main>
  );
}
```

## Tips:
- Varje `<Slide>` är en hel skärm
- Använd `className` för att ändra bakgrundsfärg
- Navigera med piltangenter (← →)
- Scrolla för att gå mellan slides

