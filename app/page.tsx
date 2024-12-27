import Intro from '@/components/intro/Intro';
import TextComponent from "@/components/Text/Text";
import ScrollIndicator from "@/components/scroll-indicator/scroll-indicator";
import Question from "@/components/question/question";

export default function Home() {
  return (
    <div className="max-container home">
      <Intro />
      <TextComponent  />
      <ScrollIndicator />
      <Question />
    </div>

  );
}
