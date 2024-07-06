// Functions, libraries, etc.
import { useEffect, useState } from "react";
import { deleteAccount } from "./adminFunctions/deleteAccount.jsx";
import { getAllAccountDtos } from "./adminFunctions/getAllAccountDtos.jsx";

// Styled components
import { S_Header, S_FunctionalityButton_Box } from "../utils/styledGlobal.jsx";
import {
  S_Accountlist_Table,
  S_AccountList_Row,
  S_Accountlist_Data,
  S_th,
  S_Account_Box,
} from "./styledComponents/styledAdmin";
import { S_EditSvg, S_DeleteSvg } from "../utils/styledSVG.jsx";

import AdminForm from "./AdminForm";

/**
 * Admin component for managing accounts.
 *
 * On mount, displays full list of accounts and buttons for editing and deleting each account.
 *
 * States:
 * - 'accountList':          An array of all account objects retrieved from the database.
 * - 'isBlur':            A boolean that controls the blurring effect of the background during editing.
 * - 'accountEmail':         The email of the account being edited, used to prefill the AdminForm.
 * - 'refreshAccountTable':  A boolean that triggers a refresh of the account list when toggled.
 */

export default function Admin() {
  const [accountList, setAccountList] = useState([]);
  const [isBlur, setIsBlur] = useState(false);
  const [accountEmail, setAccountEmail] = useState(null);
  const [refreshAccountTable, setRefreshAccountTable] = useState(false);

  /**
   * On mount, all accounts are being set to accountList so they can be displayed.
   */

  useEffect(() => {
    getAllAccountDtos(setAccountList);
  }, []);

  /**
   * When a account has been updated or deleted, all account are being set again so they can be displayed.
   */

  useEffect(() => {
    getAllAccountDtos(setAccountList);
  }, [refreshAccountTable]);

  function handleDelete(email) {
    deleteAccount(email, handleAccountCRUDSuccess);
  }

  console.log(refreshAccountTable);

  /**
   * If updating or deleting a account is successful, the handleAccountCRUDSuccess is being toggled, which then triggers the useEffect aboce.
   */

  function handleAccountCRUDSuccess() {
    setRefreshAccountTable((refresh) => !refresh);
  }

  return (
    <>
      <S_Account_Box>
        <S_Header>Accounts</S_Header>
        <S_Accountlist_Table $blur={isBlur === true ? "true" : "false"}>
          <thead>
            <S_AccountList_Row $background={"neutral"}>
              <S_th>Actions</S_th>
              <S_th>Email</S_th>
              <S_th>Roles</S_th>
              <S_th>Number of jobs</S_th>
            </S_AccountList_Row>
          </thead>
          <tbody>
            {/**
             * The array of all accounts are mapped here.
             */}
            {accountList.map((account, index) => (
              <S_AccountList_Row
                key={index}
                $even={index % 2 === 0 ? "true" : "false"}
              >
                {/**
                 * Button for updating the account. Displays a child component and blurs the background.
                 */}
                <S_FunctionalityButton_Box $admin={"true"}>
                  <S_EditSvg
                    // $even={index % 2 === 0 ? "true" : "false"}
                    $admin={"true"}
                    onClick={() => {
                      if (!isBlur) {
                        setIsBlur(true);
                        setAccountEmail(account.email);
                      }
                    }}
                  />
                  <S_DeleteSvg
                    // $even={index % 2 === 0 ? "true" : "false"}
                    onClick={() => (isBlur ? "" : handleDelete(account.email))}
                    $admin={"true"}
                  />
                </S_FunctionalityButton_Box>
                <S_Accountlist_Data $even={index % 2 === 0 ? "true" : "false"}>
                  {account.email}
                </S_Accountlist_Data>
                <S_Accountlist_Data $even={index % 2 === 0 ? "true" : "false"}>
                  {account.roles}
                </S_Accountlist_Data>
                <S_Accountlist_Data $even={index % 2 === 0 ? "true" : "false"}>
                  {account.number_of_jobs}
                </S_Accountlist_Data>
              </S_AccountList_Row>
            ))}
          </tbody>
        </S_Accountlist_Table>
        {/**
         * If the update button is being pressed, a new component show up on top and blurs the background.
         */}
        {isBlur && (
          <AdminForm
            email={accountEmail}
            isBlur={isBlur}
            setIsBlur={setIsBlur}
            handleAccountCRUDSuccess={handleAccountCRUDSuccess}
          />
        )}
      </S_Account_Box>
    </>
  );
}
