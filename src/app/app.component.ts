import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('angular-text-v16');
  oldTitle = signal('');

  http = inject(HttpClient);

  products = signal<Product[]>([]);

  changeTitle() {
    if (this.oldTitle().length === 0) {
      this.oldTitle.set(this.title());
      this.title.set('angular-text-v17');
      return;
    }

    const oldTitleProxy = this.oldTitle();

    this.oldTitle.set(this.title());

    this.title.set(oldTitleProxy);
  }

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products.set(data);
        console.log(data);
      });
  }

  cats = signal<Product[]>([
    {
      id: 1,
      title: 'Gato bonito',
      precio: 50000,
      images: [
        'https://www.nacionrex.com/export/sites/debate/img/2023/08/05/memes-gatos-2.jpg_687446817.jpg',
      ],
    },
    {
      id: 2,
      title: 'Gato raro',
      precio: 10000,
      images: [
        'https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/366829820_1232462757600622_3396178062389798768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGQF2zQoQgBld-agDOEpGBOGSed45KOn3oZJ53jko6fese4GGGWP9Td5_sBw79qj530hUe2h5HWzXWrb70lMSwm&_nc_ohc=-DGB0k5PpwMAX_8B72A&_nc_ht=scontent.fbga2-1.fna&cb_e2o_trans=q&oh=00_AfCC5A-XAk7pHgCw08Zif9Ew-VWjc_KZ3QhGQn9xdjRxMg&oe=656DFE4E',
      ],
    },
    {
      id: 3,
      title: 'Gato vomitando',
      precio: 60000,
      images: [
        'https://images.hola.com/imagenes/mascotas/20191218155663/gatos-memes-divertidos-2019-gt/0-755-567/gato-tosiendo-z.jpg',
      ],
    },
    {
      id: 4,
      title: 'Gato tomando coca',
      precio: 5000,
      images: [
        'https://images.hola.com/imagenes/mascotas/20191218155663/gatos-memes-divertidos-2019-gt/0-755-568/avispa-z.jpg',
      ],
    },
  ]);
}
