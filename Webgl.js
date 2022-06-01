'use strict';

class Webgl {

  constructor() {
    
    
    this.clock = new THREE.Clock();

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();     

    this.persCamera()
    this.renderGlobal()
    
    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new GUI(this);
  }

  cleanCanvas () {
    for (var i = 0; i < this.scene.children.length; )
      this.scene.remove(this.scene.children[i]);  

      this.animationEnabled = false;
  }
  
  persCamera(){
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // position and point the camera to the center of the scene
    this.camera.position.x = 150;
    this.camera.position.y = 50;
    this.camera.position.z = 100;
    this.camera.lookAt(this.scene.position);
    this.orbitControls()
  }

  // Control types
  trackballControls () {
    this.controls = new THREE.TrackballControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.0;
    this.controls.panSpeed = 1.0;
    //this.controls.noZoom=false;
    //this.controls.noPan=false;
    this.controls.staticMoving = true;
    //this.controls.dynamicDampingFactor=0.3;
  }
  orbitControls () {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;
  }
  firstpersonControls () {
    this.controls = new THREE.FirstPersonControls(this.camera);
    this.controls.lookSpeed = 0.4;
    this.controls.movementSpeed = 20;
    this.controls.noFly = true;
    this.controls.lookVertical = true;
    this.controls.constrainVertical = true;
    this.controls.verticalMin = 1.0;
    this.controls.verticalMax = 2.0;
    this.controls.lon = -150;
    this.controls.lat = 120;
  }
  flyControls () {
    this.controls = new THREE.FlyControls(this.camera);
    this.controls.movementSpeed = 25;
    this.controls.domElement = document.querySelector("#WebGL-output");
    this.controls.rollSpeed = Math.PI / 24;
    this.controls.autoForward = true;
    this.controls.dragToLook = false;
  }

  renderGlobal (){
    this.cleanCanvas();

    //this.scene.add(new THREE.AxisHelper(500));

    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0x878787);
    this.scene.add(this.ambientLight);

    var planeGeometry = new THREE.PlaneGeometry(150, 150, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.plane.receiveShadow = true;
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.x = 0;
    this.plane.position.y = 0;
    this.plane.position.z = 0;
    this.scene.add(this.plane);
  }

  animateRobot (A, B, robot){
    if(this.animationEnabled == false){
      this.animationEnabled = true;
    }else{
      this.animationEnabled = false;
    }
    this.pointA = A;
    this.pointB = B;
    this.robot = robot
    this.scale = 0.5;
  }

  render () {
    
    let delta = this.clock.getDelta();
    this.controls.update(delta);
    
    if(this.animationEnabled == true){
      if(this.robot.position.x < this.pointA){
        this.scale = 0.5;
      }
      if(this.robot.position.x > this.pointB){
        this.scale = -0.5;
      }
      this.robot.position.x += this.scale;
    }

    //render the scene
    this.renderer.render(this.scene, this.camera);
  }
  
}
