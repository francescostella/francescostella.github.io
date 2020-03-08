import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'jghrcru0ypis',
  accessToken: 'Hrs5-3q-BfGd1vEDwdwDKDw4V30hQ96mhK81Wx0DZuQ',

  contentTypeIds: {
    work: 'work',
    client: 'client'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getWorks(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.work,
      select: 'sys.id,fields.name,fields.client,fields.cover',
      include: 1
    }, query))
    .then();
  }
}
