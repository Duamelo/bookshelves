import { renderHook } from '@testing-library/react'
import { usePagination } from "../../../src/books/hooks/pagination";

const SIZE = 50;

describe("usePagination", () => {
    it("current should be equal to one on first render", () => {
        
        const {result} = renderHook(() => usePagination(SIZE))
    
        expect(result.current).toEqual(1);
    })
    it.todo("next should increment current")
    it.todo("previous should decrement current")
    it.todo("previous should not update current when current is one")
    it.todo("next should not update current when current is equal to size")
})