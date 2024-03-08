import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

init();

function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.0001, 2000);
    camera.position.set(0, 1, 1);

    scene = new THREE.Scene();
    // model

    new RGBELoader()
        .setPath('./')
        .load('san_giuseppe_bridge_4k.hdr', function (texture) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            render();

            // model

            const loader = new GLTFLoader().setPath('./sponza/');

            loader.load('Sponza.gltf', async function (gltf) {

                const model = gltf.scene;
                // let rmid: string[] = [];
                // model.traverse(function (child) {
                //     if (child instanceof THREE.Mesh) {
                //         let mat = child.material;
                //         if (mat.metalnessMap == null || mat.roughnessMap == null) {
                //             rmid.push(child.uuid);
                //         } else console.log(child);
                //     }
                // });
                // model.traverse(function (child) {
                //     if (child instanceof THREE.Group) {
                //         for (let i = child.children.length - 1; i >= 0; i--) {
                //             for (let id in rmid) {
                //                 if (child.children[i].uuid == id) {
                //                     child.children.splice(i, 1);
                //                     break;
                //                 }
                //             }
                //         }
                //     }
                // })

                // wait until the model can be added to the scene without blocking due to shader compilation
                // model.applyMatrix4(new THREE.Matrix4().makeScale(0.01, 0.01, 0.01));
                await renderer.compileAsync(model, camera, scene);

                scene.add(model);
                console.log(model);
                render();

            });

        });


    renderer = new THREE.WebGLRenderer({
        antialias: true,
        logarithmicDepthBuffer: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use if there is no animation loop
    controls.minDistance = 0.0001;
    controls.maxDistance = 1000;
    controls.target.set(0, 0.1, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

//

function render() {

    renderer.render(scene, camera);

}