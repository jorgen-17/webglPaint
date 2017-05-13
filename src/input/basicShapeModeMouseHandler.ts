import { Point2d } from "webgl-renderer";
import { IMouseHandler } from "./iMouseHandler";
import { IWebGLRenderer } from "webgl-renderer";
import { Shape } from "webgl-renderer";
import { ShapeFactory } from "webgl-renderer";
import { MouseHelper } from "./mouseHelper";

export class BasicShapeModeMouseHandler implements IMouseHandler
{
    private beginningPoint: Point2d | null;
    private endPoint: Point2d | null;

    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        this.beginningPoint = { x: point.x, y: point.y };
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void { /* do nothing */ }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void
    {
        if (this.beginningPoint !== null)
        {
            let point = MouseHelper.clicksToPoints(event, canvas);
            this.endPoint = { x: point.x, y: point.y };
            let shape: Shape = ShapeFactory.createShape(this.beginningPoint, this.endPoint, renderer.shape,
                renderer.color, renderer.gl);
            renderer.addShapeToScene(shape);
            this.beginningPoint = null;
        }
    }
}