import { Vec3, ShapeMode, WebGLRenderer } from 'webgl-renderer';
import { IMouseHandler } from "./iMouseHandler";
import { Shape2d } from "webgl-renderer";
import { ShapeFactory, RGBColor } from "webgl-renderer";
import { MouseHelper } from "./mouseHelper";

export class BasicShapeModeMouseHandler implements IMouseHandler
{
    private beginningPoint: Vec3 | null;
    private endPoint: Vec3 | null;

    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        this.beginningPoint = new Vec3(point.x, point.y);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent,
        canvas: HTMLCanvasElement, renderer: WebGLRenderer): void { /* do nothing */ }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shapeMode: ShapeMode, color: RGBColor): void
    {
        if (this.beginningPoint !== null)
        {
            let point = MouseHelper.clicksToPoints(event, canvas);
            this.endPoint = new Vec3(point.x, point.y);
            let shape: Shape2d = ShapeFactory.createShape(this.beginningPoint, this.endPoint,
                shapeMode, renderer.gl, color);
            renderer.addShapeToScene(shape);
            this.beginningPoint = null;
        }
    }
}