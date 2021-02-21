// @ts-nocheck
import React, { FunctionComponent, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Modal } from 'antd';

// components
import Input from '../DataEntry/Input/Input';

// styles
import { AddNewWordForm as AddNewWordFormStyled } from './AddNewWordFormStyled';

// store
import { addNewWordAction } from '../../store/words/actions';
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
  const [english, setEnglish] = useState('');
  const [polish, setPolish] = useState('');
  const [isPCMode, setIsPCMode] = useState(false);
  const words = useSelector(getListWordsSelector(selectedCategory));
  const refInputEnglishWord = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (english && polish) {
      dispatch(
        addNewWordAction({
          categoryIndex: selectedCategory,
          words: [...words, { english, polish }],
        })
      );
      refInputEnglishWord.current.focus();
      clearInputs();

      if (!isPCMode) {
        setModalVisible(false);
      }
    }
  };

  const onCancelHandler = () => {
    clearInputs();
    setModalVisible(false);
  };

  const clearInputs = () => {
    setEnglish('');
    setPolish('');
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
          <Checkbox onChange={() => setIsPCMode(!isPCMode)}>PC mode</Checkbox>
          {/* REQUIRED TO WORK FORM HANDLER AFTER PRESS ENTER */}
          <button style={{ display: 'none' }} type="submit" />
        </form>
      </AddNewWordFormStyled>
    </Modal>
  );
};

export default AddNewWordForm;
