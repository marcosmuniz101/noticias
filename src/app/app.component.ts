import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  noticias =[];
  titulo = null;
  conteudo = null;

  salvar(){
    const noticia ={
      id: this.noticias.length,
      titulo: this.titulo,
      conteudo: this.conteudo,
      visivel: false
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.conteudo = null;
  } 
  
  mostrar(noticia){
    for (let n of this.noticias){
        n.visivel=false;
      }
    
    
    noticia.visivel = true;
  }

  fechar(noticia){
    noticia.visivel = false;
  }

  
}

