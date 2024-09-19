import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Search city 🔎"
                className="form-control"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <Weather />
        <footer>
          Coded by Fer Alderetes 👩🏻‍💻, open-sourced on Github and hosted on
          Netlify
        </footer>
      </div>
    </div>
  );
}
