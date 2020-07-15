import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Container, Header, Card, BackCard } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const card = () => {
    return (
      <Card>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
          alt="Heroe"
        />

        <h1>Spider-Man</h1>
      </Card>
    );
  };

  return (
    <>
      <Header />

      <Container>
        <input type="submit" />
        <input type="text" />

        <ul>
          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/heroe">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnClick={true}
            flipDirection="horizontal"
            style={{ marginRight: 30 }}
          >
            <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
              <Card>
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
                  alt="Heroe"
                />

                <h1>Spider-Man</h1>
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, boxShadow: 'none' }}>
              <BackCard>
                <h1>Spider-Man</h1>

                <div>
                  <p>
                    Lorem ipsum turpis curabitur pellentesque arcu auctor
                    aliquet elementum ut ante elementum curabitur potenti
                    ultricies, himenaeos etiam erat phasellus enim curabitur
                    placerat phasellus integer odio suscipit senectus eros.
                    luctus eros augue pellentesque id posuere accumsan in sapien
                    pulvinar, tortor donec proin vestibulum arcu cubilia ad
                    duis, nunc eleifend a nibh dolor vel non suscipit. cras
                    mattis etiam duis praesent cubilia aliquet, etiam volutpat
                    phasellus ante metus, etiam purus vivamus dapibus leo. sed
                    imperdiet maecenas tempor venenatis rhoncus in sodales,
                    faucibus congue facilisis varius himenaeos Lorem ipsum
                    turpis curabitur pellentesque arcu auctor aliquet elementum
                    ut ante elementum curabitur potenti ultricies, himenaeos
                    etiam erat phasellus enim curabitur placerat phasellus
                    integer odio suscipit senectus eros. luctus eros augue
                    pellentesque id posuere accumsan in sapien pulvinar, tortor
                    donec proin vestibulum arcu cubilia ad duis, nunc eleifend a
                    nibh dolor vel non suscipit. cras mattis etiam duis praesent
                    cubilia aliquet, etiam volutpat phasellus ante metus, etiam
                    purus vivamus dapibus leo. sed imperdiet maecenas tempor
                    venenatis rhoncus in sodales, faucibus congue facilisis
                    varius himenaeos
                  </p>

                  <Link to="/">See more</Link>
                </div>
              </BackCard>
            </BackSide>
          </Flippy>
        </ul>
      </Container>
    </>
  );
};

export default Home;
