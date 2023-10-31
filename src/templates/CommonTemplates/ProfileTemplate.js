import { useEffect, useState } from "react";
import UserCard from "../../organisms/UserCard/UserCard";
import axios from "axios";
import { useSelector } from "react-redux";

function ProfileTemplate() {

    const api = process.env.REACT_APP_API_URL;
    const auth = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        axios.get(`${api}userInfo`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.authToken}`,
            },
            })
            .then((response) => {
            console.log(response);
            setUserInfo(response.data.data);
            setLoading(false); // Data has arrived, set loading to false
            // console.log(JSON.parse(response.data.data));
            // console.log(response);
            })
            .catch((error) => {
            console.error(error);
            setLoading(false); // Handle errors and set loading to false
        });
    },[]);

    return (
        <div className="ProfileTemplate">
            <div className="PageTitle ml-16 text-xl">
            Update your Profile
            </div>
            {
                loading ? (<div>Loading:</div>):
                (<UserCard fname={userInfo.first_name} lname={userInfo.last_name} email={userInfo.email} phone={userInfo.phone_number}>
                </UserCard>)
            }
        </div>
    )
}

export default ProfileTemplate;