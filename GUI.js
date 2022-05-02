'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;
        
    var guiVars = {
      "ex1" : 0.1,
      "cleanScene" : () => {  
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);  
        },
      "drawTables" : () => {  
        this.webgl.scene.add( new THREE.AxisHelper(50));
       
        var table1 = new MyTable(4,4,15,20,30,5);
        this.webgl.scene.add(table1);

        var table2 = new MyTable(4,4,15,20,30,5);
        table2.translateX(40);
        this.webgl.scene.add(table2);
      }
    };
       
    var gui = new dat.GUI({ autoPlace: false });
    var ex1 =       gui.add(guiVars, 'ex1', 0.0, 1.0);
    var cleanScene = gui.add(guiVars, 'cleanScene');
    var drawTables = gui.add(guiVars, 'drawTables');

    ex1.onChange(value => {
      this.webgl.trackballControls.enabled = false;
    });
    ex1.onFinishChange(value => {
      this.webgl.trackballControls.enabled = true;
    });

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
  }
  
}
