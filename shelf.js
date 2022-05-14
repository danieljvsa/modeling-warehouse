'use strict';

class Shelf extends THREE.Object3D {

  constructor(length, height, width, boxLength, boxHeight, boxWidht, boxThickness) {
    super();
    let x = this.position.x 
    let y = this.position.y 
    let z = this.position.z 
    // First Floor
    this.first = Shelf.createMesh(new THREE.CubeGeometry(length, 1, width + (width/2)));
    this.first.translateX(x);
    this.first.translateY(y + 5);
    this.first.translateZ(z);
    this.firstBox1 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.first.position.x, this.first.position.y + 0.5, this.first.position.z + (width / 2 - boxWidht / 6));
    this.firstBox2 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.first.position.x, this.first.position.y + 0.5, this.first.position.z + (this.firstBox1.position.z - boxWidht / 7) - boxThickness);
    this.firstGroup = new THREE.Group();
    this.firstGroup.add(this.first);
    this.firstGroup.add(this.firstBox1);
    this.firstGroup.add(this.firstBox2);
    this.firstGroup.rotateX(0.2);

    
    // Second Floor
    this.second = Shelf.createMesh(new THREE.CubeGeometry(length, 1, width + (width/2)));
    this.second.translateX(x);
    this.second.translateY(y + (height / 2) + 5);
    this.second.translateZ(z - length / 2);
    this.secondBox1 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.second.position.x, this.second.position.y + 0.5, this.second.position.z + (width / 2 - boxWidht / 6));
    this.secondBox2 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.second.position.x, this.second.position.y + 0.5, this.second.position.z + (this.secondBox1.position.z - boxWidht / 7) - boxThickness);
    this.secondGroup = new THREE.Group();
    this.secondGroup.add(this.second);
    this.secondGroup.add(this.secondBox1);
    this.secondGroup.add(this.secondBox2);
    this.secondGroup.rotateX(0.2);

    // Third Floor
    this.third = Shelf.createMesh(new THREE.CubeGeometry(length, 1, width + (width/2)));
    this.third.translateX(x);
    this.third.translateY(y + height + 6);
    this.third.translateZ(z - (length / 2.5));
    this.thirdBox1 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.third.position.x, this.third.position.y + 0.5, this.third.position.z - (width / 2 - boxWidht / 7));
    this.thirdBox2 = new Box(boxLength, boxHeight, boxWidht, boxThickness, this.third.position.x, this.third.position.y + 0.5, this.third.position.z - (this.thirdBox1.position.z - boxWidht / 9) + boxThickness);
    this.thirdGroup = new THREE.Group();
    this.thirdGroup.add(this.third);
    this.thirdGroup.add(this.thirdBox1);
    this.thirdGroup.add(this.thirdBox2);
    this.thirdGroup.rotateX(-0.1);

    this.support1 = Shelf.createMesh(new THREE.CubeGeometry(1, height + height / 2, boxThickness));
    this.support1.translateX(x + length / 2);
    this.support1.translateY(y + height / 3 + 8);
    this.support1.translateZ(z + width / 6);
    this.support2 = Shelf.createMesh(new THREE.CubeGeometry(1, height + height / 2, 1));
    this.support2.translateX(x + length / 2);
    this.support2.translateY(y + height / 3 + 8);
    this.support2.translateZ(z - width / 2.5);
    this.support3 = Shelf.createMesh(new THREE.CubeGeometry(1, height + height / 2, 1));
    this.support3.translateX(x - length / 2);
    this.support3.translateY(y + height / 3 + 8);
    this.support3.translateZ(z + width / 6);
    this.support4 = Shelf.createMesh(new THREE.CubeGeometry(1, height + height / 2, 1));
    this.support4.translateX(x - length / 2);
    this.support4.translateY(y + height / 3 + 8);
    this.support4.translateZ(z - width / 2.5);


    this.add(this.firstGroup);
    this.add(this.secondGroup);
    this.add(this.thirdGroup);
    this.add(this.support1);
    this.add(this.support2);
    this.add(this.support3);
    this.add(this.support4);
  }
  
  static createMesh(geom) {
    // Assign Material
    let wireFrameMat = new THREE.MeshBasicMaterial({color: 'red'});
    wireFrameMat.wireframe = false;

    let mesh = new THREE.Mesh(geom, wireFrameMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }
  
}