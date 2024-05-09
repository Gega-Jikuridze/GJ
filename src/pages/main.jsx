import AddUser from "../components/Add user/addUser"
import UserList from "../components/Add user/userList"
import Background from "../components/background/background"


const Main = () => {

    return <div className="main-page">
        <div className="users">
            <AddUser />
            <UserList />
        </div>

        <div>
            <Background />
        </div>


    </div>
}


export default Main