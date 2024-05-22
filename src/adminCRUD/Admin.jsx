// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { deleteUser } from "./adminFunctions/deleteUser";
import { findAllUsers } from "./adminFunctions/findAllUsers";

// Styled components
import { S_Main, S_HeadingBox, S_Title } from "../utils/styledGlobal";
import {
  S_Userlist_Table,
  S_UserList_Row,
  S_Userlist_Data,
  S_th,
  S_Table_Button,
  S_User_Box,
} from "./styledComponents/styledAdmin";
import AdminForm from "./AdminForm";

/**
 * Admin component for managing users.
 *
 * On mount, displays full list of users and buttons for editing and deleting each user.
 *
 * States:
 * - 'userList':          An array of all user objects retrieved from the database.
 * - 'isBlur':            A boolean that controls the blurring effect of the background during editing.
 * - 'userEmail':         The email of the user being edited, used to prefill the AdminForm.
 * - 'refreshUserTable':  A boolean that triggers a refresh of the user list when toggled.
 */

export default function Admin() {
  const [userList, setUserList] = useState([]);
  const [isBlur, setIsBlur] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [refreshUserTable, setRefreshUserTable] = useState(false);

  /**
   * On mount, all users are being set to userList so they can be displayed.
   */

  useEffect(() => {
    findAllUsers(setUserList);
  }, []);

  /**
   * When a user has been updated or deleted, all user are being set again so they can be displayed.
   */

  useEffect(() => {
    findAllUsers(setUserList);
  }, [refreshUserTable]);

  function handleDelete(email) {
    deleteUser(email);
  }

  /**
   * If updating or deleting a user is successful, the handleUserCRUDSuccess is being toggled, which then triggers the useEffect aboce.
   */

  function handleUserCRUDSuccess() {
    setRefreshUserTable((refresh) => !refresh);
  }

  return (
    <>
      <S_Main>
        <S_User_Box>
          <S_HeadingBox>
            <S_Title>Admin</S_Title>
          </S_HeadingBox>
          <S_Userlist_Table $blur={isBlur === true ? "true" : "false"}>
            <thead>
              <S_UserList_Row>
                <S_th>Functionality</S_th>
                <S_th>Email</S_th>
                <S_th>Username</S_th>
                <S_th>Roles</S_th>
              </S_UserList_Row>
            </thead>
            <tbody>
              {/**
               * The array of all users are mapped here.
               */}
              {userList.map((user, index) => (
                <S_UserList_Row key={index}>
                  <S_Userlist_Data>
                    {/**
                     * Button for updating the user. Displays a child component and blurs the background.
                     */}
                    <S_Table_Button
                      onClick={() => {
                        if (!isBlur) {
                          setIsBlur(true);
                          setUserEmail(user.email);
                        }
                      }}
                    >
                      📝
                    </S_Table_Button>
                    {/**
                   * Button for deleting the user.
                   * 
                   * TODO - Add functionality to this button so that it
                    actually deletes the user!
                   */}
                    <S_Table_Button
                      onClick={() => (isBlur ? "" : handleDelete(user.email))}
                    >
                      ❌
                    </S_Table_Button>
                  </S_Userlist_Data>
                  <S_Userlist_Data>{user.email}</S_Userlist_Data>
                  <S_Userlist_Data>{user.username}</S_Userlist_Data>
                  <S_Userlist_Data>{user.roles}</S_Userlist_Data>
                </S_UserList_Row>
              ))}
            </tbody>
          </S_Userlist_Table>
          {/**
           * If the update button is being pressed, a new component show up on top and blurs the background.
           */}
          {isBlur && (
            <AdminForm
              email={userEmail}
              isBlur={isBlur}
              setIsBlur={setIsBlur}
              handleUserCRUDSuccess={handleUserCRUDSuccess}
            />
          )}
        </S_User_Box>
      </S_Main>
    </>
  );
}
