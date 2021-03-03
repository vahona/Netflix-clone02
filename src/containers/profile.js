import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
export default function SelectProfilesContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoUrl: user.photoUrl,
              })
            }
          ></Profiles.User>
          <Profiles.Picture src={user.photoUrl}/>
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.List>
      </Profiles>
    </>
  );
}
