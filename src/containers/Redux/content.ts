export const intro = `Redux 三大元件:

1. action  : 描述發生的事件類別(type)，以及所承載的資訊(payload)。
2. reducer : 一個函式，負責將給定的 state 根據給定的 action 做變化而得到新的 state。
3. store   : 整個 Redux 運作的核心，負責儲存整個 state tree，每個專案只會有一個 store。
`

export const toolKit = `ToolKit 是一套 Redux 工具，用以簡化部分步驟。

主要使用到的是 createSlice 這一個 API，可以將 reducer , action 結合再一起

在原本的 Redux 內需要寫兩個檔案

Action  : 
  const INCREMENT = 'counter/increment';

  function increment(amount) {
    return {
      type: INCREMENT,
      payload: amount,
    };
  }


Reducer :
  const counter = (state = 0, action) => {
    if (typeof state === 'undefined') {
      return 0;
    }
  
    switch (action.type) {
      case increment.type:
        return state + 1;
      case decrement.type:
        return state - 1;
      default:
        return state;
    }
  };


再改為使用 createSlice 後

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
  },
});

export default counterSlice.reducer



`