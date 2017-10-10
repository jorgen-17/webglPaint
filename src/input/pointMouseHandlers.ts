import { IMouseHandler } from "./iMouseHandler";
import { WebGL2dRenderer, ShapeMode, RGBColor, MouseHelper } from "webgl-renderer";

export class PointMouseHandler implements IMouseHandler
{
    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGL2dRenderer,
        shape: ShapeMode, color: RGBColor): void
    {
        const location = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        const point = renderer.shapeFactory.createPoint(location, renderer.gl, color);
        renderer.addShapeToScene(point);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGL2dRenderer, shape: ShapeMode, color: RGBColor): void
    {
        if (mouseIsDown)
        {
            const location = MouseHelper.mouseEventToWebGlPoints(event, canvas);
            const point = renderer.shapeFactory.createPoint(location, renderer.gl, color);
            renderer.addShapeToScene(point);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGL2dRenderer,
        shape: ShapeMode, color: RGBColor): void
    {
        const location = MouseHelper.mouseEventToWebGlPoints(event, canvas);
        const point = renderer.shapeFactory.createPoint(location, renderer.gl, color);
        renderer.addShapeToScene(point);
    }
}