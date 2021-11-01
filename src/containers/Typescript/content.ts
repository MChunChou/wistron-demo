export const intro = `1.  TypeScript 是 JavaScript 的嚴格超集
2.  TypeScript 提供了靜態型別檢查
3.  TypeScript 提供使用看起來像類別的物件導向程式設計語法操作 Prototype`


export const typesCtn = `基礎的型態有下列:

1. 布林值 (boolean)
2. 數值 (number)
3. 字串 (string)
4. Null 
5. Undefined

    Example: 
        let isDone: boolean = false;
        let decLiteral: number = 6;
        let myName: string = 'Tom';
        let u: undefined = undefined;
        let n: null = null;


型態可以聯合使用

    Example: 
        let myFavoriteNumber: string | number;


在 Function 中可宣告 return 的型態

    Example:
        function getMyName(): string{
            return 'Tom'
        }
    
如果 Fuction 沒有 return 設為 void 

    Example: 
        function notReturnValue(): void {
            //do something
        }
    `

export const interfacesCtn = `介面 (Interfaces) 一般用來定義物件

    Example 
        interface Persion {
            name: string;
            age: number        
        }

提供使用可選屬性

    Example 
        interface Person {
            name: string;
            age?: number;
        }

提供使用唯獨屬性

    Example 
        interface Person {
            readonly id: number;
            name: string;
            age?: number;
        }
`

export const enumCtn = `列舉（Enum）型別用於取值被限定在一定範圍內的場景

列舉成員會被賦值為從 0 開始遞增的數字

    Example
        enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
        
        Days['Sun'] === 0
        Days[0] === 'Sun'

可以手動賦值，但是其後的值會自動累加上去，並且覆蓋

    Example
        enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

        此時 Days['Sun'] === 3， 但 Days[3] !== 'Sun' 而是 'Wed'
`
export const genericsCtn = `泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。

    Example 
  
        function createArrType<T> (value: T): Array<T>  {
            let arr: T[] = [value]
            return arr
        }

        createArrType<string>('John') // ['John']

泛型可以有多個

    Example
        function swap<T, U>(tuple: [T, U]): [U, T] {
            return [tuple[1], tuple[0]];
        }
        
        swap([7, 'seven']); // ['seven', 7]

可以對泛型進行約束

    Example
        interface Lengthwise {
            length: number;
        }

        function loggingIdentity<T extends Lengthwise>(arg: T): T {
            console.log(arg.length);
            return arg;
        }
`

