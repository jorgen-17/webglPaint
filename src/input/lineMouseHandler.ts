import { Point2d } from "webgl-renderer";
import { IMouseHandler } from "./iMouseHandler";
import { IWebGLRenderer } from "webgl-renderer";
import { Line } from "webgl-renderer";
import { MouseHelper } from "./mouseHelper";

export class LineMouseHandler implements IMouseHandler
{
    private line: Line;

    public mouseDownHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void
    {
        let point: Point2d = MouseHelper.clicksToPoints(event, canvas);
        this.line = new Line(point, renderer.getRGBColor(), renderer.gl);
    }

    public mouseMoveHandler(mouseIsDown: boolean, event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void
    {
        if (mouseIsDown)
        {
            let point: Point2d = MouseHelper.clicksToPoints(event, canvas);
            this.line.addVertex(point);
        }
    }

    public mouseUpHandler(event: MouseEvent, canvas: HTMLCanvasElement, renderer: IWebGLRenderer): void
    {
        let point = MouseHelper.clicksToPoints(event, canvas);
        this.line.addVertex(point);
        renderer.addShapeToScene(this.line);
    }
}