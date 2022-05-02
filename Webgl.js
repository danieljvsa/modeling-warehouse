'use strict';

class Webgl {

  constructor() {
        
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();        
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColorHex(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // position and point the camera to the center of the scene
    this.camera.position.x = 150;
    this.camera.position.y = 50;
    this.camera.position.z = 100;
    this.camera.lookAt(this.scene.position);
        
    this.trackballControls = new THREE.TrackballControls(this.camera);
    this.trackballControls.rotateSpeed = 1.0;
    this.trackballControls.zoomSpeed = 1.0;
    this.trackballControls.panSpeed = 1.0;
//    trackballControls.noZoom=false;
//    trackballControls.noPan=false;
    this.trackballControls.staticMoving = true;
//    trackballControls.dynamicDampingFactor=0.3;

    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new GUI(this);
  }
  
  render () {
    let delta = this.clock.getDelta();
    this.trackballControls.update(delta);
    
    //render the scene
    this.renderer.render(this.scene, this.camera);
  }

}
