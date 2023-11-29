import { useState } from "react";
import people from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) return 0;
      else return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) return people.length - 1;
      else return newIndex;
    });
  };

  return (
    <>
      <div className="container">
        <img className="img" src={image} />
        <div className="identity">
          <p className="name">{name}</p>
          <p className="job">{job}</p>
        </div>
        <div>
          <p className="text">{text}</p>
        </div>

        <div className="btn">
          <button onClick={prevPerson}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.09843 9.33711L12.6902 1.7457C13.0562 1.37969 13.65 1.37969 14.016 1.7457L14.9016 2.63125C15.2672 2.99688 15.2676 3.58906 14.9031 3.95547L8.88632 10L14.9027 16.0449C15.2676 16.4113 15.2668 17.0035 14.9012 17.3691L14.0156 18.2547C13.6496 18.6207 13.0558 18.6207 12.6898 18.2547L5.09843 10.6629C4.73241 10.2969 4.73241 9.70312 5.09843 9.33711Z"
                fill="#3C3799"
              />
            </svg>
          </button>
          <button onClick={nextPerson}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9014 10.6629L7.30985 18.2545C6.94371 18.6206 6.35012 18.6206 5.98403 18.2545L5.0986 17.369C4.73309 17.0035 4.73238 16.4111 5.09703 16.0448L11.1135 10L5.09703 3.95527C4.73238 3.58891 4.73309 2.99652 5.0986 2.63101L5.98403 1.74559C6.35016 1.37945 6.94375 1.37945 7.30985 1.74559L14.9014 9.33711C15.2675 9.7032 15.2675 10.2968 14.9014 10.6629Z"
                fill="#3C3799"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
