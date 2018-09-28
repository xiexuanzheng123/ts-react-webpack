declare module 'querystring' {
    export function stringfy(val: object): string
    export function parse(val: string): object
}