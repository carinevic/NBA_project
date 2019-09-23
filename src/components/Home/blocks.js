import React from 'react';
import Fade from 'react-reveal/Fade';


const generateBlocks =(blocks) => (
    blocks ?
    blocks.map(item => (
        <Fade>
            <div className={`item ${item.type}`}>
              <div className="veil"></div>
              <div className="image"
              style={{
                  background: `url(/images/blocks/${item.image})no-repeat`
              }}
              >
                  
              </div>

              

            </div>

        </Fade>
    ))
    :null

)

const Blocks = (props) => {
    return (
        <div className="home_block">
            {generateBlocks(props.blocks)}
         
        </div>
    );
}

export default Blocks;
