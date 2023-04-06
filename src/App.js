import "./App.css";
import EmailContextProvider from "./EmailContextProvider";
import IconContextProvider from "./IconContextProvider";
import PasswordContextProvider from "./PasswordContextProvider";
import ProfileContextProvider from "./ProfileContextProvider";
import SampleTab from "./SampleTab";

function App() {
  return (
    <div className="App">
      <ProfileContextProvider>
        <EmailContextProvider>
          <PasswordContextProvider>
            <IconContextProvider>
              <SampleTab />
            </IconContextProvider>
          </PasswordContextProvider>
        </EmailContextProvider>
      </ProfileContextProvider>
    </div>
  );
}

export default App;
