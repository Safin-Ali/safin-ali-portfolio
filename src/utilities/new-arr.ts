export default function newArr <ReturnType>(value:number):ReturnType {
    return [...Array(value).keys()] as ReturnType;
}