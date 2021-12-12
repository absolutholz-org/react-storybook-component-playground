import { useState } from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import { Link } from 'react-router-dom';

import { Billboard } from '../components/Billboard';
import { Collapsible } from '../components/Collapsible';
import { ColumnSpread } from '../components/ColumnSpread';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Footer, GlobalStyles, Header, LOREM_IPSUM } from './CommonPartials';

export default function App() {
  const [ isCollapsed, setIsCollapsed ] = useState<boolean>(true);
  
  const dropdownOptions = [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>,
      <div>5</div>,
      <div>6</div>,
      <div>7</div>,
      <div>8</div>,
      <div>9</div>,
      <div>10</div>,
      <div>11</div>,
      <div>12</div>,
      <div>13</div>,
      <div>14</div>,
      <div>15</div>,
      <div>16</div>,
      <div>17</div>,
      <div>18</div>,
      <div>19</div>,
      <div>20</div>,
  ];

  return (
    <>
      <GlobalStyles />
      <div id="___gatsby">
        <div style={{outline:'none'}} tabIndex={-1} id="gatsby-focus-wrapper">
          <ColumnSpread 
            slotTop={
              <>
                <Header><Link to='/map'>Map</Link></Header>
                <Billboard minHeight='75vh'>
                  <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', height: '100%', flexDirection: 'column' }}>
                    <Container style={{ marginTop: '1rem' }}>
                      <Row>
                        <Col xl="10" offset={{ xl: 1 }}>{ LOREM_IPSUM }</Col>  
                      </Row>
                    </Container>
                    <Container>
                      <Dropdown id='test' placeholderText='click me' options={dropdownOptions} />
                      { LOREM_IPSUM }
                    </Container>
                  </div>
                </Billboard>
                <Container>
                  <button onClick={() => setIsCollapsed((currentState) => !currentState)}>Toggle extra content</button>
                  <Collapsible isExpanded={isCollapsed}>
                    <p>
                      { LOREM_IPSUM }
                    </p>
                    <p>
                      { LOREM_IPSUM }
                    </p>
                    <p>
                      { LOREM_IPSUM }
                    </p>
                  </Collapsible>
                </Container>
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
