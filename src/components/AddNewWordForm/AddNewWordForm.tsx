// @ts-nocheck
import React, { FunctionComponent, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Modal } from 'antd';

// components
import Input from '../DataEntry/Input/Input';

// styles
import { AddNewWordForm as AddNewWordFormStyled } from './AddNewWordFormStyled';

// store
import {
  addNewWordAction,
  addNewCategoryAction,
} from '../../store/words/actions';
import { getListWordsSelector } from '../../store/words/selectors';

type TProps = {
  isModalVisible: boolean;
  selectedCategory: number;
  setModalVisible: (flag: boolean) => void;
};

const AddNewWordForm: FunctionComponent<TProps> = ({
  isModalVisible,
  selectedCategory,
  setModalVisible,
}) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [english, setEnglish] = useState('');
  const [polish, setPolish] = useState('');
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [isFastMode, setIsFastMode] = useState(false);
  const words = useSelector(getListWordsSelector(selectedCategory));
  const refInputEnglishWord = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (english && polish) {
      if (isNewCategory && category) {
        addNewWordWithCategory();
      } else {
        addNewWord();
      }

      refInputEnglishWord.current.focus();
      clearInputs();

      if (!isFastMode) {
        setModalVisible(false);
      }
    }
  };

  const addNewWord = () => {
    dispatch(
      addNewWordAction({
        categoryIndex: selectedCategory,
        words: [...words, { english, polish }],
      })
    );
  };

  const addNewWordWithCategory = () => {
    dispatch(
      addNewCategoryAction({
        name: category,
        words: [{ english, polish }],
      })
    );
  };

  const onCancelHandler = () => {
    clearInputs();
    setModalVisible(false);
  };

  const clearInputs = () => {
    setEnglish('');
    setPolish('');
    setCategory('');
    setIsNewCategory(false);
  };

  return (
    <Modal
      title="Add New Word"
      visible={isModalVisible}
      okText="Create"
      onOk={onSubmitHandler}
      onCancel={onCancelHandler}
    >
      <AddNewWordFormStyled>
        <form onSubmit={onSubmitHandler}>
          {isNewCategory && (
            <>
              <label>Category Name:</label>
              <Input
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category name:"
                size="middle"
                value={category}
              />
              <br />
              <br />
            </>
          )}
          <label>English word:</label>
          <Input
            onChange={(e) => setEnglish(e.target.value)}
            placeholder="English word:"
            ref={refInputEnglishWord}
            size="middle"
            value={english}
          />
          <br />
          <br />
          <label>Polish word:</label>
          <Input
            onChange={(e) => setPolish(e.target.value)}
            placeholder="Polish word:"
            size="middle"
            value={polish}
          />
          <br />
          <br />
          <Checkbox onChange={() => setIsNewCategory(!isNewCategory)}>
            Add new word with new category.
          </Checkbox>
          <br />
          <br />
          <Checkbox onChange={() => setIsFastMode(!isFastMode)}>
            Fast mode.
          </Checkbox>
          {/* REQUIRED TO WORK FORM HANDLER AFTER PRESS ENTER */}
          <button style={{ display: 'none' }} type="submit" />
        </form>
      </AddNewWordFormStyled>
    </Modal>
  );
};

export default AddNewWordForm;
