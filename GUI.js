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
        let box1 = new Box(7, 5, 8, 1, 0, 0, 0);
        box1.position.x = 0
        box1.position.y = 0
        box1.position.z = 0
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
      },
      "showShelf" : () => {
        let shelf = new Shelf(10, 20, 20, 7, 5, 8, 1);
        shelf.position.x = 0
        shelf.position.y = 0
        shelf.position.z = 0
        this.webgl.scene.add(shelf)
      }, 
      "showWarehouse": () => {
        let shelf1 = new Shelf(10, 20, 20, 7, 5, 8, 1);
        shelf1.position.x = 0
        shelf1.position.y = 0
        shelf1.position.z = 0
        
        let shelf2 = new Shelf(10, 20, 20, 7, 5, 8, 1);
        shelf2.position.x = -20
        shelf2.position.y = 0
        shelf2.position.z = 0
        
        let shelf3 = new Shelf(10, 20, 20, 7, 5, 8, 1);
        shelf3.position.x = 20
        shelf3.position.y = 0
        shelf3.position.z = 0

        this.webgl.scene.add(shelf1);
        this.webgl.scene.add(shelf2);
        this.webgl.scene.add(shelf3);
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
    gui.add(guiVars, 'showShelf')
    gui.add(guiVars, 'showWarehouse')

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
