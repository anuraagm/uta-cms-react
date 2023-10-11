import UserCard from "../../organisms/UserCard/UserCard";

function ProfileTemplate() {
    return (
        <div className="ProfileTemplate">
            <div className="PageTitle ml-16 text-xl">
            Update your Profile
            </div>
            <UserCard></UserCard>
        </div>
    )
}

export default ProfileTemplate;