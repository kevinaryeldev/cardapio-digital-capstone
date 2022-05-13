import RequestCard from "./components/RequestCard";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const productExample = {
    table: "1",
    order: "#345",
    horary: "12.5", //Em horas
    requests: [
      {
        name: "Hambúrguer",
        quantity: 1,
        imageUrl:
          "https://th.bing.com/th/id/R.d1a7153f003edfbf950ccddde37e726f?rik=as25KvDOwqFjig&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f16%2fBacon-Cheese-Burger-PNG-File.png&ehk=a8MfiNRfl1CgWEUCsTWQ0FznuGS%2f9ljO6U1%2fiB333EA%3d&risl=&pid=ImgRaw&r=0",
        price: 7.5,
      },
      {
        name: "Subway",
        quantity: 2,
        imageUrl:
          "https://th.bing.com/th/id/R.80f7f3a2e3a3d6c81beb60651d7621a5?rik=6og2H3IAXed%2buw&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f1%2fSubway-Sandwich-Transparent-Background.png&ehk=KE5b5afLq0FlMAWT8oFP%2b4rdO0McaN30wiZLTTsLaPI%3d&risl=&pid=ImgRaw&r=0",
        price: 10.5,
      },
      {
        name: "X-Burguer",
        quantity: 3,
        imageUrl:
          "https://th.bing.com/th/id/R.36dfd5e694d9be6c91cb26c1180abb92?rik=W%2fMxykKN56PXKg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fburger-transparent%2fburger-transparent-18.png&ehk=2EBpShR8%2b%2bonnKiAGJk8rP1OuUp0fB2QDGTZI38XhKI%3d&risl=&pid=ImgRaw&r=0",
        price: 13.0,
      },
    ],
    status: "opened",
  };
  return (
    <div className="App">
      <GlobalStyle />
      {/*  <Routes /> */}
      <RequestCard product={productExample} />
    </div>
  );
}

export default App;
