export interface Menu {
  date: string;
    startDate: string;
    endDate: string;
    link: string;
    name: string;
    _id?: string;
}
 export class ObjContainer{
     menus?: Menu[];
}
