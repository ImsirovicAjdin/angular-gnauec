import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    //return value.replace(character, ' '); replaces the first occurence of a character in a string
    return value.split(character).join(' '); // replaces all occurences of a character in a string
  }

}