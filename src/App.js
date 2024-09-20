import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container p-4">
        <header className="pb-3">
          <form>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Search city 🔎"
                  className="form-control search-bar"
                  autoFocus="on"
                ></input>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn search-btn"
                ></input>
              </div>
            </div>
          </form>
        </header>{" "}
        <main>
          <Weather defaultCity="Amsterdam" />
        </main>
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
