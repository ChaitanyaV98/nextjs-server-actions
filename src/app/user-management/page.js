import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
async function UserManagement() {
  const getListOfUsers = await fetchUsersAction();
  console.log("List of Usersss---", getListOfUsers);
  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem, index) => (
            <SingleUserCard user={userItem} key={index} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}
export default UserManagement;
