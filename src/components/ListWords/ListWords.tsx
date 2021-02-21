// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

// others
import EmptySection from '../../assets/images/empty-section.svg';
import { FilterType } from '../App/constants';

// services
import getFilteredWords from './services/getFilteredWords';

// store
import {
  getListNamesOfCategoriesSelector,
  getListWordsSelector,
} from '../../store/words/selectors';
// styles
import { ListWords as ListWordsStyled } from './ListWordsStyled';

type TProps = {
  filterType: FilterType;
  selectedCategory: number;
  setSelectedCategory: (index: number) => void;
};

const ListWords: FunctionComponent<TProps> = ({
  filterType,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = useSelector(getListNamesOfCategoriesSelector);
  const listWords = useSelector(getListWordsSelector(selectedCategory));

  if (filterType === FilterType.pending) {
    return null;
  }

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
      <div>
        {listWords.length > 0 ? (
          getFilteredWords(filterType, listWords).map(
            ({ english, polish }, index) => (
              <div key={index} className="word-wrapper">
                <p>{english}</p>
                <p>{polish}</p>
                <span>{categories[selectedCategory]}</span>
              </div>
            )
          )
        ) : (
          <div className="empty-section">
            <img alt="empty-section" src={EmptySection} />
          </div>
        )}
      </div>
    </ListWordsStyled>
  );
};

export default ListWords;
