import React, {
  useState,
  //  useMemo
} from "react";
import Locale from "../locales/index";
import { ErrorBoundary } from "./error";
import { IconButton } from "./button";
import { SingleInput, List, ListItem, PasswordInput } from "./ui-lib";
import { showToast } from "../components/ui-lib";
import styles from "./login.module.scss";
import { signIn } from "next-auth/react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "admin") {
      showToast("Login success");
    } else {
      showToast("Login failed");
    }
  }

  return (
    <ErrorBoundary>
      <div className={styles["login"]}>
        <div className="txtTitle">ChatGPT For YKPS</div>
        <List>
          <ListItem
            title={Locale.LoginPage.Username.Title}
            subTitle={Locale.LoginPage.Username.SubTitle}
          >
            <SingleInput
              value={username}
              placeholder={Locale.LoginPage.Username.Placeholder}
              onChange={(e) => {
                setUsername(e.currentTarget.value);
                //console.log(e)
                //accessStore.updateCode(e.currentTarget.value);
              }}
            />
          </ListItem>
          <ListItem
            title={Locale.LoginPage.Password.Title}
            subTitle={Locale.LoginPage.Password.SubTitle}
          >
            <PasswordInput
              value={password}
              type="text"
              placeholder={Locale.LoginPage.Password.Placeholder}
              onChange={(e) => {
                // console.log(e)
                setPassword(e.currentTarget.value);
                // accessStore.updateCode(e.currentTarget.value);
              }}
            />
          </ListItem>
          <ListItem>
            <IconButton
              type="primary"
              className="loginBtn"
              text={Locale.LoginPage.Actions.Login}
              onClick={() => {
                handleLogin();
              }}
            />
          </ListItem>
          <ListItem>
            <IconButton
              type="primary"
              text="Login with Office365 Account"
              onClick={() => {
                signIn("azure-ad");
              }}
            />
          </ListItem>
        </List>
      </div>
    </ErrorBoundary>
  );
}
