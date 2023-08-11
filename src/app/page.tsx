import Hero from "./components/Hero";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Ending from "./components/Ending";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card1 />
      <Card2 />
      <Card3 />
      <Ending />
    </div>
  );
}
