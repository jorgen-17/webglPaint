import { IMouseHandler } from "./iMouseHandler";
import { WebGLRenderer } from "webgl-renderer";
import { MouseHelper } from "./mouseHelper";

export class RenderModeMouseHandler implements IMouseHandler
{
    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer): void
    {
        if (mouseIsDown)
        {
            let point = MouseHelper.clicksToPoints(event, canvas);
            renderer.addXYZPointToScene(point.x, point.y);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: WebGLRenderer): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        renderer.addXYZPointToScene(point.x, point.y);
    }
}