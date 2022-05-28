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

        let spotLight1 = new THREE.SpotLight(0xffffff, 1, 100000);
        spotLight1.position.set(0, 0 + 20 + 80, 0);
        spotLight1.intensity = 0.5;
        spotLight1.castShadow = true;
        spotLight1.target = shelf1;
        this.add(spotLight1);
        
        let spotLight2 = new THREE.SpotLight(0xffffff);
        spotLight2.position.set(-20 / 2, 0 + 20 + 80, 0);
        spotLight2.intensity = 0.5;
        spotLight2.castShadow = true;
        spotLight2.target = shelf2;
        this.add(spotLight2);
       
        let spotLight3 = new THREE.SpotLight(0xffffff);
        spotLight3.position.set(20 / 2, 0 + 20 + 80, 0);
        spotLight3.intensity = 0.5;
        spotLight3.castShadow = true;
        spotLight3.target = shelf3;
        this.add(spotLight3);
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