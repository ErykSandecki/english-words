// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// others
import EmptySection from '../../assets/images/empty-section.svg';

// store
import {
  getListCategoriesSelector,
  getListWordsSelector,
} from '../../store/words/selectors';

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
  const listWords = useSelector(getListWordsSelector(selectedCategory));

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

      {/* WORDS */}
      {listWords.length > 0 ? (
        listWords.map(({ english, polish }, index) => (
          <div key={index} className="word-wrapper">
            <p>{english}</p>
            <p>{polish}</p>
            <span>{categories[selectedCategory]}</span>
          </div>
        ))
      ) : (
        <div className="empty-section">
          <img alt="empty-section" src={EmptySection} />
        </div>
      )}
    </ListWordsStyled>
  );
};

export default ListWords;
