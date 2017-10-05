import * as React from "react";
import { ModeButtonBar } from "./modeButtonBar";
import { ShapeModeButton } from "./shapeModeButton";
import { ColorModeButton } from "./colorModeButton";
import { Dispatcher } from "../../simpledux";
import { Color } from "webgl-renderer";
import * as Events from "../../events";

export interface IMenuProps
{
    currentColor: Color;
}

export class Menu extends React.Component<IMenuProps, {}>
{
    public render()
    {
        return (
            <div>
                <ModeButtonBar
                    baseId="color-mode"
                    mainButtonTooltip="Choose a Color"
                    mainButtonBaseId="color-selector"
                    mainButtonClass={`${this.props.currentColor}-background`}>
                    <ColorModeButton idBase="red" toolTip="Red" mode="red" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="orange" toolTip="Orange" mode="orange" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="yellow" toolTip="Yellow" mode="yellow" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="green" toolTip="Green" mode="green" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="cyan" toolTip="Cyan" mode="cyan" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="blue" toolTip="Blue" mode="blue" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="indigo" toolTip="Indigo" mode="indigo" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="fuchsia" toolTip="Fuscia" mode="fuchsia" clickHandler={this.colorModeHandler}/>
                    <ColorModeButton idBase="white" toolTip="White" mode="white" clickHandler={this.colorModeHandler}/>
                </ModeButtonBar>
                <ModeButtonBar
                    baseId="shape-mode"
                    mainButtonTooltip="Choose a Shape"
                    mainButtonBaseId="shape-selector">
                    <ShapeModeButton idBase="points" toolTip="Points" mode="points" clickHandler={this.pointHandler}/>
                    <ShapeModeButton idBase="lines" toolTip="Lines" mode="lines" clickHandler={this.lineModeHandler}/>
                    <ShapeModeButton idBase="ellipses" toolTip="Ellipses" mode="ellipses" clickHandler={this.shapeModeHandler}/>
                    <ShapeModeButton idBase="triangles" toolTip="Triangles" mode="triangles" clickHandler={this.shapeModeHandler}/>
                    <ShapeModeButton idBase="rectangles" toolTip="Rectangles" mode="rectangles" clickHandler={this.shapeModeHandler}/>
                    <ShapeModeButton idBase="hexagon" toolTip="Hexagon" mode="hexagons" clickHandler={this.shapeModeHandler}/>
                    <ShapeModeButton idBase="octogon" toolTip="Octogon" mode="octogons" clickHandler={this.shapeModeHandler}/>
                </ModeButtonBar>
            </div>
        );
    }

    private colorModeHandler(event: React.MouseEvent<HTMLDivElement>)
    {
        const elem = event.currentTarget;
        if (elem === null) { return; }
        Dispatcher.injectEvent(new Events.ColorChangeEvent(elem.attributes["data-mode"].nodeValue));
    }

    private shapeModeHandler(event: React.MouseEvent<HTMLDivElement>)
    {
        const elem = event.currentTarget;
        if (elem === null) { return; }
        Dispatcher.injectEvent(new Events.ShapeChangeEvent(elem.attributes["data-mode"].nodeValue));
    }

    private lineModeHandler(event: React.MouseEvent<HTMLDivElement>)
    {
        const elem = event.currentTarget;
        if (elem === null) { return; }
        Dispatcher.injectEvent(new Events.DrawingLinesEvent());
    }

    private pointHandler(event: React.MouseEvent<HTMLDivElement>)
    {
        const elem = event.currentTarget;
        if (elem === null) { return; }
        Dispatcher.injectEvent(new Events.DrawingPointsEvent());
    }
}