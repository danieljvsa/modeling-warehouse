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
        "switchCamera" : () => {
          if (this.webgl.camera instanceof THREE.PerspectiveCamera) {
              this.webgl.camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / -16, -200, 500);
              this.webgl.camera.position.x = 150;
              this.webgl.camera.position.y = 50;
              this.webgl.camera.position.z = 100;
              this.webgl.camera.lookAt(this.webgl.scene.position);
              this.perspective = "Orthographic";
              this.webgl.orbitControls()
              console.log(this.perspective);
          } else {
              this.webgl.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
              this.webgl.camera.position.x = 150;
              this.webgl.camera.position.y = 50;
              this.webgl.camera.position.z = 100;
  
              this.webgl.camera.lookAt(this.webgl.scene.position);
              this.perspective = "Perspective";
              this.webgl.orbitControls()
              console.log(this.perspective)
          }
        },
      "showBox" : () => {  
        let box1 = new Box(10, 10, 10, 7, 5, 8, 1);
        this.webgl.scene.add(box1);
      },
      "trackball" : () => { 
        this.webgl.trackballControls();
      },
      "orbit" : () => { 
        this.webgl.orbitControls();
      },
      "firstperson" : () => { 
        this.webgl.firstpersonControls();
      },
      "fly" : () => { 
        this.webgl.flyControls();
      }
    };
       
    var gui = new dat.GUI({ autoPlace: false });
    var ex1 =       gui.add(guiVars, 'ex1', 0.0, 1.0);
    var cleanScene = gui.add(guiVars, 'cleanScene');
    //var drawTables = gui.add(guiVars, 'drawTables');
    let showBox = gui.add(guiVars, 'showBox')
    let swithCamera = gui.add(guiVars, 'switchCamera')
    gui.add(guiVars, 'trackball')
    gui.add(guiVars, 'orbit')
    gui.add(guiVars, 'firstperson')
    gui.add(guiVars, 'fly')

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
