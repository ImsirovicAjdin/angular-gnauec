import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular_Building_Custom_Pipes';
}
/*
Component Lifecycle:
#########################################

Create -- Render -- Create and render children -- Process changes -- Destroy


OnInit: Perform component init, retrieve data
OnChanges: Perform action after change to input properties
OnDestroy: Perform cleanup

Building Custom Pipes
#####################

Writing a more generalized custom pipe that transforms any given character to a space.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe
                implements PipeTransform {
                  transform(value: string,
                            character: string): string {

                            }
                }

Using a Custom Pipe
####################

template: 

<td>{{product.productCode | convertToSpaces:'-' }}</td>

Pipe:
transform(value: string, character: string): string {

}

We add a pipe to an Angular module. Since we only have one, (app.module.ts), that's where we'll add it.

*/