import AddUser from "../components/Add user/addUser"
import UserList from "../components/Add user/userList"


const Main = () => {

    return <div className="main-page">
        <div className="users">
            <AddUser />
            <UserList />
        </div>


    </div>
}


export default Main