import { useState } from "react";
import Card from "./components/Card";
import "./style.scss";

const destinations = [
  {
    Name: "le Mexique",
    Src: "https://www.acs-ami.com/fr/blog/wp-content/uploads/2021/10/visiter-le-mexique-1.jpg",
    Label: "Amérique Latine",
    Text: "Découvrez le Mexique, un pays riche en histoire, culture et paysages variés. De ses plages tropicales aux sites archéologiques, chaque coin du Mexique offre une expérience unique. Profitez de la cuisine  savoureuse, des villes coloniales pittoresques et des festivités colorées.",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card destinations={destinations[0]} />
    </>
  );
}

export default App;
