import React from 'react';
import data from '../../feed/data.json';
import Card from '../../components/Card';

function List() {

  const cards = data.map((value, _) => {
    const {id, title_long, tag, thumb, slug} = value
    return <Card
              key={id}
              id={id}
              image={thumb}
              title_long={title_long}
              tag={tag}
              slug={slug}
            />
  })

  return (
    <div className="row">
      { cards }
    </div>
  );
}

export default List;
