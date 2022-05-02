'use strict';

class MyTable extends THREE.Object3D {

  constructor(lp, ep, ap, lt, et, at) {
    super();
  
    this.pae = MyTable.createMesh(new THREE.CubeGeometry(lp,ap,ep,16,16,16), 0xff00ff); // perna anterior esquerda
    this.pae.translateX(lp/2);
    this.pae.translateY(ap/2);
    this.pae.translateZ(-ep/2);
    this.pae.add( new THREE.AxisHelper(10));

    this.pad = MyTable.createMesh(new THREE.CubeGeometry(lp,ap,ep,16,16,16), 0xff00ff); // perna anterior direita
    this.pad.translateX(lp/2+lt-lp);
    this.pad.translateY(ap/2);
    this.pad.translateZ(-ep/2);
    this.pad.add( new THREE.AxisHelper(10));
  
    this.ppe = MyTable.createMesh(new THREE.CubeGeometry(lp,ap,ep,16,16,16), 0xff00ff); // perna posterior esquerda
    this.ppe.translateX(lp/2);
    this.ppe.translateY(ap/2);
    this.ppe.translateZ(-ep/2-et+ep);
    this.ppe.add( new THREE.AxisHelper(10));

    this.ppd = MyTable.createMesh(new THREE.CubeGeometry(lp,ap,ep,16,16,16), 0xff00ff); // perna posterior esquerda
    this.ppd.translateX(lp/2+lt-lp);
    this.ppd.translateY(ap/2);
    this.ppd.translateZ(-ep/2-et+ep);
    this.ppd.add( new THREE.AxisHelper(10));

    this.tampo = MyTable.createMesh(new THREE.CubeGeometry(lt,at,et,16,16,16), 0x000000); // tampo
    this.tampo.translateX(lt/2);
    this.tampo.translateY(at/2+ap);
    this.tampo.translateZ(-et/2);
    this.tampo.add( new THREE.AxisHelper(10));
  
    this.add(this.pae);
    this.add(this.pad);
    this.add(this.ppe);
    this.add(this.ppd);
    this.add(this.tampo);
  }
  
  static createMesh(geom, color) {

    var material = new THREE.MeshBasicMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
    
    // assign two materials
    //let meshMaterial = new THREE.MeshNormalMaterial();
    //meshMaterial.side = THREE.DoubleSide;
    //let wireFrameMat = new THREE.MeshBasicMaterial();
    //wireFrameMat.wireframe = false;

    // create a multimaterial
    //let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    return mesh;
  }
  
}