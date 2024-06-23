import { StatusBar } from "expo-status-bar";
import { FitnessContext } from "./Context";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}