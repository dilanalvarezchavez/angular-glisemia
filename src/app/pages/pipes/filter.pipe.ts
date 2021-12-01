import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredString:String) {
    if (value.length===0 || filteredString==='') {
      return value;
      
    }
const papers =[];
for (const paper of value) {
 if (paper['user_id ']===filteredString) {
   papers.push(paper);
 } 
}
return papers;
}

}
