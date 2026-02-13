import { useState } from "react";
import Exp1_3_1 from "./experiments/Exp1_3_1";
import Exp1_3_2 from "./experiments/Exp1_3_2";
import Exp1_3_3 from "./experiments/Exp1_3_3";

function App() {
  const [active, setActive] = useState("1");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Experiment 1.3</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setActive("1")} className={`px-4 py-2 bg-blue-500 text-white rounded`}>
          Experiment 1.3.1
        </button>
        <button onClick={() => setActive("2")} className={`px-4 py-2 bg-blue-500 text-white rounded`}>
          Experiment 1.3.2
        </button>
        <button onClick={() => setActive("3")} className={`px-4 py-2 bg-blue-500 text-white rounded`}>
          Experiment 1.3.3
        </button>
      </div>

      {active === "1" && <Exp1_3_1 />}
      {active === "2" && <Exp1_3_2 />}
      {active === "3" && <Exp1_3_3 />}
    </div>
  );
}

export default App;