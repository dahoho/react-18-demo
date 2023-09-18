import { useState } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Other = () => {
  console.log("Otherコンポーネントがレンダリングされました！");
  const [todosData, setTodosData] = useState<TodoType[] | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const fetchApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setIsVisible((prev) => !prev);
    setIsVisible((prev) => !prev);
    setIsVisible((prev) => !prev);
    setTodosData(data);
  };

  return (
    <div className="mt-8">
      <p className="text-center">イベントハンドラ以外の処理</p>
      <div className="mt-6 text-center">
        <button
          className="bg-slate-600 text-white py-2 px-5 mt-5"
          onClick={fetchApi}
        >
          API取得
        </button>
        {isVisible && (
          <div className="mt-8">
            {todosData?.map((todo) => (
              <p key={todo.id} className="p-2">
                {todo.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Other;
