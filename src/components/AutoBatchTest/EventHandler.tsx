import { useState } from "react";

const EventHandler = () => {
  console.log("AutoBatchTestコンポーネントがレンダリングされました！");
  const [foo, setFoo] = useState<number>(0);
  const [bar, setBar] = useState<number>(0);

  const countUp = () => {
    console.log(foo);
    setFoo((prev) => prev + 1);
    console.log(foo);
    setBar((prev) => prev + 1);
  };

  return (
    <div className="mt-8">
      <p className="text-center">イベントハンドラ内の処理</p>
      <div className="mt-6 text-center">
        <div className="flex justify-center gap-5">
          <p>foo: {foo}</p>
          <p>bar: {bar}</p>
        </div>
        <button
          className="bg-slate-600 text-white py-2 px-5 mt-5"
          onClick={countUp}
        >
          更新
        </button>
      </div>
    </div>
  );
};

export default EventHandler;
