import '@shopify/polaris/build/esm/styles.css';
import { Frame } from '@shopify/polaris';

import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const [ mobilenavbtn, setmobilenavbtn] = useState(false);
  const logo = {
    width: 124,
    topBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
    contextualSaveBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
    url: '#',
    accessibilityLabel: 'Jaded Pixel',
  };
  return (
    <>
       <Frame
       topBar={<Topbar state={mobilenavbtn} toggle={setmobilenavbtn} />}
       logo={logo}
       navigation={<Sidebar />}
       showMobileNavigation={mobilenavbtn}
       onNavigationDismiss={()=>{setmobilenavbtn(!mobilenavbtn)}}
       >
      
      
    </Frame>
    </>

  );
}

export default App;
