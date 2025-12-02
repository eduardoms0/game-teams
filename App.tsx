import { Groups } from '@screens/groups';
import { ThemeProvider} from "styled-components/native";
import theme from './src/theme';

export default function App() {
  return (
    <themeProvier theme= {theme}>
    <Groups/>
    </themeProvier>
  );
}


