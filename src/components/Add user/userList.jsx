

// ვიჭერთ addUser იდან გამოგზავნილ პარამეტრებს , რადგან გამოვიყენოთ ვებსაიტისთვის 
const UserList = ({action,id, name, lastName,age}) => {


    return <div key={id}>  
            {id ? <div className="user-list">
                <h4>Name: {name}</h4>
                <h4>Last name: {lastName}</h4>
                <h4>Age: {age}</h4>
                <h4>ID: {id}</h4>
                <button onClick={() => action(id)}>Remove</button>
                </div> : null
                
            }
        </div>


}

export default UserList