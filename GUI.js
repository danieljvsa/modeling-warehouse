'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;
        
    var guiVars = {
     
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
        this.webgl.renderGlobal()

        let box1 = new Box(7, 5, 8, 1, 0, 0, 0);
        box1.position.x = 0
        box1.position.y = 0
        box1.position.z = 0
        this.webgl.scene.add(box1);
        let spotLight1 = new THREE.SpotLight(0xffffff);
        spotLight1.position.set(50, 50, 50);
        spotLight1.intensity = 0.5;
        spotLight1.castShadow = true;
        spotLight1.target = box1;
        
        this.webgl.scene.add(spotLight1)
        
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
        this.webgl.renderGlobal()
        let shelf = new Shelf(10, 20, 20, 7, 5, 8, 1);
        shelf.position.x = 0
        shelf.position.y = 0
        shelf.position.z = 0
        
        

        this.webgl.scene.add(shelf)
        
        

        
      }, 
      "showWarehouse": () => {
        this.webgl.renderGlobal()

        let warehouse = new Warehouse()
        this.webgl.scene.add(warehouse)
        
      },
      "showRobot": () => {
        this.webgl.renderGlobal();

        let warehouse = new Warehouse()
        this.webgl.scene.add(warehouse)
        
        let robot = new Robot();
        robot.position.x = 0
        robot.position.y = 5
        robot.position.z = 30

        this.webgl.scene.add(robot);
      },
      "animateRobot": () => {
        this.webgl.renderGlobal()

        

        let warehouse = new Warehouse()
        this.webgl.scene.add(warehouse)
        
        let robot = new Robot();
        robot.position.x = 0
        robot.position.y = 5
        robot.position.z = 30

        this.webgl.scene.add(robot);

        

        this.webgl.animateRobot(0 - 20, 0 + 20, robot)
      }

    };
       
    var gui = new dat.GUI({ autoPlace: false });
    
    var cleanScene = gui.add(guiVars, 'cleanScene');
    //var drawTables = gui.add(guiVars, 'drawTables');
    let showBox = gui.add(guiVars, 'showBox')
    let swithCamera = gui.add(guiVars, 'switchCamera')
    gui.add(guiVars, 'trackball')
    gui.add(guiVars, 'orbit')
    gui.add(guiVars, 'firstperson')
    gui.add(guiVars, 'fly')
    gui.add(guiVars, 'showShelf')
    gui.add(guiVars, 'showRobot')
    gui.add(guiVars, 'showWarehouse')
    gui.add(guiVars, 'animateRobot')

    

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
  }
  
}
