'use strict';

class Warehouse extends THREE.Object3D {
    
    constructor(){
        super();
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

        this.add(shelf1);
        this.add(shelf2);
        this.add(shelf3);

        
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