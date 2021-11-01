export const intro = `React 是一個陳述式、高效且具有彈性的 JavaScript 函式庫，用以建立使用者介面。

1. 使用 JSX  
2. 使用 props 作為上層介面(component)傳送資料到下層介面(component)的屬性
3. 使用 state 作為管理資料的方式
4. 當 props 或者 state 更新時，會重新 render 畫面

React Hook 讓使用者不用再寫 class 就能使用 React，最主要功能為 state Hook 以及 effect Hook
`

export const stateCtn = `useState 會創建一個數值以及更新數值( setState )的 function

Example
 let [count, setCount] = useState(0)
  
 ‧ 第一個變數 count 為 state 變數，初始數值 count 為 0 
 ‧ 第二個便是 setCount 為 setState Function , 當執行 setCount(/* 某個數 */) state 變數便會進行更新
`

export const effectCtn = `useEffect 使用方式如下

Example 
  useEffect(()=>{    

    document.title = \`You clicked \${count} times\`;
    
  }, [count])

‧ useEffect Function 給予第一個變數為 function，會在畫面 render 完畢後執行
‧ 當第一個變數 function 有 return functoin 時 表示在被需要清除時執行
‧ 第二個給予的變數為陣列 [] , 裡面的變數表示當此變數與原先變數不相同時才需要重新執行 effect
`

export const example = `function Example() {
    const [count, setCount] = useState(0);
  
    // 相似於 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
      // 使用瀏覽器 API 更新文件標題
      document.title = \`You clicked \${count} times\`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }`