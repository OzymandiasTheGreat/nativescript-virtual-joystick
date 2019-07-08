/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { VirtualJoystickEventData } from 'nativescript-virtual-joystick';


export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;

	page.bindingContext = new HomeViewModel();
}


export function onMove(data: VirtualJoystickEventData) {
	console.log(`Angle: ${data.angle}`);
	console.log(`Strength: ${data.strength}`);
	console.log(`Horizontal: ${data.xAxis}`);
	console.log(`Vertical: ${data.yAxis}`);
}
