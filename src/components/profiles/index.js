import React, { Children, Profiler } from 'react'

import { Containter, Title, List, User, Picture, Name } from "./styles/profile";

export default function Profiles() {
    return <Containter {...restProps}>{children}</Containter>
}


Profiles.Title = function ProfilesTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profiles.Picture = function ProfilesPicture({src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}/>;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

