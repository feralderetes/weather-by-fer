import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container p-4">
        <Weather defaultCity="Amsterdam" />
        <footer className="mt-4 pt-3">
          Coded by{" "}
          <a
            href="https://github.com/feralderetes/"
            target="_blank"
            rel="noreferrer"
            title="Github profile"
          >
            Fer Alderetes
          </a>{" "}
          👩🏻‍💻, open-sourced on{" "}
          <a
            href="https://github.com/feralderetes/weather-by-fer/"
            target="_blank"
            rel="noreferrer"
            title="Github repository"
          >
            Github
          </a>{" "}
          and hosted on
          <a
            href="https://weather-by-fer.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Netlify hosted website"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
