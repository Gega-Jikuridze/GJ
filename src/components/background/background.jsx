import { useEffect, useRef, useState } from "react";

const Background = () => {

//  შევქმენი Ref , იმისთვის რომ მივწვდე ინფუთებს 
  const backgroundInputRef = useRef();
  const colorRef = useRef();
  const nameRef = useRef()
  const fontRef = useRef()

  
//   სტეიტები იმისთვის რომ განვაახლო მნიშვნელობა 
  const [background, setBackground] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [font, setFont] = useState(20)


//   ფუნქცია რომელიც შეცვლის ფერს, ბექ გრაუნდს , ფონტ საიზს და სახელს 
  const backgroundChange = (event) => {
    event.preventDefault();

    const bg = backgroundInputRef.current.value;
    const clr = colorRef.current.value;
    const user = nameRef.current.value;
    const font = fontRef.current.value.slice(0, 2);


    setBackground(bg);
    setColor(clr)
    setName(user)
    setFont(font)

    
    // დასაბმითების შემდეგ ინფუთები რომ ცარიელი იყოს 
    backgroundInputRef.current.value = "";
    colorRef.current.value = "";
    nameRef.current.value = "";
    fontRef.current.value = '';

  };


//   იმისთვის რომ შევცვალოთ ფერი ბექგრაუნდი და ფონტი 
  useEffect(() => {
    document.querySelector('.background-test').style.backgroundColor = background;
    document.querySelector('.background-test h1').style.color = color;
    document.querySelector('.background-test h1').style.fontSize = font + 'px';
  }, [background,color, font]);
  



  return (
    <div className="background container">
      <form onSubmit={backgroundChange}>
        <input type="text" placeholder="BackGround?" ref={backgroundInputRef} />
        <input type="text" placeholder="Color?" ref={colorRef} />
        <input type="text" placeholder="Name?" ref={nameRef} required/>
        <input type="text" placeholder="Font-Size?" ref={fontRef} />

        <button type="submit">Set Color</button>
      </form>

      <div className="background-test" >
        <h1>Hello , I m {name}</h1>
      </div>
    </div>


  );
};

export default Background;
