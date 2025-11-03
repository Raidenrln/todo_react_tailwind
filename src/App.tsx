import AddingTaskBtn from "./components/AddingTaskBtn"
import AllTaskSection from "./components/AllTaskSection"
import CompletedTask from "./components/CompletedTask"
import TaskCategory from "./components/TaskCategory"
import TopSection from "./components/TopSection"
const App = () => {
  return (
    <div className="flex flex-col gap-2 p-2.5">
      <TopSection/>
      <AllTaskSection/>
      <TaskCategory/>
      <CompletedTask/>
      <AddingTaskBtn/>
    </div>

  )
}

export default App
