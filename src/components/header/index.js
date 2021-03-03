import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { 
	Background,
	Container,
	Logo,
	ButtonLink,
	Group,
	Feature,
	FeatureCallOut,
	PlayButton ,
	Search, 
	SearchIcon,
	SearchInput,
	Dropdown,
	Picture,
	Profile
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

// create a new element called logo
// use ReachRouterLink
// pass the children to ReachRouterLink

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachRouterLink to={to}>
			<Logo {...restProps} />
		</ReachRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Group= function HeaderGroupe({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Text = function HeaderTexte({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};


Header.Feature = function HeaderFeaturee({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};


Header.FeatureCallOut = function HeaderFeatureCallOute({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};


Header.PlayButton = function HeaderPlayButtone({
  children,
  ...restProps
}) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Search= function HeaderSearch({ searchtem, setSearchTem, ...restProps }) {

	const [searchActive, setSearchActive] = useState(false)

  return <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
		  <img src='/images/icons/search.png' alt="Search"/>
		  </SearchIcon> 
		  <SearchInput 
			value={searchtem}
			onChange={({target}) => setSearchTem(target.value)}
			placeholder="Search files and series"
			active={searchActive}
		  />
  </Search>;
};


Header.Profile = function HeaderProfilee({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdowne({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};


Header.Picture = function HeaderPicturee({src, ...restProps }) {
  return <Picture {...restProps} src={`images/users/${src}.png`} />
};



