'use strict';

class Robot extends THREE.Object3D {

  constructor() {
    super();
    let x = this.position.x 
    let y = this.position.y 
    let z = this.position.z 

    var length = 7;
    var height = 7;
    var width = 7;

    this.body = Robot.createMesh(new THREE.CubeGeometry(length, height, width));
    this.body.translateX(x);
    this.body.translateY(y);
    this.body.translateZ(z);

    this.feet1 = Robot.createMesh(new THREE.SphereGeometry(2, 24, 24));
    this.feet1.translateX(this.body.position.x + length / 2);
    this.feet1.translateY(this.body.position.y - height / 2);
    this.feet1.translateZ(this.body.position.z + width / 2);
    this.feet2 = Robot.createMesh(new THREE.SphereGeometry(2, 24, 24));
    this.feet2.translateX(this.body.position.x - length / 2);
    this.feet2.translateY(this.body.position.y - height / 2);
    this.feet2.translateZ(this.body.position.z + width / 2);
    this.feet3 = Robot.createMesh(new THREE.SphereGeometry(2, 24, 24));
    this.feet3.translateX(this.body.position.x + length / 2);
    this.feet3.translateY(this.body.position.y - height / 2);
    this.feet3.translateZ(this.body.position.z - width / 2);
    this.feet4 = Robot.createMesh(new THREE.SphereGeometry(2, 24, 24));
    this.feet4.translateX(this.body.position.x - length / 2);
    this.feet4.translateY(this.body.position.y - height / 2);
    this.feet4.translateZ(this.body.position.z - width / 2);

    this.arm1 = Robot.createMesh(new THREE.CylinderGeometry(2, 2, 10));
    this.arm1.translateX(this.body.position.x);
    this.arm1.translateY(this.body.position.y + height / 2 + 2.5);
    this.arm1.translateZ(this.body.position.z);
    this.arm2 = Robot.createMesh(new THREE.CylinderGeometry(2, 2, 15));
    this.arm2.translateX(this.arm1.position.x);
    this.arm2.translateY(this.arm1.position.y + 7.7);
    this.arm2.translateZ(this.arm1.position.z - 4.5);
    this.arm2.rotateX(-1);

    this.add(this.body);
    this.add(this.feet1);
    this.add(this.feet2);
    this.add(this.feet3);
    this.add(this.feet4);
    this.add(this.arm1);
    this.add(this.arm2);
  }
  
  static createMesh(geom) {
    // Assign Material
    let wireFrameMat = new THREE.MeshLambertMaterial({color: 'green'});
    wireFrameMat.wireframe = false;

    let mesh = new THREE.Mesh(geom, wireFrameMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }
  
}