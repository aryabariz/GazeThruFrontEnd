import React from 'react';

function getTranslateValues () {
    const style = window.getComputedStyle(this.divRef.current)
    const matrix = style.transform || style.webkitTransform || style.mozTransform
    
    if (matrix === 'none') {
        return <div>
            x: 0,
          y: 0,
          z: 0
        </div>
          
        
      }
      const matrixType = matrix.includes('3d') ? '3d' : '2d'
      const matrixValues = matrix.match(/matrix.*\((.+)\)/).split(', ')[1]
    
      if (matrixType === '2d') {
        return <div>
          x: matrixValues[4],
          y: matrixValues[5],
          z: 0
          </div>
      }
      
      if (matrixType === '3d') {
        return <div>
          x: matrixValues[12],
          y: matrixValues[13],
          z: matrixValues[14]
          </div>
      }
    }

export default getTranslateValues;