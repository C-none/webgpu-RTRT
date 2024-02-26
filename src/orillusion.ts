import { Engine3D, View3D, Scene3D, CameraUtil, webGPUContext, HoverCameraController, Object3D, MeshRenderer, Vector3, Color, BoxGeometry, UnLitMaterial, InstancedMesh, Matrix4, matrixRotate } from '@orillusion/core'
import { Stats } from '@orillusion/stats'

class Sample_Boxes {
    view?: View3D

    async run() {
        Engine3D.setting.shadow.enable = false

        await Engine3D.init()
        this.view = new View3D()
        this.view.scene = new Scene3D()
        // this.view.scene.addComponent(AtmosphericComponent)
        this.view.scene.addComponent(Stats)

        this.view.camera = CameraUtil.createCamera3DObject(this.view.scene)
        this.view.camera.perspective(60, webGPUContext.aspect, 1, 5000.0)
        this.view.camera.object3D.addComponent(HoverCameraController).setCamera(35, -20, 300)

        Engine3D.startRenderView(this.view)

        this.createScene(this.view.scene)
    }

    private async createScene(scene: Scene3D) {
        let geometry = new BoxGeometry(1, 1, 1)
        let color = new Color(1, 1, 0.8)
        {
            let cnt = 10000
            for (let i = 0; i < cnt; i++) {
                let obj = new Object3D()
                let mr = obj.addComponent(MeshRenderer)
                mr.material = new UnLitMaterial();
                (mr.material as any).baseColor = color
                mr.geometry = geometry
                obj.x = Math.random() * 200 - 100
                obj.y = Math.random() * 200 - 100
                obj.z = Math.random() * 200 - 100
                obj.rotationX = Math.random() * 90
                obj.rotationY = Math.random() * 90
                obj.rotationZ = Math.random() * 90
                // scene.addChild(obj)
            }

        }

        // instanced BoxGeometry
        {
            let cnt = 10000
            let material = new UnLitMaterial()
            material.baseColor = color
            let obj = new InstancedMesh(geometry, material, cnt)
            for (let i = 0; i < cnt; i++) {
                let transformMatrix = new Matrix4()
                let rand = Math.random()
                matrixRotate(rand * Math.PI / 2, new Vector3(1, 0, 0), transformMatrix)
                transformMatrix.translate(new Vector3(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100))
                obj.setMatrixAt(i, transformMatrix)
                // transformMatrix.matrixRotate(Math.random()*Math.PI/2,new Vector3(1,0,0),
            }
            scene.addChild(obj)
        }

    }
}

new Sample_Boxes().run()