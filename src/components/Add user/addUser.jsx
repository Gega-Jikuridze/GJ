import { useRef, useState } from "react"
import UserList from "./userList"


const AddUser = () => {

    // ვქმნით სტეიტს მომხმარებლების შესაყვანად 
    const [users, setUsers] = useState([])


    // ვქმნით რეფებს ინფუთებთან დასაკავშირებლად 
    const usersNameRef = useRef()
    const usersLastNameRef = useRef()
    const usersAgeRef = useRef()
    const nextId = useRef(1);


    // მომხმარებლის დასამატებელი ფუნქცია 
    const addUser = (event) => {
        event.preventDefault()

        // ასაკი არიყოს ორციფრზე მეტი 
        const ageValue = usersAgeRef.current.value;
        const age = ageValue.slice(0, 2);

        // ობიექტში ვსვავთ ინფუთებიდან წამოღებულ ველიუს 
        const user = {
            id: nextId.current,
            name: usersNameRef.current.value,
            lastName: usersLastNameRef.current.value,
            age: age
        }

        nextId.current++; // ყოველ ჯერზე ID იზრდება ერთით 

        setUsers([...users, user]) // ძველ იუზერს დამატებული ახალი

        // ინფუთები დასაბმითების შემდეგ ისევ ცარიელია 
        usersNameRef.current.value = '';
        usersLastNameRef.current.value = '';
        usersAgeRef.current.value = '';
    }

    // იუზერის წაშლა ფილტრაციით 
    const removeUser = (id) => {
        const remove = users.filter((user) => user.id !== id)

        setUsers(remove)

    }

    return <div className="add-user container">
        
        <form onSubmit={addUser}> 
            <input type="text" 
                   ref={usersNameRef}
                   placeholder="Name"
                   required
            />

            <input type="text" 
                   ref={usersLastNameRef}
                   placeholder="LastName"
                   required
            />

                  <input type="number" 
                   ref={usersAgeRef}
                   placeholder="Age"
                   required
            />

            <button type="submit">Add user</button>
        </form>

        <div className="users-list">

        {/* იუზერებს ვმაპავთ და ვამზადებთ ვებსაიტზე გამოსატანად. ვაგზავნით პროპებად  */}
        {users ? users.map((el) => 
                    <UserList 
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    lastName={el.lastName}
                    age={el.age}
                    action={removeUser}
                    users
        /> ) : null
        

        }
        </div>
    </div>
}


export default AddUser