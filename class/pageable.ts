import { SortPageable } from "./sortPageable";

export interface Pageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: SortPageable;
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
    unpaged: boolean;
}