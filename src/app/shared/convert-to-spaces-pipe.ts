import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'ConvertToSpace'
})

export class ConvertToSpaceipe implements PipeTransform{
    transform(value: string, character:string): string{
        return value.replace(character, ' ');
    }
}