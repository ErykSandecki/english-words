// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// store
import { getListCategoriesSelector } from '../../store/words/selectors';

// styles
import { ListWords as ListWordsStyled } from './ListWordsStyled';

type TProps = {
  selectedCategory: number;
  setSelectedCategory: (index: number) => void;
};

const ListWords: FunctionComponent<TProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = useSelector(getListCategoriesSelector);

  return (
    <ListWordsStyled>
      {/* NAV CATEGORY */}
      <nav>
        {categories.map((name, index) => (
          <p
            className={selectedCategory === index ? 'selected' : ''}
            onClick={() => setSelectedCategory(index)}
            key={index}
          >
            {name}
          </p>
        ))}
      </nav>
    </ListWordsStyled>
  );
};

export default ListWords;
