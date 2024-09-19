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
          <Weather />
        </main>
        <footer className="mt-4 pt-3">
          Coded by Fer Alderetes 👩🏻‍💻, open-sourced on Github and hosted on
          Netlify
        </footer>
      </div>
    </div>
  );
}
