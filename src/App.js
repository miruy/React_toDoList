import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    
    setToDos(currentArray => [toDo, ...currentArray]);  // toDo값을 currentArray에 추가해라
    setToDo("");  // input작성 및 버튼 submit 후 입력창 비우기

  };
  console.log(toDos);

   /* {toDos.map()}
    - toDos배열의 모든 값에 map()안에 정의한 함수(개발자가 원하는 기능)를 적용함 
    - map()안에 변수를 넣는다면, 그 값은 index0부터 값을 의미함
    - map()을 사용할 때는 prop로 key를 넣어주어함(key,value구성)
   */
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do.."></input>
        <button>Add To Do</button>
      </form> 
      <hr />
      <ul>
        {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)} 
      </ul> 
    </div>
  );
}

export default App;
