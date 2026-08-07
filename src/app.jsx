import './App.css';

function App() {

  return (
    <div className="container">

      <h1>Jenkins CI/CD React Project</h1>

      <p>
        This is a simple React application deployed using Jenkins Pipeline.
      </p>

      <div className="card">

        <h2>DevOps Pipeline</h2>

        <ul>
          <li>✔ Source Code Management (GitHub)</li>
          <li>✔ Build using Jenkins</li>
          <li>✔ Test Automation</li>
          <li>✔ Deployment</li>
        </ul>

      </div>

      <button>
        Learn Jenkins
      </button>

    </div>
  );
}

export default App;