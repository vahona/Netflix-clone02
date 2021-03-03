import React, { Profiler, useState } from 'react'

import {Header} from '../components'

import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase'

import {SelectProfileContainer} from './profile'

import {FooterContainer} from './footer'

export default function BrowseContainer() {
 const [profile, setProfile] = useState({});
 const [category, setCategory] = useState('series');
  const [loading, setLoading] = useState("");
  const [searchtem, setSearchTem] = useState("");

 const user = {
     displayName: "Sugi",
     photoUrl: '1'
 }

    return profile.displayName ? (
      <>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo
                to={ROUTES.HOME}
                src="/images/misc/logo.svg"
                alt="Netflix"
              />
              <Header.TextLink
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory(series)}
              >
                Serie
              </Header.TextLink>
              <Header.TextLink
                active={category === "films" ? "true" : "false"}
                onClick={() => setCategory(films)}
              >
                Serie
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
                      <Header.Search searchTem={searchTem} />
                      <Header.Profile>
                          <Header.Picture src ={user.photoUrl} />
                          <Header.Dropdown>
                              <Header.Group>
                                  <Header.Picture />
                                      <Header.Link>
                                      {user.displayName}
                                      </Header.Link>
                                 
                              </Header.Group>
                              <Header.Group>
                                  <Header.Link onClick={() => FirebaseContext.auth().signOut()}>
                                      Sing out
                                  </Header.Link>
                              </Header.Group>
                          </Header.Dropdown>
                      </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.feature>
            <Header.featureCallOut>Watch Joker Now</Header.featureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton> Play </Header.PlayButton>
          </Header.feature>
        </Header>

        <FooterContainer />
      </>
    ) : (
      <SelectProfileContainer />
    );
}
