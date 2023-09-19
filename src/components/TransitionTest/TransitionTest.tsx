import { useState } from "react";
import MemberButton from "./MemberButton";

type Task = {
  id: number;
  title: string;
  name: string;
  description: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

const createTaskArray = (): Task[] => {
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addIndex = index + 1;
      return {
        id: addIndex,
        title: `title${addIndex}`,
        description: `description${addIndex}`,
        name:
          addIndex % 3 === 0
            ? member.a
            : addIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};

const tasksArray = createTaskArray();

const filteringMember = (member: string) => {
  if (member === "") return tasksArray;
  return tasksArray.filter((task) => task.name === member);
};

const TransitionTest = () => {
  const [selectMember, setSelectMember] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(tasksArray);

  const clickMember = (member: string) => {
    console.log("クリックされました！！");
    setSelectMember(member);

    setTasks(filteringMember(member));
  };

  return (
    <>
      <p className="text-3xl text-center mt-20">TransitionTest</p>
      <div className="flex justify-center gap-5 mt-8">
        <MemberButton
          onClick={clickMember}
          isActive={selectMember === member.a}
        >
          {member.a}
        </MemberButton>
        <MemberButton
          onClick={clickMember}
          isActive={selectMember === member.b}
        >
          {member.b}
        </MemberButton>
        <MemberButton
          onClick={clickMember}
          isActive={selectMember === member.c}
        >
          {member.c}
        </MemberButton>
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-gray-600 text-white py-2 px-4 m-auto inline-block"
          onClick={() => clickMember("")}
        >
          リセット
        </button>
      </div>

      <ul className={`grid gap-4 mt-8`}>
        {tasks?.map((task) => (
          <li key={task.id} className="bg-gray-300 w-80 m-auto p-3">
            <p>タイトル: {task.title}</p>
            <p>説明: {task.description}</p>
            <p>名前: {task.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransitionTest;
