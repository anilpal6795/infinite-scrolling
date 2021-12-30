import OnScrollContainer from "./OnScrollContainer";
import InterSectionObserverContainer from "./IntersectionObserverContainer";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 w-full h-screen">
      <OnScrollContainer />
      <InterSectionObserverContainer />
    </div>
  );
};

export default App;
