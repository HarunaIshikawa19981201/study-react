"use client";
import React, { useState } from "react";
import { useEffect } from "react";


const Top = () => {

// let count = 1; 分割代入で書き換え
const [count, setCount] = useState(0);


  const handleClick = (e: any) => {
    console.log(e.target.value);
    // setCount(count + 1); 直接代入
    // 前の状態を取得してから処理を行う場合
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };


  useEffect(() => {
    // console.log('マウント時の処理');
    // // マウント時の処理
    // document.body.style.backgroundColor = 'white';

    // アンマウント時の処理（あまり使用しない？）
    return () => {
      // console.log('アンマウント時の処理');
      // document.body.style.backgroundColor = 'white';
    };
  }, []);

  return (
    <div>
        <h1>トップページ</h1>
        <p>{ count }</p>
        <button type="button" value="apple" onClick={ handleClick }>ボタン</button>
    </div>
  )
}

export default Top;