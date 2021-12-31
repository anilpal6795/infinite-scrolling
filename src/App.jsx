import OnScrollContainer from "./OnScrollContainer";
import InterSectionObserverContainer from "./IntersectionObserverContainer";

const App = () => {
  return (
    <div className="infinite-scrolling">
      <OnScrollContainer />
      <InterSectionObserverContainer />
    </div>
  );
};

export default App;
