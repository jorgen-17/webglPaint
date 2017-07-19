import { IMouseHandler } from "./iMouseHandler";
import { WebGLRenderer, ShapeMode, RGBColor } from "webgl-renderer";
import { MouseHelper } from "./mouseHelper";

export class   RenderModeMouseHandler implements IMouseHandler
{
    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shape: ShapeMode, color: RGBColor): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement,
        renderer: WebGLRenderer, shape: ShapeMode, color: RGBColor): void
    {
        if (mouseIsDown)
        {
            let point = MouseHelper.clicksToPoints(event, canvas);
            renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer,
        shape: ShapeMode, color: RGBColor): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y, 0,
            color.red, color.green, color.blue);
    }
}