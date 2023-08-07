import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/Header";
import Stackscreen from './src/navigations/Stackscreen';

export default function App (){
  return(
    <NavigationContainer>
      <Header/>
      <Stackscreen/>
    </NavigationContainer>
  )
}