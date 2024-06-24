import { FitnessContext } from "./Context";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}