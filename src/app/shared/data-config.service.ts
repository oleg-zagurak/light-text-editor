import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataConfigService {
  private value: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio pariatur harum architecto? Non accusantium, nesciunt molestiae laudantium doloribus possimus perferendis nemo quisquam maxime incidunt quia? Est dicta voluptatem facilis veniam! Repudiandae rerum recusandae cum ipsam ipsa cumque numquam quam, blanditiis quia, repellat quisquam exercitationem in unde. Alias reiciendis labore ad, ut quisquam pariatur, eligendi quia ipsum aspernatur, error consectetur cumque? Vel, labore repellat. Obcaecati alias voluptas officiis ratione nemo, ullam rem sint repellat reiciendis delectus optio sed. Ipsa alias doloribus, temporibus quidem tempora, consequuntur quisquam, expedita fugit aperiam nemo nam? Odio, velit doloribus quo dicta quibusdam, laborum delectus ipsum quae illum vitae expedita sed natus ea? Earum alias, quos quaerat tempore natus sit, qui voluptas libero vel, ducimus neque unde. Dolores incidunt a mollitia illum odio animi repellat totam tempore commodi quibusdam quisquam numquam placeat ut necessitatibus laboriosam, cupiditate vel unde eaque, distinctio laudantium hic aliquam at magnam. Assumenda, neque! Sequi asperiores rem nisi similique sunt magnam excepturi facilis aspernatur repellat nam quis aperiam omnis ut velit laudantium, non tenetur quidem, commodi, error vitae rerum magni quas. Reprehenderit, eius atque. Qui iste nam itaque iure, perferendis quisquam consectetur accusamus cumque dolor quaerat? In ipsa voluptas aliquam. Asperiores voluptatem explicabo, maiores omnis eveniet qui? Temporibus tenetur enim sapiente fugiat a ipsum! Sint quasi error adipisci? Non, qui velit reiciendis amet quidem cumque doloremque laboriosam, commodi est, repudiandae animi consequatur accusantium. Enim tenetur mollitia illum reprehenderit sequi debitis nostrum, rerum quis? Porro?`
  constructor() { }

  get text(): string {
    return this.value
  }
  set text(data) {
    this.value = data;
  }
}
