import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'segunda-clase-a';

  name = '';
  order = '';
  constructor(public request: RequestService){
    
  }

  ngOnInit(): void {
    this.getData()
    
  }

  getData(){
    let button = document.getElementById("button")

    button?.addEventListener("click",()=>{
      let pokemon:HTMLInputElement = document.getElementById("pokemon") as HTMLInputElement
      let order:HTMLInputElement = document.getElementById("order") as HTMLInputElement
      this.request.getPokemon(pokemon.value).subscribe({
        next:(resp : any)=>{
           console.log(resp)
           this.name = resp.name;
           this.order = resp.order;
           //name.value=resp.name;
           //order.value = resp.order;
        },
        error:(error : any)=>{
          this.name = "Hay un error ";
          this.order = "Hay u error";
        }
      })
    })
  }


}
