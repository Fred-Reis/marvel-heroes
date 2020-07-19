import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

// import { Grid } from 'react-virtualized';

import { Container, Header, Card, BackCard } from './styles';

const Home: React.FC = () => {
  const list = [
    {
      img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      name: 'Spider-Man',
      descricao:
        'Lorem ipsum turpis curabitur pellentesque arcu auctor luctus eretiam erat phasellus enim curabitur placerat phasellus integer odio suscipit senectus eros. luctus eros augue pellentesque id posuere accumsan in sapien pulvinar, tortor donec proin vestibulum arcu cubilia ad duis, nunc eleifend a nibh dolor vel non suscipit. cras mattis etiam duis praesent cubilia aliquet, etiam volutpat phasellus ante metus, etia mpurus vivamus dapibus leo. sed imperdiet maecenas tempor venenatis rhoncus in sodales, faucibus congue facilisis varius himenaeos',
    },
    {
      img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      name: 'Spider-Man2',
      descricao:
        'Lorem ipsum turpis curabitur pellentesque arcu auctor luctus eretiam erat phasellus enim curabitur placerat phasellus integer odio suscipit senectus eros. luctus eros augue pellentesque id posuere accumsan in sapien pulvinar, tortor donec proin vestibulum arcu cubilia ad duis, nunc eleifend a nibh dolor vel non suscipit. cras mattis etiam duis praesent cubilia aliquet, etiam volutpat phasellus ante metus, etia mpurus vivamus dapibus leo. sed imperdiet maecenas tempor venenatis rhoncus in sodales, faucibus congue facilisis varius himenaeos',
    },
    {
      img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      name: 'Spider-Man3',
      descricao:
        'Lorem ipsum turpis curabitur pellentesque arcu auctor luctus eretiam erat phasellus enim curabitur placerat phasellus integer odio suscipit senectus eros. luctus eros augue pellentesque id posuere accumsan in sapien pulvinar, tortor donec proin vestibulum arcu cubilia ad duis, nunc eleifend a nibh dolor vel non suscipit. cras mattis etiam duis praesent cubilia aliquet, etiam volutpat phasellus ante metus, etia mpurus vivamus dapibus leo. sed imperdiet maecenas tempor venenatis rhoncus in sodales, faucibus congue facilisis varius himenaeos',
    },
    {
      img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      name: 'Spider-Man4',
      descricao:
        'Lorem ipsum turpis curabitur pellentesque arcu auctor luctus eretiam erat phasellus enim curabitur placerat phasellus integer odio suscipit senectus eros. luctus eros augue pellentesque id posuere accumsan in sapien pulvinar, tortor donec proin vestibulum arcu cubilia ad duis, nunc eleifend a nibh dolor vel non suscipit. cras mattis etiam duis praesent cubilia aliquet, etiam volutpat phasellus ante metus, etia mpurus vivamus dapibus leo. sed imperdiet maecenas tempor venenatis rhoncus in sodales, faucibus congue facilisis varius himenaeos',
    },
  ];
  const history = useHistory();
  const renderCard = ({ index }: any) => {
    return (
      <Flippy
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ marginRight: 30 }}
      >
        <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
          <Card>
            <img src={list[index].img} alt="Heroe" />

            <h1>{list[index].name}</h1>
          </Card>
        </FrontSide>
        <BackSide style={{ padding: 0, boxShadow: 'none' }}>
          <BackCard>
            <h1>{list[index].name}</h1>

            <div>
              <p>{list[index].descricao}</p>

              <Link to="/">See more</Link>
            </div>
          </BackCard>
        </BackSide>
      </Flippy>
    );
  };

  return (
    <>
      <Header />

      <Container>
        <input type="submit" />
        <input type="text" />

        <List
          style={{ flex: 1, width: '100%' }}
          height={600}
          itemCount={list.length}
          itemSize={30}
          layout="horizontal"
          direction="ltr"
          // onItemsRendered={onItemsRendered}
          // ref={ref}
          width={10000}
        >
          {renderCard}
        </List>

        {/* <Grid
          height={600}
          columnCount={list.length}
          columnWidth={100}
          rowCount={1}
          rowHeight={600}
          cellRenderer={renderCard}
          width={400}
        /> */}
      </Container>
    </>
  );
};

export default Home;
