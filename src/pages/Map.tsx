import GoogleMapReact from 'google-map-react';

import ColumnSpread from '../components/ColumnSpread/ColumnSpread';
import { Footer, GlobalStyles, Header } from './CommonPartials';

export default function Map() {
  return (
    <>
      <GlobalStyles />
      <div id="___gatsby">
        <div style={{outline:'none'}} tabIndex={-1} id="gatsby-focus-wrapper">
          <ColumnSpread 
            slotTop={
              <>
                <Header></Header>
                <div style={{ flexGrow: 1 }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB5QtCfN9Ja1wfO8Uf58osXxwF6wJmB68A'}}
                    defaultCenter={{
                      lat: 41.0051041,
                      lng: -81.5780507
                    }}
                    defaultZoom={13}
                  />
                </div>
              </>
           }
            slotBottom={
              <Footer></Footer>
            }
          />
        </div>
        <div id="gatsby-announcer" style={{position:'absolute', top:0, width:'1px', height:'1px', padding:0, overflow:'hidden', clip:'rect(0, 0, 0, 0)', whiteSpace:'nowrap', border:0}} aria-live="assertive" aria-atomic="true"></div>
      </div>
    </>
  );
}
