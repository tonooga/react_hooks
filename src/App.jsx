import "./App.css";
// import { StateExample } from "./hooks/use-state/index"
// import { EffectExample } from "./hooks/use-effect/index"
import { ContextExample00, ContextExample01 } from "./hooks/use-context/index";
import { ReducerExample } from "./hooks/use-reducer/index";
import { RefExample } from "./hooks/use-ref/index";
import { ImperativeHandleExample } from "./hooks/use-imperative-handle/index";
import { EffectExample00, EffectExample01 }  from "./hooks/use-effect/index";
import { UseIdExample }  from "./hooks/use-id/index";
import { StateExample } from "./hooks/use-state";

function App() {
  return (
    <>
      {/* <ContextExample00 />
      <ContextExample01 /> */}
      <EffectExample00 />
      <EffectExample01 />
      {/* <UseIdExample /> */}
      {/* <ImperativeHandleExample /> */}
      {/* <ReducerExample /> */}
      {/* <RefExample /> */}
      {/* <StateExample /> */}
    </>
  )
}

export default App;