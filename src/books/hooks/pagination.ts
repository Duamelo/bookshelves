const LIMIT = 10;

export function usePagination(size: number): {
    previous: ()  => void,
    current: number,
    next: ()  => void,
}{
    return {
        previous: ()  => {},
        current: 1,
        next: ()  => {}
    }
}