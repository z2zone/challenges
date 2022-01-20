import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${githubUsername}/repos`,
    }).then((res) => {
      setRepos(res.data);
      setLoading(false);
    });
  };

  const renderRepo = (repo) => {
    return (
      <div key={repo.id}>
        <h2>{repo.name}</h2>
      </div>
    );
  };
  return (
    <div className="page">
      <div className="left-side">
        <form className="form">
          <input
            className="input"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            placeholder="type your github username"
            type="text"
          />
          <button className="button" onClick={handleSubmit}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        <div className="repo-details-container">{repos.map(renderRepo)}</div>
      </div>
    </div>
  );
}

export default App;
