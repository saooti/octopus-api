import { Pageable } from "./pageable";
import { SortPageable } from "./sortPageable";

export interface InterfacePageable<T>{
    content: Array<T>;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: SortPageable;
    totalElements: number;
    totalPages: number;
}